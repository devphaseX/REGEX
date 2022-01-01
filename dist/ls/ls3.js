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
