//객체
//2개 이상의 데이터를 담을 수 있다.
//배열 = 2개 이상의 데이터 "값"
//객체 = 2개 이상의 데이터 "속성", "값"
const obj1 = {
    type:'코리안 숏헤어',
    age:2,
    color:['흰색','갈색']
}
console.log(obj1)
console.log(obj1.type)
console.log(`고양이 종은 ${obj1.type} 입니다.`)
console.log(obj1.color[0], obj1.color[1])
const cat1 = {
    name:'러블',
    type:'러시안 블루',
    color:'회색',
    age:1,
    gender:'암',
    health:'양호',
    birth:'5/20',
    birth_message:function(){
        return `${this.name}아 ${this.birth} 생일축하해~!`
    }, //return은 내부의 것을 함수 외부로 내보내서 실행해라, 객체 안에서 this라고 적으면 해당 객체를 뜻한다. 고로 여기서는 this=cat1
    // = birth_message:function(){return this.birth + '생일축하해'}
}
console.log(cat1)
console.log(cat1.birth_message()) //러블아 5/20 생일축하해~!
console.log('====================')
/* const movie = {
    kor_name:'퓨리오사-매드맥스 사가',
    eng_name:'Furiosa:A Mad Max Saga',
    date:'2024.05.22',
    rate:'37.4%',
    egg_score:'99%',
    director:'조지 밀러',
    actor:['안야 테일러 조이','크리스 헴스워스','톰 버크'],
    genre:['액션'],
    age:'15세 이상 관람가',
    time:148,
    country:'미국',
    poster:'./images/mad_max_poster.jpg',
    story:'문명 붕괴 45년 후 황폐해진 세상에 무참히 던져진 퓨리오사가 고향으로 돌아가기 위해 자신의 인생 전부를 걸고 떠나는 거대한 여정을 그린 액션 블록버스터',
} */
const movie = [{
    kor_name:'퓨리오사-매드맥스 사가',
    eng_name:'Furiosa:A Mad Max Saga',
    date:'2024.05.22',
    rate:'37.4%',
    egg_score:'99%',
    director:'조지 밀러',
    actor:['안야 테일러 조이','크리스 헴스워스','톰 버크'],
    genre:['액션'],
    age:'15세 이상 관람가',
    time:148,
    country:'미국',
    poster:'./images/mad_max_poster.jpg',
    story:'문명 붕괴 45년 후 황폐해진 세상에 무참히 던져진 퓨리오사가 고향으로 돌아가기 위해 자신의 인생 전부를 걸고 떠나는 거대한 여정을 그린 액션 블록버스터',},{
    kor_name:'청춘',
    eng_name:'18×2 Beyond Youthful Days',
    date:'2024.05.22',
    rate:'12.3%',
    egg_score:'99%',
    director:'후지이 미치히토',
    actor:['허광한', '키요하라 카야', '장효전', '미치에다 슌스케' , '쿠로키 하루' , '마츠시게 유타카' , '구로키 히토미'],
    genre:['로멘스','멜로'],
    age:'15세 이상 관람가',
    time:148,
    country:'미국',
    poster:'./images/mad_max_poster.jpg',
    story:'문명 붕괴 45년 후 황폐해진 세상에 무참히 던져진 퓨리오사가 고향으로 돌아가기 위해 자신의 인생 전부를 걸고 떠나는 거대한 여정을 그린 액션 블록버스터',
    }]
console.log(movie)
console.log(`<img src="${movie.poster}" alt="${movie.kor_name}">`)
console.log('=====================')
/*
    고양이1/코숏/1살/남/갈색,흰색,검은색/중성화 유
    고양이2/코숏/2살/여/검은색,흰색/중성화 무
    고양이3/코숏/3살/남/흰색,회색/중성화 유
*/
const cat_shelter = [
    {
        name:'봄이',
        type:'코리안 숏헤어',
        age: 1,
        gender: '남',
        color:['갈색','흰색','검은색'],
        neurification:'유',
    },
    {
        name:'여름이',
        type:'코리안 숏헤어',
        age: 2,
        gender: '여',
        color:['검은색','흰색'],
        neurification:'무',
    },
    {
        name:'가을이',
        type:'코리안 숏헤어',
        age: 3,
        gender: '남',
        color:['흰색','회색'],
        neurification:'유',
    }
]
console.log(cat_shelter);
console.log(cat_shelter[0]);
console.log(cat_shelter[1]);
console.log(cat_shelter[2]);
console.log(cat_shelter.length);
console.log(`현재 보호소 동물은 ${cat_shelter.length}마리입니다.`);
console.log(cat_shelter[0].gender)
//현재 보호소 동물 나이대는 ?살, ?살, ?살 입니다.
console.log(cat_shelter[0].age) //test
console.log(`현재 보호소 동물 나이대는 ${cat_shelter[0].age}살, ${cat_shelter[1].age}살, ${cat_shelter[2].age}살 입니다.`)