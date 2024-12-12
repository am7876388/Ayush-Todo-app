// function fibonacci(n){
//     if(n === 1){
//         return 0;
//     }
//     else if(n === 2){
//         return 1;
//     }
//     else{
//     let num1 = fibonacci(n - 1) + fibonacci(n - 2);
//     return num1;
//     }
// }
// console.log(fibonacci(10));
class Ayush {
    constructor(name,Class){
        this.username = name;
        this.Class = Class;
        this.ClassDetails = this.ClassDetails.bind(this);
    }
}
Ayush.prototype.ClassDetails = () => {
    console.log(`${this.Class} Present`);
}
class Divya extends Ayush{
    constructor(name,Class){
        super(name,Class);
        this.print = () =>{
            console.log(`${this.username} Hello`);
        }
    }
}
let num1 = new Divya("Ayush","Btech final");
num1.print();
num1.ClassDetails();