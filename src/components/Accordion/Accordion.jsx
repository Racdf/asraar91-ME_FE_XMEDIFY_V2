import * as React from 'react';
import { styled } from '@mui/material/styles';
import AddIcon from '@mui/icons-material/Add';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';

const Accordion = styled((props) => {
    return <MuiAccordion square elevation={0} disableGutters {...props} />;
})(({ theme }) => ({
    '&::before': { display: 'none' },
    '&:not(:last-child)': { marginBottom: 24 },
}));

const AccordionSummary = styled((props) => {
    return (
        <MuiAccordionSummary
            expandIcon={<AddIcon sx={{ color: 'primary.main' }} />}
            {...props}
        />
    );
})(({ theme }) => ({
    padding: 0,
    backgroundColor: false,
    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
        transform: 'rotate(45deg)',
    },
    '& .MuiAccordionSummary-content': {
        marginLeft: 0,
    },
}));

const AccordionDetails = styled((props) => {
    return <MuiAccordionDetails {...props} />;
})(({ theme }) => ({
    padding: 0,
}));

export default function CustomizedAccordions({ data }) {
    const [expanded, setExpanded] = React.useState('');

    const handleChange = React.useCallback(
        (panel) => (event, newExpanded) => {
            setExpanded(newExpanded ? panel : false);
        },
        []
    );

    return (
        <div>
            {data.map((item, idx) => {
                const panelId = `panel${idx}`;
                return (
                    <Accordion
                        key={idx}
                        expanded={expanded === panelId}
                        onChange={handleChange(panelId)}
                    >
                        <AccordionSummary
                            aria-controls={`${panelId}d-content`}
                            id={`${panelId}d-header`}
                        >
                            <Typography
                                fontSize={18}
                                fontWeight={700}
                                color="#1B3C74"
                                lineHeight={1.2}
                            >
                                {item.question}
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography fontSize={14}>{item.answer}</Typography>
                        </AccordionDetails>
                    </Accordion>
                );
            })}
        </div>
    );
}
