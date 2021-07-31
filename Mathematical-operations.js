// simple dim baji recipe khoros hisap

var ammuDise = 70;
var piyaj1KG = 60;
var egg1ti = 7;

// amader to 1kg piyaj lagbe na 250g holei hobe tai age 250g piyag er dam ta ber kore nei

var piyaj250G = piyaj1KG / 4; // ekhane vag korsi
console.log("250g piyaj er dam : " + piyaj250G);

// ekhon 1ta dim diye to khaoya hosse na, amader 3ta dim lage tahle age 3 ta dimer dam ber kori

var egg3ti = egg1ti * 3; //ekhane gun korsi
console.log("3ta dim er dam : " + egg3ti);

// assa ekhon tahole total koto khoros hoise hisab koira feli

var totalKhoros = egg3ti + piyaj250G; // ekhane jog korsi
console.log("Total khoros hoise : " + totalKhoros);

// assa ekhon tahole amar kase r koi taka ase seta hisab kore feli

var amarKaseAse = ammuDise - totalKhoros; // ekhane viyog korsi
console.log("amar kase aro ase : " + amarKaseAse);

// assa ekhon jodi ami baki taka gula diya 7taka damer apple kini tahole r amar kase koto taka thakbe

var appleKinarPorThakbe = amarKaseAse % 7; //ekhane vagses dekhar program korsi
console.log("Apple khaoyar dorkar nai, Karon apple kinar por amar kase ar matro " + appleKinarPorThakbe + "taka thakbe ");