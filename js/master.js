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
          //copy to cipborad
       addToClipboard(val)
       //copy to cipborad
       //referesh btn
       refreshBtn(val)
         //referesh btn
       //add lock btn
       lockColor(val)
       //add lock btn
       //trash button//
       trashBtn(val)
       //trash button//
          // circle
        if(i == 0 ) return
        addCircle(val)
       /// circle     

       

})

//setting random colors//

function colorSet(span){
       let spanColor = randColor()
       span.style.backgroundColor=spanColor
       span.children[0].innerText=spanColor
}

   //refresh button
function refreshBtn(span){
       let refresh = document.createElement('i')
       refresh.classList.add('refreshBtn')
       refresh.innerHTML=`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
</svg>
`
       span.addEventListener('mouseenter',()=>{
              span.appendChild(refresh)
       })
       span.addEventListener('mouseleave',()=>{
              refresh.remove()
       })
       //refresh button
      
       //click on refresh btn to generate a new color for that specific span
        let flag = 1
       refresh.addEventListener('click',(e)=>{
              let temp = span.getAttribute('data-status')
              if(temp == 'locked') return
              if(flag<5){
                     e.stopPropagation()
                   colorSet(span)
                   flag++
                return
              }
       })
       //click on refresh btn to generate a new color for that specific span
}
///locking the color
function lockColor(span){
       let lock = document.createElement('i')
       lock.classList.add('lockBtn')
       lock.innerHTML=`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 10.5V6.75a4.5 4.5 0 1 1 9 0v3.75M3.75 21.75h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H3.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" /></svg>`
       span.addEventListener('mouseenter',()=>{
              span.appendChild(lock)
       })
       span.addEventListener('mouseleave',()=>{
              lock.remove()
       })

       let flag = true
       lock.addEventListener('click',(e)=>{
              e.stopPropagation()
              if(flag){
                    lock.innerHTML=`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" /></svg>`
                     span.setAttribute('data-status','locked')
              }else{
                      lock.innerHTML=`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 10.5V6.75a4.5 4.5 0 1 1 9 0v3.75M3.75 21.75h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H3.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" /></svg>`
  span.setAttribute('data-status','unlocked')
              }
              flag = !flag
       })

}

let deleteFlag = 0
function trashBtn(span){
       let deleteBtn = document.createElement('i')
       deleteBtn.classList.add('deleteBtn')
       deleteBtn.innerHTML=`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="m20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5m6 4.125 2.25 2.25m0 0 2.25 2.25M12 13.875l2.25-2.25M12 13.875l-2.25 2.25M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z" />
</svg>`

       span.addEventListener('mouseenter',()=>{
              span.appendChild(deleteBtn)
       })
       span.addEventListener('mouseleave',()=>{
              deleteBtn.remove()
       })
      
     deleteBtn.addEventListener('click',(e)=>{
       e.stopPropagation()
       let temp = span.getAttribute('data-status')
       if(temp == 'locked') return
       if(deleteFlag < 4){
              span.remove()
              deleteFlag++
              return
       }
       alert('color deletion exceeded!')
     })
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
              ///create new spans 
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
              refreshBtn(newSpan)
              lockColor(newSpan)
              trashBtn(newSpan)
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
               alert(colorCode +' coppied to the clipboard')
             }, 100);
       })
}



/////popUp////////////////////////////////////////////////////////////////////////////////
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
