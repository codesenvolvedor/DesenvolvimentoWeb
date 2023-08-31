document.addEventListener("DOMContentLoaded", function() {
    // Seleciona todos os elementos com a classe "link-box"
    var links = document.querySelectorAll(".link-box");
  
    // Itera sobre cada link
    links.forEach(function(link) {
      link.addEventListener("click", function(event) {
        // Impede o comportamento padrão do link (abrir o link na mesma página)
        event.preventDefault();
  
        // Obtém o valor do atributo "href" para a URL do link
        var url = link.getAttribute("href");
  
        // Abre um novo aba com a URL
        window.open(url, "_blank");
      });
    });
  });
  <script src="script.js"></script>