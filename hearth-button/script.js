const likeButton = document.querySelector('.ri-heart-fill')
let isLiked = false

likeButton.addEventListener('click',() =>{
   isLiked = !isLiked
   if(isLiked){
    likeButton.style.color = 'red'

   }else{
    likeButton.style.color = 'wheat'
   
   }
})