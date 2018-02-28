var websocket;
var websocketRetry = 10;

var websocketHost;

function setWebsocketHost(){
	if(referer.indexOf("iasia99") >= 0){
		websocketHost = "ws://zjsj02.bbxgnxxx.cn/lotteryweb/WebSocketAgent?sid=" + sessionId;
	}else if(referer.indexOf("886win") >= 0){
		websocketHost = "ws://sscws.886winxxx.com/lotteryweb/WebSocketAgent?sid=" + sessionId;
	}else{
		websocketHost = "ws://sscws.mhswxxx.sh.cn/lotteryweb/WebSocketAgent?sid=" + sessionId;
	}
}
function websocketRequest(data){
	if(data.command == "UPDATE" && data.auto != undefined){
		return;
	}
	switch(websocket.readyState){
	case websocket.OPEN:
		if(playerInfo != undefined && playerInfo.status != "LOGOUT"){
			websocket.send(JSON.stringify(data));
		}
		break;
	case websocket.CLOSED:
		$.alert("连接已中断,请尝试重新登录!",function(){logout()});
		console.log("Websocket closed!");
		break;
	case websocket.CONNECTING:
		console.log("Websocket still in connecting state, wait for a while please!");
		break;
	}
}

function connectWebsocket(){
	websocketRetry--;
	if (typeof WebSocket != 'undefined') {
//		websocket = new WebSocket("ws://223.119.0.123:86/lotteryweb/WebSocketAgent?sid=" + sessionId);
		websocket = new WebSocket(websocketHost);
        websocket.onopen = function(evt) {
        	console.log("Websocket connected: ", evt.data);
        	var requestPo = RequestPo.createNew(RequestCommand.PLAYER_INFO, sessionId);
        	requestPo["gameType"] = gameType;
        	httpRequest(requestPo);
        };
        websocket.onmessage = function(evt) {
//            console.log("Got websocket data: ", evt.data);
		var data = JSON.parse(evt.data);
		switch(data.command){
				case RequestCommand.PLAYER_INFO:
					/**
					 * 个人信息
					 */
					playerInfo = data.playerInfo;
					if(playerInfo != null){
							playerType = playerInfo.accountType;
						/**
						 * 用戶名
						 */
							fillPlayerInfo(playerInfo);
							$("#credit").html(playerInfo.credit);
							$("#win").html(playerInfo.dayWinloss);
						/**
						 * 2018 02 25 bug
						 * 設置用戶金額
						 */
							fillDivBalance(playerInfo.balance.balance);
					}
					for(var key in data.gameInfo){
						currentGame[key] = data.gameInfo[key];
						currentGame[key].gameType = key;
						currentGame[key].parameters = {};
						currentGame[key].parameters.roundTime = data.gameInfo[key].roundTime;
					}
					break;
			  case RequestCommand.BET:
//				  detectionBet = {};
	        	if(data.returnCode == 0){
				if(data.bet != undefined){
					fillDivBalance(data.balance);
					for(var i = 0; i < data.bet.betItems.length; i++){
						var betPo = data.bet.betItems[i];
						betPo.lotteryType = data.bet.gameType;
						betPo.betTime = data.bet.issueDate;
						betPo.gameNo = data.bet.gameNo;
						gameBets.unshift(betPo);
					}
				}
				
				if(data.oddChangedBets != undefined){
					var msg = "倍率已变动，是否继续下注？";
					for(var i = 0; i < data.oddChangedBets.length; i++){
						var betPo = data.oddChangedBets[i];
						msg += "\n" + getBetLabel(data.lotteryType, betPo.betOn, betPo.betType) + " @ " + betPo.odd;
						odds[data.lotteryType][betPo.betOn][betPo.betType] = betPo.odd;
					}
					
					$.confirm(msg, function () {
						currentBets = [];
						serialNumArr = [];
						timestamps = Date.parse(new Date());
						$.each(data.oddChangedBets, function(idx, element){
							var bet = [element.betType, element.betOn, element.betAmount, element.odd];
							currentBets[idx] = bet;
						});
						console.log(currentBets);
						cleanInvalidBets();
							
						var requestPo = RequestPo.createNew(RequestCommand.BET, sessionId);
						requestPo["bets"] = $.toJSON(currentBets);
						requestPo["betDetails"] = data.betDetails;
						requestPo["gameType"] = data.lotteryType;
						requestPo["timestamps"] = timestamps;
						httpRequest(requestPo);
					});							
					refreshUiOdd();
				}else{
					if($("#goto-chipin").hasClass("offmusic")){
						musicPlay("#winAudio");
					}
					$.alert("下注成功！");
				}

				if(data.dropOddsList != undefined){
					for(var i = 0; i < data.dropOddsList.length; i++){
						var oddPo = data.dropOddsList[i];
						odds[data.lotteryType][oddPo.betOn][oddPo.betType] = oddPo.odd;
					}
					refreshUiOdd();
				}
				outEffect();
			}else{
				var errMsg = "";
				if(data.returnCode == 7707){
					errMsg = "余额不足！";
				}else{
					var betLabel = getBetLabel(gameType, data.betOn, data.betType, serialNumArr);
					var refNum = (data.errorDetails[1] < 0? 0: data.errorDetails[1]);
					var preInfo = "";
					if(data.returnMsg == "OUT_BALANCE"){
						preInfo = "\n余额: ";
					}else if(data.returnMsg == "OVER_BET"){
						preInfo = "\n还可下注: ";
					}else if(data.returnMsg == "OVER_WIN"){
						preInfo = "\n还可下注: ";
					}else if(data.returnMsg == "OVER_PARTNER_WIN"){
						preInfo = "\n还可下注: ";
					}else if(data.returnMsg == "OVER_NUMBER_BET"){
						preInfo = "\n还可下注: ";
					}else if(data.returnMsg == "TOO_LESS"){
						preInfo = "\n最低下注: ";
					}else if(data.returnMsg == "TOO_MUCH"){
						preInfo = "\n最高下注: ";
					}else if(data.returnMsg == "INVALID_BET"){
						preInfo = "\n"+'注单异常'+": ";
					}else{
						preInfo = "";
					}
					if(preInfo != ""){
						errMsg = BetError[data.returnMsg] + "\n" + betLabel + "\n下注额: " + data.errorDetails[0] + preInfo + refNum;
					}else{
						errMsg = BetError[data.returnMsg]+"\n还可下注"+ ":"+ data.errorDetails[1];
					}
				}
				$.alert(errMsg);
				outEffect();
			}
	        	break;
		case RequestCommand.CURRENT_ORDER:
			setLastBet(data.lastBets);
			renderBetHistory(0);
			break;
		case "DAY_WIN_LOSS":
			$("#shuy").html(parseInt(data.winloss));
			playerInfo.dayWinloss = data.winloss;
			break;
		case RequestCommand.GAME_INFO:
			handleGameInfo(data);
			break;
		case RequestCommand.GAME_RESULT:
			var dataGameType = data.gameType;
			if(currentGame[dataGameType] == undefined){
				currentGame[dataGameType] = {};
				currentGame[dataGameType].parameters = {};
			}
			if(currentGame[dataGameType].lastGameNo == data.gameNo){
				currentGame[dataGameType].lastGameResult = data.result;
				currentGame[dataGameType].roadMap = data.roadMap;
				currentGame[dataGameType].twoSideRanking = data.rankingList;
				currentGame[dataGameType].appearanceList = data.appearanceList;
				currentGame[dataGameType].parameters.roundTime = data.roundTime;
			}
			if(gameType == dataGameType){
				$("#pre_qishu").html(toShortGameNum(data.gameNo));
				renderResult(data.result);
				renderRanking();
/*				renderAppearance();*/
			}
			break;
		case RequestCommand.HISTORY:
			handleHistory(data);
/*			handleHisNumber(data);*/
			break;
		case "LOAD_GAME":
				$.hideIndicator();
			var gameIndex = toGameIndexs(data.gameName);
			if(!(typeof data.content == "undefined" || data.content == null || data.content == "")){
				htmlAreaArr[gameIndex] =data.content.trim().split("&&&");
				renderGames(gameIndex);
			} else {
				$.alert("Game page loading for " + gameName + " failed!");
			}
			handleGameInfo(data);
			break;
		case "GAME_RULE":
        		$.hideIndicator();
			var gameIndex = toGameIndexs(data.gameName);
			if(!(typeof data.content == "undefined" || data.content == null || data.content == "")){
				console.log(data.content);
				$("#ruleHtmlget").html(data.content);
			} else {
				$.alert("Game page loading for " + gameName + " failed!");
			}
			break;
		case "LOGOUT":
        	if(data.returnCode == 501){
        		$.alert("会话已过期,请重新登录!",function(){logout()});
        	}else if(data.returnCode == 502){
        		$.alert("账号被登出,请重新登录!",function(){logout()});
        	}
        	if(mainPath == null || mainPath ==""||mainPath == undefined){
				location.href = referer;
			}else{
				location.href = mainPath;
			}
        	break;
        case "ODDS_DROP":
			odds[data.gameType] = data.odds;
			if(gameType == data.gameType){
				refreshUiOdd();
			}
        	break;
        case "OP_ODDS_DROP":
			odds[data.gameType][data.betOn][data.betType] = data.odds;
			if(gameType == data.gameType){
				refreshUiOdd();
			}
	        break;
        case "BET_ODDS_DROP":
			for(var i = 0; i < data.odds.length; i++){
				var oddPo = data.dropOddsList[i];
				odds[data.gameType][oddPo.betOn][oddPo.betType] = oddPo.odd;
			}
			if(gameType == data.gameType){
				refreshUiOdd();
			}
        	break;
		case RequestCommand.REPORT:
			twoWeekReport = data.report;
			handleReport(data.report);
			break;
		case RequestCommand.REPORT_DETAILS:
			currentPageNum = 0;
			reportDetails = data.reportDetails;
			handleReportDetails(0);
			break;
//		case "SYSTEM_CONFIG":
//	        	currentGame[data.gameType].closeTime = data.closeTime;
//	        	currentGame[data.gameType].gameStatus = data.gameStatus;
//	        	break;
		default:
				console.log("Unhandled command: ", evt.data);
		}
        };
        
        websocket.onerror = function(evt) {
        	console.log("Got websocket error: ", evt.data);
        	if(websocketRetry > 0){
        		connectWebsocket();
        	}
        };
		websocket.onclose = function(evt) {
			if(playerInfo.status != "LOGOUT" && websocketRetry > 0){
	        		connectWebsocket();
			}
        };
	}else{
		console.log("Browser doesn't support HTML5, websocket connecting canceled!");
	}
}

function handleGameInfo(data){
	var dataGameType = data.gameType;
	var dataGameInfo = data.gameInfo;
	if(currentGame[dataGameType] == null){
		currentGame[dataGameType] = dataGameInfo;
	}else{
		currentGame[dataGameType].gameNo = dataGameInfo.gameNo;
		currentGame[dataGameType].gameStatus = data.gameStatus;
		currentGame[dataGameType].lastGameNo = dataGameInfo.lastGameNo;
		currentGame[dataGameType].lastGameResult = dataGameInfo.lastGameResult;
	}
	currentGame[dataGameType].gameType = dataGameType;
	currentGame[dataGameType].parameters.roundTime = dataGameInfo.roundTime;
	currentGame[dataGameType].gameTime = data.gameTime;
	currentGame[dataGameType].closeTime = data.closeTime;
	if(data.roadMap != null){
		currentGame[dataGameType].roadMap = data.roadMap;
		if(gameType == dataGameType){
			renderRoadmap();
		}
	}
	if(data.rankingList != null){
		currentGame[dataGameType].twoSideRanking = data.rankingList;
		if(gameType == dataGameType){
			renderRanking()					
		}
	}
	if(data.appearanceList != null){
		currentGame[dataGameType].appearanceList = data.appearanceList;
/*		if(gameType == dataGameType){
			renderAppearance();
		}*/
	}
	if(data.odds != null){
		odds[dataGameType] = data.odds;
	}
	
	if(gameType == dataGameType){
	//	console.log(data.gameInfo);
	//	console.log(data);
//		refreshUiOdd();
		
		$("#qishu").html(toShortGameNum(dataGameInfo.gameNo));
		$("#pre_qishu").html(toShortGameNum(dataGameInfo.lastGameNo));
		if(dataGameInfo.lastGameResult != null){
			renderResult(dataGameInfo.lastGameResult,toShortGameNum(dataGameInfo.lastGameNo));
		}else{
//			$("#pre_qishu").html("00000");
			$("#kj_result").html("暂无结果");
			pageWhidth(gameType);
		}
		
		if(waitingResultNum[dataGameType] != undefined){
			if(dataGameInfo.lastGameResult == null || dataGameInfo.lastGameNo < waitingResultNum[dataGameType]){
				resultCountDown = resultCountDownInterval;
			}else{
				waitingResultNum[dataGameType] = undefined;
				lastResult[dataGameType] = dataGameInfo.lastGameResult;
				cleanGameBets(dataGalmeType);
			}
		}else if(dataGameInfo.lastGameResult != undefined){
			lastResult[dataGameType] = dataGameInfo.lastGameResult;
		}
		refreshUiOdd();
	}
}

$(document).ready(function(){
	contextPath = $('#contextPath').val();
    /**
	 * token
     * @type {*}
     */
	sessionId = $('#sessionId').val();
	site = $('#site').val();
	ptn = $('#ptn').val();
	referer = $('#referer').val();
	mainPath = $('#mainPath').val();
});
/**
 * 游戏接口
 * @param requestPara
 */
