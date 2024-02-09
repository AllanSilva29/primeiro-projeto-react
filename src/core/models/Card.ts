import { cardRank, suits } from '../shared/CardTemplate';

export default class Card {
  rank: keyof typeof cardRank;
  suit: keyof typeof suits;

  flipped: boolean;

  constructor(rank: keyof typeof cardRank, suit: keyof typeof suits) {
    this.rank = rank;
    this.suit = suit;

    this.flipped = true;
  }

  flip() {
    this.flipped = !this.flipped;
  }
}
