let screen = document.getElementById('result');
buttons = document.querySelectorAll('button');
let screenValue = '';
for (item of buttons) {
    item.addEvenListener('click',(e)=> {
        buttonText = e.target.innerText;
        console.log('Button text is ', buttonText);
        if (buttonText =='X') {
            buttonText = '*';
            screenValue += buttonText;
            screen.Value = screenValue;
        }
        else if (buttonText == 'AC') {
            screenValue = "";
            screen.value = screenValue;
        }
        else if (buttonText == '=') {
            screen.Value = eval(screenvalue);
        }
        else{
            screenValue += buttonText;
            screen.value = screenValue;
        }
    })
}