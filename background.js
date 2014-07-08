(function() {
  'use strict';

  var options = {
    type: 'normal',
    title: '生成二维码',
    id: 'qrcode-generator',
    contexts: ['selection', 'link', 'page', 'image'],
    onclick: clickCallback,
  };

  function clickCallback(info, tab) {
    //选择的字，链接，图片链接，网页链接
    var text = info.srcUrl || info.linkUrl ||
      info.selectionText || info.pageUrl;

    console.log(text);

    if (text.trim().length) {
      chrome.tabs.sendMessage(tab.id, {text: text}, function(response) {
        if (response == 'ok') {
          // $.get('http://istern.me/qrcode.html', function(data) {
          //   console.log(data);
          // });
        }
      });
    }
  };

  chrome.contextMenus.create(options, function() {
    console.log('crate success');
  });
}());
