let hora_agora = new Date()
let hora = hora_agora.getHours()

if (hora <= 6 || hora > 22){
    console.log(`Já é ${hora}hrs, por que você não esta dormindo?`)
}
else if(hora <= 12){
    console.log(`Bom dia são ${hora}hrs`)
} else if( hora <= 18){
    console.log(`Boa tarde são ${hora}hrs`)
} else if(hora <= 22) {
    console.log(`Boa noite são ${hora}hrs`)
}
