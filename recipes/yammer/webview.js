module.exports = Ferdi => {
  const getMessages = function getMessages() {
    let directMessages = 0;
    let indirectMessages = 0;
    const notificationElement = document.querySelector('.yj-notifications-indicator-count');
    const newMessagesElement = document.querySelector('.yj-thread-list--new-messages-notice:not(.is-hidden) .yj-thread-list--new-message-text');

    if (notificationElement) {
      directMessages = Ferdi.safeParseInt(notificationElement.innerHTML);
    }

    if (newMessagesElement) {
      indirectMessages = Ferdi.safeParseInt(newMessagesElement.innerHTML.match(/\d+/)[0]);
    }

    Ferdi.setBadge(directMessages, indirectMessages);
  };

  Ferdi.loop(getMessages);
};
