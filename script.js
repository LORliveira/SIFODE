const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
  const q = item.querySelector('.faq-q');
  const res = item.querySelector('.faq-res');

  q.addEventListener('click', () => {
    res.classList.toggle('active');

    // Fecha outras gavetas abertas
    faqItems.forEach(otherItem => {
      if (otherItem !== item) {
        otherItem.querySelector('.faq-res').classList.remove('active');
      }
    });
  });
});