import React from 'react';

import {
  FilterInputField,
  FilterInputLabel,
  FilterWraper,
} from './FilterContact.styled';

export default function FilterContact({ filter, onFilterChange }) {
  return (
    <FilterWraper>
      <FilterInputLabel>
        Find contacts by name
        <FilterInputField
          type="text"
          name="filter"
          value={filter}
          onChange={onFilterChange}
        />
      </FilterInputLabel>
      {/* <UniversalInput
        type="text"
        name="filter"
        value={filter}
        onChange={onFilterChange}
        label="Find contacts by name"
      /> */}
    </FilterWraper>
  );
}
