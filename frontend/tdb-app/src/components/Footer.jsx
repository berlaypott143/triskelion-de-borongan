import { Box, Typography, IconButton, useTheme } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
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
                marginTop: 'auto', // This ensures it takes up remaining space at the bottom
                padding: '20px',
                backgroundColor: `${colors.neutral[900]}`,
                color: `${colors.neutral[100]}`,
                width: '100%' // Ensure it spans the width of the viewport
            }}
        >
            <Typography variant="body1">
                &copy; {new Date().getFullYear()} Aldrin Jay Achas
            </Typography>
            <Box>
                <IconButton
                    aria-label="GitHub"
                    color="inherit"
                    href="https://github.com/your-github"
                    target="_blank"
                >
                    <GitHubIcon />
                </IconButton>
                <IconButton
                    aria-label="Facebook"
                    color="inherit"
                    href="https://facebook.com/your-facebook"
                    target="_blank"
                >
                    <FacebookIcon />
                </IconButton>
                <IconButton
                    aria-label="Instagram"
                    color="inherit"
                    href="https://instagram.com/your-instagram"
                    target="_blank"
                >
                    <InstagramIcon />
                </IconButton>
                <IconButton
                    aria-label="LinkedIn"
                    color="inherit"
                    href="https://linkedin.com/in/your-linkedin"
                    target="_blank"
                >
                    <LinkedInIcon />
                </IconButton>
            </Box>
        </Box>
    );
};

export default Footer;
