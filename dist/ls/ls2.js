import { escapeRegExp, unionRegExp } from './shared.js';
console.log(RegExp(escapeRegExp('(a+b)')));
let eqn = 'f*(a^b) - 3*(a^b)';
const userDefinedPatternString = '(a^b)';
const userPattern = new RegExp(escapeRegExp(userDefinedPatternString), 'g');
console.log([...eqn.matchAll(userPattern)]);
console.log(eqn.replaceAll(userPattern, 'c'));
console.log(eqn.replace(new RegExp(escapeRegExp(userDefinedPatternString) + '$'), 'c'));
let w1 = ['c^t', 'dog$', 'f|x'];
const p1 = new RegExp(unionRegExp(w1), 'g');
console.log('c^t dog$ bee parrot f|x'.replaceAll(p1, 'mammal'));
let str1 = '(9-2)*5+qty/3';
let str2 = '(qty+4)/2-(9-2)*5+pq/4';
const pat1 = new RegExp(escapeRegExp('(9-2)*5'), 'g');
console.log(str1.replaceAll(pat1, '35'));
console.log(str2.replaceAll(pat1, '35'));
let s1 = '2.3/(4)\\|6 foo 5.3-(4)\\|';
let s2 = '(4)\\|42 - (4)\\|3';
let s3 = 'two - (4)\\|\n';
const pat2 = new RegExp(`^${unionRegExp(Array(2).fill('(4)\\|'))}$`);
console.log(s1.replace(pat2, '2'));
console.log(s2.replace(pat2, '2'));
console.log(s3.replace(pat2, '2'));
let items = ['a.b', '3+n', 'x\\y\\z', 'qty||price', '{n}'];
const pat3 = new RegExp(unionRegExp(items.slice().sort((a, b) => b.length - a.length)), 'g');
['0a.bcd', 'E{n}AMPLE', '43+n2 ax\\y\\ze'].forEach((word) => {
    console.log(word.replace(pat3, 'X'));
});
let ip = '123\b456';
function descendArranger(transformer) {
    return function sorter(first, second) {
        return transformer(first) < transformer(second)
            ? 1
            : -1;
    };
}
console.log(ip.replace(/[\b]/, ' '));
{
    let ip = '3-(a^b)+2*(a^b)-(a/b)+3';
    let eqns = ['(a^b)', '(a/b)', '(a^b)+2'];
    const pat2 = new RegExp(unionRegExp(eqns.sort(descendArranger((a) => {
        return a.length;
    }))), 'g');
    console.log(ip.replace(pat2, 'X'));
}
