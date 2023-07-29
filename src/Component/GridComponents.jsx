import React, { useState, useEffect } from 'react';
import menu from '../assest/Menu Button.png';
import Film from '../assest/FilmReel.jpg';
import './gridComponent.css'
function GridComponents({film}) {
    const [modal,setModal] = useState(false)
  return (
    <>
    <li key={film.episode_id}>
            <img src={`https://picsum.photos/200?random=${film.episode_id}`} alt={film.title} className='film-img' />

            <div className='film-reel'>
              
            <img src={Film} alt="" />
            <p>{film.title}</p>
             
            <img className='menu' src={menu} alt=""  onClick={()=>{setModal(!modal)}}/>

            </div>
          </li>
         {modal && <div className="modal">
                  <h1>{film.title}</h1>
          </div>}
    </>

          
  )
}

export default GridComponents
