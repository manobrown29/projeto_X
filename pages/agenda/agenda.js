const campoData = document.getElementById("dataSelecionada");
const botao = document.getElementById("obterData");
const resultado = document.getElementById("resultado");

// Adiciona evento de clique ao botão
botao.addEventListener("click", function () {
  const valorData = campoData.value; // Obtém o valor do campo de data

  if (valorData) {
    resultado.textContent = `Data: ${valorData}`;
  } else {
    resultado.textContent = "Por favor, selecione uma data.";
  }
});

function trocarPagina() {
  window.location.href = "../../pages/dados/dados.html"; // URL de destino
}

// Aguarda o DOM carregar antes de executar o script
window.onload = function () {
  // Obtém o valor armazenado no localStorage
  const valor = localStorage.getItem("valorBotao");

  // Verifica o valor e exibe a mensagem correspondente
  if (valor === "Costas") {
      document.getElementById("valorExibido").textContent = "Costas - R$ 800,00";
  } else if (valor === "Braço") {
      document.getElementById("valorExibido").textContent = "Braço - R$ 600,00";
  } else {
      document.getElementById("valorExibido").textContent = "Nenhum valor válido encontrado.";
  }
};





