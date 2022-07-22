import * as React from 'react';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';


export default function BasicChips() {
    return (
        <div >
            <br></br>
            <Stack direction="row" spacing={1} className="BasicChips" style={{ width: "100%vw", }} >
                <Chip label="MaterialUI" variant="outlined" style={{ color: 'white', backgroundColor: '#e8934d', }} />
                <Chip label="Relational Database" variant="outlined" style={{ color: 'white', backgroundColor: '#e8934d' }} />
                <Chip label="GitHub" variant="outlined" style={{ color: 'white', backgroundColor: '#e8934d' }} />
                <Chip label="JSON" variant="outlined" style={{ color: 'white', backgroundColor: '#e8934d' }} />

            </Stack>
            <br></br>
            <Stack direction="row" spacing={1} className="BasicChips" style={{ width: "100%vw" }} >
                <Chip label="Node.js" variant="outlined" style={{ color: 'white', backgroundColor: '#e8934d' }} />
                <Chip label="JWT" variant="outlined" style={{ color: 'white', backgroundColor: '#e8934d' }} />
                <Chip label="Bcrypt" variant="outlined" style={{ color: 'white', backgroundColor: '#e8934d' }} />
                <Chip label="PostgreSQL" variant="outlined" style={{ color: 'white', backgroundColor: '#e8934d' }} />

            </Stack>
        </div>

    );
}