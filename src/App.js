import React from 'react';
import './style.css';

export default function App() {
  var newArr = new Array(1, 2, 3, 6, 5, 4).filter(function (x) {
    return x % 3 == 0;
  });
  console.log('Filter newArr->' + newArr);
  var outputArr = [];
  for (var i = newArr.length - 1; i >= 0; i--) {
    outputArr.push(newArr[i]);
  }
  console.log('Filter outputArr->' + outputArr);

  var whileArr = [];
  while (newArr.length) {
    whileArr.push(newArr.pop());
  }
  console.log('Filter whileArr->' + whileArr);

  /* Map, Reduce, Filter */
  let arr = [1, 2, 3, 4, 5].reduce(function (acc, current) {
    return acc + current;
  }, 0);

  let arr1 = [1, 2, 3, 4, 5].map((x) => x * x);

  console.log('Reduce->' + arr);
  console.log('map->' + arr1);

  var personnel = [
    {
      id: 5,
      name: 'Luke Skywalker',
      pilotingScore: 2,
      shootingScore: 3,
      isForceUser: true,
    },
    {
      id: 82,
      name: 'Sabine Wren',
      pilotingScore: 5,
      shootingScore: 4,
      isForceUser: false,
    },
    {
      id: 22,
      name: 'Zeb Orellios',
      pilotingScore: 2,
      shootingScore: 5,
      isForceUser: false,
    },
    {
      id: 15,
      name: 'Ezra Bridger',
      pilotingScore: 4,
      shootingScore: 6,
      isForceUser: true,
    },
    {
      id: 11,
      name: 'Caleb Dume',
      pilotingScore: 1,
      shootingScore: 8,
      isForceUser: true,
    },
  ];
  const totalJediScore = personnel
    .filter((person) => person.isForceUser)
    .map((jedi) => jedi.pilotingScore + jedi.shootingScore)
    .reduce((acc, score) => acc + score, 0);
  console.log('Map,Filter,Reduce->' + totalJediScore);
  return (
    <div>
      <h4>Number Reverse without reverse method</h4>
      <h3>Map,Filter,Reduce</h3>
    </div>
  );
}
