//1. like(a) 클릭 시 like_off.png -> like_on.png 변경
const like = document.querySelector('.like')
console.log(like)
console.log(like.children)
console.log(like.children[0])
console.log(like.children[0].src)
function like_func(){
    like.children[0].src = "./images/icons/like_on.png"
}
like.addEventListener('click', like_func)
//2. comment(a) 클릭 시 comment_off.png -> comment_on.png 변경
const comment = document.querySelector('.comment')
function comment_func(){
    comment.children[0].src = "./images/icons/comment_on.png"
}
comment.addEventListener('click', comment_func)
//2. paper(a) 클릭 시 paper_off.png -> paper_on.png 변경
const paper = document.querySelector('.paper')
function paper_func(){
    paper.children[0].src = "./images/icons/paper_on.png"
}
paper.addEventListener('click', paper_func)