<template>
    <div class='Top'>
        <h2>{{text.title}}</h2>
        <p>{{text.text}}</p>
    </div>
</template>

<script>
    export default {
        props: {
            text: {
                type:Object
            }
        },
        data () {
            return {}
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less'>
@import "../../../static/css/style.less";
.Top{
    position: fixed;
    top:0;
    left:0;
    width: 100%;
    height: 0.8rem;
    padding-top: 0.05rem;
    text-align: center;
    background: -prefix-linear-zgradient(top,@bg-c1,@bg-c2);
    background: linear-gradient(180deg,@bg-c1,@bg-c2);
    /*.box-shadow(0px,0px,5px,0px,@bg-c4);*/
    color:@text-c3;
    z-index: 10;
    h2{
        height: 0.4rem;
        line-height: 0.4rem;
        font-size: 0.3rem;
        font-weight: 900;
        text-shadow: black 0.05rem 0.05rem 0.2rem;
        font-family:Georgia, serif;
    }
    p{
        height: 0.3rem;line-height: 0.3rem;
        font-size: 0.25rem;
        font-family:Georgia, serif;
        text-shadow: black 0.05rem 0.05rem 0.2rem;
    }
}
</style>