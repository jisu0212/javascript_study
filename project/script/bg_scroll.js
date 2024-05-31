const btn = document.querySelectorAll('.btn')
const bg = document.querySelectorAll('.bg')
//btn[0] 클릭 시 bg[0] 위치로 스크롤 이동
/* btn[0].addEventListener('click',()=>{
    window.scrollTo(0, bg[0].offsetTop)
}) */
btn.forEach((t,i)=>{
    t.addEventListener('click',()=>{
        window.scrollTo(0, bg[i].offsetTop)
    })
})
// 상단 btn을 btn 말고 a로 구성했을때 a태그에 javascript event 적용 시 주의사항
//a태그는 고유의 href속성으로 특정 주소로 이동한다는 특징이 있어서 js click 이벤트연결을 하려고 하면 click 처리를 먼저 해야 하는지? href 속성 처리를 먼저 해야하는지? 구분을 못해서 스크롤이 위로 올라가는 문제가 생긴다.
//a태그에 js click 이벤트를 줄때 href속성의 기능을 막아야 정상 작동한다. 아래는 예시
/* nav_a[0].addEventListener('click',(e)=>{
    e.preventDefault() //a의 고유 이벤트(href속성) 막기
    window.scrollTo(0, bg[0].offsetTop)
}) */