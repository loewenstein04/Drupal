const date = new Date()
const hours = date.getHours()
const minutes = date.getMinutes()

const formatoHours = hours.toString().padStart(2, "0")
const formatoMinutes = minutes.toString().padStart(2, "0")

const horasRes = document.getElementById('horas')
const diaRes = document.getElementById('dia')

setTimeout(() => {
    document.querySelector('.tela-ligando').style.display = 'none'
    setTimeout(() => {
        btnDesbloqueio.style.display = 'block'
        setTimeout(() => {
            document.querySelector('body').classList.add('carregamento')
            document.querySelector('.login').style.display = 'flex'
        }, 250)
    }, 500)
}, 1500)

dia = new Array('Domingo', 'Segunda-Feira', 'Terça-Feira', 'Quarta-Feira', 'Quinta-Feira', 'Sexta-Feira', 'Sábado')

mes = new Array('Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novebro', 'Dezembro')

horasRes.innerHTML = `${formatoHours}:${formatoMinutes}`

diaRes.innerHTML = `${dia[date.getDay()]}, ${date.getDate().toString().padStart(2, "0")} de ${mes[date.getMonth()]}`

const btnDesbloqueio = document.querySelector('.tela-bloqueio')
btnDesbloqueio.addEventListener('click', () => {
    btnDesbloqueio.style.top = '-1000px'
    document.querySelector('#senha').focus()
})

setInterval(() => {
    const senha = document.getElementById('senha')
    if (senha.value == 'ADMIN') {
        document.querySelector('.login').style.display = 'none'
        document.querySelector('.login-load').style.display = 'block'
        setTimeout(() => {
            document.querySelector('.login-load').classList.add('opacity0')
            setTimeout(() => {
                document.querySelector('main').style.display = 'grid'
                document.querySelector('.login-load').style.display = 'none'
                document.querySelector('body').classList.remove('carregamento')
                senha.value = ''
            }, 500)
        }, 1500)
    }
}, 0)

let botao = true
const btnPasso1 = document.querySelector('#numero-1')
const btnPasso2 = document.querySelector('#numero-2')
const btnPasso3 = document.querySelector('#numero-3')
const btnPasso4 = document.querySelector('#numero-4')
const btnProx1 = document.getElementById('btn-prox1')
const btnProx2 = document.getElementById('btn-prox2')
const btnProx3 = document.getElementById('btn-prox3')
const btnvoltar2 = document.getElementById('btn-voltar2')
const btnvoltar3 = document.getElementById('btn-voltar3')
const btnvoltar4 = document.getElementById('btn-voltar4')
btnPasso1.addEventListener('click', () => {
    document.getElementById('passo2').classList.toggle('buttons-fundo')
    document.getElementById('passo3').classList.toggle('buttons-fundo')
    document.getElementById('passo4').classList.toggle('buttons-fundo')
    document.getElementById('passo1').classList.toggle('passo1')
    document.getElementById('passo1').classList.toggle('passo-tela')
    if (document.getElementById('passo1').classList.contains('passo-tela')) {
        document.getElementById('numero-1').innerHTML = '<i class="gg-arrow-left"></i>'
    } else {
        setTimeout(() => {
            document.getElementById('numero-1').innerHTML = '<h1>1</h1>'
        }, 700)
    }
    setTimeout(() => {
        document.getElementById('titulo1').classList.toggle('none')
        btnPasso1.classList.toggle('btn-fundo')
    }, 200)
    if (botao = true && document.getElementById('passo1').classList.contains('passo-tela')) {
        setTimeout(() => {
            btnProx1.classList.toggle('none')
            botao = false
        }, 1000)
    } else if (botao == false) {
        btnProx1.classList.toggle('none')
        botao = true
    }

    document.getElementById('case1').classList.toggle('case-ativo')
    document.getElementById('case1').classList.toggle('case')
    document.getElementById('passo1').classList.toggle('fundo')
})


