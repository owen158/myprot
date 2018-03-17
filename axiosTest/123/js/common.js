/*
 * common: 使用者端資訊
 */

(function () {
    var webSite = $('head link[rel="shortcut icon"]').attr('href').substr(24, 5);
    var site = [
        { 'name': 'AC001', 'analytics': 'UA-92265892-1' },
		{ 'name': 'AF001', 'analytics': 'UA-92324248-1' },
		{ 'name': 'AG001', 'analytics': 'UA-92326116-1' },
		{ 'name': 'AG002', 'analytics': 'UA-92326116-2' },
		{ 'name': 'AM001', 'analytics': 'UA-91935200-1' },
		{ 'name': 'AM002', 'analytics': 'UA-91935200-2' },
		{ 'name': 'AM003', 'analytics': 'UA-91935200-3' },
		{ 'name': 'AM004', 'analytics': 'UA-91935200-4' },
		{ 'name': 'AX001', 'analytics': 'UA-92018018-1' },
		{ 'name': 'AX002', 'analytics': 'UA-92018018-2' },
		{ 'name': 'BA001', 'analytics': 'UA-91865920-1' },
		{ 'name': 'BA002', 'analytics': 'UA-91865920-2' },
		{ 'name': 'BA003', 'analytics': 'UA-91865920-3' },
		{ 'name': 'BB001', 'analytics': 'UA-92328730-1' },
		{ 'name': 'BE001', 'analytics': 'UA-92320858-1' },
		{ 'name': 'BM001', 'analytics': 'UA-92334011-1' },
		{ 'name': 'BR001', 'analytics': 'UA-92319874-1' },
		{ 'name': 'BV001', 'analytics': 'UA-92312679-1' },
		{ 'name': 'BW001', 'analytics': 'UA-91882900-1' },
		{ 'name': 'BW002', 'analytics': 'UA-91882900-2' },
		{ 'name': 'BW003', 'analytics': 'UA-91882900-3' },
		{ 'name': 'BW004', 'analytics': 'UA-91882900-4' },
		{ 'name': 'BW005', 'analytics': 'UA-91882900-5' },
		{ 'name': 'BW007', 'analytics': 'UA-91882900-6' },
		{ 'name': 'BX001', 'analytics': 'UA-91863429-1' },
		{ 'name': 'BY001', 'analytics': 'UA-92333606-1' },
		{ 'name': 'BY002', 'analytics': 'UA-92333606-2' },
		{ 'name': 'BZ001', 'analytics': 'UA-91891974-1' },
		{ 'name': 'BZ002', 'analytics': 'UA-91891974-2' },
		{ 'name': 'BZ003', 'analytics': 'UA-91891974-3' },
		{ 'name': 'BZ005', 'analytics': 'UA-91891974-4' },
		{ 'name': 'BZ008', 'analytics': 'UA-91891974-5' },
		{ 'name': 'CE001', 'analytics': 'UA-92010606-1' },
		{ 'name': 'CE002', 'analytics': 'UA-92010606-2' },
		{ 'name': 'CE003', 'analytics': 'UA-92010606-3' },
		{ 'name': 'CE004', 'analytics': 'UA-92010606-4' },
		{ 'name': 'CJ001', 'analytics': 'UA-91873632-1' },
		{ 'name': 'CJ002', 'analytics': 'UA-91873632-2' },
		{ 'name': 'CV001', 'analytics': 'UA-92324461-1' },
		{ 'name': 'CW001', 'analytics': 'UA-92018018-3' },
		{ 'name': 'DE001', 'analytics': 'UA-92300248-1' },
		{ 'name': 'DN001', 'analytics': 'UA-92018018-4' },
		{ 'name': 'DO001', 'analytics': 'UA-92018018-5' },
		{ 'name': 'DQ001', 'analytics': 'UA-91865920-4' },
		{ 'name': 'DT001', 'analytics': 'UA-92320575-1' },
		{ 'name': 'DT003', 'analytics': 'UA-92320575-2' },
		{ 'name': 'EB001', 'analytics': 'UA-92002311-1' },
		{ 'name': 'EB002', 'analytics': 'UA-92002311-2' },
		{ 'name': 'EB003', 'analytics': 'UA-92002311-3' },
		{ 'name': 'EB004', 'analytics': 'UA-92002311-4' },
		{ 'name': 'EB006', 'analytics': 'UA-92002311-5' },
		{ 'name': 'EC001', 'analytics': 'UA-92002311-6' },
		{ 'name': 'ED001', 'analytics': 'UA-92018018-6' },
		{ 'name': 'EW001', 'analytics': 'UA-92002311-8' },
		{ 'name': 'FJ001', 'analytics': 'UA-91882900-7' },
		{ 'name': 'FO001', 'analytics': 'UA-92002311-7' }
    ];

    for (var i = 0; i < site.length; i++) {
        if (webSite === site[i].name) {
            var hasWebSite = true;
            addWebSiteAnalytics(site[i].analytics);
        };
    };

    // 如果陣列裡沒有特殊需要換得 GoogleAnalytics 就會給預設 UA-78241417-1
    if (!hasWebSite) {
        addWebSiteAnalytics('UA-78241417-1');
    };

    // 全站額外新增 GoogleAnalytics 的程式碼到頁面上
    function addWebSiteAnalytics(webSiteJs) {
        var addContent = "(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){" +
                       "(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o)," +
                       "m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)" +
                       "})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');" +
                       "ga('create', " + "'" + webSiteJs + "', 'auto');" +
                       "ga('send', 'pageview');";

        var element = document.createElement('script');
        element.type = 'text/javascript';
        element.innerHTML = addContent;
        document.body.appendChild(element);
    };
})();