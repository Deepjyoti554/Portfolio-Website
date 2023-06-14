import React from 'react'
import "./testimonials.css"
import avt1 from '../../assets/Avatar1.jpg'
import avt2 from '../../assets/Avatar2.jpg'
import avt3 from '../../assets/Avatar3.jpg'
import avt4 from '../../assets/Avatar4.jpg'
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    id: 1,
    image: avt1,
    name: 'Maya',
    review: 'The client wanted a new website that would help them to increase their online presence and generate more leads. I worked with the client to understand their needs and goals, and then I designed and developed a new website that met their needs. The website is responsive, meaning it looks good on all devices, and it is easy to use. I also integrated e-commerce functionality into the website, so that the client can sell their products online.'
  },
  {
    id: 2,
    image: avt2,
    name: 'Jack',
    review: 'The client needed a web application that would allow them to track their fundraising efforts. I developed a custom web application that met their needs. The application is user-friendly and easy to use, and it allows the client to track their fundraising efforts in real time.I am a highly skilled and experienced web developer. I have a proven track record of success in developing and delivering high-quality web applications. '
  },
  {
    id: 3,
    image: avt3,
    name: 'Mikal',
    review: 'The client needed a web application that would allow them to track their fundraising efforts. I developed a custom web application that met their needs. The application is user-friendly and easy to use, and it allows the client to track their fundraising efforts in real time. The application was a success. It helped the client to improve their fundraising efforts and raise more money. The client was very happy with the application. '
  },
  {
    id: 4,
    image: avt4,
    name: 'Jorden',
    review: 'The clients website was not secure, and they were concerned about the security of their data. I worked with the client to improve the security of their website. I implemented a number of security measures. The security improvements were a success. They helped to protect the clients data from unauthorized access. The client was very happy with the security improvements, and they said that they were confident that their data was safe.'
  },

]
const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>What my client says</h5>
      <h2>Testimonials</h2>
      <Swiper className="container testimonial__container"
        // install Swiper modules
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
      >
        {
          data.map(({id, image, name, review}) => {
            return (
              <SwiperSlide key={id} className="testimonial">
                <div className="testimonaial__avatar"><img src={image} /></div>
                <h5 className='testimonial__client-name'>{name}</h5>
                <small className='testimonial__client-review'>{review}</small>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonials
