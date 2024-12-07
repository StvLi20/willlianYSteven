document.addEventListener('DOMContentLoaded', () => {
    const questions = document.querySelectorAll('.faq-question');
    
    questions.forEach(question => {
        question.addEventListener('click', () => {
           
            questions.forEach(q => {
                if (q !== question) {
                    q.classList.remove('active');
                }
            });
            
           
            question.classList.toggle('active');
        });
    });
});