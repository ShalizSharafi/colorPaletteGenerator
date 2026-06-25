//setting random colors//

const colorBox = document.querySelector('.colorBox')
const span = document.querySelectorAll('.spanSpread')

const popUpWall = document.querySelector('.popUpWall')
const popUp = document.querySelector('.popUp')
const hideBtn = document.querySelector('.hideBtn')
const closeBtn = document.querySelector('.closeBtn')
const regenerate = document.querySelector('.regenerate')
const add = document.querySelector('.add')
const counter = document.querySelector('.counter')


const addToTrend = document.querySelector('.addToTrend')
const card = document.querySelector('.card')
const cardSpan = document.querySelectorAll('.cardSpan')
const pasteColor = document.querySelectorAll('.pasteColor')
const cardColors = document.querySelectorAll('.cardColors')
const trendSec = document.querySelector('.trend')
const trendCounter = document.querySelector('.trendCounter')

const save = document.querySelector('.save')
const viewBoard = document.querySelector('.viewBoard')
const closeView = document.querySelector('.closeView')
const viewbtn = document.querySelector('.viewbtn')

const rand = (max)=>Math.floor(Math.random()*max)
const randColor = ()=>{return `rgb(${rand(256)},${rand(256)},${rand(256)})`}
let flag = 0
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
       //copy btn//
       copyButton(val)
       //copy btn
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
//setting random colors//

   //refresh button for each span
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
//refresh for each span
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
////locking the color
////delete btn
let deleteFlag = 1
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
              //new
              if(flag > 0) flag--
               counter.innerText=`${flag}/5 added`
               //new
              return
       }
       alert('color deletion exceeded!')
     })
}
////delete btn
///// circle btn
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
              newSpanGenerator()
              flag++
              counter.innerText=`${flag}/5 added`
              return
              }
              alert('you are no longer able to add new colors to your palette, try to delete a color from your palette to add more')
              counter.innerText = null
              counter.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="blue" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z" />
</svg>
`
       })
 
}
///////// circle btn

function addToClipboard(span){
       span.addEventListener('click',(e)=>{
              let colorCode = e.currentTarget.children[0].innerText
              navigator.clipboard.writeText(colorCode)
             setTimeout(() => {
               alert(colorCode +' coppied to the clipboard')
             }, 100);
       })
}


///refreshing the colorpalette
regenerate.addEventListener('click',()=>{
   location.reload()
})
//refreshing the colorpalette

// add newcolorbox btn - navigation bar
       add.addEventListener('click',()=>{
       if(flag < 5){
              newSpanGenerator()
              flag++
              counter.innerText=`${flag}/5 added`
              return
              }
                 alert('you are no longer able to add new colors to your palette, try to delete a color from your palette to add more')
                 counter.innerText = null
              counter.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="blue" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z" />
</svg>
`
})
// add newcolorbox btn - navigation bar
//new span generator
function newSpanGenerator(){
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
              copyButton(newSpan)
}
//new span generator

///copy button
function copyButton(span){
       let copyBtn = document.createElement('i')
       copyBtn.classList.add('copyBtn')
       copyBtn.innerHTML=`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 0 1-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 0 1 1.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 0 0-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 0 1-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H9.75" />
</svg>
`

        span.addEventListener('mouseenter',()=>{
              span.appendChild(copyBtn)
       })
       span.addEventListener('mouseleave',()=>{
              copyBtn.remove()
       })

       // copyBtn.addEventListener('click',(e)=>{
       //        e.stopPropagation()
       //        addToClipboard(span)
       // })

       copyBtn.addEventListener('click',(e)=>{
              e.stopPropagation()
              let colorCode = span.children[0].innerText
              navigator.clipboard.writeText(colorCode)
              setTimeout(() => {
                    alert(`${colorCode} coppied to the clipboard`) 
              }, 100);
       })
      
       
}
///copy button

/////popUp///////////////////////////////////////////////////////////////////////////////////////////////
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
/////popUp//////////////////////////////////////////////////////////////////////////////////////////
//Hamburgur menu
//Hamburgur menu

