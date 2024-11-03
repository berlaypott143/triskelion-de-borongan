import { Box, Typography, useTheme } from "@mui/material";
import Header from "../../components/Header";
import { tokens } from "../../theme";

const About = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
        <Box m={2}>
            <Header title="About Page" subtitle="About Triskelion De Borongan" />
            <Box mt={2} p={2} backgroundColor={colors.primary[900]} borderRadius="8px">
                <Typography variant="h6" color="textPrimary">
                    Our Mission
                </Typography>
                <Typography variant="body1" color="textSecondary" mt={1}>
                    Triskelion De Borongan is committed to [insert mission or purpose here].
                </Typography>

                <Typography variant="h6" color="textPrimary" mt={3}>
                    Our History
                </Typography>
                <Typography variant="body1" color="textSecondary" mt={1}>
                    Founded in [year], we have been dedicated to [insert brief history].
                </Typography>

                <Typography variant="h6" color="textPrimary" mt={3}>
                    Core Values
                </Typography>
                <Typography variant="body1" color="textSecondary" mt={1}>
                    - Integrity<br />
                    - Community<br />
                    - Commitment
                </Typography>

                <Typography variant="h6" color="textPrimary" mt={3}>
                    Contact Us
                </Typography>
                <Typography variant="body1" color="textSecondary" mt={1}>
                    For more information, feel free to reach out to us at [email@example.com].
                </Typography>
            </Box>
        </Box>
    );
};

export default About;
