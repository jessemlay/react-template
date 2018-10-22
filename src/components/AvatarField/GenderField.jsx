import React from 'react';
import FaceIcon from '@material-ui/icons/Face';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const FemaleFaceIcon = styled(FaceIcon)`
   background-color: pink;
   border-radius: 50px;
   box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.5);
`;

const MaleFaceIcon = styled(FaceIcon)`
   background-color: #42bcf4;
   border-radius: 50px;
   box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.5);
`;

const GenderField = ({ record, ...rest }) =>
   record && record.gender === 'M' ? <MaleFaceIcon /> : <FemaleFaceIcon />;

GenderField.propTypes = {
   record: PropTypes.object
};

export default GenderField;
