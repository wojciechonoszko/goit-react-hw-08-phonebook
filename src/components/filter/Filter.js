import React from 'react';
import PropTypes from 'prop-types';
import {InputContainer, LabelContainer} from '../contactForm/ContactFormStyles';

import { connect } from 'react-redux';
import { handleChange } from '../../redux/filter/filter-actions';


const Filter = ({handleChange, filter}) => {

    return(
        <>
            <LabelContainer htmlFor="filter">Find contacts by name</LabelContainer>
            <InputContainer
                id="filter"
                type="text"
                
                onChange={event => {
                    return handleChange(event.target.value);
                }}
                name="filter"
                value={filter}
            />
        </>
    );
};

Filter.propTypes = {
    handleChange: PropTypes.func.isRequired,
    filter: PropTypes.string.isRequired
};

const mapStateToProps = state => {
    return {
        filter: state.filter
    };
};

const mapDispatchToProps = {
    handleChange
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);