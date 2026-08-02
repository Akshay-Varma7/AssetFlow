"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const index_ts_1 = require("./middlewares/index.ts");
const index_ts_2 = require("./routes/index.ts");
const app = (0, express_1.default)();
const port = process.env.port;
app.use(express_1.default.json());
app.use((0, cookie_parser_1.default)());
app.use("/department", index_ts_2.deptRouter);
app.use(index_ts_1.errorMW);
app.listen(port, () => {
    console.log(`listening to port: ${port}`);
});
//# sourceMappingURL=server.js.map