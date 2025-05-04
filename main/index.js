class MyMain extends HTMLElement {
    connectedCallback() {
      fetch('main/index.html')
        .then(response => response.text())
        .then(html => {
          this.innerHTML = html;
        })
        .catch(error => {
          console.error('Erro ao carregar o header:', error);
          this.innerHTML = '<p>Erro ao carregar o cabeçalho.</p>';
        });
    }
  }
  customElements.define('meu-main', MyMain);