const tl = gsap.timeline({
  ease: "power1.out",
});

const main = document.querySelector(".container");
const wrap = document.querySelector("#Wrap");

main.addEventListener("mousemove", (e) => {
  gsap.to(wrap, {
    display: "none",
  });

  let xPos = e.clientX / window.innerWidth - 0.5,
    yPos = e.clientY / window.innerHeight - 0.5;

  gsap.to(main, {
    rotationY: 30 * xPos,
    rotationX: 30 * yPos,
    ease: "Power2.easeOut",
    transformPerspective: 900,
    transformOrigin: "center",
  });
});
main.addEventListener("mouseleave", (e) => {
  gsap.to(wrap, {
    display: "flex",
  });

  gsap.to(main, {
    rotationY: 0,
    rotationX: 0,
    ease: "Power1.easeOut",
  });
});

const t2 = new gsap.timeline({
  ease: "power2.out",
  // yoyo: true,
  duration: 2,
});

window.addEventListener("load", function () {
  const progressText = document.querySelector(".progress-text");

  let progress = 0;
  const interval = setInterval(function () {
    if (progress >= 100) {
      clearInterval(interval);
    } else {
      progress += 1;
      progressText.textContent = progress + "%";
    }
  }, 20);

  tl.to(
    ".imgPre",
    {
      opacity: 0,
    },
    "a"
  )
    .to(
      ".imgPre",
      {
        display: "none",
      },
      "a"
    )
    .to(
      progressText,
      {
        opacity: 1,
      },
      "b"
    )
    .to(
      ".main-loadder h1 ",
      {
        opacity: 1,
      },
      "b"
    )
    .to(".main-loadder h1", {
      scale: 1,
      duration: 2,
    })
    .to(".main-loadder h1", {
      scale: 5,
      opacity: 0,
      duration: 1,
    })
    .to(".main-loadder", {
      y: "-100%",
      duration: 1,
      delay: 0.5,
    })
    .to(".second-main .block", {
      y: "-100%",
      stagger: 0.2,
    })
    .to(
      ".loadder",
      {
        display: "none",
      },
      "c"
    )
    .from(
      ".backVideo",
      {
        opacity: 0,
      },
      "c"
    )
    .from(".container", {
      y: 100,
      opacity: 0,
      zIndex: "9999",
    });

  gsap.to(".container .text h1", {
    backgroundImage:
      "linear-gradient(45deg, #ff5145, #ffbb01, #38a852, #428eff)",
    repeat: -1,
    yoyo: true,
    duration: 5,
    ease: "power2.out",
  });
});

document.addEventListener("contextmenu", function (e) {
  e.preventDefault();
});

document.onkeydown = function (e) {
  if (e.keyCode === 123) {
    return false;
  }
  if (e.ctrlKey && e.shiftKey && e.keyCode === "I".charCodeAt(0)) {
    return false;
  }
  if (e.ctrlKey && e.shiftKey && e.keyCode === "C".charCodeAt(0)) {
    return false;
  }
  if (e.ctrlKey && e.shiftKey && e.keyCode === "J".charCodeAt(0)) {
    return false;
  }
  if (e.ctrlKey && e.keyCode === "U".charCodeAt(0)) {
    return false;
  }
  if (e.ctrlKey && e.keyCode === "S".charCodeAt(0)) {
    return false;
  }
  if (e.metaKey && e.shiftKey && e.keyCode === "I".charCodeAt(0)) {
    return false;
  }
  if (e.metaKey && e.shiftKey && e.keyCode === "C".charCodeAt(0)) {
    return false;
  }
  if (e.metaKey && e.shiftKey && e.keyCode === "J".charCodeAt(0)) {
    return false;
  }
  if (e.metaKey && e.keyCode === "U".charCodeAt(0)) {
    return false;
  }
  if (e.metaKey && e.keyCode === "S".charCodeAt(0)) {
    return false;
  }
};
