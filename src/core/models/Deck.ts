import Card from './Card';
import { cardRank, suits } from '../shared/CardTemplate';

export default class Deck {
  stack: Card[];

  fill(): void {}

  shuffle(): void {}

  draw(): Card {
    return;
  }

  stackUp(): void {}
}
