import React from 'react';
import './index.css';

const TableRowList = ({rowList}: {rowList: any}) => {
  return (
    <>
      {rowList.map((row: any, key: number) => {
        return (
          <tr className="table-row-item" key={key}>
            {row.content.map((content: any, key: number) => {
              return (
                <td key={key} className="table-column">
                  {content}
                </td>
              );
            })}
          </tr>
        );
      })}
    </>
  );
};

const TableHeaderList = ({headerList}: {headerList: any}) => {
  return (
    <>
      {headerList.map((header: any, key: number) => {
        return (
          <th key={key} className="table-thead">
            {header}
          </th>
        );
      })}
    </>
  );
};

const Table = ({headerList, rowList}: {headerList: any; rowList: any}) => {
  return (
    <div className="table-wrapped">
      <table>
        <thead>
          <tr>
            <TableHeaderList headerList={headerList} />
          </tr>
        </thead>
        <tbody>
          <TableRowList rowList={rowList} />
        </tbody>
      </table>
    </div>
  );
};

export default Table;