btnPasso2.addEventListener('click', () => {
    document.getElementById('passo1').classList.toggle('buttons-fundo')
    document.getElementById('passo3').classList.toggle('buttons-fundo')
    document.getElementById('passo4').classList.toggle('buttons-fundo')
    document.getElementById('passo2').classList.toggle('passo2')
    document.getElementById('passo2').classList.toggle('passo-tela2')
    if (document.getElementById('passo2').classList.contains('passo-tela2')) {
        document.getElementById('numero-2').innerHTML = '<i class="gg-arrow-left"></i>'
    } else {
        setTimeout(() => {
            document.getElementById('numero-2').innerHTML = '<h1>2</h1>'
        }, 700)
    }
    setTimeout(() => {
        document.getElementById('titulo2').classList.toggle('none')
        btnPasso2.classList.toggle('btn-fundo')
    }, 200)
    if (botao = true && document.getElementById('passo2').classList.contains('passo-tela2')) {
        setTimeout(() => {
            document.getElementById('container-buttons2').classList.toggle('none')
            botao = false
        }, 1000)
    } else if (botao == false) {
        document.getElementById('container-buttons2').classList.toggle('none')
        botao = true
    }
    document.getElementById('case2').classList.toggle('case-ativo')
    document.getElementById('case2').classList.toggle('case')
    document.getElementById('passo2').classList.toggle('fundo')
})

btnPasso3.addEventListener('click', () => {
    document.getElementById('passo1').classList.toggle('buttons-fundo')
    document.getElementById('passo2').classList.toggle('buttons-fundo')
    document.getElementById('passo4').classList.toggle('buttons-fundo')
    document.getElementById('passo3').classList.toggle('passo3')
    document.getElementById('passo3').classList.toggle('passo-tela')
    if (document.getElementById('passo3').classList.contains('passo-tela')) {
        document.getElementById('numero-3').innerHTML = '<i class="gg-arrow-left"></i>'
    } else {
        setTimeout(() => {
            document.getElementById('numero-3').innerHTML = '<h1>3</h1>'
        }, 700)
    }
    setTimeout(() => {
        document.getElementById('titulo3').classList.toggle('none')
        btnPasso3.classList.toggle('btn-fundo')
    }, 200)
    if (botao = true && document.getElementById('passo3').classList.contains('passo-tela')) {
        setTimeout(() => {
            document.getElementById('container-buttons3').classList.toggle('none')
            botao = false
        }, 1000)
    } else if (botao == false) {
        document.getElementById('container-buttons3').classList.toggle('none')
        botao = true
    }
    document.getElementById('case3').classList.toggle('case-ativo')
    document.getElementById('case3').classList.toggle('case')
    document.getElementById('passo3').classList.toggle('fundo')
})

btnPasso4.addEventListener('click', () => {
    document.getElementById('passo1').classList.toggle('buttons-fundo')
    document.getElementById('passo2').classList.toggle('buttons-fundo')
    document.getElementById('passo3').classList.toggle('buttons-fundo')
    document.getElementById('passo4').classList.toggle('passo4')
    document.getElementById('passo4').classList.toggle('passo-tela2')
    if (document.getElementById('passo4').classList.contains('passo-tela2')) {
        document.getElementById('numero-4').innerHTML = '<i class="gg-arrow-left"></i>'
    } else {
        setTimeout(() => {
            document.getElementById('numero-4').innerHTML = '<h1>4</h1>'
        }, 700)
    }
    setTimeout(() => {
        document.getElementById('titulo4').classList.toggle('none')
        btnPasso4.classList.toggle('btn-fundo')
    }, 200)
    if (botao = true && document.getElementById('passo4').classList.contains('passo-tela2')) {
        setTimeout(() => {
            btnvoltar4.classList.toggle('none')
            botao = false
        }, 1000)
    } else if (botao == false) {
        btnvoltar4.classList.toggle('none')
        botao = true
    }
    document.getElementById('case4').classList.toggle('case-ativo')
    document.getElementById('case4').classList.toggle('case')
    document.getElementById('passo4').classList.toggle('fundo')
})

// Efeito dos botões

