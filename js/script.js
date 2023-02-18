function getInputValue(id){
    return   document.getElementById(id).value;
   }

   function getInputId(id){
    return   document.getElementById(id);
   }

// -------------------------------------Triangle part starts------------------------------------------------------

document.getElementById("btn-triangle-calculate").addEventListener("click",function(){

  
    const inputTriangleB=parseFloat(getInputValue("input-triangle-b" ));
    
    const inputTriangleH=parseFloat(getInputValue("input-triangle-h" ));
    const triangleArea= 0.5* inputTriangleB*inputTriangleH;
    
    const areaResultField=getInputId("area-result-field");
    if(typeof triangleArea<=0 || inputTriangleB !==Number||inputTriangleH!==Number){
        alert("plz type a valid number");
    }
    else{ let li=document.createElement("li");
    li.classList.add("list-group-item")
    li.innerHTML=`  Triangle     A = ${triangleArea }  cm<sup>2</sup> <button class="btn btn-primary">convert to m<sup>2</sup></button>`
 
     areaResultField.appendChild( li )}
  

})

// -------------------------------------Triangle part end------------------------------------------------------

