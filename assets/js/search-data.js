// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about-me",
    title: "about me",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "You can download my resume by clicking the button on the right.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "news-having-my-personal-website-sparkles-smile",
          title: 'Having my personal website! :sparkles: :smile:',
          description: "",
          section: "News",},{id: "news-our-paper-enabling-validation-for-robust-few-shot-recognition-is-available-at-arxiv-now",
          title: 'Our paper “Enabling Validation for Robust Few-Shot Recognition” is available at arxiv now!...',
          description: "",
          section: "News",},{id: "news-our-challenge-automated-species-annotation-has-been-held-at-the-1st-workshop-on-autoexpert-in-conjunction-with-cvpr-2026-clap",
          title: 'Our Challenge Automated Species Annotation has been held at the 1st workshop on...',
          description: "",
          section: "News",},{id: "projects-vest",
          title: 'VEST',
          description: "Enabling Validation for Robust Few-Shot Recognition",
          section: "Projects",handler: () => {
              window.location.href = "/projects/vest.html";
            },},{id: "workshops-personalized-visual-intelligence-workshop",
          title: 'Personalized Visual Intelligence Workshop',
          description: "",
          section: "Workshops",handler: () => {
              window.location.href = "/workshops/accv2026-pvi.html";
            },},{id: "workshops-autoexpert-workshop",
          title: 'AutoExpert Workshop',
          description: "",
          section: "Workshops",handler: () => {
              window.location.href = "/workshops/cvpr2026-autoexpert.html";
            },},{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
