// 모든 찜 버튼 선택
const buttons = document.querySelectorAll('.movie button');

// 각 버튼에 클릭 이벤트 리스너를 추가합니다.
buttons.forEach(button => {
  button.addEventListener('click', function() {
    // 현재 버튼의 부모 요소인 .movie를 찾습니다.
    const movieDiv = this.parentElement;
    // .movie 내의 모든 p 태그를 선택합니다.
    const paragraphs = movieDiv.querySelectorAll('p');
    
    // p 태그의 내용을 배열로 저장합니다.
    const movieInfo = Array.from(paragraphs).map(p => p.textContent);
    
    // 콘솔에 출력합니다.
    console.log(movieInfo);
  });
});