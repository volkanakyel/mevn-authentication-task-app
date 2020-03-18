import axios from 'axios';

export default {
  retrieveTasks(context) {
    axios.get('/tasks')
      .then(response => {
        context.commit('retrieveTasks', response.data)
      })
      .catch(error => console.log(error))
  },

  addTask(context, task) {
    console.log(task);
    axios.post('/tasks', {
      title: task.title,
      completed: false,
    })
      .then(response => {
        context.commit('addTask', response.data)
      })
      .catch(error => console.log(error))

  },

  updateTask(context, task) {
    axios.put('/tasks/' + task.id, {
      title: task.title,
      completed: task.completed,
    })
      .then(response => {
        context.commit('updateTask', response.data)
      })
  },

  deleteTask(context, id) {
    console.log(id);
    axios.delete('/tasks/' + id)
      .then(response => {
        console.log(response);
        context.commit('deleteTask', id)
      })
      .catch(error => {
        console.log(error)
      })
  },

  registerUser(context, user) {
    axios.post('/users/register', {
      name: user.name,
      email: user.email,
      password: user.password,
    })
      .then(response => {
        context.commit('registerUser', response.data)
      })
      .catch(error => {
        console.log(error);
      })
  },

  checkAll(context, checked) {
    setTimeout(() => {
      context.commit('checkAll', checked)
    }, 100)
  },

  updateFilter(context, filter) {
    setTimeout(() => {
      context.commit('updateFilter', filter)
    }, 100)
  },

  clearCompleted(context) {
    setTimeout(() => {
      context.commit('clearCompleted')
    }, 100)
  }

}