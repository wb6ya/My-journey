const SummarysPage = document.querySelector('.SummarysPage');
const cardList = document.querySelector('.card-list');
const arrowBtns = document.querySelectorAll('.SummarysPage i');
const firstCardWidth = cardList.querySelector(".card-item").offsetWidth;
const cardListChildrens = [...cardList.children];

let isDragging = false, startX, startScrollLeft, timeoutId;

let cardPerView = Math.round(cardList.offsetWidth / firstCardWidth);

cardListChildrens.slice(-cardPerView).reverse().forEach(card => {
  cardList.insertAdjacentHTML("afterbegin", card.outerHTML);
})

cardListChildrens.slice(0, cardPerView).forEach(card => {
  cardList.insertAdjacentHTML("beforeend", card.outerHTML);
})

arrowBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    cardList.scrollLeft += btn.id === "arrow-left" ? -firstCardWidth : firstCardWidth;
  })
})

const dragStart = (e) => {
  isDragging = true;
  cardList.classList.add("dragging")
  startX = e.pageX
  startScrollLeft = cardList.scrollLeft
}

const dragging = (e) => {
  if (!isDragging) return;
  cardList.scrollLeft = startScrollLeft - (e.pageX - startX);
}

const dragStop = () => {
  isDragging = false;
  cardList.classList.remove("dragging")
}

const autoPlay = () => {
  if (window.innerWidth < 800) return;
  timeoutId = setInterval(() => cardList.scrollLeft += firstCardWidth, 2500);
}

autoPlay();

const InfiniteScroll = () => {
  if (cardList.scrollLeft === 0) {
    cardList.classList.add("no-transition")   
    cardList.scrollLeft = cardList.scrollWidth - (2 * cardList.offsetWidth);
    cardList.classList.remove("no-transition")
    
  } else if (Math.ceil(cardList.scrollLeft) === cardList.scrollWidth - cardList.offsetWidth) {
    cardList.classList.add("no-transition")
    cardList.scrollLeft = cardList.offsetWidth;
    cardList.classList.remove("no-transition")    
  }
}

clearTimeout(timeoutId);
if (!SummarysPage.matches(":hover")) autoPlay();

cardList.addEventListener("mousedown", dragStart);
cardList.addEventListener("mousemove", dragging);
document.addEventListener("mouseup", dragStop);
cardList.addEventListener("scroll", InfiniteScroll);
SummarysPage.addEventListener("mouseenter", () => clearTimeout(timeoutId));
SummarysPage.addEventListener("mouseleave", autoPlay);