const typedText = [
    "echo 'Welcome to my website!'", 
    "cat about.txt", 
    "Projects: hacking, coding, breaking things...", 
    "exit"
];

const terminal = document.getElementById('typed');
let textIndex = 0;
let charIndex = 0;

function type() {
    if (textIndex < typedText.length) {
        if (charIndex < typedText[textIndex].length) {
            terminal.textContent += typedText[textIndex][charIndex++];
            setTimeout(type, 100);
        } else {
            terminal.innerHTML += '<br><span class="prompt">user@machine:~$ </span>';
            textIndex++;
            charIndex = 0;
            setTimeout(type, 500);
        }
    }
}

type();