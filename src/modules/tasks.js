// src/modules/tasks.js
import { storage } from './storage.js';

/**
 * Módulo para la lógica de tareas.
 */
export const tasksManager = {
    tasks: storage.get('tasks') || [],

    addTask(taskName) {
        const task = { id: Date.now(), name: taskName, completed: false };
        this.tasks.push(task);
        this.saveTasks();
        return task;
    },

    getTasks() {
        return this.tasks;
    },

    saveTasks() {
        storage.set('tasks', this.tasks);
    }
};
