const menuToggle = document.getElementById('menuToggle');
const siteNav = document.getElementById('siteNav');
if (menuToggle && siteNav) {
  menuToggle.addEventListener('click', () => {
    const open = siteNav.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', String(open));
    menuToggle.setAttribute('aria-label', open ? 'मेन्यू बंद करें' : 'मेन्यू खोलें');
    menuToggle.textContent = open ? '×' : '☰';
  });
  siteNav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
    siteNav.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.setAttribute('aria-label', 'मेन्यू खोलें');
    menuToggle.textContent = '☰';
  }));
}
const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();
const contactForm = document.getElementById('contactForm');
if (contactForm) contactForm.addEventListener('submit', event => {
  event.preventDefault();
  const data = new FormData(contactForm);
  const subject = `Help Desk सहायता अनुरोध — ${data.get('service')}`;
  const body = `नाम: ${data.get('name')}\nसंपर्क: ${data.get('email')}\nसेवा: ${data.get('service')}\n\nसंदेश:\n${data.get('message')}\n\n(कृपया ईमेल में पासवर्ड/OTP साझा न करें।)`;
  const mailto = `mailto:stockcoach87@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  window.location.href = mailto;
});
