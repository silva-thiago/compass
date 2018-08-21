/* Esta função indica quantos graus a seta da bússola deverá girar */
function loadCompass(degrees) {
  $('.compass-arrow').css({'transform' : 'rotate('+ degrees + 'deg)'});
}