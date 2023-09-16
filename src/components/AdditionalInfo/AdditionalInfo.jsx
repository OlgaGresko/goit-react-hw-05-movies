import React from 'react';
import { Link } from 'react-router-dom';
import css from './AdditionalInfo.module.css';

export const AdditionalInfo = () => {
  return (
    <div className={css.wrapper}>
      <h3>Additional Information</h3>
      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
      <hr className={css.hr}/>
    </div>
  );
};
