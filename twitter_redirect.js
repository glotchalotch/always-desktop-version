// it literally just takes the mobile out of twitter urls and redirects to the new url
browser.storage.sync.get("twitter").then((result, err) => {
    if(result.twitter || result.twitter == undefined) {
        if(result.twitter == undefined) browser.storage.sync.set({ "twitter": true });
        let href = location.href;
        href = href.split(/\.?mobile\./).join("");
        console.info("Redirecting to " + href);
        location.replace(href);
    }
});