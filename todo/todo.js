const toDoApp = Vue.createApp({
  data() {
    return {
      todos: [],
      lastTodo: "",
      selected: "Все"
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
      this.todos = this.todos.filter(t => !t.dones);
      localStorage.setItem("todo", JSON.stringify(this.todos));
    }
  },
  computed: {
    filters() {
      if (this.selected == "Все") {
        return this.todos;
      }
      if (this.selected == "Выполненные") {
        return this.todos.filter(t => t.dones);
      }
      if (this.selected == "Не выполненные") {
        return this.todos.filter(t => !t.dones);
      }
    }
  },
  mounted() {
      try {
        this.todos = JSON.parse(localStorage["todo"]);
      } catch (e) {
        alert("Что-то пошло не так!")
      }
  }
}).mount("#toDoApp")