function httpRequest(requestPara){
/*	if(websocket != null && websocket.readyState == websocket.OPEN){
        	websocketRequest(requestPara);
        	$(".testdian").text(".");
        	return;
	}*/
	console.log(requestPara);
	if(playerInfo.balance == undefined || playerInfo.balance == null){
		requestPara["hasPlayerInfo"] = false;
	}else{
		requestPara["hasPlayerInfo"] = true;
	}
	$.ajax({url: contextPath + '/WebClientAgent',
				type: "POST",
				timeout: 15000, 
//				dataType: "HTML",
				data: requestPara, 
				beforeSend : function(){
					if(requestPara.command != RequestCommand.UPDATE){
						if(requestPara.command != RequestCommand.CURRENT_ORDER){
							$.showIndicator();
						}
					}
				},
				success: function(data) {
					$.hideIndicator();
					if(data == undefined){
						$.alert("Can not connect to the server!\nPlease try again later!"); 
						return;
					}
//					data = JSON.parse(data);
					if(data.returnCode != 0){
						switch(data.returnCode){
						case 9:
							$.alert("会话已过期，请重新登入!",function(){
								if(mainPath == null || mainPath ==""||mainPath == undefined){
									location.href = referer;
								}else{
									location.href = mainPath;
								}
								return;
							});
						case 8:
							if(data.command == "BET"){
//								detectionBet = {};
								console.log("BET:code:8");
								$.alert("网络连接超时或余额不足，请查看注单明细！");
								outEffect();
							}else{
								console.log("code:8");
								$.alert("连接超时!");
							}
							return;
						case 15:
							if(data.command != "UPDATE"){
								console.log("code:15");
								$.alert("请勿频繁操作，请稍候再试!");
								return;
							}
						}
					}
					switch(data.command){
					case RequestCommand.GAME_RESULT:
						console.log("GAME_RESULT: "+data.lastResult);
						console.log(data);
						if(data.lastResult == undefined || data.lastResult == null){
								resultCountDown = resultCountDownInterval;
						}else{
							lastResult[data.gameType] = data.lastResult;
							if(data.lastResult.gameType == gameType && waitingResultNum[gameType] == data.lastResult.gameNo){
								waitingResultNum[gameType] = undefined;
								$("#pre_qishu").html(toShortGameNum(data.lastResult.gameNo));
								renderResult(data.lastResult.gameResult,toShortGameNum(data.lastResult.gameNo));
								cleanGameBets(data.gameType);
							}else{
								resultCountDown = resultCountDownInterval;
							}
							/*pushLastResult(lastResult[data.gameType], data.gameType);*/
						}
						
						break;
					case RequestCommand.PLAYER_INFO:
						// 第一次IG进入执行
						playerInfo = data.playerInfo;
						console.log(playerInfo);
						if(playerInfo != null){
							sessionId = data.sessionId;
							site = data.site;
							playerType = playerInfo.accountType;//现金还是信用
							fillPlayerInfo(playerInfo);
						}
						break;
					case RequestCommand.BET:
//						detectionBet = {};
						if(data.returnCode == 0){
							if(data.bet != undefined){
								fillDivBalance(data.balance);
								for(var i = 0; i < data.bet.betItems.length; i++){
									var betPo = data.bet.betItems[i];
									betPo.lotteryType = data.bet.gameType;
									betPo.betTime = data.bet.issueDate;
									betPo.gameNo = data.bet.gameNo;
									gameBets.unshift(betPo);
								}
							}
							
							if(data.oddChangedBets != undefined){
								var msg = "倍率已变动，是否继续下注？";
								for(var i = 0; i < data.oddChangedBets.length; i++){
									var betPo = data.oddChangedBets[i];
									msg += "\n" + getBetLabel(data.lotteryType, betPo.betOn, betPo.betType) + " @ " + betPo.odd;
									odds[data.lotteryType][betPo.betOn][betPo.betType] = betPo.odd;
								}
								
								$.confirm(msg, function () {
									currentBets = [];
									serialNumArr = [];
									timestamps = Date.parse(new Date());
									$.each(data.oddChangedBets, function(idx, element){
										var bet = [element.betType, element.betOn, element.betAmount, element.odd];
										currentBets[idx] = bet;
									});
									console.log(currentBets);
									cleanInvalidBets();
									
									var requestPo = RequestPo.createNew(RequestCommand.BET, sessionId);
									requestPo["bets"] = $.toJSON(currentBets);
									requestPo["betDetails"] = data.betDetails;
									requestPo["gameType"] = data.lotteryType;
									requestPo["timestamps"] = timestamps;
									httpRequest(requestPo);
							      });							
								refreshUiOdd();
							}else{
								if($("#goto-chipin").hasClass("offmusic")){
									musicPlay("#winAudio");
								}
								$.alert("下注成功！");
							}

							if(data.dropOddsList != undefined){
								for(var i = 0; i < data.dropOddsList.length; i++){
									var oddPo = data.dropOddsList[i];
									odds[data.lotteryType][oddPo.betOn][oddPo.betType] = oddPo.odd;
								}
								refreshUiOdd();
							}
							outEffect();
						}else{
							var errMsg = "";
							if(data.returnCode == 7707){
								errMsg = "余额不足！";
							}else{
								if(data.lotteryType == "LOTTO_90"){
									if(data.parameters == "" ||data.parameters == null){
										var betparameters = data.bets;
										var bettet = JSON.parse(betparameters);
										var betLabel = getBetLabel(gameType, data.betOn, data.betType, bettet[i]);
									}else{
										var betparameters = data.parameters;
										var bettet = JSON.parse(betparameters);
										var betLabel = getBetLabel(gameType, data.betOn, data.betType, bettet.betDetails1);
									}
								}else{
										var betLabel = getBetLabel(gameType, data.betOn, data.betType, serialNumArr);
								}
								var refNum = (data.errorDetails[1] < 0? 0: data.errorDetails[1]);
								var preInfo = "";
								if(data.returnMsg == "OUT_BALANCE"){
									preInfo = "\n余额: ";
								}else if(data.returnMsg == "OVER_BET"){
									preInfo = "\n还可下注: ";
								}else if(data.returnMsg == "OVER_WIN"){
									preInfo = "\n还可下注: ";
								}else if(data.returnMsg == "OVER_PARTNER_WIN"){
									preInfo = "\n还可下注: ";
								}else if(data.returnMsg == "OVER_NUMBER_BET"){
									preInfo = "\n还可下注: ";
								}else if(data.returnMsg == "TOO_LESS"){
									preInfo = "\n最低下注: ";
								}else if(data.returnMsg == "TOO_MUCH"){
									preInfo = "\n最高下注: ";
								}else if(data.returnMsg == "INVALID_BET"){
									preInfo = "\n"+'注单异常'+": ";
								}else{
									preInfo = "";
								}
								if(preInfo != ""){
									errMsg = BetError[data.returnMsg] + "\n" + betLabel + "\n下注额: " + data.errorDetails[0] + preInfo + refNum;
								}else{
									BetError[data.returnMsg]+"\n还可下注"+ ":"+ data.errorDetails[1];
								}
							}
							$.alert(errMsg);
							outEffect();
						}
						
						break;
					case RequestCommand.HISTORY:
						handleHistory(data);
						/*handleHisNumber(data);*/
						break;
					case RequestCommand.CURRENT_ORDER:
						setLastBet(data.lastBets);
						renderBetHistory(0);
						break;
					case RequestCommand.REPORT:
						twoWeekReport = data.report;
                        /**
						 * 2018 02 26 bug
						 * 获取账户历史
                         */
						handleReport(data.report);
						break;
					case RequestCommand.REPORT_DETAILS:
						currentPageNum = 0;
						reportDetails = data.reportDetails;
						handleReportDetails(0);
						break;
					case RequestCommand.UPDATE:
                        /**
						 * 进入游戏
                         */
						if(data == undefined){
							return;
						}
						if(data.returnCode == 0){
							if(gameType == data.lotteryType){
								console.log(data.gameInfo[gameType]);
                                /**
								 * $("#qishu") 期数
                                 */
								$("#qishu").html(toShortGameNum(data.gameInfo[gameType].gameNo));
                                /**
								 * 2018 02 24 bug
								 *
								 * 开奖结果
                                 */
								if(data.lastResult != null && data.lastResult.gameResult != null){
									$("#pre_qishu").html(toShortGameNum(data.lastResult.gameNo));
                                    /**
									 * 2018 02 25 bug
									 * 設置期數
                                     */
									renderResult(data.lastResult.gameResult,toShortGameNum(data.lastResult.gameNo));
								}else{
									$("#pre_qishu").html("00000");
									$("#kj_result").html("暂无上期开奖结果");
									pageWhidth(gameType);
								}
								
								if(waitingResultNum[data.lotteryType] != undefined){
									if(data.lastResult == null || data.lastResult.gameNo < waitingResultNum[data.lotteryType]){
										resultCountDown = resultCountDownInterval;
									}else{
										waitingResultNum[data.lotteryType] = undefined;
										lastResult[data.lotteryType] = data.lastResult;
										cleanGameBets(data.lotteryType);
									}
								}else if(data.lastResult != undefined){
									lastResult[data.lotteryType] = data.lastResult;
								}
							}
							if(data.playerInfo != undefined){
								console.log(data.playerInfo);
								if(playerInfo != undefined && playerInfo.status == "SUSPEND"){
									$.alert("您的账号没有时时彩权限，请联系您的上级你！");
									return;
								}
								playerInfo = data.playerInfo;
								playerType = playerInfo.accountType;
							}
							if(data.balance != undefined){
                                /**
								 * 游戏金额
                                 */
								$("#yuer").html(parseInt(data.balance));
							}
							if(data.winLoss != undefined){
                                /**
								 * 输赢金额
                                 */
								console.log(data.winLoss);
								$("#shuy").html(parseInt(data.winLoss));
							}
	//盘口信息
/* * 						alert("data.tray"+data.tray);
							if(data.tray != undefined){
								playerInfo.tray = data.tray;
							}*/
							
							var originalGameStatus;
							if(currentGame[data.lotteryType] != null){
								originalGameStatus = currentGame[data.lotteryType].gameStatus;
							}else{
								originalGameStatus = null;
							}
							if(data.gameInfo != null){
								console.log(data.gameInfo);
								for(var i = 0; i < games.length; i++){
									if(data.gameInfo[games[i]] != null){
										currentGame[games[i]] = data.gameInfo[games[i]];
									}
								}
							}
							if(data.gameInfo[gameType] != undefined){
								console.log("当前游戏状态："+data.gameInfo[gameType].gameStatus);
							}
							if(data.gameInfo[gameType] != null && (data.gameInfo[gameType].gameStatus == "REST" || data.gameInfo[gameType].gameStatus == "MAINTAINING")){
								if($.inArray(data.lotteryType, closedGames) == -1){
									closedGames.push(data.lotteryType);
								}
							}
//							currentGame[data.lotteryType] = data.gameInfo;
							if((data.lotteryType == "KLC" && currentGame["KLC"].parameters != undefined) 
									|| (data.lotteryType == "TJKC" && currentGame["TJKC"].parameters != undefined)
									  || (data.lotteryType == "HNKC" && currentGame["HNKC"].parameters != undefined)
									     || (data.lotteryType == "GXKC" && currentGame["GXKC"].parameters != undefined)
									     || (data.lotteryType == "YNKC" && currentGame["YNKC"].parameters != undefined)
									     || (data.lotteryType == "KLC_90" && currentGame["KLC_90"].parameters != undefined)){
								maxSerial = currentGame[data.lotteryType].parameters.serialLimit;
							}
							//上期开奖结果和期号
							if(data.lastResult != undefined){
								lastResult[data.lotteryType] = data.lastResult;
								/*pushLastResult(data.lastResult,data.lotteryType);*/
							}
							//极速六合号码生肖
							if(data.shengXiaoMap != undefined){
								if(shengXiaoMap == undefined){
									shengXiaoMap = data.shengXiaoMap;
									shengXiaoMap1 = data.shengXiaoMap;	
								}
							}else{
								if(shengXiaoMap1 != undefined){
									shengXiaoMap = shengXiaoMap1;
								}else{
									shengXiaoMpp =  {
													"SHU"	:[00,00,00,00],
													"NIU"	:[00,00,00,00],
													"HU"	:[00,00,00,00],
													"TU"	:[00,00,00,00],
													"LONG"	:[00,00,00,00],
													"SHE"	:[00,00,00,00],
													"MA"	:[00,00,00,00],
													"YANG"	:[00,00,00,00],
													"HOU"	:[00,00,00,00],
													"JI"	:[00,00,00,00],
													"GOU"	:[00,00,00,00],
													"ZHU"	:[00,00,00,00]
												}
								}
							}
							if(gameType == data.lotteryType){
								if(data.gameInfo == undefined || data.gameInfo.gameStatus == "REST" || data.gameInfo.gameStatus == "MAINTAINING"){
									getNextGameInfo();
									return;
								}else if(originalGameStatus == null || (originalGameStatus == "REST" || originalGameStatus == "MAINTAINING") && (data.gameInfo.gameStatus == "BETTING" || data.gameInfo.gameStatus == "CLOSED")){
									var gameIndex = 0;
									gameIndex = toGameIndexs(data.lotteryType);
									playIndex = areaIdxArr[gameIndex];
								}
								
							}
							odds[data.lotteryType] = data.odds;
							
							if(playerInfo != undefined){
								$("#win").html(playerInfo.dayWinloss);
							}
							if(data.gameInfo != undefined && data.gameInfo != null  && gameType == data.lotteryType && currentGame[gameType] != undefined){
								if(currentGame[gameType].gameTime >= currentGame[gameType].closeTime && (data.gameInfo[gameType].gameStatus != "REST" && data.gameInfo[gameType].gameStatus != "MAINTAINING" )){
									refreshUiOdd();
								}else{
									closeGame();
								}
								countDown = updateInterval;
							}
/*							fillDivBalance(data.balance);*/
							if(data.playerInfo != null){
								fillPlayerInfo(data.playerInfo);
								setLastBet(data.playerInfo.lastBet);
							}
//							getNextGameInfo();
							renderRoadmap();// 路子
							renderRanking(gameType);//长龙
						}else{
							countDown = updateFailedRetry;
						}
						break;
					case RequestCommand.LOGOUT:
                        /**
						 * 2018 02 24 bug
						 *
						 * 退出登录
                         */
						if(mainPath == "null" || mainPath == null || mainPath ==""||mainPath == undefined){
							location.href = referer;
						}else{
							location.href = mainPath;
						}
						break;
					case RequestCommand.CHANGE_PW:
						if(data.returnCode == 0){
							$.alert("修改密码成功，请重新登入！",function(){logout()});
						}else{
							var errorMsg = "";
							if(data.returnCode == 1){
								errorMsg = "原密码错误，请重新输入！";
							}else if(data.returnCode == 2){
								errorMsg = "新密码不能更旧密码相同！";
							}
							$.alert("修改密码失败，" + "\n" + errorMsg);
						}
						break;
						default:
//							console.log("Unhandled command: " + data.command + "\nData Details: " + $.toJSON(data));
					}
				},
				error: function (xhr, errorStatus, error) {
					$.hideIndicator();
					if(requestPara["command"] == "BET"){
						$.alert("网络连接超时或余额不足，请查看注单明细！");
						outEffect();
					}
                }
	});
};





//var countdownTimer = setTimeout(setCountDownStr, 1000);
var countOrder = 0;//排除一些浏览器加载顺序不同造成请求顺序不同
var countdownTimer = self.setInterval("setCountDownStr()",1000);//时间

function setCountDownStr(){
	if(currentGame != null){
		if(countDown == 0){
			if(countOrder == 1){
				updateGameInfo(gameType,"");
			}
		} else if(countDown > 0){
			$("#refresh").html(countDown);
		}
		countDown--;
		
		if(resultCountDown >= 0){
			resultCountDown--;
			if(resultCountDown == -1 && waitingResultNum[gameType] != undefined){
				getGameResult(waitingResultNum[gameType]);
			}
		}
		for(var i = 0; i < games.length; i++){
			var game = currentGame[games[i]];
			if(game != null && game.gameStatus != undefined && game.gameStatus != "REST" && game.gameStatus != "MAINTAINING"){
				if(game.gameTime == 0){
					if(gameType == game.gameType){
						outEffect();
						readyToOpen = true;
						countDown = 6;
						resultCountDown = resultCountDownInterval;
					}else{
						game.gameTime = parseInt(game.parameters.roundTime);
					}
				}else if(game.gameTime == game.closeTime){
					if(game.gameType == gameType){
						closeGame();
						outEffect();
					}
					$(".anvTime_" + game.gameType).html("已封盘");
				}else if(game.gameTime < game.closeTime){
					$(".anvTime_" + game.gameType).html("已封盘");
				}
				if(game.gameTime >= 0){
					var minute = Math.floor(game.gameTime / 60);
					var second = game.gameTime % 60;

					if(game.gameTime > game.closeTime){
						var closeSecond = game.gameTime - game.closeTime;
						var closeMinute = Math.floor(closeSecond / 60);
						if(game.gameType == gameType){
							if((closeSecond <=10) && $("#goto-chipin").hasClass("offmusic")){
								musicPlay("#duAudio");
							}
							$("#t-close").html(fillZero(closeMinute) + ":" + fillZero(closeSecond % 60));
							$("#t-open").html(fillZero(minute) + ":" + fillZero(second));
						}
						$(".anvTime_" + game.gameType).html(fillZero(closeMinute) + ":" + fillZero(closeSecond % 60));
					}else{
						 if(game.gameTime < game.closeTime){
							if(game.gameType == gameType){
								$("#t-close").html("已封盘");
								if((game.gameTime ==0) && $("#goto-chipin").hasClass("offmusic")){
									musicPlay("#openAudio");
								}
								$("#t-open").html(fillZero(minute) + ":" + fillZero(second));
							}
						 }
					}
				}				
				game.gameTime -= 1;
			}else if((game != null && game.gameStatus != undefined) && (game.gameStatus == "REST" || game.gameStatus == "MAINTAINING")){
				$(".anvTime_" + game.gameType).html("已关盘");
				if(game.gameType == gameType){
					if(game.gameStatus == "REST" || game.gameStatus == "MAINTAINING"){
						$("#t-close").html("已关盘");
						$("#t-open").html("00:00");
					} 
				} 
			}
		}
	}
}
/**
 * 进入游戏页面
 * @param navType
 * @param optiType
 */
function navGames(navType,optiType){
	$.closePanel("#panel-js-left");//关闭左侧栏
	gameType = navType;//存每次点击的游戏
	loadingGame = navType;
	var options = playOptions[optiType];
	console.log(options );
/*	$("#mainpage").hide();*/
	$("#mainContent").html("");
	$("#gamepage").show();
	$("#titleName").text(lotteryTitles[navType]);
	if($("#betMainPage").css("display") == "block"){
		 footerPageClick();
	}
	console.log(gameType);
    /**
	 * 2018 02 23(bug)
	 * 游戏名字
     */
	$("#selectMainId").text(lotteryTitles[navType]);//做一个文字转换(英文切转成中文)，options(游戏里面的小页面如PK10里面的{"0":"两面盘"},{"1":"亚冠和"},{"2":"1至10名)
    /**
	 * 2018 02 23(bug)
	 * title
	 *
     */
	$("#sidebarPagename").text(options[playTypeIdx[toGameIndexs(gameType)]][playTypeIdx[toGameIndexs(gameType)]]);//playTypeIdx（游戏页面下标），toGameIndexs（游戏循环方法）
    /**
	 * 2018 02 23(bug)
	 * title value
     */
	$("#sidebarPagename").attr("value",playTypeIdx[toGameIndexs(gameType)]);//游戏页面下标循环方法传递索引值，给value.

	$("#mainav").html("");
/*	$(".rightImge").hide();*/
    /**
	 * 2018 02 23 bug
	 * title 循环生成列表
     */
	if(options.length > 1){
		var freeHtml = '<div class="mainNav-list">';
		for(var i = 0;i< options.length;i++){
			if(i == playTypeIdx[toGameIndexs(gameType)]){
				freeHtml += '<span><a class="v-link-active" value = "'+i+'">'+options[i][i]+'</a></span>';
			}else{
				freeHtml += '<span><a value = "'+i+'">'+options[i][i]+'</a></span>';
			}
		}
		freeHtml += '</div></div>';
		$("#mainav").html(freeHtml);
	}
    /**
	 *
     */

	$("#gamepage").scrollTo({toT : 0}, 100);
	var gameIndex = toGameIndexs(navType);
	if(htmlAreaArr[gameIndex] == undefined){
		loadGame(navType);//页面效果
	}
    /**
     * 2018 02 23 bug
     * 加载游戏页面
     * @param gameName
     */
	renderGames(gameIndex);
    /**
     * 2018 02 24 bug
     * 验证是否获取游戏数据
     * @param type
     * @param auto
     */
	updateGameInfo(navType,"auto");
/*	refreshUiOdd();*/
/*	getGameHistroy(navType, 0);*/
    /**
     * 2018 02 24 bug
     * 底部Nav button
     * @param type
     */
	wayButton(navType);
}
/**
 * 2018 02 27 bug
 * 首次默认加载北京 PK10
 * @param navType
 * @param optiType
 * @constructor
 */
function BJCGames(navType,optiType){
	/*$.closePanel("#panel-js-left");//关闭左侧栏
*/	gameType = navType;//存每次点击的游戏
	loadingGame = navType;
	var options = playOptions[optiType];
	console.log(options );
/*	$("#mainpage").hide();*/
	$("#mainContent").html("");
	$("#gamepage").show();
	$("#titleName").text(lotteryTitles[navType]);
	if($("#betMainPage").css("display") == "block"){
		 footerPageClick();
	}
	console.log(gameType);
	$("#selectMainId").text(lotteryTitles[navType]);//做一个文字转换(英文切转成中文)，options(游戏里面的小页面如PK10里面的{"0":"两面盘"},{"1":"亚冠和"},{"2":"1至10名)
	$("#sidebarPagename").text(options[playTypeIdx[toGameIndexs(gameType)]][playTypeIdx[toGameIndexs(gameType)]]);//playTypeIdx（游戏页面下标），toGameIndexs（游戏循环方法）
	$("#sidebarPagename").attr("value",playTypeIdx[toGameIndexs(gameType)]);//游戏页面下标循环方法传递索引值，给value.
	$("#mainav").html("");
/*	$(".rightImge").hide();*/
	if(options.length > 1){
		var freeHtml = '<div class="mainNav-list">';
		for(var i = 0;i< options.length;i++){
			if(i == playTypeIdx[toGameIndexs(gameType)]){
				freeHtml += '<span><a class="v-link-active" value = "'+i+'">'+options[i][i]+'</a></span>';
			}else{
				freeHtml += '<span><a value = "'+i+'">'+options[i][i]+'</a></span>';
			}
		}
		freeHtml += '</div></div>';
		$("#mainav").html(freeHtml);
	}
	$("#gamepage").scrollTo({toT : 0}, 100);
	var gameIndex = toGameIndexs(navType);
	if(htmlAreaArr[gameIndex] == undefined){
        /**
		 * 2018 02 23 bug
		 * 获取游戏页面
         */
		loadGame(navType);//页面效果
	}
	renderGames(gameIndex);
	updateGameInfo(navType,"auto");
/*	refreshUiOdd();*/
/*	getGameHistroy(navType, 0);*/
	wayButton(navType);
}


