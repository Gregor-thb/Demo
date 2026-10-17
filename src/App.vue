<script setup>
import { ref, computed } from 'vue'
import { countTasks, addTask } from './components/tasks.js'
/*import ButtonCounter from './components/ButtonCounter.vue'
import Greetings from './components/Greetings.vue'
import ToggleButton from './components/ToggleButton.vue'
*/
const tasks = ref([])
const newTitle = ref('')

const total = computed(() => countTasks(tasks.value))
const completed = computed(
  () => tasks.value.filter(task => task.done).length
)

function submitTask() {
  tasks.value = addTask(tasks.value, newTitle.value)
  if (newTitle.value.trim()) {
    newTitle.value = ''
  }
}
</script>

<template>
  <main class="app">
    <h1>Mein Task Tracker</h1>
    <p>Meine erste CI/CD-Web-App mit Vue</p>

    <form @submit.prevent="submitTask">
      <input
        v-model="newTitle"
        placeholder="Neue Aufgabe eingeben..."
        aria-label="Neue Aufgabe"
      />
      <button type="submit">Hinzufügen</button>
    </form>

    <p>{{ completed }} von {{ total }} Aufgaben erledigt</p>

    <ul>
      <li v-for="task in tasks" :key="task.id">
        <label>
          <input type="checkbox" v-model="task.done" />
          <span :class="{ done: task.done }">
            {{ task.title }}
          </span>
        </label>
      </li>
    </ul>

    <p v-if="tasks.length === 0">
      Noch keine Aufgaben. Füge deine erste hinzu!
    </p>
  </main>
</template>

<style>
body {
  margin: 0;
  font-family: system-ui, sans-serif;
  background: #f3f4f6;
  color: #1f2937;
}

.app {
  max-width: 600px;
  margin: 60px auto;
  padding: 24px;
  background: white;
  border-radius: 16px;
  box-shadow: 0 8px 30px #00000012;
}

form {
  display: flex;
  gap: 8px;
}

input:not([type="checkbox"]) {
  flex: 1;
  min-width: 0;
  padding: 10px;
}

button {
  padding: 10px 16px;
  cursor: pointer;
}

li {
  margin: 12px 0;
}

.done {
  text-decoration: line-through;
  color: #6b7280;
}
</style>
