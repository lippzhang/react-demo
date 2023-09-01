import React from 'react';

const FlexLayout = () => {
  return (
    <div style={{ display: 'flex', overflowX: 'scroll', msOverflowStyle: 'none', scrollbarWidth: 'none' }}>
      <div style={{ display: 'flex' }}>
        <div style={{ flex: '1', width: '200px', height: '200px', backgroundColor: 'red' }}></div>
        <div style={{ flex: '1', width: '200px', height: '200px', backgroundColor: 'green' }}></div>
        <div style={{ flex: '1', width: '200px', height: '200px', backgroundColor: 'blue' }}></div>
        <div style={{ flex: '1', width: '200px', height: '200px', backgroundColor: 'yellow' }}></div>
        <div style={{ flex: '1', width: '200px', height: '200px', backgroundColor: 'orange' }}></div>
      </div>
    </div>
  );
};

export default FlexLayout;