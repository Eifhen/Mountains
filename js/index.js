(()=>{
    "use strict";


    const menu = document.querySelector("#menu");
    const btnMenu = document.querySelector("#btn-menu");
    const btnClose = document.querySelector("#btn-close");
    

    btnMenu.addEventListener("click",  HandleMenu );
    btnClose.addEventListener("click", HandleMenu );


    function HandleMenu(){
        menu.classList.toggle("d-block");
    }

  











})();