function getPlayerInfo(){
//	console.log("Getting player info...");
/*	connectWebsocket();*/
	var requestPo = RequestPo.createNew(RequestCommand.PLAYER_INFO, sessionId);
	requestPo["gameType"] = gameType;
	requestPo["rand"] = Math.random();
	httpRequest(requestPo);
	updateGameInfo(loadingGame);
	var lotteryPage = GetQueryString("lotteryPage");//获取url lotteryPage值
	var lobbyNum = GetQueryString("LOBBY");//获取url LOBBY 值
	loadingGame = allGames[lotteryPage];//获取游戏的名字
	if(lobbyNum == 1){
		if(lotteryPage != null|| lotteryPage != ""){
			//alert(GetQueryString("lotteryPage"));
			if(lotteryPage == "1" || lotteryPage == "5" || lotteryPage == "6" || lotteryPage == "7" || lotteryPage == "8" || lotteryPage == "48" || lotteryPage == "50"){
			navGames(loadingGame,"SSC");
			}else if(lotteryPage == "2" || lotteryPage == "16" || lotteryPage == "47" || lotteryPage == "49"){
				navGames(loadingGame,"PK10");
				
			}else if(lotteryPage == "9"){
				navGames(loadingGame,"SHSL");
				
			}else if(lotteryPage == "0" || lotteryPage == "12" || lotteryPage == "10" || lotteryPage == "51" || lotteryPage == "37" || lotteryPage == "4"){
				navGames(loadingGame,"KLC");
				
			}else if(lotteryPage == "11"){
				navGames(loadingGame,"GXKC");
				
			}else if(lotteryPage == "17" || lotteryPage == "18" || lotteryPage == "19" || lotteryPage == "20" || lotteryPage == "21" || lotteryPage == "22" || lotteryPage == "23" || lotteryPage == "24" || lotteryPage == "25" || lotteryPage == "52"){
				navGames(loadingGame,"XZ115");
				
			}else if(lotteryPage == "26" || lotteryPage == "29" || lotteryPage == "31" || lotteryPage == "33" || lotteryPage == "32" || lotteryPage == "54"){
				navGames(loadingGame,"KL8");
				
			}else if(lotteryPage == "3" || lotteryPage == "13" || lotteryPage == "14" || lotteryPage == "53"){
				navGames(loadingGame,"K3");
				
			}else if(lotteryPage == "35" || lotteryPage == "36" || lotteryPage == "55"){
				navGames(loadingGame,"3D");
				
			}else if(lotteryPage == "38" || lotteryPage == "41" || lotteryPage == "43" || lotteryPage == "44" || lotteryPage == "45" || lotteryPage == "56"){
				navGames(loadingGame,"PCEGG");
				
			}else if(lotteryPage == "57"){
				navGames(loadingGame,"LOTTO_90");
			}else{
				BJCGames('BJC','PK10');
			}
		}else{
			BJCGames('BJC','PK10');
		}
	}
	countOrder = 1;
	/*$.openPanel("#panel-js-left");*/
}
// 获取url lotteryPage 值
function GetQueryString(name){
	var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
	var r = window.location.search.substr(1).match(reg);
	if(r!=null)return  unescape(r[2]); return null;
}
/**
 * 2018 02 23 bug
 * 播放audio
 */
function addAudio(){
	var audioHmtl = '<audio id="chatAudio"><source src="./mobile/plugin/mp3/chipin.ogg" type="audio/ogg"><source src="./mobile/plugin/mp3/chipin.mp3" type="audio/mpeg"><source src="./mobile/plugin/mp3/chipin.wav" type="audio/wav"></audio>';
		audioHmtl += '<audio id="duAudio"><source src="./mobile/plugin/mp3/du.ogg" type="audio/ogg"><source src="./mobile/plugin/mp3/du.mp3" type="audio/mpeg"><source src="./mobile/plugin/mp3/du.wav" type="audio/wav"></audio>';
		audioHmtl += '<audio id="winAudio"><source src="./mobile/plugin/mp3/win.ogg" type="audio/ogg"><source src="./mobile/plugin/mp3/win.mp3" type="audio/mpeg"><source src="./mobile/plugin/mp3/win.wav" type="audio/wav"></audio>';
		audioHmtl += '<audio id="openAudio"><source src="./mobile/plugin/mp3/open.ogg" type="audio/ogg"><source src="./mobile/plugin/mp3/open.mp3" type="audio/mpeg"><source src="./mobile/plugin/mp3/open.wav" type="audio/wav"></audio>';
	$(audioHmtl).appendTo('.wrapper');
}

function musicPlay(playId){
	var music = $(playId)[0];
	music.pause();
	music.currentTime = 0;//播放之前先复位，非常重要
	music.play();
//	alert(music.duration*1000);//获取音频长度
	if(navigator.userAgent.indexOf('UCBrowser') > -1) {
		if(playId == "#winAudio"){
			setTimeout(function(){music.pause()},330);
		}else if(playId == "#duAudio"){
			setTimeout(function(){music.pause()},1140);
		}else if(playId == "#winAudio"){
			setTimeout(function(){music.pause()},1770);
		}else if(playId == "#chatAudio"){
			setTimeout(function(){music.pause()},1250);
		}
	}
}
// http://gbksscsw.iasia99.com/lotteryweb/mobile/loadGame.htm?0.3657386338897448ok
/**
 * 游戏规则
 * @param gameName
 */

function ruleGetHtml(gameName){
/*	if(websocket != null){
		htmlLoading = true;
		$.showIndicator();
		var requestPo = RequestPo.createNew("GAME_RULE", sessionId);
		requestPo["gameName"] = gameName;
		websocketRequest(requestPo);
		return;
	}*/
    var url =  "rulepage/"+gameName+"loadRule.html";
    $.ajax({
        url:url+"?" + Math.random() + "ok",
        async:false,
        cache:false,
        success:function(data){
            // $(container).html(data);
            $.hideIndicator();
            $("#ruleHtmlget").html(data);
        },
        error : function(xhr, errorStatus, error){
            $.hideIndicator();
            // console.log(loadingGame + " pages loading error: " + errorStatus + "\n" + xhr.responseText + "\n" + error);
			/*$.alert(loadingGame + " pages loading error: " + errorStatus + "\n" + xhr.responseText + "\n" + error);*/
        }
    })
	// var url = contextPath + "/mobile/loadRule.htm";
	//
	// $.ajax( {
	// 	type : "post",
	// 	url : url + "?" + Math.random() + "ok",
	// 	data : {"gameName":gameName},
	// 	dataType : "html",
	// 	async: false,
	// 	beforeSend : function(){
	// 		htmlLoading = true;
	// 		$.showIndicator();
	// 	},
	// 	success : function(data){
	// 		$.hideIndicator();
	// 		$("#ruleHtmlget").html(data);
	// 	},
	// 	error : function(xhr, errorStatus, error){
	// 		$.hideIndicator();
	// 		console.log(loadingGame + " pages loading error: " + errorStatus + "\n" + xhr.responseText + "\n" + error);
	// 		/*$.alert(loadingGame + " pages loading error: " + errorStatus + "\n" + xhr.responseText + "\n" + error);*/
	// 	}
	// });
}
/**
 * 2018 02 23 bug
 * 加载游戏页面
 * @param gameName
 */
function loadGame(gameName){
/*	if(websocket != null && websocket.readyState == websocket.OPEN){
		htmlLoading = true;
		$.showIndicator();
		var requestPo = RequestPo.createNew("LOAD_GAME", sessionId);
		requestPo["gameName"] = gameName;
		websocketRequest(requestPo);
		return;
	}
	console.log(gameName);*/
	loadingGame = gameName;
	var url =  "page/"+gameName+"loadGame.html";
    $.ajax({
        url:url+"?" + Math.random() + "ok",
        async:false,
        cache:false,
        success:function(data){
            // $(container).html(data);
            $.hideIndicator();
            var gameIndex = toGameIndexs(gameName);
            if(!(typeof data == "undefined" || data == null || data == "")){
                htmlAreaArr[gameIndex] =data.trim().split("&&&");
                refreshUiOdd();
            } else {
                $.alert("Game page loading for " + gameName + " failed!");
            }
        },
        error : function(xhr, errorStatus, error){
            $.hideIndicator();
            console.log(loadingGame + " pages loading error: " + errorStatus + "\n" + xhr.responseText + "\n" + error);
			/*$.alert(loadingGame + " pages loading error: " + errorStatus + "\n" + xhr.responseText + "\n" + error);*/
        }
    })
    // loadingGame = gameName;
    // var url = contextPath + "/mobile/loadGame.htm";
	// $.ajax( {
	// 	type : "post",
	// 	url : url + "?" + Math.random() + "ok",
	// 	data : {"gameName":gameName},
	// 	dataType : "html",
	// 	async: false,
	// 	beforeSend : function(){
	// 		htmlLoading = true;
	// 		$.showIndicator();
	// 	},
	// 	success : function(data){
	// 		$.hideIndicator();
	// 		var gameIndex = toGameIndexs(gameName);
	// 		if(!(typeof data == "undefined" || data == null || data == "")){
	// 			htmlAreaArr[gameIndex] =data.trim().split("&&&");
	// 			refreshUiOdd();
	// 		} else {
	// 			$.alert("Game page loading for " + gameName + " failed!");
	// 		}
	// 	},
	// 	error : function(xhr, errorStatus, error){
	// 		$.hideIndicator();
	// 		console.log(loadingGame + " pages loading error: " + errorStatus + "\n" + xhr.responseText + "\n" + error);
	// 		/*$.alert(loadingGame + " pages loading error: " + errorStatus + "\n" + xhr.responseText + "\n" + error);*/
	// 	}
	// });
}

function renderGames(gameIndex){
	if(htmlAreaArr[gameIndex] == undefined){
        /**
		 * 2018 02 23 bug
         *  判断 页面是或存在,不存在就加载
         *
         */
		loadGame(gameNameArrs[gameIndex]);
		return;
	}else{
        /**
		 * 2018 02 23 bug
		 * 获取数组中页面 执行方法
         */
		console.log(gameIndex);
		console.log(playTypeIdx[gameIndex]);
		// console.log(123456)
        /**
		 * htmlAreaArr 取出数组内容/ #mainContent 显示游戏页面
         */
		$("#mainContent").html(htmlAreaArr[gameIndex][playTypeIdx[gameIndex]]);//
		var typeindex = playTypeIdx[gameIndex];
		console.log(gameType);
        /**
		 * 广东快乐十分 广东快乐十分/幸运农场 天津快乐十分 湖南快乐十分
          */
		if((gameType == "KLC" || gameType == "XYC" || gameType == "TJKC" || gameType == "HNKC" || gameType == "GXKC" || gameType == "YNKC" || gameType == "KLC_90")&& playTypeIdx[[toGameIndexs(gameType)]] == 10){
			renderklcPage();
		}else if(gameType == "LOTTO_90"){
            /**
			 * 六合彩 （专用）生成页面
             * @type {string}
             */
			betMethods = "FUSHI";
            /**
			 * areaIdx 获取title value值
             * @type {*}
             */

			var areaIdx = $("#sidebarPagename").attr("value");
			if(gameType == "LOTTO_90" && (areaIdx == "5" || areaIdx == "10" || areaIdx == "11" || areaIdx == "12")){
				$(".sx_map").each(function(){
                    /**
					 * 获取name 值
					 * 用name转换生肖文字 lotto_sx[]
					 * @type {*}
                     */
					var sxname = $(this).attr("name");
					var sxHtml = "";
					sxHtml += "<h3 class=''>"+lotto_sx[sxname]+"</h3>";
			      	sxHtml += "<i class='ballS fc-white LOTTO_90B"+shengXiaoMap[sxname][0]+"'>"+shengXiaoMap[sxname][0]+"</i>";
			      	sxHtml += "<i class='ballS fc-white LOTTO_90B"+shengXiaoMap[sxname][1]+"'>"+shengXiaoMap[sxname][1]+"</i>";
			      	sxHtml += "<i class='ballS fc-white LOTTO_90B"+shengXiaoMap[sxname][2]+"'>"+shengXiaoMap[sxname][2]+"</i>";
			      	sxHtml += "<i class='ballS fc-white LOTTO_90B"+shengXiaoMap[sxname][3]+"'>"+shengXiaoMap[sxname][3]+"</i>";
			      	if(shengXiaoMap[sxname].length > 4){
			      		if(areaIdx == "10" && shengXiaoMap[sxname][4] == 49){
			      			sxHtml += "<i class='ballS fc-white LOTTO_90B00'></i>";
			      		}else{
			      			sxHtml += "<i class='ballS fc-white LOTTO_90B"+shengXiaoMap[sxname][4]+"'>"+shengXiaoMap[sxname][4]+"</i>";
			      		}
			      	}else{
			      		sxHtml += "<i class='ballS fc-white LOTTO_90B00'></i>";
			      	}
			      	$(this).html(sxHtml);
				});
			}
		}
	}
}
/**
 * 2018 02 24 bug
 *
 */
function renderklcPage() {
    /**
	 * 获取 #sidebarPagename title  value
     * @type {*}
     */
	var selectval = $("#sidebarPagename").attr("value");
    /**
	 * 刷新游戏页面 titile text
     */
	if(parseInt(selectval) >= 10){
		var playText = playOptions["KLC"][selectval][selectval];
		console.log(playText);
		$("#serialItem").html(playText);
	}
}
function getGameResult(gameNum){
	var requestPo = RequestPo.createNew(RequestCommand.GAME_RESULT, sessionId);
	requestPo["gameNo"] = gameNum;
	requestPo["gameType"] = gameType;
	httpRequest(requestPo);
}
/**
 * 退出登录
 */
function logout(){
//	console.log("Ready to logout player");
/*	if(websocket != null){
		var requestPo = RequestPo.createNew("LOGOUT", sessionId);
		websocketRequest(requestPo);
	}else{
		var requestPo = RequestPo.createNew(RequestCommand.LOGOUT, sessionId);
		httpRequest(requestPo);
	}*/
	var requestPo = RequestPo.createNew(RequestCommand.LOGOUT, sessionId);
	httpRequest(requestPo);
}
/**
 * 封盘
 * @param type
 */
function closeGame(type){
	if($("#t-close").html() != "已封盘"){
		$("#t-close").html("已封盘");
	}
	$("#mainContent .odds").each(function(e){
		$(this).html("--");
	});
}
/**
 * 2018 02 24 bug
 * 验证是否进入游戏
 * @param type
 * @param auto
 */
function updateGameInfo(type,auto){
	if(playerInfo != undefined && playerInfo.status == "SUSPEND"){
		//SUSPEND状态是指账号不能用的意思
		$.alert("您的账号没有时时彩权限，请联系您的上级！");
		return;
	}
	if(type == undefined || type == null){
		type = gameType;
	}
	if(type == ""){
		return;
	}
	var requestPo = RequestPo.createNew(RequestCommand.UPDATE, sessionId);
	if(auto == "auto"){
		requestPo["auto"] = "AUTO";
	}
	requestPo["lotteryType"] = type;
	httpRequest(requestPo); 
 }
/**
 * 2018 02 25 bug
 * 用户名字
 * @param info
 */
function fillPlayerInfo(info){
	console.log(info);
	$("#accountInfo,#mainaccountInfo").html(info.userName + " ~ " + trayStr[info.tray] + "盘");
//	$("#yuer,#mainyuer").html(parseInt(info.balance.balance));
//	$("#shuy").html(parseInt(info.dayWinLoss));
}

function changePlayType(selectval){
	console.log(selectval);
	var playIndex = toGameIndexs(gameType);
	playTypeIdx[playIndex] = parseInt(selectval);//Must do this before render game.
	areaIdxArr[playIndex] = selectval;
	if(gameType == "KLC" || gameType == "XYC" || gameType == "TJKC" || gameType == "HNKC" || gameType == "GXKC"|| gameType == "YNKC" || gameType == "KLC_90"){
		var ballNum = parseInt(selectval);
		if(ballNum >= 10){
			playTypeIdx[playIndex] = 10;
		}
		if(ballNum >= 6){
			$(".d_t").hide();
		}else{
			$(".d_t").show();
		}
	}else if((gameType == "BJC" || gameType == "XYFT" || gameType == "JSSC"|| gameType == "JSSC60")){
		var ballNum = parseInt(selectval);
		if(ballNum >= 7){
			$(".d_t").hide();
		}else{
			$(".d_t").show();
		}
	}
	renderGames(playIndex);
	refreshUiOdd();
/*	
	if((gameType == "KLC" && playTypeIdx[0] == 3) || (gameType == "XYC" && playTypeIdx[3] == 3)
			||(gameType == "TJKC" && playTypeIdx[9] == 3) || (gameType == "HNKC" && playTypeIdx[10] == 3) ){
		
		refreshUiOdd();
		renderRoadmap();//路子
		renderRanking();//长龙
		renderAppearance();//号码路子
	}else{
		refreshUiOdd();
		renderRoadmap();//路子
		renderRanking();//长龙
		renderAppearance();//号码路子
	}*/
}
/**
 * 2018 02 25 bug
 *用户 金额
 * @param balance
 */
function fillDivBalance(balance){
	if(balance != null || balance != undefined){
		$("#yuer").html(parseInt(balance));
	}
}
/**
 * 2018 02 24 bug
 * 游戏封盘 检查
 */
function refreshUiOdd() {
	var game = currentGame[gameType];
	console.log(game);
	if(game == undefined){
//		$.alert("加载赔率失败，请重新登入！",function(){logout()});
		return;
	}
	if(game.gameTime <= game.closeTime ){
		$("#mainContent .odds").each(function(k, v){
				$(this).html("--");
		});
		return;
	}
	var oddMap = odds[gameType];
	console.log(oddMap);
	if(oddMap != undefined){
		if((gameType == "KLC" || gameType == "XYC" || gameType == "TJKC" || gameType == "HNKC" || gameType == "GXKC"|| gameType == "YNKC" || gameType == "KLC_90") && playTypeIdx[[toGameIndexs(gameType)]] == 10){
			var selectval = $("#sidebarPagename").attr("value");
			$("#mainContent .odds").each(function(k, v){
					$(this).html(oddMap["SERIAL"][klcpalyType[(parseInt(selectval)-10)]]);
			});
		}else{
			$("#mainContent .odds").each(function(k, v){
				if($(this).attr("betOn") != ""){
					$(this).html(oddMap[$(this).attr("betOn")][$(this).attr("betType")]);
				}
			});
		}
	}
}
/**
 * 2018 02 25 bug
 * 显示期数 历史记录
 * @param gameResult
 * @param gameResultNo
 */
