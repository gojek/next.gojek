import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Select, { components } from 'react-select';
import { departments } from '../data';

const Option = (props) => (
  <div>
    <components.Option {...props}>
      <input type="checkbox" checked={props.isSelected} onChange={() => null} />{' '}
      <label>{props.label}</label>
    </components.Option>
  </div>
);

const MultiValue = (props) => (
  <components.MultiValue {...props}>
    <span className="d-none">{props.data.label}</span>
  </components.MultiValue>
);

class MySelect extends Component {
  static defaultProps = {
    options: [],
  };

  render() {
    const { options, locations, onChange, onChangeCallback, ...otherProps } = this.props;

    return (
      <div className="container">
        <div className="row text-body">
          <div className="col-md-7 px-0 pb-3 pb-md-0">
            <label htmlFor="keyword" className="sr-only">
              Keyword
            </label>
            <input
              type="text"
              onChange={(e) => onChange(e.target.value, e.target.name)}
              className="form-control rounded-pill"
              placeholder="Keyword Search_"
              name="keyword"
              value={this.props.keyword}
            />
          </div>
          <div className="col-md-5 pl-0 pl-md-3">
            <div className="row">
              <div className="col-md-6 pr-0 pb-3 pb-md-0">
                <label htmlFor="department" className="sr-only">
                  Department
                </label>
                <Select
                  closeMenuOnSelect={false}
                  isMulti
                  components={{ Option, MultiValue }}
                  options={options}
                  hideSelectedOptions={false}
                  backspaceRemovesValue={false}
                  onChange={(e, meta) => {
                    onChangeCallback(e, meta.name);
                  }}
                  {...otherProps}
                  name="selectedDepartments"
                  placeholder="Department"
                />
              </div>
              <div className="col-md-6 pr-0 pb-3 pb-md-0">
                <label htmlFor="location" className="sr-only">
                  Location
                </label>
                <Select
                  closeMenuOnSelect={false}
                  isMulti
                  components={{ Option, MultiValue }}
                  options={locations}
                  hideSelectedOptions={false}
                  backspaceRemovesValue={false}
                  onChange={(e, meta) => onChangeCallback(e, meta.name)}
                  {...otherProps}
                  name="selectedLocations"
                  placeholder="Location"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MySelect;
