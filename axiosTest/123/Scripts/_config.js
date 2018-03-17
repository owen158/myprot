(function () {
    'use strict';

    //#region 处理全域的ajax错误
    app.factory('xmHttpInterceptor', [function () {
        return {
            'request': function (config) {
                // 從頁面上取得 token，需確定頁面上有 @Html.AntiForgeryToken() 程式碼
                var tokenValue = $('[name="__RequestVerificationToken"]').val();
                // 有取得就加到 header
                if (tokenValue !== undefined) {
                    var token = { 'c02b5': tokenValue };
                    angular.extend(config.headers, token);
                }
                return config;
            },
            'response': function (response) {
                return response;
            },

            'responseError': function (response) {
                if (window.isReload)
                    return;

                // debug 用
                sessionStorage['httpError'] = JSON.stringify(response);

                switch (response.status) {
                    case 0:     // request 還沒回來，不用理會
                    case 404:   // 可能是伺服器繁忙導致
                        return;
                    case 401:
                        window.alert("闲置过久，请重新登入");
                        break;
                    default:
                        window.alert("伺服器忙碌中，请再试一次");
                        break;
                }

                window.isReload = true;
                window.location.reload();
            }
        };
    }]);

    app.config(['$httpProvider', function ($httpProvider) {
        $httpProvider.interceptors.push('xmHttpInterceptor');
    }]);
    //#endregion 处理全域的ajax错误

    //#region angular 预设拿掉XMLHttpRequest，要把他加回去
    app.config(function ($httpProvider) {
        $httpProvider.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
    });
    //#endregion angular 预设拿掉XMLHttpRequest，要把他加回去

    //app.run(['$http', function ($http) {
    //    console.dir($http);

    //    var data = $http.data;

    //    data = data === undefined ? { token: '123' } : angular.extend(data, { token: '456' });

    //    console.dir($http);
    //}]);
})();