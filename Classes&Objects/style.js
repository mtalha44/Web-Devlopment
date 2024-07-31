// const Student = {
//       name : "talha",
//       marks : 94,
//       printMarks : function(){
//             console.log("marks:",this.marks);
//       }, 
//       CalTac() {
//         console.log("70%");
//   } 
// }

// const junior = {
//       grade : "A",
//       improve(){
//         console.log("Last year");
//       }
// };

// junior.__proto__ = Student;
// junior.CalTac();
// junior.printMarks();
// junior.improve();

// class Car{
//     constructor(){
//           this.Brand = "Lamborghini" ;
//           this.price = 4500 ;
//           this.model = 2023 ;
//     }

//     // A class can have only one constructor.

//       start(){
//         console.log("Start")
//       }
//       stop(){
//         console.log("stop");
//       }
//       show(){
//         console.log(this.Brand);
//         console.log(this.price);
//         console.log(this.model);
//       }
//       setBrand(Brand){
//         this.Brand = Brand;
//       }
//       getBrand(){
//         return this.Brand;
//       }
// }

// let Toyota = new Car();
// Toyota.start();
// Toyota.stop();
// Toyota.setBrand("Kawasaki");
// console.log(Toyota.getBrand());

// let Speedo =  new  Car();
// Toyota.show();

// class parts extends Car{
//         hello(){
//             console.log("Wow");
//         }    
//         capacity(){
//             console.log("6785kph");
//       }
// }

// let obj = new parts;
// obj.start();
// obj.setBrand("honda");
// console.log(obj.getBrand());

// class engine extends parts{
//       capacity(){
//             console.log("9845Kph");
//       }
// }
// let obj1 =new engine;
// obj1.hello();
// obj1.capacity();
// // obj1.setBrand("Road Prince");
// console.log(obj1.getBrand());

// class Garage{
//     constructor(name){
//           this.Brand = "Honda125" ;
//           this.price = 7890 ;
//           this.model = 2025 ;
//         this.name = name;
//     }

//     // A class can have only one constructor.

//       open(){
//         console.log("Open")
//       }
//       close(){
//         console.log("Closs");
//       }
//       show(){
//         console.log(this.Brand);
//         console.log(this.price);
//         console.log(this.model);
//       }
//       setBrand(Brand){
//         this.Brand = Brand;
//       }
//       getBrand(){
//         return this.Brand;
//       }
// }

// class Owner extends Garage{
//         constructor( name , CarName ){
//             super( name );
//             this.CarName = CarName;
//         }
//         name(){
//             console.log("Talha");
//         } 
//         show(){
//             super.show();
//             console.log( this.name);
//             console.log( this.CarName );
//         }
// }

// let obj2 = new Owner( "A1_70" , "Rprince" );
// obj2.show();