/////trend secton/////////////////////////////////////////////////////////////////////////////////

//////creating hex values
       const hexValues = [1,2,3,4,5,6,7,8,9,0,'a','b','c','d','e','f']

cardSpan.forEach((val,i)=>{
        hexCodesSection(val)
       //////add color to clipboard
})
      /////hex 


//        ////////////////////////generate newColorBox

       function hexCodesSection(cardSpan){
              let hexCode = ''
       for(let i =0 ; i<6 ; i++){
              hexCode += hexValues[Math.floor(Math.random()*hexValues.length)]
       }
       let spanColor = hexCode
       cardSpan.style.backgroundColor=`#${spanColor}`
       cardSpan.children[0].innerText='#' + spanColor
       cardSpan.children[0].classList.add('colorCode')
       ///add color to clipboard
       addToClipboard(cardSpan)
       cardSpan.addEventListener('click',(e)=>{
              let temp = e.currentTarget.children[0].innerText
              cardSpan.parentElement.parentElement.children[1].children[0].children[0].children[0].innerText ='hex: ' +temp
              cardSpan.parentElement.parentElement.children[1].children[0].children[0].children[0].style.color = `#${spanColor}`
       })
       }

////hex generator

////delete from trend


///delete from trend
       
       let flagCount = 0
       addToTrend.addEventListener('click',()=>{
              let newBox = document.createElement('div')
              newBox.classList.add('card')
              newBox.innerHTML = `<div class="cardColors">
                                   <span class="cardSpan group">
                                          <b class="colorCode group-hover:flex "></b>
                                   </span>
                                   <span class="cardSpan group">
                                          <b class="colorCode group-hover:flex "></b>
                                   </span>
                                   <span class="cardSpan group">
                                          <b class="colorCode group-hover:flex "></b>
                                   </span>
                                   <span class="cardSpan group">
                                          <b class="colorCode group-hover:flex "></b>
                                   </span>
                                   <span class="cardSpan group">
                                          <b class="colorCode group-hover:flex "></b>
                                   </span>
                                   <span class="cardSpan group">
                                          <b class="colorCode group-hover:flex "></b>
                                   </span>
                            </div>
                            <div class="cardDetails">
                                   <span class="flex items-center justify-start">
                            <a class="link pasteColor">
                            <span class="text-blue font-bold"></span>
                     </a> 
                     </span>
                                 <div class="flex items-center justify-end">
                                    <span class="headerIcon">
                            <img src="images/eye-line.png" alt="" class="w-1/2 h-1/2 object-cover">
                     </span> 
                     <span class="headerIcon">
                            <img src="images/save-line.png" alt="" class="w-1/2 h-1/2 object-cover">
                     </span>
                     <span class="headerIcon deleteFromTrend">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="black" class="size-4.5">
  <path stroke-linecap="round" stroke-linejoin="round" d="m20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5m6 4.125 2.25 2.25m0 0 2.25 2.25M12 13.875l2.25-2.25M12 13.875l-2.25 2.25M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z" />
</svg>
                     </span>
                                 </div>
                            </div>`
              if(flagCount < 6){
                     trendSec.appendChild(newBox)
                     let newCardSpan = document.querySelectorAll('.card>.cardColors>.cardSpan')
                     newCardSpan.forEach((val)=>{
                            hexCodesSection(val)
                     })
                     flagCount++
                     trendCounter.innerText = `${flagCount}/6 added`
                     /////delete
              let deleteFromTrend = newBox.querySelector('.deleteFromTrend')
             
               deleteFromTrend.addEventListener('click',()=>{
                     newBox.remove()
                     flagCount--
                     trendCounter.innerText = `${flagCount}/6 added`
              })
                     return
              }
               trendCounter.innerText = null
              trendCounter.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="blue" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z" />
</svg>
`
       })
/////trend secton


//////////////save and view
viewbtn.addEventListener('click',(e)=>{
    viewBoard.style.right='0'
})

closeView.addEventListener('click',(e)=>{
       viewBoard.style.right='-100%'
})


//////////////save and view