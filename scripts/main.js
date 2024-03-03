const tabsButtons = document.querySelectorAll('.giftset__tabs-button');
const tabsItems = document.querySelectorAll('.giftset__tabs-content-item');

function onTabClick(item) {
  item.addEventListener('click', () => {
    let currentBtn = item;
    let tabId = currentBtn.getAttribute('data-tab');
    let currentTab = document.querySelector(tabId);

    if (!currentBtn.classList.contains('giftset__tabs-button--active')) {
      tabsButtons.forEach(item => {
        item.classList.remove('giftset__tabs-button--active');
      });

      tabsItems.forEach(item => {
        item.classList.remove('giftset__tabs-content-item--active');
      });

      currentBtn.classList.add('giftset__tabs-button--active');
      currentTab.classList.add('giftset__tabs-content-item--active');
    }
  });
}

tabsButtons.forEach(onTabClick);

document.querySelector('.giftset__tabs-button').click();
