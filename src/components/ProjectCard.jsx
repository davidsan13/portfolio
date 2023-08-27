import React from 'react';

export default function ProjectCard({item}) {
  return (
    <div key={item.name} className="Card">
      <img src={`/public/${item.img}`} alt='image'/>
      <h1 className='project_name'>{item.name}</h1>
      <p>
       {item.description}
      </p>
      <div className="link_container">
        <a href={item.url}>Live Demo</a>
        <a href={item.urlCode}>Code</a>
      </div>
      
    </div>
  )
}