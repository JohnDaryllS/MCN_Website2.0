const reviews = [
    { name: "John Daryll Sampilingan", date: "24 February 2025", rating: 5, comment: "My internship at MCN was an incredibly rewarding experience that allowed me to significantly enhance my technical skills while contributing to meaningful projects. The company fostered a supportive and collaborative environment that encouraged continuous learning and professional growth. One of the most fulfilling aspects of my internship was successfully developing their company website. This project not only strengthened my technical abilities in web development but also honed my problem-solving and debugging skills. Working closely with the team helped me improve my communication and teamwork, as we navigated challenges and implemented solutions together.", img: "image/default profile.png" },
    { name: "Jo***y Ga*o", date: "24 February 2025", rating: 5, comment: "Very good, but there's room for improvement.", img: "image/default profile.png" },
    { name: "Fr****e Kh****e An*e El**a", date: "24 February 2025", rating: 5, comment: "I learned a lot and had a great experience at MCN; the training was collaborative.", img: "image/default profile.png" },
    { name: "Fëlsönë Äpürä Cärägäö", date: "24 February 2025", rating: 5, comment: "Great company and staff. Learned a lot while on the job training.", img: "image/default profile.png" },
    { name: "Ai***n Pa*a", date: "15 June 2022", rating: 5, comment: "Thank you so much Model Cooperative Network (MCN) for allowing us to be part of this organization, even in a short period of time. Being part of this company, I am truly grateful for the experiences,  knowledge and skills that I gained as a student intern for two months. My internship here at MCN has taught me to become efficient and effective employee in the future. Also, I would like to express my sincerest gratitude to Sir Emmanuel Sumatra who helped and guided me throughout my internship journey. Once again,  thank you so much MCN and Sir Elle for the incredible work experience. God bless!", img: "image/default profile.png" },
    { name: "Jo***a El**n Ba****a", date: "14 June 2022", rating: 5, comment: "During my time working at MCN,  as a student intern, I learn a lot of things such as how to do my task online and also on how to manage my time wisely as Sir Sumatra inroduces new task. Thank you MCN for the wonderful opportunity. God bless us all!", img: "image/default profile.png" },
    { name: "Rh**a Ma*e", date: "14 June 2022", rating: 5, comment: "It is a great experience to be an intern at MCN FOCCUS Group of Cooperatives. Even in a short time we gained a lot of opportunity and knowledge during our internship, we experience to learn about other cooperatives in our country. Thank you so much MCN and to sir Elle, thank you for teaching and guiding us to be a good and responsible intern, and also for sharing your knowledge with us.", img: "image/default profile.png" },
    { name: "Ke****e Ha****a Bu***r", date: "14 June 2022", rating: 5, comment: "Being an Intern at MCN has given me new knowledge and skills that would surely help me in the future. It has given me a glimpse of the corporate world and enlightened me on what its like working in a cooperative. Though we aren't able to work on-site but the tasks given to us virtually made us feel competent and skilled individuals. Thank you MCN for the opportunity and to Sir Elle for guiding us all throughout the internship period. Thank you and God bless!", img: "image/default profile.png" },
    { name: "Jo* Ma*k Ab***o", date: "14 June 2022", rating: 5, comment: "Thank you for the exciting opportunity at Model Cooperative network. It was an excellent learning experience and it allowed me to confirm my interest in pursuing a career as a Marketer. Over the course of the marketing internship, It was incredibly rewarding to be able to help them meet deadlines and carry out the vision and objectives of the company. Also Please extend my gratitude and appreciation to sir Elle who instilled a sense of confidence and giving us a relevant exposure in our practical training. The internship program was definitely amazing since you're always there to provide proper guidance. Thank you so much!", img: "image/default profile.png" },
    { name: "Jo**l Ma****o", date: "14 June 2022", rating: 5, comment: "Thank you so much for the opportunity to be your internship at MCN sir Elle. Even though its just a period of time but I gained a lot of good things in every week tasked. As a result of this experience, Im more excited to do in the field and feel well-equipped to take on my future work.", img: "image/default profile.png" },
    { name: "An*****n Ga*o", date: "14 June 2022", rating: 5, comment: "It is a great opportunity to be an intern of MCN and we gain experiences to assess our learnings and capabilities in work even though it's just a short period of time. Thank you, MCN and Sir Elle.", img: "image/default profile.png" },
    { name: "Jo*n Pa****k Do****e", date: "20 April 2022", rating: 5, comment: "Thank you so much MCN for allowing us to work as interns in your organization and especially for Sir Elle who was very accommodating and considerate to us students. I am very grateful to have the opportunity to experience working as a part of the Human Resource. It is quite unfortunate not to be able to work hands-on at the office, but every knowledge and experience we got from the task is indeed a very valuable. Once again, thank you for the amazing work experience.", img: "image/default profile.png" },
    { name: "Ja***e Pa***a", date: "19 April 2022", rating: 5, comment: "Thank you so much Sir Elle for taking the time for sharing your knowledge with us. I actually learned a lot of good that helped me to improve my skills in several ways. I am glad despite the challenges posed by this pandemic that I have an opportunity to be able to exercise my field of study as an intern of Model Cooperative Network. I will treasure this moment with all the learnings that I got and use it on my actual work in the future.", img: "image/default profile.png" },
    { name: "Ra*****e M*e Vi*****o L*o", date: "19 April 2022", rating: 5, comment: "Thank you so much, Sir Elle , for sharing your experience and knowledge with us. Working with Model Cooperative Network has been a wonderful chance and experience for us. Even though we have only been with them for a short time, we have learned a lot of information and this knowledge has helped us to be more responsible for our future. Internship was a great and enjoyable experience thanks to your leadership. I wish you and the rest of the team the best of luck in the future.", img: "image/default profile.png" },
    { name: "We*****n Me****a", date: "19 April 2022 ", rating: 5, comment: "It is a great opportunity and experience to work with Model Cooperative Network although it's just a short period of time but still, we gain a lot of learnings and this experience helps us to be more prepared in our future company and special thanks to Sir Elle, who share his knowledge and expertise to us. Wiith the help of our tasks and activities, it lead us to be more effective and efficient employee in the future.", img: "image/default profile.png" },
    { name: "Re****l Bo****o", date: "19 April 2022 ", rating: 5, comment: "A great internship provides the knowledge and skills required to become successful in a career field, and with that, thanks to Sir Elle, who shared and taught us with his expertise. Even though we're not supposed to have a face-to-face internship, I still gained a lot of experience. From being hands-on with the tasks and completing them within the stipulated time. My internship here at MCN taught me a lot, such as the benefits of networking, understanding the workplace culture, and how important open communication is. It made me realize that internships give students that hands-on experience they really need.", img: "image/default profile.png" },
    { name: "Kh**a Ba**n", date: "5 December 2019", rating: 5, comment: "THE PRUDENTIAL STANDARDS AND FINANCIAL DISCIPLINE", img: "image/default profile.png" },
  ];

  const reviewSection = document.getElementById('review-section');
  const seeMoreBtn = document.getElementById('see-more-btn');
  let reviewsDisplayed = 0;
  const reviewsPerPage = 3;

  function displayReviews() {
    const nextReviews = reviews.slice(reviewsDisplayed, reviewsDisplayed + reviewsPerPage);
    nextReviews.forEach(review => {
      const reviewCard = document.createElement('div');
      reviewCard.classList.add('review-card', 'visible');
      reviewCard.setAttribute('data-rating', review.rating);

      reviewCard.innerHTML = `
        <img src="${review.img}" alt="User Image">
        <div class="review-content">
          <div class="reviewer-name">${review.name}</div>
          <div class="review-date">${review.date}</div>
          <div class="stars">${'★'.repeat(review.rating)}${'☆'.repeat(5 - review.rating)}</div>
          <p class="comment">${review.comment}</p>
        </div>
      `;

      reviewSection.appendChild(reviewCard);
    });
    reviewsDisplayed += nextReviews.length;

    if (reviewsDisplayed >= reviews.length) {
      seeMoreBtn.style.display = 'none';
    }
  }

  function calculateOverallRating() {
    const totalRating = reviews.reduce((sum, review) => sum + review.rating, 0);
    const averageRating = totalRating / reviews.length;
    document.getElementById('overall-rating').textContent = `Overall Rating: ${averageRating.toFixed(1)}/5 | (17 reviews)`;
  }

  seeMoreBtn.addEventListener('click', displayReviews);

  // Initial load
  displayReviews();
  calculateOverallRating();