var students = ["Mahrukh", "Urwa", "Alishba"];
// let searchedStudents = students.find(findAlishba);
// students.sort();
console.log(students);
students.splice(1,1,...["Zahid","Anwar"]); 
students.sort(customSort); 
console.log(  students); 

let rates = [2,5,10];
let newRates = rates.map(function(r){
       return r*3;
});
console.log(newRates);
function findAlishba(std){
   if(std=="Alishba") return true;
   else return false;
}
function customSort(a, b){
    if(b<a) return -1; else return 1;
}