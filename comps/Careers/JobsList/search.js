import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { components } from 'react-select';
import MeraSelect from 'react-select';
import makeAnimated from 'react-select/animated';
// import { departments } from '../data';
import Select from 'react-multi-select-component';
// import 'react-select/dist/react-select.cjs';

const animatedComponents = makeAnimated();

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
    {console.log('props', props)}
    <div style={{ width: '100%' }}>{props.data.label}</div>
  </components.MultiValue>
);

class MySelect extends Component {
  static defaultProps = {
    options: [],
  };

  render() {
    const {
      departmentValue,
      locationValue,
      departments,
      locations,
      onChange,
      onChangeCallback,
      ...otherProps
    } = this.props;

    return (
      <div className="container">
        <div className="row">
          <div className="col-md-7 px-0">
            <label htmlFor="keyword" className="sr-only">
              Keyword
            </label>
            <input
              type="text"
              onChange={(e) => onChange(e.target.value, e.target.name)}
              className="form-control rounded-pill"
              id="keyword"
              placeholder="Keyword Search"
              name="keyword"
            />
          </div>
          <div className="col-md-5">
            <div className="row">
              <div className="col-md-6 pr-0">
                <label htmlFor="department" className="sr-only">
                  Department
                </label>

                <Select
                  // closeMenuOnSelect={false}
                  // isMulti
                  className="form-control rounded-pill"
                  // components={{ Option, MultiValue }}
                  options={departments}
                  hasSelectAll={false}
                  value={departmentValue}
                  // hideSelectedOptions={false}
                  // backspaceRemovesValue={false}
                  onChange={(e, meta) => onChangeCallback(e, 'selectedDepartments')}
                  // {...otherProps}
                  // name="selectedLocations"
                  placeholder="Department"
                />
                {/* <Select
                  closeMenuOnSelect={false}
                  getOptionLabel={(option) => option.label}
                  getOptionValue={(option) => option.value}
                  isMulti
                  // components={{ Option, MultiValue }}
                  options={options.map(({ label, value }) => ({ label, value }))}
                  defaultValue={options.map(({ label, value }) => ({ label, value }))}
                  hideSelectedOptions={true}
                  backspaceRemovesValue={false}
                  onChange={(e, meta) => {
                    onChangeCallback(e, meta.name);
                  }}
                  {...otherProps}
                  value={value}
                  name="selectedDepartments"
                  placeholder="Department"
                /> */}
                {/* <Select
                  closeMenuOnSelect={false}
                  components={animatedComponents}
                  defaultValue={options.map(({ label, value }) => ({ label, value }))}
                // hideSelectedOptions={false}
                  isMulti
                  className="basic-multi-select"
                  classNamePrefix="select"
                  options={options.map(({ label, value }) => ({ label, value }))}
                /> */}
              </div>
              <div className="col-md-6 pr-0">
                <label htmlFor="location" className="sr-only">
                  Location
                </label>
                {console.log('locations', locations)}
                <Select
                  // closeMenuOnSelect={false}
                  // isMulti
                  // components={{ Option, MultiValue }}
                  options={locations}
                  hasSelectAll={false}
                  className="form-control rounded-pill"
                  value={locationValue}
                  // hideSelectedOptions={false}
                  // backspaceRemovesValue={false}
                  onChange={(e, meta) => onChangeCallback(e, 'selectedLocations')}
                  // {...otherProps}
                  // name="selectedLocations"
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
