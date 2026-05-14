class LetreroAzul extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.shadowRoot.innerHTML = `
      <style>
        :host {
            display: block;
            --bg-color: var(--azul, #0d2f5b);
            --text-color: var(--blanco, #ffffff);
            --footer-bg: var(--gris, #e5e5e5);
            font-family: 'Inter', 'Segoe UI', system-ui, sans-serif;
        }

        .letrero-azul {
            width: 380px;
            background: linear-gradient(145deg, var(--bg-color), #1a5276);
            color: var(--text-color);
            display: flex;
            flex-direction: column;
            border-radius: 16px;
            overflow: hidden;
            box-shadow: 0 15px 35px rgba(0,0,0,0.2), 0 5px 15px rgba(0,0,0,0.1);

            animation: entrada 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
            transition: transform 0.4s cubic-bezier(0.2, 0.8, 0.2, 1), box-shadow 0.4s ease;
        }
        
        .letrero-azul:hover {
            transform: translateY(-6px);
            box-shadow: 0 20px 40px rgba(0,0,0,0.25), 0 8px 20px rgba(0,0,0,0.15);
        }

        .panel {
            display: grid;
            grid-template-rows: repeat(5, 1fr);
        }
        
        .item {
            padding: 20px 25px;
            font-size: 16px;
            font-weight: 500;
            border-bottom: 1px solid rgba(255,255,255,0.15);
            display: flex;
            justify-content: space-between;
            align-items: center;

            transition: all 0.3s ease;
        }

        .item:hover {
            background: rgba(255,255,255,0.15);
            transform: translateX(12px);
            letter-spacing: 0.5px;
        }

        .item span {
            transition: transform 0.3s ease;
        }

        .item:hover span {
            transform: translateX(6px);
        }
        
        .footer {
            background: linear-gradient(to right, var(--footer-bg), #d5d8dc);
            color: #2c3e50;
            text-align: center;
            padding: 16px;
            font-weight: 900;
            font-size: 16px;
            letter-spacing: 1px;
            text-transform: uppercase;
        }

        @keyframes entrada {
            from {
                opacity: 0;
                transform: translateY(25px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
      </style>

      <section class="letrero-azul" part="container">
          <div part="title"><slot name="title"></slot></div>
          <div part="subtitle"><slot name="subtitle"></slot></div>

          <div class="panel" part="content">
              <slot name="content">
                  <div class="item">Aulas 5, 6, 7 <span>→</span></div>
                  <div class="item">Apoyo Informático <span>→</span></div>
                  <div class="item">Servidores <span>→</span></div>
                  <div class="item">Laboratorio 1 y 2 <span>→</span></div>
                  <div class="item">Coordinación Informática Empresarial <span>→</span></div>
              </slot>
          </div>

          <div class="footer">UCR</div>
          <div part="image"><slot name="image"></slot></div>
      </section>
    `;
    }
}

customElements.define('letrero-azul', LetreroAzul);
