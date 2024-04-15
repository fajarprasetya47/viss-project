import { ExpandMore } from "@mui/icons-material";
import { Accordion, AccordionDetails, AccordionSummary, Box, Button, Container, TextField, Typography, styled } from "@mui/material";

export default function Subscribe() {
    return (
        <>
            <Box sx={{
                py: 4
            }}>
                <Container maxWidth="xl">
                    <Box sx={{ textAlign: "center", mb: 6 }}>
                        <Typography sx={{
                            fontSize: '32px',
                            fontWeight: '300'
                        }}>
                            Subscribe to our newsletter
                        </Typography>
                        <Typography sx={{
                            fontWeight: '300',
                            color: '#9b9b9b',
                            my: 2,
                        }}>
                            Get our latest updates into your inbox
                        </Typography>
                    </Box>
                    <Box sx={{
                        display: "flex",
                        gap: '10px',
                        justifyContent: 'center'
                    }}>
                        <TextField
                            placeholder="Your email address"
                        />
                        <Button sx={{
                            background: "#000",
                            color: "#fff",
                            '&:hover':{
                                background: "#000",
                                opacity: 0.8
                            }
                        }}>
                            Subscribe now
                        </Button>
                    </Box>
                </Container>
            </Box>
        </>
    )
}