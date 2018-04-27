<template>
    <div class='infoMain'>
        <div class="row A-search ">
            <div class="col-6 A-lf BBIN">
                <img  src="http://mobile.beike188.com/mobileYHH/image/Home/BBIN/bbin.png" alt="">
            </div>
            <div class="col-6 A-rf">
                <div class="A-sousuo-box">
                    <label for="sousuo" class="">
                        <input id="sousuo" v-model="query" type="text" placeholder="搜索">
                    </label>
                    <span class="iconfont icon-sousuo-copy-copy-copy"></span>
                </div>
            </div>
        </div>
        <!--<input v-model="query">-->
        <div class="A-game-content-wrapper">
            <p class="A-title">全部游戏</p>
            <transition-group name="staggered-fade"   tag="div" v-bind:css="false"  v-on:before-enter="beforeEnter" v-on:enter="enter" v-on:leave="leave">
                <div class="col-4 A-box" v-for="(item, index) in computedList" v-bind:key="item.title" v-bind:data-id="item.GameID">
                    <div class="A-box-child">
                        <p class="A-text">{{ item.title}}</p>
                        <p class="A-Img" :style="{background:'url('+item.src+')  no-repeat',backgroundSize:'100% 100%',backgroundOrigin:'content-box'}"></p>
                    </div>
                </div>
            </transition-group>
        </div>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                text:'信息公告',
                query: '',
                gameobj:{
                    Hottest:[
                        {"GameID":"5909","src":"http://mobile.beike188.com/mobileYHH/image/Home/BBIN/Game_5909.png","title":"开心消消乐"},
                        {"GameID":"5902","src":"http://mobile.beike188.com/mobileYHH/image/Home/BBIN/Game_5902.png","title":"糖果派对"},
                        {"GameID":"5908","src":"http://mobile.beike188.com/mobileYHH/image/Home/BBIN/Game_5908.png","title":"糖果派对2"},
                        {"GameID":"5901","src":"http://mobile.beike188.com/mobileYHH/image/Home/BBIN/Game_5901.png","title":"连环夺宝"},
                        {"GameID":"5601","src":"http://mobile.beike188.com/mobileYHH/image/Home/BBIN/Game_5601.png","title":"秘境冒险"},
                        {"GameID":"5062","src":"http://mobile.beike188.com/mobileYHH/image/Home/BBIN/Game_5062.png","title":"龙在囧途"},
                        {"GameID":"5404","src":"http://mobile.beike188.com/mobileYHH/image/Home/BBIN/Game_5404.png","title":"沙滩排球"},
                        {"GameID":"5837","src":"http://mobile.beike188.com/mobileYHH/image/Home/BBIN/Game_5837.png","title":"喜福猴年"},
                        {"GameID":"5835","src":"http://mobile.beike188.com/mobileYHH/image/Home/BBIN/Game_5835.png","title":"喜福牛年"},
                        {"GameID":"5903","src":"http://mobile.beike188.com/mobileYHH/image/Home/BBIN/Game_5903.png","title":"秦皇秘宝"},
                        {"GameID":"5083","src":"http://mobile.beike188.com/mobileYHH/image/Home/BBIN/Game_5083.png","title":"钻石列车"},
                        {"GameID":"5106","src":"http://mobile.beike188.com/mobileYHH/image/Home/BBIN/Game_5106.png","title":"三国"},
                        {"GameID":"5096","src":"http://mobile.beike188.com/mobileYHH/image/Home/BBIN/Game_5096.png","title":"五行"},
                        {"GameID":"5043","src":"http://mobile.beike188.com/mobileYHH/image/Home/BBIN/Game_5043.png","title":"钻石水果盘"},
                        {"GameID":"5823","src":"http://mobile.beike188.com/mobileYHH/image/Home/BBIN/Game_5823.png","title":"发大财"},
                        {"GameID":"5076","src":"http://mobile.beike188.com/mobileYHH/image/Home/BBIN/Game_5076.png","title":"数字大转轮"},
                        {"GameID":"5402","src":"http://mobile.beike188.com/mobileYHH/image/Home/BBIN/Game_5402.png","title":"夜市人生"},
                        {"GameID":"5907","src":"http://mobile.beike188.com/mobileYHH/image/Home/BBIN/Game_5907.png","title":"趣味台球"},
                        {"GameID":"5005","src":"http://mobile.beike188.com/mobileYHH/image/Home/BBIN/Game_5005.png","title":"惑星战记"},
                        {"GameID":"5058","src":"http://mobile.beike188.com/mobileYHH/image/Home/BBIN/Game_5058.png","title":"疯狂水果盘"},
                        {"GameID":"5095","src":"http://mobile.beike188.com/mobileYHH/image/Home/BBIN/Game_5095.png","title":"斗鸡"},
                        {"GameID":"5093","src":"http://mobile.beike188.com/mobileYHH/image/Home/BBIN/Game_5093.png","title":"金瓶梅"},
                        {"GameID":"5084","src":"http://mobile.beike188.com/mobileYHH/image/Home/BBIN/Game_5084.png","title":"圣兽传说"},
                        {"GameID":"5079","src":"http://mobile.beike188.com/mobileYHH/image/Home/BBIN/Game_5079.png","title":"3D数字大转轮"},
                        {"GameID":"5057","src":"http://mobile.beike188.com/mobileYHH/image/Home/BBIN/Game_5057.png","title":"明星97"},
                        {"GameID":"5801","src":"http://mobile.beike188.com/mobileYHH/image/Home/BBIN/Game_5801.png","title":"海豚世界"},
                        {"GameID":"5094","src":"http://mobile.beike188.com/mobileYHH/image/Home/BBIN/Game_5094.png","title":"金瓶梅2"},
                        {"GameID":"5090","src":"http://mobile.beike188.com/mobileYHH/image/Home/BBIN/Game_5090.png","title":"金鸡报喜"},
                        {"GameID":"5088","src":"http://mobile.beike188.com/mobileYHH/image/Home/BBIN/Game_5088.png","title":"斗大"},
                        {"GameID":"5061","src":"http://mobile.beike188.com/mobileYHH/image/Home/BBIN/Game_5061.png","title":"超级7"},
                        {"GameID":"5054","src":"http://mobile.beike188.com/mobileYHH/image/Home/BBIN/Game_5054.png","title":"爆骰"},
                        {"GameID":"5044","src":"http://mobile.beike188.com/mobileYHH/image/Home/BBIN/Game_5044.png","title":"明星97II"},
                        {"GameID":"5006","src":"http://mobile.beike188.com/mobileYHH/image/Home/BBIN/Game_5006.png","title":"Staronic"},
                        {"GameID":"5030","src":"http://mobile.beike188.com/mobileYHH/image/Home/BBIN/Game_5030.png","title":"幸运财神"},
                        {"GameID":"5108","src":"http://mobile.beike188.com/mobileYHH/image/Home/BBIN/Game_5108.png","title":"彩金轮盘"},
                        {"GameID":"5010","src":"http://mobile.beike188.com/mobileYHH/image/Home/BBIN/Game_5010.png","title":"外星战记"},
                        {"GameID":"5805","src":"http://mobile.beike188.com/mobileYHH/image/Home/BBIN/Game_5805.png","title":"凯萨帝国"},
                        {"GameID":"5407","src":"http://mobile.beike188.com/mobileYHH/image/Home/BBIN/Game_5407.png","title":"大红帽与小野狼"},
                        {"GameID":"5828","src":"http://mobile.beike188.com/mobileYHH/image/Home/BBIN/Game_5828.png","title":"霸王龙"},
                        {"GameID":"5060","src":"http://mobile.beike188.com/mobileYHH/image/Home/BBIN/Game_5060.png","title":"动物奇观五"}
                    ],
                    All:[
                        {"GameID":"5005","src":"http://mobile.beike188.com/mobileYHH/image/Home/BBIN/Game_5005.png","title":"惑星战记"},
                        {"GameID":"5006","src":"http://mobile.beike188.com/mobileYHH/image/Home/BBIN/Game_5006.png","title":"Staronic"},
                        {"GameID":"5007","src":"http://mobile.beike188.com/mobileYHH/image/Home/BBIN/Game_5007.png","title":"激爆水果盘"},
                        {"GameID":"5008","src":"http://mobile.beike188.com/mobileYHH/image/Home/BBIN/Game_5008.png","title":"猴子爬树"},
                        {"GameID":"5008","src":"http://mobile.beike188.com/mobileYHH/image/Home/BBIN/Game_5009.png","title":"金刚爬楼"},
                        {"GameID":"5010","src":"http://mobile.beike188.com/mobileYHH/image/Home/BBIN/Game_5010.png","title":"外星战记"},
                        {"GameID":"5012","src":"http://mobile.beike188.com/mobileYHH/image/Home/BBIN/Game_5012.png","title":"外星争霸"},
                        {"GameID":"5013","src":"http://mobile.beike188.com/mobileYHH/image/Home/BBIN/Game_5013.png","title":"传统"},
                        {"GameID":"5014","src":"http://mobile.beike188.com/mobileYHH/image/Home/BBIN/Game_5014.png","title":"丛林"},
                        {"GameID":"5015","src":"http://mobile.beike188.com/mobileYHH/image/Home/BBIN/Game_5015.png","title":"FIFA2010"},
                        {"GameID":"5016","src":"http://mobile.beike188.com/mobileYHH/image/Home/BBIN/Game_5016.png","title":"史前丛林冒险"},
                        {"GameID":"5017","src":"http://mobile.beike188.com/mobileYHH/image/Home/BBIN/Game_5017.png","title":"星际大战"},
                        {"GameID":"5026","src":"http://mobile.beike188.com/mobileYHH/image/Home/BBIN/Game_5026.png","title":"2012伦敦奥运"},

                        {"GameID":"5028","src":"http://mobile.beike188.com/mobileYHH/image/Home/BBIN/Game_5028.png","title":"中秋月光派对"},
                        {"GameID":"5029","src":"http://mobile.beike188.com/mobileYHH/image/Home/BBIN/Game_5029.png","title":"圣诞派对"},
                        {"GameID":"5030","src":"http://mobile.beike188.com/mobileYHH/image/Home/BBIN/Game_5030.png","title":"幸运财神"},
                        {"GameID":"5034","src":"http://mobile.beike188.com/mobileYHH/image/Home/BBIN/Game_5034.png","title":"王牌JPK"},
                        {"GameID":"5035","src":"http://mobile.beike188.com/mobileYHH/image/Home/BBIN/Game_5035.png","title":"加勒比扑克"},
                        {"GameID":"5039","src":"http://mobile.beike188.com/mobileYHH/image/Home/BBIN/Game_5039.png","title":"鱼虾蟹"},
                        {"GameID":"5040","src":"http://mobile.beike188.com/mobileYHH/image/Home/BBIN/Game_5040.png","title":"百搭二王"},
                        {"GameID":"5034","src":"http://mobile.beike188.com/mobileYHH/image/Home/BBIN/Game_5041.png","title":"7PK"},
                        {"GameID":"5043","src":"http://mobile.beike188.com/mobileYHH/image/Home/BBIN/Game_5043.png","title":"钻石水果盘"},
                        {"GameID":"5044","src":"http://mobile.beike188.com/mobileYHH/image/Home/BBIN/Game_5044.png","title":"明星97II"},
                        {"GameID":"5048","src":"http://mobile.beike188.com/mobileYHH/image/Home/BBIN/Game_5048.png","title":"特务危机"},
                        {"GameID":"5049","src":"http://mobile.beike188.com/mobileYHH/image/Home/BBIN/Game_5049.png","title":"玉薄团"},
                        {"GameID":"5054","src":"http://mobile.beike188.com/mobileYHH/image/Home/BBIN/Game_5054.png","title":"爆骰"},
                        {"GameID":"5057","src":"http://mobile.beike188.com/mobileYHH/image/Home/BBIN/Game_5057.png","title":"明星97"},
                        {"GameID":"5058","src":"http://mobile.beike188.com/mobileYHH/image/Home/BBIN/Game_5058.png","title":"疯狂水果盘"},
                        {"GameID":"5060","src":"http://mobile.beike188.com/mobileYHH/image/Home/BBIN/Game_5060.png","title":"动物奇观五"},
                        {"GameID":"5061","src":"http://mobile.beike188.com/mobileYHH/image/Home/BBIN/Game_5061.png","title":"超级7"},
                        {"GameID":"5062","src":"http://mobile.beike188.com/mobileYHH/image/Home/BBIN/Game_5062.png","title":"龙在囧途"},
                        {"GameID":"5063","src":"http://mobile.beike188.com/mobileYHH/image/Home/BBIN/Game_5063.png","title":"水果拉霸"},
                        {"GameID":"5064","src":"http://mobile.beike188.com/mobileYHH/image/Home/BBIN/Game_5064.png","title":"扑克拉霸"},
                        {"GameID":"5065","src":"http://mobile.beike188.com/mobileYHH/image/Home/BBIN/Game_5065.png","title":"筒子拉霸"},
                        {"GameID":"5066","src":"http://mobile.beike188.com/mobileYHH/image/Home/BBIN/Game_5066.png","title":"足球拉霸"},
                        {"GameID":"5067","src":"http://mobile.beike188.com/mobileYHH/image/Home/BBIN/Game_5067.png","title":"大话西游"},
                        {"GameID":"5068","src":"http://mobile.beike188.com/mobileYHH/image/Home/BBIN/Game_5068.png","title":"酷搜马戏团"},
                        {"GameID":"5069","src":"http://mobile.beike188.com/mobileYHH/image/Home/BBIN/Game_5069.png","title":"水果擂台"},
                        {"GameID":"5070","src":"http://mobile.beike188.com/mobileYHH/image/Home/BBIN/Game_5070.png","title":"黄金大转轮"},
                        {"GameID":"5073","src":"http://mobile.beike188.com/mobileYHH/image/Home/BBIN/Game_5073.png","title":"百家乐大转轮"},
                        {"GameID":"5076","src":"http://mobile.beike188.com/mobileYHH/image/Home/BBIN/Game_5076.png","title":"数字大转轮"},
                        {"GameID":"5077","src":"http://mobile.beike188.com/mobileYHH/image/Home/BBIN/Game_5077.png","title":"水果大转轮"},
                        {"GameID":"5078","src":"http://mobile.beike188.com/mobileYHH/image/Home/BBIN/Game_5078.png","title":"象棋大转轮"},
                        {"GameID":"5079","src":"http://mobile.beike188.com/mobileYHH/image/Home/BBIN/Game_5079.png","title":"3D数字大转轮"},
                        {"GameID":"5080","src":"http://mobile.beike188.com/mobileYHH/image/Home/BBIN/Game_5080.png","title":"乐透转轮"},
                        {"GameID":"5083","src":"http://mobile.beike188.com/mobileYHH/image/Home/BBIN/Game_5083.png","title":"钻石列车"},
                        {"GameID":"5084","src":"http://mobile.beike188.com/mobileYHH/image/Home/BBIN/Game_5084.png","title":"圣兽传说"},
                        {"GameID":"5088","src":"http://mobile.beike188.com/mobileYHH/image/Home/BBIN/Game_5088.png","title":"斗大"},
                        {"GameID":"5089","src":"http://mobile.beike188.com/mobileYHH/image/Home/BBIN/Game_5089.png","title":"红狗"},
                        {"GameID":"5090","src":"http://mobile.beike188.com/mobileYHH/image/Home/BBIN/Game_5090.png","title":"金鸡报喜"},
                        {"GameID":"5091","src":"http://mobile.beike188.com/mobileYHH/image/Home/BBIN/Game_5091.png","title":"三国拉霸"},
                        {"GameID":"5092","src":"http://mobile.beike188.com/mobileYHH/image/Home/BBIN/Game_5092.png","title":"封神榜"},
                        {"GameID":"5093","src":"http://mobile.beike188.com/mobileYHH/image/Home/BBIN/Game_5093.png","title":"金瓶梅"},
                        {"GameID":"5094","src":"http://mobile.beike188.com/mobileYHH/image/Home/BBIN/Game_5094.png","title":"金瓶梅2"},
                        {"GameID":"5095","src":"http://mobile.beike188.com/mobileYHH/image/Home/BBIN/Game_5095.png","title":"斗鸡"},
                        {"GameID":"5096","src":"http://mobile.beike188.com/mobileYHH/image/Home/BBIN/Game_5096.png","title":"五行"},
                        {"GameID":"5105","src":"http://mobile.beike188.com/mobileYHH/image/Home/BBIN/Game_5105.png","title":"欧式轮盘"},
                        {"GameID":"5106","src":"http://mobile.beike188.com/mobileYHH/image/Home/BBIN/Game_5106.png","title":"三国"},
                        {"GameID":"5107","src":"http://mobile.beike188.com/mobileYHH/image/Home/BBIN/Game_5107.png","title":"美式轮盘"},
                        {"GameID":"5108","src":"http://mobile.beike188.com/mobileYHH/image/Home/BBIN/Game_5108.png","title":"彩金轮盘"},
                        {"GameID":"5109","src":"http://mobile.beike188.com/mobileYHH/image/Home/BBIN/Game_5109.png","title":"法式轮盘"},
                        {"GameID":"5115","src":"http://mobile.beike188.com/mobileYHH/image/Home/BBIN/Game_5115.png","title":"经典21点"},
                        {"GameID":"5116","src":"http://mobile.beike188.com/mobileYHH/image/Home/BBIN/Game_5116.png","title":"西班牙21点"},
                        {"GameID":"5117","src":"http://mobile.beike188.com/mobileYHH/image/Home/BBIN/Game_5117.png","title":"维加斯21点"},
                        {"GameID":"5118","src":"http://mobile.beike188.com/mobileYHH/image/Home/BBIN/Game_5118.png","title":"奖金21点"},
                        {"GameID":"5131","src":"http://mobile.beike188.com/mobileYHH/image/Home/BBIN/Game_5131.png","title":"皇家德州扑克"},
                        {"GameID":"5201","src":"http://mobile.beike188.com/mobileYHH/image/Home/BBIN/Game_5201.png","title":"火焰山"},
                        {"GameID":"5202","src":"http://mobile.beike188.com/mobileYHH/image/Home/BBIN/Game_5202.png","title":"月光宝盒"},
                        {"GameID":"5203","src":"http://mobile.beike188.com/mobileYHH/image/Home/BBIN/Game_5203.png","title":"爱你一万年"},
                        {"GameID":"5204","src":"http://mobile.beike188.com/mobileYHH/image/Home/BBIN/Game_5204.png","title":"2014 FIFA"},
                        {"GameID":"5402","src":"http://mobile.beike188.com/mobileYHH/image/Home/BBIN/Game_5402.png","title":"夜市人生"},
                        {"GameID":"5404","src":"http://mobile.beike188.com/mobileYHH/image/Home/BBIN/Game_5404.png","title":"沙滩排球"},
                        {"GameID":"5406","src":"http://mobile.beike188.com/mobileYHH/image/Home/BBIN/Game_5406.png","title":"神舟27"},
                        {"GameID":"5407","src":"http://mobile.beike188.com/mobileYHH/image/Home/BBIN/Game_5407.png","title":"大红帽与小野狼"},
                        {"GameID":"5601","src":"http://mobile.beike188.com/mobileYHH/image/Home/BBIN/Game_5601.png","title":"秘境冒险"},
                        {"GameID":"5701","src":"http://mobile.beike188.com/mobileYHH/image/Home/BBIN/Game_5701.png","title":"连连看"},
                        {"GameID":"5703","src":"http://mobile.beike188.com/mobileYHH/image/Home/BBIN/Game_5703.png","title":"发达啰"},
                        {"GameID":"5704","src":"http://mobile.beike188.com/mobileYHH/image/Home/BBIN/Game_5704.png","title":"斗牛"},
                        {"GameID":"5705","src":"http://mobile.beike188.com/mobileYHH/image/Home/BBIN/Game_5705.png","title":"聚宝盆"},
                        {"GameID":"5706","src":"http://mobile.beike188.com/mobileYHH/image/Home/BBIN/Game_5706.png","title":"浓情巧克力"},
                        {"GameID":"5707","src":"http://mobile.beike188.com/mobileYHH/image/Home/BBIN/Game_5707.png","title":"金钱豹"},
                        {"GameID":"5801","src":"http://mobile.beike188.com/mobileYHH/image/Home/BBIN/Game_5801.png","title":"海豚世界"},
                        {"GameID":"5802","src":"http://mobile.beike188.com/mobileYHH/image/Home/BBIN/Game_5802.png","title":"阿基里斯"},
                        {"GameID":"5803","src":"http://mobile.beike188.com/mobileYHH/image/Home/BBIN/Game_5803.png","title":"阿兹特克宝藏"},
                        {"GameID":"5804","src":"http://mobile.beike188.com/mobileYHH/image/Home/BBIN/Game_5804.png","title":"大明星"},
                        {"GameID":"5805","src":"http://mobile.beike188.com/mobileYHH/image/Home/BBIN/Game_5805.png","title":"凯萨帝国"},
                        {"GameID":"5806","src":"http://mobile.beike188.com/mobileYHH/image/Home/BBIN/Game_5806.png","title":"奇幻花园"},
                        {"GameID":"5808","src":"http://mobile.beike188.com/mobileYHH/image/Home/BBIN/Game_5808.png","title":"浪人武士"},
                        {"GameID":"5809","src":"http://mobile.beike188.com/mobileYHH/image/Home/BBIN/Game_5809.png","title":"空战英豪"},
                        {"GameID":"5810","src":"http://mobile.beike188.com/mobileYHH/image/Home/BBIN/Game_5810.png","title":"航海时代"},
                        {"GameID":"5811","src":"http://mobile.beike188.com/mobileYHH/image/Home/BBIN/Game_5811.png","title":"狂欢夜"},
                        {"GameID":"5821","src":"http://mobile.beike188.com/mobileYHH/image/Home/BBIN/Game_5821.png","title":"国际足球"},
                        {"GameID":"5823","src":"http://mobile.beike188.com/mobileYHH/image/Home/BBIN/Game_5823.png","title":"发大财"},
                        {"GameID":"5824","src":"http://mobile.beike188.com/mobileYHH/image/Home/BBIN/Game_5824.png","title":"恶龙传说"},
                        {"GameID":"5825","src":"http://mobile.beike188.com/mobileYHH/image/Home/BBIN/Game_5825.png","title":"金莲"},
                        {"GameID":"5826","src":"http://mobile.beike188.com/mobileYHH/image/Home/BBIN/Game_5826.png","title":"金矿工"},
                        {"GameID":"5827","src":"http://mobile.beike188.com/mobileYHH/image/Home/BBIN/Game_5827.png","title":"老船长"},
                        {"GameID":"5828","src":"http://mobile.beike188.com/mobileYHH/image/Home/BBIN/Game_5828.png","title":"霸王龙"},
                        {"GameID":"5831","src":"http://mobile.beike188.com/mobileYHH/image/Home/BBIN/Game_5831.png","title":"高球之旅"},
                        {"GameID":"5832","src":"http://mobile.beike188.com/mobileYHH/image/Home/BBIN/Game_5832.png","title":"高速卡车"},
                        {"GameID":"5833","src":"http://mobile.beike188.com/mobileYHH/image/Home/BBIN/Game_5833.png","title":"沉默武士"},
                        {"GameID":"5835","src":"http://mobile.beike188.com/mobileYHH/image/Home/BBIN/Game_5835.png","title":"喜福牛年"},
                        {"GameID":"5836","src":"http://mobile.beike188.com/mobileYHH/image/Home/BBIN/Game_5836.png","title":"龙卷风"},
                        {"GameID":"5837","src":"http://mobile.beike188.com/mobileYHH/image/Home/BBIN/Game_5837.png","title":"喜福猴年"},
                        {"GameID":"5901","src":"http://mobile.beike188.com/mobileYHH/image/Home/BBIN/Game_5901.png","title":"连环夺宝"},
                        {"GameID":"5902","src":"http://mobile.beike188.com/mobileYHH/image/Home/BBIN/Game_5902.png","title":"糖果派对"},
                        {"GameID":"5903","src":"http://mobile.beike188.com/mobileYHH/image/Home/BBIN/Game_5903.png","title":"秦皇秘宝"},
                        {"GameID":"5904","src":"http://mobile.beike188.com/mobileYHH/image/Home/BBIN/Game_5904.png","title":"蒸气炸弹"},
                        {"GameID":"5907","src":"http://mobile.beike188.com/mobileYHH/image/Home/BBIN/Game_5907.png","title":"趣味台球"},
                        {"GameID":"5908","src":"http://mobile.beike188.com/mobileYHH/image/Home/BBIN/Game_5908.png","title":"糖果派对2"},
                        {"GameID":"5909","src":"http://mobile.beike188.com/mobileYHH/image/Home/BBIN/Game_5909.png","title":"开心消消乐"}
                    ],
                    upto:[
                        {"GameID":"5909","src":"http://mobile.beike188.com/mobileYHH/image/Home/BBIN/Game_5909.png","title":"开心消消乐"},
                        {"GameID":"5903","src":"http://mobile.beike188.com/mobileYHH/image/Home/BBIN/Game_5903.png","title":"秦皇秘宝"},
                        {"GameID":"5096","src":"http://mobile.beike188.com/mobileYHH/image/Home/BBIN/Game_5096.png","title":"五行"},
                        {"GameID":"5908","src":"http://mobile.beike188.com/mobileYHH/image/Home/BBIN/Game_5908.png","title":"糖果派对2"},
                        {"GameID":"5907","src":"http://mobile.beike188.com/mobileYHH/image/Home/BBIN/Game_5907.png","title":"趣味台球"},
                        {"GameID":"5054","src":"http://mobile.beike188.com/mobileYHH/image/Home/BBIN/Game_5054.png","title":"爆骰"},
                        {"GameID":"5090","src":"http://mobile.beike188.com/mobileYHH/image/Home/BBIN/Game_5090.png","title":"金鸡报喜"},
                        {"GameID":"5069","src":"http://mobile.beike188.com/mobileYHH/image/Home/BBIN/Game_5069.png","title":"水果擂台"},
                        {"GameID":"5068","src":"http://mobile.beike188.com/mobileYHH/image/Home/BBIN/Game_5068.png","title":"酷搜马戏团"},
                        {"GameID":"5067","src":"http://mobile.beike188.com/mobileYHH/image/Home/BBIN/Game_5067.png","title":"大话西游"},
                        {"GameID":"5904","src":"http://mobile.beike188.com/mobileYHH/image/Home/BBIN/Game_5904.png","title":"蒸气炸弹"},
                        {"GameID":"5108","src":"http://mobile.beike188.com/mobileYHH/image/Home/BBIN/Game_5108.png","title":"彩金轮盘"},
                        {"GameID":"5107","src":"http://mobile.beike188.com/mobileYHH/image/Home/BBIN/Game_5107.png","title":"美式轮盘"},
                        {"GameID":"5109","src":"http://mobile.beike188.com/mobileYHH/image/Home/BBIN/Game_5109.png","title":"法式轮盘"},
                        {"GameID":"5105","src":"http://mobile.beike188.com/mobileYHH/image/Home/BBIN/Game_5105.png","title":"欧式轮盘"},
                        {"GameID":"5010","src":"http://mobile.beike188.com/mobileYHH/image/Home/BBIN/Game_5010.png","title":"外星战记"},
                        {"GameID":"5044","src":"http://mobile.beike188.com/mobileYHH/image/Home/BBIN/Game_5044.png","title":"明星97II"},
                        {"GameID":"5043","src":"http://mobile.beike188.com/mobileYHH/image/Home/BBIN/Game_5043.png","title":"钻石水果盘"},
                        {"GameID":"5008","src":"http://mobile.beike188.com/mobileYHH/image/Home/BBIN/Game_5009.png","title":"金刚爬楼"},
                        {"GameID":"5064","src":"http://mobile.beike188.com/mobileYHH/image/Home/BBIN/Game_5064.png","title":"扑克拉霸"},
                    ],
                    recommend:[
                        {"GameID":"5044","src":"http://mobile.beike188.com/mobileYHH/image/Home/BBIN/Game_5044.png","title":"明星97II"},
                        {"GameID":"5057","src":"http://mobile.beike188.com/mobileYHH/image/Home/BBIN/Game_5057.png","title":"明星97"},
                        {"GameID":"5061","src":"http://mobile.beike188.com/mobileYHH/image/Home/BBIN/Game_5061.png","title":"超级7"},
                        {"GameID":"5096","src":"http://mobile.beike188.com/mobileYHH/image/Home/BBIN/Game_5096.png","title":"五行"},
                        {"GameID":"5106","src":"http://mobile.beike188.com/mobileYHH/image/Home/BBIN/Game_5106.png","title":"三国"},
                    ],
                },
            }
        },
        computed: {
            computedList: function () {
                var vm = this;
                return this.gameobj.All.filter(function (item) {
                    if(item.title.indexOf(vm.query) !== -1){
                        return item.title
                    }
                })
            }
        },
        methods: {
            beforeEnter: function (el) {
                el.style.opacity = 0
                el.style.height = 0
            },
            enter: function (el, done) {
                var delay = el.dataset.index * 150
                setTimeout(function () {
                    Velocity(
                        el,
                        { opacity: 1, height: '2.2rem'},
                        { complete: done }
                    )
                }, delay)
            },
            leave: function (el, done) {
                var delay = el.dataset.index * 150
                setTimeout(function () {
                    Velocity(
                        el,
                        { opacity: 0,height: '0' },
                        { complete: done }
                    )
                }, delay)
            }
        },
        components: {
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less'>
    @import '../Home/css/gamethree.less';
.infoMain{
    width:100%;
    input{
        width: 100%;
    }
    /*font-size: 0;*/
    /*.A-box-child{*/
        /*height: 2.3rem;*/
    /*}*/
}
</style>