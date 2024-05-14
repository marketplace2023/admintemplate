import React from "react";
import { FaEye, FaTrash } from "react-icons/fa";
import Link from "next/link";

interface Column {
  header: string;
  accessor: string;
}

interface TableProps {
  columns: Column[];
  data: { [key: string]: any }[];
}

function Table({ columns, data }: TableProps) {
  return (
    <div className="overflow-x-auto">
      <table className="table w-full">
        <thead>
          <tr>
            {columns.map((column, index) => (
              <th key={index}>{column.header}</th>
            ))}
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, rowIndex) => (
            <tr key={rowIndex}>
              {columns.map((column, colIndex) => (
                <td key={colIndex}>{item[column.accessor]}</td>
              ))}
              <td className="flex space-x-2">
                <Link href={`/details/${item.id}`}>
                  <button className="text-blue-500">
                    <FaEye />
                  </button>
                </Link>
                <button className="text-red-500">
                  <FaTrash />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
