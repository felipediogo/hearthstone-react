import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
  font-size: 1.5em;
  margin-left: 55px
  margin-top: 15px;
`;

const Input = styled.input`
  width: 200px;
  height: 30px;
  font-size: 1.0em;
  margin-left: 15px;
  margin-top: 15px;
`;
const Select = styled.select`
  width: 200px;
  height: 30px;
  font-size: 1.0em;
  margin-left: 15px;
  margin-top: 15px;
  select:invalid { color: gray; };
`;

const Button = styled.button`
  font-size: 1.0em;
  margin-left: 15px;
`;

const CardFilter = ({ types, cardSets, rarities, races, factions, onClick }) => (
  <Div>
    <Input type="text" placeholder="Card Cost" />
    <Select value="">
      <option value="" disabled selected hidden>Deck set</option>
      {cardSets.map(cardSet => (
        <option value={cardSet}>{cardSet}</option>
      ))}
    </Select>
    <Select value="">
      <option value="" disabled selected hidden>Type</option>
      <option value="">All</option>
      {types.map(type => (
        <option value={type}>{type}</option>
      ))}
    </Select>
    <Select value="">
      <option value="" disabled selected hidden>Rarity</option>
      <option value="">All</option>
      {rarities.map(rarity => (
        <option value={rarity}>{rarity}</option>
      ))}
    </Select>
    <Select value="">
      <option value="" disabled selected hidden>Race</option>
      <option value="">All</option>
      {races.map(race => (
        <option value={race}>{race}</option>
      ))}
    </Select>
    <Select value="">
      <option value="" disabled selected hidden>Faction</option>
      <option value="">All</option>
      {factions.map(faction => (
        <option value={faction}>{faction}</option>
      ))}
    </Select>
    <Button onClick={onClick}>Search cards</Button>
  </Div>
);

export default CardFilter;