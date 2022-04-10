import React, {useRef, useEffect, useState} from 'react';
//import leftArrow from "../public/assets/arrow-left"
import {gsap, Power3} from "gsap"


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

function Home() {
  const imageList = useRef<HTMLUListElement>(null)
  const testimonialList = useRef<HTMLUListElement>(null);

  const imageWidth = 340;

  const [state, setState] = useState({
    isActive1:true,
    isActive2:false,
    isActive3:false
  })

  useEffect(()=>{
    console.log(imageList.current, testimonialList.current)
    
  }, [imageList, testimonialList])

  const nextSlide = (index:number, duration:number, x:number =1) => {
    if(imageList.current)
      gsap.to(imageList.current?.children[index], {duration, ease:Power3.easeOut, x:-imageWidth*x})
  }

  const slide = (index:number, duration:number) => {
    if(imageList.current)
      gsap.from(imageList.current?.children[index], {duration, ease:Power3.easeOut, scale:1.2})
  }

  const handleNext = () => {
    console.log("next clicked")
    if(imageList.current?.children[0].classList.contains("active")){
      setState({...state, isActive1:false, isActive2:true});
      nextSlide(0, 1)
      slide(0, 1)
      nextSlide(1, 1)

    } else if(imageList.current?.children[1].classList.contains("active")){
      setState({...state, isActive2:false, isActive3:true})
    } else if(imageList.current?.children[2].classList.contains("active")){
      setState({...state, isActive3:false, isActive1:true})
    }
  }

  const handlePrevious = () => {
    console.log("Previous clicked")
    if(imageList.current?.children[0].classList.contains("active")){
      setState({...state, isActive1:false, isActive3:true})
    } else if(imageList.current?.children[1].classList.contains("active")){
      setState({...state, isActive2:false, isActive1:true})
    } else if(imageList.current?.children[2].classList.contains("active")){
      setState({...state, isActive3:false, isActive2:true})
    }
  }

  return (
    <div className="testimonial-section">
      <div className="testimonial-container">
        <div onClick={handlePrevious} className="arrows left">
          <img src="/assets/arrow-left.svg" alt="left arrow" />
        </div>

        <div className="inner">
          <div className="t-image">
            <ul ref={imageList} >
              <li className={state.isActive1 ? "active" : ""}>
                <img src={testimonials[0].image} alt={testimonials[0].name} />
              </li>
              <li className={state.isActive2 ? "active" : ""}>
                <img src={testimonials[1].image} alt={testimonials[1].name} />
              </li>
              <li className={state.isActive3 ? "active" : ""}>
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

        <div onClick={handleNext} className="arrows right">
          <img src="./assets/arrow-right.svg" alt="right arrow" />
        </div>
      </div>
    </div>
  );
}

export default Home;
