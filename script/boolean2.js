//올바른 id, pw => admin, 1234
let userid = 'admim';
let userpw = 1234;
/* if(userid == 'admin'){
    console.log('로그인 성공')
}else{
    console.log('로그인 실패')
} */
// 삼항조건연산자 => 조건식 ? 참실행 : 거짓실행
let result = userid == 'admin' ? '로그인 성공' : '로그인 실패'
console.log(result)
console.log('----------------------------')
// if, else ver1 userpw
/* if(userpw != 1234){
    console.log('로그인 실패')
}else{
    console.log('로그인 성공')
} */
// 삼항 조건 ver2 userpw
let result2 = userpw != 1234 ? '로그인 실패' : '로그인 성공'
console.log(result2)
//-----------------논리연산+
// &&(and) 모두 참일 때 참
// ||(or) 하나라도 참이면 참
console.log('----------------------------')
// if(비교연산 논리연산 비교연산)
// if(비교연산 논리연산 (비교 논리 비교))
if(userid == 'admin' && userpw == 1234){
    console.log('로그인 성공')
}else{
    console.log('로그인 실패')
}
console.log('----------------------------')
/* let num = prompt('1~20 사이 중 좋아하는 수를 입력하세요') */
let num = 5
// num이 받은 숫자가 10보다 작으면 '10 이하입니다'
// 아니면 '11 이상입니다' 출력
if (num >= 1 && num <= 10){
    console.log('10 이하입니다')
}else{
    console.log('10 이상입니다')
}
console.log('----------------------------')
// 거짓일때 추가 조건을 만들고 싶다면? else if(개수제한 없음)
/*
if(조건식1){
    조건식 1이 참일 때 실행결과
}else if(조건식2){
    조건식1은 거짓이고 조건식 2가 참일 때 실행결과
}else if(조건식3){
    조건식1, 조건식2 모두 거짓이고 조건식3 참일때 실행결과
}else {
    조건식1,2,3 모두 거짓일 때 자동 실행(마지막엔 else 하나만 쓸 수 있다. else if 안됨!)
}
*/
//위 아래 왼쪽 오른쪽 게임 캐릭터 이동 게임
const move = "위쪽"
/* if(game_move == "왼쪽"){
    console.log('왼쪽 1칸 이동')
}else if(game_move == '오른쪽'){
    console.log('오른쪽 1칸 이동')
}else if(game_move == '위쪽'){
    console.log('위쪽 1칸 이동')
}else if(game_move == '아래쪽'){
    console.log('아래쪽 1칸 이동')
}else {
    console.log('잘못 입력하셨습니다')
} */
//논리연산을 이용한 간편한 처리 방법
// if(){}else{}
// if(){}
if(move=='왼쪽' || move=='오른쪽' || move=='위쪽' || move=='아래쪽'){
    console.log(`${move} 1칸 이동`)
}else{
    console.log('잘못 입력하셨습니다')
}
console.log('----------------------------')
//키오스크 소스 선택
//설탕, 케챱, 머스타드
//위 3개 중 하나의 소스를 선택하면 "OO 소스 추가"
//"소스 선택 안 하셨습니다"
const source = "설탕"
if (source == "설탕" || source == "케챱" || source == "머스타드"){
    console.log(`${source} 소스 추가`)
}else{
    console.log('소스 선택 안 하셨습니다')
}
//if, else if, else 연습문제
//A~F 점수에 따라 평균 등급
//0~100 사이 입력하세요.
//90~100 A
//80~89 B
//70~79 C
//60~69 D
//59 이하면 F
//0~100사이가 아닌 잘못된 숫자 입력 시 '오류발생'
//A~F 결과기준 출력 예시 =>"당신의 점수는 ?학점입니다"
let score = 98
let total = ''
/* if(score <= 100 && score >= 90){
    total = 'A'
}else if (score <= 89 && score >= 80){
    total = 'B'
}else if (score <= 79 && score >= 70){
    total = 'C'
}else if (score <= 69 && score >= 60){
    total = 'D'
}else if (score <= 59 && score >= 0){
    total = 'F'
}else {
    total = '오류'
} */
if(score > 0 && score < 101){
    //1~100 참으로 인식하는 위치
    if(score >=90){//100~90
        total = "A"
    }else if(score >= 80){//89~80
        total = "B"
    }else if(score >= 70){//79~70
        total = "C"
    }else if(score >= 60){//69~60
        total = "D"
    }else if(score >= 1 && score <= 59){//59~1
        total = "F"
    }
}else{
    alert('잘못 입력하셨습니다')
}
console.log(`당신의 점수는 ${total}학점입니다`)
//----------------------------------------
const birthday_flower = [
    {
        month:1,
        flower:'수선화',
        content:'자기애, 자존심, 외로움',
    },{
        month:2,
        flower:'제비꽃',
        content:'겸손, 양보',
    },{
        month:3,
        flower:'수선화',
        content:'자기애, 자존심, 외로움',
    },{
        month:4,
        flower:'스위트피',
        content:'추억, 즐거움'
    },{
        month:5,
        flower:'은방울꽃',
        content:'희망, 섬세함'
    },{
        month:6,
        flower:'백합',
        content:'순결'
    },{
        month:7,
        flower:'미나리아재비',
        content:'아름다움, 인격'
    },{
        month:8,
        flower:'글라디올러스',
        content:'비밀, 상상, 견고함'
    },{
        month:9,
        flower:'물망초',
        content:'진실한 사랑'
    },{
        month:10,
        flower:'금잔화',
        content:'실망, 비애'
    },{
        month:11,
        flower:'국화',
        content:'성실, 진실'
    },{
        month:12,
        flower:'포인세티아',
        content:'축하, 감사'
    }
]

console.log(birthday_flower)
console.log(birthday_flower[0])
console.log(birthday_flower[0].flower)
//사용자가 입력한 생일을 체크해서 버튼 클릭 시
//사용자 생일 1월이라면 1월에 대한 탄생화와 꽃말이 result 출력
//출력 예) ?월의 탄생화는 ?, 꽃말은 ? 입니다.
//잘못 입력하셨습니다. 1~12월 중 입력해주세요.
const month = document.querySelector('#month')
const btn = document.querySelector('#btn')
const birth_result = document.querySelector('.result')
btn.addEventListener('click',()=>{
    if(month.value >= 1 && month.value <= 12){
        console.log(month.value)
        let m = month.value
        birth_result.innerHTML = `${birthday_flower[m-1].month}월의 탄생화는 ${birthday_flower[m-1].flower}, 꽃말은 ${birthday_flower[m-1].content}입니다.`
    }else{
        birth_result.innerHTML = '잘못 입력하셨습니다. 1~12월 중 입력해주세요.'
    }
})