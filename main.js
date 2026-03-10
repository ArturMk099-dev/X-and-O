let click = 0;
let xcount = 0;
let ocount = 0;
let draw = false;
let qarakusi = document.querySelectorAll('.qarakusi');
let txtover = document.querySelector('.txt');
let syochx = document.querySelector('.x');
let syocho = document.querySelector('.o');
syochx.innerHTML = 'X: ' + xcount + ' ;';
syochx.style.color = 'rgb(76, 28, 28)';
syochx.style.transition = 'all 0.3s linear'
syochx.style.fontSize = '50px';
syocho.innerHTML = 'O: ' + ocount + ' ;';
syocho.style.color = 'rgb(25, 25, 87)';
syocho.style.transition = 'all 0.3s linear'
syocho.style.fontSize = '50px';
for(let i = 0;i < qarakusi.length;i++){
    qarakusi[i].addEventListener('click',function(){
    if(draw)return;
    if(this.textContent !== ''){
        return;
    }
    if(click % 2 === 0){
       this.style.transition = 'all 0.1s linear';
       this.textContent = 'X';
       this.style.color = 'rgb(76, 28, 28)';
       this.style.fontSize = '100px';
    }
    else{
        this.style.transition = 'all 0.1s linear';
        this.textContent = 'O';
        this.style.color = 'rgb(25, 25, 87)';
        this.style.fontSize = '100px';
    }
    click++;
    checkWin();
    });
};

function checkWin(){
       if(draw)return;
    const wins = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ];
    for(let combo of wins){
     let a = qarakusi[combo[0]].textContent;
     let b = qarakusi[combo[1]].textContent;
     let c = qarakusi[combo[2]].textContent;

     if(a!== '' && a === b && b === c && a === 'X'){
        qarakusi[combo[0]].classList.add('win');
        qarakusi[combo[1]].classList.add('win');
        qarakusi[combo[2]].classList.add('win');
        xcount++;
        syochx.innerHTML = 'X: ' + xcount + ' ;';
        draw = true;
        return;
     }
     if(a!== '' && a === b && b === c && a === 'O'){
         qarakusi[combo[0]].classList.add('win');
        qarakusi[combo[1]].classList.add('win');
        qarakusi[combo[2]].classList.add('win');
        ocount++;
        syocho.innerHTML = 'O: ' + ocount + ' ;';
        draw = true;
        return;
     }
    }

     let filled = 0;
     for(let cell of qarakusi){
        if(cell.textContent !== ''){
            filled++;
        }
     }
     if(filled === 9){
      for(let cell of qarakusi){
        txtover.style.display = 'block';
        cell.style.backgroundColor = 'yellow';
      }
      draw = true;
     }
};

let btnrest = document.querySelector('.btn-rest');
btnrest.addEventListener('click',function(){
 for(let cell of qarakusi){
    cell.textContent = '';
    cell.style.backgroundColor = '';
    cell.classList.remove('win');
 }
 txtover.style.display = 'none';
 draw = false;
 click = 0;
});
let btnnew = document.querySelector('.newg-btn');
btnnew.addEventListener('click',function(){
    for(let cell of qarakusi){
     cell.textContent = '';
     cell.style.backgroundColor = '';
     cell.classList.remove('win');
    }
    txtover.style.display = 'none';
    draw = false;
    click = 0;
    ocount= 0;
    xcount = 0;
    syocho.innerHTML = 'O: ' + ocount + ' ;';
    syochx.innerHTML = 'X: ' + xcount + ' ;';
});