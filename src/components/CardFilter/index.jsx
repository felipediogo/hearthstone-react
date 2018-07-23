import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
  font-size: 1.5em;
  margin-left: 50px
  margin-top: 15px;
`;

const TextInput = styled.input`
  width: 200px;
  height: 30px;
  font-size: 1.0em;
`;

const CardFilter = (props) => (
  <Div>
    <TextInput type="text" placeholder="Card Cost" />
  </Div>
);

export default CardFilter;