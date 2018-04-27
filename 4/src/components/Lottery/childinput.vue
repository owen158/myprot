<template>
    <div style="font-size: 12px;" class='chiildinput'>
        <el-form :label-position="labelPosition" label-width="50px" :model="Amount">
            <el-form-item style="margin-bottom: 0;border-bottom:  1px solid #c4c4c4" label="金额" >
                <el-input v-model="Amount.name" placeholder="请输入金额"></el-input>
            </el-form-item>
        </el-form>
        <div style="margin-top: 20px">
            <el-radio-group v-model="radio5" size="small">
                <el-radio-button label="100"></el-radio-button>
                <el-radio-button label="300"></el-radio-button>
                <el-radio-button label="500"></el-radio-button>
                <el-radio-button label="1000"></el-radio-button>
                <el-radio-button label="1500"></el-radio-button>
                <el-radio-button label="2000"></el-radio-button>
            </el-radio-group>
        </div>

    </div>
</template>
<script>
    export default {
        data () {
            return {

                btnacounmt:""
            }
        },
        computed: {
            AmountTion:{
                get: function () {
                    let th = this;
                    if(!isNaN(th.formLabelAlign.name)){
                        return th.formLabelAlign.name;
                    }else{
                        return false;
                    }
                },
                set: function (newValue) {
                    if(/^[0-9]+([.]\d{1,2})?$/.test(newValue)){
                        console.log(1);
                    }else{
                        console.log("请输入数字(例:0.00),最高保留两位小数")
                    }
                }

            },
        },
        mounted: function () {
        },
        methods: {
            sendMsgToParent:function () {
                if(btnacounmt != ""){
                    this.Amount.acounmt = this.btnacounmt;
                }
                if(this.Amount.acounmt == "" ){
                    this.btnacounmt = "";
                }
                this.$emit("listenTochildEvent",this.Amount)
            }
        },
        created(){
        },
        components: {}
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less'>
.chiildinput {

        border-top: 1px solid #c4c4c4;

}
</style>