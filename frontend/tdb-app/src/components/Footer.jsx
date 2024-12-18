import { Box, Typography, IconButton, useTheme } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import CloudSyncOutlinedIcon from '@mui/icons-material/CloudSyncOutlined';
import { tokens } from '../theme';

const Footer = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
        <Box
            component="footer"
            sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginTop: 'auto',
                padding: '20px',
                backgroundColor: `${colors.neutral[900]}`,
                color: `${colors.neutral[100]}`,
                width: '100%' // Ensure it spans the width of the viewport
            }}
        >
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                <Typography variant="body1">
                    &copy; {new Date().getFullYear()} Aldrin Jay Achas
                </Typography>
                <Typography variant="body2">
                    More projects in my <a href="https://github.com/berlaypott143" target="_blank" rel="noopener noreferrer">GitHub repository</a>
                </Typography>
            </Box>
            <Box>
                <IconButton
                    aria-label="GitHub"
                    color="inherit"
                    href="https://github.com/berlaypott143"
                    target="_blank"
                >
                    <GitHubIcon />
                </IconButton>
                <IconButton
                    aria-label="Facebook"
                    color="inherit"
                    href="https://www.facebook.com/aldrinjay.achas.3"
                    target="_blank"
                >
                    <FacebookIcon />
                </IconButton>
                <IconButton
                    aria-label="Instagram"
                    color="inherit"
                    href="https://www.instagram.com/aldrinjay102123/"
                    target="_blank"
                >
                    <InstagramIcon />
                </IconButton>
                <IconButton
                    aria-label="LinkedIn"
                    color="inherit"
                    href="www.linkedin.com/in/aldrin-jay-33397529b"
                    target="_blank"
                >
                    <LinkedInIcon />
                </IconButton>
                <IconButton
                    aria-label="Render"
                    color="inherit"
                    href="https://triskelion-de-borongan-frontend.onrender.com"
                    target="_blank"
                >
                    <CloudSyncOutlinedIcon />
                </IconButton>

            </Box>
        </Box>
    );
};

export default Footer;
