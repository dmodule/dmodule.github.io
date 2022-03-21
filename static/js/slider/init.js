const setupDotBtns = (dotsArray, embla) => {
  dotsArray.forEach((dotNode, i) => {
    dotNode.addEventListener("click", () => embla.scrollTo(i), false);
  });
};

const generateDotBtns = (dots, embla) => {
  const template = document.getElementById("embla-dot-template").innerHTML;
  dots.innerHTML = embla.scrollSnapList().reduce((acc) => acc + template, "");
  return [].slice.call(dots.querySelectorAll(".embla__dot"));
};

const selectDotBtn = (dotsArray, embla) => () => {
  const previous = embla.previousScrollSnap();
  const selected = embla.selectedScrollSnap();
  dotsArray[previous].classList.remove("is-selected");
  dotsArray[selected].classList.add("is-selected");
};

/* autoplay */
const autoplay = (embla, interval) => {
  let timer = 0;

  const play = () => {
    stop();
    requestAnimationFrame(() => (timer = window.setTimeout(next, interval)));
  };

  const stop = () => {
    window.clearTimeout(timer);
    timer = 0;
  };

  const next = () => {
    if (embla.canScrollNext()) {
      embla.scrollNext();
    } else {
      embla.scrollTo(0);
    }
    play();
  };

  return { play, stop };
};

/*
 * setup
 */
const cmCarousel = function (el, dots = false, loop = false, auto = 0) {
  const wrap = document.querySelector(el);
  const viewPort = wrap.querySelector(".embla__viewport");
  const embla = EmblaCarousel(viewPort, {
    align: "start",
    skipSnaps: false,
    loop: loop,
  });

  if (dots) {
    const dots = document.querySelector(el + " .embla__dots");
    const dotsArray = generateDotBtns(dots, embla);
    const setSelectedDotBtn = selectDotBtn(dotsArray, embla);
    setupDotBtns(dotsArray, embla);
    embla.on("select", setSelectedDotBtn);
    embla.on("init", setSelectedDotBtn);
  }

  if (auto) {
    const autoplayer = autoplay(embla, auto);
    embla.on("pointerDown", autoplayer.stop);
    embla.on("init", autoplayer.play);
  }
};

cmCarousel("#slide1", true, true, 5000);

cmCarousel("#slide2", true, false, 5000);
