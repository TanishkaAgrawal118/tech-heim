import React, { useState } from "react";
import { 
  useReactTable, 
  getCoreRowModel, 
  flexRender, 
  getSortedRowModel, 
  getPaginationRowModel 
} from "@tanstack/react-table";
import { Container, Button } from "react-bootstrap";
import './table.css';
import tableData  from '../../components/constants/constant.js'
const columns = [
  {
    accessorKey: "id", 
    header: "ID",
  },
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "age",
    header: "Age",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
];

const DataTable = () => {

  const [pagination, setPagination] = useState({
    pageIndex: 0,  
    pageSize: 10,   
  });

  const table = useReactTable({
    data: tableData,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    state: {
      pagination,
    },
    onPaginationChange: setPagination, 
  });

  return (
    <Container>
      <table className="table">
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th key={header.id} onClick={header.column.getToggleSortingHandler()} className="table-head">
                  {flexRender(header.column.columnDef.header, header.getContext())}
                  {header.column.getIsSorted() && (
                    <span>{header.column.getIsSorted() === "asc" ? "🔼" : "🔽"}</span>
                  )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id} className="table-content">
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>


      <div className="pagination-controls">
        <Button 
          onClick={() => table.previousPage()} 
          disabled={!table.getCanPreviousPage()}
        >
          Previous
        </Button>
        
        <span>
          Page <strong>{table.getState().pagination.pageIndex + 1}</strong> of {table.getPageCount()}
        </span>

        <Button 
          onClick={() => table.nextPage()} 
          disabled={!table.getCanNextPage()}
        >
          Next
        </Button>
      </div>
    </Container>
  );
};

export default DataTable;
