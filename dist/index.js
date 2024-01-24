import loadBlocks from './blocks';
import loadComponents from './components';
var CarouselPlugin = function (editor, opts) {
    // const options = {
    //     // Default options
    //     type:'section',
    //     name:'Carousel',
    //     label:'Carousel',
    // };
    var options = {};
    // Load defaults
    // for (let name in options) {
    //     if (!(name in opts))
    //     opts[name] = options[name];
    // }
    // Add components
    loadComponents(editor, opts);
    // Add blocks
    loadBlocks(editor, opts);
};
export default CarouselPlugin;
//# sourceMappingURL=index.js.map