//creating a module and Exporting
module.exports = ("I know you were waiting for me.")

// Another Module
//to call a particular function from module use (name.world();)
exports.world = function()
{
    console.log("I am surprised");
}
