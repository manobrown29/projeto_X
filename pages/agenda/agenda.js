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

// Obtém a data de hoje no formato YYYY-MM-DD
const today = new Date().toISOString().split("T")[0];
const dateInput = document.getElementById("date");

// Configura o valor mínimo no input
dateInput.min = today;

// Valida a data selecionada
dateInput.addEventListener("change", function () {
    if (dateInput.value < today) {
        alert("Não há datas disponíveis no passado. Por favor, escolha uma data futura.");
        dateInput.value = ""; // Reseta o valor do campo
    }
});

 // Seleciona todos os checkboxes
 const checkboxes = document.querySelectorAll('.exclusive-checkbox');

 checkboxes.forEach(checkbox => {
   checkbox.addEventListener('change', () => {
     // Desmarca todos os outros checkboxes
     if (checkbox.checked) {
       checkboxes.forEach(cb => {
         if (cb !== checkbox) cb.checked = false;
       });
     }
   });
 });

