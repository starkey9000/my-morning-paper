import React from 'react';

const PageGrid = (props) => {
  return (
    <div className="page-grid">
      {props.children}
    </div>
  );
}

export default PageGrid;