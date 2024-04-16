'use client';

import { ExpandMore } from "@mui/icons-material";
import { Accordion, AccordionDetails, AccordionSummary, Box, Button, Container, Typography, styled } from "@mui/material";

const AccordionStyled = styled(Accordion)(({ theme }) => ({
    boxShadow: 'none',
    marginBottom: '8px',
}))

export default function FAQ() {
    const dataFAQ = [
        {
            title: "How many shows i can watch at a time?",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim"
        },
        {
            title: "How many shows i can watch at a time?",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim"
        },
        {
            title: "How many shows i can watch at a time?",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim"
        },
    ]
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
                        }}>Frequently asked questions</Typography>
                    </Box>
                    <Box sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        '@media only screen and (max-width: 768px)':{
                            flexDirection: 'column'
                        }
                    }}>
                        <Box sx={{
                            width: '45%',
                            '@media only screen and (max-width: 768px)':{
                                width: 'unset'
                            }
                        }}>
                            {dataFAQ.map((item, index) => (
                                <AccordionStyled
                                    // expanded={index == 0 ? true : false}
                                >
                                    <AccordionSummary
                                        expandIcon={<ExpandMore />}
                                        sx={{
                                            fontWeight: 600,
                                        }}
                                    >
                                        {item.title}
                                    </AccordionSummary>
                                    <AccordionDetails
                                        sx={{
                                            color: "#9b9b9b",
                                            fontWeight: 300,
                                            fontSize: "14px",
                                        }}
                                    >
                                        {item.desc}
                                    </AccordionDetails>
                                </AccordionStyled>
                            ))}
                        </Box>
                        <Box sx={{
                            width: '45%',
                            '@media only screen and (max-width: 768px)':{
                                width: 'unset'
                            }
                        }}>
                            {dataFAQ.map((item, index) => (
                                <AccordionStyled
                                    // expanded={index == 0 ? true : false}
                                >
                                    <AccordionSummary
                                        expandIcon={<ExpandMore />}
                                        sx={{
                                            fontWeight: 600,
                                        }}
                                    >
                                        {item.title}
                                    </AccordionSummary>
                                    <AccordionDetails
                                        sx={{
                                            color: "#9b9b9b",
                                            fontWeight: 300,
                                            fontSize: "14px",
                                        }}
                                    >
                                        {item.desc}
                                    </AccordionDetails>
                                </AccordionStyled>
                            ))}
                        </Box>
                    </Box>
                </Container>
            </Box>
        </>
    )
}