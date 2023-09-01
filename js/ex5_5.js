const frm = document.querySelector('form')
const resp1 = document.querySelector('#outResp1')
const resp2 = document.querySelector('#outResp2')

let resposta = ''
let valorTotal = 0;
let contas = 0;

frm.addEventListener('submit', (e) => {
    e.preventDefault()
    const descricao = frm.textoConta.value
    const valorConta = Number(frm.num.value)

    contas++
    valorTotal = valorTotal + valorConta
    resposta = resposta + descricao + "- R$: " + valorConta.toFixed(2) + "\n"

    resp1.innerText = `${resposta}--------------------`
    resp2.innerText = `${contas} Conta(s) - Total R$: ${valorTotal.toFixed(2)} `

    frm.inDescricao.value = "";                    // Limpa os campos do form
    frm.num.value = "";
    frm.inDescricao.focus()                       // Posiciona no campo inDescricao do form 

});