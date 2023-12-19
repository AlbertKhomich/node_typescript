"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var todos_1 = require("./routes/todos");
var app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use(todos_1.default);
app.listen(3000);
