import React from 'react';
import './reviews.css';


const reviews = [
  {
    name: 'Alicia Shankur',
    role: 'Product Manager',
    company: 'Arctiq Studio',
    rating: 4,
    feedback: 'Great collaborative team. Flexible working hours and clear growth path. Would highly recommend!',
    date: 'May 3, 2025',
  },
  {
    name: 'Diti Shreyas',
    role: 'Backend Engineer',
    company: 'SkyNova Inc.',
    rating: 5,
    feedback: 'Best work-life balance I’ve experienced. Transparent leadership and strong mentorship.',
    date: 'May 1, 2025',
  },
  {
    name: 'Kito Ashuth',
    role: 'Content Writer',
    company: 'Lexa Media',
    rating: 3,
    feedback: 'Good environment, but deadlines can be overwhelming. Room for better communication.',
    date: 'Apr 28, 2025',
  },
];

const ReviewsPage = () => {
  return (
    <>
      
      <div className="reviews-container">
        <h2>Employee Reviews</h2>
        <div className="reviews-grid">
          {reviews.map((review, index) => (
            <div className="review-card" key={index}>
              <div className="review-header">
                <h3>{review.name}</h3>
                <p>{review.role} at {review.company}</p>
                <div className="review-rating">
                  {'★'.repeat(review.rating)}
                  {'☆'.repeat(5 - review.rating)}
                </div>
              </div>
              <p className="review-feedback">"{review.feedback}"</p>
              <div className="review-date">{review.date}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ReviewsPage;
