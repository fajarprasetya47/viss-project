import { Box, Button, Container, IconButton, Typography } from "@mui/material";
import {
    ArrowForward,
    ArrowCircleRightOutlined
} from '@mui/icons-material';
import { PhotoCard } from "./trend";

export default function Deals() {
    const dataPhoto = [
        {
            background: "/images/deals-1.png"
        },
        {
            content: <span style={{fontSize: '32px'}}>50% <br/> Off</span>
        },
        {
            content: <span style={{fontSize: '32px'}}>TO-<br/>DAY</span>
        },
        {
            background: "/images/deals-2.png"
        },
    ]
    return (
        <>
            <Box sx={{
                py: 4
            }}>
                <Container maxWidth="xl">
                    <Box sx={{
                        display: "flex",
                        justifyContent: "space-evenly",
                        alignItems: 'center',
                        // gap: "50px"
                    }}>
                        <Box sx={{
                            display: 'flex',
                            alignItems: 'center',
                            marginRight: 'auto',
                        }}>
                            <PhotoCard data={dataPhoto}/>
                            <Box>
                                <IconButton>
                                    <ArrowCircleRightOutlined sx={{ fontSize: '35px' }} />
                                </IconButton>
                            </Box>
                        </Box>
                        <Box sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '36px'
                        }}>
                            <Typography sx={{
                                fontSize: '36px',
                            }}>Great deals on <br/> women's wear</Typography>
                            <Typography sx={{
                                fontWeight: '300',
                                fontSize: '24px',
                                color: '#9b9b9b'
                            }}>
                                Lorem ipsum dolor sit amet, <br />
                                consectetur adipiscing elit ut aliquam, <br />
                                purus sit amet luctus venenatis, <br />
                                lectus magna fringilla urna, <br />
                                porttitor rhoncus dolor purus non enim.
                            </Typography>
                            <Box>
                                <Button endIcon={<ArrowForward />} sx={{
                                    borderRadius: "15px",
                                    color: "#000",
                                    padding: 0,
                                    "&:hover": {
                                        opacity: 0.8,
                                    }
                                }}>Shop now</Button>
                            </Box>
                        </Box>
                    </Box>
                </Container>
            </Box>
        </>
    )
}