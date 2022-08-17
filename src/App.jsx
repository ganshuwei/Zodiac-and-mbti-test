import { useState } from "react";
import React from "react";
import "./App.css"
import FormInput from "./components/FormInput";
import calendar from './calender';
import html2canvas from 'html2canvas';










const App=()=>{
    const questions = [
		{
			questionText: 'Where do I tend to get motivation and confidence?',
			answerOptions: [
				{ answerText: 'Others', isCorrect: true },
				{ answerText: 'Myself', isCorrect: false },
				
			],
		},
		{
			questionText: 'When I go to a party, I usually look like this:',
			answerOptions: [
				{ answerText: "The darker the night the more excited I get, and once I start to put in, maybe I'm the last one to leave.", isCorrect: true},
				{ answerText: 'At the beginning of the night, I was tired and wanted to go home.', isCorrect: false},
				
			],
		},
		{
			questionText: 'Which of the following is more attractive？',
			answerOptions: [
				{ answerText: 'Play with my gf/bf and a lot of friends', isCorrect: true },
				{ answerText: 'Stay at home and do something special with my gf/bf, such as watching a funny video and enjoying my favorite take-out food.', isCorrect: false },
			],
		},
		{
			questionText: 'On a date, I usually:',
			answerOptions: [
				{ answerText: 'Very talkative.', isCorrect: true },
				{ answerText: 'Quieter, not speaking until I feel ready.', isCorrect: false },
			],
		},
        {
			questionText: 'In the past, where did I meet most of my lovers？',
			answerOptions: [
				{ answerText: 'In public places, such as during leisure activities, or when friends introduce me to their friends.', isCorrect: true },
				{ answerText: 'Through more private means, such as online dating, online chat, or introduction by close friends and family.', isCorrect: false },
			],
		},
        {
			questionText: 'As for real thoughts, I tend to have:',
			answerOptions: [
				{ answerText: 'Many acquaintances and very close friends.', isCorrect: true },
				{ answerText: 'Some very close friends and some acquaintances.', isCorrect: false },
			],
		},
        {
			questionText: 'In the past, my lovers tended to say this to me:',
			answerOptions: [
				{ answerText: "Couldn't you be quieter?", isCorrect: true },
				{ answerText: "Can you step out of your own world?", isCorrect: false },
			],
		},
        {
			questionText: 'I tend to form concepts in my mind in the following ways:',
			answerOptions: [
				{ answerText: "My imagination and expectations of what is possible.", isCorrect: true },
				{ answerText: "My actual perception of the current situation.", isCorrect: false },
			],
		},
        {
			questionText: 'When I analyze something, the first thing I realize is:',
			answerOptions: [
				{ answerText: "My intuition.", isCorrect: true },
				{ answerText: "My direct observation and experience.", isCorrect: false },
			],
		},
        {
			questionText: 'In my own relationships, I generally handle it like this:',
			answerOptions: [
				{ answerText: "Contact often because there is always room for improvement.", isCorrect: true },
				{ answerText: "If it's not broken, don't fix it.", isCorrect: false },
			],
		},
        {
			questionText: 'When I feel relaxed on a date, I tend to talk about:',
			answerOptions: [
				{ answerText: "Future, the possibilities of future life.", isCorrect: true },
				{ answerText: "Practical, concrete, things about the here and now.", isCorrect: false },
			],
		},
        {
			questionText: 'I am this kind of person:',
			answerOptions: [
				{ answerText: "Look at the big picture first.", isCorrect: true },
				{ answerText: "Get the details first.", isCorrect: false },
			],
		},
        {
			questionText: 'Which one is my opinion？',
			answerOptions: [
				{ answerText: "Instead of living in an imperfect reality, I choose to live in my spiritual world.", isCorrect: true },
				{ answerText: "Instead of living in an ethereal spiritual world, I choose to live in reality.", isCorrect: false },
			],
		},
        {
			questionText: 'I usually:',
			answerOptions: [
				{ answerText: "Prefers to imagine a lot of things about an upcoming date.", isCorrect: true },
				{ answerText: "Prefers to rigidly imagine an upcoming date, expecting only to let it happen naturally.", isCorrect: false },
			],
		},
        {
			questionText: 'I tend to make decisions like this:',
			answerOptions: [
				{ answerText: "First by my heart, then by my logic.", isCorrect: true },
				{ answerText: "First by my logic, then by my heart.", isCorrect: false },
			],
		},
        {
			questionText: "It's easier for me to detect",
			answerOptions: [
				{ answerText: "When people need emotional support.", isCorrect: true },
				{ answerText: "When people are illogical.", isCorrect: false },
			],
		},
        {
			questionText: 'When you break up with someone:',
			answerOptions: [
				{ answerText: "I'm so emotionally trapped in it, it's hard to get out of it.", isCorrect: true },
				{ answerText: "Although I feel hurt, once I make up my mind, I will directly use the shadow of my past lover.", isCorrect: false },
			],
		},
        {
			questionText: 'When dating someone, I tend to measure:',
			answerOptions: [
				{ answerText: "Emotional Compatibility: Expresses affection and is sensitive to the needs of the other half.", isCorrect: true },
				{ answerText: "Intellectual compatibility: communicating important ideas: discussing and debating things objectively.", isCorrect: false },
			],
		},
        {
			questionText: 'When I disagree with what my partner thinks:',
			answerOptions: [
				{ answerText: "I try to avoid hurting my friends as much as possible. If it would hurt him, I wouldn't say it.", isCorrect: true },
				{ answerText: "I'm usually straightforward and don't hesitate to tell the other the facts and my logic because what's right is right.", isCorrect: false },
			],
		},
        {
			questionText: 'People who know me tend to describe me as:',
			answerOptions: [
				{ answerText: "Passionate and sensitive.", isCorrect: true },
				{ answerText: "Logical and clear.", isCorrect: false },
			],
		},
        {
			questionText: 'My encounters with many people are:',
			answerOptions: [
				{ answerText: "More or less purposeful.", isCorrect: false },
				{ answerText: "Casual andfriendly.", isCorrect: true },
			],
		},
        {
			questionText: 'If I have the time and money, and my friend invites me to go on vacation abroad and notifies me a day before, I will:',
			answerOptions: [
				{ answerText: "My schedule must be checked first.", isCorrect: true },
				{ answerText: "Pack my bags immediately.", isCorrect: false },
			],
		},
        {
			questionText: "On the first date:",
			answerOptions: [
				{ answerText: "If he/she is late, I will be very upset.", isCorrect: true },
				{ answerText: "Even if he/she is late, I don't mind it at all.", isCorrect: false },
			],
		},
        {
			questionText: "My preference:",
			answerOptions: [
				{ answerText: "Knowing the date's itinerary in advance: where to go, who's going, how long will I be there, how to dress.", isCorrect: true },
				{ answerText: "Let the date happen naturally without much prior planning.", isCorrect: false },
			],
		},
        {
			questionText: "The life I look forward to includes:",
			answerOptions: [
				{ answerText: "Scientific and reasonable arrangements and perseverance in execution.", isCorrect: true },
				{ answerText: "There is little pressure, everything happens naturally and with great flexibility in time.", isCorrect: false },
			],
		},
        {
			questionText: "Which is more common？",
			answerOptions: [
				{ answerText: "I came first and the others came later.", isCorrect: true },
				{ answerText: "Most people came first and I came last.", isCorrect: false },
			],
		},
        {
			questionText: "I am a person who:",
			answerOptions: [
				{ answerText: "make up my mind quickly and make a final conclusion.", isCorrect: true },
				{ answerText: "release my choices and continue to collect information.", isCorrect: false },
			],
		},
        {
			questionText: "I like:",
			answerOptions: [
				{ answerText: "to concentrate on one thing at a time until it is done.", isCorrect: true },
				{ answerText: "to do several things at the same time.", isCorrect: false },
			],
		},
	];

    const printRef = React.useRef();
    const[values,setValues]=useState({
        birthday:"",
    })
    const[dates,setDates]=useState("")
    const[animals,setAnimals]=useState("")
    const[loading,setLoading]=useState(false)
    const[mbti,setMbti]=useState(false)
    const[showSocre,setShowScore]=useState(false)
    const[E,setE]=useState(0)
    const[N,setN]=useState(0)
    const[F,setF]=useState(0)
    const[J,setJ]=useState(0)
    const[mainpage,setMainpage]=useState(true)


const inputs=[
    {
        id:1,
        name:"birthday",
        type:"date",
        label:""

    },
];

const onChange=(e)=>{
    setDates(e.target.value);
};

const handelsubmit=(e)=>{
    e.preventDefault();
    console.log(dates)
    const year=Number(dates.slice(0,4))
    const month=Number(dates.slice(5,7))
    const day=Number(dates.slice(8,10))
    const animal=calendar.solar2lunar(year,month,day).animal
    setAnimals(animal)
    setLoading(true)
};

const download=async()=>{
    console.log("yes")
    const element = document.getElementById('zodiac');
    const canvas = await html2canvas(element);

    const data = canvas.toDataURL('image/jpg');
    const link = document.createElement('a');

    if (typeof link.download === 'string') {
      link.href = data;
      link.download = 'image.jpg';

      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else {
      window.open(data);
    }
}

const download1=async()=>{
    console.log("yes")
    const element = document.getElementById('mbti');
    const canvas = await html2canvas(element);

    const data = canvas.toDataURL('image/jpg');
    const link = document.createElement('a');

    if (typeof link.download === 'string') {
      link.href = data;
      link.download = 'image.jpg';

      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else {
      window.open(data);
    }
}

const[currentQuestion,setCurrentQuestion]=useState(0);
const[Etype,setEtype]=useState("");
const[Ntype,setNtype]=useState("");
const[Ftype,setFtype]=useState("");
const[Jtype,setJtype]=useState("");

const b1=()=>{
    setMainpage(false);
    
}

const b2=()=>{
    setMbti(true);
    setMainpage(false);
}

const a1=()=>{
    
    setMainpage(true);
    setMbti(false);
}

const handleAnswerButtonClick=(isCorrect)=>{
    if (currentQuestion<=6){
        if(isCorrect===true){
            var help=E+1;
            setE(help);
        }else{
            help=E-1;
            setE(help);
        }
    }

    if(6<currentQuestion<=13){
        if(isCorrect===true){
            help=N+1;
            setN(help);
        }else{
            help=N-1;
            setN(help);
        }
    }
    if(13<currentQuestion<=20){
        if(isCorrect===true){
            help=F+1;
            setF(help);
        }else{
            help=F-1;
            setF(help);
        }
    }
    if(20<currentQuestion<=27){
        if(isCorrect===true){
            help=J+1;
            setJ(help);
        }else{
            help=J-1;
            setJ(help);
        }
    }
    const nextQuestion=currentQuestion+1;
    

    if(nextQuestion<questions.length){
        setCurrentQuestion(nextQuestion);
    }else{
        if(E>0){
            setEtype(Etype+"E")
        }else{
            setEtype(Etype+"I")
        }
        if(N>0){
            setNtype(Ntype+"N")
        }else{
            setNtype(Ntype+"S")
        }
        if(F>0){
            setFtype(Ftype+"F")
        }else{
            setFtype(Ftype+"T")
        }
        if(J>0){
            setJtype(Jtype+"J")
        }else{
            setJtype(Jtype+"P")
        }
        setShowScore(true);
       
    }
    
}


if(mainpage){
    return(
        <div><form>
            <button onClick={b1}>Zodiac</button>
            <button onClick={b2}>mbti</button>
        </form>
            
        </div>
    );
}


if(mbti && !showSocre){
    document.getElementById('body').className="body2";
    return (
		<div className='app'>
			
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion+1}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOptions)=>
                        <button className="button" onClick={()=>handleAnswerButtonClick(answerOptions.isCorrect)}>{answerOptions.answerText}</button>)}
					</div>
				</>
			
		</div>
	);
}

