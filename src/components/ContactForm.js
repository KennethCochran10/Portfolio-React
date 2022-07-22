import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { blue } from '@mui/material/colors';
import { color } from '@mui/system';
import { Button } from '@mui/material';
export default function ContactForm() {
    const [state, handleSubmit] = useForm("mvolyzyg");
    if (state.succeeded) {
        return <p>Thanks for the email!</p>;
    }

    return (
        <form id='Form' onSubmit={handleSubmit} style={{ marginTop: "200px", }}>

            <div
                defaultValue={'KennethWCochran1010@gmail.com'}
            />
            <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
            />
            <textarea style={{ borderRadius: "10px", width: "15%", height: "250px", fontSize: "20px", }}
                placeholder='Send me a message...'
                id="message"
                name="message"

            />
            <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
            />
            <br />
            <Button type="submit" className='submitButton' disabled={state.submitting} style={{ background: 'black', color: 'white', borderRadius: "10px", marginTop: "30px" }} >
                Submit
            </Button>
        </form >
    );
}