function renderResult(gameResult,gameResultNo){
//	console.log(gameResult);
//	console.log(gameType);
	pageWhidth(gameType);
	var spans = "";
/*	$("#gamepageContent").css("top","8.3rem");//应对快乐8开奖结果高度
*/	
	$(".gameNavlssue").removeClass("padding_divtop");
	if(gameType == "SSC" || gameType == "TJSC" || gameType == "XJSC" || gameType == "JXSC" || gameType == "YNSC" || gameType == "SHSC"|| gameType == "JSCQ"||gameType == "JSCQ60"){
		for(var i = 0; i < gameResult.length; i++){
			spans += "<i>" + gameResult[i] + "</i>";
		}
	}else if(gameType == "KLC" || gameType == "TJKC" || gameType == "HNKC" || gameType == "GXKC" || gameType == "YNKC" || gameType == "KLC_90"){
		for(var i = 0; i < gameResult.length; i++){
			spans += "<i>" + gameResult[i] + "</i>";
		}
	}else if(gameType == "BJC"|| gameType == "XYFT" || gameType == "JSSC"|| gameType == "JSSC60"){
		for(var i = 0; i < gameResult.length; i++){
			spans += "<i>" + gameResult[i] + "</i>";
		}
//		console.log(spans);
	}else if(gameType == "JSC" || gameType == "AHK3" || gameType == "JLK3" || gameType == "GXK3"|| gameType == "JSC_90"){
		for(var i = 0; i < gameResult.length; i++){
			spans += "<i>" + gameResult[i] + "</i>";
		}
	}else if(gameType == "XYC"){
		for(var i = 0; i < gameResult.length; i++){
			spans += "<i>" + gameResult[i] + "</i>";
		}
	}else if(gameType == "GD115"||gameType == "JX115"||gameType == "SD115"||gameType == "BJ115"||gameType == "SH115"||gameType =="LN115"||gameType == "HB115"||gameType == "JS115"||gameType == "AH115"||gameType == "GD115_90"){
		for(var i = 0; i < gameResult.length; i++){
			spans += "<i>" + gameResult[i] + "</i>";
		}
	}else if(gameType == "BJKL8"||gameType == "AZKL8"||gameType == "JNDKL8"||gameType == "HGKL8"||gameType == "JNDDKL8"||gameType == "SLFKKL8"||gameType == "METKL8"||gameType == "TWBGKL8"||gameType == "DJKL8"||gameType == "BJKL8_90"){
		if(gameResult.length > 20){
			for (var i = 0; i < gameResult.length; i++) {
				if (i >= 20) {
					if(i == 9){
						spans += "<i>" + gameResult[i] + "</i><br>";
					}else{
						spans += "<i>" + gameResult[i] + "</i>";
					}
				}
			}
		}else{
			for(var i = 0; i < gameResult.length; i++){
				if(i == 9){
					spans += "<i>" + gameResult[i] + "</i><br>";
				}else{
					spans += "<i>" + gameResult[i] + "</i>";
				}
			}
		}
/*		$("#gamepageContent").css("top","8.5rem");*/
		$(".gameNavlssue").addClass("padding_divtop");
	}else if(gameType == "FC3D"||gameType == "TC3D"|| gameType == "FC3D_90"){
		for(var i = 0; i < gameResult.length; i++){
			spans += "<i>" + gameResult[i] + "</i>";
		}
	}else if(gameType == "BJKL8_PCEGG"||gameType == "AZKL8_PCEGG"||gameType == "JNDKL8_PCEGG"||gameType == "HGKL8_PCEGG"||gameType == "JNDDKL8_PCEGG"||gameType == "SLFKKL8_PCEGG"||gameType == "METKL8_PCEGG"||gameType == "TWBGKL8_PCEGG"||gameType == "DJKL8_PCEGG"||gameType == "PCEGG_90"){
		console.log(gameResult);

		for(var i = 0; i < gameResult.length; i++){
			spans += "<i>" + gameResult[i] + "</i>";
		}
	}else if(gameType == "LOTTO_90"){
        /**
         * 2018 02 25 bug
         * 六合彩 开奖结果 期数
         */
		for(var i = 0; i < gameResult.length; i++){
			var nums = gameResult[i];
			if(nums == 1 || nums == 2 || nums == 7 || nums == 8 || nums == 12 || nums == 13 || nums == 18 || nums == 19 || nums == 23 || nums == 24 || nums == 29 || nums == 30 || nums == 34 || nums == 35 || nums == 40 || nums == 45 || nums == 46){
				spans += "<i style='background: #c42133;'>" + gameResult[i] + "</i>";
			}else if(nums == 3 || nums == 4 || nums == 9 || nums == 10 || nums == 14 || nums == 15 || nums == 20 || nums == 25 || nums == 26 || nums == 31 || nums == 36 || nums == 37 || nums == 41 || nums == 42 || nums == 47 || nums == 48){
				spans += "<i style='background: #2373d6;'>" + gameResult[i] + "</i>";
			}else{
				spans += "<i style='background: #38b81b;'>" + gameResult[i] + "</i>";
			}
			if(i == 5){
				spans += " + ";
			}
		}
	}
	
	var resultHtml = "<dl><dt>第<label id = 'pre_qishu'>"+gameResultNo+"</label>期</dt><dd>"+spans+"</dd>";
	$("#kj_result").html(resultHtml);

}

function getGameHistroy(type, page){
	$("#display_results").html("");
	$("#picker_resultsType").val(type);
	$("#selectResultId").text(lotteryTitles[type]);
	$("#selectResultId").attr("name",type);
//	requestPo["bets"] = $.toJSON(currentBets);
	var requestPo = RequestPo.createNew(RequestCommand.HISTORY, sessionId);
	requestPo["gameType"] = type;
	requestPo["human"] = "true";
	requestPo["pageNum"] = 0;
//	requestPo["count"] = gameHistoryPageCount;
	httpRequest(requestPo);
}
/**
 * 游戏 注单历史记录
 * @param type
 * @param page
 */
function handleHistory(data){
	console.log(data);
	var type = data.gameType;
	console.log("开奖结果："+type);
	$("#display_results").html("");
	var history = data.history;
	currentPageNum = data.pageNum;
	var page = data.pageNum;
	var trHtml = " ";
	var date = new Date();
	
	if(history.length > 0){
	if(type == "KLC" || type == "TJKC" || type == "HNKC" || type == "YNKC"||type =="KLC_90"){
		for(var i = 0; i < history.length; i++){
			if(type == "KLC" || type == "TJKC" || type == "HNKC" || type == "YNKC"){
				date.setTime(toServerTime(history[i].createTime + 600000));
			}else if(type =="KLC_90"){
				date.setTime(toServerTime(history[i].createTime + 90000));
			}
			if(history[i].result != null){
				trHtml += "<li class = 'item-inner_text border_1px  item-inner_div inem-inner_font05' ><div class=' width_col33 floatlt '><div>"+toShortGameNum(history[i].gameNo)+"期</div><div>"+ fillDateNum(date.getMonth() + 1) + "-" + fillDateNum(date.getDate())+"  "+ fillDateNum(date.getHours()) + ":" + fillDateNum(date.getMinutes()) +"</div></div>";
				trHtml += "<div class='width_col66 floatrh '><div>";
				var resultCal = new resultCalculator(type, history[i].result);
				for(var j = 0; j < history[i].result.length; j++){
					trHtml += "<i>" + history[i].result[j] + "</i>";
				}
				var big = (resultCal.calResult)[BetOn.TOTAL][BetType.BIG];
				var odd = (resultCal.calResult)[BetOn.TOTAL][BetType.ODD];
				var tailBig = (resultCal.calResult)[BetOn.TOTAL][BetType.TAIL_BIG];
				var bigTd = "";
				if(big == 0){
					bigTd = "</div><div><span class=''>" + "小" + "</span>";
				}else if(big == 1){
					bigTd = "</div><div><span class='red'>" + "大" + "</span>";
				}else{
					bigTd = "</div><div><span color='green'>" + "和" + "</span>";
				}
				trHtml += bigTd;
				trHtml +="&nbsp;<span" + (odd?" class = ''>":" class=' red'>") + roadmapIcon["ODD"][odd] + "</span>";
				trHtml += "<span" + (tailBig?" class=' red'>":"class = ''>") + "尾" + roadmapIcon["TAIL_BIG"][tailBig] + "</span>";
				trHtml += "<span class = ''>" + resultCal.total + "</span></div>"; 
				trHtml +="</div></li>";
			}
		}
	}else if(type == "XYC"){
		for(var i = 0; i < history.length; i++){
			date.setTime(toServerTime(history[i].createTime + 600000));
			if(history[i].result != null){
				trHtml += "<li class = 'item-inner_text border_1px  item-inner_div inem-inner_font05' ><div class=' width_col33 floatlt '><div>"+toShortGameNum(history[i].gameNo)+"期</div><div>"+ fillDateNum(date.getMonth() + 1) + "-" + fillDateNum(date.getDate())+"  "+ fillDateNum(date.getHours()) + ":" + fillDateNum(date.getMinutes()) +"</div></div>";
				trHtml += "<div class='width_col66 floatrh '><div>";
				var resultCal = new resultCalculator(type, history[i].result);
				
				for(var j = 0; j < history[i].result.length; j++){
					trHtml += "<i>" + history[i].result[j] + "</i>";
				}
				
				var big = (resultCal.calResult)[BetOn.TOTAL][BetType.BIG];
				var odd = (resultCal.calResult)[BetOn.TOTAL][BetType.ODD];
				var tailBig = (resultCal.calResult)[BetOn.TOTAL][BetType.TAIL_BIG];
				var bigTd = "";
				if(big == 0){
					bigTd = "</div><div><span class=''>" + "小" + "</span>";
				}else if(big == 1){
					bigTd = "</div><div><span class='red'>" + "大" + "</span>";
				}else{
					bigTd = "</div><div><span color='green'>" + "和" + "</span>";
				}
				trHtml += bigTd;
				trHtml +="&nbsp;<span" + (odd?" class = ''>":" class=' red'>") + roadmapIcon["ODD"][odd] + "</span>";
				trHtml += "<span" + (tailBig?" class=' red'>":"class = ''>") + "尾" + roadmapIcon["TAIL_BIG"][tailBig] + "</span>";
				trHtml += "<span class = ''>" + resultCal.total + "</span></div>"; 
				trHtml +="</div></li>";
			}
		}
	}else if(type == "SSC" || type=="TJSC" || type=="XJSC" || type=="JXSC" || type=="YNSC"|| type=="JSCQ" || type=="JSCQ60"){
		for(var i = 0; i < history.length; i++){
		
			date.setTime(toServerTime(history[i].createTime));
			if(type == "SSC" && (date.getHours() >= 22 || date.getHours() <= 2)){
				
				date.setTime(toServerTime(history[i].createTime + 300000));
			}else if(type=="JSCQ"){
				date.setTime(toServerTime(history[i].createTime + 90000));
			}else if(type=="JSCQ60"){
				date.setTime(toServerTime(history[i].createTime + 60000));
			}else{
				date.setTime(toServerTime(history[i].createTime + 600000));
			}
			if(history[i].result != null){
				trHtml += "<li class = 'item-inner_text border_1px  item-inner_div inem-inner_font05' ><div class=' width_col33 floatlt '><div>"+toShortGameNum(history[i].gameNo)+"期</div><div>"+ fillDateNum(date.getMonth() + 1) + "-" + fillDateNum(date.getDate())+"  "+ fillDateNum(date.getHours()) + ":" + fillDateNum(date.getMinutes()) +"</div></div>";
				var resultCal = new resultCalculator(type, history[i].result);
				var big = (resultCal.calResult)[BetOn.TOTAL][BetType.BIG];
				var odd = (resultCal.calResult)[BetOn.TOTAL][BetType.ODD];
				var dragon = (resultCal.calResult)[BetOn.D_T_T][BetType.DRAGON];
				var dttTd = 0;
				if(dragon == 0){
					 dttTd = "<span class='resultstyle red'>" + "龙" + "</span>";
				}else if(dragon == 1){
					dttTd = "<span class='resultstyle'>" + "虎" + "</span>";
				}else{
					dttTd = "<span class='resultstyle green'>" + "和" + "</span>";
				}
				
				trHtml += "<div class='width_col66 floatrh '><div>";
				for(var j = 0; j < history[i].result.length; j++){
					trHtml += "<i>" + history[i].result[j] + "</i>";
				}
				trHtml += "</div><div><span" + (big?" class='resultstyle red'>":" class='resultstyle'>") + roadmapIcon["BIG"][big] + "</span>&nbsp;";
				trHtml += "<span" + (odd?" class='resultstyle'>":" class='resultstyle red'>") + roadmapIcon["ODD"][odd] + "</span>&nbsp;";
				trHtml += dttTd;
				trHtml += "&nbsp;<span class='resultstyle'>" + resultCal.total + "</span></div>"; 
				trHtml +="</div></li>";
			}
		}		
	}else if(type == "BJC"||type == "XYFT" || type == "JSSC"|| type == "JSSC60"){
		for(var i = 0; i < history.length; i++){
			if(type == "BJC" ||type == "XYFT"){
				date.setTime(toServerTime(history[i].createTime + 300000));
			}else if(type="JSSC60"){
				date.setTime(toServerTime(history[i].createTime + 60000));
			}else{
				date.setTime(toServerTime(history[i].createTime + 90000));
			}
			if(history[i].result != null){
				trHtml += "<li class = 'item-inner_text border_1px  item-inner_div inem-inner_font05' ><div class=' width_col33 floatlt '><div>"+toShortGameNum(history[i].gameNo)+"期</div><div>"+ fillDateNum(date.getMonth() + 1) + "-" + fillDateNum(date.getDate())+"  "+ fillDateNum(date.getHours()) + ":" + fillDateNum(date.getMinutes()) +"</div></div>";
				trHtml += "<div class='width_col66 floatrh '><div>";
				var resultCal = new resultCalculator(type, history[i].result);
				
				for(var j = 0; j < history[i].result.length; j++){
					/*trHtml += "<i >" + history[i].result[j] + "</i>";*/
					trHtml += "<span class='pk-num num" + history[i].result[j] + "'>" + history[i].result[j] + "</span>";
				}
				
				var big = (resultCal.calResult)[BetOn.TOTAL][BetType.BIG];
				var odd = (resultCal.calResult)[BetOn.TOTAL][BetType.ODD];
				trHtml += "</div><div><span class='resultstyle'>" + resultCal.total + "</span>&nbsp;"; 
				trHtml += "<span" + (big?" class='red resultstyle'>":">") + roadmapIcon["BIG"][big] + "</span>&nbsp;";
				trHtml += "<span" + (odd?">":" class='red resultstyle'>") + roadmapIcon["ODD"][odd] + "</span></div>";
				trHtml +="</div></li>";
			}
			
		}		
		
	}else if(type == "JSC" || type == "AHK3" || type == "JLK3" || type == "GXK3"|| type == "JSC_90"){
		for(var i = 0; i < history.length; i++){
			if(type == "JSC" || type == "AHK3" || type == "JLK3" || type == "GXK3"){
				date.setTime(toServerTime(history[i].createTime + 600000));
			}else if(type == "JSC_90"){
				date.setTime(toServerTime(history[i].createTime + 90000));
			}
			if(history[i].result != null){
				trHtml += "<li class = 'item-inner_text border_1px  item-inner_div inem-inner_font05' ><div class=' width_col33 floatlt '><div>"+toShortGameNum(history[i].gameNo)+"期</div><div>"+ fillDateNum(date.getMonth() + 1) + "-" + fillDateNum(date.getDate())+"  "+ fillDateNum(date.getHours()) + ":" + fillDateNum(date.getMinutes()) +"</div></div>";
				trHtml += "<div class='width_col66 floatrh '><div>";
				var resultCal = new resultCalculator(type, history[i].result);
				for(var j = 0; j < history[i].result.length; j++){
					trHtml += "<i>" + history[i].result[j] + "</i>";
				}
				trHtml += "</div><div><span class='resultstyle'>" + resultCal.total + "<span>&nbsp;";
				var big = (resultCal.calResult)[BetOn.TOTAL][BetType.BIG];
				var tr = "";
				if(big == 0){
					tr = "<span class='resultstyle'>" + "小" + "</span></div>"; 
				}else if(big == 1){
					tr = "<span class='resultstyle red'>" + "大" + "</span></div>";
				}else{
					tr = "<span class='resultstyle green'>" + "通吃" + "</span></div>";
				}
				trHtml += tr;
				trHtml +="</div></li>";
			}
			
		}
	}else if(type=="SHSC"){
		for(var i = 0; i < history.length; i++){
			date.setTime(toServerTime(history[i].createTime));
			if(date.getHours() >= 22 || date.getHours() <= 2){
				date.setTime(toServerTime(history[i].createTime + 300000));
			}
			
			if(history[i].result != null){
				trHtml += "<li class = 'item-inner_text border_1px  item-inner_div inem-inner_font05' ><div class=' width_col33 floatlt '><div>"+toShortGameNum(history[i].gameNo)+"期</div><div>"+ fillDateNum(date.getMonth() + 1) + "-" + fillDateNum(date.getDate())+"  "+ fillDateNum(date.getHours()) + ":" + fillDateNum(date.getMinutes()) +"</div></div>";
				var resultCal = new resultCalculator(type, history[i].result);
				var dragon = (resultCal.calResult)[BetOn.D_T_T][BetType.DRAGON];
				var dttTd = 0;
				if(dragon == 0){
					 dttTd = "<span class='resultstyle red'>" + "龙" + "</span>";
				}else if(dragon == 1){
					dttTd = "<span class='resultstyle'>" + "虎" + "</span>";
				}else{
					dttTd = "<span class='resultstyle green'>" + "和" + "</span>";
				}
				trHtml += "<div class='width_col66 floatrh '><div>";
				for(var j = 0; j < history[i].result.length; j++){
					trHtml += "<i>" + history[i].result[j] + "</i>";
				}
				trHtml +="</div><div>"+dttTd;
				trHtml += "&nbsp;<span class = 'resultstyle'>" + resultCal.total + "</span></div>"; 
				trHtml +="</div></li>";
			}
		}		
	}else if(type=="GXKC"){
		for(var i = 0; i < history.length; i++){
			date.setTime(toServerTime(history[i].createTime + 600000));
			if(history[i].result != null){
				trHtml += "<li class = 'item-inner_text border_1px  item-inner_div inem-inner_font05' ><div class=' width_col33 floatlt'><div>"+toShortGameNum(history[i].gameNo)+"期</div><div>"+ fillDateNum(date.getMonth() + 1) + "-" + fillDateNum(date.getDate())+"  "+ fillDateNum(date.getHours()) + ":" + fillDateNum(date.getMinutes()) +"</div></div>";
				trHtml += "<div class='width_col66 floatrh '><div>";
				var resultCal = new resultCalculator(type, history[i].result);
				for(var j = 0; j < history[i].result.length; j++){
					trHtml += "<i>" + history[i].result[j] + "</i>";
				}
				var big = (resultCal.calResult)[BetOn.TOTAL][BetType.BIG];
				var odd = (resultCal.calResult)[BetOn.TOTAL][BetType.ODD];
				var tailBig = (resultCal.calResult)[BetOn.TOTAL][BetType.TAIL_BIG];
				var bigTd = "";
				if(big == 0){
					bigTd = "</div><div><span class = '' >" + "小" + "</span>";
				}else if(big == 1){
					bigTd = "</div><div><span class='red'>" + "大" + "</span>";
				}else{
					bigTd = "</div><div><span color='green'>" + "和" + "</span>";
				}
				trHtml += bigTd;
				trHtml +="&nbsp;<span" + (odd?" class = ''>":" class=' red'>") + roadmapIcon["ODD"][odd] + "</span>";
				trHtml += "<span" + (tailBig?" class='red'>":" class = ''>") + "尾" + roadmapIcon["TAIL_BIG"][tailBig] + "</span>";
				trHtml += "<span class = ''>" + resultCal.total + "</span></td>"; 
				trHtml +="</div></li>";
			}
		}
	
	}else if(type == "GD115"||type == "JX115"||type == "SD115"||type == "BJ115"||type == "SH115"||type == "LN115"||type == "HB115"||type == "JS115"||type == "AH115"||type=="GD115_90"){
		for(var i = 0; i < history.length; i++){
			if(type == "GD115"||type == "JX115"||type == "SD115"||type == "BJ115"||type == "SH115"||type == "LN115"||type == "HB115"||type == "JS115"||type == "AH115"){
				date.setTime(toServerTime(history[i].createTime + 600000));
			}else if(type=="GD115_90"){
				date.setTime(toServerTime(history[i].createTime + 90000));	
			}
			if(history[i].result != null){
				trHtml += "<li class = 'item-inner_text border_1px  item-inner_div inem-inner_font05' ><div class=' width_col33 floatlt'><div>"+toShortGameNum(history[i].gameNo)+"期</div><div>"+ fillDateNum(date.getMonth() + 1) + "-" + fillDateNum(date.getDate())+"  "+ fillDateNum(date.getHours()) + ":" + fillDateNum(date.getMinutes()) +"</div></div>";
				trHtml += "<div class='width_col66 floatrh '><div>";
				var resultCal = new resultCalculator(type, history[i].result);
				for(var j = 0; j < history[i].result.length; j++){
					trHtml += "<i>" + history[i].result[j] + "</i>";
				}
				var big = (resultCal.calResult)[BetOn.TOTAL][BetType.BIG];
				var odd = (resultCal.calResult)[BetOn.TOTAL][BetType.ODD];
				var tailBig = (resultCal.calResult)[BetOn.TOTAL][BetType.TAIL_BIG];
				var bigTd = "";
				if(big == 0){
					bigTd = "</div><div><span class=''>" + "小" + "</span>";
				}else if(big == 1){
					bigTd = "</div><div><span class='red'>" + "大" + "</span>";
				}else{
					bigTd = "</div><div><span color='green'>" + "和" + "</span>";
				}
				trHtml += bigTd;
				trHtml +="&nbsp;<span" + (odd?" class=''>":" class=' red'>") + roadmapIcon["ODD"][odd] + "</span>";
				trHtml += "<span" + (tailBig?" class=' red'>":" class=''>") + "尾" + roadmapIcon["TAIL_BIG"][tailBig] + "</span>";
				trHtml += "<span class=''>" + resultCal.total + "</span></div>"; 
				trHtml +="</div></li>";
			}
		}
	}else if(type == "BJKL8"||type == "AZKL8"||type == "JNDKL8"||type == "HGKL8"||type == "JNDDKL8"||type == "SLFKKL8"||type == "METKL8"||type == "TWBGKL8"||type == "DJKL8"||type == "BJKL8_90"){
		for(var i = 0; i < history.length; i++){
			if(type =="DJKL8"||type == "HGKL8"||type == "BJKL8_90"){
				date.setTime(toServerTime(history[i].createTime + 90000));
			}else if(type == "METKL8"){
				date.setTime(toServerTime(history[i].createTime + 360000));
			}else{
				date.setTime(toServerTime(history[i].createTime + 300000));
			}
			
			if(history[i].result != null){
				trHtml += "<li class = 'item-inner_text border_1px  item-inner_div inem-inner_font05' ><div class=' width_col33 floatlt'><div>"+toShortGameNum(history[i].gameNo)+"期</div><div>"+ fillDateNum(date.getMonth() + 1) + "-" + fillDateNum(date.getDate())+"  "+ fillDateNum(date.getHours()) + ":" + fillDateNum(date.getMinutes()) +"</div></div>";
				trHtml += "<div class='width_col66 floatrh '><div>";
				var resultCal = new resultCalculator(type, history[i].result);
				var big = (resultCal.calResult)[BetOn.TOTAL][BetType.BIG];
				var odd = (resultCal.calResult)[BetOn.TOTAL][BetType.ODD];
				var bigTd = "";
				if(big == 1){
					bigTd = "</div><div><span class='resultstyle'>" + "小" + "</span>";
				}else if(big == 0){
					bigTd = "</div><div><span class='resultstyle red'>" + "大" + "</span>";
				}else{
					bigTd = "</div><div><span color='resultstyle green'>" + "总和810" + "</span>";
				}
				if(history[i].result.length > 20){
					var len = (history[i].result.length-1);
				}else {
					var len = history[i].result.length;
				}
				for(var j = 0; j < len; j++){
					if(j == 9){
						trHtml += "<i>" + history[i].result[j] + "</i></br>";
					}else{
						trHtml += "<i>" + history[i].result[j] + "</i>";
					}
				}
				trHtml += bigTd;
				trHtml +="&nbsp;<span" + (odd?" class='resultstyle'>":" class='resultstyle red'>") + roadmapIcon["ODD"][odd] + "</span>";
				trHtml += "<span class='resultstyle'>" + resultCal.total + "</span></div>"; 
				trHtml +="<div></li>";
			}
		}
	}else if(type == "FC3D"||type == "TC3D"|| type == "FC3D_90"){
		for(var i = 0; i < history.length; i++){
			if(type == "FC3D"||type == "TC3D"){
				date.setTime(toServerTime(history[i].createTime + 600000));
			}else{
				date.setTime(toServerTime(history[i].createTime + 90000));
			}
			
			if(history[i].result != null){
				trHtml += "<li class = 'item-inner_text border_1px  item-inner_div inem-inner_font05' ><div class=' width_col33 floatlt '><div>"+toShortGameNum(history[i].gameNo)+"期</div><div>"+ fillDateNum(date.getMonth() + 1) + "-" + fillDateNum(date.getDate())+"  "+ fillDateNum(date.getHours()) + ":" + fillDateNum(date.getMinutes()) +"</div></div>";
				trHtml += "<div class='width_col66 floatrh '><div>";
				var resultCal = new resultCalculator(type, history[i].result);
				for(var j = 0; j < history[i].result.length; j++){
					trHtml += "<i>" + history[i].result[j] + "</i>";
				}
				var big = (resultCal.calResult)[BetOn.TOTAL][BetType.BIG];
				var odd = (resultCal.calResult)[BetOn.TOTAL][BetType.ODD];
				var bigTd = "";
				if(big == 0){
					bigTd = "</div><div><span class='resultstyle'>" + "小" + "</span>";
				}else if(big == 1){
					bigTd = "</div><div><span class='resultstyle red'>" + "大" + "</span>";
				}else{
					bigTd = "</div><div><span color='resultstyle green'>" + "和" + "</span>";
				}
				trHtml += bigTd;
				trHtml +="&nbsp;<span" + (odd?" class='resultstyle'>":" class='resultstyle red'>") + roadmapIcon["ODD"][odd] + "</span>";
				trHtml += "<span class='resultstyle'>" + resultCal.total + "</span></div>"; 
				trHtml +="</div></li>";
			}
		}
	}else if(type == "BJKL8_PCEGG"||type == "AZKL8_PCEGG"||type == "JNDKL8_PCEGG"||type == "HGKL8_PCEGG"||type == "JNDDKL8_PCEGG"||type == "SLFKKL8_PCEGG"||type == "METKL8_PCEGG"||type == "TWBGKL8_PCEGG"||type == "DJKL8_PCEGG"||type == "PCEGG_90"){
		for(var i = 0; i < history.length; i++){
			if(type =="DJKL8_PCEGG"||type == "HGKL8_PCEGG"||type == "PCEGG_90"){
				date.setTime(toServerTime(history[i].createTime + 90000));
			}else if(type == "METKL8_PCEGG"){
				date.setTime(toServerTime(history[i].createTime + 360000));
			}else{
				date.setTime(toServerTime(history[i].createTime + 300000));
			}
			
			if(history[i].result != null){
				trHtml += "<li class = 'item-inner_text border_1px  item-inner_div inem-inner_font05' ><div class=' width_col33 floatlt'><div>"+toShortGameNum(history[i].gameNo)+"期</div><div>"+ fillDateNum(date.getMonth() + 1) + "-" + fillDateNum(date.getDate())+"  "+ fillDateNum(date.getHours()) + ":" + fillDateNum(date.getMinutes()) +"</div></div>";
				trHtml += "<div class='width_col66 floatrh '><div>";
				var resultCal = new resultCalculator(type, history[i].result);
				var big = (resultCal.calResult)[BetOn.TOTAL][BetType.BIG];
				var odd = (resultCal.calResult)[BetOn.TOTAL][BetType.ODD];
				var bigTd = "";
				if(big == 1){
					bigTd = "</div><div><span class='resultstyle'>" + "小" + "</span>";
				}else if(big == 0){
					bigTd = "</div><div><span class='resultstyle red'>" + "大" + "</span>";
				}else{
					bigTd = "</div><div><span color='resultstyle green'>" + "总和810" + "</span>";
				}
				if(history[i].result.length > 20){
					var len = (history[i].result.length-1);
				}else {
					var len = history[i].result.length;
				}
				for(var j = 0; j < len; j++){
					if(j == 9){
						trHtml += "<i>" + history[i].result[j] + "</i></br>";
					}else{
						trHtml += "<i>" + history[i].result[j] + "</i>";
					}
				}
				trHtml += bigTd;
				trHtml +="&nbsp;<span" + (odd?" class='resultstyle'>":" class='resultstyle red'>") + roadmapIcon["ODD"][odd] + "</span>";
				trHtml += "<span class='resultstyle'>" + resultCal.total + "</span></div>"; 
				trHtml +="<div></li>";
			}
		}
	}else if(type == "LOTTO_90"){

        /**
		 * 六合彩
         */
		for(var i = 0; i < history.length; i++){
			date.setTime(toServerTime(history[i].createTime + 90000));	
			if(history[i].result != null){
				trHtml += "<li class = 'item-inner_text border_1px  item-inner_div inem-inner_font05' ><div class=' width_col33 floatlt'><div>"+toShortGameNum(history[i].gameNo)+"期</div><div>"+ fillDateNum(date.getMonth() + 1) + "-" + fillDateNum(date.getDate())+"  "+ fillDateNum(date.getHours()) + ":" + fillDateNum(date.getMinutes()) +"</div></div>";
				trHtml += "<div class='width_col66 floatrh '><div>";
				var resultCal = new resultCalculator(type, history[i].result);
				var sxs = "";
				for(var j = 0; j < history[i].result.length; j++){
					var nums = history[i].result[j];
					if(nums == 1 || nums == 2 || nums == 7 || nums == 8 || nums == 12 || nums == 13 || nums == 18 || nums == 19 || nums == 23 || nums == 24 || nums == 29 || nums == 30 || nums == 34 || nums == 35 || nums == 40 || nums == 45 || nums == 46){
						trHtml += "<i style='background: #c42133;'>" + history[i].result[j] + "</i>";
					}else if(nums == 3 || nums == 4 || nums == 9 || nums == 10 || nums == 14 || nums == 15 || nums == 20 || nums == 25 || nums == 26 || nums == 31 || nums == 36 || nums == 37 || nums == 41 || nums == 42 || nums == 47 || nums == 48){
						trHtml += "<i style='background: #2373d6;'>" + history[i].result[j] + "</i>";
					}else{
						trHtml += "<i style='background: #38b81b;'>" + history[i].result[j] + "</i>";
					}
					if(shengXiaoMap["JI"].indexOf(nums) != -1){
						sxs += "鸡";
					}else if(shengXiaoMap["HOU"].indexOf(nums) != -1){
						sxs += "猴";
					}else if(shengXiaoMap["YANG"].indexOf(nums) != -1){
						sxs += "羊";
					}else if(shengXiaoMap["MA"].indexOf(nums) != -1){
						sxs += "马";
					}else if(shengXiaoMap["SHE"].indexOf(nums) != -1){
						sxs += "蛇";
					}else if(shengXiaoMap["LONG"].indexOf(nums) != -1){
						sxs += "龙";
					}else if(shengXiaoMap["TU"].indexOf(nums) != -1){
						sxs += "兔";
					}else if(shengXiaoMap["HU"].indexOf(nums) != -1){
						sxs += "虎";
					}else if(shengXiaoMap["NIU"].indexOf(nums) != -1){
						sxs += "牛";
					}else if(shengXiaoMap["SHU"].indexOf(nums) != -1){
						sxs += "鼠";
					}else if(shengXiaoMap["ZHU"].indexOf(nums) != -1){
						sxs += "猪";
					}else if(shengXiaoMap["GOU"].indexOf(nums) != -1){
						sxs += "狗";
					}
					if(j == 5){
						trHtml += " + ";
					}
					if(j != 6){
						sxs += " + ";
					}
				}
				trHtml += "</div><div><span class=''>" + sxs + "</span>";
//				trHtml += "</span>";
				var big = (resultCal.calResult)[BetOn.TOTAL][BetType.BIG];
				var odd = (resultCal.calResult)[BetOn.TOTAL][BetType.ODD];
				var tailBig = (resultCal.calResult)[BetOn.TOTAL][BetType.TAIL_BIG];
				var bigTd = "";
// 				if(big == 0){
// 					bigTd = "</div><div><span class=''>" + "小" + "</span>";
// 				}else if(big == 1){
// 					bigTd = "</div><div><span class='red'>" + "大" + "</span>";
// 				}else{
// 					bigTd = "</div><div><span color='green'>" + "和" + "</span>";
// 				}
// 				trHtml += bigTd;
// 				trHtml +="&nbsp;<span" + (odd?" class=''>":" class=' red'>") + roadmapIcon["ODD"][odd] + "</span>";
// 				trHtml += "<span" + (tailBig?" class=' red'>":" class=''>") + "尾" + roadmapIcon["TAIL_BIG"][tailBig] + "</span>";
// 				trHtml += "<span class=''>" + resultCal.total + "</span></div>"; 
 				trHtml +="</div></li>";
			}
		}
	}
	}else{
		trHtml = "<li class = 'item-inner_text item-inner_div inem-inner_font05' ><div>O(∩_∩)O 啊哈，扑了个空，还没有开奖结果呢~</div></li>"
	}
	$("#display_results").html(trHtml);
	$("#gamepage").scrollTo({toT : 0}, 100);
	var selectorDate = new Date();
	var currentTime = data.currentDate;
	$("#results_time").html("");
	for(var i = 0; i < data.days; i++){
		if(i < 30){
		selectorDate.setTime(toServerTime(currentTime - i * 3600000 * 24));
		$("#results_time").append("<option value='" + i + "'" + (i == page?"selected=\"selected\"":"") + ">" 
				+ fillDateNum(selectorDate.getFullYear()) + "-" + fillDateNum(selectorDate.getMonth() + 1) + "-" + fillDateNum(selectorDate.getDate()) + "</option>");
		}
	}
}

