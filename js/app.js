/* -----------------------------------------------
/* How to use? : Check the GitHub README
/* ----------------------------------------------- */

/* To load a config file (particles.json) you need to host this demo (MAMP/WAMP/local)... */
/*
particlesJS.load('particles-js', 'particles.json', function() {
  console.log('particles.js loaded - callback');
});
*/

/* Otherwise just put the config content (json): */
$("#slides").superslides({
  animation: "fade",
  play: 0,
});

particlesJS("particles-js", {
  particles: {
    number: {
      value: 100,
      density: {
        enable: true,
        value_area: 800,
      },
    },
    color: {
      // "value": "#ffee00"
      value: "#fff",
    },
    shape: {
      type: "circle",
      stroke: {
        width: 0,
        color: "#000",
      },
      polygon: {
        nb_sides: 5,
      },
      image: {
        src: "",
        width: 100,
        height: 100,
      },
    },
    opacity: {
      value: 0.5,
      random: false,
      anim: {
        enable: false,
        speed: 1,
        opacity_min: 0.1,
        sync: false,
      },
    },
    size: {
      value: 10,
      random: true,
      anim: {
        enable: false,
        speed: 40,
        size_min: 0.1,
        sync: false,
      },
    },
    line_linked: {
      enable: true,
      distance: 120,
      color: "#fff",
      opacity: 0.4,
      width: 1,
    },
    move: {
      enable: true,
      speed: 2,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "none",
      bounce: false,
      attract: {
        enable: true,
        rotateX: 600,
        rotateY: 1200,
      },
    },
  },
  interactivity: {
    detect_on: "window",
    events: {
      onhover: {
        enable: true,
        mode: "grab",
      },
      onclick: {
        enable: true,
        mode: "push",
      },
      resize: true,
    },
    modes: {
      grab: {
        distance: 400,
        line_linked: {
          opacity: 1,
        },
      },
      bubble: {
        distance: 400,
        size: 40,
        duration: 2,
        opacity: 8,
        speed: 3,
      },
      repulse: {
        distance: 200,
        duration: 0.4,
      },
      push: {
        particles_nb: 4,
      },
      remove: {
        particles_nb: 2,
      },
    },
  },
  retina_detect: true,
});

var txt = ["Growth Hacker", "Programmer", "I.T Consultant", "Web Developer"];
var spanele = document.getElementById("typed");
var a = 0;
let i = 0;
var intervalVal;

function type() {
  var text = txt[a].substring(0, i + 1);
  i++;
  spanele.innerText = text;
  if (text == txt[a]) {
    clearInterval(intervalVal);
    setTimeout(function () {
      intervalVal = setInterval(deleter, 50);
    }, 1000);
  }
}

function deleter() {
  var text = txt[a].substring(0, i - 1);
  i--;
  spanele.innerText = text;
  if (text === "") {
    clearInterval(intervalVal);
    setTimeout(function () {
      if (a == txt.length - 1) {
        a = 0;
      } else {
        a += 1;
      }
      intervalVal = setInterval(type, 50);
    }, 1000);
  }
}
intervalVal = setInterval(type, 100);

$("#navigate a").on("click", function (event) {
  if (this.hash !== "") {
    event.preventDefault();

    var hash = this.hash;

    $("html, body").animate(
      {
        scrollTop: $(hash).offset().top,
      },
      800,
      function () {
        window.location.hash = hash;
      }
    );
  }
});
