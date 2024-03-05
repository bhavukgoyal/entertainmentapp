import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaBookmark } from 'react-icons/fa';
import { BiCameraMovie   } from 'react-icons/bi';
import { AiFillHome } from 'react-icons/ai';
import { BsFillTvFill } from 'react-icons/bs';
import './App.css'



const Test = () => {
    const [movieData, setMovieData] = useState([]);
    const [hoveredIndex1, setHoveredIndex1] = useState(null);
    const [hoveredIndex2, setHoveredIndex2] = useState(null);
    const [hoveredIndex3, setHoveredIndex3] = useState(null);
    const [tvData, settvData] = useState([]);


    const [searchInput, setSearchInput] = useState(null);
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [varr, setVarr] = useState(false);


     useEffect(() => {
        const fetchDataall = async () => {
            const optionsall = {
                method: 'GET',
                headers: {
                    accept: 'application/json',
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4ZmYwM2ZhMjFiZjVjYzQ2ZTI3YjRjZDUwYzAxNDA4NCIsInN1YiI6IjY1ZDQ5ZTliMDlkZGE0MDE2NTU3ODBjYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.NnY9G3oRdZM0tx-iwD545dGBXEYreZuk1UT_vlYHmzs'
                }
            };

            try {
                const responseall = await fetch('https://api.themoviedb.org/3/trending/movie/day?language=en-US', optionsall);
                const dataall = await responseall.json();
                setMovies(dataall.results || []);
            } catch (error) {
                console.error('Error fetching movie data:', error);
            }
        };

        fetchDataall();
    }, []);

    useEffect(() => {
        const fetchData = async () => {
            const options = {
                method: 'GET',
                headers: {
                    accept: 'application/json',
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4ZmYwM2ZhMjFiZjVjYzQ2ZTI3YjRjZDUwYzAxNDA4NCIsInN1YiI6IjY1ZDQ5ZTliMDlkZGE0MDE2NTU3ODBjYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.NnY9G3oRdZM0tx-iwD545dGBXEYreZuk1UT_vlYHmzs'
                }
            };

            try {
                const response = await fetch('https://api.themoviedb.org/3/trending/movie/day?language=en-US', options);
                const data = await response.json();
                setMovieData(data.results || []);
            } catch (error) {
                console.error('Error fetching movie data:', error);
            }
        };

        fetchData();
    }, []);

    useEffect(() => {
        const fetchDatatv = async () => {
            const optionstv = {
                method: 'GET',
                headers: {
                    accept: 'application/json',
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4ZmYwM2ZhMjFiZjVjYzQ2ZTI3YjRjZDUwYzAxNDA4NCIsInN1YiI6IjY1ZDQ5ZTliMDlkZGE0MDE2NTU3ODBjYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.NnY9G3oRdZM0tx-iwD545dGBXEYreZuk1UT_vlYHmzs'
                }
            };

            try {
                const responsetv = await fetch('https://api.themoviedb.org/3/trending/tv/day?language=en-US', optionstv);
                const datatv = await responsetv.json();
                settvData(datatv.results || []);
            } catch (error) {
                console.error('Error fetching tv data:', error);
            }
        };

        fetchDatatv();
    }, []);

    if (!movieData.length) {
        return <div>Loading...</div>;
    }
   
    const preventRightClick = (event) => {
        event.preventDefault();
    };
    return (
        <div style={{ display: 'flex', height: 'auto',backgroundColor: '#333' }}>
  
     <div style={{ width: '50px', backgroundColor: '#333', position: 'fixed', top: 0, bottom: 0, left: 0,display:'flex',alignItems:'center'}}>
        <ul style={{ listStyle: 'none', padding: 0 }}>
            <li style={{ padding: '10px' }}>
                <Link to="/Home" style={{ color: 'red', fontSize: '2em', textDecoration: 'none' }} >
                    <AiFillHome />
                </Link>
            </li>
            <li style={{ padding: '10px' }}>
                <Link to="/Movies" style={{ color: 'white', fontSize: '2em', textDecoration: 'none' }} >
                    <BiCameraMovie />
                </Link>
            </li>
            <li style={{ padding: '10px' }}>
                <Link to="/TV" style={{ color: 'white', fontSize: '2em', textDecoration: 'none' }} >
                    <BsFillTvFill />
                </Link>
            </li>
            <li style={{ padding: '10px' }}>
                <Link to="/bookmark" style={{ color: 'white', fontSize: '2em', textDecoration: 'none' }} >
                    <FaBookmark />
                </Link>
            </li>
        </ul>
    </div>
            <div style={{ marginLeft: '100px', padding: '20px',backgroundColor: '#333' }}>
  <div class="search-bar1">
  <input type="text" class="search-input" value={searchInput}
        onChange={(e) => setSearchInput(e.target.value === "" ? setVarr(false) : e.target.value)} placeholder="Search for Movies or TV Shows..."/>
  </div>
  <div>
        {movies.length>0 && searchInput && movies.filter((movie) => movie.title.toLowerCase().includes(searchInput.toLowerCase())).map((movie) => (
            <div class="search-bar2" key={movie.id} 
            onClick={() => { setSelectedMovie(movie); setVarr(true); }}>
              {movie.title}
            </div>
          ))}
      </div>
      {selectedMovie && varr && <div   key={selectedMovie.id}
      style={{
          position: 'relative',
          marginBottom: '20px',
          display: 'inline-block',
          margin: 2
      }}
      onMouseEnter={() => setHoveredIndex1(true)}
      onMouseLeave={() => setHoveredIndex1(null)}><img
      src={`https://image.tmdb.org/t/p/w200${selectedMovie.poster_path}`}
      alt={selectedMovie.title}
      style={{ width: '200px', height: '300px', objectFit: 'cover' }}
  />
  
  {hoveredIndex1 && (
      <Link
          to={{ pathname: "/Details" }}
          state={{ state: selectedMovie }}
          onContextMenu={preventRightClick}
      >
          <div
              style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  fontWeight: 'bold',
                  cursor: 'pointer',
                  fontSize: '24px'
              }}
          >
              ▶️
          </div>
      </Link>
  )}

  <div
      style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          color: 'white',
          padding: '5px',
          fontWeight: 'bold'
      }}
  >
      {selectedMovie.title}
  </div>
  <div
      style={{
          position: 'absolute',
          top: 0,
          right: 0,
          color: 'white',
          padding: '5px',
          
      }}
  >
      <FaBookmark/>
  </div></div>}
      
                <h1 style={{ color:'white' }}>Trending Movies</h1>
                {movieData.slice(0,6).map((movie, index) => (
                    <div
                        key={movie.id}
                        style={{
                            position: 'relative',
                            marginBottom: '20px',
                            display: 'inline-block',
                            margin: 2
                        }}
                        onMouseEnter={() => setHoveredIndex2(index)}
                        onMouseLeave={() => setHoveredIndex2(null)}
                    >
                        <img
                            src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                            alt={movie.title}
                            style={{ width: '200px', height: '300px', objectFit: 'cover' }}
                        />
                        
                        {hoveredIndex2 ===index  && (
                            <Link
                                to={{ pathname: "/Details", state: { movie } }}
                                state={{ state: movie }}
                                onContextMenu={preventRightClick}
                            >
                                <div
                                    style={{
                                        position: 'absolute',
                                        top: '50%',
                                        left: '50%',
                                        transform: 'translate(-50%, -50%)',
                                        fontWeight: 'bold',
                                        cursor: 'pointer',
                                        fontSize: '24px'
                                    }}
                                >
                                    ▶️
                                </div>
                            </Link>
                        )}
    
                        <div
                            style={{
                                position: 'absolute',
                                bottom: 0,
                                left: 0,
                                color: 'white',
                                padding: '5px',
                                fontWeight: 'bold'
                            }}
                        >
                            {movie.title}
                        </div>
                        <div
                            style={{
                                position: 'absolute',
                                top: 0,
                                right: 0,
                                color: 'white',
                                padding: '5px',
                                
                            }}
                        >
                            <FaBookmark/>
                        </div>
                    </div>
                ))}
                <h1 style={{ color:'white' }}>Trending TV Shows</h1>
                {tvData.slice(0,6).map((movie, index) => (
                    <div
                        key={movie.id}
                        style={{
                            position: 'relative',
                            marginBottom: '20px',
                            display: 'inline-block',
                            margin: 2
                        }}
                        onMouseEnter={() => setHoveredIndex3(index)}
                        onMouseLeave={() => setHoveredIndex3(null)}
                    >
                        <img
                            src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                            alt={movie.name}
                            style={{ width: '200px', height: '300px', objectFit: 'cover' }}
                        />
    
                        {hoveredIndex3 === index && (
                            <Link
                            to={{ pathname: "/Details", state: { movie } }}
                            state={{ state: movie }}
                            onContextMenu={preventRightClick}
                        >
                                <div
                                    style={{
                                        position: 'absolute',
                                        top: '50%',
                                        left: '50%',
                                        transform: 'translate(-50%, -50%)',
                                        fontWeight: 'bold',
                                        cursor: 'pointer',
                                        fontSize: '24px'
                                    }}
                                >
                                    ▶️
                                </div>
                            </Link>
                        )}
    
                        <div
                            style={{
                                position: 'absolute',
                                bottom: 0,
                                left: 0,
                                color: 'white',
                                padding: '5px',
                                fontWeight: 'bold'
                            }}
                        >
                            {movie.name}
                        </div>
                        <div
                            style={{
                                position: 'absolute',
                                top: 0,
                                right: 0,
                                color: 'white',
                                padding: '5px',
                                
                            }}
                        >
                            <FaBookmark/>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Test;