import React from 'react';
import CardItem from '../CardItem/CardItem';
import mockCards from '../../data/mock-card.json';
import { Card } from '../../interfaces/card.interface';

export default function CardList(): JSX.Element {
  const cards: JSX.Element[] = mockCards.cards.map((card: Card) => {
    return <CardItem key={card.id} card={card} />;
  });
  return (
    <div>
      <h1>Cards</h1>
      {cards}
    </div>
  );
}
