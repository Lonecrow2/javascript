function contar() {
    let inicio = document.getElementById('ini-inpt-id');
    let fim = document.getElementById('fim-inpt-id');
    let passo = document.getElementById('passo-inpt-id');

    let iniN = Number(inicio.value);
    let fimN = Number(fim.value);
    let passoN = Number(passo.value);
    let resultado = document.getElementById('result');

    resultado.innerHTML = '';

    // for (let i = iniN; i <= fimN; i += passoN) {
    //     resultado.innerHTML += `${i} `;
    // }

    if (iniN > fimN || passoN <= 0) {
        resultado.innerHTML = 'Algum valor não está correto, revise as caixas e refaça o teste';
        return;
    }

    while (iniN <= fimN) {
        resultado.innerHTML += `${iniN} `
        iniN += passoN
    }

}