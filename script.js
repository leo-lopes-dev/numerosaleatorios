let res = document.querySelector('section#result')

// Usando função
function gerar(){
    let num = Math.floor(Math.random() * 100) + 1; 
    /*Esse +1 evita o pior dos casos 0, ou 99 mostrando sempre ou 1 ou 100*/ 
    res.innerHTML += `<p>Gerei o número <mark>${num}</mark></p>`
}

// definindo tudo na mão
/*
function gerar(){
    let min = 1
    let max = 100
    let dif = max - min
    let aleatorio = Math.random()
    let num = min + Math.trunc(dif * aleatorio)
    
    res.innerHTML = `<p>Gerei o número <mark>${num}</mark></p>`
}
*/


// Limpa tudo
function limpar(){
    res.innerHTML = null
}
