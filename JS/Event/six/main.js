setInterval(() => {
    const now = new Date();
    const seconds = now.getSeconds();


    if (seconds % 2 === 0) { document.querySelector('.square').style.backgroundColor = "green"; }
    else if (seconds % 3 === 0) {
        document.querySelector('.square').style.backgroundColor = 'blue';
    }
    else {
        document.querySelector('.square').style.backgroundColor = 'yellow';

    }

}, 1000);