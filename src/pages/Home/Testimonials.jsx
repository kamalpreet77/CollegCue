import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import SwiperBtn from '../../components/Buttons/SwiperBtn';
import HalfCircle from "../../Assets/shapes/half-circle.svg";
import Circle from "../../Assets/shapes/circle.svg";
import CircleBlue from "../../Assets/shapes/circle-blue.svg";
import Quot from "../../Assets/quot.png"
import testimonial from "../../Assets/Testimonials.png"


const Testimonials = () => {

    const testimonials = [
        {
            "name": "John Doe",
            "program": "Computer Science",
            "batch": "2023",
            "testimonial": "My experience at XYZ College was fantastic. The faculty members are highly knowledgeable and supportive. The curriculum is up-to-date and relevant to the industry standards. I feel well-prepared for my career in computer science."
        },
        {
            "name": "Jane Smith",
            "program": "Business Administration",
            "batch": "2022",
            "testimonial": "Choosing XYZ College for my business administration degree was one of the best decisions I've made. The professors are not only experts in their field but also caring mentors who guide you every step of the way. The internship opportunities provided by the college were invaluable in shaping my career."
        },
        {
            "name": "Michael Johnson",
            "program": "Engineering",
            "batch": "2024",
            "testimonial": "XYZ College offers an unparalleled engineering program. The hands-on approach to learning coupled with state-of-the-art facilities ensures that students are well-prepared for the challenges of the industry. The supportive environment fostered by both faculty and peers creates a conducive atmosphere for learning and growth."
        }
    ];

    return (
        <Container>
            <Box sx={{
                width: 'fit-content',
                marginY: "1rem",

            }}>
                <Typography sx={{
                    fontSize: "2rem",
                    fontWeight: 500,
                    lineHeight: "3rem",
                    letterSpacing: "0em",
                    textAlign: "left",
                    color: "#210366",
                    display: "inline"
                }}>
                    Testimonials
                </Typography>
                <Box sx={{
                    borderTop: "6px solid #7B90FF",
                    borderRadius: "10px",
                    display: "flex",
                    width: "100%",
                }} />
            </Box>
            <Box
                sx={{
                    marginY: "1.5rem",
                    display: "flex",
                    flexDirection: "row",
                    gap: "1rem",
                    alignItems: "center",
                    justifyContent: "center",

                }}>
                {/* image */}
                <Box>
                    <img src={testimonial} alt="@BHaratTeh"
                        style={{
                            width: "500px", height: "auto"
                        }}
                    />
                </Box>
                {/* testimonial */}
                <Box sx={{
                    // backgroundColor: "#DDF4DB",
                    paddingY: "1rem",
                    width: "70%",
                    height : "500px",
                    borderRadius: "16px",
                    overflow: "hidden",
                    zIndex: "2",
                    position: "relative"
                }}>
                    <Swiper
                        slidesPerView={1}
                        loop={true}
                        centeredSlides={true}
                        pagination={{
                            clickable: true,
                        }}
                    >
                        {testimonials.map((testimonial, index) => (
                            <SwiperSlide key={index}>
                                <Box sx={{
                                    width: "300px",
                                    marginX: "auto",
                                    marginBottom: "0.5rem",
                                    '@media (max-width : 770px)': {
                                        width: "auto",
                                        padding: "20px",
                                    }
                                }}>
                                    <p style={{ fontStyle: "italic", fontWeight: 300, textAlign: 'justify' }}>
                                        <img
                                            src={Quot}
                                            alt="quot"
                                            width={20}
                                            style={{
                                                rotate: "180deg",
                                                marginRight: "5px",

                                            }}
                                        />
                                        {testimonial.testimonial}
                                        <img
                                            src={Quot}
                                            alt="quot"
                                            width={20}
                                            style={{
                                                marginLeft: "5px",
                                            }}
                                        />
                                    </p>
                                    <Typography sx={{ fontWeight: 400 }}>
                                        Year: <span style={{ fontWeight: 700, marginLeft: "5px" }}>{testimonial.batch}</span>
                                    </Typography>
                                    <Box sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                                        <Typography>
                                            {testimonial.name}
                                        </Typography>
                                        {" "} {" - "} {" "}
                                        <Typography>
                                            {testimonial.program}
                                        </Typography>
                                    </Box>
                                </Box>
                            </SwiperSlide>
                        ))}
                        <Box
                            sx={{
                                display: "flex",
                                justifyContent: "center",
                                marginRight: "2rem",
                            }}>
                            <SwiperBtn />
                        </Box>
                    </Swiper>
                    <Box
                        sx={{
                            '@media (max-width : 770px)': {
                                display: "none"
                            }
                        }}>
                        <img
                            src={Circle}
                            alt="shape"
                            height={300}
                            style={{
                                position: "absolute",
                                top: '-40%',
                                left: '-15%',
                                zIndex: "-1",
                            }} />
                        <img
                            src={CircleBlue}
                            alt="shape"
                            height={300}
                            style={{
                                position: "absolute",
                                bottom: '-40%',
                                right: '-15%',
                                zIndex: "-1",
                                color: "blue"
                            }} />
                    </Box>
                </Box>
            </Box>
        </Container>
    );
}

export default Testimonials;
