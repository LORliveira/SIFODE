const faqItems = document.querySelectorAll('.lista-faq');

faqItems.forEach(item => {
  const q = item.querySelector('.pergunta-faq');
  const res = item.querySelector('.resposta-faq');

  q.addEventListener('click', () => {
    res.classList.toggle('active');

    // Fecha outras gavetas abertas
    faqItems.forEach(otherItem => {
      if (otherItem !== item) {
        otherItem.querySelector('.resposta-faq').classList.remove('active');
      }
    });
  });
});