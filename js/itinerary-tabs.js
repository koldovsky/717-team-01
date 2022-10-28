(function () {
  let itinerTabs = document.querySelectorAll(".itinerary-tabs__btn");
  let itinerArticles = document.querySelectorAll(".tabs-article");

  itinerTabs.forEach((tab, index) => {
    tab.addEventListener("click", () => {
      itinerArticles.forEach((article) => {
        article.classList.remove("active-tab__article");
      });
      itinerTabs.forEach((tab) => {
        tab.classList.remove("active-tab");
      });
      itinerArticles[index].classList.add("active-tab__article");
      itinerTabs[index].classList.add("active-tab");
    });
  });
})();
