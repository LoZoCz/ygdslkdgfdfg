const zdj = document.querySelectorAll('img');

console.log(zdj[1]);

for(let i = 0; i < 4; i++){

    zdj[i].addEventListener('mouseenter', () => {
        console.log(zdj[i]);
    })

}
