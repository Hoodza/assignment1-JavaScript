/*Q1:
console.log(prompt("enter a number"));*/

/* Q2:
var num = Number(prompt("enter a number"));

if(num % 3 ==0 && num % 4==0)
{
    console.log("Yes");
}
else 
{
    console.log("No");
}*/

/* Q3:
var num1=Number(prompt("enter integer number1"));
var num2=Number(prompt("enter integer number2"));

if(num1 > num2)
{
    console.log(num1);
}
else
{
    console.log(num2);
}*/

/* Q4:
var num =Number(prompt("enter a number"));

if(num > 0)
{
    console.log("positive");
}
else if (num < 0)
{
    console.log("negative");
}
else
{
    console.log("zero");
}*/

/* Q5:
var num1=Number(prompt("enter a number1"));
var num2=Number(prompt("enter a number2"));
var num3=Number(prompt("enter a number3"));

if(num1 > num2 && num1 > num3 )
{
    console.log("max element = "+ num1);
}
else if (num2 > num1 && num2 > num3)
{
    console.log("max element = "+ num2);
}
else
{
    console.log("max element = "+ num3);
}

if (num1 < num2 && num1 < num3 )
{
    console.log("min element = "+num1);
}
else if (num2 < num1 && num2 < num3)
{
    console.log("min element = "+num2);
}
else 
{
    console.log("min element = "+num3);
}*/

/* Q6:
var num= Number(prompt("enter a number"));

if(num % 2 == 0)
{
    console.log("even");
}
else
{
    console.log("odd");
}*/

/* Q7: (a,e,I,o,u)
var str= prompt("enter a character");

if(str =='a' || str =='A'|| str =='e' || str =='E' || str =='I' || str =='i' || str =='o' || str =='O' || str =='u' || str =='U')
{
    console.log("vowel");
}
else
{
    console.log("Consonant");
}*/

/* Q8:
var num =Number(prompt("enter a number"));
var str="";

for(var i = 1; i <= num; i++)
{
    if(i==num)
    {
        str+=i;
        break;
    }

    str += i+", ";
}
console.log(str);*/

/* Q9:
var num=Number(prompt("enter a number"));
var str="";

for(var i = 1;i<=12;i++)
{
    str+=(i*num +' ')
}
console.log(str);*/

/* Q10:
var num=Number(prompt("enter a number"));
var str="";

for(var i =1; i <= num; i++)
{
    if(i % 2 == 0)
    {
        str+=(i+" ");
    }
}
console.log(str);*/

/* Q11:
var num1 = Number(prompt("enter integer1"));
var num2 = Number(prompt("enter integer2"));
var result = 1;

if (num2 == 0)
{
    console.log(1);
} 
else if(num2 > 0)
{
    for(var i = 1; i <= num2; i++)
    {
        result *= num1;
    }
    console.log(result);
}
else
{
    num2 *= -1;
    for(var j = 1; j  <= num2; j++)
    {
        result *= (1/num1);
    }
    console.log(result);
}*/

/* Q12:
var subj1 = Number(prompt("enter marks of subject1"));
var subj2 = Number(prompt("enter marks of subject2"));
var subj3 = Number(prompt("enter marks of subject3"));
var subj4 = Number(prompt("enter marks of subject4"));
var subj5 = Number(prompt("enter marks of subject5"));

console.log("Total marks = " + (subj1 + subj2 + subj3 + subj4 + subj5));
console.log("Average Marks = " + ((subj1 + subj2 + subj3 + subj4 + subj5)/5));
console.log("Average Marks = " + (((subj1 + subj2 + subj3 + subj4 + subj5)/500) * 100));*/

/* Q13:
var month = Number(prompt("enter month number"));

if(month == 1)
{
    console.log("Days in Month: " + 31);
}
else if(month == 2)
{
    console.log("Days in Month: " + 28);
}
else if(month == 3)
{
    console.log("Days in Month: " + 31);
}
else if(month == 4)
{
    console.log("Days in Month: " + 30);
}
else if(month == 5)
{
    console.log("Days in Month: " + 31);
}
else if(month == 6)
{
    console.log("Days in Month: " + 30);
}
else if(month == 7)
{
    console.log("Days in Month: " + 31);
}
else if(month == 8)
{
    console.log("Days in Month: " + 31);
}
else if(month == 9)
{
    console.log("Days in Month: " + 30);
}
else if(month == 10)
{
    console.log("Days in Month: " + 31);
}
else if(month == 11)
{
    console.log("Days in Month: " + 30);
}
else if(month == 12)
{
    console.log("Days in Month: " + 31);
}*/

