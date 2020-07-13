import React, { Component } from 'react';
import Select, { components } from 'react-select';

// import Select from 'react-select';
import { departments } from './data';

const groupStyles = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
};

const formatGroupLabel = (data) => (
  <div style={groupStyles}>
    <span>fff</span>
    <span>{data.options.length}</span>
  </div>
);

function handleChange(event) {
  console.log('froms');
  props.onChange(event.target.value);
}

// export default () => (
//   <Select
//     defaultValue={colourOptions[1]}
//     options={groupedOptions}
//     formatGroupLabel={formatGroupLabel}
//   />
// );

class Option extends Component {
  render() {
    console.log('rr', this.props);
    return (
      <div>
        <components.Option {...this.props}>
          <input type="checkbox" checked={this.props.isSelected} onChange={handleChange} />{' '}
          <label>{this.props.data.name} </label>
        </components.Option>
      </div>
    );
  }
}

export default class extends Component {
  render() {
    return (
      <Select
        closeMenuOnSelect={false}
        isMulti
        components={{ Option, MultiValue }}
        options={departments}
        hideSelectedOptions={false}
        menuIsOpen
        backspaceRemovesValue={false}
        onChange={(e) => console.log(e)}
      />
    );
  }
}

const MultiValue = (props) => {
  return (
    <div className="d-none">
      <components.MultiValue {...props}>
        <span>{props.data.name}</span>
      </components.MultiValue>
    </div>
  );
};
