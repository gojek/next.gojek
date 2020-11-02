import React, { useEffect, useState } from 'react';
import SingleCardAgain from './SingleCardAgain.js';
import { gsap } from 'gsap/dist/gsap';
import Link from '../Common/link';

const CardAnimation = (props) => {
  const randomRotation = (max, min) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const cardData = [
    { color: 'red', name: 4 },
    { color: 'pink', name: 3 },
    { color: 'violet', name: 2 },
    { color: 'yellow', name: 1 },
  ];

  const moveInFromRight = () => {
    gsap.from('.single-card', {
      // x: 200,
      duration: 1.2,
      opacity: 0,
      stagger: 0.3,
      rotate: 0,
    });
  };

  const moveOutTopElement = (direction) => {
    gsap.to(`.single-${top}`, {
      x: direction === 'right' ? window.innerWidth : `-${window.innerWidth}`,
      duration: 1,
    });

    if (top !== 4) {
      gsap.to(`.single-${top + 1}`, {
        rotation: 0,
        duration: 1,
      });
    } else {
      gsap
        .to(`.single-card`, {
          x: 0,
          scale: 1,
          duration: 1,
          boxShadow: 'none',
          stagger: 0.7,
          zIndex: 0,
        })
        .delay(0.7);

      for (let i = 2; i <= 4; i++) {
        gsap.to(`.single-${i}`, {
          rotation: randomRotation(-10, 10),
        });
      }
    }
  };

  const handleChange = (direction) => {
    moveOutTopElement(direction);

    if (top !== 4) {
      setTop((prevTop) => prevTop + 1);
    } else {
      setTop(1)
    }

    autoRestartInterval()
  };

  const autoRemoveCard = () => {
    const link = document.getElementById('animationButton')
    link.click()
  }

  const autoRestartInterval = () => {
    clearInterval(inter)
    setInter(setInterval(autoRemoveCard, 5000))
  }

  const [top, setTop] = useState(1)
  const [inter, setInter] = useState(null)

  useEffect(() => {
    moveInFromRight();

    setInter(setInterval(autoRemoveCard, 5000))

    return () => clearInterval(inter)
  }, [])

  return (
    <div className="row full-height py-5 align-items-center position-relative" style={{ top: 0 }}>
      <div className="col-md-4 pr-md-5 pt-5">
        <h1 className="heading pb-3">{props.data.heading}</h1>
        <p className="text-lead pb-5 pr-5">{props.data.description}</p>
        {props.data.cta && <Link href="#" text="Check them out" color="text-green-light" />}
      </div>
      <div
        className="col-md-8 pt-5"
        style={{
          left: '30%',
          position: 'absolute',
          top: 0,
        }}
      >
        <div className="row align-items-center">
          <div className="col-md-1">
          
          <i class="fas fa-chevron-left animation-icon animation-icon--left" id="animationButton" onClick={() => handleChange('left')}></i>
            
          </div>
          <div className="col-md-10">
            {props.data.data.map((card, index) => {
              return (
                <SingleCardAgain
                  color={card.color}
                  visibleIndex={index}
                  key={card.id}
                  name={card.id}
                />
              );
            })}
          </div>
          <div className="col-md-1">
          
            <i class="fas fa-chevron-right animation-icon animation-icon--right" onClick={() => handleChange('right')}></i>
          
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardAnimation;
