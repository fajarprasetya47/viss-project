import { Box, Button, Container, Typography } from "@mui/material";

export default function Headers() {
    return (
        <>
            <Box sx={{
                py: 2,
                position: 'sticky',
                top: 0,
                background: "#fff",
                zIndex: 1,
            }}>
                <Container maxWidth="xl">
                    <Box sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: 'center',
                    }}>
                        <Box>
                            <Typography style={{
                                fontSize: "36px",
                            }}>Viss Fashions</Typography>
                        </Box>
                        <Box>

                        </Box>
                        <Box>
                            <Button sx={{
                                color: "#000",
                                borderRadius: "15px",
                                padding: '10px 25px',
                                mr: 1,
                            }}>Log In</Button>
                            <Button sx={{
                                background: "#E87A14",
                                borderRadius: "15px",
                                color: "#fff",
                                padding: '10px 25px',
                                "&:hover": {
                                    background: "#E87A14",
                                    opacity: 0.8,
                                }
                            }}>Sign Up</Button>
                        </Box>
                    </Box>
                </Container>
            </Box>
        </>
    )
}