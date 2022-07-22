import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { textAlign } from '@mui/system';

export default function SimpleAccordion() {
    return (

        <div style={{ width: "100%vw", textAlign: 'left', margin: '10px', marginTop: '100px' }}>
            <p style={{ color: "#e8934d", textAlign: 'center', fontSize: '30px' }}>References:</p>
            <div style={{ width: "25%", margin: "auto" }}>
                <Accordion className='accordion-body' style={{ backgroundColor: '#e8934d', color: 'white' }} >
                    <AccordionSummary

                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography>Drew Blincoe</Typography>
                    </AccordionSummary>
                    <AccordionDetails style={{ backgroundColor: 'white', color: 'black' }}>
                        <ul>
                            <li>Sr. Software Developer</li>
                            <li>Mentor</li>
                            <li>Contact</li>
                        </ul>
                    </AccordionDetails >
                </Accordion>
                <Accordion style={{ backgroundColor: '#e8934d', color: 'white' }}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                    >
                        <Typography>Herbert Lopez</Typography>
                    </AccordionSummary>
                    <AccordionDetails style={{ backgroundColor: 'white', color: 'black' }}>
                        <ul>
                            <li>Police Officer</li>
                            <li>Old Colleage</li>
                            <li>215-500-4742</li>
                        </ul>
                    </AccordionDetails>
                </Accordion>
                <Accordion style={{ backgroundColor: '#e8934d', color: 'white' }}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                    >
                        <Typography>Craig Cochran</Typography>
                    </AccordionSummary>
                    <AccordionDetails style={{ backgroundColor: 'white', color: 'black' }}>
                        <ul>
                            <li>Logistics</li>
                            <li>Father</li>
                            <li>(586)751-5116</li>
                        </ul>
                    </AccordionDetails>
                </Accordion>

            </div>
        </div >
    );
}