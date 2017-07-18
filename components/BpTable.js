import React, { PropTypes } from 'react';


const Table = ({
  children,
  ...props,
}) => (

  <Table numRows={10}>
    <Column name="Dollars" renderCell={renderCell}/>
  </Table>

);

export default Table;



