// 찜 버튼을 전부 가져오기
const btnList = document.querySelectorAll(".like-btn");

// 각 요소를 돌면서 해당 버튼에 클릭 처리하기
btnList.forEach((btn) => {
  btn.addEventListener("click", () => {
    let originData = [...btn.closest(".car-info").querySelectorAll("div > div")].slice(1).map(div => div.textContent.trim());
    console.log(originData);
  });
});



// // 각 요소를 돌면서 해당 버튼에 클릭 처리하기
// btnList.forEach((btn) => {
//   btn.addEventListener("click", function (event) {
//     // 각각의 버튼이 클릭 되었을때 자동차의 정보를 찾아 console.log 로 출력하기
//     let originData = this.closest(".car-info").querySelectorAll("div");
//     originData = Array.from(originData).slice(1).map(div => div.textContent.trim());
//     console.log(originData);
//   });
// });
