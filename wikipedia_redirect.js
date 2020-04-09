// it literally just takes the .m out of wikipedia urls and redirects to the new url
browser.storage.sync.get("wikipedia").then((result, err) => {
    if(result.wikipedia || result.wikipedia == undefined) {
        if(result.wikipedia == undefined) browser.storage.sync.set({ "wikipedia": true });
        let href = location.href;
        href = href.split(".m").join("");
        console.info("Redirecting to " + href);
        location.replace(href);
    }
});