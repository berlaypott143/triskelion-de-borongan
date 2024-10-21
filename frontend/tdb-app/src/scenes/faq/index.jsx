import { Box, Typography, useTheme } from "@mui/material"
import Accordion from "@mui/material/Accordion"
import AccordionDetails from "@mui/material/AccordionDetails"
import AccordionSummary from "@mui/material/AccordionSummary"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"
import Header from "../../components/Header"
import { tokens } from "../../theme"


const FAQ = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
        <Box m='20px'>
            <Header title='FAQ' subtitle='Frequently Asked Questions Page' />
            <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography color={colors.accent[400]} variant='h5'>
                        Important question
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima rerum voluptates excepturi dolore suscipit sed explicabo sint quod obcaecati reiciendis aliquam nobis inventore, corrupti alias laborum ab consequuntur atque vero.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography color={colors.accent[400]} variant='h5'>
                        Important question
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima rerum voluptates excepturi dolore suscipit sed explicabo sint quod obcaecati reiciendis aliquam nobis inventore, corrupti alias laborum ab consequuntur atque vero.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography color={colors.accent[400]} variant='h5'>
                        Important question
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima rerum voluptates excepturi dolore suscipit sed explicabo sint quod obcaecati reiciendis aliquam nobis inventore, corrupti alias laborum ab consequuntur atque vero.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography color={colors.accent[400]} variant='h5'>
                        Important question
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima rerum voluptates excepturi dolore suscipit sed explicabo sint quod obcaecati reiciendis aliquam nobis inventore, corrupti alias laborum ab consequuntur atque vero.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography color={colors.accent[400]} variant='h5'>
                        Important question
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima rerum voluptates excepturi dolore suscipit sed explicabo sint quod obcaecati reiciendis aliquam nobis inventore, corrupti alias laborum ab consequuntur atque vero.
                    </Typography>
                </AccordionDetails>
            </Accordion>

        </Box>
    )
}


export default FAQ