import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';


export default function IconGroup() {
    return (
        <div style={{ marginTop: "10px", padding: "10px", }}>
            <LinkedInIcon style={{ fontSize: "75px", color: 'white' }} target="_blank" onClick={event => window.location.href = 'https://www.linkedin.com/in/kenneth-cochran-7a9052a2/'} />
            <FacebookIcon style={{ fontSize: "75px", color: 'white' }} onClick={event => window.location.href = 'https://www.facebook.com/kenny.cochran.121'} />
            <GitHubIcon style={{ fontSize: "75px", color: 'white' }} onClick={event => window.location.href = 'https://github.com/KennethCochran10'} />

        </div>
    )
}