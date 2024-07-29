// Home 목록페이지
//npm install axios
// 목록주소
// https://yts.mx/api/v2/list_movies.json
// https://yts-proxy.now.sh/list_movies.json
// 상세보기주소
// https://yts.mx/api/v2/movie_details.json?movie_id=11
// https://yts-proxy.now.sh/movie_detail.json?movie_id=11
import axios from 'axios';
import './Home.css';
import { useState, useEffect } from 'react';
import { Movie } from '../component/Movie'

export function Home() {
  // 상태변수를 설정
  const [isLoading, setIsLoading] = useState(true);
  const [loadCounter,setLoadCounter] = useState(0);
  const [movies, setMovies] = useState(null);

  const fetchMovies = async ()=>{
    //fetchMovies를 async로 비동기 함수로 바꿔줌으로써
    //await를 사용할 수 있게 됨.
    console.log('fetchMovies호출');
    const response = await axios.get('https://yts-proxy.now.sh/list_movies.json?sort_by=rating');
    // axios.get("주소") 주소에서 데이터를 가져옴
    // await는 이 작업이 끝날 때까지 잠시 기다리는 명렁어(데이터가 다 올 때까지)
    console.log(response.data.data.movies);
    setMovies(response.data.data.movies);
    setIsLoading(false);
  }
  
  useEffect(
    ()=>{
      console.log('useEffect발생');
      fetchMovies();
    },[loadCounter]
  );
  function displayMovies(){
    return(
      <div>
        <h1>movie List(Home)</h1>
        <ul className='movies'>
          {
            movies.map(item =>{
              return(
                <Movie
                  key = {item.id}                  
                  id = {item.id}
                  year = {item.year}
                  title = {item.title}
                  summary = {item.summary}
                  poster = {item.medium_cover_image}
                  genres = {item.genres}
                />
              );
              // map : 어떤 작업을 수행하고 새로운 배열로 나열해 화면에 표현
            })
          }
      </ul></div>
    );
  }
  return (
    <div>
      {isLoading ? `loading... ${loadCounter}`: displayMovies()}
    </div>
  );
}
