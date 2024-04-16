import { Box, Button, Container, IconButton, Typography } from "@mui/material";
import {
    ArrowForward,
    ArrowCircleRightOutlined
} from '@mui/icons-material';

export const PhotoCard = ({data=[{background, content}],}) => {
    return (
        <>
            <Box sx={{
                height: '480px',
                width: '330px',
                display: 'flex',
                gap: '10px',
                flexWrap: 'wrap',
            }}>
                {data.length > 0 && data.map((item, index)=>{
                    if(index<4){
                        return(
                            <Box sx={{
                                width: '45%',
                                height: '45%',
                                background: item.background ? `url(${item.background})` : "#44C3EB",
                                backgroundPosition: 'center',
                                backgroundSize: 'cover',
                                color: "#fff",
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}>{item.content}</Box>
                        )
                    }
                })}
            </Box>
        </>
    )
}

export default function Trend() {
    const dataPhoto = [
        {
            background: "/images/trend-1.png"
        },
        {
            background: "/images/trend-2.png"
        },
        {
            background: "/images/trend-3.png"
        },
        {
            background: "/images/trend-4.png"
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
                        justifyContent: "space-between",
                        alignItems: 'center',
                        gap: "36px 50px",
                        '@media only screen and (max-width: 768px)':{
                            flexDirection: 'column'
                        }
                    }}>
                        <Box sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '36px',
                            '@media only screen and (max-width: 768px)':{
                                alignItems: 'center',
                            }
                        }}>
                            <Typography sx={{
                                fontSize: '36px',
                            }}>Trending this week</Typography>
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
                        <Box sx={{
                            display: 'flex',
                            alignItems: 'center'
                        }}>
                            <PhotoCard data={dataPhoto}/>
                            <Box sx={{
                                '@media only screen and (max-width: 480px)':{
                                    display: 'none'
                                }
                            }}>
                                <IconButton>
                                    <ArrowCircleRightOutlined sx={{ fontSize: '35px' }} />
                                </IconButton>
                            </Box>
                        </Box>
                    </Box>
                </Container>
            </Box>
        </>
    )
}