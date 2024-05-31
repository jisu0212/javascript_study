const a = document.querySelectorAll('.link a')
const a2 = document.querySelectorAll('.link2 a')
const bg = document.querySelectorAll('.bg')
a.forEach((t,i)=>{
    t.addEventListener('click',function(e){
        e.preventDefault()
        window.scrollTo(0, bg[i].offsetTop);
    })
})

//(스크롤 전) 첫번째 a에 대한 활성화 표시
a2[0].classList.add('active')
//(스크롤 후) 스크롤 위치에 따라 활성화 변경
window.addEventListener('scroll',(e)=>{
    e.preventDefault()
    a2.forEach((target, index)=>{
        if(bg[index].getBoundingClientRect().y <= 400){
            //active 쌓임 방지 초기화 함수 호출
            active_reset()
            //active 활성화 classList
            target.classList.add('active')
        }
        //console.log(target, index)
    })
})
//active 쌓임 방지 초기화 함수 생성
function active_reset(){
    for(let i of a2){i.classList.remove('active')}
/*     a2[0].classList.remove('active')
    a2[1].classList.remove('active')
    a2[2].classList.remove('active')
    a2[3].classList.remove('active') */
}
//마우스 따라다니는 이벤트
const circle = document.querySelector('.mouse')
console.log(circle)
window.addEventListener('mousemove',(e)=>{
    console.log(e.clientX, e.clientY)
    circle.style.left = `${e.clientX}px`
    circle.style.top = `${e.clientY}px`
})
/* 
window mousemove 좌표 인식하는 매개변수 종류
1. screenX, Y : 사용자 모니터 화면 기준으로 좌표 표시
2. clientX, Y : 웹브라우저의 뷰포트 크기 기준으로 좌표 표시
3. offsetX, Y : 객체(노드) 위치 기준으로 좌표 표시
4. pageX, Y : 전체 세로 길이 포함 문서 기준으로 좌표 표시
*/