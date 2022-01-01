let str1 = 'What is the biggest fruit you have';
let str2 = 'Your mission is to read and practice';
const pat1 = /is.*t/;
console.log(str1.match(pat1));
let s4 = 'who was there to see?';
const pat = /is|the|was|to/g;
{
    let s1 = 'match after the last newline character';
    let s2 = 'and then you want to test';
    let s3 = 'this is good bye then';
    console.log(Array.from(s1.matchAll(pat)));
    console.log(Array.from(s2.matchAll(pat)));
    console.log(Array.from(s3.matchAll(pat)));
    console.log(Array.from(s4.matchAll(pat)));
    let ip = 'fruits:apple, mango, guava, blueberry';
    console.log(ip.match(/:(.*)/)[1]);
}
{
    let ip = 'another (way) to reuse (portion) match (by)';
    console.log(ip.match(/\(.+?\)/g));
}
{
    let s1 = 'match after the last newline character';
    let s2 = 'and then you want to test';
    let s3 = 'this is good bye then';
    let s4 = 'who was there to see';
    const pat3 = pat;
    function getLastPatIndex(value, pat) {
        if (pat.flags.includes('g')) {
            return Array.from(value.matchAll(pat3))?.pop()?.index;
        }
        throw new TypeError('the global flag is missing from the pattern');
    }
    [s1, s2, s3, s4].forEach((item) => {
        console.log(getLastPatIndex(item, pat3));
    });
}
{
    let ip = 'fruits:apple, mango, guava, blueberry';
    console.log(ip.match(/:(.+)/)[1]);
}
{
    let ip = 'another (way) to reuse (portion) match (by)';
    console.log(ip.match(/\(\w+\)/g));
}
{
    let row1 = '-2,5 4,+3 +42,-53 4356246,-35753235';
    let row2 = '1.32,-3.14 634,5.63 63.3e3,99078093';
    const pat4 = /[-+]?\d+((\.\d+(e\d+)?)|e\d+)?,[-+]?\d+((\.\d+(e\d+)?)|e\d+)?/g;
    function isEmpty(value) {
        return value != null;
    }
    console.log(Array.from(row1.matchAll(pat4), (item) => {
        return item[0]
            .split(',')
            .reduce((x, y) => x + Number(y), 0);
    }));
    console.log(Array.from(row2.matchAll(pat4), (item) => {
        console.log(item[0].split(','));
        return item[0]
            .split(',')
            .reduce((x, y) => x + Number(y), 0);
    }));
}
export {};
