const toDoApp = Vue.createApp({
  data() {
    return {
      todos: [],
      lastTodo: ""
    }
  },
  methods: {
    plusTodo() {
      if (this.lastTodo) {
      this.todos.push({text: this.lastTodo, done: "✔", position: this.todos.length, dones: false});
      for (let value of this.todos) {
        localStorage.setItem(value.position, JSON.stringify(value));
      }
      this.lastTodo = "";
     }
    },
    removeTodo(index) {
      localStorage.removeItem(this.todos[index].position);
      this.todos.splice(index, 1);
    },
    doneTodo(index) {
        let el = document.querySelector(".a" + index);
        if (this.todos[index].done == "✔") {
          this.todos[index].done = "✗";
        } else {
          this.todos[index].done = "✔";
        }
        if (this.todos[index].dones) {
          this.todos[index].dones = false;
          el.classList.remove("checked");
        } else {
          this.todos[index].dones = true;
          el.classList.add("checked");
        }
         localStorage.setItem(this.todos[index].position, JSON.stringify(this.todos[index]));
        }
  },
  mounted() {
    if (localStorage.length) {
      for (let i = 0; i < localStorage.length; i++) {
        let key = localStorage.key(i);
        let value = JSON.parse(localStorage[key]);
        this.todos.push(value);
      }
    }
  }
}).mount("#toDoApp")
