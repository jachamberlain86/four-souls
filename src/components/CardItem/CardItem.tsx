import React from 'react';
import { Card } from '../../interfaces/card.interface';

type CardItemProps = {
  card: Card;
};

export default function CardItem({ card }: CardItemProps): JSX.Element {
  const { name } = card;
  return <div>{name}</div>;
}
