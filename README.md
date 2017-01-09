----add the iOS platform to your application
ionic platform add ios
----add the Android platform to your application
ionic platform add android

----We are using pouchdb for DB.
npm install pouchdb --save

----We have to install typings for pouchdb.
npm install @types/pouchdb --save --save-exact

----For access to native storage with an SQLite DB
----and providing more stable data storage.
ionic plugin add cordova-sqlite-storage


----To have a webview available to us that we can launch external websites in.
----Its required as it is a depenency of the Facebook plugin we will be using.
ionic plugin add cordova-plugin-inappbrowser

----Install facebook plugin with our credentials we got from facebook.developers.com
ionic plugin add cordova-plugin-facebook4 --save --variable APP_ID="XXXXXXXXXXXXXXXXXX" --variable APP_NAME="mychat"