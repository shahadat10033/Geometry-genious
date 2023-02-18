function getInputValue(id){
    return   document.getElementById(id).value ;
   }

   function getInputId(id){
    return   document.getElementById(id);
   }

// -------------------------------------Triangle part starts------------------------------------------------------

document.getElementById("btn-triangle-calculate").addEventListener("click",function(){

  
    const inputTriangleB=parseFloat(getInputValue("input-triangle-b" ));
    
    const inputTriangleH=parseFloat(getInputValue("input-triangle-h" ));
    const triangleArea=( 0.5* inputTriangleB*inputTriangleH) .toFixed(2);
    
    const AreaResultField=getInputId("area-result-field");
    if( triangleArea<0   ){
        alert("plz type a valid number");
    }
    else{ let li=document.createElement("li");
    li.classList.add("list-group-item")
    li.innerHTML=`  Triangle     A = ${triangleArea }  cm<sup>2</sup> <button class="btn btn-primary">convert to m<sup>2</sup></button>`
 
    AreaResultField.appendChild( li )}
  

})

// -------------------------------------Triangle part end------------------------------------------------------

// -------------------------------------Rectangle part starts------------------------------------------------------

document.getElementById("btn-rectangle-calculate").addEventListener("click",function(){

  
    const inputRectangleW=parseFloat(getInputValue("input-rectangle-w" ));
    
    const inputRectangleL =parseFloat(getInputValue("input-rectangle-l" ));
    const RectangleArea= (inputRectangleW*inputRectangleL).toFixed(2);
    
   const  areaResultField=getInputId("area-result-field");
    if(RectangleArea<0 ){
        alert("plz type a valid number");
    }
    else{ let li=document.createElement("li");
    li.classList.add("list-group-item")
    li.innerHTML=`  Rectangle     A = ${RectangleArea }  cm<sup>2</sup> <button class="btn btn-primary">convert to m<sup>2</sup></button>`
 
     areaResultField.appendChild( li )}
  

})
// -------------------------------------Rectangle part Ends------------------------------------------------------
