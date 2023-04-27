const myIframe = document.getElementById('myIframe')
const btnDark = document.getElementById('btn-dark');
btnDark.addEventListener('click', () => {
  document.body.classList.toggle('dark')
  const iFrameWindow = myIframe.contentWindow
  setInterval(() => {
    if (document.body.classList.contains('dark')) {
      iFrameWindow.document.body.classList.add('dark')
    } else {
      iFrameWindow.document.body.classList.remove('dark')
    }
  }, 0)
})

const btnPage1 = document.querySelector('#btn-page1')
btnPage1.addEventListener('click', () => {
  document.querySelector('#line-page').style.cssText = "left: 0%;"
  document.querySelector('.page1').style.cssText = "margin-left: 0;"
});

const btnPage2 = document.querySelector('#btn-page2')
btnPage2.addEventListener('click', () => {
  document.querySelector('#line-page').style.cssText = " left:35%;"
  document.querySelector('.page1').style.cssText = "margin-left: -100vw;"
});

const btnPage3 = document.querySelector('#btn-page3')
btnPage3.addEventListener('click', () => {
  document.querySelector('#line-page').style.cssText = " left: 67%;"
  document.querySelector('.page1').style.cssText = "margin-left: -200vw;"
});


// const btnPage1 = document.querySelector('#btn-page1')
// btnPage1.addEventListener('click', () =>{
//    document.querySelector('#line-page').cssText = "left: 0%;"
// });

// Tablet ligando

const btnTablet = document.getElementById('btn-tablet')
btnTablet.addEventListener('click', () => {
  if (btnTablet.textContent == 'ON') {
    btnTablet.textContent = 'OFF'
    btnTablet.style.boxShadow = '0 0 7px 1px red'
  } else {
    btnTablet.textContent = 'ON'
    btnTablet.style.boxShadow = '0 0 7px 1px green'
  }

  let ifrm = document.querySelector('iframe')
  ifrm.classList.toggle('ligado')
  if (ifrm.classList.contains('ligado')) {
    ifrm.src = 'inicio.html'
  } else {
    ifrm.src = 'desligando.html'
    setTimeout(() => {
      ifrm.src = 'desligado.html'
    }, 1500)
  }
})

//Sobre box

const icon1 = document.querySelector('.icon-1');
const icon2 = document.querySelector('.icon-2');
const icon3 = document.querySelector('.icon-3');
const icon4 = document.querySelector('.icon-4');
const texto1 = document.querySelector('.box-sobre1 p');
const texto2 = document.querySelector('.box-sobre2 p');
const texto3 = document.querySelector('.box-sobre3 p');
const texto4 = document.querySelector('.box-sobre4 p');
const divSobre1 = document.querySelector('.box-sobre1 .pergunta-header');
const divSobre2 = document.querySelector('.box-sobre2 .pergunta-header');
const divSobre3 = document.querySelector('.box-sobre3 .pergunta-header');
const divSobre4 = document.querySelector('.box-sobre4 .pergunta-header');

divSobre1.addEventListener('click', () => {

  if (document.querySelector('.box-sobre1').style.height == '180px') {
    document.querySelector('.box-sobre1').style.height = '50px'
    icon1.style.cssText = "rotate: 0deg; transition:.2s;"
    texto1.classList.toggle('p-height')
  } else {
    document.querySelector('.box-sobre1').style.height = '180px'
    icon1.style.cssText = " rotate: 90deg; transition:.2s; "
    texto1.classList.toggle('p-height')

    document.querySelector('.box-sobre2').style.height = '50px'
    icon2.style.cssText = "rotate: 0deg; transition:.2s;"
    texto2.classList.remove('p-height')

    document.querySelector('.box-sobre3').style.height = '50px'
    icon3.style.cssText = "rotate: 0deg; transition:.2s;"
    texto3.classList.remove('p-height')

    document.querySelector('.box-sobre4').style.height = '50px'
    icon4.style.cssText = "rotate: 0deg; transition:.2s;"
    texto4.classList.remove('p-height')
  }
});

