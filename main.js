const stars = () => {

    document.addEventListener('mousemove', (e)=> {
        let rocket = document.querySelector('.rocket');
        // console.log('X: ' +e.pageX + ', Y: ' + e.pageY);

        // let max = window.innerHeight -100;
        // console.log(max);
        //  if(e.pageY < max) {
            rocket.style.top = e.pageY + 'px';
        //  }
        rocket.style.left = e.pageX + 'px';
       

        // rocket.style.left = e.offsetX + 'px';
        // rocket.style.top = e.offsetY + 'px'
    })



    //khoi tao so ngoi sao 
    let count = 100;
    let universe = document.querySelector('.universe');
    let i = 0;
    while (i < count) {
        // them the i ( 1 ngoi sao)
        let star = document.createElement('i');
        // console.log(star);

        let wi = 100; //100vw
        // cach left man hinh
        let le = Math.floor(Math.random() * wi);
        // console.log('left =' + le);

        //thoi luong bay het man hinh
        let duration = Math.random() * 1;
        //chieu dai thien thanh (star)
        let hei = Math.random()* 100;


        // star.style.width = 1 + 'px'
        star.style.height = hei + 'px'
        star.style.left = le + 'vw';

        star.style.animationDuration = duration + 's';

        universe.appendChild(star);

        i++;
    }
}

// chay ham tao nhung ngoi sao
stars()