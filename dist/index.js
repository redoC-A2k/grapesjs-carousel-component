"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const blocks_1 = __importDefault(require("./blocks"));
const components_1 = __importDefault(require("./components"));
const CarouselPlugin = (editor, opts) => {
    // const options = {
    //     // Default options
    //     type:'section',
    //     name:'Carousel',
    //     label:'Carousel',
    // };
    const options = {};
    // Load defaults
    // for (let name in options) {
    //     if (!(name in opts))
    //     opts[name] = options[name];
    // }
    // Add components
    (0, components_1.default)(editor, opts);
    // Add blocks
    (0, blocks_1.default)(editor, opts);
};
exports.default = CarouselPlugin;
