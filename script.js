
var plus=document.getElementById("add-popup")
 var popbox=document.querySelector(".popup-box")
 var popoverlay=document.querySelector(".popup-overlay")
 
 plus.addEventListener("click",function(){
     popoverlay.style.display="block"
     popbox.style.display="block"
 })


var cancelpopup=document.getElementById("cancel-popup")
cancelpopup.addEventListener('click',function(event){
    event.preventDefault(event)
    popoverlay.style.display="none"
     popbox.style.display="none"

})


//secting container,add in popupbutton, selct bookname,book author,description 

var addbook=document.getElementById("add-book")
var container=document.querySelector(".container")
var bookname=document.getElementById("book-name")
var bookauthor=document.getElementById("book-author")
var bookdes=document.getElementById("book-description")

addbook.addEventListener("click",function(event){
     event.preventDefault(event)
     var div=document.createElement("div")
     div.setAttribute("class","book-container")
     div.innerHTML=`<h2>${bookname.value}</h2>
            <h5>${bookauthor.value}</h5>
            <p>${bookdes.value}</p>
            <button  onclick="deletee(event)" class="deleete">Delete</button>`
     container.append(div)
     popoverlay.style.display="none"
     popbox.style.display="none"
     bookname.value = "";
     bookauthor.value = "";
     bookdes.value = "";
})


//delete

function deletee(event){
   event.target.parentElement.remove()


}