function showIssueResults(){
	var chsGameType = $('#selectResultId').attr("name");
	var pageNum = $("#results_time").val();
	$("#selectDataId").text(pageNum);
	console.log(pageNum);
	$("#gameResultCnt").html("");
	var requestPo = RequestPo.createNew(RequestCommand.HISTORY, sessionId);
	console.log(currentBets);
	requestPo["gameType"] = chsGameType;
	
	if(pageNum == undefined || pageNum == null){
		requestPo["pageNum"] = 0;
	}else{
		requestPo["pageNum"] = pageNum;
	}
	httpRequest(requestPo);
}

function resultCalculator(type, result){
	this.total = 0;
	this.calResult = {};
	for(var i = 0; i < result.length; i++){
		this.total += result[i];
	}
	this.calResult[BetOn.TOTAL] = {};
	if(type == "KLC" || type == "XYC" || type == "TJKC" || type == "HNKC" || type == "YNKC"|| type == "KLC_90"){
		this.calResult[BetOn.D_T_T] = {};
		if(this.total > 84){
			this.calResult[BetOn.TOTAL][BetType.BIG] = 1;
		}else if(this.total < 84){
			this.calResult[BetOn.TOTAL][BetType.BIG] = 0;
		}else{
			this.calResult[BetOn.TOTAL][BetType.BIG] = 2;
		}
		this.calResult[BetOn.TOTAL][BetType.ODD] = this.total % 2;
		this.calResult[BetOn.TOTAL][BetType.TAIL_BIG] = this.total % 10 >= 5? 1: 0;
		this.calResult[BetOn.D_T_T][BetType.DRAGON] = result[0] > result[7]? 0: 1;
	}else if(type == "SSC" || type=="TJSC" || type=="XJSC" || type=="JXSC" || type=="YNSC"|| type=="JSCQ" || type=="JSCQ60"){
		this.calResult[BetOn.D_T_T] = {};
		this.calResult[BetOn.TOTAL][BetType.BIG] = this.total >= 23? 1: 0;
		this.calResult[BetOn.TOTAL][BetType.ODD] = this.total % 2;
		if(result[0] > result[4]){
			this.calResult[BetOn.D_T_T][BetType.DRAGON] = 0;
		}else if(result[0] < result[4]){
			this.calResult[BetOn.D_T_T][BetType.DRAGON] = 1;
		}else{
			this.calResult[BetOn.D_T_T][BetType.DRAGON] = 2;
		}
		this.calResult[BetOn.FIRST3] = count3(result.slice(0, 3));
		this.calResult[BetOn.MIDDLE3] = count3(result.slice(1, 4));
		this.calResult[BetOn.LAST3] = count3(result.slice(2, 5));
	}else if(type == "BJC"||type == "XYFT" || type == "JSSC" || type == "JSSC60"){
		this.calResult[BetOn.D_T_T] = {};
		this.total = result[0] + result[1];
		this.calResult[BetOn.TOTAL][BetType.BIG] = this.total > 11? 1: 0;
		this.calResult[BetOn.TOTAL][BetType.ODD] = this.total % 2;
		this.calResult[BetOn.D_T_T][BetType.NO_1] = result[0] > result[9]? 0: 1;
		this.calResult[BetOn.D_T_T][BetType.NO_2] = result[1] > result[8]? 0: 1;
		this.calResult[BetOn.D_T_T][BetType.NO_3] = result[2] > result[7]? 0: 1;
		this.calResult[BetOn.D_T_T][BetType.NO_4] = result[3] > result[6]? 0: 1;
		this.calResult[BetOn.D_T_T][BetType.NO_5] = result[4] > result[5]? 0: 1;
	}else if(type == "JSC" || type == "AHK3" || type == "JLK3" || type == "GXK3"|| type == "JSC_90"){
		if(result[0] == result[1] && result[0] == result[2]){
			this.calResult[BetOn.TOTAL][BetType.BIG] = 2;
		}else{
			this.calResult[BetOn.TOTAL][BetType.BIG] = this.total >= 11? 1: 0;
		}
	}else if(type=="SHSC"){
		this.calResult[BetOn.D_T_T] = {};
		if(result[0] > result[2]){
			this.calResult[BetOn.D_T_T][BetType.DRAGON] = 0;
		}else if(result[0] < result[2]){
			this.calResult[BetOn.D_T_T][BetType.DRAGON] = 1;
		}else{
			this.calResult[BetOn.D_T_T][BetType.DRAGON] = 2;
		}
	}else if(type == "GXKC"){
		this.calResult[BetOn.D_T_T] = {};
		if(this.total > 55){
			this.calResult[BetOn.TOTAL][BetType.BIG] = 1;
		}else if(this.total < 55){
			this.calResult[BetOn.TOTAL][BetType.BIG] = 0;
		}else{
			this.calResult[BetOn.TOTAL][BetType.BIG] = 2;
		}
		this.calResult[BetOn.TOTAL][BetType.ODD] = this.total % 2;
		this.calResult[BetOn.TOTAL][BetType.TAIL_BIG] = this.total % 10 >= 5? 1: 0;
	}else if(type == "GD115"||type == "JX115"||type == "SD115"||type == "BJ115"||type == "SH115"||type == "LN115"||type == "HB115"||type == "JS115"||type == "AH115"||type == "GD115_90"){
		if(this.total > 30){
			this.calResult[BetOn.TOTAL][BetType.BIG] = 1;
		}else if(this.total < 30){
			this.calResult[BetOn.TOTAL][BetType.BIG] = 0;
		}else if(this.total == 30){
			this.calResult[BetOn.TOTAL][BetType.BIG] = 2;
		}
		this.calResult[BetOn.TOTAL][BetType.ODD] = this.total % 2;
		this.calResult[BetOn.TOTAL][BetType.TAIL_BIG] = this.total % 10 >= 5? 1: 0;
	}else if(type == "BJKL8"||type == "AZKL8"||type == "JNDKL8"||type == "HGKL8"||type == "JNDDKL8"||type == "SLFKKL8"||type == "METKL8"||type == "TWBGKL8"||type == "DJKL8"||type == "BJKL8_90"){
		if(result.length > 20){
			this.total=this.total-result[20];
		}
		if(this.total < 810){
			this.calResult[BetOn.TOTAL][BetType.BIG] = 1;
		}else if(this.total > 810){
			this.calResult[BetOn.TOTAL][BetType.BIG] = 0;
		}else if(this.total == 810){
			this.calResult[BetOn.TOTAL][BetType.BIG] = 2;
		}
		this.calResult[BetOn.TOTAL][BetType.ODD] = this.total % 2;
	}else if(type == "FC3D"||type == "TC3D"|| type == "FC3D_90"){
		if(this.total >= 14){
			this.calResult[BetOn.TOTAL][BetType.BIG] = 1;
		}else if(this.total <= 13){
			this.calResult[BetOn.TOTAL][BetType.BIG] = 0;
		}
		this.calResult[BetOn.TOTAL][BetType.ODD] = this.total % 2;
	}else if(type == "BJKL8_PCEGG"||type == "AZKL8_PCEGG"||type == "JNDKL8_PCEGG"||type == "HGKL8_PCEGG"||type == "JNDDKL8_PCEGG"||type == "SLFKKL8_PCEGG"||type == "METKL8_PCEGG"||type == "TWBGKL8_PCEGG"||type == "DJKL8_PCEGG"||type == "PCEGG_90"){
		if(result.length > 20){
			this.total=this.total-result[20];
		}
		if(this.total < 14){
			this.calResult[BetOn.TOTAL][BetType.BIG] = 1;
		}else if(this.total >= 14){
			this.calResult[BetOn.TOTAL][BetType.BIG] = 0;
		}
		this.calResult[BetOn.TOTAL][BetType.ODD] = this.total % 2;
	}
}


