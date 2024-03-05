import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaBookmark } from 'react-icons/fa';
import { BiCameraMovie   } from 'react-icons/bi';
import { AiFillHome } from 'react-icons/ai';
import { BsFillTvFill } from 'react-icons/bs';



const Test = () => {
   
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const [tvData, settvData] = useState([]);


    useEffect(() => {
        const fetchDatatv = async () => {
            const optionstv = {
                method: 'GET',
                headers: {
                    accept: 'application/json',
                    Authorization: 'Authorization: Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4ZmYwM2ZhMjFiZjVjYzQ2ZTI3YjRjZDUwYzAxNDA4NCIsInN1YiI6IjY1ZDQ5ZTliMDlkZGE0MDE2NTU3ODBjYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.NnY9G3oRdZM0tx-iwD545dGBXEYreZuk1UT_vlYHmzs'
                }
            };

            try {
                const responsetv = await fetch('https://api.themoviedb.org/3/tv/popular?language=en-US&page=1', optionstv);
                const datatv = await responsetv.json();
                settvData(datatv.results || []);
            } catch (error) {
                console.error('Error fetching tv data:', error);
            }
        };

        fetchDatatv();
    }, []);

    if (!tvData.length) {
        return <div>Loading...</div>;
    }
    const preventRightClick = (event) => {
        event.preventDefault();
    };
    return (
        <div style={{ display: 'flex', height: '100vh',backgroundColor: '#333' }}>
            <div style={{ width: '50px', backgroundColor: '#333', position: 'fixed', top: 0, bottom: 0, left: 0,display:'flex',alignItems:'center'}}>
        <ul style={{ listStyle: 'none', padding: 0 }}>
            <li style={{ padding: '10px' }}>
                <Link to="/Home" style={{ color: 'white', fontSize: '2em', textDecoration: 'none' }} >
                    <AiFillHome />
                </Link>
            </li>
            <li style={{ padding: '10px' }}>
                <Link to="/Movies" style={{ color: 'white', fontSize: '2em', textDecoration: 'none' }} >
                    <BiCameraMovie />
                </Link>
            </li>
            <li style={{ padding: '10px' }}>
                <Link to="/TV" style={{ color: 'red', fontSize: '2em', textDecoration: 'none' }} >
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
            <div style={{ marginLeft: '100px', padding: '20px', overflowY: 'auto',backgroundColor: '#333' }}>
                
                <h1 style={{ color:'white' }}>Popular TV Shows</h1>
                {tvData.map((movie, index) => (
                    <div
                        key={movie.id}
                        style={{
                            position: 'relative',
                            marginBottom: '20px',
                            display: 'inline-block',
                            margin: 2
                        }}
                        onMouseEnter={() => setHoveredIndex(index)}
                        onMouseLeave={() => setHoveredIndex(null)}
                    >
                        <img
                            src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                            alt={movie.name}
                            style={{ width: '200px', height: '300px', objectFit: 'cover' }}
                        />
    
                        {hoveredIndex === index && (
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