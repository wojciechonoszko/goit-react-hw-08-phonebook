import React from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from "react-redux";

import {InputContainer, LabelContainer} from '../contactForm/ContactFormStyles';
import {filterContacts} from '../../redux/filter/filter-actions';

export default function Filter() {
  const filter = useSelector((state) => state.filter);
  const dispatch = useDispatch();

  const filterPhonebook = (e) => {
    dispatch(filterContacts(e.target.value));
  };

  return (
    <>
      <LabelContainer htmlFor={filter}>Find contacts by name or number</LabelContainer>
      <InputContainer
        
        type="text"
        onChange={filterPhonebook}
        placeholder="Type some name or number"
      />
    </>
  );

  
};

Filter.propTypes = {
  filterPhonebook: PropTypes.func,
  filter: PropTypes.string
};