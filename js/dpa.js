/* first thumbnail setup */
let highlight_01 = document.getElementById('thumbnail-01');
let description_01 = document.getElementById('description-01');
let thumbnail_01 = document.getElementById('thumbnail-01');       
highlight_01.addEventListener('mouseover', mouseOver_01);
highlight_01.addEventListener('mouseout', mouseOut_01);


/* second thumbnail setup */
let highlight_02 = document.getElementById('thumbnail-02');
let description_02 = document.getElementById('description-02');
let thumbnail_02 = document.getElementById('thumbnail-02');       
highlight_02.addEventListener('mouseover', mouseOver_02);
highlight_02.addEventListener('mouseout', mouseOut_02);


/* third thumbnail setup */
let highlight_03 = document.getElementById('thumbnail-03');
let description_03 = document.getElementById('description-03');
let thumbnail_03 = document.getElementById('thumbnail-03');       
highlight_03.addEventListener('mouseover', mouseOver_03);
highlight_03.addEventListener('mouseout', mouseOut_03);



/* Initialize thumbnails*/
thumbnail_01.style.zIndex = 3;
thumbnail_02.style.zIndex = 3;
thumbnail_03.style.zIndex = 3;




/*************Functions*************/

/* first thumbnail functions */
function mouseOver_01() {
    description_01.style.color = 'yellowgreen';
    description_01.style.textShadow = 'black .1em .1em';
    description_01.style.transition = "all .33s";
    description_01.style.transform = "scale(1.03)";
    thumbnail_02.style.zIndex = 1;
    thumbnail_03.style.zIndex = 1;
}

function mouseOut_01() {
    description_01.style.color = 'ghostwhite';
    description_01.style.textShadow = 'none';
    description_01.style.transform = "scale(1)";
    description_01.style.maxWidth = "100%";
    thumbnail_02.style.zIndex = 3;
    thumbnail_03.style.zIndex = 3;
}





/* second thumbnail functions */
function mouseOver_02() {
    description_02.style.color = 'yellowgreen';
    description_02.style.textShadow = 'black .1em .1em';
    description_02.style.transition = "all .33s";
    description_02.style.transform = "scale(1.03)";
    thumbnail_01.style.zIndex = 1;
    thumbnail_03.style.zIndex = 1;
}

function mouseOut_02() {
    description_02.style.color = 'ghostwhite';
    description_02.style.textShadow = 'none';
    description_02.style.transform = "scale(1)";
    thumbnail_01.style.zIndex = 3;
    thumbnail_03.style.zIndex = 3;
}





/* third thumbnail functions */
function mouseOver_03() {
    description_03.style.color = 'yellowgreen';
    description_03.style.textShadow = 'black .1em .1em';
    description_03.style.transition = "all .33s";
    description_03.style.transform = "scale(1.03)";
    thumbnail_01.style.zIndex = 1;
    thumbnail_02.style.zIndex = 1;
}

function mouseOut_03() {
    description_03.style.color = 'ghostwhite';
    description_03.style.textShadow = 'none';
    description_03.style.transform = "scale(1)";
    thumbnail_01.style.zIndex = 3;
    thumbnail_02.style.zIndex = 3;
}
