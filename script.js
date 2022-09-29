let questionBank = [
  {
      question : 'In the UK, the abbreviation NHS stands for National what Service?',
      option : ['Humanity','Health','Honour','Household'],
      answer : 'Health'
  },
  {
      question : 'Eritrea, which became the 182nd member of the UN in 1993, is in the continent of',
      option : ['Asia','Africa','Europe','Australia'],
      answer : 'Africa'
    },
    {
      question : 'For which of the following disciplines is Nobel Prize awarded?',
      option : ['Physics and Chemistry','All of the above','Literature, Peace and Economics','Physiology or Medicine'],
      answer : 'All of the above'
  },
  {
      question : 'Exposure to sunlight helps a person improve his health because',
      option : ['the infrared light kills bacteria in the body','the ultraviolet rays convert skin oil into Vitamin D','resistance power increases','the pigment cells in the skin get stimulated and produce a healthy tan'],
      answer : 'the ultraviolet rays convert skin oil into Vitamin D'
  },
  {
      question: 'Philology is the',
      option : ['study of bones','science of languages','study of muscles','study of architecture'],
      answer : 'science of languages'
  },
  {
      question: 'Which of these teams never won the Uefa Champions League',
      option : ['Blackburn','Bayern Munich','Manchester City','Liverpool'],
      answer : 'Manchester City'
  },
  {
      question: "The first person to walk on the moon is",
      option : ['Neil Armstrong','Hilary Clinton','Nelson Mandela','Oshoala Habibullah'],
      answer : 'Neil Armstrong'
  },
  {
      question: 'ICAO stands for',
      option : ['Indian Corporation of Agriculture Organization','International Civil Aviation Organization','Institute of Company of Accounts Organization','None of the above'],
      answer : 'International Civil Aviation Organization'
  },
  {
      question: 'What is 3(2-1)',
      option : ['1','2','3','4'],
      answer : '3'
    },
  {
      question: 'When light passes from air into glass it experiences change of',
      option : ['frequency and wavelength','wavelength and speed','frequency and speed','frequency, wavelength and speed'],
      answer : 'wavelength and speed'
  }
]

let i = 0;
let mySong = new Audio('Audio/playing.mp3')
let score = 5000;
let next = document.querySelector('.next');
let span = document.querySelectorAll('button');

let wrongSong = new Audio('Audio/wrong.mp3')
let rightSong = new Audio('Audio/correct.mp3')
let deleteTwo = new Audio('50-50_sound.mp3')
let closingSong = new Audio('Closing Theme_sound.mp3')
let audienceSong = new Audio('Ask The Audience_sound.mp3')
let friendSong = new Audio('Phone-A-Friend_sound.mp3')
let timeUpSong = new Audio('Time_Up_sound.mp3')


function displayQuestion(){
  question.innerHTML = questionBank[i].question;
  option_1.innerHTML = questionBank[i].option[0];
  option_2.innerHTML = questionBank[i].option[1];
  option_3.innerHTML = questionBank[i].option[2];
  option_4.innerHTML = questionBank[i].option[3];
}
displayQuestion()

function calcScore(e){
  if(e.innerHTML === questionBank[i].answer && score > questionBank.length){
      score += 5000;
      document.getElementById(e.id).style.background = 'limegreen';
      rightSong.play()
      
    }
  
  else{
    wrongSong.play()
    document.getElementById(e.id).style.background = 'tomato';
      setTimeout(() => {window.location.href = "gameover.html"} ,1700)
    }
    setTimeout(nextQuestion,2000);
  }
  var countDown =()=>{
  let countedSecs = secs.value;
  countedSecs-- ;
  secs.value =  countedSecs
  myTimeout = setTimeout(countDown, 1000)
  if(countedSecs==0){
    gameOver.innerHTML = "Time Up"
    gameOver.style.color = "red"
    secs.value = "00"
    secs.style.color = "red"
      clearInterval(myTimeout)
      setTimeout(() => {
          location.reload()
        }, 1150);
      }
}
function nextQuestion(){
  
  if(i < questionBank.length - 1){
    document.getElementById('option_1').style.background = 'blueviolet';
    document.getElementById('option_2').style.background = 'blueviolet';
    document.getElementById('option_3').style.background = 'blueviolet';
    document.getElementById('option_4').style.background = 'blueviolet';
    
      i += 1
      displayQuestion();
      
    }
    else{
      question_body.style.display = 'none';
      won.style.display = 'block';
      won.innerHTML = `
      <p class="fs-1 congracts">Congractulatios</p>
      <p class="fs-2 text-light">You are one of the lucky people to have been able to win a sum of $ ${score}</p>
      <button class="btn btn-outline-success" onclick="reStart()">Start Again</button>

      `
    }
}
function reStart(){
  location.reload()
}