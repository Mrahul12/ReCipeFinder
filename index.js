// let name= document.querySelector(".name");
// let email = document.querySelector(".email");
let container= document.querySelector(".container");
let text= document.querySelector("#text");
let button= document.querySelector("button");
let thumbnal=document.querySelector('#thumbnal');
let recipename=document.querySelector('.recipename');
let categry=document.querySelector('.category');
let instruction=document.querySelector('.instruction');
let menu1=document.querySelector('.menu1');
let menu2=document.querySelector('.menu2');
let menu3=document.querySelector('.menu3');
let menu4=document.querySelector('.menu4');
let menu5=document.querySelector('.menu5');
let menu6=document.querySelector('.menu6');
let menu7=document.querySelector('.menu7');
let menu8=document.querySelector('.menu8');
let menu9=document.querySelector('.menu9');
let menu10=document.querySelector('.menu10');
let menu11=document.querySelector('.menu11');
let menu12=document.querySelector('.menu12');
let options=document.querySelector('option');

button.addEventListener('click',(e)=>{
  e.preventDefault();
const apiKey=`https://www.themealdb.com/api/json/v1/1/search.php?s=${text.value}`;
fetch(apiKey).then( async(response)=>{
    const value=await response.json();
    return value;
}).then((data)=>{
  const datas=data.meals;
  // console.log(datas[0].strMeal);
  datas.forEach((val)=>{
    thumbnal.src=val.strMealThumb;
    recipename.textContent=val.strMeal;
    categry.textContent=val.strCategory;
    instruction.textContent=val.strInstructions;
    menu1.textContent=`${val.strIngredient1}  :  ${val.strMeasure1}`;
    menu2.textContent=`${val.strIngredient2}  :  ${val.strMeasure2}`;
    menu3.textContent=`${val.strIngredient3}  :  ${val.strMeasure3}`;
    menu4.textContent=`${val.strIngredient4}  :  ${val.strMeasure4}`;
    menu5.textContent=`${val.strIngredient5}  :  ${val.strMeasure5}`;
    menu6.textContent=`${val.strIngredient6}  :  ${val.strMeasure6}`;
    menu7.textContent=`${val.strIngredient7}  :  ${val.strMeasure7}`;
    menu8.textContent=`${val.strIngredient8}  :  ${val.strMeasure8}`;
    menu9.textContent=`${val.strIngredient9}  :  ${val.strMeasure9}`;
    menu10.textContent=`${val.strIngredient10}  :  ${val.strMeasure10}`;
    menu11.textContent=`${val.strIngredient11}  :  ${val.strMeasure11}`;
    menu12.textContent=`${val.strIngredient12}  :  ${val.strMeasure12}`;

  })
}).catch((e)=>console.log('Error comes to the intercode :'+e.message));

})