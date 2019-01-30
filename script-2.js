 var urlmenu = document.getElementById( 'menu1' );
 urlmenu.onchange = function() {
      location.replace( this.options[ this.selectedIndex ].value );
 };


/*Bronen:
https://www.webdeveloper.com/forum/d/211180-drop-down-menus-with-url-link-options/2
https://www.w3schools.com/jsref/met_loc_replace.asp
*/
