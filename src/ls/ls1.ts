<<<<<<< HEAD
const log = console.log.bind(console);
const startWithCat = /^cat/;

log(startWithCat.test('cater'));
log(startWithCat.test('concatenation'));

const startWithHi = /^hi/;
console.log(startWithHi.test('hi hello\ntop spot'));

console.log(/are$/.test('spare'));
console.log(/are$/.test('nearest'));

const matchTextFront = /^/;
const prependString = (actual: string, prefix: string) =>
  actual.replace(matchTextFront, prefix);

const appendString = (actual: string, suffix: string) =>
  actual.replace(/$/, suffix);
console.log(prependString('live', 're'));
console.log(prependString('send', 're'));

console.log(appendString('cat', 'er'));
console.log(appendString('hack', 'er'));

console.log(/^top/m.test('hi hello\ntop spot'));

//Assignment
console.log(
  '--------------------------Assignment-------------------------------'
);
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
  console.log(
    items.filter((item) => /^den|ly$/.test(item))
  );
  console.log(
    items.filter((item) => /\ndentist|ly$/.test(item))
  );
}

let para = `ball fall wall tall^
mall call ball pall
wall mall ball fall
mallet wallet malls`;

console.log(para.replaceAll(/^mall\b/gm, '1234'));
=======
/* 
    This section introduced String method that allows for portion matching.
 */

let sentence = "This is a sample string";

//Check if 'sentence' contains the given string
console.log(sentence.includes("is"));
console.log(sentence.includes("z"));

//Using regular expression
console.log(/is/.test(sentence));

console.log(/z/.test(sentence));

let report = "string thoery";
if (/ring/.test(report)) {
  console.log("I found this pattern");
}

if (!/fire/.test(report)) {
  console.log('I wasn"t able to find the given pattern');
}

let words = ["cat", "attempt", "tattle"];

//get all elements that contain 'tt'

console.log(words.filter((w) => /tt/.test(w)));

//check if all teh elements contain 'at'
console.log(words.every((w) => /at/.test(w)));

//check if any element contains 'stat'
console.log(words.some((w) => /stat/.test(w)));

console.log(/cat/.test("CaT"));
console.log(/cat/i.test("CaT"));

console.log(
  ["Cat", "cot", "CATER", "SCat", "ScUtTLe"].filter((w) => /cat/i.test(w))
);

//Regex object can be assign to a variable
//This helps improve clarity, and allow for code reuse.
const pet = /dog/;

console.log(pet.test("They bought a dog"));
console.log(pet.test("A cat crossed their path"));

const patUsingRegObj = new RegExp("dog");
console.log(patUsingRegObj);

//the regex object allows for flag passage, by passing a second argument

console.log(new RegExp("dog", "i"));

//The constructor way of defining RegExp object allows for dynamic construction
//of pattern

let greeting = "hi";

let greetPat = new RegExp(`${greeting} there`);
console.log(greetPat);

//change only the first match
console.log("1,2,3,4".replace(/,/, "-"));

//change all the matches by adding 'g' flag
console.log("1,2,3,4".replace(/,/g, "-"));

// multiple flags can be combined
console.log("cArT PART tart mArt".replace(/art/gi, "2"));
>>>>>>> df4aeca (treated alternation,quantifiers)