divSobre2.addEventListener('click', () => {
  if (document.querySelector('.box-sobre2').style.height == '180px') {
    document.querySelector('.box-sobre2').style.height = '50px'
    icon2.style.cssText = "rotate: 0deg; transition:.2s;"
    texto2.classList.toggle('p-height')
  } else {
    document.querySelector('.box-sobre1').style.height = '50px'
    icon1.style.cssText = "rotate: 0deg; transition:.2s;"
    texto1.classList.remove('p-height')

    document.querySelector('.box-sobre2').style.height = '180px'
    icon2.style.cssText = " rotate: 90deg; transition:.2s; "
    texto2.classList.toggle('p-height')

    document.querySelector('.box-sobre3').style.height = '50px'
    icon3.style.cssText = "rotate: 0deg; transition:.2s;"
    texto3.classList.remove('p-height')

    document.querySelector('.box-sobre4').style.height = '50px'
    icon4.style.cssText = "rotate: 0deg; transition:.2s;"
    texto4.classList.remove('p-height')
  }
});

divSobre3.addEventListener('click', () => {

  if (document.querySelector('.box-sobre3').style.height == '180px') {
    document.querySelector('.box-sobre3').style.height = '50px'
    icon3.style.cssText = "rotate: 0deg; transition:.2s;"
    texto3.classList.toggle('p-height')
  } else {
    document.querySelector('.box-sobre1').style.height = '50px'
    icon1.style.cssText = "rotate: 0deg; transition:.2s;"
    texto1.classList.remove('p-height')

    document.querySelector('.box-sobre2').style.height = '50px'
    icon2.style.cssText = "rotate: 0deg; transition:.2s;"
    texto2.classList.remove('p-height')

    document.querySelector('.box-sobre3').style.height = '180px'
    icon3.style.cssText = " rotate: 90deg; transition:.2s; "
    texto3.classList.toggle('p-height')

    document.querySelector('.box-sobre4').style.height = '50px'
    icon4.style.cssText = "rotate: 0deg; transition:.2s;"
    texto4.classList.remove('p-height')
  }
});

divSobre4.addEventListener('click', () => {
  if (document.querySelector('.box-sobre4').style.height == '180px') {
    document.querySelector('.box-sobre4').style.height = '50px'
    icon4.style.cssText = "rotate: 0deg; transition:.2s;"
    texto4.classList.toggle('p-height')
  } else {
    document.querySelector('.box-sobre1').style.height = '50px'
    icon1.style.cssText = "rotate: 0deg; transition:.2s;"
    texto1.classList.remove('p-height')

    document.querySelector('.box-sobre2').style.height = '50px'
    icon2.style.cssText = "rotate: 0deg; transition:.2s;"
    texto2.classList.remove('p-height')

    document.querySelector('.box-sobre3').style.height = '50px'
    icon3.style.cssText = "rotate: 0deg; transition:.2s;"
    texto3.classList.remove('p-height')

    document.querySelector('.box-sobre4').style.height = '180px'
    icon4.style.cssText = " rotate: 90deg; transition:.2s; "
    texto4.classList.toggle('p-height')
  }
});


//Page Create

const btnCreate = document.getElementById('btn-create');
btnCreate.addEventListener('click', () => {
  document.querySelector('main.sobre-main').style.cssText = "display: none;"
  document.querySelector('main.create-page').style.cssText = "display: flex;"
  document.querySelector('main.home-page').style.display = 'none'
  document.querySelector('footer').style.display = 'none'
  document.querySelector('div.linha').style.cssText = 'right: 415px; width: 58px;'
})

const btnCreate1 = document.querySelector('#btn-create1');
btnCreate1.addEventListener('click', () => {
  document.querySelector('.mark-content2').style.cssText = "top:40px;"
  document.querySelector('.box-surgiu').style.cssText = "margin-top:0;"
});

const btnCreate2 = document.querySelector('#btn-create2');
btnCreate2.addEventListener('click', () => {
  document.querySelector('.mark-content2').style.cssText = "top:90px;"
  document.querySelector('.box-surgiu').style.cssText = "margin-top:calc(-100vh + 100px);"
});

const btnCreate3 = document.querySelector('#btn-create3');
btnCreate3.addEventListener('click', () => {
  document.querySelector('.mark-content2').style.cssText = "top:140px;"
  document.querySelector('.box-surgiu').style.cssText = "margin-top:calc(-200vh + 200px);"
});


//  MAIN SOBRE

const btnSobre = document.getElementById('btn-sobre')
btnSobre.addEventListener('click', () => {
  document.querySelector('main.create-page').style.cssText = "display: none;"
  document.querySelector('main.sobre-main').style.cssText = "display: flex;"
  document.querySelector('main.home-page').style.display = 'none'
  document.querySelector('footer').style.display = 'none'
  document.querySelector('div.linha').style.cssText = 'right: 320px; width: 45px;'
})

