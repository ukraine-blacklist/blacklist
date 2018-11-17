/**
 * Created by Oleg on 14.02.2017.
 */

/* global chrome */
const rule1 = {
    conditions: [
        new chrome.declarativeContent.PageStateMatcher({
            pageUrl: {
                hostEquals: 'www.olx.ua',
                schemes: ['https']
            }
        })
    ],
    actions: [new chrome.declarativeContent.ShowPageAction()]
};
chrome.runtime.onInstalled.addListener(function () {
    chrome.declarativeContent.onPageChanged.removeRules(undefined, function () {
        chrome.declarativeContent.onPageChanged.addRules([rule1]);
    });
});