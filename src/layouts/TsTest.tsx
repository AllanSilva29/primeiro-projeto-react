import { cardRank, cardImages } from '../core/shared/CardTemplate';
import Card from '../core/models/Card';

console.log(new Card('ACE', 'SPADES'));

console.log(cardRank['KING']);

let cardRanks = [];

for (const [key, value] of Object.entries(cardRank)) {
  let obj = {};
  obj[key] = value;
  cardRanks.push(obj);
}

function Ts() {
  return (
    <div>
      {cardRanks.map((obj, index) => (
        <li id={'item' + index}>
          {Object.keys(obj)}: {Object.values(obj)}
          <div style={{ margin: '20px' }}>
            <img src={cardImages[index]} alt="" height="120" />
          </div>
        </li>
      ))}
    </div>
  );
}

export default Ts;
