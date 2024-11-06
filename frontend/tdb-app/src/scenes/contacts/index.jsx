import React from 'react';
import { Box } from '@mui/material'
import { DataGrid, GridToolbar } from '@mui/x-data-grid'
import { tokens } from "../../theme";
import Header from "../../components/Header";
import { useTheme } from '@mui/material'
import { mockDataContacts } from '../../mockData'




const Contacts = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        { field: 'name', headerName: 'Name', width: 150, flex: 1 },
        { field: 'email', headerName: 'Email', width: 150, flex: 1 },
        { field: 'phone', headerName: 'Phone', width: 170 },
        { field: 'street', headerName: 'Street', width: 150, flex: 1 },
        { field: 'city', headerName: 'City', width: 150, flex: 1 },
        { field: 'province', headerName: 'Province', width: 150, flex: 1 },
        { field: 'zipCode', headerName: 'Zip Code', width: 150, flex: 1 },
    ];

    return (
        <Box m="20px">
            {/* Page Header */}
            <Header title="Contacts" subtitle="List of available contacts" />
            {/* DataGrid Section */}
            <Box
                m="40px 0 0 0"
                height="75vh"
                sx={{
                    "& .MuiDataGrid-root": {
                        border: "none",
                    },
                    "& .MuiDataGrid-cell": {
                        borderBottom: "none",
                    },
                    "& .name-column--cell": {
                        color: colors.accent[400],
                    },
                    "& .MuiDataGrid-columnHeader": {
                        backgroundColor: colors.primary[700],
                        borderBottom: "none",
                    },
                    "& .MuiDataGrid-virtualScroller": {
                        backgroundColor: colors.primary[500],
                    },
                    "& .MuiDataGrid-footerContainer": {
                        borderTop: "none",
                        backgroundColor: colors.primary[700],
                    },
                    "& .MuiCheckbox-root": {
                        color: `${colors.accent[200]} !important`,
                    },
                }}
            >
                <DataGrid rows={mockDataContacts} columns={columns} slots={{ toolbar: GridToolbar }} />

            </Box>
        </Box>
    );
}



export default Contacts