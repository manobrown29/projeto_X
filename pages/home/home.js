function armazenarValor(valor) {
    // Define o valor selecionado no localStorage
    localStorage.setItem("valorBotao", valor);

    // Redireciona para a outra página
    window.location.href = "../../pages/agenda/agenda.html";
}



