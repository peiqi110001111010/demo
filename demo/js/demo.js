const myHeading = document.querySelector("h1");
myHeading.textContent="Hello world!";
const mytest=10;
// mytest=11;//const赋值后不能修改值，再次需修改会报错


const mytestB=document
  .querySelector("#button1")
  .addEventListener("click", function(){
    alert(mytestB);
  });//函数名为引用，不可写成fun(),加载网页时候就会被调用。


 const Myimg=document.getElementById("img-turn-sit");
 const MYbutton = document.getElementById("button-turn");
  MYbutton.addEventListener("click",() => {
        const src=Myimg.getAttribute("src");
         if(src==="../img/img-two.jpg"){
            Myimg.setAttribute("src","../img/img-three.jpg");
         }
         else{
            Myimg.setAttribute("src","../img/img-two.jpg");
         }
            });


let buttontest=document.getElementById("button-test");
function setUserName(){
  const myName=prompt("please enter your name.");
  localStorage.setItem("name",myName);
  /*代码调用 localStorage API，它允许我们将数据存储在浏览器中并供后续获取。*/
  if (!myName) {
    setUserName();/*如果用户一直不输入信息，会出现死循环，若避免死循环，可限制次数*/
  } else {
    myHeading.textContent = `Mozilla is cool,${myName}`;
    /*这里``是反引号，而不是双引号或单引号 */
  }
}
buttontest.onclick=function(){
  setUserName();
}

