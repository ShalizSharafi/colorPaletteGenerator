//setting random colors//

const colorBox = document.querySelector('.colorBox')
const span = document.querySelectorAll('.spanSpread')

const popUpWall = document.querySelector('.popUpWall')
const popUp = document.querySelector('.popUp')
const hideBtn = document.querySelector('.hideBtn')
const closeBtn = document.querySelector('.closeBtn')

const rand = (max)=>Math.floor(Math.random()*max)
const randColor = ()=>{return `rgb(${rand(256)},${rand(256)},${rand(256)})`}
let flag = 1
span.forEach((val,i)=>{
       //set color
       colorSet(val)
        //set color
        // circle
      if(i == 0 ) return
        addCircle(val)
       /// circle
       //copy to cipborad
       addToClipboard(val)
       //copy to cipborad

})

//setting random colors//

function colorSet(span){
       let spanColor = randColor()
       span.style.backgroundColor=spanColor
       span.children[0].innerText=spanColor
}

function addCircle(span){
       let addBtn = document.createElement('span')
       addBtn.classList.add('btn')
       addBtn.innerHTML=`<img src="images/add-fill.png">`

       span.addEventListener('mouseenter',()=>{
              span.appendChild(addBtn)
       })
       span.addEventListener('mouseleave',()=>{
              addBtn.remove()
       })
        addBtn.addEventListener('click',(e)=>{
              e.stopPropagation()
              if(flag < 5){
              let newSpan = document.createElement('span')
              newSpan.classList.add('spanSpread')
              newSpan.innerHTML=`<b class="colorCode group-hover:flex"></b>`
              let spanColor = randColor()
              newSpan.style.backgroundColor=spanColor
              newSpan.children[0].innerText = spanColor
              newSpan.addEventListener('mouseenter',()=>{
                     newSpan.children[0].style.display='flex'
              })
               newSpan.addEventListener('mouseleave',()=>{
                     newSpan.children[0].style.display='none'
              })
              console.log(newSpan.children[0])
              colorBox.appendChild(newSpan)
              addToClipboard(newSpan)
              addCircle(newSpan)
              flag++
              return
              }
       })
 
}

function addToClipboard(span){
       span.addEventListener('click',(e)=>{
              let colorCode = e.currentTarget.children[0].innerText
              navigator.clipboard.writeText(colorCode)
             setTimeout(() => {
               alert('code coppied to the clipboard')
             }, 100);
       })
}


/////popUp
hideBtn.addEventListener('click',()=>{
       popUpWall.style.display='flex'
       setTimeout(() => {
              popUpWall.nextElementSibling.style.display='flex'
       }, 100);
})

closeBtn.addEventListener('click',()=>{
       closeBtn.parentElement.style.display='none'
       closeBtn.parentElement.previousElementSibling.style.display='none'
})

popUpWall.addEventListener('click',()=>{
       popUpWall.style.display='none'
       popUp.style.display='none'
})
/////popUp
