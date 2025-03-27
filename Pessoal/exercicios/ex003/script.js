let i_tarefa = document.getElementById('input_t_id')
let div_tarefas = document.getElementById('lista_tarefas')

function gerar_t() {
    let tar = i_tarefa.value
    if (tar.length >= 1) {
        let div_t = document.createElement('p')
        div_t.className = 'p_tar'
        div_t.innerText = tar
        div_tarefas.appendChild(div_t)

        div_t.onclick = function () {
            if (div_t.style.textDecoration === 'line-through') {
                div_t.style.textDecoration = 'none';
            } else {
                div_t.style.textDecoration = 'line-through';
            }
        }
    } else {
        window.alert('Caixa em Branco, digite sua tarefa!')
    }

    i_tarefa.value = ''
    i_tarefa.focus()
}

function limpar() {
    let paragrafos = div_tarefas.querySelectorAll('p');
    paragrafos.forEach((paragrafo) => {
        paragrafo.remove();
    });
}



