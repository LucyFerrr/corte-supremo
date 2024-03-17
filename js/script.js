///////////////////////////////////////////////////////////
// Set current year

const yearEL = document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearEL.textContent = currentYear;

///////////////////////////////////////////////////////////
// Make mobile navigation work

const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".main-header");

btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});

///////////////////////////////////////////////////////////
// Switch the teams

document.addEventListener("DOMContentLoaded", function () {
  const barberItems = document.querySelectorAll(".barber-item");
  const teamInfoContainers = document.querySelectorAll(
    ".team-information-container"
  );

  barberItems.forEach((barberItem, index) => {
    barberItem.addEventListener("click", () => {
      teamInfoContainers.forEach((container) => {
        container.style.display = "none";
      });

      teamInfoContainers[index].style.display = "grid";
    });
  });
});

///////////////////////////////////////////////////////////

// Smooth scrolling for safari
const allLinks = document.querySelectorAll("a:Link");

allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = link.getAttribute("href");

    // Scroll back to the top
    if (href === "#")
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

    // Scroll to other links
    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }

    // Close mobile navigation
    if (link.classList.contains("main-nav-link"))
      headerEl.classList.toggle("nav-open");
  });
});

///////////////////////////////////////////////////////////
// Sticky Side Navigation

const sectionHeroEl = document.querySelector(".main-header");

const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    console.log(ent);
    if (!ent.isIntersecting) {
      const vis = document.querySelector(".side-nav");
      vis.classList.add("side-nav-vis");
    }

    if (ent.isIntersecting) {
      const vis = document.querySelector(".side-nav");
      vis.classList.remove("side-nav-vis");
    }
  },
  {
    // Options
    // In the ViewPort
    root: null,
    threshold: 0,
    rootMargin: "-500px",
  }
);
obs.observe(sectionHeroEl);

///////////////////////////////////////////////////////////
// Feature Transition

const featureEl = document.querySelector(".main-header");

const featureObs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    console.log(ent);
    if (!ent.isIntersecting) {
      const vis = document.querySelector(".feature-section");
      vis.classList.add("feature-section-vis");
    }

    if (ent.isIntersecting) {
      const vis = document.querySelector(".feature-section");
      vis.classList.remove("feature-section-vis");
    }
  },
  {
    // Options
    // In the ViewPort
    root: null,
    threshold: 0,
    rootMargin: "-850px",
  }
);
featureObs.observe(featureEl);

///////////////////////////////////////////////////////////
// Fixing flexbox gap property missing in some Safari versions
function checkFlexGap() {
  var flex = document.createElement("div");
  flex.style.display = "flex";
  flex.style.flexDirection = "column";
  flex.style.rowGap = "1px";

  flex.appendChild(document.createElement("div"));
  flex.appendChild(document.createElement("div"));

  document.body.appendChild(flex);
  var isSupported = flex.scrollHeight === 1;
  flex.parentNode.removeChild(flex);
  console.log(isSupported);

  if (!isSupported) document.body.classList.add("no-flexbox-gap");
}
checkFlexGap();

// https://unpkg.com/smoothscroll-polyfill@0.4.4/dist/smoothscroll.min.js

/*
.no-flexbox-gap .main-nav-list li:not(:last-child) {
  margin-right: 4.8rem;
}

.no-flexbox-gap .list-item:not(:last-child) {
  margin-bottom: 1.6rem;
}

.no-flexbox-gap .list-icon:not(:last-child) {
  margin-right: 1.6rem;
}

.no-flexbox-gap .delivered-faces {
  margin-right: 1.6rem;
}

.no-flexbox-gap .meal-attribute:not(:last-child) {
  margin-bottom: 2rem;
}

.no-flexbox-gap .meal-icon {
  margin-right: 1.6rem;
}

.no-flexbox-gap .footer-row div:not(:last-child) {
  margin-right: 6.4rem;
}

.no-flexbox-gap .social-links li:not(:last-child) {
  margin-right: 2.4rem;
}

.no-flexbox-gap .footer-nav li:not(:last-child) {
  margin-bottom: 2.4rem;
}

@media (max-width: 75em) {
  .no-flexbox-gap .main-nav-list li:not(:last-child) {
    margin-right: 3.2rem;
  }
}

@media (max-width: 59em) {
  .no-flexbox-gap .main-nav-list li:not(:last-child) {
    margin-right: 0;
    margin-bottom: 4.8rem;
  }
}
*/
