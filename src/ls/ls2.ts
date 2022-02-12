<<<<<<< HEAD
import { escapeRegExp, unionRegExp } from './shared.js';

console.log(RegExp(escapeRegExp('(a+b)')));

let eqn = 'f*(a^b) - 3*(a^b)';
const userDefinedPatternString = '(a^b)';

const userPattern = new RegExp(
  escapeRegExp(userDefinedPatternString),
  'g'
);

console.log([...eqn.matchAll(userPattern)]);
console.log(eqn.replaceAll(userPattern, 'c'));
console.log(
  eqn.replace(
    new RegExp(
      escapeRegExp(userDefinedPatternString) + '$'
    ),
    'c'
  )
);

let w1 = ['c^t', 'dog$', 'f|x'];
const p1 = new RegExp(unionRegExp(w1), 'g');
console.log(
  'c^t dog$ bee parrot f|x'.replaceAll(p1, 'mammal')
);

let str1 = '(9-2)*5+qty/3';
let str2 = '(qty+4)/2-(9-2)*5+pq/4';

const pat1 = new RegExp(escapeRegExp('(9-2)*5'), 'g');
console.log(str1.replaceAll(pat1, '35'));
console.log(str2.replaceAll(pat1, '35'));

let s1 = '2.3/(4)\\|6 foo 5.3-(4)\\|';
let s2 = '(4)\\|42 - (4)\\|3';
let s3 = 'two - (4)\\|\n';

const pat2 = new RegExp(
  `^${unionRegExp(Array(2).fill('(4)\\|'))}$`
);

console.log(s1.replace(pat2, '2'));
console.log(s2.replace(pat2, '2'));
console.log(s3.replace(pat2, '2'));

let items = ['a.b', '3+n', 'x\\y\\z', 'qty||price', '{n}'];
const pat3 = new RegExp(
  unionRegExp(
    items.slice().sort((a, b) => b.length - a.length)
  ),
  'g'
);

['0a.bcd', 'E{n}AMPLE', '43+n2 ax\\y\\ze'].forEach(
  (word) => {
    console.log(word.replace(pat3, 'X'));
  }
);

let ip = '123\b456';

function descendArranger<A>(transformer: (a: A) => number) {
  return function sorter(first: A, second: A) {
    return transformer(first) < transformer(second)
      ? 1
      : -1;
  };
}

console.log(ip.replace(/[\b]/, ' '));

{
  let ip = '3-(a^b)+2*(a^b)-(a/b)+3';
  let eqns = ['(a^b)', '(a/b)', '(a^b)+2'];

  const pat2 = new RegExp(
    unionRegExp(
      eqns.sort(
        descendArranger<string>((a) => {
          return a.length;
        })
      )
    ),
    'g'
  );

  console.log(ip.replace(pat2, 'X'));
}
=======
/* 

Pattern archor allows us to place restriction on match pattern
Inorder to narrow our match down.
*/

import { escapeMetaCharacters } from '../shared.js';

/* 
string archor 
*This are use to defined the boundary of a match
 */

//prefixing the cat with '^' denote that this match is only
//valid if the match string starts with these letters c,a,t
console.log(/^cat/.test('cater'));
console.log(/^cat/.test('contenation'));

console.log(/^hi/.test('hi hello\ntop spot'));

//to place restrict at the end of a string
console.log(/are$/.test('spare'));
console.log(/are$/.test('nearest'));

{
  let words = ['surrender', 'unicorn', 'newer'];
  console.log(words.filter((w) => /er$/.test(w)));
}

// check if any line in the string starts with 'top'
console.log(/^top/m.test('hi hello\ntop spot'));

//check if any line in the string ends with 'er'
console.log(/er$/m.test('spare\npar\nera\ndare'));

//check if any complete line in the string is 'par'
console.log(/^par$/m.test('spare\npar\nera\ndare'));

