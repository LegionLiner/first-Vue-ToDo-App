const toDoApp = Vue.createApp({
  data() {
    return {
      todos: [],
      lastTodo: ""
    }
  },
  methods: {
    plusTodo() {
      if (this.lastTodo) { this.todos.push({text: this.lastTodo}); this.lastTodo = ""}
    },
    removeTodo(index) {
      this.todos.splice(index, 1)
    }
  }
}).mount("#toDoApp")
