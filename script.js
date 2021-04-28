var likeBtns = document.querySelectorAll('button.likeBtn');
var postLikes = document.querySelectorAll('span.likeNum');

function Like(likeNum) {
    var likes = parseInt(postLikes[likeNum].innerHTML);
    likes++;
    postLikes[likeNum].innerHTML = likes;
}

console.log(likeBtns);
console.log(postLikes);