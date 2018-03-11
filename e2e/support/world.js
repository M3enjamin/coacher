function World(callback) {
    this.page = undefined; // this.page will be available in step definitions

    // this.visit = function (url, callback) {
    //     this.browser.visit(url, callback);
    // };
    callback();
}

module.exports = function () {
    this.World = World;
};
