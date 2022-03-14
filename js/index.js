var scriptTag = document.createElement('script');
scriptTag.src = 'https://cdn-kajabins.ecommercenapratica.com/chrome-app/js/app.min.js?a=1';
document.body.appendChild(scriptTag);

var head  = document.getElementsByTagName('head')[0];
var link  = document.createElement('link');
link.rel  = 'stylesheet';
link.type = 'text/css';
link.href = 'https://cdn-kajabins.ecommercenapratica.com/chrome-app/css/default.css?a=1';
link.media = 'all';
head.appendChild(link);