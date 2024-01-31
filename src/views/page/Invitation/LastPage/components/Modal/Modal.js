import React from 'react';
import { CSSTransition } from 'react-transition-group';
import './Modal.css';

const animationTiming = {
  enter: 400,
  exit: 500,
};

const modal = (props) => {
  return (
    <CSSTransition
      in={props.show}
      timeout={animationTiming}
      mountOnEnter
      unmountOnExit
      classNames="fade-slide"
    >
      <div className="Modal">
          <img src="./Exclude.svg" alt="Icon" />
          주소를 복사했어요
      </div>
    </CSSTransition>
  );
};

export default modal;
