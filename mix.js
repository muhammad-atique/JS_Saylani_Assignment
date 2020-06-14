// CHAPTER # 1 ALERT
// 1.
alert("Welcome to Javascript");
// 2.
alert("JavaScript Alert\nError! Please enter a valid password.");
// 3.
alert("Welcome to JS Land...\nHappy Coding!");
// 4.
alert("Welcome to JS Land...");
alert("Happy Coding!");
// 5.
alert("Hello...I can run JS through my web browser's console");
// 6.
alert("All above what i am doing fulfils task # 6");
// 7.a already done in 6
// 7.b


// Chapter 2 VARIABLES FOR STRINGS
// 1.
var username = "";
// 2.
var myName = "Muhammad Atique";
// 3.
var message = "Hello World";
alert(message);
// 4.
var name = "Muhammad Atique";
alert(name);
var age = "15 Years old";
alert(age);
var studentOf = "Certified Mobile Application Development";
alert(studentOf);
// 5.
var food = "PIZZA\nPIZZ\nPIZ\nPI\nP";
alert(food);
// 6.
var email = "example@example.com";
alert("My email address is " + email);
// 7.
var book = "A smarter way to learn JavaScript";
alert(book);
// 8.in index.html
// 9.
var string = "▬▬▬▬▬▬▬▬▬ஜ ۩۞۩ ஜ▬▬▬▬▬▬▬▬▬";
alert(string);


// CHAPTER 3 VARIABLES FOR NUMBERS
// 1.
var age = "30";
alert("I am " + age + " years old");
// 2.
var noOfTimesVisited = 40;
alert("You have visited this site " + noOfTimesVisited + " times");
// 3.
var birthYear = 1990;
document.write("My birth year is " + birthYear);
document.write("<br>Data type of my declared variable is number");
// 4.
var clothingStore = "XYZ Clothing Store";
var visitorName = "Atique";
var productTitle = "T-shirt";
var Quantity = 5;
document.write("<br>" + visitorName + " ordered " + Quantity + " " + productTitle + "(s)" + " on " + clothingStore);


// CHAPTER 4 VARIABLE NAMES: LEGAL & ILLEGAL
// 1.
var name = "atique",
    age = 30,
    profession = "Textile";
alert(profession);
// 2.
// legal
var myName = "";
var my_name = "";
var my$name = "";
var my0name = "";
var MYNAME = "";
// illegal
// var my name = "";
// var 1 myname = "";
// var break = "";
// var my @name = "";
// var 1stPrize = "";
// 3.
document.write("<br>a) Rules for naming JS variables<br>b) Variable names can only contain letters, numbers, underscore and dollar sign. For example $my_1stVariable<br>c) Variables must begin with a letter, $ or _. For example $name, _name or name<br>d) Variable names are case sensitive <br>e) Variable names should not be JS Keywords");




















for (var a = 1; a <= 100; a = a + 10) {
    for (var b = a; b <= a + 9; b++) {
        document.write(b + " ");
    }
    document.write("<br>");
}