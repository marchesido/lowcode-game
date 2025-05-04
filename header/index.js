class MyHeader extends HTMLElement {
    connectedCallback() {
      fetch('header/index.html')
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
  customElements.define('meu-header', MyHeader);