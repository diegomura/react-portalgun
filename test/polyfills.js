const raf = cb => {
  setTimeout(cb, 0);
};

global.requestAnimationFrame = raf;

export default raf;
