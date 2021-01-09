import React from 'react';

const Placeholder = ({ children, title }) => {
  return (
    <>
      <h1 className='line'>
        <span>{title}</span>
      </h1>
      {children}
    </>
  );
};

export default Placeholder;
