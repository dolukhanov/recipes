module.exports = (Ferdi) => {
  let latestStatement = $('.status time').attr('datetime');
  let latestNotify = $($('.notification__message span').get(0)).text();

  $($('div.column div.scrollable').get(0)).on('scroll', (ev) => {
    latestStatement = $('.status time').attr('datetime');
  });
  $($('div.column div.scrollable').get(1)).on('scroll', (ev) => {
    latestNotify = $($('.notification__message span').get(0)).text();
  });

  function getMessages() {
    let reply = 0;
    const ln = $($('.notification__message span').get(0)).text();
    if (ln != latestNotify) {
      reply = 1;
    }
    let unread = 0;
    const ls = $('.status time').attr('datetime');
    if (ls != latestStatement) {
      unread = 1;
    }

    Ferdi.setBadge(reply, unread);
  }

  Ferdi.loop(getMessages);
};
