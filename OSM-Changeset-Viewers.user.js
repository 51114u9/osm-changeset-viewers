// ==UserScript==
// @name         OSM Changeset Viewers
// @namespace    https://github.com/51114u9/osm-changeset-viewers
// @version      0.1
// @description  Adds changeset viewers in OSM.org
// @author       51114u9
// @homepage     https://github.com/51114u9/osm-changeset-viewers
// @updateURL    https://github.com/51114u9/osm-changeset-viewers/raw/master/OSM-Changeset-Viewers.user.js
// @downloadURL  https://github.com/51114u9/osm-changeset-viewers/raw/master/OSM-Changeset-Viewers.user.js
// @supportURL   https://github.com/51114u9/osm-changeset-viewers/issues
// @match        https://www.openstreetmap.org/node/*
// @match        https://www.openstreetmap.org/way/*
// @match        https://www.openstreetmap.org/relation/*
// @match        https://www.openstreetmap.org/history
// @match        https://www.openstreetmap.org/user/*/history
// @match        https://www.openstreetmap.org/history/friends
// @grant        none
// ==/UserScript==

var changeset_viewers = {
    achavi: "https://nrenner.github.io/achavi/?changeset=<number>",
    achaviText: "[A]",
    osmcha: "https://osmcha.org/changesets/<number>/",
    osmchaText: "[O]"
};

function createLink(url, urlText, changesetNumber) {
    let link = document.createElement("a");
    link.style = "font-size:smaller;";
    link.href = url.replace("<number>", changesetNumber);
    link.innerHTML = urlText;
    link.target = "_blank";
    return link;
}

function createChangesetViewers(element, changesetNumber) {
    let achavi = createLink(changeset_viewers.achavi, changeset_viewers.achaviText, changesetNumber);
    let osmcha = createLink(changeset_viewers.osmcha, changeset_viewers.osmchaText, changesetNumber);

    element.appendChild(achavi);
    element.appendChild(document.createTextNode(" "));
    element.appendChild(osmcha);

    return element;
}

function updateOSMElements() {
    let sidebarContent = document.getElementById("sidebar_content");

    let changesetDetails = sidebarContent.children[1].children[2];
    let changesetNumber = changesetDetails.lastElementChild.innerText;

    createChangesetViewers(changesetDetails, changesetNumber);
}

function updateHistory() {
    let sidebarContent = document.getElementById("sidebar_content");

    let changesetList = sidebarContent.children[1].children[0].children;

    for (let changeset of changesetList) {
        let changesetDetails = changeset.children[2];
        let changesetNumber = JSON.parse(changeset.dataset.changeset).id;

        createChangesetViewers(changesetDetails, changesetNumber);
    }
}

function updateUserChangesets() {
    let sidebarContent = document.getElementById("sidebar_content");

    let changesetList = sidebarContent.children[1].children[0].children;

    for (let changeset of changesetList) {
        let changesetDetails = changeset.children[2];
        let changesetNumber = JSON.parse(changeset.dataset.changeset).id;

        createChangesetViewers(changesetDetails, changesetNumber);
    }
}

function updateHistoryFriends() {
    let sidebarContent = document.getElementById("sidebar_content");

    let changesetList = sidebarContent.children[1].children[0].children;

    for (let changeset of changesetList) {
        let changesetDetails = changeset.children[2];
        let changesetNumber = JSON.parse(changeset.dataset.changeset).id;

        createChangesetViewers(changesetDetails, changesetNumber);
    }
}

(function() {
    'use strict';

    if (window.location.href.match(/\/(node|way|relation)\//g)) {
        updateOSMElements();
    } else if (window.location.href.match(/\/user\/.*\/history/g)) {
        window.setTimeout(updateUserChangesets, 3000);
        updateUserChangesets();
    } else if (window.location.href.match(/\/history\/friends/g)) {
        window.setTimeout(updateHistoryFriends, 5000);
        updateHistoryFriends();
    } else if (window.location.href.match(/\/history/g)) {
        window.setTimeout(updateHistory, 3000);
        updateHistory();
    }
})();