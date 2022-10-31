// // how to create a regExp

// const re = /abc/g   ; // using regular expression literal

// //exec return an array if the re is found else null

// // const result = re.exec("AbcAbc");

// // console.log(result);

// //test() return true or false

// // const result = re.test("Abcabc");
// // console.log(result);

// //match() return results array or null

// // const str = "abc abc Abc";

// // // const result = str.matchAll(re);
// // const result = str.replace(re,"hi");
// // console.log(result);
// // // for(const res of result)
// // // {
// // //     console.log(res.index);
// // // }


let re ;
re = /hello/;
re = /hello/i; //it make the regex in-sensitive

re = /^hello/i; //in this the string must start with that regexp in this (hello)

re = /rld$/; // in this the regexp must match the end of the string 

re = /h.llo/i; // it searches that part of the string where there is h(any other char)llo 
//example - hello , h.llo , h*llo but not hllo . It checks only one char

re = /he*llo/i; // same as above but it search 0 or more character in this hllo is valid
//in this example the string will search for the value where re contains zero or more no of characters that is in back of "*"
// in this it will search that part of string which contains zero or more "e" no of characters

re = /ha?e?llo/i; // it searches for that char in string str where a can be present or not
// it will search for that char where there can be (a,e) in optional

re = /h[ea]llo/; // must contain a or e 

re = /h[^ae]llo/; // must not contain a or e but show contain a char in that place

re = /[a-z]llo/; // must start with a lowercase letter
re = /[A-Za-z]llo/; // must start with any letter

r = /Hel{2}o/i; //the char below{m} must come in m amount of times in string 

// if {m,n} then that char can occur in the range of [m,n] if {m,} then there should be at least m occurence of that character

//string to match
const str = "helo";

const result = re.exec(str);
console.log(result);

function reTest(re, str)
{
    if(re.test(str))
    {
        console.log(`${str} matches ${re.source}`);
    }
    else
    {
        console.log(`${str} not  matches ${re.source}`);
    }
}

reTest(re,str);