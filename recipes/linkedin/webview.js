module.exports = Ferdi => {
  const getMessages = function getMessages() {
    let count = 0;

    if (window.location.pathname.includes('messaging')) {
      count = document.querySelectorAll('.msg-conversation-card__unread-count').length;
    } else {
      const element = document.querySelector('.nav-item--messaging .nav-item__badge-count');
      if (element) {
        count = Ferdi.safeParseInt(element.innerHTML);
      }
    }

    Ferdi.setBadge(count);
  };

  Ferdi.loop(getMessages);
};
