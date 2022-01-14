import React from 'react';
import './style.css';

export default function App() {
  var newArr = new Array(1, 2, 3, 6, 5, 4).filter(function (x) {
    return x % 3 == 0;
  });
  console.log('newArr->' + newArr);
  var outputArr = [];
  for (var i = newArr.length - 1; i >= 0; i--) {
    outputArr.push(newArr[i]);
  }
  console.log('outputArr->' + outputArr);

  var whileArr = [];
  while(newArr.length) {
    whileArr.push(newArr.pop());
  }
  console.log('whileArr->' + whileArr);

  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
    </div>
  );
}
