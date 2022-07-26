import * as React from 'react';
import PropTypes from 'prop-types';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function CircularProgressWithLabel(props) {
    return (
        <Box sx={{ position: "relative", width: "35%", }}>
            <CircularProgress variant="determinate" style={{ color: '#e8934d', }} {...props} />
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
                    {`3.5/5`}
                    <br />
                    HTML5
                </Typography>
            </Box>
        </Box >
    );
}


export default function CircularStatic() {
    const [progress, setProgress] = React.useState(10);
    return <CircularProgressWithLabel value={70} size={300} />;

}
