// -------------------------------------------- DECLARAÇÃO DE VARIAVEIS ----------------------------------------------------------------------

let container = document.querySelector("#container") as HTMLDivElement;
let rangeBackground = document.querySelector("#input-range") as HTMLInputElement;
let btnAcessar = document.querySelector("#btn-acessa") as HTMLButtonElement;
let btnCriarConta = document.querySelector("#btn-cadastrar") as HTMLButtonElement;
let formCadastro = document.querySelector("#formulario-cadastro") as HTMLFormElement;
let inputCadastroNome = document.querySelector("#input-cadastro-nome") as HTMLInputElement;
let inputCadastroEmail = document.querySelector("#input-cadastro-email") as HTMLInputElement;
let inputCadastroSenha = document.querySelector("#input-cadastro-senha") as HTMLInputElement;
let formLogin = document.querySelector("#formulario-login") as HTMLFormElement;
let inputLoginEmail = document.querySelector("#input-login-email") as HTMLInputElement;
let inputLoginSenha = document.querySelector("#input-login-senha") as HTMLInputElement;
let listaTextos: any[] = [];
interface User {
  nome: string;
  login: string;
  senha: string;
  recados: any[];
}

// -------------------------------------------- EVENTOS E CHAMADAS FUNÇÕES ----------------------------------------------------------------------

document.addEventListener("DOMContentLoaded", () => {
  let login = window.sessionStorage.getItem("login");
  if (login == "true") {
    window.location.href = "/public/home.html";
  }
});

rangeBackground.addEventListener("change", () => {
  mudaBackground();
});

btnAcessar.addEventListener("click", () => {
  container.classList.remove("painel-direito-ativo");
});
btnCriarConta.addEventListener("click", () => {
  container.classList.add("painel-direito-ativo");
});

formCadastro.addEventListener("submit", (e) => {
  e.preventDefault();
  verificaInputsCadastro();
});

formLogin.addEventListener("submit", (e) => {
  e.preventDefault();
  validaInputsLogin();
});

// -------------------------------------------- FUNÇÕES ---------------------------------------------------------------------------------------

// -------------------------------------------- FUNÇÕES DE GERAIS/ESTILO ----------------------------------------------------------------------

