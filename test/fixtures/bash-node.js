module.exports = [
  ['0{1..9} {10..20}', ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20']],
  ['{A..a}', ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '[', '\\', ']', '^', '_', '`', 'a']],
  ['x{{0..10},braces}y', ['x0y', 'x1y', 'x2y', 'x3y', 'x4y', 'x5y', 'x6y', 'x7y', 'x8y', 'x9y', 'x10y', 'xbracesy']],
  ['{-20..0}', ['-20', '-19', '-18', '-17', '-16', '-15', '-14', '-13', '-12', '-11', '-10', '-9', '-8', '-7', '-6', '-5', '-4', '-3', '-2', '-1', '0']],


  ['/usr/{ucb/{ex,edit},lib/{ex,how_ex}}', ['/usr/ucb/ex', '/usr/lib/ex', '/usr/ucb/edit', '/usr/lib/how_ex']],
  ['\\{a,b,c,d,e}', ['{a,b,c,d,e}']],
  ['a-{bdef-{g,i}-c', ['a-{bdef-g-c', 'a-{bdef-i-c']],
  ['a-{b{d,e}}-c', ['a-{bd}-c', 'a-{be}-c']],
  ['abcd{efgh', ['abcd{efgh']],
  ['ff{c,b,a}', ['ffc', 'ffb', 'ffa']],
  ['f{d,e,f}g', ['fdg', 'feg', 'ffg']],
  ['x{10..1}y', ['x10y', 'x9y', 'x8y', 'x7y', 'x6y', 'x5y', 'x4y', 'x3y', 'x2y', 'x1y']],
  ['x{3..3}y', ['x3y']],
  ['{"klklkl"}{1,2,3}', ['{klklkl}1', '{klklkl}2', '{klklkl}3']],
  ['{"x,x"}', ['{x,x}']],
  ['{', ['{']],
  ['{-1..-10..-2}', ['-1', '-3', '-5', '-7', '-9']],
  ['{-1..-10..2}', ['-1', '-3', '-5', '-7', '-9']],
  ['{-1..-10}', ['-1', '-2', '-3', '-4', '-5', '-6', '-7', '-8', '-9', '-10']],
  ['{-50..-0..5}', ['-50', '-45', '-40', '-35', '-30', '-25', '-20', '-15', '-10', '-5', '0']],
  ['{0..10,braces}', ['0..10', 'braces']],
  ['{1..0f}', ['{1..0f}']],
  ['{1..10..2}', ['1', '3', '5', '7', '9']],
  ['{1..10..ff}', ['{1..10..ff}']],
  ['{1..10.f}', ['{1..10.f}']],
  ['{1..10f}', ['{1..10f}']],
  ['{1..10}', ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10']],
  ['{1..20..20}', ['1']],
  ['{1..20..2}', ['1', '3', '5', '7', '9', '11', '13', '15', '17', '19']],
  ['{2147483645..2147483649}', ['2147483645', '2147483646', '2147483647', '2147483648', '2147483649']],
  ['{3..3}', ['3']],
  ['{a,b}{{a,b},a,b}', ['aa', 'ab', 'ba', 'bb']],
  ['{abc\\,def}', ['{abc,def}']],
  ['{l,n,m}xyz', ['lxyz', 'nxyz', 'mxyz']],
  ['{x,y,{abc},trie}', ['abc', 'trie', 'x', 'y']],
  ['{{0..10},braces}', ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'braces']],
  ['{}', ['{}']],
  ['}', ['}']],
];
