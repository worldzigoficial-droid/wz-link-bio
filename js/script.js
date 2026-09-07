/**
 * Magazine World Zig — Link na Bio
 * JavaScript puro: alterna entre a tela principal e as telas
 * dedicadas de "Tomadas Veiculares" e "Avaliações", com suporte
 * ao botão voltar do navegador/celular.
 */
(function () {
  "use strict";

  var body = document.body;

  var screens = {
    main: document.getElementById("screen-main"),
    collection: document.getElementById("screen-collection"),
    reviews: document.getElementById("screen-reviews"),
  };

  var hashByScreen = {
    main: "",
    collection: "#colecao",
    reviews: "#avaliacoes",
  };

  function showScreen(name, pushHistory) {
    Object.keys(screens).forEach(function (key) {
      var el = screens[key];
      if (el) {
        el.classList.toggle("is-active", key === name);
      }
    });

    window.scrollTo(0, 0);

    if (pushHistory) {
      var hash = hashByScreen[name] || "";
      history.pushState({ screen: name }, "", window.location.pathname + window.location.search + hash);
    }
  }

  function bind(id, handler) {
    var el = document.getElementById(id);
    if (el) {
      el.addEventListener("click", handler);
    }
  }

  bind("open-collection", function () { showScreen("collection", true); });
  bind("shortcut-collection", function () { showScreen("collection", true); });
  bind("close-collection", function () { showScreen("main", true); });

  bind("shortcut-reviews", function () { showScreen("reviews", true); });
  bind("close-reviews", function () { showScreen("main", true); });

  window.addEventListener("popstate", function () {
    var hash = window.location.hash;
    if (hash === "#colecao") {
      showScreen("collection", false);
    } else if (hash === "#avaliacoes") {
      showScreen("reviews", false);
    } else {
      showScreen("main", false);
    }
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
      var isSecondary =
        (screens.collection && screens.collection.classList.contains("is-active")) ||
        (screens.reviews && screens.reviews.classList.contains("is-active"));
      if (isSecondary) {
        showScreen("main", true);
      }
    }
  });

  // abre direto na tela correspondente se a página for carregada com hash
  var initialHash = window.location.hash;
  if (initialHash === "#colecao") {
    showScreen("collection", false);
  } else if (initialHash === "#avaliacoes") {
    showScreen("reviews", false);
  }
})();
