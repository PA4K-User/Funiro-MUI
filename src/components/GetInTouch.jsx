import React, {useState, useEffect} from 'react'
import { Box, Button, Typography, Divider, TextField, FormControl} from '@mui/material'

import clock from '../assets/Image/bi_clock-fill.svg'
import phone from '../assets/Image/bxs_phone.svg'
import vector from '../assets/Image/Vector.svg'


const GetInTouch = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [subject, setSubject] = useState('')
    const [message, setMessage] = useState('')

    useEffect(() => {
        const storedName = sessionStorage.getItem('name')    
        const storedEmail = sessionStorage.getItem('email')    
        const storedSubject = sessionStorage.getItem('subject')    
        const storedMessage = sessionStorage.getItem('message')

        if(storedName || storedEmail || storedSubject || storedMessage){
            setName(storedName);
            setEmail(storedEmail);
            setSubject(storedSubject);
            setMessage(storedMessage);
        }
    },[])

    useEffect(() => {    
        sessionStorage.setItem('name', name);
        sessionStorage.setItem('email', email);
        sessionStorage.setItem('subject', subject);
        sessionStorage.setItem('message', message);
    }, [name, email, subject, message]);

    const handleSubmit = (e) => {
        e.preventDefault();
        
        console.log({ name, email, subject, message });
    };

  return (
    <>
        <Box sx={{maxWidth: '100%', maxHeight: '1140px', py: 8}}>
            <Box sx={{maxWidth: '1440px', mx: 'auto'}}>
                <Typography sx={{textAlign: 'center', typography: { xs: "h6", md: "h4" }, color: 'black', fontWeight: { xs: "bold", md: "bold" }}}>Get In Touch With Us</Typography>
                <Typography sx={{textAlign: 'center', typography: { xs: "body", md: "h6" }, color: 'gray', mt: 3}}>For More Information About Our Product & Services. Please Feel Free To Drop Us</Typography>
                <Typography sx={{textAlign: 'center', typography: { xs: "body", md: "h6" }, color: 'gray',}}>An Email. Our Staff Be There To Help You Out. Do Not Hesitate!</Typography>
                <Box sx={{display: 'grid', gridTemplateColumns: { xs: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' }, gap: 4, mt: 4}}>
                    <Box sx={{display: 'flex', flexDirection: 'column', gap: { xs: 4, md: 8}}}>
                        <Box sx={{display: 'flex', gap: 2}}>
                            <Box component="img" src={vector} alt="/" sx={{width: 40, height: 40}}></Box>
                            <Box>
                                <Typography sx={{typography: { xs: "h6", md: "h4" }, color: 'black', fontWeight: { xs: "bold", md: "bold" }}}>Address</Typography>
                                <Typography sx={{typography: { xs: "body", md: "h6" }, color: 'gray'}}>
                                    236 5th SE Avenue, New <br />
                                    York NY10000, United States
                                </Typography>
                            </Box>
                        </Box>
                        <Box sx={{display: 'flex', gap: 2}}>
                            <Box component="img" src={phone} alt="/" sx={{width: 40, height: 40}}></Box>
                            <Box>
                                <Typography sx={{typography: { xs: "h6", md: "h4" }, color: 'black', fontWeight: { xs: "bold", md: "bold" }}}>Phone</Typography>
                                <Typography sx={{typography: { xs: "body", md: "h6" }, color: 'gray'}}>
                                    Mobile: +(84) 546-6789<br />
                                    Hotline: +(84) 456-6789
                                </Typography>
                            </Box>
                        </Box>
                        <Box sx={{display: 'flex', gap: 2}}>
                            <Box component="img" src={clock} alt="/" sx={{width: 40, height: 40}}></Box>
                            <Box>
                                <Typography sx={{typography: { xs: "h6", md: "h4" }, color: 'black', fontWeight: { xs: "bold", md: "bold" }}}>Working Time</Typography>
                                <Typography sx={{typography: { xs: "body", md: "h6" }, color: 'gray'}}>
                                    Monday-Friday: 9:00 - 22:00<br />
                                    Saturday-Sunday: 9:00 - 21:00
                                </Typography>
                            </Box>
                        </Box>
                    </Box>
                    <Box component="form" action="/contact" onSubmit={handleSubmit} sx={{display: 'flex', flexDirection: 'column', gap: 2}}>
                        <TextField
                            label="Your name"
                            name="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            variant="outlined"
                            fullWidth
                            sx={{
                                bgcolor: "white",
                                borderRadius: "10px",
                                "& .MuiOutlinedInput-root": {
                                    height: 64,
                                    "& fieldset": {
                                    borderColor: "#9F9F9F",
                                    },
                                    "&:hover fieldset": {
                                    borderColor: "#7a7a7a",
                                    },
                                    "&.Mui-focused fieldset": {
                                    borderColor: "#1976d2",
                                    },
                                },
                            }}
                        />
                        <TextField
                            label="Email address"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            variant="outlined"
                            fullWidth
                            sx={{
                                bgcolor: "white",
                                borderRadius: "10px",
                                "& .MuiOutlinedInput-root": {
                                    height: 64,
                                    "& fieldset": {
                                    borderColor: "#9F9F9F",
                                    },
                                    "&:hover fieldset": {
                                    borderColor: "#7a7a7a",
                                    },
                                    "&.Mui-focused fieldset": {
                                    borderColor: "#1976d2",
                                    },
                                },
                            }}
                        />
                        <TextField
                            label="Subject"
                            name="subject"
                            value={subject}
                            onChange={(e) => setSubject(e.target.value)}
                            variant="outlined"
                            fullWidth
                            sx={{
                                bgcolor: "white",
                                borderRadius: "10px",
                                "& .MuiOutlinedInput-root": {
                                    height: 64,
                                    "& fieldset": {
                                    borderColor: "#9F9F9F",
                                    },
                                    "&:hover fieldset": {
                                    borderColor: "#7a7a7a",
                                    },
                                    "&.Mui-focused fieldset": {
                                    borderColor: "#1976d2",
                                    },
                                },
                            }}
                        />
                        <TextField
                            label="Message"
                            name="message"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            variant="outlined"
                            fullWidth
                            sx={{
                                bgcolor: "white",
                                borderRadius: "10px",
                                "& .MuiOutlinedInput-root": {
                                    height: 64,
                                    "& fieldset": {
                                    borderColor: "#9F9F9F",
                                    },
                                    "&:hover fieldset": {
                                    borderColor: "#7a7a7a",
                                    },
                                    "&.Mui-focused fieldset": {
                                    borderColor: "#1976d2",
                                    },
                                },
                            }}
                        />                       
                        <Button type="submit" sx={{typography: 'body', bgcolor: "#B88E2F", color: 'white', fontWeight: 'bold', borderRadius: "6px", "&:hover": { bgcolor: "#8f6f24ff"}, alignSelf: 'start'}} variant="contained">Submit</Button>
                    </Box>
                </Box>
            </Box>
        </Box>
    </>
  )
}

export default GetInTouch