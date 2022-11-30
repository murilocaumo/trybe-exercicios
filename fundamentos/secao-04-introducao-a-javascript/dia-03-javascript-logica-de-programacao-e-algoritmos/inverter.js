let frut = 'banana'

let reverso = '';

for (let index = 0; index < frut.length ; index +=1 ) {
    reverso += frut[frut.length - 1 - index];
}
console.log(reverso)