const mouseFollow = () => {
  window.addEventListener("mousemove", (e) => {
    document.querySelector(
      ".circle"
    ).style.transform = `translate(${e.clientX}px,${e.clientY}px)`;
  });
};
mouseFollow();
