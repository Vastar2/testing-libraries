import React from "react";
import { useTable, Column } from "react-table";

interface Data {
  name: string;
  language: string;
  ts: string;
  react: string;
}

const TablePage = () => {
  const columns: Column<Data>[] = React.useMemo(
    () => [
      { Header: "Name", accessor: "name" },
      { Header: "Language", accessor: "language" },
      { Header: "React", accessor: "react" },
      { Header: "TS", accessor: "ts" },
    ],
    []
  );

  const data = React.useMemo<Data[]>(
    () => [
      { name: "Vasyl", language: "js", ts: "yes", react: "yes" },
      { name: "Pavel", language: "js", ts: "yes", react: "yes" },
    ],
    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({
      columns,
      data,
    });

  return (
    <div className="flex flex-col items-center gap-4 pt-12">
      <table {...getTableProps()} className="container-main">
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th
                  {...column.getHeaderProps()}
                  className="container-main font-bold text-center p-2"
                >
                  {column.render("Header")}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr
                {...row.getRowProps()}
                className="border border-bottom border-gray-300"
              >
                {row.cells.map((cell) => (
                  <td
                    {...cell.getCellProps()}
                    className="p-2 border border-right border-gray-300"
                  >
                    {cell.render("Cell")}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default TablePage;
