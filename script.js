const typedText = [
    "echo 'Welcome to my website!'\n", 
    "cat about.txt\n", 
    "Projects: hacking, coding, breaking things...\n", 
    "exit\n"
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