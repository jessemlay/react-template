import React from 'react';
import GenderField from './GenderField';
import styled from 'styled-components';
import { Link } from 'ra-ui-materialui';

const EmpWrapper = styled.div`
   display: 'flex',
   flexWrap: 'nowrap',
   alignItems: 'center'
`;

const AvatarField = ({ record = {}, source }) => (
   <EmpWrapper>
      <GenderField record={record} /> &nbsp;
      <Link to={`/patients/${record.id}`}>{record[source]}</Link>
   </EmpWrapper>
);

export default AvatarField;
