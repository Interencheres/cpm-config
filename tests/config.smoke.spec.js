"use strict";

describe("[SMOKE]", () => {
    it ("load configuration file", () => {
        expect(require("../app")).toEqual({
            database:
                {
                    host: "localhost",
                    port: 8888,
                    user: "user",
                    password: "password"
                }
        });
    });
});
