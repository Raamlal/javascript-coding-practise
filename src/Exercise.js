import React from 'react';
import './style.css';

export default function Exercise() {
  var pets = ['dog', 'chicken', 'cat', 'dog', 'chicken', 'chicken', 'rabbit'];
  //let pets = 'lggbaabad';
  //let pets = 'lggbaabad'.split('')
  var petCounts = [...pets].reduce((obj, pet) => {
    if (!obj[pet]) {
      obj[pet] = 1;
    } else {
      obj[pet]++;
    }
    return obj;
  }, {});

  console.log('petCounts->' + JSON.stringify(petCounts));
  return (
    <div>
      <h3>Exercise</h3>
    </div>
  );
}
