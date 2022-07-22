import * as React from 'react';
import PropTypes from 'prop-types';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function CircularProgressWithLabel(props) {
    return (
        <Box sx={{ position: "relative", width: "35%", }}>
            <CircularProgress variant="determinate" {...props} style={{ color: '#e8934d' }} />
            <Box
                sx={{
                    top: 0,
                    left: 0,
                    bottom: 0,
                    right: 0,
                    position: 'absolute',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <Typography variant="caption" component="div" color="text.secondary" fontSize={20}>
                    {`4/5`}
                    <br />
                    CSS
                </Typography>
            </Box>
        </Box>
    );
}


export default function CircularStatic2() {
    const [progress, setProgress] = React.useState(10);
    return <CircularProgressWithLabel value={80} size={300} />;
}