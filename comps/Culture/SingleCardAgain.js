import React, { useEffect } from 'react';
import { gsap } from 'gsap/dist/gsap';
import { Draggable } from 'gsap/dist/Draggable';

const randomRotation = (max, min) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const SingleCard = React.memo(({ color, visibleIndex, lastElement, name }) => {
  const startDraggingCard = (targetElement) => {
    gsap.to(targetElement, {
      scale: 1.2,
      duration: 0.5,
      boxShadow: '0px 0px 30px 8px grey',
    });
  };

  const endDraggingCard = (element) => {
    if (element.x > 200) {
      gsap.to(`.single-${name}`, {
        x: window.innerWidth + window.innerWidth,
      });
      gsap.to(`.single-${name + 1}`, {
        rotate: 0,
        duration: 1,
      });
    } else if (element.x < -200) {
      gsap.to(`.single-${name}`, {
        x: `-${window.innerWidth}`,
      });
      gsap.to(`.single-${name + 1}`, {
        rotate: 0,
        duration: 1,
      });
    } else {
      gsap.to(`.single-${name}`, {
        scale: 1,
        x: 0,
        duration: 1,
        boxShadow: 'none',
      });
    }

    // LAst element
    if (name === 4) {
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

  useEffect(() => {
    gsap.registerPlugin(Draggable);

    Draggable.create(`.single-${name}`, {
      type: 'x',

      onDragStart: function() {
        startDraggingCard(this.target);
      },

      onDragEnd: function() {
        endDraggingCard(this);
      },
    });
  }, []);
  let rotation = name === 1 ? '0' : randomRotation(-10, 10);
  return (
    <div
      className={`card text-white px-5 pt-3 border-0 mb-4 shadow single-card single-${name}`}
      id={`${name === 4 ? 'lastElement' : ''}`}
      style={{
        backgroundColor: `${color}`,
        transform: `rotate(${rotation}deg)`,
        zIndex: visibleIndex,
      }}
    >
      <div className="card-body pb-0">
        <div className="row align-items-center">
          <div>
            <p className="py-5 w-75 mx-auto text-left">
              Gojek contributed a total of $7.1 billion to Indonesia’s economy in 2019.
            </p>
          </div>
          <div className={`col-md-6`}>
            <img src="../img/home/tech-fact.png" alt="Something" />
          </div>
        </div>
      </div>
    </div>
  );
});

export default SingleCard;
