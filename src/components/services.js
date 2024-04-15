import { Box, Button, Container, Typography } from "@mui/material";

export default function Services() {
    const data = [
        {
            icon: "/images/free_delivery.png",
            title: "Free delivery",
            subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis"
        },
        {
            icon: "/images/truck_return.png",
            title: "Easy returns",
            subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis"
        },
        {
            icon: "/images/secure_payment.png",
            title: "Secured payment",
            subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis"
        },
    ]
    return (
        <>
            <Box sx={{
                py: 4
            }}>
                <Container >
                    <Box sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: 'center',
                        gap: "85px"
                    }}>
                        {data && data.map((item) => (
                            <Box sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                textAlign: 'center',
                                gap: '10px'
                            }}>
                                <img src={item.icon} style={{ width: '50px' }} />
                                <Typography sx={{
                                    fontWeight: '600'
                                }}>{item.title}</Typography>
                                <Typography sx={{
                                    color: '#9b9b9b',
                                    fontWeight: '300'
                                }}>{item.subtitle}</Typography>
                            </Box>
                        ))}
                    </Box>
                </Container>
            </Box>
        </>
    )
}