btnProx1.addEventListener('click', () => {
    document.getElementById('passo1').classList.toggle('buttons-fundo')
    document.getElementById('passo2').classList.toggle('buttons-fundo')
    document.getElementById('passo1').classList.toggle('passo1')
    document.getElementById('passo1').classList.toggle('passo-tela')
    if (document.getElementById('passo1').classList.contains('passo-tela')) {
        document.getElementById('numero-1').innerHTML = '<i class="gg-arrow-left"></i>'
    } else {
        setTimeout(() => {
            document.getElementById('numero-1').innerHTML = '<h1>1</h1>'
        }, 700)
    }
    setTimeout(() => {
        document.getElementById('titulo1').classList.toggle('none')
        btnPasso1.classList.toggle('btn-fundo')
    }, 200)
    if (document.getElementById('passo1').classList.contains('passo-tela')) {
        setTimeout(() => {
            btnProx1.classList.toggle('none')
        }, 1000)
    } else {
        btnProx1.classList.toggle('none')
    }

    document.getElementById('case1').classList.toggle('case-ativo')
    document.getElementById('case1').classList.toggle('case')
    document.getElementById('passo1').classList.toggle('fundo')



    document.getElementById('passo2').classList.toggle('passo2')
    document.getElementById('passo2').classList.toggle('passo-tela2')
    if (document.getElementById('passo2').classList.contains('passo-tela2')) {
        document.getElementById('numero-2').innerHTML = '<i class="gg-arrow-left"></i>'
    } else {
        setTimeout(() => {
            document.getElementById('numero-2').innerHTML = '<h1>2</h1>'
        }, 700)
    }
    setTimeout(() => {
        document.getElementById('titulo2').classList.toggle('none')
        btnPasso2.classList.toggle('btn-fundo')
    }, 200)
    if (botao = true && document.getElementById('passo2').classList.contains('passo-tela2')) {
        setTimeout(() => {
            document.getElementById('container-buttons2').classList.toggle('none')
            botao = false
        }, 1000)
    } else if (botao == false) {
        document.getElementById('container-buttons2').classList.toggle('none')
        botao = true
    }
    document.getElementById('case2').classList.toggle('case-ativo')
    document.getElementById('case2').classList.toggle('case')
    document.getElementById('passo2').classList.toggle('fundo')
})

btnvoltar2.addEventListener('click', () => {
    document.getElementById('passo1').classList.toggle('buttons-fundo')
    document.getElementById('passo2').classList.toggle('buttons-fundo')
    document.getElementById('passo2').classList.toggle('passo2')
    document.getElementById('passo2').classList.toggle('passo-tela2')
    if (document.getElementById('passo2').classList.contains('passo-tela2')) {
        document.getElementById('numero-2').innerHTML = '<i class="gg-arrow-left"></i>'
    } else {
        setTimeout(() => {
            document.getElementById('numero-2').innerHTML = '<h1>2</h1>'
        }, 700)
    }
    setTimeout(() => {
        document.getElementById('titulo2').classList.toggle('none')
        btnPasso2.classList.toggle('btn-fundo')
    }, 200)
    if (botao = true && document.getElementById('passo2').classList.contains('passo-tela2')) {
        document.getElementById('container-buttons2').classList.toggle('none')
        botao = false
    } else if (botao == false) {
        document.getElementById('container-buttons2').classList.toggle('none')
        botao = true
    }
    document.getElementById('case2').classList.toggle('case-ativo')
    document.getElementById('case2').classList.toggle('case')
    document.getElementById('passo2').classList.toggle('fundo')



    document.getElementById('passo1').classList.toggle('passo1')
    document.getElementById('passo1').classList.toggle('passo-tela')
    if (document.getElementById('passo1').classList.contains('passo-tela')) {
        document.getElementById('numero-1').innerHTML = '<i class="gg-arrow-left"></i>'
    } else {
        setTimeout(() => {
            document.getElementById('numero-1').innerHTML = '<h1>1</h1>'
        }, 700)
    }
    setTimeout(() => {
        document.getElementById('titulo1').classList.toggle('none')
        btnPasso1.classList.toggle('btn-fundo')
    }, 200)
    if (document.getElementById('passo1').classList.contains('passo-tela')) {
        setTimeout(() => {
            btnProx1.classList.toggle('none')
        }, 1000)
    } else {
        btnProx1.classList.toggle('none')
    }

    document.getElementById('case1').classList.toggle('case-ativo')
    document.getElementById('case1').classList.toggle('case')
    document.getElementById('passo1').classList.toggle('fundo')
})

