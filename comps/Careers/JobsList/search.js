import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Select, { components } from 'react-select';
import { departments } from '../data';
const { ValueContainer, Placeholder } = components;

const styles = {
  placeholder: (base, state) => ({
    ...base,
    display: state.isFocused || state.isSelected || state.selectProps.inputValue ? 'none' : 'block',
  }),
};

const Option = (props) => (
  <div className="option pr-0">
    <components.Option {...props}>
      <input type="checkbox" checked={props.isSelected} onChange={() => null} />{' '}
      <label className="option-label">{props.label}</label>
    </components.Option>
  </div>
);

const MultiValue = (props) => (
  <components.MultiValue {...props}>
    <span className="d-none">{props.data.label}</span>
  </components.MultiValue>
);

const CustomValueContainer = ({ children, ...props }) => {
  return (
    <ValueContainer {...props}>
      <Placeholder {...props} isFocused={props.isFocused}>
        {props.selectProps.placeholder}
      </Placeholder>
      {React.Children.map(children, (child) =>
        child && child.type !== Placeholder ? child : null,
      )}
    </ValueContainer>
  );
};

class MySelect extends Component {
  static defaultProps = {
    options: [],
  };

  render() {
    const { options, locations, onChange, onKeyDown, onChangeCallback, ...otherProps } = this.props;

    return (
      <div className="container">
        <div className="row text-body">
          <div className="col-md-7 px-0 pb-3 pb-md-0 rounded-pill search-box">
            <label htmlFor="keyword" className="sr-only">
              Keyword
            </label>
            <div class="input-group mb-2 mr-sm-2">
              <div class="input-group-prepend">
                <div class="input-group-text bg-white border-white">
                  <img src="/img/careers/search.svg" alt="search" />
                </div>
              </div>
              <input
                type="text"
                onChange={(e) => onChange(e.target.value, e.target.name)}
                onKeyDown={(e) => onKeyDown(e)}
                className="form-control search pl-0"
                placeholder="Keyword Search_"
                name="keyword"
                value={this.props.keyword}
              />
            </div>
          </div>

          <div className="col-md-5 pl-0 pl-md-3 department">
            <div className="row">
              <div className="col-md-6 pr-0 pb-3 pb-md-0">
                <label htmlFor="department" className="sr-only">
                  Department
                </label>
                <Select
                  closeMenuOnSelect={false}
                  isMulti
                  components={{ Option, MultiValue, ValueContainer: CustomValueContainer }}
                  options={options}
                  hideSelectedOptions={false}
                  backspaceRemovesValue={false}
                  onChange={(e, meta) => {
                    onChangeCallback(e, meta.name);
                  }}
                  {...otherProps}
                  name="selectedDepartments"
                  placeholder="Department"
                  styles={styles}
                />
              </div>
              <div className="col-md-6 pr-0 pb-3 pb-md-0">
                <label htmlFor="location" className="sr-only">
                  Location
                </label>
                <Select
                  closeMenuOnSelect={false}
                  isMulti
                  components={{ Option, MultiValue, ValueContainer: CustomValueContainer }}
                  options={locations}
                  hideSelectedOptions={false}
                  backspaceRemovesValue={false}
                  onChange={(e, meta) => onChangeCallback(e, meta.name)}
                  {...otherProps}
                  name="selectedLocations"
                  placeholder="Location"
                  classNamePrefix="filter"
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
