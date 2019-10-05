import Card from '../components/card.js';
import EditCard from '../components/edit-card.js';
import {Position, render} from '../utils.js';

export default class CardController {
  constructor(data) {
    this._card = new Card(data);
    this._editCard = new EditCard(data);
  }


}
