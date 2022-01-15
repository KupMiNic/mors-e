const input = document.querySelector('.input');
const crypt = document.querySelector('.spell');
const show = document.querySelector('.show');
const header = document.querySelector('header');
const acceptable = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'z', 'x', 'c', 'v', 'b', 'n', 'm', '1', '2', '3', '4', '5', '6', '7' , '8', '9', '0', ' '];
let control = false;
let flaga_section = 0;

var krtk = new Audio('noise/krtk.mp3');
var dlg = new Audio('noise/dlg.mp3');

let fresh = [];
let baked = [];
let voice = [];

const convert = function(e) {
        if (e=='a') {voice.push('.','-');}
        if (e=='b') {voice.push('-','.','.','.');}
        if (e=='c') {voice.push('-','.','-','.');}
        if (e=='d') {voice.push('-','.','.');}
        if (e=='e') {voice.push('.');}
        if (e=='f') {voice.push('.','.','-','.');}
        if (e=='g') {voice.push('-','-','.');}
        if (e=='h') {voice.push('.','.','.','.');}
        if (e=='i') {voice.push('.','.');}
        if (e=='j') {voice.push('.','-','-','-');}
        if (e=='k') {voice.push('-','.','-');}
        if (e=='l') {voice.push('.','-','.','.');}
        if (e=='m') {voice.push('-','-');}
        if (e=='n') {voice.push('-','.');}
        if (e=='o') {voice.push('-','-','-');}
        if (e=='p') {voice.push('.','-','-','.');}
        if (e=='q') {voice.push('-','-','.','-');}
        if (e=='r') {voice.push('.','-','.');}
        if (e=='s') {voice.push('.','.','.');}
        if (e=='t') {voice.push('-');}
        if (e=='u') {voice.push('.','.','-');}
        if (e=='v') {voice.push('.','.','.','-');}
        if (e=='w') {voice.push('.','-','-');}
        if (e=='x') {voice.push('-','.','.','-');}
        if (e=='y') {voice.push('-','.','-','-');}
        if (e=='z') {voice.push('-','-','.','.');}
        
        if (e=='1') {voice.push('.','-','-','-','-');}
        if (e=='2') {voice.push('.','.','-','-','-');}
        if (e=='3') {voice.push('.','.','.','-','-');}
        if (e=='4') {voice.push('.','.','.','.','-');}
        if (e=='5') {voice.push('.','.','.','.','.');}
        if (e=='6') {voice.push('-','.','.','.','.');}
        if (e=='7') {voice.push('-','-','.','.','.');}
        if (e=='8') {voice.push('-','-','-','.','.');}
        if (e=='9') {voice.push('-','-','-','-','.');}
        if (e=='0') {voice.push('-','-','-','-','-');}
        
        if (e==' ') {voice.push('/');}
    }

/*----------------------------------------------------------------------------------Walidacja*/
input.addEventListener('input', (e) => {
});

const valid = function(e) {
    let flag = 0;
    for (i=0; i<acceptable.length;i++)
    {
        if (e==acceptable[i]) {flag=1;}
    }
    if (flag==0) { alert(`Niedozwolona wartość: \n ---->${e}<-----`)};
};


    // let container = document.createElement('section');
    // document.body.appendChild(container);

    // let signal = document.createElement(`h${i}`)
    // container.appendChild(signal);
/*----------------------------------------------------------------------------------Main*/


const trigger = function(e) {
    if (flaga_section==1)
    {
        const okoko = document.querySelector('.container');
        okoko.remove();
        flaga_section==0;
    }
    flaga_section=1;
    fresh=[];
    baked=[];
    fresh.push(input.value);
    for (let i=0; i<fresh[0].length;i++) {
        baked.push(fresh[0].charAt(i));
    } 
    baked.forEach(valid);
    voice=[];
    baked.forEach(convert);
    baked.forEach((e) => {
        if(acceptable.includes(e))
        {
        } else {voice=[];}
    });
    show.innerHTML='';
    let container = document.createElement('section');
    container.classList.add('container');
    for(let i=0;i<voice.length;i++)
    {
        let signal = document.createElement(`h${i}`)
        container.appendChild(signal);
        //show.innerHTML+=voice[i];
        signal.innerText=voice[i];
    }
    header.appendChild(container);
    //const okoko = document.querySelector('.container');
    //okoko.remove()
    //okoko.removeChild(okoko.childNodes[1])
    i=0;
    let colorFlag = 0;
    myLoop();
    function myLoop() {        
        setTimeout(() => { 
            const raw = document.querySelector('.container');
            
            if (voice[i]==' ') { console.log('spacja');}     
            if (voice[i]=='.') 
            {
                krtk.play();
                raw.childNodes[colorFlag].classList.add('crims');
            }
            else if (voice[i]!='/') 
            {
                dlg.play();
                raw.childNodes[colorFlag].classList.add('crims');
            };  
            i++;        
            colorFlag++;            
            if (i < voice.length) {myLoop();}                      
        }, 290)
    };
};

crypt.addEventListener('click', trigger);

window.addEventListener('keydown', (e) => {
    if (e.code=='Enter')
    {
        trigger();
    }
});

/*-----------------------------------------------------------------------Podświetlanie*/
const r1 = Array.from(document.querySelectorAll('.item1'));
const rr1 = [];

window.addEventListener('keydown', (e) => {
    for (let i=0;i<r1.length;i++)
    {
    if (r1[i].innerText==e.code.charAt(3)) {
        r1[i].style.border='red solid 1px';
        r1[i].style.color='red';
    }
}
});

window.addEventListener('keyup', (e) => {
    setTimeout(() => 
    {
        for (let i=0;i<r1.length;i++)
        {
            if (r1[i].innerText==e.code.charAt(3)) 
            {
            r1[i].style.border='#20c20e solid 1px'; 
            r1[i].style.color='#20c20e';
            }
        }
    },350);

})