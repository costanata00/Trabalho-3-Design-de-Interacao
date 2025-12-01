class MyNav extends HTMLElement {

    constructor() {
        super();
        let shadowRoot = this.attachShadow({mode: 'open'});
        this.buildMenu(shadowRoot);
                
        
    }
    async buildMenu(shadowRoot) {
        const menuHTML = await this.fetchMenu();
        shadowRoot.innerHTML = menuHTML;
        const menuItens = await this.fetchMenuItens();
        this.renderMenu(menuItens);
    }
    async fetchMenu() {
        const response = await fetch('./js/menu/menu.html');
        const data = await response.text();
        return data;
    }
    async fetchMenuItens() {
        const response = await fetch('./js/menu/menu.json');
        const data = await response.json();
        return data;
    }
    
    renderMenu(menuItems) {
        const nav = this.shadowRoot.querySelector('nav');
        menuItems.forEach(item => {
            let link=`<a href="${item.href}">${item.label}</a>`;
            nav.innerHTML += link;
        });
    }
}
customElements.define('my-nav', MyNav);