function count3(list){
	list = sort3(list);
	if(list[0] == list[1] && 
			list[1] == list[2]){
		return BetType.THREE_EQUAL;
	}else if(list[2] - list[1] == 1 && list[1] - list[0] == 1){
		return BetType.THREE_STRAIGHT;
	}else if((list[0] == 0 && list[2] == 9) && (list[1] == 8 || list[1] == 1 )){
		return BetType.THREE_STRAIGHT;
	}else if(list[0] == list[1] || list[1] == list[2]){
		return BetType.THREE_PAIR;
	}else if(list[2] - list[1] == 1 || list[1] - list[0] == 1){
		return BetType.THREE_HALF_STRAIGHT;
	}else if(list[0] == 0 && list[2] == 9){
		return BetType.THREE_HALF_STRAIGHT;
	}else{
		return BetType.THREE_CHAOS;
	}
}

function sort3(arr){
	if(arr[0] > arr[1]){
		var x = arr[0];
		arr[0] = arr[1];
		arr[1] = x;
	}
	if(arr[1] > arr[2]){
		var x = arr[1];
		arr[1] = arr[2];
		arr[2] = x;
	}
	if(arr[0] > arr[1]){
		var x = arr[0];
		arr[0] = arr[1];
		arr[1] = x;
	}
	
	return arr;
}
/**
 * 2018 02 26 bug
 * 获取游戏数据
 */
function getNextGameInfo(){
	console.log("reday to get all gameinfos...");
	for(var i = 0; i < games.length; i++){
		if((currentGame[games[i]] == undefined || currentGame[games[i]] == null) && $.inArray(games[i], closedGames) == -1){
			updateGameInfo(games[i]);
			break;
		}
	}
}
function toGameIndexs(gameName){
	for(var i = 0; i < gameNameArrs.length; i++){
		if(gameNameArrs[i] == gameName){
			return i; 
		}
	}
	return -1;
};
function fillZero(num){
	if((num + "").length == 1){
		return "0" + num;
	}else{
		return num;
	}
}

function fillDateNum(num){
	num = num + "";
	if((num).length == 1){
		return "0" + num;
	}else{
		return num;
	}
}
function cleanInvalidBets(){
	for(var i = 0; i < currentBets.length; ){
		if($.inArray(null, currentBets[i]) >= 0){
			currentBets.splice(i, 1);
		}else{
			i++;
		}
	}
}
/**
 * 2018 02 26 bug
 * @param gameNum 期数
 * @returns {*}
 */
function toShortGameNum(gameNum){
	if(gameNum == undefined){
		return "";
	}
	if(gameNum.length <= 6){
		return gameNum;
	}
	var shortNum = gameNum.substr(gameNum.length - 3);
	if(shortNum.indexOf("0") == 0){
		shortNum = shortNum.substr(1);
	}
	return shortNum;
}
/**
 * 2018 02 23 bug
 * 转换时间戳
 * @param date
 * @returns {Date}
 */
function toServerTime(date){
	var offset = new Date().getTimezoneOffset() + 480;
	return new Date(date + offset * 60000);
}
function setLastBet(lastBet){
	console.log(lastBet);
	gameBets = [];
	for(var i = 0; i < lastBet.length; i++){
		for(var j = 0; j < lastBet[i].betItem.length; j++){
			var contains = false;
			for(var k = 0; k < gameBets.length; k++){
				if(gameBets[k].betId == lastBet[i].betItem[j][4]){
					contains = true;
					break;
				}
			}
			if(contains){
				continue;
			}
			
			var betPo = {};
			betPo.lotteryType = lastBet[i].lotteryType;
			betPo.betTime = lastBet[i].betTime;
			betPo.gameNo = lastBet[i].gameNo;
			betPo.betType = lastBet[i].betItem[j][0];
			betPo.betOn = lastBet[i].betItem[j][1];
			betPo.betAmount = parseInt(lastBet[i].betItem[j][2]);
			betPo.odd = lastBet[i].betItem[j][3];
			betPo.betId = lastBet[i].betItem[j][4];
			if(lastBet[i].betItem[j][5] != null){
					if(lastBet[i].lotteryType == "LOTTO_90"){
					for(var k = 0; k < lastBet[i].betItem[j][5].length; k++){
						betPo.betDetails = JSON.parse(lastBet[i].betItem[j][5]);
					}
// 					betPo.betDetails = eval(lastBet[i].betItem[j][5]);
				}else{
					betPo.betDetails = eval(lastBet[i].betItem[j][5]);
				}
			}else{
				betPo.betDetails = null;
			}
			gameBets[gameBets.length] = betPo;
		}
	}
}
/**
 * 2018 02 26
 * 即时注单
 * @param page
 */
function renderBetHistory(page){
//	console.log("Rendering bet history........");
	
	currentPageNum = page;//当前页数号码
	
	$("#immediateUl").html("");//赋个空的即时注单html页面
	var perPageCount = 30; //每次计算数据，30条为一页
	var total = 0;//总计
	var wins = 0;//赢
	var trHtml = "";//
	console.log(gameBets);//Bets注单 ，betPo赌注 ，nowTime当前时间，expireTIme到期时间
 if(gameBets.length >= 1){
	for(var i = 0; i < gameBets.length;){
		var betPo = gameBets[i];
		var nowTime = new Date();
		if(betPo.expireTime < nowTime || (currentGame[betPo.lotterType] != undefined && currentGame[betPo.lotterType].gameNo != betPo.gameNo)){
			gameBets.splice(i, 1);
		}else{
			total += gameBets[i].betAmount;
			wins += gameBets[i].betAmount * (gameBets[i].odd - 1);
			i++;
		}
	}
	
	var currentPageRecords = (gameBets.length - currentPageNum * perPageCount) > perPageCount? (currentPageNum + 1) * perPageCount: gameBets.length;
	for(var i = currentPageNum * perPageCount; i < currentPageRecords; i++){
		var date = toServerTime(gameBets[i].betTime);
		var detail = "";
		var betDetail = "";
		var betsGaem =gameBets[i].lotteryType;
		var betdetailArr = [];
		console.log(gameBets[i]);
		if((betsGaem == "FC3D"||betsGaem == "TC3D"||betsGaem == "SSC"||betsGaem == "TJSC"||betsGaem == "XJSC"||betsGaem == "JXSC"|| betsGaem == "YNSC"||betsGaem == "SHSC"||
				betsGaem == "BJKL8_PCEGG"||betsGaem == "AZKL8_PCEGG"||betsGaem == "JNDKL8_PCEGG"||betsGaem == "HGKL8_PCEGG"||betsGaem == "JNDDKL8_PCEGG"||betsGaem == "SLFKKL8_PCEGG"||betsGaem == "METKL8_PCEGG"
					||betsGaem == "TWBGKL8_PCEGG"||betsGaem == "DJKL8_PCEGG"||betsGaem == "JSCQ"||betsGaem =="JSCQ60"|| betsGaem == "FC3D_90"||betsGaem == "PCEGG_90")&& gameBets[i].betOn == "SERIAL"){
			betdetailArr= gameBets[i].betDetails[0];
		}else if(betsGaem == "LOTTO_90" && gameBets[i].betType == "DUMY_TYPE"){
			betdetailArr= gameBets[i].betDetails;
		}else if(gameBets[i].betOn == "SERIAL"){
			if(gameBets[i].betType == 'OPTIONAL_2_GROUP_STR' || gameBets[i].betType == "OPTIONAL_FIRST3_STR"){
				var betCount = combinationSYXW(gameBets[i].betDetails,SerialGroup[gameBets[i].betType]).length;
			}else{
				var betCount = combinationCounter(gameBets[i].betDetails[0].length, SerialGroup[gameBets[i].betType]);
			}
			detail = "<br/>复式 " + betCount + "组<br/>";
			detail += NumshowReturn(gameBets[i].betType,gameBets[i].betDetails);
			betDetail = (gameBets[i].betAmount / parseInt(betCount)) + "x" + betCount + "<br/>";
		}
		trHtml += "<li class = 'item-inner_text ui-etui inem-inner_font05'><div class='item-inner_div'>";
		trHtml += "<div class='item-inner_width20'>" + fillDateNum(date.getMonth() + 1)+ "-" + fillDateNum(date.getDate()) + "</br>" 
			+ fillDateNum(date.getHours()) + ":" + fillDateNum(date.getMinutes()) + ":" + fillDateNum(date.getSeconds()) + "</div>"; //日期时间
		trHtml += "<div class='item-inner_width28'>" + lotteryTitles[gameBets[i].lotteryType] + "<br/><span class='blue'>" + toShortGameNum(gameBets[i].gameNo) + "期</span></div>";//游戏类型和开奖期数
		
		if(gameBets[i].betOn == "SERIAL_2_TE" || gameBets[i].betOn == "SERIAL_3_2"){
			var betDetailsIs = gameBets[i].betDetails;
			var betNumName = nameOfArray(betDetailsIs);
				trHtml += "<div class='item-inner_width40'>" + getBetLabel(gameBets[i].lotteryType, gameBets[i].betOn, gameBets[i].betType,betdetailArr) + "<br>@<span class='red'>" + betDetailsIs[betNumName[0]] + "</span>" + detail + "</div>";//玩法
			}else{
				trHtml += "<div class='item-inner_width40'>" + getBetLabel(gameBets[i].lotteryType, gameBets[i].betOn, gameBets[i].betType,betdetailArr) +"<br>" + "@<span class='red'>" + gameBets[i].odd + "</span>" + detail + "</div>";//玩法
			}
		trHtml += "<div class='item-inner_width13'><span class='red'>" + betDetail + gameBets[i].betAmount + "</span></div>";//金额
		trHtml += "</div></li>";
		
//		total += gameBets[i].betAmount;
//		wins += win;
	}
 
	
	var pageCount = Math.ceil(gameBets.length / perPageCount);
	
	$("#orderCnt").html(gameBets.length);// > perPageCount? perPageCount: gameBets.length);
	$("#orderSum").html(total);
	$("#orderWins").html(wins.toFixed(2));
	$("#bh_total_count").html(gameBets.length);
//	$("#bh_total_bet").html(total);
	$("#bh_page_count").html(pageCount);	

	var prePage;
	var nextPage;
	if(currentPageNum == 0){
		prePage = 0;
	}else{
		prePage = currentPageNum - 1;
	}
	if(currentPageNum == pageCount - 1){
		nextPage = pageCount - 1;
	}else{
		nextPage = currentPageNum + 1;
	}
	
	var firstPage;
	var lastPage;
	if(currentPageNum < 5){
		firstPage = 0;
	}else{
		firstPage = currentPageNum - 4;
	}
	if(firstPage + 9 < pageCount){
		lastPage = firstPage + 9;
	}else{
		lastPage = pageCount - 1;
	}
	
	var pageNums = "<a href='#' onclick='renderBetHistory(" + prePage + ")'><font color='black'>前一页</font></a>&nbsp;『";
	for(var i = firstPage; i <= lastPage; i++){
		if(i == currentPageNum){
			pageNums  += "&nbsp;<font color='blue'>" + (i+1) + "</font>";
		}else{
			pageNums +="&nbsp;<a href='#' onclick='renderBetHistory(" + i + ")'><font color='black'>" + (i+1) + "</font></a>";
		}
	}
	pageNums += "&nbsp;』&nbsp;<a href='#' onclick='renderBetHistory(" + nextPage + ")'><font color='black'>后一页</font></a>";
	
 }else{
	 	pageNums = "";
		trHtml = "<li class = 'item-inner_text item-inner_div inem-inner_font05' ><div>O(∩_∩)O 啊哈，扑了个空，暂时还没有注单呢~</div></li>"
 }
	$("#immediateUl").html(trHtml);
	$("#pagenumsId").html(pageNums);
	
}
//直选连码号码显示
function NumshowReturn(betType,betDetails){
		if(betType == "OPTIONAL_2_GROUP_STR"){
			return "["+betDetails[0]+"]"+"["+betDetails[1]+"]";
		}else if(betType == "OPTIONAL_FIRST3_STR"){
			return "["+betDetails[0]+"]"+"["+betDetails[1]+"]"+"["+betDetails[2]+"]";
		}else{
			return betDetails[0];
		}
	}
/**
 * 获取账户历史
 * @param report
 */
function handleReport(report){
	console.log(report);
	var amount = 0;
	var afterCommission = 0;
	$("#specific_html").hide();
	$("#history_html").show();
	$("#historyUl").html("");
	var trHtml = "";
	var today = new Date();
	for(var i = 0; i < 14; i++){
		var bjDate = new Date(report[i].date);
		trHtml += "<li class = 'item-inner_text ui-etui inem_heightSize3 item-inner_div fontsize07' onclick='getReportDetails(\"" + fillDateNum(bjDate.getFullYear()) + "-" + fillDateNum(bjDate.getMonth() + 1) + "-" + fillDateNum(bjDate.getDate()) + "\");'>";
		if(parseInt(report[i].afterCommission) < 0){
			afterCommStr = "<a><font class = 'red'>" + (Math.round(report[i].afterCommission * 100) / 100) + "</font></a>";
		}else if(parseInt(report[i].afterCommission) > 0){
			afterCommStr = "<a><font color='green'>" + (Math.round(report[i].afterCommission * 100) / 100) + "</font></a>";
		}else{
			afterCommStr = "0";
		}
		var date = toServerTime(report[i].date);
		trHtml += "<div class='item-inner_width33'><span" + (today.getDate()==date.getDate()? " class='blue'>":">") + fillDateNum(date.getMonth() + 1) 
			+ "-" + fillDateNum(date.getDate()) + " 星期"+ weekDays[date.getDay()] + "</span></div>";
		trHtml += "<div class='item-inner_width33'>" + report[i].amount + "</div>";
		trHtml += "<div class='item-inner_width33'>" + afterCommStr + "</div>";
		amount += report[i].amount;
		afterCommission += report[i].afterCommission;
		trHtml += "</li>";
	}
	trHtml += "<li class = 'item-inner_text ui-etui inem_heightSize3 inem-inner_font05 item-inner_div fontsize08'>";
	trHtml += "<div class='item-inner_width40'>合计</div>";
	trHtml += "<div class='item-inner_width30'>"+amount+"</div>";
	if(parseInt(Math.round(afterCommission * 100) / 100) >= 0){
		trHtml += "<div class='item-inner_width30'><span class='green'>"+Math.round(afterCommission * 100) / 100+"</span></div></li>";
	}else if(parseInt(Math.round(afterCommission * 100) / 100) < 0){
		trHtml += "<div class='item-inner_width30'><span class='red'>"+Math.round(afterCommission * 100) / 100+"</span></div></li>";
	}
	$("#historyUl").html(trHtml);
}
/**
 * 2018 02 26
 * 分页 ？
 * @param page
 */
