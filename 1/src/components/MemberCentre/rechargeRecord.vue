<template>
    <div class='rechargeRecord' ref="BackG">
        <Top :text="userNew.text"></Top>
        <withdraw :src="withdraw"></withdraw>
        <div class="row" v-if="Recharge.id === 'rechargeRecord'">
            <el-row class="SubmitForm">
                <el-col :span="4">
                    <div class="tad">开始时间</div>
                </el-col>
                <el-col :span="8">
                        <el-date-picker
                                class="reset-el-26 maxw-120"
                                v-model="obj.bdate"
                                align="right"
                                type="date"
                                size="mini"
                                placeholder="选择日期"
                                ref="picker1"
                                :editable="canEdit"
                                format="yyyy年MM月dd日"
                                value-format="yyyy-MM-dd"
                                :picker-options="pickerOptions1">
                        </el-date-picker>
                </el-col>
                <el-col :span="4">
                    <div class="tad">
                        转账类型
                    </div>
                </el-col>
                <el-col :span="8">
                        <el-select size="mini" v-model="rechargeRecord.Type" placeholder="请选择">
                            <el-option  value="" label="所有">
                                <span style="float: left">所有</span>
                            </el-option>
                            <el-option  value="网银" label="网银">
                                <span style="float: left">网银</span>
                            </el-option>
                            <el-option  value="微信" label="微信">
                                <span style="float: left">微信</span>
                            </el-option>
                            <el-option  value="支付宝" label="支付宝">
                                <span style="float: left">支付宝</span>
                            </el-option>
                            <el-option  value="银行汇款" label="银行汇款">
                                <span style="float: left">银行汇款</span>
                            </el-option>
                        </el-select>
                </el-col>
                <el-col :span="4">
                    <div class="tad">
                        结束时间
                    </div>
                </el-col>
                <el-col :span="8">
                        <el-date-picker
                                class="reset-el-26 maxw-120"
                                v-model="obj.edate"
                                type="date"
                                size="mini"
                                format="yyyy年MM月dd日"
                                value-format="yyyy-MM-dd"
                                placeholder="选择日期"
                                ref="picker2"
                                :editable="canEdit"
                                :picker-options="pickerOptions0">
                        </el-date-picker>
                </el-col>
                <el-col :span="4">
                    <div class="tad">
                        转账状态
                    </div>
                </el-col>
                <el-col :span="8">
                        <el-select size="mini" v-model="rechargeRecord.status" placeholder="请选择">
                            <el-option  value="" label="所有">
                                <span style="float: left">所有</span>
                            </el-option>
                            <el-option  value="处理中" label="处理中">
                                <span style="float: left">处理中</span>
                            </el-option>
                            <el-option  value="交易失败" label="交易失败">
                                <span style="float: left">交易失败</span>
                            </el-option>
                            <el-option  value="交易成功" label="交易成功">
                                <span style="float: left">交易成功</span>
                            </el-option>
                        </el-select>
                </el-col>
                <el-col :span="24">
                    <div class="form-btn">
                        <el-button type="primary" @click="submit()" size="mini">提交</el-button>
                    </div>
                </el-col>
            </el-row>
            <div class="row SubmitForm" style="display: none">
                <form action="" class="row">
                    <div class="item-nav row">
                        <div class="main-nav">
                            <div class="col-6">
                                <div class="col-4">
                                    <label for="" class="tad">开始时间</label>
                                </div>
                                <div class="col-8">
                                    <el-date-picker
                                            class="reset-el-26 maxw-120"
                                            v-model="obj.bdate"
                                            align="right"
                                            type="date"
                                            size="mini"
                                            placeholder="选择日期"
                                            ref="picker1"
                                            :editable="canEdit"
                                            format="yyyy年MM月dd日"
                                            value-format="yyyy-MM-dd"
                                            :picker-options="pickerOptions1">
                                    </el-date-picker>
                                </div>
                            </div>
                            <div class="col-6">
                                <div class="col-4">
                                    <label for="Type" class="tad">转账类型</label>
                                </div>
                                <div class="col-8">
                                    <!--<select name=""  v-model="rechargeRecord.Type" id="Type">-->
                                        <!--<option value="">所有</option>-->
                                        <!--<option value="网银">网银</option>-->
                                        <!--<option value="微信">微信</option>-->
                                        <!--<option value="支付宝">支付宝</option>-->
                                        <!--<option value="银行汇款">银行汇款</option>-->
                                    <!--</select>-->
                                    <el-select size="mini" v-model="rechargeRecord.Type" placeholder="请选择">
                                        <el-option  value="" label="所有">
                                            <span style="float: left">所有</span>
                                        </el-option>
                                        <el-option  value="网银" label="网银">
                                            <span style="float: left">网银</span>
                                        </el-option>
                                        <el-option  value="微信" label="微信">
                                            <span style="float: left">微信</span>
                                        </el-option>
                                        <el-option  value="支付宝" label="支付宝">
                                            <span style="float: left">支付宝</span>
                                        </el-option>
                                        <el-option  value="银行汇款" label="银行汇款">
                                            <span style="float: left">银行汇款</span>
                                        </el-option>
                                    </el-select>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="item-nav row">
                        <div class="main-nav">
                            <div class="col-6">
                                <div class="col-4">
                                    <label for="" class="tad">结束时间</label>
                                </div>
                                <div class="col-8">
                                    <el-date-picker
                                            class="reset-el-26 maxw-120"
                                            v-model="obj.edate"
                                            type="date"
                                            size="mini"
                                            format="yyyy年MM月dd日"
                                            value-format="yyyy-MM-dd"
                                            placeholder="选择日期"
                                            ref="picker2"
                                            :editable="canEdit"
                                            :picker-options="pickerOptions0">
                                    </el-date-picker>
                                </div>
                            </div>
                            <div class="col-6">
                                <div class="col-4">
                                    <label for="status" class="tad">转账状态</label>
                                </div>
                                <div class="col-8">
                                    <el-select size="mini" v-model="rechargeRecord.status" placeholder="请选择">
                                        <el-option  value="" label="所有">
                                            <span style="float: left">所有</span>
                                        </el-option>
                                        <el-option  value="处理中" label="处理中">
                                            <span style="float: left">处理中</span>
                                        </el-option>
                                        <el-option  value="交易失败" label="交易失败">
                                            <span style="float: left">交易失败</span>
                                        </el-option>
                                        <el-option  value="交易成功" label="交易成功">
                                            <span style="float: left">交易成功</span>
                                        </el-option>
                                    </el-select>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="item-nav row">
                        <el-button type="primary" @click="submit()" size="mini">提交</el-button>
                    </div>
                </form>
            </div>
            <div class="wrapper-cont">
                <div class="row Rec_text" v-if="Recharge.judgment != true">没有符合条件的记录</div>
                <div class="row" v-if="Recharge.judgment === true">
                    <div class="row recording-list" v-for="v in Recharge.data">
                        <div class="item row">
                            <p class="tad-sup btn-submit">
                                支付方式： <span style="padding-right: 0.1rem;">{{v.pay_type}}</span>
                            </p>
                            <p class="tad-sub" >
                                时间 : <span>{{v.time}}</span>
                            </p>
                        </div>
                        <div class="row item">
                            <div class="main-sup">
                                <div class="col-6">
                                    金额
                                </div>
                                <div class="col-6">
                                    状态
                                </div>
                            </div>
                            <div class="main-sub">
                                <div class="col-6">
                                    {{v.order_amount}}元
                                </div>
                                <div class="col-6">
                                    {{v.trade_status}}
                                </div>
                            </div>
                        </div>
                        <div style="height:0.4rem;" id="item-main" class="item  row">
                            <div class="main-sub">
                                备注
                            </div>
                        </div>
                        <div id="item-main" class="item  row">
                            <div class="main-text">
                                {{v.rmk}}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row" v-if="Recharge.id === 'bonusDetails'">
            <el-row class="row SubmitForm">
                <el-col :span="4">
                    <div class="tad">
                        开始时间
                    </div>
                </el-col>
                <el-col :span="8">
                    <el-date-picker
                            class="reset-el-26 maxw-120"
                            v-model="obj.bdate"
                            align="right"
                            type="date"
                            size="mini"
                            placeholder="选择日期"
                            ref="picker1"
                            :editable="canEdit"
                            format="yyyy年MM月dd日"
                            value-format="yyyy-MM-dd"
                            :picker-options="pickerOptions1">
                    </el-date-picker>
                </el-col>
                <el-col :span="4" class="tad">
                        &nbsp;

                </el-col>
                <el-col :span="8" class="tad">
                        &nbsp;
                </el-col>
                <el-col :span="4" >
                    <div class="tad">
                        结束时间
                    </div>
                </el-col>
                <el-col :span="8">
                    <el-date-picker
                            class="reset-el-26 maxw-120"
                            v-model="obj.edate"
                            type="date"
                            size="mini"
                            format="yyyy年MM月dd日"
                            value-format="yyyy-MM-dd"
                            placeholder="选择日期"
                            ref="picker2"
                            :editable="canEdit"
                            :picker-options="pickerOptions0">
                    </el-date-picker>
                </el-col>
                <el-col :span="4" class="tad">
                    &nbsp;
                </el-col>
                <el-col :span="8" class="tad">
                    &nbsp;
                </el-col>
                <el-col :span="24">
                    <el-button type="primary" @click="submit()" size="mini">提交</el-button>
                </el-col>
            </el-row>
            <div class="row SubmitForm" style="display: none">
                <form action="" class="row">
                    <div class="item-nav row">
                        <div class="main-nav">
                            <div class="col-3">
                                <label class="tad" for="">开始时间</label>
                            </div>
                            <div class="col-5">

                            </div>
                        </div>
                    </div>
                    <div class="item-nav row">
                        <div class="main-nav row">
                            <div class="col-3">
                                <label class="tad" for="">结束时间</label>
                            </div>
                            <div class="col-5">
                                <el-date-picker
                                        class="reset-el-26 maxw-120"
                                        v-model="obj.edate"
                                        type="date"
                                        size="mini"
                                        format="yyyy年MM月dd日"
                                        value-format="yyyy-MM-dd"
                                        placeholder="选择日期"
                                        ref="picker2"
                                        :editable="canEdit"
                                        :picker-options="pickerOptions0">
                                </el-date-picker>
                            </div>
                        </div>
                    </div>
                    <div class="item-nav row">
                        <el-button type="primary" @click="submit()" size="mini">提交</el-button>
                    </div>
                </form>
            </div>
            <div class="wrapper-cont">
                <div class="row Rec_text" v-if="Recharge.judgment != true">没有符合条件的记录</div>
                <div class="row" v-if="Recharge.judgment === true">
                    <div class="row recording-list" v-for="v in Recharge.data">
                        <div class="item row">
                            <p class="tad-sup btn-submit">
                                {{v.t_type}}： <span style="padding-right: 0.1rem;">{{v.rmk}}</span>
                            </p>
                            <p class="tad-sub" >
                                时间 : <span>{{v.time}}</span>
                            </p>
                        </div>
                        <div class="row item">
                            <div class="main-sup">
                                <div class="col-6">
                                    金额
                                </div>
                                <div class="col-6">
                                    变动后金额
                                </div>
                            </div>
                            <div class="main-sub">
                                <div class="col-6">
                                    {{v.amount}}元
                                </div>
                                <div class="col-6">
                                    {{v.new_money}}元
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
        <div class="row" v-if="Recharge.id === 'withdrawRecord'">
            <el-row class="SubmitForm">
                <el-col :span="4">
                    <div class="tad">
                        开始时间
                    </div>
                </el-col>
                <el-col :span="8">
                    <el-date-picker
                            class="reset-el-26 maxw-120"
                            v-model="obj.bdate"
                            align="right"
                            type="date"
                            size="mini"
                            placeholder="选择日期"
                            ref="picker1"
                            :editable="canEdit"
                            format="yyyy年MM月dd日"
                            value-format="yyyy-MM-dd"
                            :picker-options="pickerOptions1">
                    </el-date-picker>
                </el-col>
                <el-col :span="4">
                    <div class="tad">
                        状态
                    </div>
                </el-col>
                <el-col :span="8">
                    <el-select size="mini" v-model="rechargeRecord.Type" placeholder="请选择">
                        <el-option  value="" label="所有">
                            <span style="float: left">所有</span>
                        </el-option>
                        <el-option  value="0" label="交易中">
                            <span style="float: left">交易中</span>
                        </el-option>
                        <el-option  value="2" label="交易失败">
                            <span style="float: left">交易失败</span>
                        </el-option>
                        <el-option  value="1" label="交易成功">
                            <span style="float: left">交易成功</span>
                        </el-option>
                    </el-select>
                </el-col>
                <el-col :span="4">
                    <div class="tad">结束时间</div>
                </el-col>
                <el-col :span="8">
                    <el-date-picker
                            class="reset-el-26 maxw-120"
                            v-model="obj.edate"
                            type="date"
                            size="mini"
                            format="yyyy年MM月dd日"
                            value-format="yyyy-MM-dd"
                            placeholder="选择日期"
                            ref="picker2"
                            :editable="canEdit"
                            :picker-options="pickerOptions0">
                    </el-date-picker>
                </el-col>
                <el-col :span="4"></el-col>
                <el-col :span="8"></el-col>
                <el-col :span="24">
                    <el-button type="primary" @click="submit()" size="mini">提交</el-button>
                </el-col>
            </el-row>
            <div class="wrapper-cont">
                <div class="row Rec_text"  v-if="Recharge.judgment != true">没有符合条件的记录</div>
                <div class="row" v-if="Recharge.judgment === true">
                    <div class="row recording-list" v-for="v in Recharge.data">
                        <div class="item row">
                            <p class="tad-sup btn-submit">
                                卡号： <span style="padding-right: 0.1rem;">{{v.card_num}}</span>
                            </p>
                            <p class="tad-sub" >
                                时间 : <span>{{v.time}}</span>
                            </p>
                        </div>
                        <div class="row item">
                            <div class="main-sup">
                                <div class="col-3">
                                    取款金额
                                </div>
                                <div class="col-3">
                                    手续费
                                </div>
                                <div class="col-3">
                                    实收金额
                                </div>
                                <div class="col-3">
                                    状态
                                </div>
                            </div>
                            <div class="main-sub">
                                <div class="col-3">
                                    {{v.amount}}元
                                </div>
                                <div class="col-3">
                                    {{v.money}}元
                                </div>
                                <div class="col-3">
                                    {{v.amount_paid}}元
                                </div>
                                <div class="col-3">
                                    {{v.status}}
                                </div>
                            </div>
                        </div>
                        <div style="height:0.4rem;" id="item-main" class="item  row">
                            <div class="main-sub">
                                备注
                            </div>
                        </div>
                        <div id="item-main" class="item  row">
                            <div class="main-text">
                                {{v.rmk}}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row" v-if="Recharge.id === 'accountDetails'">
            <el-row class="SubmitForm">
                <el-col :span="4">
                    <div class="tad">开始时间</div>
                </el-col>
                <el-col :span="8">
                    <el-date-picker
                            class="reset-el-26 maxw-120"
                            v-model="obj.bdate"
                            align="right"
                            type="date"
                            size="mini"
                            placeholder="选择日期"
                            ref="picker1"
                            :editable="canEdit"
                            format="yyyy年MM月dd日"
                            value-format="yyyy-MM-dd"
                            :picker-options="pickerOptions1">
                    </el-date-picker>
                </el-col>
                <el-col :span="4">
                    <div class="tad">
                        转账状态
                    </div>
                </el-col>
                <el-col :span="8">
                    <el-select size="mini" v-model="accountDetails.Ttype" placeholder="请选择">
                        <el-option  value="" label="所有">
                            <span style="float: left">所有</span>
                        </el-option>
                        <el-option  value="OUT" label="转入游戏">
                            <span style="float: left">转入游戏</span>
                        </el-option>
                        <el-option  value="IN" label="转入平台">
                            <span style="float: left">转入平台</span>
                        </el-option>

                    </el-select>
                </el-col>
                <el-col :span="4">
                    <div class="tad">结束时间 </div>
                </el-col>
                <el-col :span="8">
                    <el-date-picker
                            class="reset-el-26 maxw-120"
                            v-model="obj.edate"
                            type="date"
                            size="mini"
                            format="yyyy年MM月dd日"
                            value-format="yyyy-MM-dd"
                            placeholder="选择日期"
                            ref="picker2"
                            :editable="canEdit"
                            :picker-options="pickerOptions0">
                    </el-date-picker>
                </el-col>
                <el-col :span="4">
                    <div class="tad">
                        游戏平台
                    </div>
                </el-col>
                <el-col :span="8">
                    <el-select size="mini" v-model="accountDetails.Type" placeholder="请选择">
                        <el-option  value="" label="所有">
                            <span style="float: left">所有</span>
                        </el-option>
                        <el-option v-for="item in game" :value="item.type" :label="item.name">
                            <span style="float: left">{{ item.name }}</span>
                        </el-option>
                    </el-select>
                </el-col>
                <el-col :span="24">
                    <el-button type="primary" @click="submit()" size="mini">提交</el-button>
                </el-col>
            </el-row>
            <div class="wrapper-cont">
                <div class="row Rec_text" v-if="Recharge.judgment != true">没有符合条件的记录</div>
                <div class="row"  v-if="Recharge.judgment === true">
                    <div class="row recording-list" v-for="v in Recharge.data">
                        <div class="item row">
                            <p class="tad-sup btn-submit">
                                {{v.t_type}}： <span style="padding-right: 0.1rem;">{{v.type}}</span>
                            </p>
                            <p class="tad-sub" >
                                时间 : <span>{{v.time}}</span>
                            </p>
                        </div>
                        <div class="row item">
                            <div class="main-sup">
                                <div class="col-4">
                                    金额
                                </div>
                                <div class="col-4">
                                    转前金额
                                </div>
                                <div class="col-4">
                                    转后金额
                                </div>
                            </div>
                            <div class="main-sub">
                                <div class="col-4">
                                    {{v.t_money}}元
                                </div>
                                <div class="col-4">
                                    {{v.old_money}}元
                                </div>
                                <div class="col-4">
                                    {{v.new_money}}元
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row" v-if="Recharge.id === 'lotteryForm'">
            <el-row class="SubmitForm">
                <el-col :span="4">
                    <div class="tad">开始时间</div>
                </el-col>
                <el-col :span="8">
                    <el-date-picker
                            class="reset-el-26 maxw-120"
                            v-model="obj.bdate"
                            align="right"
                            type="date"
                            size="mini"
                            placeholder="选择日期"
                            ref="picker1"
                            :editable="canEdit"
                            format="yyyy年MM月dd日"
                            value-format="yyyy-MM-dd"
                            :picker-options="pickerOptions1">
                    </el-date-picker>
                </el-col>
                <el-col :span="4">
                    <div class="tad">
                        游戏类型
                    </div>
                </el-col>
                <el-col :span="8">
                    <el-select size="mini" v-model="lotteryForm.type" placeholder="请选择">
                        <el-option v-for="item in gamerechar" :value="item.type" :label="item.name">
                            <span style="float: left">{{ item.name }}</span>
                            <!--<span style="float: right; color: #8492a6; font-size: 13px">{{ item.value }}</span>-->
                        </el-option>
                    </el-select>
                </el-col>
                <el-col :span="4">
                    <div class="tad">
                        结束时间
                    </div>
                </el-col>
                <el-col :span="8">
                    <el-date-picker
                            class="reset-el-26 maxw-120"
                            v-model="obj.edate"
                            type="date"
                            size="mini"
                            format="yyyy年MM月dd日"
                            value-format="yyyy-MM-dd"
                            placeholder="选择日期"
                            ref="picker2"
                            :editable="canEdit"
                            :picker-options="pickerOptions0">
                    </el-date-picker>
                </el-col>
                <el-col :span="4"></el-col>
                <el-col :span="8"></el-col>
                <el-col :span="24">
                    <el-button type="primary" @click="submit()" size="mini">提交</el-button>
                </el-col>
            </el-row>
            <div class="wrapper-cont">
                <div class="row Rec_text"  v-if="Recharge.judgment != true">没有符合条件的记录</div>
                <div class="row" v-if="Recharge.judgment === true">
                    <div class="row recording-list" v-for="v in Recharge.data">
                        <div class="item row">
                            <p class="tad-sup btn-submit">
                                游戏类型： <span style="padding-right: 0.1rem;">{{v.type}}</span>
                            </p>
                            <p class="tad-sub" >
                                时间 : <span>{{v.time}}</span>
                            </p>
                        </div>
                        <div class="row item">
                            <div class="main-sup">
                                <div class="col-4">
                                    下注金额
                                </div>
                                <div class="col-4">
                                    派彩金额
                                </div>
                                <div class="col-4">
                                    输赢金额
                                </div>
                            </div>
                            <div class="main-sub">
                                <div class="col-4">
                                    {{v.betAmount}}元
                                </div>
                                <div class="col-4">
                                    {{v.Payout}}元
                                </div>
                                <div class="col-4">
                                    {{v.netAmount}}元
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div v-if="Recharge.column != ''" class="column-title row">
                    <div class="col-4 main">
                        <p class="sup">下注金额小计</p>
                        <p class="sub">{{Recharge.column.betamountSum}}元</p>
                    </div>
                    <div class="col-4 main" style="">
                        <p class="sup">派彩金额小计</p>
                        <p class="sub">{{Recharge.column.payoutSum}}元</p>
                    </div>
                    <div class="col-4 main" >
                        <p class="sup">输赢金额小计</p>
                        <p class="sub">{{Recharge.column.netAmountSum}}元</p>
                    </div>

                    <div class="col-4 main">
                        <p class="sup">下注金额总计</p>
                        <p class="sub">{{Recharge.column.betamountTotal}}元</p>
                    </div>
                    <div class="col-4 main" style="">
                        <p class="sup">派彩金额总计</p>
                        <p class="sub">{{Recharge.column.payoutTotal}}元</p>
                    </div>
                    <div class="col-4 main" >
                        <p class="sup">输赢金额总计</p>
                        <p class="sub">{{Recharge.column.netAmountTotal}}元</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="row" v-if="Recharge.judgment === true">
            <el-pagination
                    @size-change="handleSizeChange"
                    @current-change="handleCurrentChange"
                    :current-page="Recharge.page"
                    :page-size="Recharge.size"
                    background
                    layout="prev, pager, next"
                    :total="Recharge.total">
            </el-pagination>
        </div>
    </div>
