module.exports = {
    entry: {
        login: "./public/src/js/entry/login_entry.js",
        score: "./public/src/js/entry/score_entry.js",
    },
    output: {
        path: __dirname + "/public/src/js/build/",
        filename: "[name].js"
    }
}