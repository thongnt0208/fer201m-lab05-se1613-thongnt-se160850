import { CardActionArea, Card, CardMedia, CardContent, Typography } from "@mui/material";
import Button from '@mui/material/Button';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link } from "react-router-dom";

export default function Contact() {
    return (
        <div className="contact-container">
            <Button variant="contained" className='back-button'><ArrowBackIcon/>&nbsp;<Link to="/">Back</Link></Button>
            <h1>Contact me via: </h1>
            <a href="mailto:trungthongnguyen2002@gmail.com">
                <Card className='card'sx={{ maxWidth: 345 }}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="140"
                            image="https://i.pinimg.com/originals/0c/c6/b8/0cc6b8b086ba0f9b40759f955ca532a5.gif"
                            alt="email"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Email
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Contact me via emails
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </a>

            <a href="#Call">
                <Card className='card'sx={{ maxWidth: 345 }}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="140"
                            image="https://i.pinimg.com/originals/fb/2e/3c/fb2e3c79c3b4fd757275ec1bd4ba6aa8.gif"
                            alt="email"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Call
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Contact me via: 0365960823
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </a>

            <a href="https://www.linkedin.com/in/thongnt0208/">
                <Card className='card'sx={{ maxWidth: 345 }}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="140"
                            image="https://i.pinimg.com/originals/d3/3b/d9/d33bd9baa83a336184055c07dc8ccaa8.gif"
                            alt="email"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                LinkedIn
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Contact me via linkedin.com/in/thongnt0208/
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </a>

        </div>
    )
}