btnProx2.addEventListener('click', () => {
    document.getElementById('passo2').classList.toggle('buttons-fundo')
    document.getElementById('passo3').classList.toggle('buttons-fundo')
    document.getElementById('passo2').classList.toggle('passo2')
    document.getElementById('passo2').classList.toggle('passo-tela2')
    if (document.getElementById('passo2').classList.contains('passo-tela2')) {
        document.getElementById('numero-2').innerHTML = '<i class="gg-arrow-left"></i>'
    } else {
        setTimeout(() => {
            document.getElementById('numero-2').innerHTML = '<h1>2</h1>'
        }, 700)
    }
    setTimeout(() => {
        document.getElementById('titulo2').classList.toggle('none')
        btnPasso2.classList.toggle('btn-fundo')
    }, 200)
    if (botao = true && document.getElementById('passo2').classList.contains('passo-tela2')) {
        document.getElementById('container-buttons2').classList.toggle('none')
        botao = false
    } else if (botao == false) {
        document.getElementById('container-buttons2').classList.toggle('none')
        botao = true
    }
    document.getElementById('case2').classList.toggle('case-ativo')
    document.getElementById('case2').classList.toggle('case')
    document.getElementById('passo2').classList.toggle('fundo')


    document.getElementById('passo3').classList.toggle('passo3')
    document.getElementById('passo3').classList.toggle('passo-tela')
    if (document.getElementById('passo3').classList.contains('passo-tela')) {
        document.getElementById('numero-3').innerHTML = '<i class="gg-arrow-left"></i>'
    } else {
        setTimeout(() => {
            document.getElementById('numero-3').innerHTML = '<h1>3</h1>'
        }, 700)
    }
    setTimeout(() => {
        document.getElementById('titulo3').classList.toggle('none')
        btnPasso3.classList.toggle('btn-fundo')
    }, 200)
    if (document.getElementById('passo3').classList.contains('passo-tela')) {
        setTimeout(() => {
            document.getElementById('container-buttons3').classList.toggle('none')
        }, 1000)
    } else {
        document.getElementById('container-buttons3').classList.toggle('none')
    }
    document.getElementById('case3').classList.toggle('case-ativo')
    document.getElementById('case3').classList.toggle('case')
    document.getElementById('passo3').classList.toggle('fundo')
})

btnvoltar3.addEventListener('click', () => {
    document.getElementById('passo2').classList.toggle('buttons-fundo')
    document.getElementById('passo3').classList.toggle('buttons-fundo')
    document.getElementById('passo2').classList.toggle('passo2')
    document.getElementById('passo2').classList.toggle('passo-tela2')
    if (document.getElementById('passo2').classList.contains('passo-tela2')) {
        document.getElementById('numero-2').innerHTML = '<i class="gg-arrow-left"></i>'
    } else {
        setTimeout(() => {
            document.getElementById('numero-2').innerHTML = '<h1>2</h1>'
        }, 700)
    }
    setTimeout(() => {
        document.getElementById('titulo2').classList.toggle('none')
        btnPasso2.classList.toggle('btn-fundo')
    }, 200)
    if (botao = true && document.getElementById('passo2').classList.contains('passo-tela2')) {
        setTimeout(() => {
            document.getElementById('container-buttons2').classList.toggle('none')
            botao = false
        }, 1000)
    } else if (botao == false) {
        document.getElementById('container-buttons2').classList.toggle('none')
        botao = true
    }
    document.getElementById('case2').classList.toggle('case-ativo')
    document.getElementById('case2').classList.toggle('case')
    document.getElementById('passo2').classList.toggle('fundo')


    document.getElementById('passo3').classList.toggle('passo3')
    document.getElementById('passo3').classList.toggle('passo-tela')
    if (document.getElementById('passo3').classList.contains('passo-tela')) {
        document.getElementById('numero-3').innerHTML = '<i class="gg-arrow-left"></i>'
    } else {
        setTimeout(() => {
            document.getElementById('numero-3').innerHTML = '<h1>3</h1>'
        }, 700)
    }
    setTimeout(() => {
        document.getElementById('titulo3').classList.toggle('none')
        btnPasso3.classList.toggle('btn-fundo')
    }, 200)
    if (document.getElementById('passo3').classList.contains('passo-tela')) {
        setTimeout(() => {
            document.getElementById('container-buttons3').classList.toggle('none')
        }, 1000)
    } else {
        document.getElementById('container-buttons3').classList.toggle('none')
    }
    document.getElementById('case3').classList.toggle('case-ativo')
    document.getElementById('case3').classList.toggle('case')
    document.getElementById('passo3').classList.toggle('fundo')
})

