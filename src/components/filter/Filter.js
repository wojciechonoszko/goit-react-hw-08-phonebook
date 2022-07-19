// import React from 'react';
// import PropTypes from 'prop-types';
// import {InputContainer, LabelContainer} from '../contactForm/ContactFormStyles';


// export default function Filter({ data }) {
//     return(
//         <>
//             <LabelContainer htmlFor="filter">Find contacts by name</LabelContainer>
//             <InputContainer
//                 id="filter"
//                 type="text"
//                 onChange={data}
//                 name="filter"
                
//             />
//         </>
//     );
// }

// Filter.propTypes = {
//     data: PropTypes.func.isRequired,
// };



import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {InputContainer, LabelContainer} from '../contactForm/ContactFormStyles';
import {handleChange} from '../../redux/filter/filter-actions';

const Filter = ({filter, handleChange}) => {
  // console.log('Filter-props');
  // console.dir(filter);
  return (
    <>
      <LabelContainer htmlFor="filter">Find contacts by name</LabelContainer>
      <InputContainer
        id="filter"
        type="text"
        onChange={event => {
          // console.log(event.target.value);
          return handleChange(event.target.value);
        }}
        name="filter"
      />
    </>
  );
};

Filter.propTypes = {
  handleChange: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired
};

const mapStateToProps = state => {
  // console.log('Filter-mapStateToProps');
  // console.dir(state);
  return {
    filter: state.filter
  };
};

const mapDispatchToProps = {
  handleChange
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
// export default Filter;