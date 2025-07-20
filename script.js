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

const aboutLink = document.querySelector('#nav a[href="#about"]');
const projectsLink = document.querySelector('#nav a[href="#projects"]');

aboutLink.addEventListener('click', (e) => {
    e.preventDefault();
    document.getElementById('terminal').style.display = 'none';
    document.getElementById('projects-section').style.display = 'none';
    document.getElementById('about-section').style.display = 'block';
});

projectsLink.addEventListener('click', (e) => {
    e.preventDefault();
    document.getElementById('terminal').style.display = 'none';
    document.getElementById('about-section').style.display = 'none';
    document.getElementById('projects-section').style.display = 'block';
});