</template>
<script>
    var vm;
    let vueIns = null;
    import withdraw from '../public/return.vue'
    import Top from '../Top/Top.vue'
//    import { zh } from 'flatpickr/dist/l10n/zh';
    export default {
        data () {
            return {
                withdraw:'/MemberCentre',
//                StartTimeDay: {
//                    locale: zh,
//                    enable: [
//                        {
//                            from: new Date().fp_incr(-30),
//                            to: "today" // 7 days from now
//                        }
//                    ],
//                    defaultDate : new Date().fp_incr(-1)
////                    enableTime: true
//                },
                canEdit:false,
                pickerOptions0: {
                    disabledDate(time) {
                        // 最多只能选择一年的
                        let ayearAgo = Date.now() - 3600 * 1000 * 24 * 30
                        return time.getTime() > Date.now() || time.getTime() < ayearAgo  || (vueIns.obj.bdate && vueIns.obj.bdate.getTime && (time.getTime() < vueIns.obj.bdate.getTime()))
                    }
                },
                pickerOptions1: {
                    disabledDate(time) {
                        // 最多只能选择一年的
                        let ayearAgo = Date.now() - 3600 * 1000 * 24 * 30
                        return time.getTime() > Date.now() || time.getTime() < ayearAgo || (vueIns.obj.edate && vueIns.obj.edate.getTime && (time.getTime() > vueIns.obj.edate.getTime()))
                    }
                },
                gamerechar:[//游戏列表
                    {name:'所有',type:'ALL'},
                    {name:'开元棋牌',type:'KYQP'},
                    {name:'IG彩票（新）',type:'IGPJ'},
                    {name:'IG彩票',type:'IG'},
                    {name:'VR 彩票',type:'VR'},
                    {name:'Cagayan88视讯',type:'CG'},
                    {name:'DS视讯',type:'DS'},
                    {name:'AGIN国际厅',type:'AG'},
                    {name:'BBIN 视讯',type:'BBIN'},
                    {name:'申博视讯',type:'SHENBO'},
                    {name:'OG视讯',type:'OG'},
                    {name:'皇冠',type:'HG'},
                    {name:'BBIN电子',type:'BBINGAME'},
                    {name:'PT电子',type:'PT'},
                    {name:'申博电子(TGP)',type:'TGP'},
                    {name:'MG电子',type:'MG'},
                    {name:'YOPLAY电子',type:'YOPLAY'},
                    {name:'HABA电子',type:'HABA'}
                ],
                rechargeRecord:{
                    pageSize:5,
                    pageNo:1,
                    bdate:'',
                    edate:'',
                    Type:'',
                    status:''
                },
                bonusDetails:{
                    pageSize:5,
                    pageNo:1,
                    startTime:'',
                    endTime:''
                },
                withdrawRecord:{
                    pageSize:5,
                    pageNo:1,
                    bdate:'',
                    edate:'',
                    status:''
                },
                accountDetails:{
                    pageSize:5,
                    pageNo:1,
                    bdate:'',
                    edate:'',
                    Type:'',
                    Ttype:''
                },
                lotteryForm:{
                    pageSize:5,
                    pageNo:1,
                    bdate:'',
                    edate:'',
                    type:'ALL'
                },
                integralRecording:{
                    pageSize:5,
                    pageNo:1,
                    startTime:'',
                    endTime:''
                },
                obj:{
                    bdate:'',
                    edate:''
                },
            }
        },
        computed: {
            Recharge:function () {//判断登录
                return this.$store.state.Recharge;
            },
            userNew:function () {//判断登录
                return this.$store.state.userNew;
            },
            game:function () {//判断登录
                return this.$store.state.game;
            }
        },
        created() {
            vm= this;
            vueIns = this
            if(vm.Recharge.id === ""){
                vm.$router.push({path:'/MemberCentre'});
            }
        },
        mounted() {
            vm= this;
            this.setBackground();
            this.$nextTick(function () {
                vm.obj.bdate=vm.$datatboy('0');
                vm.obj.edate=vm.$datatboy('0');
                if(vm.Recharge.id === "rechargeRecord"){
                    vm.$store.dispatch("inceCloseNew",{id:3,text:'充值记录'});
                    vm.rechargeRecord.bdate=vm.obj.bdate;
                    vm.rechargeRecord.edate=vm.obj.edate
                }else if(vm.Recharge.id === "bonusDetails"){//bonusDetails
                    vm.$store.dispatch("inceCloseNew",{id:3,text:'资金流水'});
                    vm.bonusDetails.startTime = vm.obj.bdate;
                    vm.bonusDetails.endTime = vm.obj.edate;
                }else if(vm.Recharge.id === "withdrawRecord"){//withdrawRecord
                    vm.$store.dispatch("inceCloseNew",{id:3,text:'提现记录'});
                    vm.withdrawRecord.bdate=vm.obj.bdate;
                    vm.withdrawRecord.edate=vm.obj.edate;
                }else if(vm.Recharge.id === "accountDetails"){//accountDetails
                    vm.$store.dispatch("inceCloseNew",{id:3,text:'转账记录'});
                    vm.accountDetails.bdate=vm.obj.bdate;
                    vm.accountDetails.edate=vm.obj.edate;
                }else if(vm.Recharge.id === "lotteryForm"){///lotteryForm
                    vm.$store.dispatch("inceCloseNew",{id:3,text:'投注记录'});
                    vm.lotteryForm.bdate=vm.obj.bdate;
                    vm.lotteryForm.edate=vm.obj.edate;
                }
            });
        },
        methods:{
            setBackground(){
                this.$refs.BackG.style.minHeight = window.innerHeight+'px';
            },
            submit:function () {
                vm=this;
                if(vm.obj.bdate == ""){
                    vm.$store.dispatch("inceCloseNew",{id:1,Closepop:true,Closepoptext:'请选择开始日期'});
                    return;
                }
                if(vm.obj.edate == ""){
                    vm.$store.dispatch("inceCloseNew",{id:1,Closepop:true,Closepoptext:'请选择结束日期'});
                    vm.$store.dispatch("incrClosepop",true);
                    return;
                }
                if(vm.Recharge.id === "rechargeRecord"){//rechargeRecord
                    vm.rechargeRecord.bdate=vm.obj.bdate;
                    vm.rechargeRecord.edate=vm.obj.edate;
                    vm.$store.dispatch("incrRecording",{id:5,data:vm.rechargeRecord});
                }else if(vm.Recharge.id === "bonusDetails"){//bonusDetails
                    vm.bonusDetails.startTime = vm.obj.bdate;
                    vm.bonusDetails.endTime = vm.obj.edate;
                    vm.$store.dispatch("incrRecording",{id:9,data:vm.bonusDetails});
                }else if(vm.Recharge.id === "withdrawRecord"){//withdrawRecord
                    vm.withdrawRecord.bdate=vm.obj.bdate;
                    vm.withdrawRecord.edate=vm.obj.edate;
                    vm.$store.dispatch("incrRecording",{id:7,data:vm.withdrawRecord});
                }else if(vm.Recharge.id === "accountDetails"){//accountDetails
                    vm.accountDetails.bdate=vm.obj.bdate;
                    vm.accountDetails.edate=vm.obj.edate;
                    vm.$store.dispatch("incrRecording",{id:3,data:vm.accountDetails});
                }else if(vm.Recharge.id === "lotteryForm"){///lotteryForm
                    vm.lotteryForm.bdate=vm.obj.bdate;
                    vm.lotteryForm.edate=vm.obj.edate;
                    vm.$store.dispatch("incrRecording",{id:1,data:vm.lotteryForm});
                }
            },
            handleSizeChange(val) {
                console.log(`每页 ${val} 条`);
            },
            handleCurrentChange(page) {
                vm=this;
                if(vm.Recharge.id === "rechargeRecord"){//rechargeRecord
                    vm.rechargeRecord.pageNo=page;
                    vm.$store.dispatch("incrRecording",{id:5,data:vm.rechargeRecord});
                }else if(vm.Recharge.id === "bonusDetails"){//bonusDetails
                    vm.bonusDetails.pageNo = page;
                    vm.$store.dispatch("incrRecording",{id:9,data:vm.bonusDetails});
                }else if(vm.Recharge.id === "withdrawRecord"){//withdrawRecord
                    vm.withdrawRecord.pageNo = page;
                    vm.$store.dispatch("incrRecording",{id:7,data:vm.accountDetails});
                }else if(vm.Recharge.id === "accountDetails"){//accountDetails
                    vm.accountDetails.pageNo=page;
                    vm.$store.dispatch("incrRecording",{id:3,data:vm.accountDetails});
                }else if(vm.Recharge.id === "lotteryForm"){///lotteryForm
                    vm.lotteryForm.pageNo=page;
                    vm.$store.dispatch("incrRecording",{id:1,data:vm.lotteryForm});
                } else if(vm.Recharge.id === "bonusDetails"){//bonusDetails
                    vm.integralRecording.pageNo = page;
                    vm.$store.dispatch("incrRecording",{id:9,data:vm.bonusDetails});

                }
            }
        },

        components: {
            Top,
            withdraw
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less' scoped>
@import "./css/from.less";
.rechargeRecord{
    width: 100%;
    .Bg-BackGround;
    padding-top: 0.8rem;
    padding-bottom: 0.25rem;
    .el-button--mini{
        padding: 0;
        width: 95%;
        line-height: 0.6rem;
    }
    .el-date-editor.el-input, .el-date-editor.el-input__inner{
        width:100%;
    }
    .el-input--prefix .el-input__inner{
        padding-left: 27px;
    }
    .el-input--suffix .el-input__inner{
        padding-right: 0;
    }
}
</style>