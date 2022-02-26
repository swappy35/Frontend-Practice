"use strict";

var key_value = {a : 1, b : 2, c : 3, d : 4};

// console.log(key_value);
for(var item in key_value)
{
    if(item == 'a')
    {
        console.log(item+ " : " +key_value[item]);
    }
    
}
var item = 2;
var times = 1;
while (times <= 10) 
{
    console.log(item + " X " + times + " = "+item*times);
    times++; 
}