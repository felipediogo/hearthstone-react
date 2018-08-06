import React, { PureComponent } from 'react';
import {array, string} from 'prop-types';

class Select extends PureComponent {
  render() {
    console.log(this.props);
    const { options, selectedOption, placeholder } = this.props;
    return (
      // <Select value={selectedOption}>
      <Select>
        {/* <option value="" disabled selected hidden>{placeholder}</option>
        {options.map(option => (
          <option value={option}>{option}</option>
        ))} */}
      </Select>
    )
  }
}

Select.propTypes = {
  options: array,
  selectedOption: string,
  placeholder: string
}

Select.defaultProps = {
  options: []
}

export default Select;
