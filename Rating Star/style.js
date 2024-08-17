const ratingCount = document.querySelector(".rating-count");
const ratingStars = document.querySelectorAll(".star");
let count = 0;
let check = true;
        ratingStars.forEach((star, index) => {
            star.addEventListener("click", () => {
                ratingStars.forEach((s, i) => {
                    if(index==0 && check === true){
                    s.classList.toggle("star-Rcolor", i <= index);
                    count=1;   
                }
                else if(index==1 && check === true){
                    s.classList.toggle("star-Ycolor", i <= index);
                    count=2;
                }
                else if(index==2 && check === true){
                    s.classList.toggle("star-Gcolor", i <= index);
                    count=3;
                }
                else if(index==3 && check === true){
                    s.classList.toggle("star-Ocolor", i <= index);
                    count=4;
                }
                else if(index==4 && check === true){
                    s.classList.toggle("star-Bcolor", i <= index);
                    count=5;
                    }
                });
                ratingCount.innerText = `Rating is ${count}/5`;
                check=false;
            });
        });
