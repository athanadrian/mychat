***We are using pouchdb for DB.
npm install pouchdb --save

***We have to install typings for pouchdb.
npm install @types/pouchdb --save --save-exact

***For access to native storage with an SQLite DB
***and providing more stable data storage.
ionic plugin add cordova-sqlite-storage

***To hve a webview available to us that we can launch external websites in.
***Its required as it is a depenency of the Facebook plugin we will be using.
ionic plugin add cordova-plugin-inappbrowser

