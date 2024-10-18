import { useState, useEffect } from 'react'
import { Sidebar, Menu, MenuItem, sidebarClasses } from 'react-pro-sidebar'
"@react-pro-sidebar/dist/css/styles.css";
import { useTheme, Box, IconButton, Typography } from '@mui/material'
import { Link, useLocation } from 'react-router-dom'
import { tokens } from '../../theme'
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import ContactPageOutlinedIcon from '@mui/icons-material/ContactPageOutlined';
import HelpCenterOutlinedIcon from '@mui/icons-material/HelpCenterOutlined';
import AssignmentOutlinedIcon from '@mui/icons-material/AssignmentOutlined';
import Diversity2Icon from '@mui/icons-material/Diversity2';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import triskelionImage from '../../assets/triskelion.jpg';

const Item = ({ title, to, icon, selected, setSelected }) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
        <MenuItem
            active={selected === title}
            style={{ color: colors.neutral[500] }}
            onClick={() => setSelected(title)}
            icon={icon}
            component={<Link to={to} />} // Link for navigation in the CustomSidebar
        >
            <Typography>{title}</Typography>
            {/* <Link to={to} />*/}
        </MenuItem>
    );
};


const CustomSidebar = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);  // Dynamic token usage
    const location = useLocation();
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [selected, setSelected] = useState('Dashboard');

    // Use useEffect to set the selected state based on the current path
    // To control the refresh of the page
    useEffect(() => {
        const path = location.pathname;

        if (path === '/community-chapters') {
            setSelected('Community Chapters');
        } else if (path === '/contacts') {
            setSelected('Contacts Information');
        } else if (path === '/about') {
            setSelected('About Information');
        } else if (path === '/help') {
            setSelected('Help Information');
        } else if (path === '/form') {
            setSelected('Form');
        } else {
            setSelected('Dashboard');
        }
    }, [location]); // This will re-run when the location changes

    return (
        <Box
            sx={{
                "& .pro-sidebar-inner": {
                    background: `${colors.primary[500]} !important`, // Primary background for Sidebar
                },
                "& .pro-icon-wrapper": {
                    backgroundColor: `${colors.neutral[500]} transparent !important`,
                },
                "& .pro-inner-item": {
                    padding: '5px 35px 5px 20px !important',
                    color: `${colors.neutral[100]} !important`,  // Neutral color for text
                    transition: 'all 0.3s ease !important',  // Smooth transition for hover effects
                },
                "& .pro-inner-item:hover": {
                    backgroundColor: `${colors.primary[700]} !important`,  // Background color on hover
                    color: `${colors.accent[400]} !important`,  // Accent color for text on hover
                    borderRadius: '8px !important',  // Optional: add rounded corners
                    boxShadow: `0 4px 8px ${colors.neutral[900]} !important`,  // Optional: hover shadow effect
                },
                "& .pro-menu-item.active": {
                    color: `${colors.accent[500]} !important`,  // Accent color for active item
                },
                "& .pro-menu-item:hover .pro-inner-item": {
                    backgroundColor: `${colors.primary[700]} !important`,  // Ensure the hover applies here
                    color: `${colors.accent[400]} !important`,  // Hover text color
                },
                "& .pro-menu-item.active .pro-inner-item": {
                    backgroundColor: `${colors.primary[600]} !important`,  // Active item background
                },
            }}
        >
            <Sidebar
                collapsed={isCollapsed}
                rootStyles={{
                    [`.${sidebarClasses.container}`]: {
                        backgroundColor: `${colors.neutral[900]} !important`,
                    },
                }}
            >
                <Menu iconShape="square"
                    menuItemStyles={{
                        button: ({ active }) => ({
                            backgroundColor: active
                                ? `${colors.primary[600]} !important`  // Active item background
                                : `${colors.neutral[900]} !important`, // Default background color
                            color: `${colors.neutral[100]} !important`, // Text color
                            "&:hover": {
                                backgroundColor: `${colors.primary[900]} !important`, // Hover background color
                                color: `${colors.accent[400]} !important`, // Hover text color and icon color
                            },
                        }),
                    }}
                >
                    {/* LOGO AND MENU ICON */}
                    <MenuItem
                        // Collapsing the custom sidebar
                        onClick={() => setIsCollapsed(!isCollapsed)}
                        icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
                        style={{
                            margin: "0",
                            color: colors.accent[100],  // Accent color for MenuItem
                        }}
                    >
                        {/* When custom sidebar is not collapse*/}
                        {!isCollapsed && (
                            <Box
                                display="flex"
                                justifyContent="space-between"
                                alignItems="center"
                                ml="15px"
                                mt='15px'
                            >
                                <Typography variant="h3" color={colors.accent[400]}>
                                    ADMIN
                                </Typography>
                                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                                    <MenuOutlinedIcon sx={{ color: colors.accent[400] }} />
                                </IconButton>
                            </Box>
                        )}
                    </MenuItem>
                    {/* USER */}
                    {!isCollapsed && (
                        <Box mb="25px">
                            <Box display="flex" justifyContent="center" alignItems="center">
                                <img
                                    alt="triskelion-user"
                                    height="100px"
                                    width="100px"
                                    src={'/src/assets/triskelion.jpg'}
                                    style={{ cursor: 'pointer', borderRadius: '50%', marginTop: '20px' }}
                                />
                            </Box>

                            <Box textAlign='center'>
                                <Typography
                                    variant="h3"
                                    color={colors.accent[400]}  // Background contrast for text
                                    fontWeight='bold'
                                    sx={{ m: '10px 0 0 0' }}
                                >
                                    TRISKELION DE BORONGAN
                                </Typography>
                                <Typography variant='h6' color={colors.primary[500]}>
                                    Aldrin Jay ADMIN
                                </Typography>
                            </Box>
                        </Box>
                    )}

                    {/* MENU ITEMS*/}
                    <Box paddingLeft={isCollapsed ? undefined : '10%'}>
                        <Item
                            title='Dashboard'
                            to='/'
                            icon={<HomeOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        <Item
                            title='Community Chapters'
                            to='/community-chapters'
                            icon={<Diversity2Icon />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        <Item
                            title='About Information'
                            to='/about'
                            icon={<AssignmentOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        <Item
                            title='Contacts Information'
                            to='/contacts'
                            icon={<ContactPageOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        <Item
                            title='Create User'
                            to='/form'
                            icon={<AccountCircleOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        <Item
                            title='Help Information'
                            to='/help'
                            icon={<HelpCenterOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                    </Box>
                </Menu>
            </Sidebar>
        </Box>
    );
};

export default CustomSidebar;
