browser.storage.sync.get("twitter").then((result, err) => {
    if(result.twitter == undefined) {
        browser.storage.sync.set({ "twitter": true });
        result.twitter = true;
    }
    document.getElementById("twitter-checkbox").checked = result.twitter;
});
browser.storage.sync.get("wikipedia").then((result, err) => {
    if(result.wikipedia == undefined) {
        browser.storage.sync.set({ "wikipedia": true });
        result.wikipedia = true;
    }
    document.getElementById("wikipedia-checkbox").checked = result.wikipedia;
});

document.querySelector("#save-button").onclick = () => {
    browser.storage.sync.set({ "twitter": document.querySelector("#twitter-checkbox").checked });
    browser.storage.sync.set({ "wikipedia": document.querySelector("#wikipedia-checkbox").checked });
};