//------------------------\\
        //Textarea\\
//------------------------\\

var observe;
if (window.attachEvent) {
    observe = function (element, event, handler) {
        element.attachEvent('on'+event, handler);
    };
}
else {
    observe = function (element, event, handler) {
        element.addEventListener(event, handler, false);
    };
}
function init () {
    var text = document.getElementById('text');
    function resize () {
        text.style.height = '44px';
        text.style.height = text.scrollHeight+'px';
    }
    /* 0-timeout to get the already changed text */
    function delayedResize () {
        window.setTimeout(resize, 0);
    }
    observe(text, 'change',  resize);
    observe(text, 'cut',     delayedResize);
    observe(text, 'paste',   delayedResize);
    observe(text, 'drop',    delayedResize);
    observe(text, 'keydown', delayedResize);

    text.focus();
    text.select();
    resize();
}

//------------------------\\
        //Text add\\
//------------------------\\

const btn = document.getElementById("submit");
const textname = document.getElementById("name");
const text = document.getElementById("text")

//Delete text
const h1_text = document.getElementById("main-text");
const h2_text = document.getElementById("description-text");

//Create block
const ul_box = document.getElementById('add-items');
const contentBox = document.getElementsByClassName('content-box')[0];


btn.addEventListener('click', (e) => {
    if (text.value !== "") {
        e.preventDefault();


        //Remove main page title
        h2_text.remove();

        //Create [p]
        h1_text.textContent="Your Notebook";



        //Creave li
        const li  = document.createElement('li');
        ul_box.appendChild(li);
        li.classList.add('list');

        //Create Button
        const listBlock = document.createElement('button');
        li.appendChild(listBlock);
        listBlock.classList.add('list-btn')
        
        //create P
        const blockPara = document.createElement('p');
        listBlock.appendChild(blockPara);
        blockPara.classList.add('block-p')

        //text
        const boxIcon = document.createElement('div');
        listBlock.appendChild(boxIcon);
        boxIcon.classList.add('down-icon');

        //add name
        blockPara.textContent = textname.value;

        //Collapsibles
        const collapsBlock = document.createElement('div');
        li.appendChild(collapsBlock);
        collapsBlock.classList.add('collaps')

        //text
        const boxPara = document.createElement('p');
        collapsBlock.appendChild(boxPara);
        boxPara.classList.add('box-p');

        boxPara.textContent = text.value;

        //Delete button
        const deleteBtn = document.createElement('button');
        collapsBlock.appendChild(deleteBtn);
        deleteBtn.textContent = "delete";
        deleteBtn.classList.add('delete-btn')


            
        //------------------------\\
                //Collapsibles\\
        //------------------------\\


        const coll = document.getElementsByClassName("list-btn");

        for (let i = 0; i < coll.length; i++) {
        coll[i].addEventListener("click", 
        function() {
            this.classList.toggle("active");
            var collaps = this.nextElementSibling;
            if (collaps.style.display === "block") {
                collaps.style.display = "none";
            } else {
            collaps.style.display = "block";
            }
        });
        }
    }

    //delete btn
    const deletebtn = document.querySelectorAll('.delete-btn');
    for(let i = 0; i < deletebtn.length; i++){
        deletebtn[i].addEventListener('click', ()=>{
        deletebtn[i].parentElement.parentElement.style.display = 'none';
        })
    }
});