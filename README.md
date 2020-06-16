
# OSM Changeset Viewers

Add changeset viewers links ([Achavi](https://wiki.openstreetmap.org/wiki/Achavi)
and [OSMCha](https://wiki.openstreetmap.org/wiki/OSMCha)) to the right side of the
changeset number on osm elements page (/node/*, /way/*, /relation/*), history page
(/history), changesets of friends page (history/friends), and edits of an user
(/user/*/history) at [osm.org](htttps://openstreetmap.org)

Currently, in pages with "load more" button or when you navigate links of osm
elements this script dont work :(. I'll investigate how to intercept AJAX requests

## Screenshots

Before:

![before](https://raw.githubusercontent.com/51114u9/osm-changeset-viewers/master/osm-changeset-viewers_before.jpg)

After:

![after](https://raw.githubusercontent.com/51114u9/osm-changeset-viewers/master/osm-changeset-viewers_after.jpg)

## Requirements

You need install the add-on or extension for your modern browser:

* Firefox [TamperMonkey](https://addons.mozilla.org/firefox/addon/tampermonkey/)
* Chrome/Chromium [TamperMonkey](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo)

## Install

Click [here](https://raw.githubusercontent.com/51114u9/osm-changeset-viewers/master/OSM-Changeset-Viewers.user.js),
click on "Install" and wait for install

## Apply Script

Just reload [osm.org](https://openstreetmap.org/) and enjoy!

## ToDo

* Investigate how to intercept AJAX requests