function handleReportDetails(page){
	$("#history_html").hide();
	$("#specific_html").show();
	$("#specificUl").html("");
	
	var perPageCount = 30;
	var pageCount = Math.ceil(reportDetails.length / perPageCount);
	var trHtml = "";
	var totalWin = 0;
	detailedPageNum = page;
	
	var prePage;
	var nextPage;
	if(detailedPageNum == 0){
		prePage = 0;
	}else{
		prePage = detailedPageNum - 1;
	}
	if(detailedPageNum == pageCount - 1){
		nextPage = pageCount - 1;
	}else{
		nextPage = detailedPageNum + 1;
	}
	
	var firstPage;
	var lastPage;
	if(detailedPageNum < 5){
		firstPage = 0;
	}else{
		firstPage = detailedPageNum - 4;
	}
	if(firstPage + 9 < pageCount){
		lastPage = firstPage + 9;
	}else{
		lastPage = pageCount - 1;
	}
	var pageNums = "<li class='card-footer item-inner_text item-inner_div inem_heightSize3 inem-inner_font05'><a href='#' onclick='handleReportDetails(" + prePage + ")'><font color='black'>前一页</font></a>&nbsp;『";
	for(var i = firstPage; i <= lastPage; i++){
		if(i == detailedPageNum){
			pageNums  += "&nbsp;<font color='blue'>" + (i+1) + "</font>";
		}else{
			pageNums +="&nbsp;<a href='#' onclick='handleReportDetails(" + i + ")'><font color='black'>" + (i+1) + "</font></a>";
		}
	}
	pageNums += "&nbsp;』&nbsp;<a href='#' onclick='handleReportDetails(" + nextPage + ")'><font color='black'>后一页</font></a></li>";

	
	
	var currentPageRecords = (reportDetails.length - detailedPageNum * perPageCount) > perPageCount? (detailedPageNum + 1) * perPageCount: reportDetails.length;
	console.log(reportDetails);
	for(var i = detailedPageNum * perPageCount; i < currentPageRecords; i++){
		var date = toServerTime(reportDetails[i].betTime);
		var win = (reportDetails[i].winloss + reportDetails[i].commision).toFixed(2);
		trHtml += "<li class = 'item-inner_text ui-etui inem-inner_font05'> <div class='item-inner_div'>";
		trHtml += "<div class='item-inner_width20'>" + fillDateNum(date.getMonth() + 1) + "-" + fillDateNum(date.getDate()) 
			+ "<br/><span style='color: gray'>" + fillDateNum(date.getHours()) + ":" + fillDateNum(date.getMinutes()) 
			+ ":" + fillDateNum(date.getSeconds()) + "</span></div>";
		
		trHtml += "<div class='item-inner_width26'>" + lotteryTitles[reportDetails[i].lotteryType] + "<br/><font  class='blue'>" + toShortGameNum(reportDetails[i].gameNo) + "期</font></div>";
		/*if(reportDetails[i].betDetails != "" && reportDetails[i].betDetails != null){
			trHtml += "<div class='item-inner_width26'>" + getBetLabel(reportDetails[i].lotteryType, reportDetails[i].betOn, reportDetails[i].betType,JSON.parse(reportDetails[i].betDetails)) + "<br/>@<span class='red'>" + reportDetails[i].odd + "</span></div>";
		}else{
			trHtml += "<div class='item-inner_width26'>" + getBetLabel(reportDetails[i].lotteryType, reportDetails[i].betOn, reportDetails[i].betType,reportDetails[i].betDetails) + "<br/>@<span class='red'>" + reportDetails[i].odd + "</span></div>";
		}*/
		if(reportDetails[i].betOn == "SERIAL_2_TE" || reportDetails[i].betOn == "SERIAL_3_2"){
			var betDetailsIs = JSON.parse(reportDetails[i].betDetails);
			var betNumName = nameOfArray(betDetailsIs);
			trHtml += "<div class='item-inner_width26'>" + getBetLabel(reportDetails[i].lotteryType, reportDetails[i].betOn, reportDetails[i].betType,JSON.parse(reportDetails[i].betDetails)) + "<br/>@<span class='red'>" + betDetailsIs[betNumName[0]] + "</span></div>";
		}else{
			trHtml += "<div class='item-inner_width26'>" + getBetLabel(reportDetails[i].lotteryType, reportDetails[i].betOn, reportDetails[i].betType,reportDetails[i].betDetails) +"<br>"+"@<span class='red'>" + reportDetails[i].odd + "</span></div>";
		}
		trHtml += "<div class='item-inner_width14'>" + reportDetails[i].betAmount + "</div>";
		
		if(win >= 0){
			trHtml += "<div class='item-inner_width14'><span class='green'>" + win + "</span></div></div></li>";
		}else{
			trHtml += "<div class='item-inner_width14'><span class = 'red'>" + win + "</span></div></div></li>";
		}
	}
	
	var total = 0;
	for(var i = 0; i < reportDetails.length; i++){
		total += reportDetails[i].betAmount;
		totalWin += reportDetails[i].winloss + reportDetails[i].commision;
	}
	trHtml += "<li class='item-inner_text ui-etui inem_heightSize3 inem-inner_font05'>";
	trHtml += "<div class='item-inner_div'><div class='item-inner_width40'>合计</div>";
	trHtml += "<div class='item-inner_width30'>"+total+"</div>";
	trHtml += "<div class='item-inner_width30'><span class = 'red'>"+totalWin.toFixed(2)+"</span></div></div></li>";
	trHtml += pageNums;
	$("#specificUl").html(trHtml);
}
/**
 * 2018 02 26 bug
 * 分页 ？
 * @param gameType
 * @param betOn
 * @param betType
 * @param betNumArr
 * @returns {*}
 */
function getBetLabel(gameType, betOn, betType,betNumArr){
	if(gameType == 'KLC' || gameType == "SSC" || gameType == "XYC" || gameType == "TJSC"
		|| gameType == "XJSC"|| gameType == "JXSC"|| gameType == "YNSC"|| gameType == "TJKC"|| gameType == "KLC_90"
			|| gameType == "HNKC" || gameType == "GXKC" || gameType == "YNKC"|| gameType == "SHSC" || gameType == "GD115"
			|| gameType == "JX115" || gameType == "SD115"||gameType == "BJ115" || gameType == "SH115"
			|| gameType == "LN115" || gameType == "HB115" || gameType == "JS115" || gameType == "AH115"||gameType == "JSCQ"||gameType == "JSCQ60"|| gameType == "GD115_90"){
		
		var onLabel;
	
		if((gameType == 'KLC'  || gameType == "XYC" ||  gameType == "TJKC"|| gameType == "HNKC" || gameType == "GXKC" || gameType == "YNKC"|| gameType == "KLC_90") && (betOn == "ANYONE"||betOn == "SERIAL")){
			if(betOn == "ANYONE"){
				onLabel = "正码";
			}else{
				onLabel = syxwBetOnLabel[betType]+" : </br>"+betNumArr;;
				return onLabel;
			}
		}else if((gameType == "GD115"||gameType == "JX115"||gameType == "SD115"||gameType == "BJ115"||gameType == "SH115"||gameType == "LN115"||gameType == "HB115"||gameType == "JS115"||gameType == "AH115"|| gameType == "GD115_90") && (betOn == "ANYONE"||betOn == "SERIAL")){
			if(betOn == "ANYONE"){
				onLabel = "一中一  : "+betNumArr;;
			}else{
				onLabel = syxwBetOnLabel[betType]+" : </br>"+betNumArr;;
				return onLabel;
			}
		}else if((gameType == "SSC"||gameType == "TJSC"|| gameType == "XJSC"|| gameType == "JXSC"|| gameType == "YNSC"|| gameType == "SHSC"|| gameType == "JSCQ"||gameType == "JSCQ60")&&(betOn == "SERIAL")){
			if(gameType == "SHSC"){
				return betTypeLabel[betType]+" : "+betNumArr;
			}else {
				var SSCbetTypeCN = {"COMBIN_1_FIRST3":"前三_一字组","COMBIN_1_MIDDLE3":"中三_一字组","COMBIN_1_LAST3":"后三_一字组","COMBIN_1_5":"全五_一字组","COMBIN_2_FIRST3":"前三_二字组","COMBIN_2_2_FIRST3":"前三_二字组","COMBIN_2_MIDDLE3":"中三_二字组","COMBIN_2_2_MIDDLE3":"中三_二字组","COMBIN_2_LAST3":"后三_二字组","COMBIN_2_2_LAST3":"后三_二字组",
						 "COMBIN_3_FIRST3":"前三_三字组","COMBIN_3_3_FIRST3":"前三_三字组","COMBIN_3_2_FIRST3":"前三_三字组","COMBIN_3_MIDDLE3":"中三_三字组","COMBIN_3_3_MIDDLE3":"中三_三字组","COMBIN_3_2_MIDDLE3":"中三_三字组","COMBIN_3_LAST3":"后三_三字组","COMBIN_3_3_LAST3":"后三_三字组","COMBIN_3_2_LAST3":"后三_三字组",
						 "OOXXX":"万仟","OXOXX":"万佰","OXXOX":"万拾","OXXXO":"万个","XOOXX":"仟佰","XOXOX":"仟拾","XOXXO":"仟个","XXOOX":"佰拾","XXOXO":"佰个","XXXOO":"拾个","OOOXX":"前三","XOOOX":"中三","XXOOO":"后三","GROUP3_FIRST3":"组三_前三","GROUP3_MIDDLE3":"组三_中三","GROUP3_LAST3":"组三_后三","GROUP6_FIRST3":"组六_前三","GROUP6_MIDDLE3":"组六_中三",
						 "GROUP6_LAST3":"组六_后三"};
				 return SSCbetTypeCN[betType]+" : "+betNumArr;
			}
		}else{
				if(gameType == "SHSC"){
					onLabel = betOnLabelSHSC[betOn];
				}else{
					onLabel = betOnLabel[betOn];
				}
		}
		return onLabel + " _ " + betTypeLabel[betType];
	}else if(gameType == "BJC"||gameType == "XYFT" || gameType == "JSSC"|| gameType == "JSSC60"){
		return bjcBetOnLabel[betOn] + " - " + betTypeLabel[betType];
	}else if(gameType == "JSC" || gameType == "AHK3" || gameType == "JLK3" || gameType == "GXK3"|| gameType == "JSC_90"){
		if(betOn == "TOTAL"){
			if(betType == "BIG" || betType == "SMALL"){
				return betTypeLabel[betType];
			}else{
				return betType.substr(3) + "点";
			}
		}else{
			var postPart = "";
			if(betOn == "PAIR"){
				postPart = "(" + betType.substr(3) + betType.substr(3) + ")";
			}else if(betOn == "SPEC_TWO"){
				postPart = "(" + betType.substr(5).replace("_", "") + ")";
			}else if(betOn == "TRIPLE"){
				postPart = "(" + betType.substr(3) + betType.substr(3) + betType.substr(3) + ")";
			}else if(betOn == "ANYONE"){
				postPart = "(" + betType.substr(3) + "/" + yxxIcon[parseInt(betType.substr(3)) - 1] + ")";
			}
			return betOnLabel[betOn] + postPart;
		}
	}else if(gameType == "FC3D"|| gameType == "TC3D"|| gameType == "FC3D_90"){
		var onLabel;
		if(betOn == "ANYONE"){
			onLabel = "独胆";
		}else if(betOn == "SPAN"){
			onLabel = "跨度";
		}else if(betOn == "SERIAL3"){
			onLabel = "3连";
		}else{
			onLabel = betOnLabel[betOn];
		}
		if(betOn == "SERIAL"){
			var FCDbetTypeCN = {"COMBIN_2":"二字组合","COMBIN_2_2":"二字组合","COMBIN_3":"三字组合","COMBIN_3_2":"三字组合","COMBIN_3_3":"三字组合","OOX":"二定位_佰拾","OXO":"二定位_佰个",
			"XOO":"拾个",	"OOO":"三定位","GROUP3_OPTION_5":"组选三","GROUP3_OPTION_6":"组选三","GROUP3_OPTION_7":"组选三","GROUP3_OPTION_8":"组选三","GROUP3_OPTION_9":"组选三","GROUP3_OPTION_10":"组选三",
			"GROUP6_OPTION_4":"组选六","GROUP6_OPTION_5":"组选六","GROUP6_OPTION_6":"组选六","GROUP6_OPTION_7":"组选六","GROUP6_OPTION_8":"组选六"}
			return FCDbetTypeCN[betType] + ":" + betNumArr;
		}else{
			return onLabel + " _ " + betTypeLabel[betType];
		}
	}else if(gameType == "BJKL8"||gameType == "JNDKL8" || gameType == "AZKL8"||gameType == "JNDDKL8"||gameType == "HGKL8"||gameType == "SLFKKL8"||gameType == "METKL8"||gameType == "TWBGKL8"||gameType == "DJKL8"||gameType == "BJKL8_90"){
		var onLabel;
		if(betOn == "BEFORE_AFTER"){
			onLabel = "前后和";
		}else if(betOn == "ODD_EVEN"){
			onLabel = "单双和";
		}else if(betOn == "ANYONE"){
			onLabel = "正码";
		}else{
			if(betType == "JIN"||betType == "MU"||betType == "SHUI"||betType == "HUO"||betType == "TU"){
				onLabel = "五行";
			}else{
				onLabel = betOnLabel[betOn];
			}
		}
		return onLabel + " _ " + betTypeLabel[betType];
	}else if(gameType == "BJKL8_PCEGG"||gameType == "AZKL8_PCEGG"||gameType == "JNDDKL8_PCEGG"||gameType == "HGKL8_PCEGG"||gameType == "JNDKL8_PCEGG"||gameType == "SLFKKL8_PCEGG"||gameType =="METKL8_PCEGG"||gameType =="TWBGKL8_PCEGG"||gameType =="DJKL8_PCEGG"||gameType == "PCEGG_90"){
		if(betOn == "SERIAL"){
			return betTypeLabel[betType]+": "+betNumArr;
		}else{
			return betOnLabel[betOn] + " _ " + betTypeLabel[betType];
		}
	}else if(gameType == "LOTTO_90"){
		var betNumArrName = "";
		if(betType == "DUMY_TYPE"){
			var betNumArrs;
			console.log($.type(betNumArr));
			if($.type(betNumArr) == "array" || $.type(betNumArr) == "object"){
				betNumArrs = betNumArr;
			}else{
				betNumArrs = JSON.parse(betNumArr);
			}
			var counts = 0;
			for(i in betNumArrs){
				if(i != "remove"){
					if(betOn == "GUOGUAN"){
						if(counts != 2 ){
							betNumArrName += lottoGGBetTypeLabel[i]+",";
							counts++;
						}else{
							betNumArrName += lottoGGBetTypeLabel[i]+",</br>";
							counts = 0
						}	
					}else{
						if(counts != 5 ){
							betNumArrName += lottoBetTypeLabel[i]+",";
							counts++;
						}else{
							betNumArrName += lottoBetTypeLabel[i]+",</br>";
							counts = 0
						}
					}
				}
			}
			betNumArrName = betNumArrName.substring(betNumArrName.length-1,-1);
			return lottoBetTypeLabel[betOn]+": "+"<br>"+betNumArrName;
		}else{
			if(betOn == "WUXING" && betType == "TU"){
				return lottoBetTypeLabel[betOn] + " _ " + lottoBetTypeLabel["TUTU"];
			}else if(betOn == "ZHENGMA_A" && betType == "BIG"){
				return lottoBetTypeLabel[betOn] + " _ " + lottoBetTypeLabel["ZONG_BIG"];
			}else if(betOn == "ZHENGMA_A" && betType == "SMALL"){
				return lottoBetTypeLabel[betOn] + " _ " + lottoBetTypeLabel["ZONG_SMALL"];
			}else if(betOn == "ZHENGMA_A" && betType == "ODD"){
				return lottoBetTypeLabel[betOn] + " _ " + lottoBetTypeLabel["ZONG_ODD"];
			}else if(betOn == "ZHENGMA_A" && betType == "EVEN"){
				return lottoBetTypeLabel[betOn] + " _ " + lottoBetTypeLabel["ZONG_EVEN"];
			}else if(betOn == "ZHENGMA_B" && betType == "BIG"){
				return lottoBetTypeLabel[betOn] + " _ " + lottoBetTypeLabel["ZONG_BIG"];
			}else if(betOn == "ZHENGMA_B" && betType == "SMALL"){
				return lottoBetTypeLabel[betOn] + " _ " + lottoBetTypeLabel["ZONG_SMALL"];
			}else if(betOn == "ZHENGMA_B" && betType == "ODD"){
				return lottoBetTypeLabel[betOn] + " _ " + lottoBetTypeLabel["ZONG_ODD"];
			}else if(betOn == "ZHENGMA_B" && betType == "EVEN"){
				return lottoBetTypeLabel[betOn] + " _ " + lottoBetTypeLabel["ZONG_EVEN"];
			}else{
				return lottoBetTypeLabel[betOn] + " _ " + lottoBetTypeLabel[betType];
			}
		}
	}
}

//路子
function renderRoadmap(){
	if(luziList != null){luziList = null; luziList = new Array();}
	var gameIdx = toGameIndexs(gameType);
	var roadBetOn;
	var roadBetType;
	$("#buttons_way a").each(function(){
		if($(this).hasClass("active")){
			roadBetOn = $(this).attr("beton");
			roadBetType = $(this).attr("bettype");
		}
	});
	$(".muli").html("");
    /**
	 * 2018 02 28 bug
	 * 画路子页面
     */
    roadMapqc();
	if(currentGame[gameType] != undefined && gameType != "JSC" && gameType != "AHK3" && gameType != "JLK3" && gameType != "GXK3" && gameType != "JSC_90" && currentGame[gameType].roadMap != undefined && currentGame[gameType].roadMap[roadBetOn] != undefined){
		console.log(currentGame[gameType].roadMap);
		var map = currentGame[gameType].roadMap[roadBetOn][roadBetType];
		console.log(map);
		for(var k = 0; k < 25; k++){
			var subs = new Array();
			for(var n = 0; n < 6; n++){
				subs.push('');
			}
			luziList.push(subs);
		}
		var indexnum = 0;
		var ys = 0;
		var xs = 0;
		var conut = 0;
		var lastrowlength = 0;
		for(var i = 0; i < 25 && i < map.length; i++){
			var ds = 1;
			var o = 0;
			if(i > 0){
				lastrowlength = map[map.length - i][1];
			}
			if(map[map.length - (i+1)][1] > 6){
				indexnum = 5;
				if(lastrowlength > 6){
					ys = map[map.length - (i+1)][1] - 5;
				}else{
					ys = map[map.length - (i+1)][1] - 6;
				}
				for(var c=0;c<ys;c++){
						if(roadBetType == "NO_0"){
							if(lastrowlength > 6){
								luziList[i+c+1][indexnum - 1] = map[map.length - (i+1)][0].toString();
							}else{
								luziList[i+c+1][indexnum] = map[map.length - (i+1)][0].toString();
							}						
						}else{
							if(lastrowlength > 6){
								luziList[i+c+1][indexnum - 1] = roadmapIcon[roadBetType][map[map.length - (i+1)][0]];
							}else{
								if(luziList[i+c+1]!= undefined){
									luziList[i+c+1][indexnum] = roadmapIcon[roadBetType][map[map.length - (i+1)][0]];
								}
							}
						}
				}
			}else{
				conut = map[map.length - (i+1)][1];
				indexnum = 0;
			}
			for(var j = 0; j < 6; j++){
				if(roadBetType == "NO_0"){
					if(indexnum === 0){
						if(luziList[i][j] === "" || luziList[i][j] === undefined){
							if(conut > 0){
								luziList[i][j] = map[map.length - (i+1)][0].toString();
							}						
						}else{					
							if(conut > 0){
								if(o == 0){
									o = j;
									o==0 ? 0 : o--;
								}
								luziList[i+ds][o] = map[map.length - (i+1)][0].toString();
								ds++;
							}
						}				
					}else if(indexnum === 5){
						if(luziList[i][j] === "" || luziList[i][j] === undefined){
							luziList[i][j] = map[map.length - (i+1)][0].toString();
						}
					}
					conut--;
				}else{
					if(indexnum === 0){
						if(luziList[i][j] === "" || luziList[i][j] === undefined){
							if(conut > 0){
								luziList[i][j] = roadmapIcon[roadBetType][map[map.length - (i+1)][0]];
							}
						}else{														
							if(conut > 0){
								if(o == 0){
									o = j;
									o==0 ? 0:o--;
								}
								luziList[i+ds][o] = roadmapIcon[roadBetType][map[map.length - (i+1)][0]];
								ds++;
							}							
						}						
					}else if(indexnum === 5){
						if(luziList[i][j] === "" || luziList[i][j] === undefined){
							luziList[i][j] = roadmapIcon[roadBetType][map[map.length - (i+1)][0]];
						}
					}
					conut--;
				}
			}
			reversionMap();
			makeRoadMap();
		}
	}
}

