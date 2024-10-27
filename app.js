
let song= new Audio('song.mp3')
let gameOver= new Audio('gameover.mp3')



function playSong(){

    song.play()
}




function createNewBubbles(){

    const randomNum=Math.floor(Math.random()*100)

    for(let i=0; i<=143; i++){

        const randomNum=Math.floor(Math.random()*100)


        let newBubble=document.createElement('div')
        newBubble.classList.add('bubble')
        newBubble.innerHTML=randomNum;
        document.querySelector('.bubbles').appendChild(newBubble)


    }

}


let  time=60;

function timer(){

    let Interval=setInterval(() => {
        
        if(time===0){

            clearInterval(Interval)
            document.querySelector('.bubbles').innerHTML='';
            document.querySelector('.bubbles').innerHTML='<h2>Game Over </h2>'
            document.querySelector('.hit').innerHTML=0;
            song.pause()
            gameOver.play()
            
            
        } else{
            time--

            document.querySelector('.timer').
            textContent=time;
        }
      

    }, 1000);

}

let newHit='';


function createNewHit(){

     newHit=Math.floor(Math.random()*100)
    document.querySelector('.hit').innerHTML=newHit;
}




function increaseScore(){

    let score=0;

    document.querySelector('.bubbles').addEventListener('click',(val)=>{

        if(val.target.classList.contains('bubble')){

            const clickedNum= parseInt(val.target.innerHTML)

            if(clickedNum==newHit){


                let right= new Audio('right.mp3')
                right.play()
                score+=10;
                document.querySelector('.score').innerHTML=score;
                createNewHit()

            } else{


                let sound= new Audio('wrong.mp3')

            
                sound.play();

        

                val.target.style.backgroundColor='red'
                  val.target.style.color='white'

                  if(song.paused){

                    song.play()


                  }

                setTimeout(() => {

                    val.target.style.backgroundColor=''
                  val.target.style.color=''
                  

                     
                }, 1000);
               



            }

        }

    })

}


increaseScore()
createNewHit()

timer()

createNewBubbles()
playSong();


