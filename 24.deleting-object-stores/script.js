




window.onload = function() {

  var dbName = 'library';
  var dbVersion = 3;

  var dbRequest = indexedDB.open(dbName, dbVersion);

  dbRequest.onupgradeneeded = function(event) {
    var db = event.target.result;
    db.deleteObjectStore('books');
  };

  dbRequest.onsuccess = function(event) {
    console.log('DB is successfully opened!');
  };

  dbRequest.onerror = function() {
    console.log('DB is NOT opened!');
  };

};