function mudaBackground() {
  let body = document.querySelector("body") as HTMLBodyElement;
  let rangeFundo = document.querySelector(".ul-range") as HTMLUListElement;
  let overlay = document.querySelector(".overlay") as HTMLDivElement;
  let valorRange: number = Number(rangeBackground.value);
  let btnRange = document.querySelector("#btn-background") as HTMLButtonElement;
  let btnFormCadastro = document.querySelector("#btn-form-cadastro") as HTMLButtonElement;
  let btnFormLogin = document.querySelector("#btn-form-login") as HTMLButtonElement;
  let linkSenha = document.querySelector("#link-senha") as HTMLLinkElement;
  coletaTextos();

  if (valorRange === 0) {
    body.classList.remove("background-range-1", "background-range-2");
    formCadastro.classList.remove("background-range-1", "background-range-2");
    formLogin.classList.remove("background-range-1", "background-range-2");
    container.classList.remove("container-range-1", "container-range-2");
    overlay.classList.remove("overlay-range-1", "overlay-range-2");
    btnFormCadastro.classList.remove("btns-forms-range-1", "btns-forms-range-2");
    btnFormLogin.classList.remove("btns-forms-range-1", "btns-forms-range-2");
    btnRange.classList.remove("btn-dropdown-range-range-1", "btn-dropdown-range-range-2");
    btnAcessar.classList.remove("btns-transparentes-range-1");
    btnCriarConta.classList.remove("btns-transparentes-range-1");

    body.classList.add("background-range-0");
    formCadastro.classList.add("background-range-0");
    formLogin.classList.add("background-range-0");
    rangeFundo.style.backgroundColor = "#ffff";
    container.classList.add("container-range-0");
    overlay.classList.add("overlay-range-0");
    btnFormCadastro.classList.add("btns-forms-range-0");
    btnFormLogin.classList.add("btns-forms-range-0");
    btnRange.classList.add("btn-dropdown-range-range-0");
    btnAcessar.classList.add("btns-transparentes-range-0");
    btnCriarConta.classList.add("btns-transparentes-range-0");
    linkSenha.style.color = "#000";

    for (var i = 0; i < listaTextos.length; i++) {
      listaTextos[i].classList.remove("textos-range-1");
      listaTextos[i].classList.add("textos-range-0");
    }
  } else if (valorRange === 1) {
    body.classList.remove("background-range-0", "background-range-2");
    formCadastro.classList.remove("background-range-0", "background-range-2");
    formLogin.classList.remove("background-range-0", "background-range-2");
    container.classList.remove("container-range-0", "container-range-2");
    overlay.classList.remove("overlay-range-0", "overlay-range-2");
    btnFormCadastro.classList.remove("btns-forms-range-0", "btns-forms-range-2");
    btnFormLogin.classList.remove("btns-forms-range-0", "btns-forms-range-2");
    btnRange.classList.remove("btn-dropdown-range-range-0", "btn-dropdown-range-range-2");
    btnAcessar.classList.remove("btns-transparentes-range-0");
    btnCriarConta.classList.remove("btns-transparentes-range-0");

    body.classList.add("background-range-1");
    formCadastro.classList.add("background-range-1");
    formLogin.classList.add("background-range-1");
    rangeFundo.style.backgroundColor = "#30383F";
    container.classList.add("container-range-1");
    overlay.classList.add("overlay-range-1");
    btnFormCadastro.classList.add("btns-forms-range-1");
    btnFormLogin.classList.add("btns-forms-range-1");
    btnRange.classList.add("btn-dropdown-range-range-1", "text-white");
    btnAcessar.classList.add("btns-transparentes-range-1");
    btnCriarConta.classList.add("btns-transparentes-range-1");
    linkSenha.style.color = "#dee2ed";

    for (var i = 0; i < listaTextos.length; i++) {
      listaTextos[i].classList.remove("textos-range-0");
      listaTextos[i].classList.add("textos-range-1");
    }
  } else if (valorRange === 2) {
    body.classList.remove("background-range-0", "background-range-1");
    formCadastro.classList.remove("background-range-0", "background-range-1");
    formLogin.classList.remove("background-range-0", "background-range-1");
    container.classList.remove("container-range-0", "container-range-1");
    overlay.classList.remove("overlay-range-0", "overlay-range-1");
    btnFormCadastro.classList.remove("btns-forms-range-0", "btns-forms-range-1");
    btnFormLogin.classList.remove("btns-forms-range-0", "btns-forms-range-1");
    btnRange.classList.remove("btn-dropdown-range-range-0", "btn-dropdown-range-range-1");
    btnAcessar.classList.remove("btns-transparentes-range-0");
    btnCriarConta.classList.remove("btns-transparentes-range-0");

    body.classList.add("background-range-2");
    formCadastro.classList.add("background-range-2");
    formLogin.classList.add("background-range-2");
    rangeFundo.style.backgroundColor = "#30383F";
    container.classList.add("container-range-2");
    overlay.classList.add("overlay-range-2");
    btnFormCadastro.classList.add("btns-forms-range-2");
    btnFormLogin.classList.add("btns-forms-range-2");
    btnRange.classList.add("btn-dropdown-range-range-2", "text-white");
    btnAcessar.classList.add("btns-transparentes-range-1");
    btnCriarConta.classList.add("btns-transparentes-range-1");
    linkSenha.style.color = "#dee2ed";

    for (var i = 0; i < listaTextos.length; i++) {
      listaTextos[i].classList.remove("textos-range-0");
      listaTextos[i].classList.add("textos-range-1");
    }
  }
}

function coletaTextos() {
  let paragrafos = document.querySelectorAll(".paragrafo") as NodeListOf<HTMLParagraphElement>;
  let titulos = document.querySelectorAll(".titulo") as NodeListOf<HTMLHeadingElement>;
  let textos = document.querySelectorAll(".textos") as NodeListOf<HTMLSpanElement>;

  for (let i = 0; i < paragrafos.length; i++) {
    listaTextos.push(paragrafos[i]);
  }
  for (let i = 0; i < titulos.length; i++) {
    listaTextos.push(titulos[i]);
  }
  for (let i = 0; i < textos.length; i++) {
    listaTextos.push(textos[i]);
  }
}

function buscarListaUser() {
  return JSON.parse(localStorage.getItem("usuario") || "[]");
}

// -------------------------------------------- FUNÇÕES CADASTRO ----------------------------------------------------------------------

