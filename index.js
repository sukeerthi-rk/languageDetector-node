var franc = require('franc');
var langs = require('langs');
var Colors = require('colors');

let args = process.argv;

args.splice(0, 2);
let text = args.join(" ");
let langCode = franc(text);
if (langCode === 'und') {
    console.log("Couldnt recognise language,try adding more input".red);
} else {
    let language = langs.where("3", langCode).name;
    console.log(language.green);
}