if(showSocre){
    
    

    document.getElementById('body').className="body1";
    var add="image/"+ Etype+Ntype+Ftype+Jtype
    if (Etype+Ntype+Ftype+Jtype==="ENFJ"||Etype+Ntype+Ftype+Jtype=== "ENFP"){
         add=add+".png";
    }else{
        add=add+".JPG";
    }
    
    return(
        <div>

        <button onClick={a1}>Mainpage</button>
        <div className="app3" >
            
            <h1>Your mbti is {Etype+Ntype+Ftype+Jtype}</h1>
            
            
        <img src={add} width={400} id="mbti"></img>
        <span className="dot" onClick={download1}></span>
        </div>
        </div>
    );
}

if(!loading && !mbti){
    
    return (

        <div className="app1">
        <form className="form1" onSubmit={handelsubmit}>
            {inputs.map((input)=>(
                <FormInput key={input.id}{...input} 
                onChange={onChange}
                />
            ))}

            <button className="button1">Submit</button>
        </form>
        </div>
    
        );
}
if(loading && !mbti){  
    return(
        <div>
            <button onClick={a1}>Mainpage</button>
        <div className={animals} id="zodiac">
            <i className="fa fa-download" onClick={download} ></i>
            <h6>gsw,</h6>
            <h5>your zodiac is</h5>
            <h4>{animals}</h4>
            
        </div>
        </div>
    );
}



};


    

export default App;