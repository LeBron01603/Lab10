// src/app.js

// 1. Importar módulos de lógica (Separación de responsabilidades)
import { storage } from './modules/storage.js';
import { tasksManager } from './modules/tasks.js';
import { ui } from './modules/ui.js';

// Inicializar la lógica si es necesario
ui.init();
console.log('App logic initialized. Tasks:', tasksManager.getTasks());

// 2. Importar Web Components (UI Encapsulada)
import './components/letrero-azul.js';
import './components/letrero-amarillo.js';

console.log('Web Components registrados correctamente.');
