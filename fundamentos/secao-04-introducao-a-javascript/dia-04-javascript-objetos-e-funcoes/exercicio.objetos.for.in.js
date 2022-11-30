let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  };
console.log('Bem-vinda ' + info.personagem);

info.recorrente = 'Sim'

console.log(info)

for ( let result in info ){
    console.log(result)

}

for ( let result in info ){
    console.log(info[result]) 
}
let info2 = {
personagem : 'Tio Patinhas',
origem : "Christmas on Bear Mountain, Dell's Four Color Comics #170",
nota : 'O último MacPatinhas',
recorrente : 'Sim',
};
for ( let result2 in info && info2){
    console.log(info[result2] + ' e ' + info2[result2])
}