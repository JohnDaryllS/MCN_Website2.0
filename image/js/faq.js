const faqQuestions = document.querySelectorAll('.faq-question');
    
        faqQuestions.forEach(question => {
          question.addEventListener('click', () => {
            const answer = question.nextElementSibling;
    
            if (!answer.classList.contains('show')) {
              document.querySelectorAll('.faq-answer').forEach(ans => ans.classList.remove('show'));
              document.querySelectorAll('.faq-question').forEach(q => q.classList.remove('open'));
            }
    
            answer.classList.toggle('show');
            question.classList.toggle('open');
          });
        });