/* Q13:
var Physics = Number(prompt("enter the Physics marks"));
var Chemistry = Number(prompt("enter the Chemistry marks"));
var Biology = Number(prompt("enter the Biology marks"));
var Mathematics = Number(prompt("enter the Mathematics marks"));
var Computer = Number(prompt("enter the Computer marks"));

var percentage = (((Physics + Chemistry + Biology + Mathematics + Computer)/500) * 100);

if(percentage <= 100 && percentage >= 90)
{
    console.log("Grad A");
}
else if(percentage <= 89 && percentage >= 80)
{
    console.log("Grad B");
}
else if(percentage <= 79 && percentage >= 70)
{
    console.log("Grad C");
}
else if(percentage <= 69 && percentage >= 60)
{
    console.log("Grad D");
}
else if(percentage <= 59 && percentage >= 40)
{
    console.log("Grad E");
}
else
{
    console.log("Grad F");
}*/

/* Q14:
var month = Number(prompt("enter month number"));

switch(month)
{
    case 1 :
        console.log(31);
        break;
    case 2 :
        console.log(28);
        break;
    case 3 :
        console.log(31);
        break;
    case 4 :
        console.log(30);
        break;
    case 5 :
        console.log(31);
        break;
    case 6 :
        console.log(30);
        break;
    case 7 :
        console.log(31);
        break;
    case 8 :
        console.log(31);
        break;
    case 9 :
        console.log(30);
        break;
    case 10 :
        console.log(31);
        break;
    case 11 :
        console.log(30);
        break;
    case 12 :
        console.log(31);
        break;
}*/

/* Q15:
var str=prompt("enter a character");

switch(str)
{
    case 'a':
        console.log("vowel");
        break;
    case 'A':
        console.log("vowel");
        break;
    case 'o':
        console.log("vowel");
        break;
    case 'O':
        console.log("vowel");
        break;
    case 'i':
        console.log("vowel");
        break;
    case 'I':
        console.log("vowel");
        break;
    case 'e':
        console.log("vowel");
        break;
    case 'E':
        console.log("vowel");
        break;
    case 'u':
        console.log("vowel");
        break;
    case 'U':
        console.log("vowel");
        break;
    default:
        console.log("consonant");
        break;
}*/

// Q16:
/*var num1 =Number(prompt("enter number1"));
var num2 =Number(prompt("enter number2"));*/

// way number1 

/*switch(num1 > num2)
{
    case true:
        console.log(num1);
        break;
    case false:
        console.log(num2);
        break;
}*/

// way number2 

/*switch(true)
{
    case num1 > num2:
        console.log(num1);
        break;
    case num2 > num1:
        console.log(num2);
        break;
    default:
        console.log("Equal");
        break;
}*/

/* Q17:
var num = Number(prompt("enter a number"));

switch(num % 2 == 0)
{
    case true:
        console.log("even");
        break;
    case false:
        console.log("odd");
        break;
}*/

/* Q18:
var num = Number(prompt("enter a number"));

switch(true)
{
    case num > 0:
        console.log("positive");
        break;
    case num < 0:
        console.log("negative");
        break;
    default:
        console.log("zero");
        break;
}*/

/* Q19:
var num1 = Number(prompt("enter number1"));
var operator = prompt("enter an operator");
var num2 = Number(prompt("enter number2"));

switch(operator)
{
    case '+':
        console.log(num1 + num2);
        break;
    case '-':
        console.log(num1 - num2);
        break;
    case '*':
        console.log(num1 * num2);
        break;
    case '/':
        console.log(num1 / num2);
        break;
    case '%':
        console.log(num1 % num2);
        break;
}*/









