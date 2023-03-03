const content = document.querySelector('p');
const btnUnderline = document.querySelector('.underline');
const btnItalic = document.querySelector('.italic');
const btnBold = document.querySelector('.bold');
const btnRed = document.querySelector('.btn-red');
const btnBlue = document.querySelector('.btn-blue');
const btnPurple = document.querySelector('.btn-purple');
const btnBlack = document.querySelector('.btn-black');
const btnMax = document.querySelector('.fontmax');
const btnMinus = document.querySelector('.fontminus');
const fontSize = document.querySelector('.fontsize');
let size = parseInt(document.querySelector('.fontsize').textContent);


btnMax.onclick = ()=>{
    ++size;
    content.style.fontSize = size.toString()+'px';
    fontSize.textContent = size.toString();
}
btnMinus.onclick = ()=>{
    if(size > 1){
        --size;
        content.style.fontSize = size.toString()+'px';
        fontSize.textContent = size.toString();
    }
}

btnUnderline.onclick = ()=>{
    if(content.style.textDecoration === 'underline'){
        content.style.textDecoration = 'none';
    }else{
        content.style.textDecoration = 'underline';
    }
};

btnItalic.onclick = ()=>{
    if(content.style.fontStyle === 'italic'){
        content.style.fontStyle = 'normal';
    }else {
        content.style.fontStyle = 'italic';
    }
}

btnBold.onclick = ()=>{
    if(content.style.fontWeight === 'bold'){
        content.style.fontWeight = 'unset';
    }else {
        content.style.fontWeight = 'bold';
    }
}

btnRed.onclick = ()=>{
    if(content.style.color === 'red'){
        content.style.color = '';
    }else {
        content.style.color = 'red';
    }
}
btnBlue.onclick = ()=>{
    if(content.style.color === 'blue'){
        content.style.color = '';
    }else {
        content.style.color = 'blue';
    }
}
btnPurple.onclick = ()=>{
    if(content.style.color === 'purple'){
        content.style.color = '';
    }else {
        content.style.color = 'purple';
    }
}
btnBlack.onclick = ()=>{
    if(content.style.color === 'black'){
        content.style.color = '';
    }else {
        content.style.color = 'black';
    }
}

