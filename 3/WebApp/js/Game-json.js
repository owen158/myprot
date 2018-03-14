var game={
//	真人视讯
	LiveVideo:[
	 	{img:'../images/LiveVideo/cg.png',title:'Cagayan88',sub:'开始游戏',Type:"CG",id:"",Mod:""},
        {img:'../images/LiveVideo/ds.png',title:'DS太阳城',sub:'开始游戏',Type:"DS",id:"",Mod:""},
        {img:'../images/LiveVideo/ag.png',title:'AGIN国际厅',sub:'开始游戏',Type:"AGIN",id:"",Mod:"mobile"},
        {img:'../images/LiveVideo/sun.png',title:'申博视讯',sub:'开始游戏',Type:"SB",id:"3",Mod:""},
        {img:'../images/LiveVideo/og.png',title:'OG视讯',sub:'开始游戏',Type:"OG",id:"",Mod:""},
        {img:'../images/LiveVideo/bbin.png',title:'BBIN视讯',sub:'开始游戏',Type:"BBIN",id:"1",Mod:""}
	],
//	电子游艺
	ElectronicGames:[
		{img:'http://192.168.0.140/mobile56/images/Home/ElectronicGames/pt.png',title:'PT电子',sub:'开始游戏',Type:"PT",id:'',Mod:''},
        {img:'http://192.168.0.140/mobile56/images/Home/ElectronicGames/mg.png',title:'MG电子',sub:'开始游戏',Type:"GAMEMG",id:'',Mod:''},
        {img:'http://192.168.0.140/mobile56/images/Home/ElectronicGames/haba.png',title:'HABA电子',sub:'开始游戏',Type:"GAMEHABA",id:'',Mod:''},
        {img:'http://192.168.0.140/mobile56/images/Home/ElectronicGames/bbin.png',title:'BBIN电子',sub:'开始游戏',Type: "BBIN",id:'2',Mod:''},
        {img:'http://192.168.0.140/mobile56/images/Home/ElectronicGames/sun.png',title:'TGP电子',sub:'开始游戏',Type: "SB",id:'4',Mod:''}
	],
//	体育赛事
	Sportsevents:[
		{img:'http://192.168.0.140/mobile56/images/Home/Sportsevents/hg.png',title:'皇冠体育',sub:'开始游戏',Type:"HG",id:"",Mod:"MB"}
	],
//	彩票游戏
	NewIGPJ:[
		{img:'http://192.168.0.140/mobile56/images/Home/LooteryGame/x_pk10.png',title:'PK拾',Type:"IGPJLOTTERY",id:'2',Mod:'MB'},
        {img:'http://192.168.0.140/mobile56/images/Home/LooteryGame/x_ssc.png',title:'时时彩',Type:"IGPJLOTTERY",id:'1',Mod:'MB'},
        {img:'http://192.168.0.140/mobile56/images/Home/LooteryGame/x_kl10f.png',title:'快乐十分',Type:"IGPJLOTTERY",id:'4',Mod:'MB'},                        			{img:'http://192.168.0.140/mobile56/images/Home/LooteryGame/x_11x5.png',title:'11选5',Type:"IGPJLOTTERY",id:'18',Mod:'MB'},
        {img:'http://192.168.0.140/mobile56/images/Home/LooteryGame/x_kl8.png',title:'快乐8分',Type: "IGPJLOTTERY",id:'28',Mod:'MB'},
        {img:'http://192.168.0.140/mobile56/images/Home/LooteryGame/x_k3.png',title:'快3',Type: "IGPJLOTTERY",id:'3',Mod:'MB'},                        			{img:'http://192.168.0.140/mobile56/images/Home/LooteryGame/x_fc3d.png',title:'3D',Type:"IGPJLOTTERY",id:'36',Mod:'MB'},
        {img:'http://192.168.0.140/mobile56/images/Home/LooteryGame/x_pcdd.png',title:'PC蛋蛋',Type:"IGPJLOTTERY",id:'44',Mod:'MB'},
        {img:'http://192.168.0.140/mobile56/images/Home/LooteryGame/x_lhc.png',title:'六合彩',Type:"IGPJLOTTO",id:'',Mod:'MB'}
	],
	IGLooter:[
		{img:'http://192.168.0.140/mobile56/images/Home/LooteryGame/j_pk.png',title:'PK拾',Type:"IGLOTTERY",id:'2',Mod:'MB'},
        {img:'http://192.168.0.140/mobile56/images/Home/LooteryGame/j_ssc.png',title:'时时彩',Type:"IGLOTTERY",id:'1',Mod:'MB'},
        {img:'http://192.168.0.140/mobile56/images/Home/LooteryGame/j_kl.png',title:'快乐十分',Type:"IGLOTTERY",id:'4',Mod:'MB'},
		{img:'http://192.168.0.140/mobile56/images/Home/LooteryGame/j_11x5.png',title:'11选5',Type:"IGLOTTERY",id:'18',Mod:'MB'},
        {img:'http://192.168.0.140/mobile56/images/Home/LooteryGame/j_k8.png',title:'快乐8分',Type: "IGLOTTERY",id:'28',Mod:'MB'},
	    {img:'http://192.168.0.140/mobile56/images/Home/LooteryGame/j_k3.png',title:'快3',Type: "IGLOTTERY",id:'3',Mod:'MB'},
		{img:'http://192.168.0.140/mobile56/images/Home/LooteryGame/j_3d.png',title:'3D',Type:"IGLOTTERY",id:'36',Mod:'MB'},
        {img:'http://192.168.0.140/mobile56/images/Home/LooteryGame/j_pc.png',title:'PC蛋蛋',Type:"IGLOTTERY",id:'44',Mod:'MB'},
        {img:'http://192.168.0.140/mobile56/images/Home/LooteryGame/j_xgc.png',title:'六合彩',Type:"IGLOTTO",id:'',Mod:'MB'}
	],
	VrLooter:[
		{img:'http://192.168.0.140/mobile56/images/Home/LooteryGame/officail_vrjx2.png',title:'VR金星1.5分彩',id:'1'},
        {img:'http://192.168.0.140/mobile56/images/Home/LooteryGame/officail_sc2.png',title:'VR赛车',id:'2'},
        {img:'http://192.168.0.140/mobile56/images/Home/LooteryGame/officail_sfc2.png',title:'VR3分彩',id:'11'},
        {img:'http://192.168.0.140/mobile56/images/Home/LooteryGame/officail_vrhs2.png',title:'VR 火星1.5分彩 ',id:'12'},
        {img:'http://192.168.0.140/mobile56/images/Home/LooteryGame/officail_ft2.png',title:'VR快艇',id:'13'},
        {img:'http://192.168.0.140/mobile56/images/Home/LooteryGame/officail_vrbjl2.png',title:'VR百家乐',id:'15'},
        {img:'http://192.168.0.140/mobile56/images/Home/LooteryGame/officail_vrsix2.png',title:'VR六合彩',id:'16'}
	],
	 VrLiveVideo:[
        {img:'http://192.168.0.140/mobile56/images/Home/LooteryGame/ssc1.png',title:'重庆时时彩',id:'3'},
        {img:'http://192.168.0.140/mobile56/images/Home/LooteryGame/xjsc.png',title:'新疆时时彩',id:'4'},
        {img:'http://192.168.0.140/mobile56/images/Home/LooteryGame/tjsc.png',title:'天津时时彩',id:'5'},
        {img:'http://192.168.0.140/mobile56/images/Home/LooteryGame/gd115.png',title:'广东11选5',id:'6'},
        {img:'http://192.168.0.140/mobile56/images/Home/LooteryGame/jx115.png',title:'江西11选5',id:'7'},
        {img:'http://192.168.0.140/mobile56/images/Home/LooteryGame/bjc.png',title:'北京赛车',id:'8'},
        {img:'http://192.168.0.140/mobile56/images/Home/LooteryGame/ahk3.png',title:'江苏快三',id:'9'},
        {img:'http://192.168.0.140/mobile56/images/Home/LooteryGame/xyc.png',title:'幸运28',id:'10'},
        {img:'http://192.168.0.140/mobile56/images/Home/LooteryGame/card.png',title:'香港六合彩',id:'14'}
    ]
	
}
