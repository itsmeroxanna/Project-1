const closedSun = document.querySelector('.closed');
const openMoon = document.querySelector('.open');

//Add event listener
closedSun.addEventListener('click', () => {
    if(openMoon.classList.contains('.open')) {
        openMoon.classList.add('active');
        closedSun.classList.remove('.active');
    }
});

openMoon.addEventListener('click', () => {
    if(closedSun.classList.contains('closed')) {
        closedSun.classList.add('active');
        openMoon.classList.remove('active');
    }
});