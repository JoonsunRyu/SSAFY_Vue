import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'
import router from "@/router"

const REST_API_URL = `http://localhost:8080/api-board/board`  // 주소 기본 세팅
export const useBoardStore = defineStore('board', () => {
  const boardList = ref([])  // 게시글 목록을 스토어에서 관리!
  const getBoardList = function() {
    axios.get(REST_API_URL)
    .then((response) => {
    // console.log(response.data)
    boardList.value = response.data
    })

    // catch, finally로 상세히 처리할 수도 있음
  }

  // 게시글 등록
  const createBoard = function(board) {
    // console.log(board)
    axios({
      url: REST_API_URL,
      method: 'POST',
      data: board  // JSON 형태로 바꾸지 않았지만, application/json으로 알아서 적용됨
    })

    .then(() => {
      console.log("완료")
      router.push({name: 'boardList'})
    })

    .catch(() => {
      console.log("실패")
    })
  }

  const board = ref({})
  const getBoard = function (id) {
    // axios 요청으로 가져오기
  }


  return { boardList, getBoardList, createBoard, getBoard }
})
