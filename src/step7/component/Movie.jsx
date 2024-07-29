import './Movie.css';
import { Link } from 'react-router-dom';

export function Movie({id,year,title, summary,poster,genres}){
  return(
    <div className='movie'>
    <img src={poster} alt={title} />
    <div className='movie_data'>
      <h3 className='movie_title'>{title}</h3>
      <h5 className='movie_year'>{year}</h5>
      <p className='movie_summary'>{summary}</p>
    </div>
  </div>
  );
}