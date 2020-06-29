
const runBtn=document.querySelector(".run-btn");
const goHomeBtn=document.querySelector(".go-home-btn");


/* MAIN FUNCTION FOR RENDERING TEXTAREA CODE TO IFRAME */
function run_code() {
    var iframe = document.getElementById('iframe');
    iframe = (iframe.contentWindow) ? iframe.contentWindow : (iframe.contentDocument) ? iframe.contentDocument.document : iframe.contentDocument;
    iframe.document.open();
    // GET CODEMIRROR TEXTAREA VALUE [ editor.getValue() ]
    iframe.document.write(editor.getValue());
    iframe.document.close();
    return false;
}
//WHEN CLICKED RUN BUTTON
runBtn.addEventListener("click",()=>{
      run_code();
    })
   

goHomeBtn.addEventListener("click",()=>{
      GoHome();
    })

function GoHome()
    {
      window.location="../../../../../../Content5/Tryit.html";
    }
