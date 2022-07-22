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
//import {connect} from 'react-redux';
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
      <LabelContainer htmlFor="filter">Find contacts by name</LabelContainer>
      <InputContainer
        value={filter}
        type="text"
        onChange={filterPhonebook}
        name="filter"
        placeholder="Type some name"
      />
    </>
  );
};

Filter.propTypes = {
  handleChange: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired
};

// const Filter = ({filter, filterContacts}) => {
//   // console.log('Filter-props');
//   // console.dir(filter);
//   return (
//     <>
//       <LabelContainer htmlFor="filter">Find contacts by name</LabelContainer>
//       <InputContainer
//         id="filter"
//         type="text"
//         onChange={event => {
//           // console.log(event.target.value);
//           return handleChange(event.target.value);
//         }}
//         name="filter"
//       />
//     </>
//   );
// };

// Filter.propTypes = {
//   handleChange: PropTypes.func.isRequired,
//   filter: PropTypes.string.isRequired
// };

// const mapStateToProps = state => {
//   // console.log('Filter-mapStateToProps');
//   // console.dir(state);
//   return {
//     filter: state.filter
//   };
// };

// const mapDispatchToProps = {
//   handleChange
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Filter);
// // export default Filter;