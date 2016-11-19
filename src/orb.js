orb = {
  init: function () {
    let language = localStorage.getItem("orb-language");

    if (language) {
        this.translateTo(window[language]);
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
