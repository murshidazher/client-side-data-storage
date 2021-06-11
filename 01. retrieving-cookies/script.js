window.onload = function () {

  /*
    // Key Value Pair
    var keyValue = 'alperen=talaslioglu';

    // Expiration
    var now = new Date();
    now.setTime(now.getTime() + 24 * 60 * 60 * 1000);

    var expires = 'expires=' + now.toUTCString();

    // Cookie String
    var cookieStr = keyValue + ';' + expires;

    // Create Cookie
    document.cookie = cookieStr;
*/

  console.log(getCookieValue('cookie_name100'));

  function getCookieValue(cookieKey) {
    var cookiesList = document.cookie.split(';').map(function (cookie) {
      return cookie.trim();
    });

    for (var i = 0; i < cookiesList.length; i++) {
      var cookie = cookiesList[i].split('=');
      var key = cookie[0];
      var value = cookie[1];
      if (key === cookieKey) {
        return value;
      }
    }
    return undefined;
  }



















};
