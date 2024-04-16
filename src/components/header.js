import { Box, Button, Container, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";

export default function Headers() {
    const [headerChange, setHeaderChange] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setHeaderChange(true)
            } else {
                setHeaderChange(false)
            }
        }
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.addEventListener("scroll", handleScroll);
        }
    }, []);

    return (
        <>
            <Box sx={{
                py: 2,
                position: 'sticky',
                top: 0,
                background: "#fff",
                zIndex: 1,
                boxShadow: headerChange ? '2px 2px 2px 1px rgb(0 0 0 / 5%)' : 'none',
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
                        <Box sx={{
                            display: 'flex',
                            gap: '8px',
                            '@media only screen and (max-width: 768px)':{
                                flexDirection: 'column-reverse',
                                alignItems: 'end'
                            }
                        }}>
                            <Button sx={{
                                color: "#000",
                                borderRadius: "15px",
                                padding: '10px 25px',
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