void (function exercise() {
  /* 
  Check if the given input strings contain is or the as
  whole words.
   */
  {
    let str1 = 'is; (this)';
    let str2 = "The food isn't good";
    let str3 = 'the2 cats';
    let str4 = 'switch on the light';

    const pat1 = /\bis\b/;
    const pat2 = /\bthe\b/;

    console.log(pat1.test(str1) || pat2.test(str1));
    console.log(pat1.test(str2) || pat2.test(str2));
    console.log(pat1.test(str3) || pat2.test(str3));
    console.log(pat1.test(str4) || pat2.test(str4));
  }
  /* 
  For the given input string, change only whole word red
  to brown
 */
  {
    let ip = 'bred red spread credible red;';
    console.log(ip.replace(/\bred\b/g, 'brown'));
  }

  /* 
    For the given array, ﬁlter all elements that contains 42
    surrounded by word characters.
   */
  {
    let items = ['hi42bye', 'nice1423', 'bad42', 'cool_42a'];
    console.log(items.filter((w) => /\B42\B/.test(w)));
  }

  /*
  For the given input array, ﬁlter all elements that start
  with den or end with ly 
   */

  {
    let items = ['lovely', '1\ndentist', '2 lonely', 'dent'];
    console.log(items.filter((w) => /^den/.test(w) || /ly$/.test(w)));
  }

  /* 
  For the given input string, change whole word mall to
  1234 only if it is at the start of line.
  */

  {
    //template literal preserved space using source code text structure
    //I strip off any whitespace introduced due to styling reason.
    let para = `ball fall wall tall
                mall call ball pall
                wall mall ball fall
                mallet wallet malls`.replaceAll(/^\s+/gm, '');

    console.log(para.replace(/^mall\b/gm, '1234'));
  }

  /* 
    For the given array, ﬁlter all elements having a line
    starting with den or ending with ly.
  */

  {
    let items = ['lovely', '1\ndentist', 'fly\nfar', '2 lonely', 'dent'];
    console.log(items.filter((w) => /^den/gm.test(w) || /ly$/gm.test(w)));
  }

  /* 
  For the given input array, ﬁlter all whole elements
  12\nthree irrespective of case.
*/
  {
    let items = ['12\nthree\n', '12\nThree', '12\nthree'];
    console.log(items.filter((w) => /^12\nthree$/i.test(w)));
  }

  /* 
  For the given input array, replace hand with X for all
  words that start with hand followed by at least one word
  character.
   */

  {
    let items = ['handed', 'hand', 'handy', 'unhanded', 'handle'];
    console.log(items.map((w) => w.replace(/^hand\B/, 'X')));
  }

  /* 
  For the given input array, ﬁlter all elements starting with. Additionally, 
  replace e with X for these ﬁltered elements.
  */

  {
    let items = ['handed', 'hand', 'handy', 'unhanded', 'handle'];
    console.log(items.map((w) => w.replace(/^(h.*?)(e)(.*)/, '$1X$3')));
  }

  /* 
  Why does the following code show false instead of
  true?
  */

  {
    console.log(/end$/.test('bend it\nand send\n'));
  }

  /* 
    Reason
    The string is terminated with a newline character
    You will have a match if you apply the multiline flag
    which match the end of each line, and will not literally 
    match the newline character.
   */

  {
    const pat = new RegExp(escapeMetaCharacters('(a^b)'), 'g');
    console.log('f*(a^b) - 3*(a^b)'.replaceAll(pat, 'c'));
  }

  /* 
  Transform given input strings to expected output using
  same logic on both strings.
   */

  {
    let str1 = '(9-2)*5+qty/3';
    let str2 = '(qty+4)/2-(9-2)*5+pq/4';
    const pat1 = new RegExp(escapeMetaCharacters('(9-2)*5'));

    console.log([str1, str2].map((v) => v.replace(pat1, '35')));
  }

  /* 
  Replace (4)\| with 2 only at the start or end of given
  input strings.
  */

  {
    let s1 = '2.3/(4)\\|6 foo 5.3-(4)\\|';
    let s2 = '(4)\\|42 - (4)\\|3';
    let s3 = 'two - (4)\\|\n';

    const patterns = [
      { value: '^', position: 0 },
      { value: '$', position: -1 },
    ].map(({ value, position }) => {
      const pattern = escapeMetaCharacters(String.raw`(4)\|`);
      if (Math.sign(position) === -1) {
        return `${pattern.slice(0)}${value}`;
      }
      return `${pattern.slice(0, position)}${value}${pattern.slice(position)}`;
    });

    const pat2 = new RegExp(patterns.join('|'), 'g');

    [s1, s2, s3]
      .map((v) => v.replaceAll(pat2, '2'))
      .forEach((res) => {
        console.log(res);
      });
  }

  /* 
  Replace backspace character \b with a single space
  character for the given input string.
  */

  {
    let ip = '123\b456';
    const pat = new RegExp(String.raw`[\b]`);
    console.log(ip.replace(pat, ' '));
  }

  /* 
  Replace all occurrences of \e with e.
  */

  {
    const ip = 'th\\er\\e ar\\e common asp\\ects among the alternations';
    console.log(/\\e/.test(ip));
    console.log(/\\e/);
    console.log(RegExp(String.raw`\\e`).exec(ip));
    console.log(RegExp('\\\\e').exec(ip));

    console.log('\\e' === String.raw`\e`);
  }

  /* 
  Replace any matching item from the array eqns with X for
  given the string ip. Match the items from eqns literally.
  */

  {
    // let ip = '3-(a^b)+2*(a^b)-(a/b)+3';
    // let eqns = ['(a^b)', '(a/b)', '(a^b)+2'];
    // const pat = new RegExp(
    //   unionRegExp(eqns.sort((a, b) => b.length - a.length)),
    //   'g'
    // );
    // console.log(ip.replace(pat, 'X'));
  }
})();
>>>>>>> df4aeca (treated alternation,quantifiers)
