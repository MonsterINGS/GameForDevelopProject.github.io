
const runBtn=document.querySelector(".run-btn");
const gowebBtn=document.querySelector(".web-btn");

runBtn.addEventListener("click",()=>{
      NextPage();
    })

function NextPage()
    {
      window.location="Tryit1/Tryit.html";
    }



gowebBtn.addEventListener("click",()=>{
      Goweb();
    })

function Goweb()
    {
      window.location="https://www.w3schools.com/html/html_forms.asp";
    }