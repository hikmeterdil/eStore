import React from 'react';

import './Table.css';

const Table = ({header, rows, isStriped, isDark}) => {
  return (
    <table className={`${isStriped && 'table-striped'} ${isDark && 'table-dark'}`}>
      {header}
      <tbody>
        {rows}
      </tbody>
    </table>
  )
};

const TableHeader = ({th}) => {
  return (  
    <thead>
      {th.map(v=><th>{v}</th>)}
    </thead>
  );
}

const TableRow= ({td}) => {
  return (
    <tr>
      {td.map(v=><td>{v}</td>)}
    </tr>
  );
}

export default Table;
export { TableHeader, TableRow };