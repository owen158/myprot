app.filter("customCurrency",["$filter",function(n){var t=n("number");return function(n){var i=t(n);return"$ "+i}}]);app.filter("dateTime",function(){return function(n){return n?moment(n).format("YYYY/MM/DD (dd) HH:mm:ss"):""}}),function(){if(typeof moment!="undefined"){var n=moment(new Date($("html").attr("meidon-time")));app.filter("fromNow",function(){return function(t){return moment(t).from(n)}})}}();app.filter("toLabel",["labelService",function(n){return function(t){return n.get(t)}}]);app.filter("NumberZero",function(){return function(n,t){var i=n;return n||(i="0"),t===!0&&n===0&&(i=0),i}})