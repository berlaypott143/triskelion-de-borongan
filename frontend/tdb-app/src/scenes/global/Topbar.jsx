import { ColorModeContext, tokens } from "../../theme";
import { useContext, useState } from "react";
import { Box, useTheme, IconButton, Dialog, DialogTitle, DialogContent, DialogActions, Button } from "@mui/material";
import InputBase from "@mui/material/InputBase";
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined'
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import SearchIcon from '@mui/icons-material/Search';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';


const Topbar = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const colorMode = useContext(ColorModeContext);
    const [open, setOpen] = useState(false);

    const handleSettingsOpen = () => setOpen(true);
    const handleSettingsClose = () => setOpen(false);

    return (
        <Box display='flex' justifyContent='space-between' p={2}>
            {/* SEARCH BAR */}
            <Box
                display="flex"
                backgroundColor={colors.neutral[900]}
                borderRadius='3px'
            >
                <InputBase sx={{ ml: 2, flex: 1 }} placeholder='Search' />
                <IconButton type='button' sx={{ p: 1 }}>
                    <SearchIcon />
                </IconButton>
            </Box>

            { /* ICONS */}
            <Box display='flex'>
                <IconButton onClick={colorMode.toggleColorMode}>
                    {theme.palette.mode === 'dark' ? (
                        <DarkModeOutlinedIcon />
                    ) : (
                        <LightModeOutlinedIcon />
                    )}
                </IconButton>
                <IconButton onClick={handleSettingsOpen}>
                    <SettingsOutlinedIcon />
                </IconButton>
            </Box>

            {/* SETTINGS MODAL */}
            <Dialog open={open} onClose={handleSettingsClose}>
                <DialogTitle>Settings</DialogTitle>
                <DialogContent>
                    {/* Add settings options here */}
                    <p>Example setting option</p>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleSettingsClose}>Close</Button>
                </DialogActions>
            </Dialog>
        </Box>
    );
}

export default Topbar;
