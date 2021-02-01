"use strict";

const process = require("process");

module.exports = (() => {
    if(process.env.CPM_CONFIG_FILE) {
        return require("../../" + process.env.CPM_CONFIG_FILE);
    } else {
        return require("../../config.json");
    }
})();
