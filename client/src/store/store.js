import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import actions from './actions';

Vue.use(Vuex)
axios.defaults.baseURL = 'http://localhost:3000'

export default new Vuex.Store({
  state: {
    filter: 'all',
    tasks: []
  },
  getters: {
    remaining(state) {
      return state.tasks.filter(task => !task.completed).length
    },
    anyRemaining(state, getters) {
      return getters.remaining != 0
    },
    tasksFiltered(state) {
      if (state.filter == 'all') {
        return state.tasks
      } else if (state.filter == 'active') {
        return state.tasks.filter(task => !task.completed)
      } else if (state.filter == 'completed') {
        return state.tasks.filter(task => task.completed)
      }
      return state.tasks
    },
    showClearCompletedButton(state) {
      return state.tasks.filter(task => task.completed).length > 0
    }
  },
  //MUTATIONS
  mutations: {
    addTask(state, task) {
      state.tasks.push({
        id: task.id,
        title: task.title,
        completed: false,
        editing: false,
      })
    },

    updateTask(state, task) {
      const index = state.tasks.findIndex(item => item.id == task.id)
      state.tasks.splice(index, 1, {
        'id': task.id,
        'title': task.title,
        'completed': task.completed,
        'editing': task.editing,
      })
    },

    deleteTask(state, id) {
      const index = state.tasks.findIndex(item => item.id == id)
      console.log("c suppr")
      state.tasks.splice(index, 1)
    },

    checkAll(state, checked) {
      state.tasks.forEach(task => (task.completed = checked))
    },

    updateFilter(state, filter) {
      state.filter = filter
    },

    clearCompleted(state) {
      state.tasks = state.tasks.filter(task => !task.completed)
    },

    retrieveTasks(state, tasks) {
      state.tasks = tasks
    }
  },

  //ACTIONS
  actions: actions
})