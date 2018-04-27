<template>
    <div class="notice row" >
        <b class="Lft iconfont icon-laba"></b>
        <!--<el-carousel arrow="never" indicator-position="none" height="34px" v-if="obj !=''">-->
            <!--<el-carousel-item v-for="(item,key) in obj" :key="item">-->
                <!--<h3 >{{key+","+item.rmk}}</h3>-->
            <!--</el-carousel-item>-->
        <!--</el-carousel>-->
        <div style="height: 150px;position: relative;width: 95%;margin: 0 auto">
            <div style="float: left;" id="slide">
                <div id="slide1">
                    <ul class="Marquee-List">
                        <li v-for="(item,key) in content" @click="clickShow((key+1)+','+item.rmk)">{{(key+1)+","+item.rmk}}</li>
                    </ul>
                </div>
                <div id=slide2>
                    <ul class="Marquee-List">
                        <li v-for="(item,key) in content" @click="clickShow((key+1)+','+item.rmk)">{{(key+1)+","+item.rmk}}</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    var vm;
    export default {
        props: {
            content: {
                type: String
            }
        },
        data () {
            return {
                obj:''
            }
        },
        computed: {
            annouationNew:function () {//判断登录
                return this.$store.state.annouationNew;
            },
            userNew: function() {
                //判断登录
                return this.$store.state.userNew;
            },
        },
        mounted: function () {
            vm = this;
            this.$nextTick(function (){
                console.log(4)
//                if (vm.content != "") {
                    console.log(5);
                    vm.init();
//                }

            })

        },
        methods: {
            clickShow(text){
                this.$alert(text, '提示', {
                    confirmButtonText: '确定',
                    callback: action => {
//                        this.$message({
//                            type: 'info',
//                            message: `action: ${ action }`
//                        });
                    }
                });
            },
            init(){
                var speed=3000;
                var slide=document.getElementById("slide");
                var slide2=document.getElementById("slide2");
                var slide1=document.getElementById("slide1");
//                slide2.innerHTML=slide1.innerHTML;
                function Marquee(){
                    if(slide2.offsetTop-slide.scrollTop<=0)
                        slide.scrollTop-=slide1.offsetHeight;
                    else{
                        let sum = 0;
                        var itm = setInterval(function () {
                            sum++;
                            slide.scrollTop++;
                            if(sum === 34){
                                sum= 0;
                                clearInterval(itm);
                            }
                        },20)
                    }
                }
                var MyMar=setInterval(Marquee,speed);
                slide.onmouseover=function(){clearInterval(MyMar)};
                slide.onmouseout=function(){MyMar=setInterval(Marquee,speed)};
            }

        },
        created(){
         vm = this;
        },
        components: {}
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less'>
    .notice{
        position: relative;
        width: 100%;
        height: 34px;
        overflow: hidden;
        padding-left: 35px;
        .el-carousel__container{
            line-height: 34px;
            text-align: left;
            font-size: 14px;
        }
        .Lft{
            top:6px;
            left: 2px;
            width: 34px;
            font-size: 24px;
            text-align:center;
            position: absolute;
            color: rgb(200, 166, 117);
        }
    #slide{
        position: absolute;
        height:34px;
        width:100%;
        margin:0 auto ;
        background: #fff;
        border-radius: 5px;
        color:#000000;
        font-size: 0.25rem;
        overflow:hidden;
        transition: width 1s;
        -moz-transition: width 1s;	/* Firefox 4 */
        -webkit-transition: width 1s;	/* Safari 和 Chrome */
        -o-transition: width 1s;	/* Opera */
    }
    #slide1{
        transition: width 1s;
        -moz-transition: width 1s;	/* Firefox 4 */
        -webkit-transition: width 1s;	/* Safari 和 Chrome */
        -o-transition: width 1s;	/* Opera */
        font-size: 0.25rem;
    }
    .slideTitle{
        height: 0.6rem;
        line-height: 0.6rem;
        width: 95%;
        margin: 0 auto;
        text-align: left;
        font-size: 0.25rem;
    }
    .newHis{
        position: relative;
        background: #f0f0f0;
        border-radius: 5px;
        padding-left: 0.75rem;
        color: #666;
    }
    .newHis::before{
        position: absolute;
        content: "";
        width: 0.7rem;
        height: 0.7rem;
        left: 0;
        bottom: 0;
        background: url("http://192.168.0.140:82/mobileTX/images392/Home/LooteryGame/Trophy.png") no-repeat;
        background-size: 100% 100%;
    }
    #slide .Marquee-List li{
        height:34px;
        line-height:34px;
        text-align: left;
        overflow: hidden;
        font-size: 0.25rem;
        text-overflow:ellipsis;
        white-space: nowrap;
    }
    #slide span{
        float:right
    }
    }
</style>