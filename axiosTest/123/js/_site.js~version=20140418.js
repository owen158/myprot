// ng-app
// var app = angular.module('portalApp', ["ui.bootstrap", "ngAnimate"]);

$(document).ready(function () {
    //跑馬燈外掛  參考：http://aamirafridi.com/jquery/jquery-marquee-plugin
    //使用class 供應其他頁面不同跑馬燈需要時可以使用
    //如果同時不同頁面需要其他效果，請建新的
    //最新消息使用
    $('.marqueen').marquee({
        //speed in milliseconds of the marquee
        duration: 25500,
        //gap in pixels between the tickers
        gap: 10,
        //time in milliseconds before the marquee will start animating
        delayBeforeStart: 0,
        //'left' or 'right' or 'up' or 'right'
        direction: 'left',
        //true or false - should the marquee be duplicated to show an effect of continues flow
        duplicated: false,
        //hover over marquee to pause
        pauseOnHover: true
    });
});