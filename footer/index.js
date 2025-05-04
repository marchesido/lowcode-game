class MyFooter extends HTMLElement {
    connectedCallback() {
      fetch('footer/index.html')
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
  customElements.define('meu-footer', MyFooter);