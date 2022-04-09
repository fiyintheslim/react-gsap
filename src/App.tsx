import React, {useRef, useEffect, useState} from 'react';
//import leftArrow from "../public/assets/arrow-left"
import {gsap} from "gsap"

import "./App.scss"
const testimonials = [
  {
    name: "Julia Cameron",
    title: "Creative Director, VISA",
    image: `./assets/image3.jpg`,
    quote:
      "It's all good. I was amazed at the quality of the Design. We've seen amazing results already."
  },
  {
    name: "Mark Jacobs",
    title: "Tech Lead, Google",
    image: `./assets/image.jpg`,
    quote:
      "The rebranding has really helped our business. Definitely worth the investment."
  },
  {
    name: "Lisa Bearings",
    title: "Brand Coordinator, Facebook",
    image: `./assets/image2.jpg`,
    quote:
      "The service was excellent. Absolutely wonderful! A complete redesign did it for us."
  }
];

function App() {
  const imageList = useRef<HTMLUListElement>(null)
  const testimonialList = useRef<HTMLUListElement>(null);

  useEffect(()=>{
    console.log(imageList.current, testimonialList.current)
    if(imageList.current)
      gsap.fromTo(imageList.current?.children, {scale:2, x:20, y:600, skewX:45, opacity:0}, {duration:0.5, stagger:0.6, scale:1, y:0, x:0, skewX:0, opacity:1, ease:"elastic"})
  }, [imageList, testimonialList])

  return (
    <div className="testimonial-section">
      <div className="testimonial-container">
        <div className="arrows left">
          <img src="/assets/arrow-left.svg" alt="left arrow" />
        </div>

        <div className="inner">
          <div className="t-image">
            <ul ref={imageList} >
              <li>
                <img src={testimonials[0].image} alt={testimonials[0].name} />
              </li>
              <li>
                <img src={testimonials[1].image} alt={testimonials[1].name} />
              </li>
              <li>
                <img src={testimonials[2].image} alt={testimonials[2].name} />
              </li>
            </ul>
          </div>
          <div className="t-content">
            <ul ref={testimonialList}>
              <li>
                <div className="content-inner">
                  <p className="quote">{testimonials[0].quote}</p>
                  <h3 className="name">{testimonials[0].name}</h3>
                  <h4 className="title">{testimonials[0].title}</h4>
                </div>
              </li>
              <li>
                <div className="content-inner">
                  <p className="quote">{testimonials[1].quote}</p>
                  <h3 className="name">{testimonials[1].name}</h3>
                  <h4 className="title">{testimonials[1].title}</h4>
                </div>
              </li>
              <li>
                <div className="content-inner">
                  <p className="quote">{testimonials[2].quote}</p>
                  <h3 className="name">{testimonials[2].name}</h3>
                  <h4 className="title">{testimonials[2].title}</h4>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="arrows right">
          <img src="./assets/arrow-right.svg" alt="right arrow" />
        </div>
      </div>
    </div>
  );
}

export default App;
