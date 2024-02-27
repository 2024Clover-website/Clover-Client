import React from 'react';

import backdropStyles from '../../../../../style/Invitation/LastPage/components/Backdrop/Backdrop.module.css';

const backdrop = (props) => {
  const cssClass = [
    'Backdrop',
    props.show ? 'BackdropOpen' : 'BackdropClosed',
  ];
  return <div className={cssClass.join(' ')}></div>;
};

export default backdrop;
