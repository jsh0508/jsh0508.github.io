const body = document.querySelector('body');

const createImg  = (number) => {
    // <img> 요소를 만듭니다.
    const img = document.createElement('img');
    // <img> src, alt 값을 지정하고 'bgImg' 클래스를 추가합니다.
    img.src = `img/${number}.jpg`;
    img.alt = 'background images';
    img.classList.add('bgIme');
    // <body>에 <img> 삽입
    body.prepend(img);
}

let index = Math.floor(Math.random() * 3) + 1;
createImg(index);