const toDoApp = Vue.createApp({
  data() {
    return {
      todos: [],
      lastTodo: ""
    }
  },
  methods: {
    plusTodo() {
      this.lastTodo ? this.todos.push({text: this.lastTodo, done: "✔", dones: false, contenteditable: false}) : "";
      localStorage.setItem("todo", JSON.stringify(this.todos));
      this.lastTodo = "";
    },
    removeTodo(index) {
      this.todos.splice(index, 1);
      localStorage.setItem("todo", JSON.stringify(this.todos));
    },
    doneTodo(index) {
      thisTodo = this.todos[index];
      thisTodo.done = thisTodo.done == "✔" ? thisTodo.done = "✗" : thisTodo.done = "✔";
      thisTodo.dones = thisTodo.dones ? thisTodo.dones = false : thisTodo.dones = true;
      localStorage.setItem("todo", JSON.stringify(this.todos));
    },
    deleteAll() {
      this.todos.length = 0;
      localStorage.setItem("todo", JSON.stringify([]));
    },
    deleteDone() {
      function isDone(value) {
        return !value.dones
       };
      this.todos = this.todos.filter(isDone);
      localStorage.setItem("todo", JSON.stringify(this.todos));
    }
  },
  mounted() {
    if (localStorage["todo"]) {
        this.todos = JSON.parse(localStorage["todo"]);
    }
  }
}).mount("#toDoApp")
