import React, { useState, useEffect } from 'react';
import { Typography, Box, useTheme } from "@mui/material";
import { DataGrid } from '@mui/x-data-grid';
import { tokens } from "../../theme";
import Header from "../../components/Header";

const CommunityChapters = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    // State management for rows and loading
    const [rows, setRows] = useState([]);
    const [loading, setLoading] = useState(true);

    // Fetch data from the backend using useEffect
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:3000/data');
                const result = await response.json();
                setRows(result);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching data:', error);
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    // Define columns for the DataGrid (customized as per your data structure)
    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        { field: 'name', headerName: 'Name', width: 150 },
        { field: 'role', headerName: 'Role', width: 150 },
        // Add more fields based on your PostgreSQL data structure
    ];

    return (
        <Box m="20px">
            {/* Page Header */}
            <Header title="Community Chapters" subtitle="List of Community Chapters" />

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
                    "& .MuiDataGrid-columnHeaders": {
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
                <DataGrid
                    rows={rows}  // Data fetched from PostgreSQL
                    columns={columns}  // Columns definition
                    loading={loading}  // Loading state
                    pageSize={5}  // Number of rows per page
                    rowsPerPageOptions={[5]}  // Rows per page option
                    checkboxSelection  // Enable checkbox selection
                />
            </Box>
        </Box>
    );
};

export default CommunityChapters;
