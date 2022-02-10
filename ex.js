const navSlider = ()=>{
const nav = document.querySelector('.nav-links');
const burger = document.querySelector('.burger');
const links = document.querySelectorAll('.nav-links li')
const a = document.querySelectorAll('.nav-links li a');

burger.addEventListener('click', ()=>{
    nav.classList.toggle('nav-active')
    burger.classList.toggle('change')

    //  infut animation
     p.classList.toggle('p-anim')
     btnSave.classList.toggle('s-anim')
     btnClear.classList.toggle('c-anim')
     input.classList.toggle('i-anim')
    
    links.forEach((item, index)=>{
        if(item.style.animation){
            item.style.animation ='';
        }
        else{
            item.style.animation = `navAnim 0.5s ease forwards ${index/5+0.3}s`;
        }
        
    })
    a.forEach((item, index)=>{
        if(item.style.animation){
            item.style.animation ='';
        }
        else{
            item.style.animation = `aColor 0.5s ease ${index/5 +0.3}s`;
        } 
    }) 
})
}
navSlider()
// inputs elements
const p = document.querySelector('.text')
const input = document.querySelector('.input');
const btnSave = document.querySelector('.btnSave');
const list = document.querySelector('.list');
const btnClear = document.querySelector('.btnClear');
const form = document.querySelector('.form-input');
const noteLine = document.querySelector('.note');

btnSave.addEventListener('click', addList);

function addList(event){
    event.preventDefault()
    
    let value = input.value;
    noteLine.textContent ="";
    
     if(value != ''){
        if(input.value.length>2){
            let li = document.createElement('li');
                li.textContent = value;

            let x = document.createElement('span');
            x.textContent = "X";
            li.appendChild(x);

            x.addEventListener('click',()=>{
                li.remove();
            })

            list.appendChild(li)
            input.value = '';
        }
        else{
            let noteP2 = document.createElement('p');
            noteP2.textContent = "The Word Was Short!";
            noteP2.classList.add('note2')
            noteLine.appendChild(noteP2)
            input.value = '';
            let note2Arr = document.querySelectorAll('.note2')
            if(note2Arr.length>=2){
                note2Arr[1].remove()
            }
         }
    }
    else{
        let empty = document.createElement('p');
        empty.textContent = "This Is Empty!";
        noteLine.appendChild(empty)  

    }
    // max list
    let lists = document.querySelectorAll('.list li')
    if(lists.length>3){
        lists[0].remove()
    }
}

btnClear.addEventListener('click',()=>{
    list.textContent = "";
    noteLine.textContent = "";
    input.value= "";
})

// max length of input value

input.addEventListener('keyup',()=>{
    const noteLineP = document.querySelectorAll('.note p');
    if(noteLineP.length==1){
        noteLineP[0].remove();
    }
    
    if(input.value.length<3){
        let notep3 = document.createElement('p')
        let span1 = document.createElement('span')
        span1.textContent = "Note";
        span1.style.color = "red";
        notep3.appendChild(span1)

        let span2 = document.createElement('span')
        span2.textContent = ": Is Short";
        span2.style.color = "white";
        notep3.appendChild(span2)


        noteLine.appendChild(notep3);
    }
    if(input.value.length>2){
        noteLine.textContent = "";
    }
    
    
    if(input.value.length==7){
        let note1 = document.createElement('p')
        let span1 = document.createElement('span')
        span1.textContent = "Note";
        span1.style.color = "red";
        note1.appendChild(span1)

        let span2 = document.createElement('span')
        span2.textContent = ": To the limit: 1 record !";
        span2.style.color = "white";
        note1.appendChild(span2)


        noteLine.appendChild(note1);
        
    }

    if(input.value.length==8){
        let note1 = document.createElement('p')
        let span1 = document.createElement('span')
        span1.textContent = "Note";
        span1.style.color = "red";
        note1.appendChild(span1)

        let span2 = document.createElement('span')
        span2.textContent = ": You are at the limit !";
        note1.appendChild(span2)


        noteLine.appendChild(note1);
        
    }

    if(input.value.length>8){
        input.value = '';
        let notep = document.createElement('p')
        notep.textContent = "The Word Was Long!";
        notep.classList.add =('long')
        noteLine.appendChild(notep);
    }
    
})
