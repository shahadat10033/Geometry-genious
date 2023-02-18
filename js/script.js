function getInputValue(id){
    return   document.getElementById(id).value ;
   }

   function getInputId(id){
    return   document.getElementById(id);
   }

   function getInputInnerText(id){
    return   document.getElementById(id).innerText ;
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

// -------------------------------------Parallelogram part starts------------------------------------------------------

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

// -------------------------------------parallelogram part starts------------------------------------------------------
document.getElementById("btn-parallelogram-calculate").addEventListener("click",function(){

  
    const innerParallelB=parseInt(getInputInnerText("innerParallelB" ));
    
    const innerParallelH =parseInt(getInputInnerText("innerParallelH"));
    const ParallelogramArea= (innerParallelB*innerParallelH);
    
   const  areaResultField=getInputId("area-result-field");
    if(ParallelogramArea<0 ){
        alert("plz type a valid number");
    }
    else{ let li=document.createElement("li");
    li.classList.add("list-group-item")
    li.innerHTML=`  Parallelogram     A = ${ParallelogramArea }  cm<sup>2</sup> <button class="btn btn-primary">convert to m<sup>2</sup></button>`
 
     areaResultField.appendChild( li )}
  

})

// -------------------------------------parallelogram part End-----------------------------------------------------

// -------------------------------------Rhombus part starts------------------------------------------------------


document.getElementById("btn-rhombus-calculate").addEventListener("click",function(){

  
    const innerRhombusD1=parseInt(getInputInnerText("innerRhombusD1" ));
    
    const innerRhombusD2 =parseInt(getInputInnerText("innerRhombusD2"));
    const RhombusArea= (innerRhombusD1*innerRhombusD1);
    
   const  areaResultField=getInputId("area-result-field");
    if(RhombusArea<0 ){
        alert("plz type a valid number");
    }
    else{ let li=document.createElement("li");
    li.classList.add("list-group-item")
    li.innerHTML=`  Rhombus     A = ${RhombusArea }  cm<sup>2</sup> <button class="btn btn-primary">convert to m<sup>2</sup></button>`
 
     areaResultField.appendChild( li )}
  

})

// -------------------------------------Rhombus part Ends------------------------------------------------------