// const PI = 3.14;
// const isEmpty = null;

// namespace Util {
//     export const PI = Math.PI;
//     export const isEmpty = (d: any) => !d;
// }

// console.log(Util.PI);

// ---------------------------------------------------------------------

// type Human = {
//     name: string,
//     age: number,
//     educ?: string
// }

// let human: Human = {
//     name: "Jack",
//     age: 20
// }

// //Работа с классами и абстракция-------------------------------------------------------------------------

// abstract class Person {
//     public zib: number = 10;
//     abstract zib2: string;

//     public abstract msg(msg: string): string;

//     constructor(public model: string) {}
// }

// class Developer extends Person {
//     zib2: string = "zib";

//     msg(msg: string): string {
//         return `${this.model} ${msg}`;
//     }
// }

// const developer = new Developer("zibert");

// console.log(developer.msg("yes"));

// //Интерфейсы-------------------------------------------------------------------------

// interface LengthInterface{
//     length: number,
// }

// function getLength(item: LengthInterface) {
//     console.log(item.length);
// }

// const obj = {name: "Name", length: 20}
// const obj2 = {name: "Name", age: 20}

// getLength("any string");
// getLength([1,2,3,4,5]);
// getLength(obj);

// Объеденение типов _______________________________--

// type PersonType = {
//     name: string,
//     age: number,
//     gender: string,
//     greet(msg: string): void
// }

// type Developer = {
//     level: string
// }

// type Advanced = PersonType & Developer;

// const person: Advanced = {
//     name: "John",
//     age: 25,
//     gender: "Male",
//     greet(msg: string): void {
//         console.log(`${msg} ${this.name}`)
//     },

//     level: "Junior"
// }

// const person2: Partial<Advanced> = {  //Required - убирает ? у ключей, тоесть они становятся обязательными
//     name: "John",
//     level: "Junior"
// }

// Объеденение интерфейсов_______________________________--

// interface PersonInterface {
//     name: string,
//     age: number,
//     gender: string,
//     greet: (msg: string) => void
//     print?: () => void
// }

// interface getSkillsInterface {
//     skills: string[],
//     getSkills(): string[]
// }

// class Person implements PersonInterface, getSkillsInterface {
//     name: string = "John";
//     age: number = 20;
//     gender: string = "Male";
//     greet(msg: string): void {
//         console.log(`${msg} ${this.name}`)
//     }

//     skills: string[] = ["html"];
//     getSkills(): string[] {
//         return this.skills;
//     }
// }

// const anotherPerson = new Person();

// Generiks-------------------------------------------------------------------------

// function getData<T>(data: T): T {
//     return data;
// }

// const newGetData: <T>(d: T) => T = getData;

// console.log(getData("str").length);
// console.log(getData(10).toFixed());
// console.log(getData([10]).forEach(console.log));

// class Multiply<T extends number | string | boolean> {
//     constructor(private a: T, private b: T) {}

//     public getResult(): number {
//         return +this.a * +this.b;
//     }
// }

// const mNum: Multiply<number> = new Multiply(5, 10);
// console.log(mNum.getResult());

// const mStr = new Multiply<string>("10", "5");
// console.log(mStr.getResult());

// const mBool = new Multiply(true, false);
// console.log(mBool.getResult());

// Декораторы-------------------------------------------------------------------------

// function consoleLog(constrClass: Function) {
//     console.log(constrClass);
// }

// function conditionLog(flag: boolean = false): any {
//     console.log(flag);
//     return flag ? conditionLog : null;
// }

// // consoleLog("Function called");

// @conditionLog(true)
// class Person {
//     constructor(public name: string, public age: number) {
//         console.log("Hello");
//     }
// }

// ----------------------------------------------------------------------------------

// function AddPrinter(constrClass: Function) {
//     constrClass.prototype.printInfo = function() {
//         const p = document.createElement("p");

//         p.innerHTML = `
//             ${JSON.stringify(this)}<br>
//             ${this.name}<br>
//             ${this.age}<br>
//             ${this.gender}<br>
//             ${this.skills}
//         `

//         document.body.append(p);
//     }
// }

// @AddPrinter
// class Developer {
//     constructor(public name: string, 
//         public age: number, 
//         public gender: string, 
//         public skills: string[]) {}
// }

// const dev: any = new Developer("John", 25, "Male", ["html", "css"]);

// dev.printInfo();

// @AddPrinter
// class FullStack {
//     constructor(public name: string, 
//         public age: number, 
//         public gender: string, 
//         public skills: string[]) {}
// }

// const full: any = new Developer("John", 25, "Male", ["html", "css"]);

// full.printInfo();

// ----------------------------------------------------------------------------------

// function ReadOnly(label: string) {
//     console.log(label);

//     return (target: any, key: string) => {
//         console.log(target, key);
//         Object.defineProperty(target, key, {
//             configurable: false,
//             get: () => label,
//             set: (value) => {}
//         })
//     }
// }

// class Test {
//     @ReadOnly("Zibert")
//     name: string = "Any string";
// }

// const t = new Test();

// console.log(t.name);
// t.name = "zib";
// console.log(t.name);