btnProx3.addEventListener('click', () => {
    document.getElementById('passo3').classList.toggle('buttons-fundo')
    document.getElementById('passo4').classList.toggle('buttons-fundo')
    document.getElementById('passo3').classList.toggle('passo3')
    document.getElementById('passo3').classList.toggle('passo-tela')
    if (document.getElementById('passo3').classList.contains('passo-tela')) {
        document.getElementById('numero-3').innerHTML = '<i class="gg-arrow-left"></i>'
    } else {
        setTimeout(() => {
            document.getElementById('numero-3').innerHTML = '<h1>3</h1>'
        }, 700)
    }
    setTimeout(() => {
        document.getElementById('titulo3').classList.toggle('none')
        btnPasso3.classList.toggle('btn-fundo')
    }, 200)
    if (document.getElementById('passo3').classList.contains('passo-tela')) {
        document.getElementById('container-buttons3').classList.toggle('none')
    } else {
        document.getElementById('container-buttons3').classList.toggle('none')
    }
    document.getElementById('case3').classList.toggle('case-ativo')
    document.getElementById('case3').classList.toggle('case')
    document.getElementById('passo3').classList.toggle('fundo')

    document.getElementById('passo4').classList.toggle('passo4')
    document.getElementById('passo4').classList.toggle('passo-tela2')
    if (document.getElementById('passo4').classList.contains('passo-tela2')) {
        document.getElementById('numero-4').innerHTML = '<i class="gg-arrow-left"></i>'
    } else {
        setTimeout(() => {
            document.getElementById('numero-4').innerHTML = '<h1>4</h1>'
        }, 700)
    }
    setTimeout(() => {
        document.getElementById('titulo4').classList.toggle('none')
        btnPasso4.classList.toggle('btn-fundo')
    }, 200)
    if (document.getElementById('passo4').classList.contains('passo-tela2')) {
        setTimeout(() => {
            btnvoltar4.classList.toggle('none')
        }, 1000)
    } else {
        btnvoltar4.classList.toggle('none')
    }
    document.getElementById('case4').classList.toggle('case-ativo')
    document.getElementById('case4').classList.toggle('case')
    document.getElementById('passo4').classList.toggle('fundo')
})

btnvoltar4.addEventListener('click', () => {
    document.getElementById('passo3').classList.toggle('buttons-fundo')
    document.getElementById('passo4').classList.toggle('buttons-fundo')
    document.getElementById('passo3').classList.toggle('passo3')
    document.getElementById('passo3').classList.toggle('passo-tela')
    if (document.getElementById('passo3').classList.contains('passo-tela')) {
        document.getElementById('numero-3').innerHTML = '<i class="gg-arrow-left"></i>'
    } else {
        setTimeout(() => {
            document.getElementById('numero-3').innerHTML = '<h1>3</h1>'
        }, 700)
    }
    setTimeout(() => {
        document.getElementById('titulo3').classList.toggle('none')
        btnPasso3.classList.toggle('btn-fundo')
    }, 200)
    if (botao = true && document.getElementById('passo3').classList.contains('passo-tela')) {
        setTimeout(() => {
            document.getElementById('container-buttons3').classList.toggle('none')
            botao = false
        }, 1000)
    } else if (botao == false) {
        document.getElementById('container-buttons3').classList.toggle('none')
        botao = true
    }
    document.getElementById('case3').classList.toggle('case-ativo')
    document.getElementById('case3').classList.toggle('case')
    document.getElementById('passo3').classList.toggle('fundo')

    document.getElementById('passo4').classList.toggle('passo4')
    document.getElementById('passo4').classList.toggle('passo-tela2')
    if (document.getElementById('passo4').classList.contains('passo-tela2')) {
        document.getElementById('numero-4').innerHTML = '<i class="gg-arrow-left"></i>'
    } else {
        setTimeout(() => {
            document.getElementById('numero-4').innerHTML = '<h1>4</h1>'
        }, 700)
    }
    setTimeout(() => {
        document.getElementById('titulo4').classList.toggle('none')
        btnPasso4.classList.toggle('btn-fundo')
    }, 200)
    if (document.getElementById('passo4').classList.contains('passo-tela2')) {
        setTimeout(() => {
            btnvoltar4.classList.toggle('none')
        }, 1000)
    } else {
        btnvoltar4.classList.toggle('none')
    }
    document.getElementById('case4').classList.toggle('case-ativo')
    document.getElementById('case4').classList.toggle('case')
    document.getElementById('passo4').classList.toggle('fundo')
})