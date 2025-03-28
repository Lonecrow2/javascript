let i_tarefa = document.getElementById('input_t_id')
let div_tarefas = document.getElementById('lista_tarefas')

i_tarefa.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        gerar_t();
    }
});


function gerar_t() {
    let tar = i_tarefa.value
    if (tar.length >= 1) {
        /* let div_t = document.createElement('p')
         div_t.className = 'p_tar'
         div_t.innerText = tar
         div_tarefas.appendChild(div_t)*/
        div_tarefas.innerHTML += `<p class="parag_t" onclick= "t_feita(this)">${tar}</p>`
    } else {
        window.alert('Caixa em Branco, digite sua tarefa!')
    }

    i_tarefa.value = ''
    i_tarefa.focus()
}

function t_feita(p) {
    // Alterna entre 'line-through' e 'none' no parágrafo clicado
    if (p.style.textDecoration === 'line-through') {
        p.style.textDecoration = 'none';
    } else {
        p.style.textDecoration = 'line-through';
    }
}

function limpar() {
    let paragrafos = div_tarefas.querySelectorAll('p');
    paragrafos.forEach((paragrafo) => {
        paragrafo.remove();
    });
}