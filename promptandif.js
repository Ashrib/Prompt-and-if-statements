            //Prompt and if statements
//1...
var userName=prompt("Please enter your name");
alert("Hi, "+userName);
//2...
var anyNumber=prompt("Enter a number to print its multiplication table");
var multi_1=anyNumber+" "+"x 1 = "+anyNumber*1;
var multi_2=anyNumber+" "+"x 1 = "+anyNumber*2;
var multi_3=anyNumber+" "+"x 1 = "+anyNumber*3;
var multi_4=anyNumber+" "+"x 1 = "+anyNumber*4;
var multi_5=anyNumber+" "+"x 1 = "+anyNumber*5;
var multi_6=anyNumber+" "+"x 1 = "+anyNumber*6;
var multi_7=anyNumber+" "+"x 1 = "+anyNumber*7;
var multi_8=anyNumber+" "+"x 1 = "+anyNumber*8;
var multi_9=anyNumber+" "+"x 1 = "+anyNumber*9;
var multi_10=anyNumber+" "+"x 1 = "+anyNumber*10;
document.write("Multiplication table of "+anyNumber);document.write("<br>");
document.write(multi_1);document.write("<br>");
document.write(multi_2);document.write("<br>");
document.write(multi_3);document.write("<br>");
document.write(multi_4);document.write("<br>");
document.write(multi_5);document.write("<br>");
document.write(multi_6);document.write("<br>");
document.write(multi_7);document.write("<br>");
document.write(multi_8);document.write("<br>");
document.write(multi_9);document.write("<br>");
document.write(multi_10);document.write("<br>");
document.write("<br>");
//3...
var cityName=prompt("Please enter your city");
if(cityName==="karachi"){
    alert("Welcome to city of lights.");
}
else{
    alert("Welcome to "+cityName);
};
//4...
var gender= prompt("please enter your gender");
if (gender==="male"){
    alert("Good Morning Sir.");
};
if (gender==="female"){
    alert("Good Morning Ma'am.");
};
//5...
var color=prompt("Enter color of road traffic signal");
if(color==="red"){
    alert("vehicles must stop");
};
if(color==="yellow"){
    alert("vehicles should get ready to move")
};
if(color==="green"){
    alert("vehicles can move now")
};
//6...
var currentAge=prompt("enter your current age");
var maxAge=prompt("enter max-age");
if(currentAge<=maxAge){
    alert("You are Welcome")
}
else{
    alert("sorry")
};
//7...
var fuel=prompt("Please input remaining fuel in car (in litres)");
if(fuel<"0.25litres"){
    alert("Please refill the fuel in your car")
};
//9...
var math=parseInt(prompt("Enter your Maths marks"));
var english=parseInt(prompt("enter your English marks"));
var science=parseInt(prompt("enter your Science marks"));
var obtainedMarks= math+english+science;
var totalMarks=300;
var percentage=(obtainedMarks*100)/300;
document.write("Obtained Marks: "+obtainedMarks);
document.write("<br>");
document.write("Total Marks: "+totalMarks);
document.write("<br>");
document.write("Percentage: "+percentage+"%");
document.write("<br>");
if(percentage>=80){
    document.write("Grade: A-1");
    document.write("<br>");
    document.write("Remarks: Excellent");
}
else if(percentage>=70){
    document.write("Grade: A");
    document.write("<br>");
    document.write("Remarks: Good");
}
else if(percentage>=60){
    document.write("Grade: B");
    document.write("<br>");
    document.write("Remarks: You need to improve");
}
else if(percentage<60){
    document.write("Grade: fail");
    document.write("<br>");
    document.write("Remarks: Sorry");
};
document.write("<br>");
//10..
var name1item=prompt("enter name of item 1: ");
var name2item=prompt("enter name of item 2: ");
var quantity1item=prompt("Quantity of item 1: ");
var quantity2item=prompt("Quantity of item 2: ");
var price1item=prompt("enter price of item 1: ");
var price2item=prompt("enter price of item 2: ");
var shippingcharge=250;
var item1cost=price1item*quantity1item;
var item2cost=price2item*quantity2item;
var totalCost=item1cost+item2cost+shippingcharge;
document.write("Price of "+name1item+" is " +price1item);document.write("<br>");
document.write("Quantity of "+name1item+" is "+quantity1item);document.write("<br>");
document.write("Price of "+name2item+" is " +price2item);document.write("<br>");
document.write("Quantity of "+name2item+" is "+quantity2item);document.write("<br>");
document.write("Shipping charges "+shippingcharge);
document.write("<br>");
document.write("Total cost of your order is "+totalCost);
document.write("<br>");
if(totalCost>2000){
    document.write("Discounted price is "+ (totalCost-(totalCost/10)))
};
//11...
var anyNumber=prompt("Guess the secret number (ranging from 1 to 10)");
var theNumber=3;
if(anyNumber==theNumber){
    alert("Bingo! Correct answer")
}
else if(anyNumber==++theNumber || anyNumber==--theNumber){
    alert("Close enough to the correct answer")
}
else{
    alert("Wrong! Try again. ")
};
//12...
var num=prompt("check whether the number is divisible by 3");
var check=num%3;
if(check===0){
    alert("Yes, the number is divisible by 3")
};
if(check!==0){
    alert("Sorry, this number is not divisible by 3")
};
//13...
var teamA=prompt("Enter team A name");
var teamB=prompt("Enter team B name");
var scoreA=prompt("Enter score of team A");
var scoreB=prompt("Enter score of team B");
if(scoreA>scoreB){
    alert(teamA+" "+"have won the match.")
}
else if(scoreA<scoreB){
    alert(teamB+" "+"have won the match.")
}
else if(scoreA==scoreB){
    alert("This match is tie")
};
//15...
var inputNum= prompt("Enter any number to check whether it is an even number or an odd number");
var checkEven=inputNum%2;
if(checkEven===0){
    alert(inputNum+" "+"is an even number.")
}
else if(checkEven!==0){
    alert(inputNum+" "+"is an odd number.")
};
//16...
var temperature= prompt("What's the temperature in Karachi, right now?");
if(temperature>=40){
    alert("Wow! It is too hot outside.");
}
else if(temperature>=30){
    alert("The Weather today is Normal.");
}
else if (temperature>=20){
    alert("Today's Weather is cool.");
}
else if (temperature>=10){
    alert("OMG! Today's weather is so Cool.");
};
//17...
var calculator=prompt("Hello! I'm a Calculator.\nDo you want to use me? (yes/no)");
var num1=parseInt(prompt("Enter First Number"));
var num2=parseInt(prompt("Enter Second Number"));
var operation= prompt("Select the Operation (+, -, /, *, %)");
var plus=num1+num2, subtract=num1-num2, multiply=num1*num2, divide=num1/num2, mod=num1%num2;
if(calculator==="yes"){
    if(operation==="+"){
        alert("The result is "+plus)
    }
    else if(operation==="-"){
        alert("The result is "+subtract)
    }
    else if(operation==="/"){
        alert("The result is "+divide)
    }
    else if(operation==="*"){
        alert("The result is "+multiply)
    }
    else if(operation==="%"){
        alert("The result is "+mod)
    }
}
else if (calculator==="no"){
    alert("Ok :)")
};
//18...
var day=prompt("Enter day name");
if(day==="monday" || day==="tuesday" || day==="wednesday" || day==="thrusday" || day==="friday"){
    alert("It's a week day");
}
else if(day==="saturday"){
    alert("It's weekend");
}
else if(day==="sunday"){
    alert("Yay! It's a holiday");
}
//19...
var userScore=prompt("Enter your score");
if(userScore>50){
    alert("Your are passed");
}
else{
    alert("Try again")
};
//20...
var number1=parseInt(prompt("To check which number is greater. \nEnter the first number"));
var number2=parseInt(prompt("Enter the second number"));
if(number1===number2){
    alert("Both numbers are equal.")
}
else if(number1>number2){
    alert("The greater number of "+number1+" and "+number2+" is"+number1)
}
else if(number1<number2){
    alert("The greater number of "+number1+" and "+number2+" is "+number2)
};
//23...
var nmbr=parseInt(prompt("Input any number please."));
var noun=prompt("Input any noun please.");
if (nmbr===1){
    alert(nmbr+" "+noun);
}
else if(nmbr>1){
    alert(nmbr+" "+noun+"s");
};