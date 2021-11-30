
require('bootstrap');
import inputUser from "./inputUser";

inputUser()

/*
class User{
    constructor(first, last) {
        this.name = first;
        this.lname = last;
    }
    showInfo(){
        console.log(`${this.name}:${this.lname}`)
    }
}

class Teacher extends User{
    constructor(first, last, subject) {
        super(first, last);
        this.subject = subject;
    }
    showInfo() {
        console.log(`${this.name}:${this.lname}:${this.subject}`)
    }
}

const teacher1 = new Teacher('Vardenis', 'Pavardenis', 'PHP')
teacher1.showInfo()

const person1 = new User('Jonas', 'Balvonas');
person1.showInfo();



function Book(name, pages, year){
    this.name = name;
    this.pages = pages;
    this.year = year;
    this.showBook = function (){
        console.log(`${this.name}, psl.: ${this.pages}, metai: ${this.year}`)
    }
}

const book1 = new Book('Raudonkepuraite', 230, 2000)
const book2 = new Book('Belenkokia', 300, 1985)

const book3 = new Book('Knyga', 150, 2000, Book.prototype.bookName = function (){
    console.log(this.name);
})

book1.showBook()
book2.showBook()
book3.bookName()
*/