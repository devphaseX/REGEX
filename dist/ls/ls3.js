<<<<<<< HEAD
let ip = 'a+42//5-c pressure*3+42/5-14256';
let pat1 = /42\/{1,2}5/g;
console.log(ip.replace(pat1, '8'));
let items = [
    'handed',
    'hand',
    'hands',
    'handled',
    'handle',
    'handy',
];
console.log(items.filter((item) => /^hand(.|le)?$/.test(item)));
let eqn1 = 'a+42//5-c';
let eqn2 = 'pressure*3+42/5-14256';
let eqn3 = 'r*42-5/3+42///5-42/53+a';
const result = [eqn1, eqn2, eqn3].map((word) => {
    return word.split(pat1);
});
console.log(result);
let s1 = 'remove the special meaning of such co';
let s2 = 'characters while constructing';
const pat2 = /i.*/;
console.log(s1.replace(pat2, ''));
console.log(s2.replace(pat2, ''));
let str1 = 'a+b(addition)';
let str2 = 'a/b(division) + c%d(#modulo)';
let str3 = 'Hi there(greeting). Nice day(a(b)';
const remove_parenthesis = /\(.*?\)/g;
[str1, str2, str3].forEach((word) => {
    console.log(word.replace(remove_parenthesis, ''));
});
let words = 'plink incoming tint winter in caution sentient';
const w2 = /i(on|n(k|g|co|(t(er|))|))/g;
console.log(words.replaceAll(w2, 'X'));
// ? is same as ==> {0,1}
// * is same as ==> {0,}
// + is same as ==> {1,}
{
    let s1 = 'this is a Test';
    let s2 = 'always test your regexp for corner\nc';
    let s3 = 'a TEST of skill tests?';
    let pat3 = /(test).*([^t][^e][^s][^t])?.*$/i;
    console.log(s1.replace(pat3, ''));
    console.log(s2.replace(pat3, ''));
    console.log(s3.replace(pat3, ''));
}
{
    let words = [
        'sequoia',
        'subtle',
        'exhibit',
        'site',
        'sets',
    ];
    console.log(words.filter((word) => /\w{6,}/.test(word)));
    console.log(words.filter((word) => /^s(.*?e.*?t|.*?t.*e)/.test(word)));
}
=======
"use strict";
{
    let s1 = 'go there ::  this :: that';
    let s2 = 'a::b :: c::d e::f :: 4::5';
    let s3 = '42:: hi::bye::see :: carefully';
    const pat = /\s+::\s+(.+)/;
    console.log(s1.split(pat, 2));
    console.log(s2.split(pat, 2));
    console.log(s3.split(pat, 2));
}
{
    let s1 = 'this is a Test';
    let s2 = 'always test your regexp for corner\ncase test';
    let s3 = 'a TEST of skill me';
    let pat = /test.+(?!.*?test)/is;
    console.log(s3.replace(pat, ''));
}
/*
  Replace 42//5 or 42/5 with 8 for the given input.
*/
{
    let ip = 'a+42//5-c pressure*3+42/5-14256';
    console.log(ip.replace(/42\/{1,2}5/g, '8'));
}
/*
  For the array items, ﬁlter all elements starting with
  hand and ending with at most one more character or le.
*/
{
    let items = ['handed', 'hand', 'handled', 'handy', 'hands', 'handle'];
    console.log(items.filter((item) => /hand(le|.)/.test(item)));
}
{
    let eqn1 = 'a+42//5-c';
    let eqn2 = 'pressure*3+42/5-14256';
    let eqn3 = 'r*42-5/3+42///5-42/53+a';
    const pat1 = /42\/{1,2}5/;
    console.log(eqn1.split(pat1));
    console.log(eqn2.split(pat1));
    console.log(eqn3.split(pat1));
}
/*
  For the given strings, construct a regexp to get output
  as shown.
*/
{
    let str1 = 'a+b(addition)';
    let str2 = 'a/b(division) + c%d(#modulo)';
    let str3 = 'Hi there(greeting). Nice day(a(b)';
    const remove_parenthesis = /\(.+?\)/g;
    console.log(str1.replace(remove_parenthesis, ''));
    console.log(str2.replace(remove_parenthesis, ''));
    console.log(str3.replace(remove_parenthesis, ''));
}
/*
Delete from the string start if it is at beginning of a
line up to the next occurrence of the string end at end of a
line. Match these keywords irrespective of case.
*/
>>>>>>> df4aeca (treated alternation,quantifiers)
{
    let para = `good start
start working on that
project you always wanted
to, do not let it end
hi there
start and end the end
42
Start and try to
finish the End
bye`;
<<<<<<< HEAD
    const pat = /^start.*?end$/gims;
    console.log(para.replaceAll(pat, ''));
}
{
    let ip = 'a<apple> 1<> b<bye> 2<> c<cat>';
    console.log(ip.replace(/<[^>]+?>/g, ''));
}
{
    let s1 = 'go there :: this :: that';
    let s2 = 'a::b :: c::d e::f :: 4::5';
    let s3 = '42:: hi::bye::see :: carefully';
    const pat4 = /\s{1,}::\S{1,}/g;
    console.log(s1.split(pat4));
    console.log(s1.split(pat4));
}
export {};
=======
    const pat3 = /^start.+?end$/gims;
    console.log(para.replace(pat3, ''));
}
/*
Can you reason out why this code results in the output
shown? The aim was to remove all <characters> patterns
but not the <> ones. The expected result was 'a 1<> b 2<>
c'.

wrong pattern - ip.replace(/<.+?>/g, '') => "a 1 2"
*/
{
    let ip = 'a<apple> 1<> b<bye> 2<> c<cat>';
    //correct pattern
    console.log(ip.replace(/<\b.+?\b>/g, ''));
}
>>>>>>> df4aeca (treated alternation,quantifiers)
