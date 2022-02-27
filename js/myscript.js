const tabList = document.querySelectorAll('.notice-gallery>div');
for(var i = 0; i < tabList.length; i++){
    tabList[i].querySelector('.sub-tit').addEventListener('click', function(e){
    e.preventDefault();
    for(var j = 0; j < tabList.length; j++){
        tabList[j].classList.remove('on');
    }
    this.parentNode.classList.add('on');
    });
}



//모달팝업
let openBtn = document.querySelector(".open");
let modal = document.querySelector(".modal");
let closeBtn = modal.querySelector(".btn-close");
let modalBg = modal.querySelector(".modal-bg");

function displayModal(){
    modal.classList.toggle("hidden")
};
openBtn.addEventListener("click",displayModal);
closeBtn.addEventListener("click",displayModal);
modalBg.addEventListener("click",displayModal);
