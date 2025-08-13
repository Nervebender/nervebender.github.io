const typedText = [
    "echo 'Welcome to my website!'\n", 
    "cat about.txt\n", 
    "Hello! I'm an aspiring cybersecurity ",
    "professional driven by a passion for ethical hacking, ",
    "digital forensics, and solving complex technical ",
    "challenges. I thrive in environments where I can ",
    "explore vulnerabilities, reverse engineer systems,",
    "and continually sharpen my skills. My journey began ",
    "with platforms like Hack The Box and TryHackMe, where ",
    "I’ve completed hands-on labs and real-world scenarios. ",
    "I’m committed to staying current with evolving threats ",
    "and best practices in cybersecurity. My goal is to contribute ",
    "to a safer digital world by combining curiosity, ",
    "discipline, and a hacker's mindset.", 
    "exit\n"
];

const terminal = document.getElementById('typed');
let textIndex = 0;
let charIndex = 0;
let isCommand = true;

function type() {
    if (textIndex < typedText.length) {
        const currentLine = typedText[textIndex];

        if (charIndex === 0 && isCommand) {
            terminal.innerHTML += '<br><span class="prompt">shreddednerve@arch:~$ </span>';
        }

        if (charIndex < currentLine.length) {
            terminal.innerHTML += currentLine[charIndex++];
            setTimeout(type, 50);
        } else {
            textIndex++;
            charIndex = 0;

            isCommand = typedText[textIndex] && typedText[textIndex].endsWith('\n');

            setTimeout(type, 400);
        }
    }
}

type();

const aboutLink = document.querySelector('#nav a[href="#about"]');
const projectsLink = document.querySelector('#nav a[href="#projects"]');
const homeLink = document.getElementById('home-link');

aboutLink.addEventListener('click', (e) => {
    e.preventDefault();
    document.getElementById('terminal').style.display = 'none';
    document.getElementById('about-section').style.display = 'block';
    document.getElementById('projects-section').style.display = 'none';
});

projectsLink.addEventListener('click', (e) => {
    e.preventDefault();
    document.getElementById('terminal').style.display = 'none';
    document.getElementById('about-section').style.display = 'none';
    document.getElementById('projects-section').style.display = 'block';
});

homeLink.addEventListener('click', (e) => {
    e.preventDefault();
    document.getElementById('terminal').style.display = 'block';
    document.getElementById('about-section').style.display = 'none';
    document.getElementById('projects-section').style.display = 'none';
});

window.onload = () => {
    document.getElementById('about-section').style.display = 'none';
    document.getElementById('projects-section').style.display = 'none';
};