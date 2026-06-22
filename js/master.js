//setting random colors//

const colorBox = document.querySelector('.colorBox')
const span = document.querySelectorAll('.spanSpread')

const rand = (max)=>Math.floor(Math.random()*max)
const randColor = ()=>{return `rgb(${rand(256)},${rand(256)},${rand(256)})`}
let flag = 1
span.forEach((val,i)=>{
       //set color
       let spanColor = randColor()
       val.style.backgroundColor=spanColor
       val.children[0].innerText=spanColor
        //set color
        //add circle
      if(i == 0 ) return
        let addBtn = document.createElement('span')
       addBtn.classList.add('btn')
       addBtn.innerHTML=`<img src="images/add-fill.png">`

       val.addEventListener('mouseenter',()=>{
              val.appendChild(addBtn)
       })
       val.addEventListener('mouseleave',()=>{
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
              flag++
              return
              }
       })
       //add circle
       //copy to cipborad
       val.addEventListener('click',(e)=>{
              let colorCode = e.currentTarget.children[0].innerText
              navigator.clipboard.writeText(colorCode)
              alert('code coppied to the clipboard')
       })
       //copy to cipborad

})







//setting random colors//