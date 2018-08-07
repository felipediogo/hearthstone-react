import React, { PureComponent } from 'react';
import styled from 'styled-components';
import { array, string, func } from 'prop-types';

const CustomSelect = styled.select`
  width: 200px;
  height: 30px;
  font-size: 1.0em;
  margin-left: 15px;
  margin-top: 15px;
  select:invalid { color: gray; };
`;

class Select extends PureComponent {
  constructor(...args) {
    super(...args);
    this.onChange = this.onChange.bind(this);
  }
  onChange({ target: { value } }) {
    this.props.onChange(value);
  }

  render() {
    const { options, value, placeholder } = this.props;
    return (
      <CustomSelect value={value} onChange={this.onChange}>
        <option value="" key="" disabled hidden>{placeholder}</option>
        {options.map(option => (
          <option value={option} key={option}>{option}</option>
        ))}
      </CustomSelect>
    )
  }
}

Select.propTypes = {
  options: array.isRequired,
  onChange: func.isRequired,
  value: string,
  placeholder: string
}

Select.defaultProps = {
  options: [],
  value: ''
}

export default Select;
