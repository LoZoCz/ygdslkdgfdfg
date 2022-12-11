const zdj = document.querySelectorAll('img');

for(let i = 0; i < zdj.length; i++){

    zdj[i].addEventListener('mouseover', () => {
        var src = zdj[i].src;
        // console.log(src);

        var len = src.length;
        // console.log(len);

        var slc1 = src.slice(22, len - 4);
        // console.log(slc1);

        var slc2 = src.slice(len-4, len);
        // console.log(slc2);

        var finSrc = slc1 + '-szary' + slc2;
        // console.log(finSrc);

        zdj[i].animate(animShow, animTime);
        zdj[i].src = finSrc;
    })

    zdj[i].addEventListener('mouseout', () => {
        var src = zdj[i].src;
        // console.log(src);

        var len = src.length;
        // console.log(len);

        var slc1 = src.slice(22, len - 10);
        // console.log(slc1);

        var slc2 = src.slice(len-4, len);
        // console.log(slc2);

        var finSrc = slc1 + slc2;
        // console.log(finSrc);

        zdj[i].animate(animShow, animTime);
        zdj[i].src = finSrc;
    })

    const animShow = [
        { opacity: '1'},
        { opacity: '0.5'},
        { opacity: '1'}
      ];
      
      const animTime = {
        duration: 700,
        iterations: 1,
      }

}

