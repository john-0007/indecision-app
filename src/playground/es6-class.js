class Person{
  constructor(name="Anonymous",age=0){
    this.name= name;
    this.age= age;
  }
  greeting(){
    return `${this.name} is ${this.age} ${this.age === 0 ? "year" : "years"} old`
  }
}

class Student extends Person{
  constructor(name,age,major){
    super(name,age);
    this.major= major;
  }
  hasmajor(){
    return !!this.major;
  }
  getDescription(){
    
    let description=super.greeting();
    if(this.hasmajor()){
      description+= ` and has major ${this.major}`
    }
    return description;
  }
}
class Traveler extends Person{
 constructor(name,age,location){
   super(name,age);
   this.location= location;
 }
 hasLocation(){
   return !!this.location;
 }
 greeting(){
   let greeting=super.greeting();
   if(this.hasLocation()){
     greeting+=` I'm visiting from ${this.location}`
   }

   return greeting;
 }
}
const me= new Traveler("John",28,"bangkok");
const you= new Student("Joseph");
console.log(me);
console.log(me.greeting());
console.log(you);
console.log(you.greeting());