function makeRoadMap(){
	var x = 0;
	var y = 0;
	for(y = 0; y < 6; y++){
		var liHtml = "";
		for(x = 0; x < luziMap.length; x++){
			switch(luziMap[x][y]){
			   case "大":
				   liHtml += "<td><i class='dishReload_da'>大</i></td>";						   
				   break;
			   case "小":
				   liHtml += "<td><i class='dishReload_small'>小</i></td>";
				   break;
			   case "单":
				   liHtml += "<td><i class='dishReload_dan'>单</i></td>";
				   break;
			   case "双":
				   liHtml += "<td><i class='dishReload_shuang'>双</i></td>";
				   break;
			   case "單":
				   liHtml += "<td><i class='dishReload_dan'>單</i></td>";
				   break;
			   case "雙":
				   liHtml += "<td><i class='dishReload_shuang'>雙</i></td>";
				   break;
			   case "龙":
				   liHtml += "<td><i class='dishReload_long'>龙</i></td>";
				   break;
			   case "龍":
				   liHtml += "<td><i class='dishReload_long'>龍</i></td>";
				   break;
			   case "虎":
				   liHtml += "<td><i class='dishReload_tiger'>虎</i></td>";
				   break;
			   case "和":
				   liHtml += "<td><i class='dishReload_tie'>和</i></td>";
				   break;
			   case "东":
				   liHtml += "<td><i class='dishReload_dong'>东</i></td>";
				   break;
			   case "東":
				   liHtml += "<td><i class='dishReload_dong'>東</i></td>";
				   break;
			   case "西":
				   liHtml += "<td><i class='dishReload_xi'>西</i></td>";
				   break;
			   case "南":
				   liHtml += "<td><i class='dishReload_lan'>南</i></td>";
				   break;
			   case "北":
				   liHtml += "<td><i class='dishReload_b'>北</i></td>";
				   break;
			   case "中":
				   liHtml += "<td><i class='dishReload_zhong'>中</i></td>";
				   break;
			   case "发":
				   liHtml += "<td><i class='dishReload_fa'>发</i></td>";
				   break;
			   case "發":
				   liHtml += "<td><i class='dishReload_fa'>發</i></td>";
				   break;
			   case "白":
				   liHtml += "<td><i class='dishReload_bai'>白</i></td>";
				   break;
			   case "春":
				   liHtml += "<td><i class='dishReload_chun'>春</i></td>";
				   break;
			   case "夏":
				   liHtml += "<td><i class='dishReload_xia'>夏</i></td>";
				   break;
			   case "秋":
				   liHtml += "<td><i class='dishReload_qiu'>秋</i></td>";
				   break;
			   case "冬":
				   liHtml += "<td><i class='dishReload_tong'>冬</i></td>";
				   break;
			   case "红":
				   liHtml += "<td><i class='dishReload_red'>红</i></td>";
				   break;
			   case "蓝":
				   liHtml += "<td><i class='dishReload_blue'>蓝</i></td>";
				   break;
			   case "绿":
				   liHtml += "<td><i class='dishReload_green'>绿</i></td>";
				   break;
			   case "金":
				   liHtml += "<td><i class='dishReload_jin'>金</i></td>";
				   break;
			   case "木":
				   liHtml += "<td><i class='dishReload_mu'>木</i></td>";
				   break;
			   case "水":
				   liHtml += "<td><i class='dishReload_shui'>水</i></td>";
				   break;
			   case "火":
				   liHtml += "<td><i class='dishReload_huo'>火</i></td>";
				   break;
			   case "土":
				   liHtml += "<td><i class='dishReload_tu'>土</i></td>";
				   break;
			   case "质":
				   liHtml += "<td><i class='dishReload_zhi'>质</i></td>";
				   break;
			   case "合":
				   liHtml += "<td><i class='dishReload_he'>合</i></td>";
				   break;
			   case "前":
				   liHtml += "<td><i class='dishReload_qian'>前</i></td>";
				   break;
			   case "后":
				   liHtml += "<td><i class='dishReload_hou'>后</i></td>";
				   break;
			   case "":
				   liHtml += "<td class='dishReload_oo'></td>";
				   break;
			   default:
				   liHtml += "<td><i class='dishReload_nums'>"+luziMap[x][y]+"</i></td>";
				   break;
			}
		}
		$("#rmTr" + y).html(liHtml);
	}
}
/**
 * 2018 02 27 bug
 * 路子 ？
 */
function reversionMap(){
	if(luziMap != null){
		luziMap = null; luziMap = new Array();
	}	
	for(var i= 0; i < luziList.length; i++){
		if(luziList[luziList.length - (i+1)][0] != ""){
			luziMap.push(luziList[luziList.length - (i+1)]);
		}
	}
	var len = 25 - luziMap.length;
	for(var k = 0; k < len; k++){
		var ss = new Array();
		for(var n = 0; n < 6; n++){
			ss.push('');
		}
		luziMap.push(ss);
	}
}

/*//给路子添加期号和开奖结果
function addResultToRoadMap(roadMap){
	var tmpMap = new Array();
	tmpMap =  roadMap;
	console.log(popupGameNum[gameType]);
	var kk = popupGameNum[gameType].length - 1;
	for(var o = 0; o < tmpMap.length; o++){
		var qh = new Array();		
		for(var u = 0; u < tmpMap[tmpMap.length - (o+1)][1]; u++){
			if(kk >= 0){
			qh.push({"gameNo":popupGameNum[gameType][kk].gameNo,"result":popupGameNum[gameType][kk].result});
				kk--;
			}
		}
		if(qh.length > 1){
			qh.sort(function(a,b){
				return a.gameNo-b.gameNo;
		});}
		if(qh.length > 0){tmpMap[tmpMap.length - (o+1)].push(qh);}
//		consoleHandler("tmpMap "+(tmpMap.length - (o+1))+"*"+JSON.stringify(tmpMap[tmpMap.length - (o+1)]));
	}
	
	for(var t = 0; t < tmpMap.length; t++){
		if(tmpMap[t].length==3){
			tmpMap = tmpMap.slice(t);
			break;
		}

	}
	return tmpMap;
}*/
/**
 * 2018 02 26 bug
 * 路子 字页面方法
 */
function roadMapqc(){
	var x = 0;
	var y = 0;
	for(y = 0; y < 6; y++){
		var liHtml = "";
		for(x = 0; x < 25; x++){
				   liHtml += "<td class='dishReload_oo'></td>";
		}
		$("#rmTr" + y).html(liHtml);
	}
}


//给popupGameNum添加开奖结果信息
/*function handleHisNumber(dataHistory){
	var type = dataHistory.gameType;
	if(type == "KLC" || type == "TJKC" || type == "HNKC" || type == "GXKC"){
		popupGameNum[type] = dataHistory.history;
		popupGameNum[type].sort(function(a,b){
			return a.gameNo - b.gameNo;
		});
		popupGameNum[type] = popupGameNum[type].slice(-210);
	}else if(type=="XYC"){
		popupGameNum["XYC"] = dataHistory.history;
		popupGameNum["XYC"].sort(function(a,b){
			return a.gameNo - b.gameNo;
		});
		popupGameNum["XYC"] = popupGameNum["XYC"].slice(-210);
	}else if( type == "TJSC" || type == "XJSC" || type == "JXSC" || type == "YNSC" || type == "SHSC"|| type == "JSCQ"){
		popupGameNum[type] = dataHistory.history;
		popupGameNum[type].sort(function(a,b){
			return a.gameNo - b.gameNo;
		});
		popupGameNum[type] = popupGameNum[type].slice(-210);
	}else if(type == "BJC" ||type == "XYFT"){
		popupGameNum[type] = dataHistory.history;
		popupGameNum[type].sort(function(a,b){
			return a.gameNo - b.gameNo;
		});
		popupGameNum[type] = popupGameNum[type].slice(-210);
	}else if(type == "JSC" || type == "AHK3" || type == "JLK3" || type == "GXK3"){
		popupGameNum[type] = dataHistory.history;
		popupGameNum[type].sort(function(a,b){
			return a.gameNo - b.gameNo;
		});
		popupGameNum[type] = popupGameNum[type].slice(-210);
	}else if(type == "SSC"){
		popupGameNum[type] = dataHistory.history;
		popupGameNum[type].sort(function(a,b){
			return a.gameNo - b.gameNo;
		});
		popupGameNum[type] = popupGameNum[type].slice(-210);
		var gameNo=popupGameNum[type][0].gameNo;
		if(gameNo.substring(8)=="024"){
			var g=popupGameNum[type].shift();
		}
		}else if(type == "GD115" || type == "JX115"||type == "SD115"||type == "BJ115"||type == "SH115"||type == "LN115"||type == "HB115"||type == "JS115"||type == "AH115"){
		popupGameNum[type] = dataHistory.history;
		popupGameNum[type].sort(function(a,b){
			return a.gameNo - b.gameNo;
		});
		popupGameNum[type] = popupGameNum[type].slice(-210);
	}else if(type == "BJKL8" || type == "AZKL8"||type == "JNDKL8"||type == "HGKL8"||type == "JNDDKL8"||type == "SLFKKL8"||type == "METKL8"||type == "TWBGKL8"||type == "DJKL8"){
		popupGameNum[type] = dataHistory.history;
		popupGameNum[type].sort(function(a,b){
			return a.gameNo - b.gameNo;
		});
		popupGameNum[type] = popupGameNum[type].slice(-210);
	}else if(type == "FC3D" ||type == "TC3D"){
		popupGameNum[type] = dataHistory.history;
		popupGameNum[type].sort(function(a,b){
			return a.gameNo - b.gameNo;
		});
		popupGameNum[type] = popupGameNum[type].slice(-210);
	}
}*/

/*function pushLastResult(lastResult,type){
	var newsub;
	if(popupGameNum[type].length > 0){
		if(popupGameNum[type][popupGameNum[type].length -1].gameNo != lastResult.gameNo){
			newsub = {"createTime":0,"gameNo":"","result":[]};
			newsub.gameNo = lastResult.gameNo;
			newsub.result = lastResult.gameResult;
			popupGameNum[type].push(newsub);
			if(popupGameNum[type].length > 210){
				popupGameNum[type].slice(-210);
			}
		}
	}
}*/
/**
 * 2018 02 25 bug
 * 长龙
 */
function renderRanking(yxType){
	if(currentGame[yxType] != undefined){
		$("#ChanglongUl").html("");
		var trHtml = "";
		var labels;
/*		if(yxType == "JSC" || yxType == "AHK3" || yxType == "JLK3" || yxType == "GXK3"){
			var history = currentGame[yxType].history;
			console.log(currentGame[yxType]);
			$("#ChanglongUl").html("");
			for(var i = history.length - 1 ; i >= 0; i--){
				trHtml += "<li class = 'item-inner_text border_1px font_inner' style = 'min-height:0rem'><div class = 'item-inner_div'><span class='dib item-inner_width20'>" + history[i].gameNo.substr(9) +  "期</span><span class = 'item-inner_width40'>";
				var total = 0;
				var dices = "";
				for(var j = 0; j < history[i].gameResult.length; j++){
					total += history[i].gameResult[j];
					dices += "<img src='" + contextPath + "/mobile/imgs/jscimg/k" + history[i].gameResult[j] + ".png'/>";
				}
				trHtml += dices + "</span><span class = 'item-inner_width20'>" + total + "</span>";
				var td = "";
				if(history[i].gameResult[0] == history[i].gameResult[1] && history[i].gameResult[0] == history[i].gameResult[2]){
					td = "<span class='green item-inner_width20'>" +"通吃</span>";
				}else if(total >= 11){
					td = "<span class='red item-inner_width20'>" + "大</span>";
				}else{
					td = "<span class='item-inner_width20'>" + "小</span>";
				}
				trHtml += td + "</div></li>";
			}
			$("#ChanglongUl").html(trHtml);
			return;
		} */
			
		if(yxType == "FC3D"||yxType =="TC3D"|| yxType == "FC3D_90"){
			labels = d3BetOnLabel;
		}else if(yxType == "BJKL8"||yxType == "AZKL8"||yxType == "JNDDKL8"||yxType == "HGKL8"||yxType == "JNDKL8"||yxType == "SLFKKL8"||yxType =="METKL8"||yxType =="TWBGKL8"||yxType =="DJKL8"||yxType == "BJKL8_90"){
			labels = kl8BetOnLabel;
		}else if(yxType == "BJC"||yxType == "XYFT" || yxType == "JSSC" ||yxType =="JSSC60"){
			labels = bjcBetOnLabel;
		}else if(yxType == "BJKL8_PCEGG"||yxType == "AZKL8_PCEGG"||yxType == "JNDDKL8_PCEGG"||yxType == "HGKL8_PCEGG"||yxType == "JNDKL8_PCEGG"||yxType == "SLFKKL8_PCEGG"||yxType =="METKL8_PCEGG"||yxType =="TWBGKL8_PCEGG"||yxType =="DJKL8_PCEGG"||yxType == "PCEGG_90"){
			labels = pceggBetOnLabel;
		}else if(gameType == "SHSC"){
			labels = betOnLabelSHSC;
		}else{
			labels = betOnLabel;
		}
		console.log(currentGame[yxType]);
		if(currentGame[yxType].twoSideRanking != undefined){
			for(var i = 0; i < currentGame[yxType].twoSideRanking.length; i++){
				var rank = currentGame[yxType].twoSideRanking[i];
				if((yxType == "BJC" || yxType == "XYFT" || yxType == "JSSC" || yxType== "JSSC60") && (rank["betType"] == "DRAGON" || rank["betType"] == "TIGER")){
					trHtml += "<li class = 'item-inner_text border_1px  font_inner' style = 'min-height:0rem'><div class = 'item-inner_div'><span class = 'item-inner_width40'>" + labels[rank["betOn"]] +"</span><span class = 'item-inner_width30'>" + betTypeLabel[rank["betType"]] + "</span><span class='item-inner_width30 blue '>" + rank["times"]  + "期</span></div></li>";
				}else if((yxType == "BJKL8" || yxType == "AZKL8" || yxType == "JNDDKL8" || yxType == "HGKL8" || yxType == "JNDKL8" || yxType == "SLFKKL8"||yxType =="METKL8"||yxType =="TWBGKL8"||yxType =="DJKL8"||yxType == "BJKL8_90") && (rank["betType"] == "JIN"||rank["betType"] == "MU"||rank["betType"] == "SHUI"||rank["betType"] == "HUO"||rank["betType"] == "TU")){
					trHtml += "<li class = 'item-inner_text border_1px  font_inner' style = 'min-height:0rem'><div class = 'item-inner_div'><span class = 'item-inner_width40'>" + "五行" + "</span><span class = 'item-inner_width30'>" + betTypeLabel[rank["betType"]] + "</span><span class='item-inner_width30 blue'>" + rank["times"] + "期</span></div></li>";
				}else{
					trHtml += "<li class = 'item-inner_text border_1px  font_inner' style = 'min-height:0rem'><div class = 'item-inner_div'><span class = 'item-inner_width40'>" + labels[rank["betOn"]] + "</span><span class = 'item-inner_width30'>" + betTypeLabel[rank["betType"]] + "</span><span class='item-inner_width30 blue'>" + rank["times"]+ "期</span></div></li>";
				}
			}
		}
		$("#ChanglongUl").html(trHtml);
	}
}
function nameOfArray(array){
	var names = [];
	for(i in array){
		if(i != "remove"){
			names.push(i);
		}
	}
	return names;
}
/*function renderAppearance(yxType){
	if(yxType == "JSC" || yxType == "BJC" || yxType == "AHK3" || yxType == "JLK3" || yxType == "GXK3"||yxType == "XYFT"){
		return;
	}
	if(currentGame[yxType] != undefined){
		if(yxType == "SSC" || yxType=="TJSC" || yxType=="XJSC" || yxType=="JXSC" || yxType=="YNSC" || yxType=="SHSC"|| yxType=="JSCQ"){
			$("#paihangNum").html("");
			var ball = $("#selectwayNum").val();
			console.log(ball);
			var tdHtml = "";
			for(var i = 0; i < 10; i++){
				tdHtml += "<li class = 'item-inner_text  item-inner' style = 'min-height:0rem'>" + currentGame[yxType].appearanceList[0][ball]["NO_" + i] + "</li>";
			}
			$("#paihangNum").html(tdHtml);
		}else if((yxType == "KLC" && currentPlayType["KLC"] != "SERIAL")
				 || (yxType == "TJKC" && currentPlayType["TJKC"] != "SERIAL")
				   || (yxType == "HNKC" && currentPlayType["HNKC"] != "SERIAL")){
			var ball = "BALL_" + $("#playTypeSelect").val().substr(2);
			var tdBallRate1 = "";
			var tdBallMiss1 = "";
			var tdBallRate2 = "";
			var tdBallMiss2 = "";
			for(var i = 1; i <= 10; i++){
				tdBallRate1 += "<td>" + currentGame[yxType].appearanceList[0][ball]["NO_" + i] + "</td>";
				tdBallMiss1 += "<td>" + currentGame[yxType].appearanceList[1]["ANYONE"]["NO_" + i] + "</td>";
			}
			for(var i = 11; i <= 20; i++){
				tdBallRate2 += "<td>" + currentGame[yxType].appearanceList[0][ball]["NO_" + i] + "</td>";
				tdBallMiss2 += "<td>" + currentGame[yxType].appearanceList[1]["ANYONE"]["NO_" + i] + "</td>";
			}
			$("#ballRate1").html(tdBallRate1);
			$("#ballMiss1").html(tdBallMiss1);
			$("#ballRate2").html(tdBallRate2);
			$("#ballMiss2").html(tdBallMiss2);
		}else if((yxType == "GXKC" && currentPlayType["GXKC"] != "SERIAL")){
			var ball = "BALL_" + $("#playTypeSelect").val().substr(2);
			var tdBallRate1 = "";
			var tdBallMiss1 = "";
			var tdBallRate2 = "";
			var tdBallMiss2 = "";
			for(var i = 1; i <= 10; i++){
				tdBallRate1 += "<td>" + currentGame[yxType].appearanceList[0][ball]["NO_" + i] + "</td>";
				tdBallMiss1 += "<td>" + currentGame[yxType].appearanceList[1]["ANYONE"]["NO_" + i] + "</td>";
			}
			for(var i = 11; i <= 21; i++){
				tdBallRate2 += "<td>" + currentGame[yxType].appearanceList[0][ball]["NO_" + i] + "</td>";
				tdBallMiss2 += "<td>" + currentGame[yxType].appearanceList[1]["ANYONE"]["NO_" + i] + "</td>";
			}
			$("#ballRate1").html(tdBallRate1);
			$("#ballMiss1").html(tdBallMiss1);
			$("#ballRate2").html(tdBallRate2);
			$("#ballMiss2").html(tdBallMiss2);
		
		}else if(yxType == "GD115"||yxType == "JX115"||yxType == "SD115"||yxType == "BJ115"||yxType == "SH115"||yxType == "LN115"||yxType == "HB115"||yxType == "JS115"||yxType == "AH115"){
			$("#paihangNum").html("");
			var ball = $("#selectwayNum").val();
			var tdHtml = "";
			for(var i = 0; i < 11; i++){
				tdHtml += "<li class = 'item-inner_text  item-inner' style = 'min-height:0rem'>" + currentGame[yxType].appearanceList[0][ball]["NO_" + (i+1)] + "</li>";
			}
			$("#paihangNum").html(tdHtml);
		}
	}
}*/

