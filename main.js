

    
    let number = 0

function count(){
    let countNum = document.getElementById('counter')
   
    number = number + 1
    countNum.innerText = number     
}

function subtract(){
    let countNum = document.getElementById('counter')
    number = number - 1
    countNum.innerText = number
}
function save(){
    
    
    let h1 = document.createElement('h1');
    let textanswer = document.createTextNode(number + ' Last batch')
    h1.appendChild(textanswer);
    document.getElementById('result').appendChild(h1);
}

function reset(){

    document.getElementById('counter').remove();
    let starter = document.createElement('p')
    document.getElementById('resetnum').appendChild(starter)
    starter.setAttribute('id', 'counter');
    number = 0 ;
    starter.innerText = number
    
}