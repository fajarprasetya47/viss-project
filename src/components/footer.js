import { ExpandMore } from "@mui/icons-material";
import { Accordion, AccordionDetails, AccordionSummary, Box, Button, Container, TextField, Typography, styled } from "@mui/material";

export default function Footer() {
    const footersNav = [
        {
            name: "Company",
            child: [
                {
                    name: "Career"
                },
                {
                    name: "About us"
                },
                {
                    name: "Terms"
                },
                {
                    name: "Policy"
                },
            ]
        },
        {
            name: "Explore",
            child: [
                {
                    name: "News"
                },
                {
                    name: "Blog"
                },
                {
                    name: "Sitemaps"
                },
            ]
        },
        {
            name: "Services",
            child: [
                {
                    name: "Perks"
                },
                {
                    name: "Platinum card"
                },
                {
                    name: "Hero card"
                },
                {
                    name: "Cash free"
                },
            ]
        },
    ]
    return (
        <>
            <Box sx={{
                mt: 4,
                py: 12,
                background: "#000",
                color: "#fff",
            }}>
                <Container maxWidth="lg">
                    <Box sx={{
                        display: 'flex',
                        justifyContent: 'space-between'
                    }}>
                        {footersNav.map((item) => (
                            <Box sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '32px',
                                alignItems: 'center'
                            }}>
                                <Typography sx={{
                                    fontSize: '24px',
                                    fontWeight: 600,
                                }}>
                                    {item.name}
                                </Typography>
                                {item.child.map((i) => (
                                    <Typography sx={{
                                        color: '#9b9b9b'
                                    }}>
                                        {i.name}
                                    </Typography>
                                ))}
                            </Box>
                        ))}
                    </Box>
                </Container>
            </Box>
        </>
    )
}