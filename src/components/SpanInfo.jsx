import React from 'react';

const SpanInfo = ({temperature,getTemperature}) => {
  return (
    <span className= {getTemperature(temperature)}>{temperature}℃</span>
  );
}

export default SpanInfo;