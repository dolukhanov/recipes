const _path = _interopRequireDefault(require('path'));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = Ferdi => {
  const getMessages = function getMessages() {
    const elements = document.querySelectorAll('.badge.unread-count:not(.ng-hide)');
    let count = 0;

    for (let i = 0; i < elements.length; i += 1) {
      try {
        count += Ferdi.safeParseInt(elements[i].innerHTML);
      } catch (e) {
        console.error(e);
      }
    }

    // set Ferdi badge
    Ferdi.setBadge(count);
  };

  Ferdi.loop(getMessages);

  Ferdi.injectCSS(_path.default.join(__dirname, 'service.css'));
};
