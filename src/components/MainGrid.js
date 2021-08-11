import React from 'react';

const MainGrid = (props) => {
  return (
    <div id="main-section-grid">
      {props.children}
    </div>
  );
}

export default MainGrid;