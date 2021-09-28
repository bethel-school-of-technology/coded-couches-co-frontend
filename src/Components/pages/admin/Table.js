// import React from "react";
// import { useTable } from "react-table";


// {rows.map((row, i) => {
//   prepareRow(row); // This line is necessary to prepare the rows and get the row props from react-table dynamically

//   // Each row can be rendered directly as a string using the react-table render method
//   return (
//     <tr {...row.getRowProps()}>
//       {row.cells.map(cell => {
//         return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>;
//       })}
//     </tr>
//   );
// })}

// export default function Table({ columns, data }) {
//     const {
//         getTableProps, // table props from react-table
//         getTableBodyProps, // table body props from react-table
//         headerGroups, // headerGroups, if your table has groupings
//         rows, // rows for the table based on the data passed
//         prepareRow // Prepare the row (this function needs to be called for each row before getting the row props)
//     } = useTable({
//         columns,
//         data
//     });
    
//     return (
//         <table {...getTableProps()}>
//           <thead>
//             {headerGroups.map(headerGroup => (
//               <tr {...headerGroup.getHeaderGroupProps()}>
//                 {headerGroup.headers.map(column => (
//                   <th {...column.getHeaderProps()}>{column.render("Header")}</th>
//                 ))}
//               </tr>
//             ))}
//           </thead>
//           <tbody {...getTableBodyProps()}>
//             {rows.map((row, i) => {
//               prepareRow(row);
//               return (
//                 <tr {...row.getRowProps()}>
//                   {row.cells.map(cell => {
//                     return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>;
//                   })}
//                 </tr>
//               );
//             })}
//           </tbody>
//         </table>
//       );

// };