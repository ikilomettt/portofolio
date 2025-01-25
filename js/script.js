const nav = document.getElementById('nav');

window.addEventListener('scroll', function() {
    scrollPosition = window.scrollY;

    if (scrollPosition >= 60) {
        nav.classList.add('nav-dark')
    } else if (scrollPosition <= 60 ) {
        nav.classList.remove('nav-dark')
    }
})

var walink = 'https://web.whatsapp.com/send', 
    phone = '6282145091747'; 
 
/* Smartphone Support */ 
if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) { 
var walink = 'whatsapp://send'; 
} 
var waBtn=document.getElementById('btn-wa');
waBtn.addEventListener('click', () => {
    var blanter_whatsapp = walink + '?phone=' + phone ;
    //console.log(data['nomor_reservasi'])
    window.open(blanter_whatsapp,'_blank'); 
})