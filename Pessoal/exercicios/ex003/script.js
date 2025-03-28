let i_tarefa = document.getElementById('input_t_id');
let div_tarefas = document.getElementById('lista_tarefas');

// Carregar o estado salvo da página
window.onload = function () {
    let estadoSalvo = localStorage.getItem('estadoPagina');
    if (estadoSalvo) {
        div_tarefas.innerHTML = estadoSalvo; // Restaura o conteúdo salvo
    }
};

// Detectar pressionamento da tecla "Enter"
i_tarefa.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        gerar_t()
    }
});

// Criar nova tarefa
function gerar_t() {
    let tar = i_tarefa.value;
    if (tar.length >= 1) {
        div_tarefas.innerHTML += `<p class="parag_t" onclick="t_feita(this)" style="text-decoration:none">${tar}</p>`
        salvarEstado() 
    } else {
        window.alert('Caixa em Branco, digite sua tarefa!')
    }

    i_tarefa.value = ''
    i_tarefa.focus() 
}

// Alternar estilo da tarefa clicada e salvar estado
function t_feita(p) {
    if (p.style.textDecoration === 'line-through') {
        p.style.textDecoration = 'none'
    } else {
        p.style.textDecoration = 'line-through'
    }
    salvarEstado()
}

// Limpar todas as tarefas e salvar estado vazio
function limpar() { let paragrafos = div_tarefas.querySelectorAll('p'); paragrafos.forEach((paragrafo) => { paragrafo.remove(); }); 
salvarEstado()
}

// Função para salvar o estado atual da página no localStorage
function salvarEstado() {
    localStorage.setItem('estadoPagina', div_tarefas.innerHTML);
}