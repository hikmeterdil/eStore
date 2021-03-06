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
      <tr>
        {th.map((v, i)=><th key={i}>{v}</th>)}
      </tr>
    </thead>
  );
}

const TableRow= ({td}) => {
  return (
    <tr>
      {td.map((v, i)=><td key={i}>{v}</td>)}
    </tr>
  );
}

export default Table;
export { TableHeader, TableRow };