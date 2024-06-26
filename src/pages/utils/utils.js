export const truncateText = (text, wordLimit) => {
    const words = text.split(' ');
    if (words.length <= wordLimit) {
      return text;
    }
    return words.slice(0, wordLimit).join(' ') + '...';
  };

  import React from 'react'
  
  const utils = () => {
    return (
      <div>utils</div>
    )
  }
  
  export default utils