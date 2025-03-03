function tabuada(){
    let num = document.getElementById('num-id')
    let tab = document.getElementById('seltab')
    if (num.value.length == 0){
        window.alert('Favor digitar um número!')
    }else{
        let n = Number(num.value)
        let c = 1
        tab.innerHTML = ''
        while (c <= 10){
            let op = document.createElement('option')
            op.text = `${n} x ${c} = ${n*c}`
            op.value = `tab${c}`
            tab.appendChild(op)
            c++
        }
    }
}