function verificaInputsCadastro(): void {
  let validaCadastroNome: boolean = false;
  let validaCadastroEmail: boolean = false;
  let validaCadastroSenha: boolean = false;

  if (inputCadastroNome.value === "" || inputCadastroNome.value.length < 3) {
    inputCadastroNome.focus();
    inputCadastroNome.setAttribute("style", "outline-color: red");
  } else {
    inputCadastroNome.removeAttribute("style");
    validaCadastroNome = true;
  }
  if (inputCadastroEmail.value === "" || inputCadastroEmail.value.length < 10) {
    inputCadastroEmail.focus();
    inputCadastroEmail.setAttribute("style", "outline-color: red");
  } else {
    inputCadastroEmail.removeAttribute("style");
    validaCadastroEmail = true;
  }
  if (inputCadastroSenha.value === "" || inputCadastroSenha.value.length < 8) {
    inputCadastroSenha.focus();
    inputCadastroSenha.setAttribute("style", "outline-color: red");
  } else {
    inputCadastroSenha.removeAttribute("style");
    validaCadastroSenha = true;
  }
  if (validaCadastroNome && validaCadastroEmail && validaCadastroSenha) {
    cadastrarUser();
  }
}

function cadastrarUser() {
  let listaUser: User[] = buscarListaUser();
  let novoUser: User = {
    nome: inputCadastroNome.value,
    login: inputCadastroEmail.value,
    senha: inputCadastroSenha.value,
    recados: [],
  };
  let addUser = verificaUser(novoUser, listaUser);

  if (addUser) {
    adicionaUser(novoUser, listaUser);
  }
}

function verificaUser(novoUser: User, listaUser: User[]): boolean {
  let resposta: boolean = false;
  let userExiste: boolean = listaUser.some((user) => {return user.login === novoUser.login;});

  if (userExiste) {
    let confirma = confirm(
      "Este e-mail já está cadastrado. Deseja ir para a página de login?"
    );

    if (confirma) {
      container.classList.remove("painel-direito-ativo");
      formCadastro.reset();
    }
    resposta = false;
  } else {
    resposta = true;
  }
  return resposta;
}

function adicionaUser(novoUser: User, listaUser: User[]) {
  listaUser.push(novoUser);

  window.localStorage.setItem("usuario", JSON.stringify(listaUser));
  formCadastro.reset();

  setTimeout(() => {
    container.classList.remove("painel-direito-ativo");
  }, 1000);
}

// -------------------------------------------- FUNÇÕES LOGIN ----------------------------------------------------------------------

function validaInputsLogin() {
  if (inputLoginEmail.value === "") {
    inputLoginEmail.focus();
    inputLoginEmail.setAttribute("style", "outline-color: red");
  } else {
    inputLoginEmail.removeAttribute("style");
  }
  if (inputLoginSenha.value === "") {
    inputLoginSenha.focus();
    inputLoginSenha.setAttribute("style", "outline-color: red");
  } else {
    inputLoginSenha.removeAttribute("style");
  }

  logarNoSistema();
}

function logarNoSistema() {
  let usuarioLogando = {
    login: inputLoginEmail.value,
    senha: inputLoginSenha.value,
  };
  let listaUser: User[] = buscarListaUser();
  let userEmailExiste: boolean = listaUser.some((user) => {return user.login === usuarioLogando.login;});
  let userSenhaExiste: boolean = listaUser.some((user) => {return user.senha === usuarioLogando.senha;});
  let areaAlertaIndex = document.querySelector("#area-alerta-index-login") as HTMLDivElement;

  if (!userEmailExiste) {
    areaAlertaIndex.innerHTML = ` 
    <div class="alert alert-danger alert-dismissible" role="alert">
      <div>Não existe conta com este e-mail!</div>
      <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
    `;
    setTimeout(() => {
      areaAlertaIndex.innerHTML = "";
    }, 2500);
    return;
  } else {
    areaAlertaIndex.innerHTML = "";
  }
  if (!userSenhaExiste) {
    areaAlertaIndex.innerHTML = ` 
    <div class="alert alert-danger alert-dismissible" role="alert">
      <div>Senha incorreta!</div>
      <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
    `;
    setTimeout(() => {
      areaAlertaIndex.innerHTML = "";
    }, 2500);
    return;
  } else {
    areaAlertaIndex.innerHTML = "";
  }
  if (userEmailExiste && userSenhaExiste) {
    sessionStorage.setItem("usuarioLogado", inputLoginEmail.value);
    sessionStorage.setItem("background", rangeBackground.value);
    window.sessionStorage.setItem("login", "true");
    window.location.href = "./public/home.html";
  }
}
