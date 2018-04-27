<template>
    <div class='helplogreg'>
        <Top :text="Topobj"></Top>
        <el-row  style="margin-top: 10px;border-top: 1px solid #c4c4c4;" class="G_row">
            <router-link  style="display: block;" to="/helplogregone">
                开户条约<span class="el-icon-arrow-right"></span>
            </router-link>
        </el-row>
        <el-row class="G_row">
            <router-link  style="display: block;" to="/helplogregTwo">
                如何注册？<span class="el-icon-arrow-right"></span>
            </router-link>
        </el-row>
        <el-row class="G_row">
            <router-link  style="display: block;" to="/helplogregThree">
                如何登录会员中心？<span class="el-icon-arrow-right"></span>
            </router-link>
        </el-row>
        <el-row class="G_row">
            <router-link  style="display: block;" to="/helplogregFour">
                登录时密码提示错误，我该怎么办？<span class="el-icon-arrow-right"></span>
            </router-link>
        </el-row>
        <el-row class="G_row">
            <router-link  style="display: block;" to="/helplogregFives">
                我可以注册多个账号吗？<span class="el-icon-arrow-right"></span>
            </router-link>
        </el-row>
        <el-row class="G_row">
            <router-link  style="display: block;" to="/helplogregSix">
                我想删除/注销我的账号可以吗？<span class="el-icon-arrow-right"></span>
            </router-link>
        </el-row>
        <el-row class="G_row">
            <router-link  style="display: block;" to="/helplogregSeven">
                如何找回登录密码？<span class="el-icon-arrow-right"></span>
            </router-link>
        </el-row>
    </div>
</template>

<script>
    import Top from '../Top/Top.vue'
    export default {
        data () {
            return {
                Topobj:{
                    text:'登录注册',
                    withdraw:'/help',
                },
            }
        },
        computed: {},
        mounted: function () {
        },
        methods: {},
        created(){
        },
        components: {
            Top
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less'>
    @import "style.less";
.helplogreg{
    width: 100%;
    .TopHeader{
        font-size: 16px;
        font-weight: bold;
    }
}
</style>