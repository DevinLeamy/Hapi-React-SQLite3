"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.index = void 0;
const path_1 = __importDefault(require("path"));
const index = {
    handler: {
        directory: {
            path: path_1.default.join(__dirname, "../../../frontend/build"),
            listing: false,
            index: true
        }
    }
};
exports.index = index;
