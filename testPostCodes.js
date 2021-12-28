let postcodes = require("./postcodes");
// console.log(postcodes.length);

let obj = postcodes.find(p => p.Region == "Crawley");
function findCrawley(post){
   if(post.Region=="Crawley") return true; else return false;
}
console.log(obj);