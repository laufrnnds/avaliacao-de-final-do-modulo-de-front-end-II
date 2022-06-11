"use strict";
// -------------------------------------------- DECLARAÇÃO DE VARIAVEIS ----------------------------------------------------------------------
let inputDescricao = document.querySelector("#input-descricao");
let inputDetalhamento = document.querySelector("#input-detalhamento");
let btnEnviarRecado = document.querySelector("#btn-envia-recado");
let btnAtualizarRecado = document.querySelector("#btn-atualizar-recado");
let btnSair = document.querySelector("#btn-sair");
let btnAdicionarNovoRecado = document.querySelector("#btn-novo-recado");
let modalRecadoNovo = new bootstrap.Modal("#modal-adicionar-recado");
let modalRecadoEditar = new bootstrap.Modal("#modal-editar-recado");
let confirma = false;
let listaTextosHome = [];
let listaBotoesHome = [];
// -------------------------------------------- EVENTOS E CHAMADAS FUNÇÕES ----------------------------------------------------------------------
document.addEventListener("DOMContentLoaded", () => {
    mostrarRecados();
    alteraBackground();
});
btnAdicionarNovoRecado.addEventListener("click", () => {
    let modaldoRecado = document.querySelector("#modal-adicionar-recado");
    modaldoRecado.classList.add("scale-up-ver-top");
});
btnEnviarRecado.addEventListener("click", () => {
    enviarRecado();
    let modaldoRecado = document.querySelector("#modal-adicionar-recado");
    modaldoRecado.classList.add("scale-up-ver-top");
    modalRecadoNovo.hide();
});
btnSair.addEventListener("click", logout);
// -------------------------------------------- FUNÇÕES ---------------------------------------------------------------------------------------
// -------------------------------------------- FUNÇÕES DE GERAIS/ESTILO ----------------------------------------------------------------------
function logout() {
    sessionStorage.setItem("login", "false");
    let loginUser = sessionStorage.getItem("login");
    if (loginUser == "false") {
        window.location.href = "/index.html";
    }
}
function alteraBackground() {
    let body = document.querySelector("body");
    let rangeValor = sessionStorage.getItem("background");
    let botaoSair = document.querySelector("#btn-sair");
    let botaoNovoRecado = document.querySelector("#btn-novo-recado");
    let bodyDoAccordion = document.querySelectorAll("#body-accordion");
    let listaAccordion = [];
    let hrDoAccordion = document.querySelectorAll("#item-do-acordion");
    let listaHrAccordion = [];
    let headerrDoAccordion = document.querySelectorAll("#header-accondion");
    let listaHeaderrAccordion = [];
    for (var i = 0; i < headerrDoAccordion.length; i++) {
        listaHeaderrAccordion.push(headerrDoAccordion[i]);
    }
    for (var i = 0; i < bodyDoAccordion.length; i++) {
        listaAccordion.push(bodyDoAccordion[i]);
    }
    for (var i = 0; i < hrDoAccordion.length; i++) {
        listaHrAccordion.push(hrDoAccordion[i]);
    }
    coletaTextosHome();
    coletaBotoesHome();
    if (rangeValor === "0") {
        body.classList.remove("background-range-1", "background-range-2");
        body.classList.add("background-range-0");
        botaoSair.classList.remove("btns-forms-range-1", "btns-forms-range-2");
        botaoSair.classList.add("btns-forms-range-0");
        botaoNovoRecado.classList.remove("btns-forms-range-1", "btns-forms-range-2");
        botaoNovoRecado.classList.remove("btns-forms-range-1", "btns-forms-range-2");
        botaoNovoRecado.classList.add("btns-forms-range-0");
        for (var i = 0; i < listaTextosHome.length; i++) {
            listaTextosHome[i].classList.remove("textos-range-1");
            listaTextosHome[i].classList.add("textos-range-0");
        }
        for (var i = 0; i < listaBotoesHome.length; i++) {
            listaBotoesHome[i].classList.remove("btns-forms-range-1", "btns-forms-range-2");
            listaBotoesHome[i].classList.add("btns-forms-range-0");
        }
        for (var i = 0; i < listaAccordion.length; i++) {
            listaAccordion[i].classList.remove("background-range-1");
            listaAccordion[i].classList.add("background-range-0");
        }
        for (var i = 0; i < listaHrAccordion.length; i++) {
            listaHrAccordion[i].classList.remove("background-range-1", "background-range-2");
            listaHrAccordion[i].classList.add("background-range-0");
        }
        for (var i = 0; i < listaHrAccordion.length; i++) {
            listaHrAccordion[i].classList.remove("text-dark");
            listaHrAccordion[i].classList.add("text-light");
        }
    }
    else if (rangeValor === "1") {
        body.classList.remove("background-range-0", "background-range-2");
        body.classList.add("background-range-1");
        botaoSair.classList.remove("btns-forms-range-0", "btns-forms-range-2");
        botaoSair.classList.add("btns-forms-range-1");
        botaoNovoRecado.classList.remove("btns-forms-range-0", "btns-forms-range-2");
        botaoNovoRecado.classList.remove("btns-forms-range-0", "btns-forms-range-2");
        botaoNovoRecado.classList.add("btns-forms-range-1");
        for (var i = 0; i < listaTextosHome.length; i++) {
            listaTextosHome[i].classList.remove("textos-range-0");
            listaTextosHome[i].classList.add("textos-range-1");
        }
        for (var i = 0; i < listaBotoesHome.length; i++) {
            listaBotoesHome[i].classList.remove("btns-forms-range-0", "btns-forms-range-2");
            listaBotoesHome[i].classList.add("btns-forms-range-1");
        }
        for (var i = 0; i < listaHrAccordion.length; i++) {
            listaHrAccordion[i].classList.remove("background-range-0", "background-range-2");
            listaHrAccordion[i].classList.add("background-range-1");
        }
        for (var i = 0; i < listaAccordion.length; i++) {
            listaAccordion[i].classList.remove("background-range-0");
            listaAccordion[i].classList.add("background-range-1");
        }
        for (var i = 0; i < listaHrAccordion.length; i++) {
            listaHrAccordion[i].classList.remove("text-dark");
            listaHrAccordion[i].classList.add("text-light");
        }
    }
    else if (rangeValor === "2") {
        body.classList.remove("background-range-0", "background-range-1");
        body.classList.add("background-range-2");
        botaoSair.classList.remove("btns-forms-range-0", "btns-forms-range-1");
        botaoSair.classList.add("btns-forms-range-2");
        botaoNovoRecado.classList.remove("btns-forms-range-0", "btns-forms-range-1");
        botaoNovoRecado.classList.remove("btns-forms-range-0", "btns-forms-range-1");
        botaoNovoRecado.classList.add("btns-forms-range-2");
        for (var i = 0; i < listaTextosHome.length; i++) {
            listaTextosHome[i].classList.remove("textos-range-0");
            listaTextosHome[i].classList.add("textos-range-1");
        }
        for (var i = 0; i < listaBotoesHome.length; i++) {
            listaBotoesHome[i].classList.remove("btns-forms-range-0", "btns-forms-range-1");
            listaBotoesHome[i].classList.add("btns-forms-range-2");
        }
        for (var i = 0; i < listaAccordion.length; i++) {
            listaAccordion[i].classList.remove("background-range-0");
            listaAccordion[i].classList.add("background-range-1");
        }
        for (var i = 0; i < listaHrAccordion.length; i++) {
            listaHrAccordion[i].classList.remove("background-range-1", "background-range-0");
            listaHrAccordion[i].classList.add("background-range-2");
        }
        for (var i = 0; i < listaHrAccordion.length; i++) {
            listaHrAccordion[i].classList.remove("text-dark");
            listaHrAccordion[i].classList.add("text-light");
        }
    }
}
function coletaTextosHome() {
    let detalhamentoRecados = document.querySelectorAll(".detalhamento-recado");
    let descricaoRecados = document.querySelectorAll(".descricao-titulo-recado");
    let dataRecados = document.querySelectorAll(".data-recado");
    let tituloHome = document.querySelector("#home-titulo");
    listaTextosHome.push(tituloHome);
    for (let i = 0; i < detalhamentoRecados.length; i++) {
        listaTextosHome.push(detalhamentoRecados[i]);
    }
    for (let i = 0; i < descricaoRecados.length; i++) {
        listaTextosHome.push(descricaoRecados[i]);
    }
    for (let i = 0; i < dataRecados.length; i++) {
        listaTextosHome.push(dataRecados[i]);
    }
}
function coletaBotoesHome() {
    let botaoEditar = document.querySelectorAll(".btn-edita");
    let botaoApagar = document.querySelectorAll(".btn-apaga");
    let botaoAccordion = document.querySelectorAll(".btn-accordion");
    for (let i = 0; i < botaoEditar.length; i++) {
        listaBotoesHome.push(botaoEditar[i]);
    }
    for (let i = 0; i < botaoApagar.length; i++) {
        listaBotoesHome.push(botaoApagar[i]);
    }
    for (let i = 0; i < botaoAccordion.length; i++) {
        listaBotoesHome.push(botaoAccordion[i]);
    }
}
function criaRecados(recadosUser, index) {
    let recado = recadosUser[index];
    let numero = Number(index) + 1;
    let divPai = document.querySelector("#mostrar-recados");
    let containerAccordion = document.createElement("div");
    containerAccordion.setAttribute("class", "accordion accordion-flush");
    containerAccordion.setAttribute("id", `container-accordion-${index}`);
    let itemAccordion = document.createElement("div");
    itemAccordion.setAttribute("class", "accordion-item");
    itemAccordion.setAttribute("id", "item-do-acordion");
    let headerAccordion = document.createElement("div");
    headerAccordion.setAttribute("class", "accordion-header");
    headerAccordion.setAttribute("id", "header-accondion");
    headerAccordion.innerHTML = `
    <button type="button" class="accordion-button collapsed fw-bold btn-accordion" data-bs-toggle="collapse" data-bs-target="#flush-collapse${index}" aria-expanded="false" aria-controls="flush-collapse${index}"> 
      ${numero}º Recado
    </button>
  `;
    let divRecado = document.createElement("div");
    divRecado.setAttribute("class", "accordion-collapse collapse");
    divRecado.setAttribute("id", `flush-collapse${index}`);
    divRecado.setAttribute("aria-labelledby", "header-accondion");
    divRecado.setAttribute("data-bs-parent", "#container-accordion");
    let bodyAccordion = document.createElement("div");
    bodyAccordion.setAttribute("class", "accordion-body");
    bodyAccordion.setAttribute("id", "body-accordion");
    bodyAccordion.innerHTML = `
    <h5 class="h5 fw-bolder descricao-titulo-recado" id="descricao-titulo-recado-${index}">${recado.descricao}</h5>
    <span class="data-recado" id="data-recado-${index}"><em>${recado.data}</em></span>
    <hr id="hr-accordion">
    <p class="detalhamento-recado" id="detalhamento-recado-${index}">
      ${recado.detalhamento}
    </p>
    <div>
      <button type="button" class="btn fs-5 btn-edita" id="btn-edita-${index}" onclick="editarRecado(${index})" data-bs-toggle="modal" data-bs-target="#modal-editar-recado" data-bs-whatever="@mdo">
        <i class="bi bi-pencil-square"></i>
      </button>                    
      <button class="btn fs-5 btn-apaga" onclick="apagarRecado(${index})" id="btn-apaga-${index}">
        <i class="bi bi-trash-fill"></i>
      </button>
  `;
    divPai.appendChild(containerAccordion);
    containerAccordion.appendChild(itemAccordion);
    itemAccordion.appendChild(headerAccordion);
    itemAccordion.appendChild(divRecado);
    divRecado.appendChild(bodyAccordion);
}
function mostrarRecados() {
    let emailLogado = sessionStorage.getItem("usuarioLogado");
    let listaUser = buscarListaDeUsers();
    let userIndex = listaUser.findIndex((user) => {
        return user.login === emailLogado;
    });
    let recadosUser = buscaUserRecados(listaUser, userIndex);
    let nomeUser = listaUser[userIndex].nome;
    let titulo = document.querySelector("#home-titulo");
    let areaAlerta = document.querySelector("#area-alerta");
    nomeUser[0].toUpperCase() + nomeUser.substring(1);
    titulo.innerHTML = `Boas-vindas ${nomeUser}`;
    if (recadosUser.length > 0) {
        for (const index in recadosUser) {
            let indice = Number(index);
            criaRecados(recadosUser, indice);
            areaAlerta.innerHTML = "";
        }
    }
    else {
        areaAlerta.innerHTML = `
    <div class="alert alert-secondary alert-dismissible" role="alert">
      <div>Você não tem recados!</div>
      <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
  `;
    }
}
// -------------------------------------------- FUNÇÕES DOS RECADOS ----------------------------------------------------------------------
function enviarRecado() {
    let listaUser = buscarListaDeUsers();
    let emailLogado = sessionStorage.getItem("usuarioLogado");
    let userIndex = listaUser.findIndex((user) => { return user.login === emailLogado; });
    let recadosUser = buscaUserRecados(listaUser, userIndex);
    let dataAtual = new Date();
    let dia = dataAtual.getDate();
    let mes = dataAtual.getMonth() + 1;
    let ano = dataAtual.getFullYear();
    let horas = dataAtual.getHours();
    let minutos = dataAtual.getMinutes();
    let listaRecados = buscaUserRecados(listaUser, userIndex);
    let tamanhoListaRecados = Number(listaRecados.length);
    let indiceNovoRecado = tamanhoListaRecados + 1;
    let recadoNovo = {
        indice: indiceNovoRecado,
        descricao: inputDescricao.value,
        detalhamento: inputDetalhamento.value,
        data: `Criado em ${dia}/${mes}/${ano} às ${horas}:${minutos}h.`,
    };
    if (inputDescricao.value !== "" && inputDetalhamento.value !== "") {
        let areaAlerta = document.querySelector("#area-alerta");
        listaUser[userIndex].recados.push(recadoNovo);
        atualizaUser(listaUser);
        criaRecados(listaRecados, tamanhoListaRecados);
        areaAlerta.innerHTML = `
      <div class="alert alert-success alert-dismissible" role="alert">
        <div>Recado Adicionado</div>
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
      </div>
    `;
        setTimeout(() => {
            areaAlerta.innerHTML = "";
        }, 2500);
    }
    else {
        inputDescricao.value = "";
        inputDetalhamento.value = "";
    }
}
function editarRecado(indice) {
    let modaldoRecadoEditar = document.querySelector("#modal-editar-recado");
    modaldoRecadoEditar.classList.add("scale-up-ver-top");
    let listaUser = buscarListaDeUsers();
    let emailLogado = sessionStorage.getItem("usuarioLogado");
    let userIndex = listaUser.findIndex((user) => { return user.login === emailLogado; });
    let listaRecados = buscaUserRecados(listaUser, userIndex);
    let inputDescricaoEditar = document.querySelector("#input-descricao-editar");
    let inputDetalhamentoEditar = document.querySelector("#input-detalhamento-editar");
    let descricaoAnterior = listaRecados[indice].descricao;
    let detalhamentoAnterior = listaRecados[indice].detalhamento;
    inputDescricaoEditar.value = descricaoAnterior;
    inputDetalhamentoEditar.value = detalhamentoAnterior;
    btnAtualizarRecado.setAttribute("onclick", `atualizaRecado(${indice})`);
}
function atualizaRecado(indice) {
    let listaUser = buscarListaDeUsers();
    let emailLogado = sessionStorage.getItem("usuarioLogado");
    let inputDescricaoEditar = document.querySelector("#input-descricao-editar");
    let inputDetalhamentoEditar = document.querySelector("#input-detalhamento-editar");
    let userIndex = listaUser.findIndex((user) => { return user.login === emailLogado; });
    let listaRecados = buscaUserRecados(listaUser, userIndex);
    let dataAtual = new Date();
    let dia = dataAtual.getDate();
    let mes = dataAtual.getMonth() + 1;
    let ano = dataAtual.getFullYear();
    let horas = dataAtual.getHours();
    let minutos = dataAtual.getMinutes();
    let dataAtualRecado = `<em>Criado em ${dia}/${mes}/${ano} às ${horas}:${minutos}h.</em>`;
    listaRecados[indice].descricao = inputDescricaoEditar.value;
    listaRecados[indice].detalhamento = inputDetalhamentoEditar.value;
    listaRecados[indice].data = dataAtualRecado;
    atualizaUser(listaUser);
    let tituloRecado = document.querySelector(`#descricao-titulo-recado-${indice}`);
    let dataRecado = document.querySelector(`#data-recado-${indice}`);
    let textoRecado = document.querySelector(`#detalhamento-recado-${indice}`);
    let areaAlerta = document.querySelector("#area-alerta");
    tituloRecado.innerHTML = `${inputDescricaoEditar.value}`;
    textoRecado.innerHTML = `${inputDetalhamentoEditar.value}`;
    dataRecado.innerHTML = `${dataAtualRecado}`;
    areaAlerta.innerHTML = ` 
    <div class="alert alert-warning alert-dismissible" role="alert">
      <div>Recado Editado</div>
      <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
  `;
    setTimeout(() => {
        areaAlerta.innerHTML = "";
    }, 2500);
}
function apagarRecado(indice) {
    let emailLogado = sessionStorage.getItem("usuarioLogado");
    let listaUser = buscarListaDeUsers();
    let userIndex = listaUser.findIndex((user) => { return user.login === emailLogado; });
    let listaRecados = buscaUserRecados(listaUser, userIndex);
    let divPai = document.querySelector("#mostrar-recados");
    let apagaAcordion = document.querySelector(`#container-accordion-${indice}`);
    let areaAlerta = document.querySelector("#area-alerta");
    listaRecados.splice(indice, 1);
    atualizaUser(listaUser);
    divPai.removeChild(apagaAcordion);
    if (listaRecados.length > 0) {
        areaAlerta.innerHTML = ` 
    <div class="alert alert-danger alert-dismissible" role="alert">
      <div>Recado Apagado</div>
      <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
  `;
        setTimeout(() => {
            areaAlerta.innerHTML = "";
        }, 2500);
    }
    else {
        areaAlerta.innerHTML = `
    <div class="alert alert-secondary alert-dismissible" role="alert">
      <div>Você não tem recados!</div>
      <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
  `;
    }
}
function buscarListaDeUsers() {
    return JSON.parse(localStorage.getItem("usuario") || "[]");
}
function buscaUserRecados(listaUser, userIndex) {
    return listaUser[userIndex].recados;
}
function atualizaUser(listaUser) {
    return window.localStorage.setItem("usuario", JSON.stringify(listaUser));
}
