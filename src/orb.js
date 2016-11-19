orb = {
  init: function () {
    let language = localStorage.getItem("orb-language");

    if (language) {
        this.translateTo(window[language]);
    }
    else {
        let browser_language = navigator.language.replace('-', '_');
        this.translateTo(window[browser_language.toLowerCase()]);
    }
  },

  translateTo: function (language) {
    for (let property in language) {
        if (document.querySelector('[orb="'+property+'"]')) {
            let orbSelector = document.querySelector('[orb="'+property+'"]');
            orbSelector.innerHTML = language[property];
        }
    }
    localStorage.setItem("orb-language", language._language);
  }
};

orb.init();
