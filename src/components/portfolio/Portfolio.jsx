import React from 'react'
import "./portfolio.css"
import IMG1 from '../../assets/pf1.png'
import IMG2 from '../../assets/pf2.png'
import IMG3 from '../../assets/pf3.png'
import IMG4 from '../../assets/pf4.png'
import IMG5 from '../../assets/pf5.png'
import IMG6 from '../../assets/pf6.png'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Task Manager',
    github: 'https://github.com/Deepjyoti554/Task-Manager-NodeJs',
    demo: 'https://dribbble.com/shots/21625664-3D-Web-Landing-Page'
  },
  {
    id: 2,
    image: IMG3,
    title: 'Library Management system',
    github: 'https://github.com/Deepjyoti554/Library-Management-system',
    demo: 'https://dribbble.com/shots/21701455-Real-estate-Hero-section-UI'
  },
  {
    id: 3,
    image: IMG2,
    title: 'AudioAria',
    github: 'https://github.com/Deepjyoti554/AudioAria',
    demo: 'https://dribbble.com/shots/21625664-3D-Web-Landing-Page'
  },
  {
    id: 4,
    image: IMG4,
    title: 'Post Master',
    github: 'https://github.com/Deepjyoti554/Post-Master',
    demo: 'https://dribbble.com/shots/21625664-3D-Web-Landing-Page'
  },
  {
    id: 5,
    image: IMG5,
    title: 'Food-Delivery-App',
    github: 'https://github.com/Deepjyoti554/Food-Delivery-App',
    demo: 'https://dribbble.com/shots/21625664-3D-Web-Landing-Page'
  },
  {
    id: 6,
    image: IMG6,
    title: 'Ecommerce Sales Dashboard',
    github: 'https://github.com/Deepjyoti554/Task-Manager-NodeJs',
    demo: 'https://dribbble.com/shots/21688147-B2B-SaaS-Payment-Analytic-Dashboard-System'
  }
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {data.map(({id, image, title, github, demo}) => {
          return (
            <article key ={id} className='portfolio__item'>
              <div className="portfolio__image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className='btn' target='_blank'>GitHub</a>
                <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}

export default Portfolio
