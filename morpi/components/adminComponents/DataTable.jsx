import React from 'react'
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';


const DataTable = () => {
  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'firstName',
      headerName: 'First name',
      width: 150,
      editable: true,
    },
    {
      field: 'lastName',
      headerName: 'Last name',
      width: 150,
      editable: true,
    },
    {
      field: 'email',
      headerName: 'Email',
      width: 180,
    },
    {
      field: 'gender',
      headerName: 'Gender',
      width: 110,
    },
    {
      field: 'bookingPage',
      headerName: 'Booking Page',
      width: 180,
    },
    {
      field: 'age',
      headerName: 'Age',
      type: 'number',
      width: 110,
      editable: true,
    },
    {
      field: "isAdmin",
      headerName: "Role",
      renderCell: params => {
        return (
          <p key={params.row.id} className={`${params.row.isAdmin ? "text-green-500" : "text-red-500"} capitalize`} >{params.row.isAdmin.toString()}</p>
        )
      },
      width: 90,
    },
    {
      field: 'fullName',
      headerName: 'Full name',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 160,
      renderCell: (params) =>
        `${params.row.firstName || ''} ${params.row.lastName || ''}`,
    },

    {
      field: 'edit',
      headerName: 'Edit',
      renderCell: params => {
        return (
          <div key={params.row.id} className='flex gap-2 items-center' >

            <button className='rounded-md py-1 px-3 text-white bg-teal-500 hover:bg-teal-400 transition-all' >Edit</button>

            <IconButton aria-label="delete">
              <DeleteIcon className="text-red-600 hover:text-red-300 transition-all cursor-pointer" />
            </IconButton>
          </div>
        )
      },
      width: 140,
    },
  ];

  const rows = [
    { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35, email: "joe@gmail.com", gender: "Male", isAdmin: true, bookingPage: "https://turpio.com" },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42, email: "joe@gmail.com", gender: "Male", isAdmin: false, bookingPage: "https://turpio.com" },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45, email: "joe@gmail.com", gender: "Male", isAdmin: false, bookingPage: "https://turpio.com" },
    { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16, email: "joe@gmail.com", gender: "Male", isAdmin: false, bookingPage: "https://turpio.com" },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: 110, email: "joe@gmail.com", gender: "Male", isAdmin: false, bookingPage: "https://turpio.com" },
    { id: 6, lastName: 'Melisandre', firstName: "joe", age: 150, email: "joe@gmail.com", gender: "Male", isAdmin: false, bookingPage: "https://turpio.com" },
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44, email: "joe@gmail.com", gender: "Male", isAdmin: false, bookingPage: "https://turpio.com" },
    { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36, email: "joe@gmail.com", gender: "Male", isAdmin: false, bookingPage: "https://turpio.com" },
    { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65, email: "joe@gmail.com", gender: "Male", isAdmin: false, bookingPage: "https://turpio.com" },
    { id: 10, lastName: 'Roxie', firstName: 'Harvey', age: 65, email: "joe@gmail.com", gender: "Male", isAdmin: false, bookingPage: "https://turpio.com" },
    { id: 11, lastName: 'Roxie', firstName: 'Harvey', age: 65, email: "joe@gmail.com", gender: "Male", isAdmin: false, bookingPage: "https://turpio.com" },
    { id: 12, lastName: 'Roxie', firstName: 'Harvey', age: 65, email: "joe@gmail.com", gender: "Male", isAdmin: false, bookingPage: "https://turpio.com" },
    { id: 13, lastName: 'Roxie', firstName: 'Harvey', age: 65, email: "joe@gmail.com", gender: "Male", isAdmin: false, bookingPage: "https://turpio.com" },
  ];
  return (
    <div className='flex-[3] border-2 border-violet-600 rounded-md h-[660px]' >
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={9}
        rowsPerPageOptions={[9]}
        disableSelectionOnClick={true}
        checkboxSelection
        components={{ Toolbar: GridToolbar }} 

      // disableRowSelectionOnClick
      />
    </div>
  )
}

export default DataTable