/**
 * Created by olegsuv on 16.04.2016.
 */

function injectScript(file, node) {
    var th = document.getElementsByTagName(node)[0];
    var s = document.createElement('script');
    s.setAttribute('type', 'text/javascript');
    s.setAttribute('src', file);
    th.appendChild(s);
}
injectScript(chrome.extension.getURL('/js/olx.js'), 'body');