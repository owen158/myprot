<template>
    <div class='G_AboutOne'>
        <h1 class="G_AboutOne_title"><span class="circle"></span>公司介绍</h1>
        <h2 class="G_AboutOne_text">银河娱乐集团有限公司（下称「银娱」）是亚洲地区其中一所最具规模的综合娱乐渡假发展及营运公司，为恒生指数成份股之一。集团的附属公司银河娱乐场股份有限公司，于2002年获澳门特区政府授予博彩经营权，可于澳门开设及经营娱乐场业务。于2004年开始，银娱凭藉发展四间城巿娱乐会进军澳门博彩业市场，成功在市场上为品牌打好基础，于博彩业发展迅速的澳门大展拳脚。</h2>
        <p class="infoImg">
            <img src="http://mobile.beike188.com/mobileYHH/image/help/about1.png" alt="">
        </p>
        <p class="para">博彩收益计算，澳门是全球最大的博彩娱乐市场，亦是中华人民共和国境内唯一可以合法进行博彩活动的地区。银娱以「亚洲心」为宗旨，着重最顶级的服务质素，具备集休闲娱乐于一身的世界级设施，致力配合澳门特区政府实践可持续及适度多元发展的重要方针。</p>
        <p class="para">澳门银河全资线上责任博彩1yh345.com，持澳门合法线上责任博彩牌照，受澳门博彩监察协调局监督。作为澳门的良好 身心健康发展（详见企业社会责任篇幅）。</p>
        <p class="para">银娱现拥有及经营位于澳门半岛的旗舰超五星级星际酒店及娱乐场、经营三间城市娱乐会，及位于路氹的「澳門銀河™」是一项集休闲、渡假和娱乐于一身的大型综合渡假城，为澳门创建一个极具亚洲特色的渡假新胜地，进一步落实集团在澳门及区内的长远发展。</p>
        <p class="para">银娱旗下的旗舰项目「澳門銀河」新里程及全新的「澳門百老匯™」于2015年5月27日正式开幕。</p>
        <p class="para">为成功打造全世界最顶级的综合娱乐渡假城，银娱计划在澳门投资1,000亿港元，「澳門銀河」及「澳門百老匯」的总投资额已达430亿港元，此项目更是澳门自2012年后首个新开幕的综合渡假城，标志着澳门旅游业发展的新里程。</p>
        <p class="para">银娱早前已公布路氹地皮第三及四期的发展蓝图，地盘勘察工程预计于2017年展开。此外，集团与横琴当局就横琴一幅面积达2.7平方公里的土地订立框架协议，以发展世界级渡假胜地。</p>
        <p class="para">此项目将与银娱在澳门的业务相辅相成，令银娱在同业中脱颖而出，并在支持澳门发展成为世界旅游休闲中心方面扮演重要角色。</p>
        <p class="para">银娱一直推动澳门的经济适度及多元发展。银娱承诺继续履行企业社会责任，致力培育本澳人才，宣扬澳门本地文化和特色，并积极为澳门的长远繁荣稳定作出努力。</p>
        <div class="card_info">
            <span><b class="x-icon-help-mission"></b></span>
            <h5>企业使命</h5>
            <p class="para">
                我们致力成为亚洲娱乐博彩行业的翘楚，力求为顾客提供超凡的娱乐博彩体验，使员工作为公司的一份子深感自豪，亦能令与银河业务有关人士称心满意。
            </p>
        </div>
        <div class="card_info">
            <span>
                <b class="x-icon-help-desire"></b>
            </span>
            <h5>企业愿景</h5>
            <p class="para">
                本着亚洲信念亚洲心，为顾客提供超凡的娱乐博彩体验，并为行业树立典范。
            </p>
        </div>
        <div class="card_info">
            <span>
                <b class="x-icon-help-value"></b>
            </span>
            <h5>企业价值观</h5>
            <p class="para">
                我们积极了解顾客的需求，致力提供超凡的银河体验，对此深感自豪。我们真诚尊重每一位与银河有关的人士。我们承诺全心全意地做到最好。我们贯彻审慎、高效、坚守诚信和即时应变的处事态度。
            </p>
        </div>
    </div>
</template>
<script>
    export default {
        data () {
            return {

            };
        },
        computed: {},
        mounted: function () {
        },

        methods: {

        },
        created(){
        },
        components: {
        }
    }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less'>
.G_AboutOne{
    width: 100%;
    background: #fff;
    padding: 5px 15px;
    .G_AboutOne_title{
        position: relative;
        line-height: 40px;
        height: 40px;
        font-size: 15px;
        padding-left: 25px;
        color: #c8a675;
        text-align: left;
        .circle{
            position: absolute;
            top:11px;
            width: 18px;
            height: 18px;
            border-radius: 50%;
            left: 0;

            background: rgba(208,146,21,.3);
        }
        .circle:after{
            content: "";
            position: absolute;
            width: 8px;
            height: 8px;
            background: #d09215;
            border-radius: 50%;
            top:5px;
            left: 5px;
        }

    }
    .G_AboutOne_text{
        font-size: 14px;
        line-height: 16px;
        text-align: left;
        color: #222;
        font-weight: 900;
    }
    .infoImg{
        margin: 10px 0;
        width: 100%;
        img{
            width: 100%;
        }
    }
    .para{
        font-size: 14px;
        line-height: 16px;
        text-align: left;
        margin: 10px 0;
    }
    .card_info{
        margin: 30px 0;
        padding: 30px 15px 15px 15px;
        border: 1px solid #dedede;
        span{
            display: block;
            width: 60px;
            height: 60px;
            background-color: #c8a675;
            border-radius: 50%;
            margin: 0 auto;
            padding-top: 10px;
        }
        h5{
            height: 40px;
            line-height: 40px;
            color: #c8a675;
            text-align: center;
            font-size: 18px;
            font-weight: bold;
        }
    }
}
</style>