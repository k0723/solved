var fs = require('fs'); 
var input = fs.readFileSync(__dirname + '/input.txt').toString().split(' '); 
var a = (input[0]); 
var b = (input[1]);
var c = parseInt(input[2]);
var e = (input[3]);
var f = (input[4]);
var g = parseInt(input[5]);
let mon = 0;
let mon_all_day = 0;
let year = g;
let daily = c;
switch(b)
{
    case "Jan":
    mon = 1;
    mon_all_day = 31;
    break;

    case "Feb" :
    mon = 2 
    if (year/4 == 0)
    {
        mon_all_day = 29;
        break;
    }
    mon_all_day = 28;
    break;

    case "Mar" :
    mon = 3 
    mon_all_day = 31;
    break;

    case "Apr" :
    mon = 4 
    mon_all_day = 30;
    break;

    case "May" :
    mon = 5 
    mon_all_day = 31;
    break;

    case "Jun" :
    mon = 6 
    mon_all_day = 30;
    break;

    case "Jul" :
    mon = 7 
    mon_all_day = 31;
    break;

    case "Aug" :
    mon = 8 
    mon_all_day = 31;
    break;

    case "Sep" :
    mon = 9 
    mon_all_day = 30;
    break;

    case "Oct" :
    mon = 10 
    mon_all_day = 31;
    break;

    case "Nov" :
    mon = 11
    mon_all_day = 30;
    break;

    case "Dec" :
    mon = 12 
    mon_all_day = 31;
    break;
}

let date_cal = e;


let arr = date_cal.split(":");

let hour = parseInt(arr[1]);

if(hour+9 >= 12)
{
    daily += 1;
    if(mon_all_day <= daily)
    {
        mon += 1;
        if(mon >= 12)
        {
            year += 1;
            mon = 12-mon;
        }
    }
}



console.log(year+"-"+mon+"-"+daily);