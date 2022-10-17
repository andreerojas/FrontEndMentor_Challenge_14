const btn = document.querySelector('button');
const advice = document.querySelector('.advice');
const adviceNum = document.querySelector('.advice-num');
const getPhrase = async ()=>{
    try{
        const res = await fetch("https://api.adviceslip.com/advice");
        let data = await res.json();
        adviceNum.innerText = data.slip.id;
        advice.innerText = data.slip.advice;
    }catch(e){
        console.log(e);
    }
}


btn.addEventListener('click', getPhrase);

getPhrase();