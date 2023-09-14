const bodyElement = document.body;
const mainElement = document.querySelector('main');

let scrollState = {
  scroll: {
    height: 0,
    offset: 0,
    speed: 0.065,
  }
};

let scrollDirection;

document.addEventListener('DOMContentLoaded', () => {
  scrollState.scroll.height = mainElement.getBoundingClientRect().height;
  bodyElement.style.height = `${Math.floor(scrollState.scroll.height)}px`;
});

bodyElement.addEventListener('wheel', (e) => {
  scrollDirection = e.deltaY > 0 ? 'scrollDown' : 'scrollUp';
});

function renderLoop() {
  scrollState.scroll.offset += Math.floor((window.pageYOffset - scrollState.scroll.offset) * scrollState.scroll.speed);
  mainElement.style.transform = `translateY(-${scrollState.scroll.offset}px)`;
  requestAnimationFrame(renderLoop);
}

renderLoop();