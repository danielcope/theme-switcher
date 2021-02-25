let count = 0;
let element = document.querySelector('#counter')

function increase () {
    count ++;
    element.innerText = count;
}

function decrease () {
    count --;
    element.innerText = count;
}

function reset () {
    count = 0;
    element.innerText = count;
    element.innerHTML = `<mark> ${count} </mark>`
}

function selectTheme(theme) {
    document.getElementsByTagName('body')[0].className = theme;
    document.getElementsByTagName('main')[0].className = theme;
    
    let button = document.getElementsByTagName('button')

        for (let i = 0; i < button.length; i++){
            button[i].className = theme;
        }
}