const typedText = [
    "echo 'welcome to the void..'\n", 
    "cat about.txt\n", 
    "the things I love: cyber security, coding, art, films...\n", 
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
            terminal.innerHTML += '<br><span class="prompt">shreddednerve@arch:~$ </span>';
            textIndex++;
            charIndex = 0;
            setTimeout(type, 500);
        }
    }
}

type();