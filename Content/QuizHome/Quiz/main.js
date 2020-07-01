
const questionText=document.querySelector(".question-text");
const optionBox=document.querySelector(".option-box");
const currentQuestionNum=document.querySelector(".current-question-num");
const nextQuestionBtn=document.querySelector(".next-question-btn");
const correctAnswers=document.querySelector(".correct-answers");
const seeResultBtn=document.querySelector(".see-result-btn");
const remainingTime=document.querySelector(".remaining-time");
const timeUpText=document.querySelector(".time-up-text");
const quizHomeBox=document.querySelector(".quiz-home-box");
const quizBox=document.querySelector(".quiz-box");
const quizOverBox=document.querySelector(".quiz-over-box");
const goHomeBtn=document.querySelector(".go-home-btn");
const startQuizBtn=document.querySelector(".start-quiz-btn");
let attemp = 0;
let questionIndex=0;
let score = 0;
let number = 0;
let myArray = [];
let interval;

// array of object
myApp=[
		{
			question:"ข้อไหนคือ Snytax แรกสุดของ HTML",
			options:["script","!DOCTYPE html","http"],
			answer:1,
		},
		{
			question:"ข้อไหนคือ คำสั่งที่ใช้เรียกเชื่อมต่อกับ CSS ภายนอก",
			options:["Li","ul","Link","script"],
			answer:2,
		},
		{
			question:"ส่วนไหนคือการสร้างหรือปรับปรุงเนื้อหาของ HTML",
			options:["Head","Body","Title","Script"],
			answer:1,
		},
		{
			question:"คำสั่งไหนคือคำสั่งที่ถูกของการ hyperlink",
			options:[
			"a href = http://www.google.com/ google.com /a",
			"a http://www.google.com/ /a",
			"a http://www.google.com/ /a",
			"a url = http://www.google.com/> google.com /a"],
			answer:0,
		},
		{
			question:"ข้อไหนคือคำสั่ง input type ในการให้ผู้ใช้เลือกแค่ตัวเลือกเดียว",
			options:["input type = checkbox",
			"input type = radio",
			"input type = submit ",
			"input type = action "],
			answer:1,
		},
		{
			question:"คำสั่งไหนคือคำสั่งที่ถูกของการใส่ชื่อใน class",
			options:["class = 'name' ",
			"class 'name' ",
			" = 'name' class ",
			" class name = "],
			answer:0,
		},
		{
			question:"ข้อใดคือส่วนประกอบที่สำคัญ ของ CSS Box Model",
			options:["Content Class Padding Body",
			"Content Head Padding Body",
			"Content Padding Border Margin",
			"Content Border Head Margin"],
			answer:2,
		},
		{
			question:"โค้ดในข้อไหนไม่ใช่โค้ดการตกแต่ง Font ใน CSS",
			options:["font-style:","font-family:","font-size:","font-item:"],
			answer:3,
		},
		{
			question:"ข้อใดคือชื่อของประเภทที่ใช้สร้างหัวข้อใน Form",
			options:["label","action","input","submit"],
			answer:0,
		},
		{
			question:"ข้อไหนคือ คำสั่งที่ใช้สร้างปุ่มใน Form",
			options:["input type = checkbox",
			"input type = BUTTON",
			"input type = Label",
			"input type = Textarea"],
			answer:1,
		},
		{
			question:"ข้อไหนคือ คำสั่งกำหนดเริ่มสร้างตาราง",
			options:["table",
			"tr",
			"caption",
			"td"],
			answer:0,
		},
		{
			question:"ข้อไหนคือ Tag การสร้างรายการแบบมีลำดับ",
			options:["iu",
			"og",
			"ul",
			"ol"],
			answer:3,
		},
		{
			question:"ข้อใดไม่จัดว่าเป็นFormatting Elements",
			options:["b",
			"s",
			"i",
			"sub"],
			answer:1,
		},
		{
			question:"ข้อใดเป็นขนาดใหญ่ที่สุดของ Heading",
			options:["h1",
			"h7",
			"h4",
			"h6"],
			answer:3,
		},
		{
			question:"HTML ย่อมาจากคำว่าอะไร",
			options:["hightech Markup Language",
			"Home tool Markup Languagea",
			"Hypertext Markup Language",
			"Hyperlink and Text Markup Language"],
			answer:2,
		},
		{
			question:"ข้อไหนคือ โค้ดการเปลี่ยนสีพื้นหลังใน CSS",
			options:["background-color",
			"bg-color",
			"color-background",
			"background-c"],
			answer:0,
		},
		{
			question:"CSS ย่อมาจากคำว่าอะไร",
			options:["Computer Style Sheets",
			"Colorful Style Sheets",
			"Creative Style Sheets",
			"Cascading Style Sheets"],
			answer:3,
		},
		{
			question:"ข้อไหนคือ Tag การเรียกใช้ CSS บน HTML",
			options:["Slide",
			"Link",
			"Style",
			"Script"],
			answer:2,
		},
		{
			question:"ข้อไหนคือ Tag การสร้างรายการแบบไม่มีลำดับ",
			options:["og",
			"ol",
			"ul",
			"iu"],
			answer:2,
		},
		{
			question:"ข้อไหนคือ Tag การเรียกใช้ JavaScript",
			options:["JavaScript",
			"script",
			"Link script='JavaScript'",
			"JS"],
			answer:1,
		},




	  ]
	  console.log(myApp)
	  startQuizBtn.classList.add("show");
	  function load(){
	  	number++;
	  	questionText.innerHTML=myApp[questionIndex].question;
	  	createOptions();
	  	scoreBoard();
	  	currentQuestionNum.innerHTML=number + " / " + 10;
	  	startQuizBtn.classList.remove("show");
	  }
	  function createOptions(){
	  	optionBox.innerHTML="";
	  	for(let i=0; i<myApp[questionIndex].options.length;i++){
	  		const option=document.createElement("div");
	  			  option.innerHTML=myApp[questionIndex].options[i];
	  			  option.classList.add("option");
	  			  option.id=i;
	  			  option.setAttribute("onclick","check(this)");
	  			  optionBox.appendChild(option);
	  	}
	  }

	  function generateRandomQuestion(){
	  	const randomNumber = Math.floor(Math.random() * myApp.length);
	  	let hitDuplicate = 0;
	  	if(myArray.length == 0){
	  		questionIndex = randomNumber;
 
	  	}
	  	else{
	  		for (let i = 0; i < myArray.length ; i++) {
	  			if (randomNumber == myArray[i]) {
	  				hitDuplicate=1;
	  			}
	  		}
	  		if (hitDuplicate == 1) {
	  			generateRandomQuestion();
	  			return;
	  		}else{
	  			questionIndex=randomNumber;
	  		}
	  	}
	  	console.log(myArray)
	  	myArray.push(randomNumber);
	  	load();
	  }

	  function check(ele){
	  	const id=ele.id;
	  	if(id==myApp[questionIndex].answer){
	  		ele.classList.add("correct");
	  		score++;
	  		scoreBoard();
	  	}
	  	else{
	  		ele.classList.add("wrong");

	  		for(let i=0; i < optionBox.children.length;i++){
	  			if (optionBox.children[i].id==myApp[questionIndex].answer){
	  				optionBox.children[i].classList.add("show-correct");
	  			}
	  	}
	  }

	  	//function timeIsUp(){

	  	//}

	  	attemp++;
	  	disableOptions();
	  	showNextQuestionBtn();
	  	stopTimer();

	  	if (number == 10) {
	  		quizOver();
	  	}

	  }

		function timeIsUp(){
			showTimeUpText();

			for(let i=0; i < optionBox.children.length;i++){
	  			if (optionBox.children[i].id==myApp[questionIndex].answer){
	  				optionBox.children[i].classList.add("show-correct");
			}
			disableOptions();
			showNextQuestionBtn();
	  		stopTimer();

	  		if (number == 10) {
	  		quizOver();
	  		}
		}
	}

	function statTimer(){
		let timeLimit = 15;
		remainingTime.innerHTML=timeLimit;
		remainingTime.classList.remove("less-time");
		interval=setInterval(()=>{
			timeLimit--;
			if(timeLimit < 10){
				timeLimit="0"+timeLimit;
			}
			if(timeLimit < 6){
				remainingTime.classList.add("less-time");
			}
			remainingTime.innerHTML=timeLimit;
			if(timeLimit == 0){
				clearInterval(interval);
				timeIsUp();
			}
		},1000)
	}	

	function stopTimer(){
		clearInterval(interval);
	}

	  function disableOptions(){
	  	for(let i=0; i<optionBox.children.length;i++){
	  		optionBox.children[i].removeAttribute("onclick");
	  	}
	  }

	  function showNextQuestionBtn(){
	  	nextQuestionBtn.classList.add("show");
	  }

	  function hideNextQuestionBtn(){
	  	nextQuestionBtn.classList.remove("show");
	  }

	  function showTimeUpText(){
	  	timeUpText.classList.add("show");
	  }

	  function hideTimeUpText(){
	  	timeUpText.classList.remove("show");
	  }

	  function scoreBoard(){
	  	correctAnswers.innerHTML=score;
	  }

	  nextQuestionBtn.addEventListener("click",nextQuestion);

	  function nextQuestion(){
	  	generateRandomQuestion();
	  	hideNextQuestionBtn();
	  	hideTimeUpText();
	  	statTimer();
	  }

	  function quizResult(){
	  	document.querySelector(".total-questions").innerHTML=10;
	  	document.querySelector(".total-attemp").innerHTML=attemp;
	  	document.querySelector(".total-correct").innerHTML=score;
	  	document.querySelector(".total-wrong").innerHTML=attemp-score;
	  	const percentage = (score/10)*100;
	  	document.querySelector(".percentage").innerHTML=percentage.toFixed(2)+ "%";
	  	goHomeBtn.classList.add("show");
	  }

	  function resetQuiz(){
	  	attemp=0;
	  	//questionIndex=0;
	  	score=0;
	  	myArray=[];
	  }

	  function quizOver(){
	  	nextQuestionBtn.classList.remove("show");
	  	seeResultBtn.classList.add("show");
	  }

	  seeResultBtn.addEventListener("click",()=>{
	  	//quizBox.style.display="none";
	  	quizBox.classList.remove("show");
	  	seeResultBtn.classList.remove("show");
	  	quizOverBox.classList.add("show");
	  	quizResult();
	  })

	  goHomeBtn.addEventListener("click",()=>{
	  	quizOverBox.classList.remove("show");
	  	quizHomeBox.classList.add("show");
	  	GoHome();
	  	resetQuiz();
	  })

	  startQuizBtn.addEventListener("click",()=>{
	  	quizHomeBox.classList.remove("show");
	  	quizBox.classList.add("show");
	  	nextQuestion();
	  })

	  function GoHome()
	  {
	  	goHomeBtn.classList.remove("show");
	  	window.location="../../Content.html";
	  }

	 // window.onload=()=>{
	  //	load();
	  //	statTimer();
	  //	generateRandomQuestion();
	 // }