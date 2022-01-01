"use strict";
let sentence = 'This is a sample string';
//check if 'sentence' contains the given string
console.log(sentence.includes('is'));
console.log(sentence.includes('z'));
//check if 'sentence' matches the pattern as describe
console.log(/is/.test(sentence));
console.log(/z/.test(sentence));
let report = 'string theory';
if (/ring/.test(report)) {
    console.log('mission success');
}
if (!/fire/.test(report)) {
    console.log('mission failed');
}
let words = ['cat', 'attempt', 'tattle'];
//get all elements that contain 'tt'
console.log(words.filter((w) => /tt/.test(w)));
//check if all the menets coontain 'at'
console.log(words.every((wd) => /at/.test(wd)));
//check if any element contains 'stat'
console.log(words.some((wd) => /stat/.test(wd)));
console.log(/cat/.test('Cat'));
console.log(/cat/i.test('Cat'));
const pet = /dog/;
console.log(pet.test('They bought a dog'));
console.log(pet.test('A cat crossed their path'));
let purchases = `items qty
apple 24
mango 50
guava 42
onion 31
water 10`;
console.log(purchases.replaceAll(/^.*?2.*$\n?/gm, ''));
let items = ['goal', 'new', 'user', 'sit', 'eat', 'dinner'];
console.log(items.filter((item) => {
    return /[aw]/.test(item);
}));
console.log(items.filter((item) => {
    return /(?=.*e)(?=.*?n)/.test(item);
}));
