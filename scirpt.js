// SECTIONS
const howTo = document.querySelector('.how-container')
const menuBox = document.querySelector('.menu-container');
const main = document.querySelector('.main-container');
const rResult = document.getElementById('score');
let fScore = 0

//MENU SECTION
const buttonHow = document.getElementById('button-how');
const buttonPlay = document.getElementById('button-play');
buttonHow.addEventListener('click', function(){
    menuBox.style.display = 'none';
    howTo.style.display = 'block';
})
buttonPlay.addEventListener('click', function(){
    menuBox.style.display = 'none';
    main.style.display = 'flex';
})

// CARA BERMAIN
const buttonHowBack = document.querySelector('.how-button button:first-of-type');
const buttonHowPlay = document.querySelector('.how-button button:last-of-type');
buttonHowBack.addEventListener('click',function(){
    howTo.style.display = 'none';
    menuBox.style.display = 'flex';
});

buttonHowPlay.addEventListener('click', function(){
    howTo.style.display= 'none';
    main.style.display= 'flex';
});


//MAIN SECTION
const buttonMainBack = document.getElementById('button-main-back');
buttonMainBack.addEventListener('click', function(){
    main.style.display= 'none';
    menuBox.style.display='flex';
    fScore = 0;
    rResult.innerHTML= '';
})

//Com AI
function comAI(){
    const com = Math.random();
    if(com < 0.34) return 'semut';
    if(com > 0.34 && com < 0.67) return 'gajah';
    return 'manusia';
};

//Rule
function rule(com, player){
    if(com == player) return 'SERI';
    if(player == 'gajah') return(com == 'manusia') ? 'MENANG' : 'KALAH';
    if(player == 'semut') return(com == 'gajah') ? 'MENANG' : 'KALAH';
    if(player == 'manusia') return(com == 'semut') ? 'MENANG' : 'KALAH';
};

//Putar Gambar
function putarGambar(){
    const pComp = document.querySelector('.container-comp img');
    const pComps = ['gajah', 'semut', 'manusia'];
    let i = 0; 
    const waktuAwal = new Date().getTime();
    setInterval(function(){
        if(new Date().getTime() - waktuAwal > 1000){
            clearInterval;
            return
        }
        pComp.setAttribute('src', 'img/' + pComps[i++] + '.jpg');
        if(i == pComps.length){
            i = 0;
        }
    },100)
}

function putarHasil(){
    const pHasil = document.querySelector('.hasil p');
    const pHasiil = ['SERI', 'MENANG', 'KALAH'];
    let i = 0;
    const waktuAwal = new Date().getTime();
    setInterval(function(){
        if(new Date().getTime() - waktuAwal > 1000){
            clearInterval;
            return;
        }
        pHasil.innerHTML = pHasiil[i++];
        if(i == pHasiil.length){
            i = 0;
        }
    }, 100)
}

//Player
const Pictures = document.querySelectorAll('.container-player img');
Pictures.forEach(function(Picture){
    Picture.addEventListener('click', function(){
        const sCom = comAI();
        const sPlay = Picture.className;
        const hasil = rule(sCom, sPlay);

        putarGambar();
        putarHasil();

        setTimeout(function(){
            const pCom = document.querySelector('.container-comp img');
            pCom.setAttribute('src', 'img/' + sCom + '.jpg');
    
            const rHasil = document.querySelector('.hasil p');
            rHasil.innerHTML = hasil;

            //SKOR
            if(hasil == 'MENANG'){
                fScore += 100;
            }if(hasil =='KALAH'){
                fScore -= 100;
            }if(hasil =='SERI'){
                fScore += 50;
            }
            rResult.innerHTML = fScore;
        }, 1000)

    })
});

// Score-Help
const scoreHelp = document.getElementById('score-help');
const boxScoreHelp = document.querySelector('.score-help-box');
const okBoxHelp = document.querySelector ('.score-help-box button');
scoreHelp.addEventListener('click', function(){
    boxScoreHelp.style.display='flex';
})

okBoxHelp.addEventListener('click', function(){
    boxScoreHelp.style.display='none';
})