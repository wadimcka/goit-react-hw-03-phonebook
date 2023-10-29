import React from 'react';
import { FilterInput, FilterInputLabel, FilterWrap } from './Filter.styled';

function Filter({ filter, onChange }) {
  return (
    <FilterWrap>
      <FilterInputLabel htmlFor="">Find contacts by name</FilterInputLabel>
      <FilterInput type="text" value={filter} onChange={onChange} />
    </FilterWrap>
  );
}

export default Filter;
