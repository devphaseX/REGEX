"use strict";
const log = console.log.bind(console);
const startWithCat = /^cat/;
log(startWithCat.test('cater'));
log(startWithCat.test('concatenation'));
const startWithHi = /^hi/;
console.log(startWithHi.test('hi hello\ntop spot'));
console.log(/are$/.test('spare'));
console.log(/are$/.test('nearest'));
const matchTextFront = /^/;
const prependString = (actual, prefix) => actual.replace(matchTextFront, prefix);
const appendString = (actual, suffix) => actual.replace(/$/, suffix);
console.log(prependString('live', 're'));
console.log(prependString('send', 're'));
console.log(appendString('cat', 'er'));
console.log(appendString('hack', 'er'));
console.log(/^top/m.test('hi hello\ntop spot'));
//Assignment
console.log('--------------------------Assignment-------------------------------');
let str1 = 'is; (this)';
let str2 = "The food isn't good";
let str3 = 'the2 cats';
let str4 = 'switch on the light';
const pat = /\b(is|the)\b/;
console.log(pat.test(str1));
console.log(pat.test(str2));
console.log(pat.test(str3));
console.log(pat.test(str4));
let ip = 'bred red spread credible red;';
console.log(ip.replaceAll(/\bred\b/g, 'brown'));
{
    let items = ['hi42bye', 'nice1423', 'bad42', 'cool_42a'];
    console.log(items.filter((item) => /\B42\B/.test(item)));
}
{
    let items = [
        'lovely',
        '1\ndentist',
        '2 lonely',
        'dent',
        'fly\nfar',
    ];
    console.log(items.filter((item) => /^den|ly$/.test(item)));
    console.log(items.filter((item) => /\ndentist|ly$/.test(item)));
}
let para = `ball fall wall tall^
mall call ball pall
wall mall ball fall
mallet wallet malls`;
console.log(para.replaceAll(/^mall\b/gm, '1234'));
