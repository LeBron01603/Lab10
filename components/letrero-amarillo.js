class LetreroAmarillo extends HTMLElement {
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
            --bg-color: var(--amarillo, #e6b34a);
            --bloque-azul-bg: #3ec1d3;
            --bloque-morado-bg: #7d4ac7;
            font-family: 'Inter', 'Segoe UI', system-ui, sans-serif;
        }

        .letrero-amarillo {
            width: 440px;
            background: linear-gradient(145deg, var(--bg-color), #f5b041);
            padding: 35px 30px;
            border-radius: 20px;
            text-align: center;
            
            box-shadow: 0 15px 35px rgba(0,0,0,0.15), 0 5px 15px rgba(0,0,0,0.05);

            animation: entrada 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
            transition: transform 0.4s cubic-bezier(0.2, 0.8, 0.2, 1), box-shadow 0.4s ease;
        }

        .letrero-amarillo:hover {
            transform: translateY(-8px);
            box-shadow: 0 20px 40px rgba(0,0,0,0.2), 0 8px 20px rgba(0,0,0,0.1);
        }
        
        .contenido {
            display: flex;
            flex-direction: column;
            gap: 28px;
            align-items: center;
        }

        .titulo {
            display: flex;
            flex-direction: column;
            gap: 12px;
            margin: 0;
        }

        .bloque {
            display: inline-block;
            padding: 12px 20px;
            font-weight: 900;
            color: white;
            font-size: 26px;
            border-radius: 8px;
            letter-spacing: 1.5px;
            text-transform: uppercase;

            box-shadow: 0 8px 15px rgba(0,0,0,0.2);

            transition: all 0.3s ease;
        }

        .azul {
            background: var(--bloque-azul-bg);
            transform: rotate(-4deg);
            animation: flotar 3s infinite;
        }

        .morado {
            background: var(--bloque-morado-bg);
            transform: rotate(4deg);
            animation: flotar 3s infinite reverse;
        }

        .bloque:hover {
            transform: scale(1.1) rotate(0deg);
        }

        .mensaje {
            font-size: 18px;
            line-height: 1.5;
            text-align: center;
            font-weight: 500;
            margin: 0;
            color: #2c3e50;
        }

        .mensaje strong {
            font-weight: 900;
            font-size: 19px;
            color: #1a252f;
        }

        /* IMAGEN PERSONAS */

        .imagen-cartel {
            width: 100%;
            display: flex;
            justify-content: center;
        }

        .imagen-cartel img {
            width: 100%;
            height: auto;
            object-fit: cover;

            border-radius: 12px;
            box-shadow: 0 10px 25px rgba(0,0,0,0.1);

            transition: transform 0.4s ease, box-shadow 0.4s ease;
        }

        .imagen-cartel img:hover {
            transform: scale(1.04);
            box-shadow: 0 15px 35px rgba(0,0,0,0.2);
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

        @keyframes flotar {
            0% { transform: translateY(0) rotate(-4deg); }
            50% { transform: translateY(-6px) rotate(0deg); }
            100% { transform: translateY(0) rotate(-4deg); }
        }
      </style>
      
      <section class="letrero-amarillo" part="container">
          <div class="contenido">

              <h1 class="titulo">
                  <div part="title">
                      <slot name="title">
                          <span class="bloque azul">¡LA SEDE</span>
                      </slot>
                  </div>
                  <div part="subtitle">
                      <slot name="subtitle">
                          <span class="bloque morado">TE ACOMPAÑA!</span>
                      </slot>
                  </div>
              </h1>

              <div part="content">
                  <slot name="content">
                      <p class="mensaje">
                          El respeto no se negocia <br>
                          <strong>¡Pará ya de acosar!</strong>
                      </p>
                  </slot>
              </div>

              <div class="imagen-cartel" part="image">
                  <slot name="image">
                      <img src="images/personas.png" alt="">
                  </slot>
              </div>

          </div>
      </section>
    `;
    }
}

customElements.define('letrero-amarillo', LetreroAmarillo);
