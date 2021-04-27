"use strict";

const process = require("process");

module.exports = (() => {
    switch (process.env.NODE_ENV) {
        case "test":
            return require("../../../config-test.json");
        case "ci":
            if (__dirname.indexOf("node_modules") === -1) {
                return require("./config-test.json");
            }
        // eslint-disable-next-line no-fallthrough
        default:
            return require("../../../config.json");
    }
})();
