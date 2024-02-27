import React from 'react';



const backdrop = (props) => {
  const cssClass = [
    'Backdrop',
    props.show ? 'BackdropOpen' : 'BackdropClosed',
  ];
  return <div className={cssClass.join(' ')}></div>;
};

export default backdrop;
