let n_adic = [];
let select = document.getElementById('select-id');
let inf = document.getElementById('info_array');

function adicionar() {
    let n_entrada = document.getElementById('n-entrada-id');
    let n = Number(n_entrada.value);
    n_entrada.focus()

    // Valida o número inserido
    if (n <= 0 || n > 100) {
        window.alert("!!!Número inválido ou campo vazio!!!");
    } else if (n_adic.includes(n)) {
        window.alert("!!!Número já adicionado!!!");
    } else {
        n_adic.push(n);
    }

    // Limpa as áreas de exibição
    select.innerHTML = "";
    info_array.innerHTML = "";

    // Adiciona os números na lista de exibição
    for (let numero of n_adic) {
        let item = document.createElement('option');
        item.text = `Valor ${numero} adicionado.`;
        select.appendChild(item);
    }

    // Limpa o campo de entrada
    n_entrada.value = "";

    // Calcula e exibe os outros valores
    if (n_adic.length > 0) {

        // Exibe o total de números cadastrados
        let n_cadastrados = n_adic.length;
        let inf = document.createElement('p');
        inf.textContent = `Ao todo, temos ${n_cadastrados} número(s) cadastrado(s)`;
        info_array.appendChild(inf);

        // Exibe maior valor cadastrado
        let maior_n = Math.max(...n_adic);
        let ma_n = document.createElement('p');
        ma_n.textContent = `O maior valor cadastrado é ${maior_n}`;
        info_array.appendChild(ma_n);

        // Exibe menor valor cadastrado
        let menor_n = Math.min(...n_adic);
        let me_n = document.createElement('p');
        me_n.textContent = `O menor valor cadastrado é ${menor_n}`;
        info_array.appendChild(me_n);

        // Exibe a soma de todos os numeros cadastrados
        let soma = n_adic.reduce((acc, curr) => acc + curr, 0);
        let soma_valores = document.createElement('p');
        soma_valores.textContent = `A soma dos valores é ${soma}`;
        info_array.appendChild(soma_valores);

        // Exibe media dos valores cadastrados
        let media = soma / n_cadastrados;
        let med_n = document.createElement('p');
        med_n.textContent = `A média dos valores digitados é ${media}`;
        info_array.appendChild(med_n);
    }
}

function finalizar() {
    // Reseta as listas e a array
    select.innerHTML = "";
    info_array.innerHTML = "";
    n_adic = [];
}