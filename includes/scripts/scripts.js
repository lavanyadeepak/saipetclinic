
const obs = new IntersectionObserver(entries => {
  entries.forEach(e => { if(e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach(el => obs.observe(el));

document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const email = document.getElementById('email').value.trim();
  const service = document.getElementById('service').value;
  const message = document.getElementById('message').value.trim();

  let waMessage = `*New Service Request – Sai Pet Clinic*\n\n`;
  waMessage += `*Name:* ${name}\n`;
  waMessage += `*Phone:* ${phone}\n`;
  if (email) waMessage += `*Email:* ${email}\n`;
  waMessage += `*Service:* ${service}\n`;
  waMessage += `*Message:* ${message}`;

  const encodedMessage = encodeURIComponent(waMessage);
  window.open(`https://wa.me/919840083383?text=${encodedMessage}`, '_blank');
});