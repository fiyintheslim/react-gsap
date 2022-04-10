import {useRef, useEffect, useState} from 'react'
import {gsap, Power3} from "gsap"
import "../styles/circles.scss"

const Circles = () => {
    const tl = gsap.timeline()

    const red = useRef<HTMLDivElement>(null)
    const yellow = useRef<HTMLDivElement>(null)
    const blue = useRef<HTMLDivElement>(null)
    const circleContainer = useRef<HTMLDivElement>(null)

    const expanded = useRef(false)

    useEffect(()=>{
        if(circleContainer.current)
            tl.from(circleContainer.current.children, {duration:2, stagger:0.5, x:-100, y:-100, opacity:0, ease:"elastic"})
    }, [tl])
    
    const handleClick = (el: React.MouseEvent<HTMLDivElement, MouseEvent>, ref:HTMLDivElement | null) => {
        //tl.reverse()
        const all = circleContainer.current?.children;
        if(all && ref){
            

            Array.from(all).forEach((el)=>{
    
                if(el.classList.value === ref.classList.value){
                    
                    if(expanded.current){
                        console.log("match1", expanded.current)
                        gsap.to(el, {duration:1, width:75, height:75, ease:"power3.out"})
                        expanded.current = false
                    }else{
                        console.log("match2")
                        gsap.to(el, {duration:1, width:150, height:150, ease:"power1.out"})
                        expanded.current = true
                    }
                    
                    
                }else{
                    gsap.to(el, {duration:1, width:75, height:75, ease:"power3.out"})
                }
               
            })
        }
       
    }

    const handleReset = ()=>{
        const all = circleContainer.current?.children;
        if(all)
            gsap.to(all, {duration:1, width:75, height:75, ease:"power3.out"})
    }

  return (
    <div className="App">
        <div ref={circleContainer} className="circles-container">
            <div onClick={(e)=>handleClick(e, red.current)}  ref={red} className="circle red"></div>
            <div onClick={(e)=>handleClick(e, yellow.current)}  ref={yellow} className="circle"></div>
            <div onClick={(e)=>handleClick(e, blue.current)}  ref={blue} className="circle blue"></div>
        </div>
    </div>
  )
}

export default Circles