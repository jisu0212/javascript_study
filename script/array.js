//배열
let yoil = []//빈 배열
console.log(yoil);
yoil = ['월','화','수','목','금','토','일'];
console.log(yoil);
console.log(`오늘은 ${yoil[0]}요일입니다.`);//오늘은 월요일입니다.
//배열 작성법 2.
let yoil_v2 = new Array(2); //빈 배열*2
console.log(yoil_v2)
console.log(yoil_v2[1])//undefined
yoil_v2[1] = "월"
console.log(yoil_v2);
yoil_v2[0] = "일"
console.log(yoil_v2[0]+'요일')
console.log(yoil_v2);
console.log("========================")
//배열 기초 문제
//1. 원하는 색상을 6개 배열로 각각 저장하고 그 중 좋아하는 색상 2개를 골라서 콘솔에 출력하세요.
//콘솔결과 예시) 내가 좋아하는 색상은 0, 0 입니다.
let color = ['yellow', 'purple', 'white', 'red', 'pink', 'skyblue'];
console.log(`내가 좋아하는 색상은 ${color[0]}와 ${color[5]}입니다.`)
//2. 좋아하는 과일을 5개 배열로 저장하고 모두 역순으로 출력해보세요.
let fruit = new Array('포도', '수박', '자두', '망고스틴', '용과');
console.log(fruit)
//역순 출력
let result = `${fruit[4]},${fruit[3]},${fruit[2]},${fruit[1]},${fruit[0]}`
console.log(result);
//날씨카드(맑음, 흐림, 비, 눈)을 배열로 생성하고 이번주 기상예보를 출력하세요.
//결과 예시)
//월요일 : 맑음
//화요일 : 눈
//수요일 : 비
//목요일 : 흐림
//금요일 : 맑음
//토요일 : 맑음
//일요일 : 눈
//yoil = ['월','화','수','목','금','토','일'];
const weather = ['맑음','흐림','비','눈']
console.log(`${yoil[0]}요일 : ${weather[0]}`)
console.log(`${yoil[1]}요일 : ${weather[3]}`)
console.log(`${yoil[2]}요일 : ${weather[2]}`)
console.log(`${yoil[3]}요일 : ${weather[1]}`)
console.log(`${yoil[4]}요일 : ${weather[0]}`)
console.log(`${yoil[5]}요일 : ${weather[0]}`)
console.log(`${yoil[6]}요일 : ${weather[3]}`)
console.log('========================')
let cgv = new Array(8)
console.log(cgv)
console.log(cgv.length)
cgv[0] = 'A1'
console.log(cgv)
cgv[1] = 'C3'
console.log(cgv)
cgv.push('F5')
console.log(cgv)
//배열 속성 활용
let megabox = []
console.log(megabox.length)
megabox.push('A2')
console.log(megabox)
megabox.push('B1')
console.log(megabox)
megabox.unshift('A1')
console.log(megabox)
megabox.pop()
console.log(megabox)
megabox.shift()
console.log(megabox)
megabox.push(`F5`, `F6`)
console.log(megabox)
console.log('==========================')
let lottecinema = []
let price = 10000
let total = '';
//ex) 좌석 배열에 3개의 좌석 정보가 들어있을 때
//예매하신 좌석은 총 3좌석이며 성인 1명당 10000원 기준으로 총 결제 금액은 30000원 입니다.
lottecinema.push('A5', 'A6')
lottecinema.unshift('A4')
console.log(lottecinema) //a4 a5 a6
total_func()
//뒤로가기 인원 수정
lottecinema.pop()
//결제 하기 클릭 후 메세지 출력
total_func()
//뒤로가기 인원 수정
lottecinema.push(`D5`, `D6`)
//결제 하기 클릭 후 메세지 출력
total_func()
function total_func(){
    total = `예매하신 좌석은 총 ${lottecinema.length}좌석이며 성인 1명당 ${price}원 기준으로 총 결제 금액은 ${price*lottecinema.length}원입니다.`
    console.log(total)
}