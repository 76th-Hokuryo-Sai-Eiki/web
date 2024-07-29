const isCrawler =
    /bot|googlebot|crawler|spider|robot|crawling/i.test(navigator.userAgent) ||
    new URLSearchParams(window.location.search).has("crawler");

export default isCrawler;
