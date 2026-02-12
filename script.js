// Efek Scroll Halus
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const section = document.querySelector(this.getAttribute('href'));
        section.scrollIntoView({ behavior: 'smooth' });
    });
});

// Animasi sederhana saat scroll
window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.style.boxShadow = '0 2px 10px rgba(0,0,0,0.3)';
    } else {
        nav.style.boxShadow = 'none';
    }
});
const btnWa = document.querySelector('.btn-wa');
const btnTw = document.querySelector('.btn-tw');

btnWa.addEventListener('click', function(event) {
    event.preventDefault(); // Mencegah link pindah halaman
    alert("Kunjungi instagram untuk informasi general");
});
btnTw.addEventListener('click', function(event) {
    event.preventDefault(); // Mencegah link pindah halaman
    alert("Pemilik tidak mempuyai akun gosip");
});

function showMessage(){
  alert("Terimakasih telah mengunjungi web saya")
}
