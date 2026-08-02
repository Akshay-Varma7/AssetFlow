"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const controllers_1 = require("../controllers");
const middlewares_1 = require("../middlewares");
const router = express_1.default.Router();
router.use(middlewares_1.authMW);
router.use((0, middlewares_1.accessMW)('Admin'));
router.get("/", controllers_1.getDeptC);
router.post("/", controllers_1.createDeptC);
router.put("/", controllers_1.renameDeptC);
router.delete("/", controllers_1.deleteDeptC);
exports.default = router;
//# sourceMappingURL=department.js.map