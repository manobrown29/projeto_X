function copiarValor() {
    // Recupera o valor do botão
    const valor = document.getElementById("botaoCopiar").value;

    // Usa a API Clipboard para copiar para a área de transferência
    navigator.clipboard.writeText(valor)
        .then(() => {
            alert("Valor copiado"); // Exibe uma mensagem de sucesso
        })
        .catch(err => {
            console.error("Erro ao copiar o valor: ", err); // Exibe o erro no console
        });
}