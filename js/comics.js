/* 01 */
let box_01 = document.getElementById('box-01');
let description_01 = document.getElementById('description-01');
let hover_01 = document.getElementById('hover-01');    
let show_01 = document.getElementById('show-id-01');
        
hover_01.addEventListener("mouseover", mouseOver_01);
hover_01.addEventListener("mouseout", mouseOut_01);
show_01.addEventListener("click", mouseClick_show_01);
show_01.addEventListener("mouseover", mouseOver_show_01);
show_01.addEventListener("mouseout", mouseOut_show_01);
    
description_01.style.color = 'transparent';
description_01.style.width = '100%';

/* hover over thumbnail and text appears */
    function mouseOver_01() {
        description_01.style.background = 'none';
        description_01.style.color = '#FFFFF4';
        description_01.style.width = '100%';
        show_01.style.background = 'forestgreen';
}

/* exit thumbnail and text goes away */
    function mouseOut_01() {
        box_01.style.background = 'none';
        description_01.style.color = 'transparent';
        description_01.style.width = '100%';
        show_01.style.background = 'white';
}
  
/* hover over button and it turns yellowish */  
    function mouseOver_show_01() {
        if (show_01.style.background == 'forestgreen'){
            show_01.style.background = "forestgreen";
        }else{
            show_01.style.background = "#FFFF66";
        }
    }

/* exit button and it goes back to white again */
    function mouseOut_show_01() {
        if (show_01.style.background != 'forestgreen'){
            show_01.style.background = 'white';
        }
    }

    function mouseClick_show_01() {
        if (show_01.style.background == 'forestgreen') {       
            show_01.style.background = 'white';
            description_01.style.color = 'transparent';
        } else {
            show_01.style.background = 'forestgreen';
            description_01.style.color = '#FFFFF4';
        }
     }

    
    
/* 02 */    
let box_02 = document.getElementById('box-02');
let description_02 = document.getElementById('description-02');
let hover_02 = document.getElementById('hover-02');    
let show_02 = document.getElementById('show-id-02');
        
hover_02.addEventListener("mouseover", mouseOver_02);
hover_02.addEventListener("mouseout", mouseOut_02);
show_02.addEventListener("click", mouseClick_show_02);
show_02.addEventListener("mouseover", mouseOver_show_02);
show_02.addEventListener("mouseout", mouseOut_show_02);
    
description_02.style.color = 'transparent';
description_02.style.width = '100%';

/* hover over thumbnail and text appears */
    function mouseOver_02() {
        description_02.style.background = 'none';
        description_02.style.color = '#FFFFF4';
        description_02.style.width = '100%';
        show_02.style.background = 'forestgreen';
}

/* exit thumbnail and text goes away */
    function mouseOut_02() {
        box_02.style.background = 'none';
        description_02.style.color = 'transparent';
        description_02.style.width = '100%';
        show_02.style.background = 'white';
}
  
/* hover over button and it turns yellowish */  
    function mouseOver_show_02() {
        if (show_02.style.background == 'forestgreen'){
            show_02.style.background = "forestgreen";
        }else{
            show_02.style.background = "#FFFF66";
        }
    }

/* exit button and it goes back to white again */
    function mouseOut_show_02() {
        if (show_02.style.background != 'forestgreen'){
            show_02.style.background = 'white';
        }
    }

    function mouseClick_show_02() {
        if (show_02.style.background == 'forestgreen') {       
            show_02.style.background = 'white';
            description_02.style.color = 'transparent';
        } else {
            show_02.style.background = 'forestgreen';
            description_02.style.color = '#FFFFF4';
        }
     }



/* 03 */
let box_03 = document.getElementById('box-03');
let description_03 = document.getElementById('description-03');
let hover_03 = document.getElementById('hover-03');    
let show_03 = document.getElementById('show-id-03');

hover_03.addEventListener("mouseover", mouseOver_03);
hover_03.addEventListener("mouseout", mouseOut_03);
show_03.addEventListener("click", mouseClick_show_03);
show_03.addEventListener("mouseover", mouseOver_show_03);
show_03.addEventListener("mouseout", mouseOut_show_03);
   
description_03.style.color = 'transparent';
description_03.style.width = '100%';

/* hover over thumbnail and text appears */
    function mouseOver_03() {
        description_03.style.background = 'none';
        description_03.style.color = '#FFFFF4';
        description_03.style.width = '100%';
        show_03.style.background = 'forestgreen';
}

/* exit thumbnail and text goes away */
    function mouseOut_03() {
        box_03.style.background = 'none';
        description_03.style.color = 'transparent';
        description_03.style.width = '100%';
        show_03.style.background = 'white';
}
  
/* hover over button and it turns yellowish */  
    function mouseOver_show_03() {
        if (show_03.style.background == 'forestgreen'){
            show_03.style.background = "forestgreen";
        }else{
            show_03.style.background = "#FFFF66";
        }
    }

/* exit button and it goes back to white again */
    function mouseOut_show_03() {
        if (show_03.style.background != 'forestgreen'){
            show_03.style.background = 'white';
        }
    }

    function mouseClick_show_03() {
        if (show_03.style.background == 'forestgreen') {       
            show_03.style.background = 'white';
            description_03.style.color = 'transparent';
        } else {
            show_03.style.background = 'forestgreen';
            description_03.style.color = '#FFFFF4';
        }
     }


/* 04 */
let box_04 = document.getElementById('box-04');
let description_04 = document.getElementById('description-04');
let hover_04 = document.getElementById('hover-04');    
let show_04 = document.getElementById('show-id-04');

hover_04.addEventListener("mouseover", mouseOver_04);
hover_04.addEventListener("mouseout", mouseOut_04);
show_04.addEventListener("click", mouseClick_show_04);
show_04.addEventListener("mouseover", mouseOver_show_04);
show_04.addEventListener("mouseout", mouseOut_show_04);
   
description_04.style.color = 'transparent';
description_04.style.width = '100%';

/* hover over thumbnail and text appears */
    function mouseOver_04() {
        description_04.style.background = 'none';
        description_04.style.color = '#FFFFF4';
        description_04.style.width = '100%';
        show_04.style.background = 'forestgreen';
}

/* exit thumbnail and text goes away */
    function mouseOut_04() {
        box_04.style.background = 'none';
        description_04.style.color = 'transparent';
        description_04.style.width = '100%';
        show_04.style.background = 'white';
}
  
/* hover over button and it turns yellowish */  
    function mouseOver_show_04() {
        if (show_04.style.background == 'forestgreen'){
            show_04.style.background = "forestgreen";
        }else{
            show_04.style.background = "#FFFF66";
        }
    }

/* exit button and it goes back to white again */
    function mouseOut_show_04() {
        if (show_04.style.background != 'forestgreen'){
            show_04.style.background = 'white';
        }
    }

    function mouseClick_show_04() {
        if (show_04.style.background == 'forestgreen') {       
            show_04.style.background = 'white';
            description_04.style.color = 'transparent';
        } else {
            show_04.style.background = 'forestgreen';
            description_04.style.color = '#FFFFF4';
        }
     }