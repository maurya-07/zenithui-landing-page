// ⁡⁣⁢⁣STICKY NAVBAR⁡
const handleScroll = () => document.querySelector('nav')?.classList.toggle('scrolled', window.scrollY > 0);
document.addEventListener('scroll', handleScroll);

// ⁡⁣⁢⁣Preview⁡⁡ 
const cardsContainer = document.querySelector(".inner___preview");

cardsContainer.addEventListener("click", (e) => {
  const target = e.target.closest(".card");

  if (!target) return;

  cardsContainer.querySelectorAll(".card").forEach((card) => {
    card.classList.remove("active");
  });

  target.classList.add("active");
});

// Menu Bar
const menuIcon = document.querySelector('.menu___bars');
const crossIcon = document.querySelector('.close');
const menuList = document.querySelector('menu ul');

const toggleMenu = (show) => {
  menuList.classList.toggle('active', show);
  menuIcon.classList.toggle('hide', show);
  crossIcon.classList.toggle('active', show);
};

menuIcon.addEventListener('click', () => toggleMenu(true));
crossIcon.addEventListener('click', () => toggleMenu(false));

document.addEventListener('click', (e) => {
  if (![menuList, menuIcon, crossIcon].some(el => el.contains(e.target))) {
    toggleMenu(false);
  }
});