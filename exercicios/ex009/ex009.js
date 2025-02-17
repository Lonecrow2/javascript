// let país = "França" 
// console.log('Vivendo em ' + país + ' Você é')
// if(país == 'Brasil' || país == 'brasil'){
//     console.log("brasileiro")
// }else{
//     console.log('estrangeiro')
// }

function Enviar(){
    let países = document.getElementById('países2id').value;
    let texto2 = document.getElementById('texto')
    if(países == "BR"){
        texto2.innerHTML = 'Você é brasileiro'
    }else{
        texto2.innerHTML = 'Você é estrangeiro'
    }
}