const display = document.getElementsByClassName("display")[0];
const elements = document.getElementsByClassName("notification");
const unread = document.querySelectorAll(".unread");

const markAllRead = () => {
  display.innerHTML = "0";

  for (let i = 0; i < elements.length; i++) {
    elements[i].classList.remove("unread-notification");
  }

  for (let i = 0; i < unread.length; i++) {
    unread[i].remove();
  }

  unread.forEach((item) => {
    item.remove();
  });
};
