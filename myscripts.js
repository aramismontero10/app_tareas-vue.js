var taskApp = new Vue({
  el: '#taskApp',
  data: {
    tasks: [
      {
        title: 'task1',
        done: true
      },
      {
        title: 'task2',
        done: false
      }
    ]
  },
  methods: {
    addTask: function (e) {
      e.preventDefault();
      this.tasks.push({
        title: this.tasks.title,
        done: false
      });
    this.tasks.title = '';
    },
    deleteTask: function (task) {
      this.tasks.splice(
        this.tasks.indexOf(task),
        1
      )
    }
  }
});