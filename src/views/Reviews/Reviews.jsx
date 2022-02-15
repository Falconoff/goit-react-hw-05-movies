import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { getReviews } from '../../service/apiService';

import { Wrap, ReviewsList, AuthorName } from './Reviews.styled';

export default function Reviews() {
  const [reviews, setReviews] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    getReviews(movieId)
      .then(response => response.results)
      .then(setReviews);
  }, [movieId]);

  return (
    <>
      {reviews && (
        <Wrap>
          {reviews.length > 0 && (
            <ReviewsList>
              {reviews.map(review => (
                <li key={review.id}>
                  <AuthorName>Author: {review.author}</AuthorName>
                  <p>{review.content}</p>
                </li>
              ))}
            </ReviewsList>
          )}
          {reviews.length === 0 && (
            <p>We don't have any reviews for this movie</p>
          )}
        </Wrap>
      )}
    </>
  );
}
