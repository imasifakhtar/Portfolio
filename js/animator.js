let sectionHeaders = document.getElementsByClassName("section-header");
let sectUnderlines = document.getElementsByClassName("animated-underline");
let skillHeaders = document.getElementsByClassName("skill-header");
let progressBars = document.getElementsByClassName("progress");
let projects = document.querySelectorAll("div.row div.card");

let widthVP = visualViewport.width;
let heightVP = visualViewport.height;
let aboutHead, aboutUnder;
let prog1, prog2, prog3, prog4, prog5;
let skill1, skill2, skill3, skill4, skill5;
let projectHead, projectUnder;
let pro1, pro2, pro3, pro4, pro5, pro6;

pro1 = projects[0];
pro2 = projects[1];
pro3 = projects[2];
pro4 = projects[3];
pro5 = projects[4];
pro6 = projects[5];

aboutHead = sectionHeaders[0];
aboutUnder = sectUnderlines[0];
projectHead = sectionHeaders[1];
projectUnder = sectUnderlines[1];

skill1 = skillHeaders[0];
skill2 = skillHeaders[1];
skill3 = skillHeaders[2];
skill4 = skillHeaders[3];
skill5 = skillHeaders[4];

prog1 = progressBars[0];
prog2 = progressBars[1];
prog3 = progressBars[2];
prog4 = progressBars[3];
prog5 = progressBars[4];

function checkInVP(element, sub = 0) {
  bounds = element.getBoundingClientRect();
  if (sub != 0) {
    sub = bounds.height / 2;
  }
  return bounds.top >= 0 && bounds.left >= 0 && bounds.bottom - sub <= heightVP;
}

function headChanger(header, underline, into) {
  if (checkInVP(header)) {
    header.style.opacity = "100";
    header.style.left = "0";
    underline.style.transform = "scale(1,1)";
    underline.style.opacity = "100";
    clearInterval(into);
  }
}

function skillChanger(header, pbar, into) {
  boundaries = header.getBoundingClientRect();
  if (boundaries.top >= 0 && boundaries.bottom <= heightVP) {
    header.style.opacity = "100";
    header.style.left = "0";
    pbar.style.left = "0";
    pbar.style.opacity = "100";
    clearInterval(into);
  }
}

function procard(card, into) {
  if (checkInVP(card, 200)) {
    card.style.opacity = "100";
    card.style.transform = "translate3d(0,0,0)";
    clearInterval(into);
  }
}
let interAbout, interProject;
let interskillpy, interskillboot, interskillhtml, interskillcss, interskilljs;
let intercard1, intercard2, intercard3, intercard4, intercard5, intercard6;
interAbout = setInterval(
  () => headChanger(aboutHead, aboutUnder, interAbout),
  300
);
interProject = setInterval(
  () => headChanger(projectHead, projectUnder, interProject),
  300
);

interskillpy = setInterval(
  () => skillChanger(skill1, prog1, interskillpy),
  300
);
interskillboot = setInterval(
  () => skillChanger(skill2, prog2, interskillboot),
  300
);
interskillhtml = setInterval(
  () => skillChanger(skill3, prog3, interskillhtml),
  300
);
interskillcss = setInterval(
  () => skillChanger(skill4, prog4, interskillcss),
  300
);
interskilljs = setInterval(
  () => skillChanger(skill5, prog5, interskilljs),
  300
);

intercard1 = setInterval(() => procard(pro1, intercard1), 400);
intercard2 = setInterval(() => procard(pro2, intercard2), 400);
intercard3 = setInterval(() => procard(pro3, intercard3), 400);
intercard4 = setInterval(() => procard(pro4, intercard4), 400);
intercard5 = setInterval(() => procard(pro5, intercard5), 400);
intercard6 = setInterval(() => procard(pro6, intercard6), 400);
