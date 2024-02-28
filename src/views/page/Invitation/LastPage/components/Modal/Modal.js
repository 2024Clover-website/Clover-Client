import React from 'react';
import { CSSTransition } from 'react-transition-group';
import modalStyles from '../../../../../style/Invitation/LastPage/components/Modal/Modal.module.css';

const animationTiming = {
  enter: 500,
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
      <div className={modalStyles.Modal}>
          <img src="/Exclude.svg" alt="Icon" />
          주소를 복사했어요
      </div>
    </CSSTransition>
  );
};

export default modal;
