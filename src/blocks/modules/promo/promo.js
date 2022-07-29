const promoBtns = document.querySelectorAll(".promo__btn"),
  promoText = document.querySelectorAll(".promo__text");

promoBtns.forEach((element) => {
  element.addEventListener("click", (e) => {
    promoBtns.forEach((element) => {
      element.classList.remove("promo__btn_active");
    });
    e.target.classList.add("promo__btn_active");
  });
});

class TabList {
  constructor(buttonsContainer, tabs) {
    this.buttonsContainer = buttonsContainer;
    this.tabs = tabs;

    this.buttonsContainer.addEventListener("click", (event) => {
      const index = event.target.closest(".promo__btn").dataset.value;

      this.openTab(index);
    });
  }
  openTab(index) {
    this.tabs.querySelector(".active").classList.remove("active");
    this.tabs.querySelector(`.promo__text--${index}`).classList.add("active");
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const buttonsContainer = document.querySelector(".promo__buttons");
  const tabs = document.querySelector(".promo__texts");

  const tabList = new TabList(buttonsContainer, tabs);
});
