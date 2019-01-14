"use strict";

const process = require("process");

module.exports = (() => {
    switch (process.env.NODE_ENV) {
        case "test":
            return require(`${process.cwd()}/config-test.json`);
        /* istanbul ignore next */
        default:
            return require(`${process.cwd()}/config.json`);
    }
})();
