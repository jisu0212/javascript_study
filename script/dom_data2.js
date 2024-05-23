const data = [
    {//1번째 책
        name: '나를 소모하지 않는 현명한 태도에 관하여',
        author: ['마티아스 뇔케','이미옥'],
        publishing: '퍼스트펭귄',
        date: '2024년 03월',
        price: 17800,
        sale:10,
        tag:['#얼리리더','#이달의굿즈','나를바라보다','인간관계에대하여'],
    },{//2번째 책
        name: '하루 한 장 나의 어휘력을 위한 필사 노트',
        author: '유선경 저',
        publishing: '위즈덤하우스',
        date: '2024년 03월',
        price: 21420,
        sale:10,
        tag:['#얼리리더','#필사','#쓰는맛'],
    },{//3번째 책
        name: '불변의 법칙',
        author: ['모건 하우절','이수경 역'],
        publishing: '서삼독',
        date: '2024년 02월',
        price: 22500,
        sale:10,
        tag:['#얼리리더','#부자되는법','#부자만들기','돈좀벌어보자','돈모으고싶을때'],
    }]
console.log(data)
//HTML DOM
//main > h1
//main > div.contents > p.author + p.publishing + p.date
//main > div.price > p.origin_pay
//main > div.price > p.sale
//main > p.tag
let book = "";
const section = document.querySelector('section')
book += `<div class="book">`
//내용시작
book += `<h1>${data[1].name}</h1>`
book += `<p class="info">`
book += `${data[1].author[0]}/${data[1].author[1]}역`
book += `<a href="#">${data[1].publishing}</a>`
book += `<span>${data[1].date}</span>`
book += `</p>`
book += `<p class="price">`
book += `<em>${data[1].price}원</em>`
book += `<span>(${data[1].sale}% 할인)</span>`
book += `</p>`
book += `<p class="tag">`
book += `${data[1].tag[0]}
        ${data[1].tag[1]}
        ${data[1].tag[2]}`
book += `</p>`
//내용 끝
book += '</div>'
section.innerHTML = book