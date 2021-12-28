const address = {
    title = "Liberty Market",
    location = "Lahore"
}
console.log(address);
function printAddress(title, location){
    console.log(title+"is located in"+location);
}
const{title,location} = address;
printAddress(address,location);