const btnSobre1 = document.querySelector('#btn-sobre1');
btnSobre1.addEventListener('click', () => {
  document.querySelector('.menu-sobre .mark-content').style.cssText = "top 0 ;";
  document.querySelector('.sobre-topico1').style.cssText = "margin-top: calc(0 - 0)"
});

const btnSobre2 = document.querySelector('#btn-sobre2');
btnSobre2.addEventListener('click', () => {
  document.querySelector('.menu-sobre .mark-content').style.cssText = "top:70px;";
  document.querySelector('.sobre-topico1').style.cssText = "margin-top: calc(-100vh + 100px);"
});

const btnSobre3 = document.querySelector('#btn-sobre3');
btnSobre3.addEventListener('click', () => {
  document.querySelector('.menu-sobre .mark-content').style.cssText = "top:120px;";
  document.querySelector('.sobre-topico1').style.cssText = "margin-top: calc(-200vh + 200px);"
});

const btnSobre4 = document.querySelector('#btn-sobre4');
btnSobre4.addEventListener('click', () => {
  document.querySelector('.menu-sobre .mark-content').style.cssText = "top:180px;";
  document.querySelector('.sobre-topico1').style.cssText = "margin-top: calc(-300vh + 300px);"
});

const btnSobre5 = document.querySelector('#btn-sobre5');
btnSobre5.addEventListener('click', () => {
  document.querySelector('.menu-sobre .mark-content').style.cssText = "top:230px;";
  document.querySelector('.sobre-topico1').style.cssText = "margin-top: calc(-400vh + 400px);"
});

const btnSobre6 = document.querySelector('#btn-sobre6');
btnSobre6.addEventListener('click', () => {
  document.querySelector('.menu-sobre .mark-content').style.cssText = "top:280px;";
  document.querySelector('.sobre-topico1').style.cssText = "margin-top: calc(-500vh + 500px);"
});

// Download

const btnDownload = document.getElementById('btn-download')
btnDownload.addEventListener('click', () => {
  document.querySelector('.container-downloadH').classList.toggle('container-downloadH-ativo')
})

// Home 

const btnHome = document.getElementById('home')
btnHome.addEventListener('click', () => {
  document.querySelector('.home-page').style.display = 'block'
  document.querySelector('.create-page').style.display = 'none'
  document.querySelector('.sobre-main').style.display = 'none'
  document.querySelector('footer').style.display = 'block'
  document.querySelector('div.linha').style.cssText = 'right: -5px; width: 25px;'
})

function btnHSobre1() {
  document.querySelector('main.create-page').style.cssText = "display: none;"
  document.querySelector('main.sobre-main').style.cssText = "display: flex;"
  document.querySelector('main.home-page').style.display = 'none'
  document.querySelector('footer').style.display = 'none'
  document.querySelector('div.linha').style.cssText = 'right: 320px; width: 45px;'
  document.querySelector('.menu-sobre .mark-content').style.cssText = "top 0 ;";
  document.querySelector('.sobre-topico1').style.cssText = "margin-top: calc(0 - 0)"
}

function btnHSobre2() {
  document.querySelector('main.create-page').style.cssText = "display: none;"
  document.querySelector('main.sobre-main').style.cssText = "display: flex;"
  document.querySelector('main.home-page').style.display = 'none'
  document.querySelector('footer').style.display = 'none'
  document.querySelector('div.linha').style.cssText = 'right: 320px; width: 45px;'
  document.querySelector('.menu-sobre .mark-content').style.cssText = "top:70px;"
  document.querySelector('.sobre-topico1').style.cssText = "margin-top: calc(-100vh + 100px);"
}

function btnHCreate1() {
  document.querySelector('main.sobre-main').style.cssText = "display: none;"
  document.querySelector('main.create-page').style.cssText = "display: flex;"
  document.querySelector('main.home-page').style.display = 'none'
  document.querySelector('footer').style.display = 'none'
  document.querySelector('div.linha').style.cssText = 'right: 415px; width: 58px;'
  document.querySelector('.mark-content2').style.cssText = "top:40px;"
  document.querySelector('.box-surgiu').style.cssText = "margin-top:0;"
}

