let a = parseInt(prompt("Podaj liczbę:"));
let b = a;
let xtable = [b,];
let ytable = []
if (a !== 1) {
    for (;;) {
        if (a % 2 === 0) {
            a = a / 2;
        } else {
            a = a * 3 + 1;
        }
        if (a === 1) {
            xtable.push(a);
            break;
        }
        xtable.push(a)
    }
}
let y = xtable.length;
for(let i = 0; i < y; i++) {
    ytable.push(i + 1);
}
console.log(a)

console.log(xtable)
console.log(ytable)