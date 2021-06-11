window.onload = function () {


  // ----- Storing Data -----

  // localStorage.setItem(key, value)
  localStorage.setItem('i tem K ey', 'it emV al ue');

  // localStorage.key = value
  localStorage.keyItemAlperen = 'value of alperen';

  // localStorage[key] = value
  localStorage['i tem d d d d K ey'] = 'it emV al ue';


  // ----- Retrieving Data -----

  // localStorage.getItem(key)
  console.log(localStorage.getItem('keyItemAlperen'));
  console.log(localStorage.getItem('keyItasdadasdemAlperen'));

  // localStorage.key
  console.log(localStorage.keyItemAlperen);
  console.log(localStorage.keyItemAlsdsperen);

  // localStorage[key]
  console.log(localStorage['i tem d d d d K ey']);
  console.log(localStorage['i tem dasdasdasdasa d d d K ey']);


  // ----- Removing Data -----

  // localStorage.removeItem(key)
  //localStorage.removeItem('i tem d d d d K ey');

  // Clear all data : localStorage.clear()
  //localStorage.clear();


  // ----- More -----

  // localStorage.length

  // localStorage.key(index)

  for (var i = 0; i < localStorage.length; i++) {
    console.log(localStorage.key(i));
  }














};
