import React from 'react';
import NavBar from '../NavBar/NavBar';
import CardList from '../CardList/CardList';

export default function Landing(): JSX.Element {
  return (
    <div>
      <NavBar />
      <h1>Four Souls</h1>
      <CardList />
    </div>
  );
}
