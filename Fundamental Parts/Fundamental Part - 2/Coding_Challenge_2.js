// ------------------------ Coding Challenge #2 ------------------------
"use strict";
function calcTip(bill){
    const tip = bill>=50 && bill<=300 ? bill*.15 : bill*.2;
    return tip;
}

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]),calcTip(bills[1]),calcTip(bills[2])];
const total =[bills[0]+tips[0],bills[1]+tips[1],bills[2]+tips[2]]
console.log(`bill : ${bills} \ntips : ${tips} \ntotal : ${total}`);