function btnHCreate2() {
  document.querySelector('main.sobre-main').style.cssText = "display: none;"
  document.querySelector('main.create-page').style.cssText = "display: flex;"
  document.querySelector('main.home-page').style.display = 'none'
  document.querySelector('footer').style.display = 'none'
  document.querySelector('div.linha').style.cssText = 'right: 415px; width: 58px;'
  document.querySelector('.mark-content2').style.cssText = "top:90px;"
  document.querySelector('.box-surgiu').style.cssText = "margin-top:calc(-100vh + 100px);"
}

function btnHCreate3() {
  document.querySelector('main.sobre-main').style.cssText = "display: none;"
  document.querySelector('main.create-page').style.cssText = "display: flex;"
  document.querySelector('main.home-page').style.display = 'none'
  document.querySelector('footer').style.display = 'none'
  document.querySelector('div.linha').style.cssText = 'right: 415px; width: 58px;'
  document.querySelector('.mark-content2').style.cssText = "top:140px;"
  document.querySelector('.box-surgiu').style.cssText = "margin-top:calc(-200vh + 200px);"
}

//footer

let contador = 0

//whats

document.getElementById('whats').addEventListener('click', () => {
  if (contador == 10) {
    document.querySelector('.container-perfil').classList.remove('container-perfil-ativo')
    setTimeout(() => {
      document.querySelector('.btn-whats').classList.add('none')
      document.querySelectorAll('.btn-whats')[1].classList.add('none')
    }, 500)
    contador = 0
  } else if (contador == 20 || contador == 30) {
    document.querySelector('.btn-whats').classList.remove('none')
    document.querySelectorAll('.btn-whats')[1].classList.remove('none')
    document.querySelector('.btn-link').classList.add('none')
    document.querySelectorAll('.btn-link')[1].classList.add('none')
    document.querySelector('.btn-git').classList.add('none')
    document.querySelectorAll('.btn-git')[1].classList.add('none')
    contador = 10
  } else {
    document.querySelector('.container-perfil').classList.add('container-perfil-ativo')
    document.querySelector('.btn-whats').classList.remove('none')
    document.querySelectorAll('.btn-whats')[1].classList.remove('none')
    contador = 10
  }
})

//linkedin

document.getElementById('link').addEventListener('click', () => {
  if (contador == 20) {
    document.querySelector('.container-perfil').classList.remove('container-perfil-ativo')
    setTimeout(() => {
      document.querySelector('.btn-link').classList.add('none')
      document.querySelectorAll('.btn-link')[1].classList.add('none')
    }, 500)
    contador = 0
  } else if (contador == 10 || contador == 30) {
    document.querySelector('.btn-whats').classList.add('none')
    document.querySelectorAll('.btn-whats')[1].classList.add('none')
    document.querySelector('.btn-link').classList.remove('none')
    document.querySelectorAll('.btn-link')[1].classList.remove('none')
    document.querySelector('.btn-git').classList.add('none')
    document.querySelectorAll('.btn-git')[1].classList.add('none')
    contador = 20
  } else {
    document.querySelector('.container-perfil').classList.add('container-perfil-ativo')
    document.querySelector('.btn-link').classList.remove('none')
    document.querySelectorAll('.btn-link')[1].classList.remove('none')
    contador = 20
  }
})

//github

document.getElementById('git').addEventListener('click', () => {
  if (contador == 30) {
    document.querySelector('.container-perfil').classList.remove('container-perfil-ativo')
    setTimeout(() => {
      document.querySelector('.btn-git').classList.add('none')
      document.querySelectorAll('.btn-git')[1].classList.add('none')
    }, 500)
    contador = 0
  } else if (contador == 20 || contador == 10) {
    document.querySelector('.btn-whats').classList.add('none')
    document.querySelectorAll('.btn-whats')[1].classList.add('none')
    document.querySelector('.btn-link').classList.add('none')
    document.querySelectorAll('.btn-link')[1].classList.add('none')
    document.querySelector('.btn-git').classList.remove('none')
    document.querySelectorAll('.btn-git')[1].classList.remove('none')
    contador = 30
  } else {
    document.querySelector('.container-perfil').classList.add('container-perfil-ativo')
    document.querySelector('.btn-git').classList.remove('none')
    document.querySelectorAll('.btn-git')[1].classList.remove('none')
    contador = 30
  }
})