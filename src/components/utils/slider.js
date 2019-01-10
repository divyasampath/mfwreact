const Slider = slides => {
  return slides.forEach(element => {
    element.style.display = none;
    setTimeout(Slider, 2000);
  });
};

const Pause = slides => {};

export default Slider;
