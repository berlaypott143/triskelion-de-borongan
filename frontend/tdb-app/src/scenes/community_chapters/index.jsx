import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Typography, Box, useTheme } from "@mui/material";
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { tokens } from "../../theme";
import Header from "../../components/Header";

const CommunityChapters = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const navigate = useNavigate();
    const { name } = useParams();
    const [rows, setRows] = useState([]);
    const [loading, setLoading] = useState(true);
    const [chapters, setChapters] = useState([]);
    const [members, setMembers] = useState([]);
    const [selectedChapter, setSelectedChapter] = useState(null);

    // Fetch chapter names
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:3000/chapters');
                const result = await response.json();
                setRows(result.map((table, index) => ({ id: index + 1, chapter: table.table_name })));
                setChapters(result.map((table, index) => ({ id: index + 1, chapter: table.table_name })));
                setLoading(false);
            } catch (error) {
                console.error('Error fetching data:', error);
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    // Fetch members from selected chapter
    const fetchMembers = async (chapterName) => {
        setSelectedChapter(chapterName);
        setLoading(true);
        navigate(`/community-chapters/${chapterName}`);
        try {
            const response = await fetch(`http://localhost:3000/chapter/${chapterName}/members`);
            const result = await response.json();
            const formattedResult = result.map((member, index) => ({
                ...member,
                id: index + 1,
                date_of_survival: new Date(member.date_of_survival).toLocaleDateString(), // Formatting the date without time
            }));
            setMembers(formattedResult);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching members:', error);
            setLoading(false);
        }
    }

    useEffect(() => {
        if (name) {
            fetchMembers(name);
        } else {
            setSelectedChapter(null);
        }
    }, [name]);

    const handleBack = () => {
        navigate('/community-chapters');
        setSelectedChapter(null);
    }

    const chapterColumns = [
        { field: 'chapter', headerName: 'Chapters', width: 200 }
    ];

    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        { field: 'name', headerName: 'Name', width: 150, flex: 1 },
        { field: 'alexis_name', headerName: 'Alexis Name', width: 150, flex: 1 },
        { field: 'chapter', headerName: 'Chapter', width: 170 },
        { field: 'date_of_survival', headerName: 'Date of Survival', width: 150, flex: 1 },
        { field: 'gt', headerName: 'Grand Triskelion', width: 150, flex: 1 },
        { field: 'mi', headerName: 'MI', width: 150, flex: 1 },
        { field: 'batch_name', headerName: 'Batch Name', width: 150, flex: 1 },
        // Add more fields based on your PostgreSQL data structure
    ];

    return (
        <Box m="20px">
            {/* Page Header */}
            <Header title="Community Chapters" subtitle="List of Community Chapters" />
            {/* DataGrid Section */}
            <Box
                m="40px 0 0 0"
                minHeight="75vh"
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
                        backgroundColor: colors.accent[400],
                        color: colors.neutral[100],
                        borderBottom: "none",
                    },
                    "& .MuiDataGrid-virtualScroller": {
                        backgroundColor: colors.neutral[900],
                        color: colors.accent[400],
                    },
                    "& .MuiDataGrid-footerContainer": {
                        borderTop: "none",
                        backgroundColor: colors.accent[400],
                    },
                    "& .MuiCheckbox-root": {
                        color: `${colors.accent[400]} !important`,
                    },
                }}
            >
                {!selectedChapter ? (
                    // Display list of chapters
                    <DataGrid
                        rows={chapters}
                        columns={chapterColumns}
                        loading={loading}
                        pageSize={5}
                        rowsPerPageOptions={[5]}
                        getRowId={(row) => row.id}  // Specify custom row id
                        onRowClick={(params) => fetchMembers(params.row.chapter)}  // Fetch members on row click
                        slots={{ toolbar: GridToolbar }}
                    />
                ) : (
                    <Box>
                        <Box display="flex" alignItems="center" mb={2}>
                            <ArrowBackOutlinedIcon onClick={handleBack} style={{ cursor: 'pointer' }} />
                            <Typography variant="h6" ml={1} onClick={handleBack} style={{ cursor: 'pointer' }}>
                                Back to Chapters
                            </Typography>
                        </Box>
                        <DataGrid
                            rows={members}
                            columns={columns}
                            loading={loading}
                            pageSize={5}
                            rowsPerPageOptions={[5]}
                            checkboxSelection
                            getRowId={(row) => row.id}  // Ensure member rows also have unique ids
                            slots={{ toolbar: GridToolbar }}
                        />
                    </Box>
                )}
            </Box>
        </Box>
    );
};

export default CommunityChapters;
