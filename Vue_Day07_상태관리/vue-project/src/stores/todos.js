import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useTodosStore = defineStore('todos', () => {
  let id = 0  // 임시 변수 (변하는 값)

  // state
  const todos = ref([
    {id: id++, text: '잠자기', isDone: false},
    {id: id++, text: '밥먹기', isDone: false},
    {id: id++, text: '뷰복습', isDone: false},
  ])

  // action
  const addTodo = function (todoText) {
    todos.value.push({
      id: id++,
      text: todoText,  // 만약 파라미터 이름이 text였다면 실제로 text:text. es6문법으로는 text도 가능
      isDone: false
    })
  }

  const deleteTodo = function (id) {
    const idx = todos.value.findIndex((todo) => {
      return todo.id === id
    })
    todos.value.splice(idx, 1)
  }

  const updateTodo = function (id) {
    todos.value = todos.value.map((todo) => {
      if (todo.id == id) todo.isDone = !todo.isDone
      return todo
    })

    // 이런 식으로도 작성할 수 있음 (다양한 방법으로 생각해보기)
    // for (let i = 0; i < todos.value.length; i++) {
    //   if ()
    //   return 
    // }

  }

  // getters
  const doneTodoCount = computed(() => {
    return todos.value.filter((todo) => todo.isDone).length
  })




  return { todos, addTodo, deleteTodo, updateTodo, doneTodoCount }
}, {persist: true})
