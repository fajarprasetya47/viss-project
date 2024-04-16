import { Box, Button, Container, Typography } from "@mui/material";

export default function Hero() {
    return (
        <>
            <Box sx={{
                py: 4
            }}>
                <Container maxWidth="xl">
                    <Box sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: 'center',
                        gap: "50px"
                    }}>
                        <Box sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '36px'
                        }}>
                            <Typography sx={{
                                color: "#44C3EB",
                                fontSize: '20px',
                                textTransform: "uppercase"
                            }}>Trendiest Fashion ever</Typography>
                            <Typography sx={{
                                fontWeight: '300',
                                letterSpacing: 3,
                                fontSize: '24px'
                            }}>When you are in doubt, <br /> wear a Viss Fashions Denim</Typography>
                            <Box>
                                <Button sx={{
                                    background: "#E87A14",
                                    borderRadius: "15px",
                                    color: "#fff",
                                    padding: '10px 25px',
                                    "&:hover": {
                                        background: "#E87A14",
                                        opacity: 0.8,
                                    }
                                }}>Buy now</Button>
                            </Box>
                        </Box>
                        <Box sx={{
                            height: '400px',
                            '@media only screen and (max-width: 768px)':{
                                height: '200px'
                            }
                        }}>
                            <img
                                src="/images/photos.png"
                                style={{
                                    height: '100%',
                                    borderRadius: "10px",
                                    objectFit: 'cover',
                                }}
                            />
                        </Box>
                    </Box>
                </Container>
            </Box>
        </>
    )
}