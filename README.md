# Lab10: Modernización de Web Components

Este proyecto toma la base del "Lab9" y mejora la implementación interna de los Web Components (`letrero-azul` y `letrero-amarillo`) aplicando características modernas del estándar Web Components para hacerlos más encapsulados, personalizables y reutilizables.

## Conceptos Clave Implementados

1. **Shadow DOM**: Es una API que permite adjuntar un árbol DOM oculto e independiente a un elemento. Esto aísla la estructura HTML y los estilos (CSS) del componente para que no colisionen con los del resto del documento. En este proyecto, usamos `attachShadow({ mode: 'open' })` para habilitarlo.
2. **Slots**: Los `<slot>` actúan como marcadores de posición dentro del Shadow DOM. Permiten que el desarrollador que consume el componente inyecte su propio HTML desde fuera (el *Light DOM*), brindando flexibilidad extrema para cambiar el contenido interno sin alterar el componente original.
3. **CSS Variables (Custom Properties)**: Variables CSS definidas en el componente (usualmente en el selector `:host`) que permiten que estilos fundamentales (como colores y fondos) puedan ser sobrescritos desde el exterior de manera segura.
4. **CSS Parts**: El atributo `part` se le asigna a elementos internos dentro del Shadow DOM. Esto "expone" esos elementos para que puedan ser estilizados desde el documento principal usando el pseudo-elemento `::part()`, rompiendo la barrera de encapsulamiento sólo para los elementos permitidos.

---

## Cómo Personalizar los Componentes

### 1. Inyectando contenido con Slots
En lugar de depender del texto fijo, ahora puedes pasar el HTML que desees dentro del componente indicando el nombre del slot con el atributo `slot="..."`. Si omites el slot, se usará el contenido por defecto del componente.

```html
<letrero-azul>
    <!-- Sobrescribe los items -->
    <div slot="items">
        <div class="item">Laboratorio Nuevo <span>→</span></div>
        <div class="item">Sala de Reuniones <span>→</span></div>
    </div>
    
    <!-- Sobrescribe el footer -->
    <span slot="footer">Sede Personalizada</span>
</letrero-azul>
```

### 2. Modificando CSS Variables
Puedes cambiar colores rápidamente asignando nuevos valores a las variables CSS expuestas por el componente. Solo aplica una clase y redefine las variables.

```css
.mi-letrero {
    /* Variables disponibles en el letrero amarillo */
    --bg-color: #f1c40f; 
    --bloque-azul-bg: #e67e22;
    --bloque-morado-bg: #9b59b6;
}
```
```html
<letrero-amarillo class="mi-letrero"></letrero-amarillo>
```

### 3. Usando CSS Parts (`::part`)
Si necesitas cambiar un estilo interno más complejo (por ejemplo, el tamaño de la fuente, bordes, o alineación de una sección específica), usa `::part(nombre-de-la-parte)`.

```css
/* Cambiando el color y estilo del footer del letrero azul */
letrero-azul::part(footer) {
    color: red;
    font-size: 1.5rem;
    text-transform: uppercase;
}

/* Cambiando el fondo del mensaje en el letrero amarillo */
letrero-amarillo::part(mensaje) {
    background: white;
    padding: 10px;
    border-radius: 5px;
}
```

---

## Ejemplo Completo de Uso

A continuación se muestra un ejemplo combinando las tres técnicas:

**HTML (`index.html`)**
```html
<!-- Componente totalmente personalizado -->
<letrero-amarillo class="alerta-roja">
    
    <!-- SLOT: Título -->
    <div slot="titulo">
        <span class="bloque custom" style="background: red; display: inline-block; padding: 10px; color: white;">¡PELIGRO!</span>
    </div>
    
    <!-- SLOT: Mensaje -->
    <p slot="mensaje">
        Zona de acceso restringido.<br>
        <strong>Personal autorizado únicamente.</strong>
    </p>
    
</letrero-amarillo>
```

**CSS (`styles.css`)**
```css
/* Variables en el Host */
.alerta-roja {
    --bg-color: #ffcccc; /* Fondo del letrero general */
}

/* CSS Parts: Alterando el contenedor del mensaje inyectado por defecto o interno */
.alerta-roja::part(mensaje) {
    color: #900;
    font-size: 1.2rem;
    border: 2px solid red;
    padding: 15px;
}
```
