// Exibe alerta ao clicar no botão
document.getElementById("alert-btn").addEventListener("click", function() {
    alert("Botão clicado!");
});

// Alternar Modo Escuro
document.getElementById("dark-mode-toggle").addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");
});

// Exibir mensagem no console ao enviar formulário
document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();
    console.log("Formulário enviado!");
    alert("Mensagem enviada com sucesso!");
});
