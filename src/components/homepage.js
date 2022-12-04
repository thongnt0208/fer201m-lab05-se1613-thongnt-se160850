import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import NavBar from './navbar';
import Chip from '@mui/material/Chip';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import { Link } from 'react-router-dom';


export default function HomePage() {
    const handleChipClick = () => {
        window.open('https://github.com/thongnt0208/', '_blank');
    };
    return (
        <div className='homepage-box'>
            <div className='background-img'>
                <img src='../assets/background.gif' alt='background'></img>
            </div>
            <Box className='box-container'
                sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    '& > :not(style)': {
                        width: 1080,
                        height: 720,
                    },
                }}
            >
                <Paper elevation={8} className='paper'>
                    <NavBar></NavBar>
                    <Grid container xs={12} md={6} className='container text-container'>
                        <h1>Hello there! 👋</h1>
                        <p>I'm a junior Software Engineering Student at FPT University.</p>
                        <p>"...what is done in love is well done" is the quote I love.</p>
                        <h4>Current work experience includes:</h4>
                        <Grid container xs={12} className='chip-container'>
                            <Chip className='chip' label="Java OOP" onClick={handleChipClick} />
                            <Chip className='chip' label="JavaScript" onClick={handleChipClick} />
                            <Chip className='chip' label="HTML/CSS" onClick={handleChipClick} />
                            <Chip className='chip' label="Bootstrap/MUI" onClick={handleChipClick} />
                            <Chip className='chip' label="React" onClick={handleChipClick} />
                            <Chip className='chip' label="GIT" onClick={handleChipClick} />
                            <Chip className='chip' label="SQL Server" onClick={handleChipClick} />
                            <Chip className='chip' label="Arduino" onClick={handleChipClick} />
                        </Grid>
                        <Button variant="contained" className='send-button'><SendIcon/>&nbsp;<Link to="Contact">Drop me a line</Link></Button>

                    </Grid>
                    <Grid container xs={12} md={6} className='container avatar-container'>
                        <img src='../assets/avatar.jpg' alt='avatar'></img>
                    </Grid>
                </Paper>
            </Box>
        </div>
    )

}