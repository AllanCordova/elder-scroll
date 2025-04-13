"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ControllerMenu_1 = __importDefault(require("./controller/ControllerMenu"));
const elderScroll = new ControllerMenu_1.default();
elderScroll.startGame();
