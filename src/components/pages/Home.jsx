import React, { useEffect } from "react";
import Layout from "../layout/Layout";
import Typed from "typed.js";
import { Box, Card, CardContent, Grid, Typography } from "@mui/material";
import "../../styles/home.css";

const Home = () => {
  //for typing animation
  useEffect(() => {
    const typed = new Typed(".auto-input", {
      strings: [
        "Full Stack Developer",
        "Backend Java Developer",
        "Frontend Developer",
      ],
      typeSpeed: 100,
      backSpeed: 100,
      loop: true,
    });

    return () => {
      typed.destroy(); // Clean up on unmount
    };
  }, []);

  return (
    <Layout>
      {/* Name */}
      <Box
        style={{
          minHeight: "400px",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Typography variant="h2" style={{ fontWeight: "bold" }}>
          Mohammed Nazamul Hassan
        </Typography>
        <h2 style={{ color: "white" }}>
          I'm a <span className="auto-input"></span>
        </h2>
        <Typography textAlign={"center"} mt={4}>
          A passionate developer and lifelong learner.
        </Typography>
      </Box>

      {/* SKills */}
      {/* SKills */}
      <Box padding={8}>
        <Grid container columnSpacing={3} rowGap={12}>
          {/* FrontEnd */}
          <Grid item xs={12} sm={6}>
            <Box>
              <Typography variant="h2" mb={2} sx={{ textAlign: "center" }}>
                Frontend
              </Typography>

              <Card className="customCard">
                <CardContent>
                  <Grid container rowSpacing={4} padding={2}>
                    <Grid item sm={4}>
                      <Typography variant="h6" textAlign={"center"}>
                        Java Script
                      </Typography>
                    </Grid>
                    <Grid item sm={4}>
                      <Typography variant="h6" textAlign={"center"}>
                        ReactJs
                      </Typography>
                    </Grid>
                    <Grid item sm={4}>
                      <Typography variant="h6" textAlign={"center"}>
                        NextJS
                      </Typography>
                    </Grid>

                    <Grid item xs={4} sm={4} md={4}>
                      <Typography variant="h6" textAlign={"center"}>
                        HTML5
                      </Typography>
                    </Grid>
                    <Grid item xs={4} sm={4} md={4}>
                      <Typography variant="h6" textAlign={"center"}>
                        CSS
                      </Typography>
                    </Grid>
                    <Grid item xs={4} sm={4} md={4}>
                      <Typography variant="h6" textAlign={"center"}>
                        BootStrap
                      </Typography>
                    </Grid>

                    <Grid item xs={4} sm={4} md={4}>
                      <Typography variant="h6" textAlign={"center"}>
                        Material UI
                      </Typography>
                    </Grid>
                    <Grid item xs={4} sm={4} md={4}>
                      <Typography variant="h6" textAlign={"center"}>
                        Figma
                      </Typography>
                    </Grid>
                    <Grid item xs={4} sm={4} md={4}>
                      <Typography variant="h6" textAlign={"center"}>
                        Tailwind
                      </Typography>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            </Box>
          </Grid>

          {/* Backend */}
          <Grid item xs={12} sm={6}>
            <Box>
              <Typography variant="h2" mb={2} sx={{ textAlign: "center" }}>
                Backend
              </Typography>

              <Card className="customCard">
                <CardContent>
                  <Grid container rowSpacing={4} padding={2} spacing={2}>
                    <Grid item xs={4} sm={4} md={4}>
                      <Typography variant="h6" textAlign={"center"}>
                        Java
                      </Typography>
                    </Grid>
                    <Grid item xs={4} sm={4} md={4}>
                      <Typography variant="h6" textAlign={"center"}>
                        Spring Boot
                      </Typography>
                    </Grid>
                    <Grid item xs={4} sm={4} md={4}>
                      <Typography variant="h6" textAlign={"center"}>
                        PHP
                      </Typography>
                    </Grid>

                    <Grid item xs={4} sm={4} md={4}>
                      <Typography variant="h6" textAlign={"center"}>
                        NodeJs
                      </Typography>
                    </Grid>
                    <Grid item xs={4} sm={4} md={4}>
                      <Typography variant="h6" textAlign={"center"}>
                        ExpressJS
                      </Typography>
                    </Grid>
                    <Grid item xs={4} sm={4} md={4}>
                      <Typography variant="h6" textAlign={"center"}>
                        MySQL
                      </Typography>
                    </Grid>

                    <Grid item xs={4} sm={4} md={4}>
                      <Typography variant="h6" textAlign={"center"}>
                        MongoDB
                      </Typography>
                    </Grid>
                    <Grid item xs={4} sm={4} md={4}>
                      <Typography variant="h6" textAlign={"center"}>
                        Firebase
                      </Typography>
                    </Grid>
                    <Grid item xs={4} sm={4} md={4}>
                      <Typography variant="h6" textAlign={"center"}>
                        AWS
                      </Typography>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            </Box>
          </Grid>
        </Grid>
      </Box>

      {/* Experinec */}
      <Box padding={8}>
        <Grid container columnSpacing={3} rowGap={12}>
          {/* <Experince Kyrotics>*/}
          <Grid item sm={12} xs={12}>
            <Box>
              <Typography variant="h2" mb={2} sx={{ textAlign: "center" }}>
                Co-op Experience
              </Typography>

              <Card className="customCard">
                <Box padding={4}>
                  <CardContent>
                    <Grid container justifyContent={"space-between"}>
                      <Grid item>
                        <Typography variant="h5">Software Developer</Typography>
                      </Grid>
                      <Grid item>
                        <Typography variant="subtitle1">
                          October 2024 - December 2024
                        </Typography>
                      </Grid>
                    </Grid>
                    <Typography variant="subtitle1" mb={2}>
                      Kyrotics - AI Solution Startup
                    </Typography>

                    <Typography
                      component="ul"
                      sx={{
                        color: "white",
                        listStyleType: "disc",
                        pl: 2,
                        fontSize: "1.1rem",
                      }}
                    >
                      <Typography
                        component="li"
                        sx={{ mb: 1, fontSize: "1.1rem" }}
                      >
                        Successfully collaborated with a team of four to develop
                        an automated task distributor and work progress tracker
                        module, — honing my teamwork and project management
                        skills.
                      </Typography>
                      <Typography
                        component="li"
                        sx={{ mb: 1, fontSize: "1.1rem" }}
                      >
                        Designed and implemented a module to compare
                        AI-translated content with the original, significantly
                        enhancing review efficiency — reflecting my ability to
                        innovate and implement solutions.
                      </Typography>
                      <Typography
                        component="li"
                        sx={{ mb: 1, fontSize: "1.1rem" }}
                      >
                        Integrated work progress and employee efficiency data
                        into team leader and manager panels — demonstrating my
                        technical expertise and strengthening my ability to
                        create data-driven insights for decision-makers.
                      </Typography>
                      <Typography
                        component="li"
                        sx={{ mb: 1, fontSize: "1.1rem" }}
                      >
                        Actively engaged with team members and stakeholders for
                        updates, feedback, and improvements, which enhanced my
                        communication skills and my ability to incorporate
                        diverse perspectives into project development.
                      </Typography>
                    </Typography>
                  </CardContent>
                </Box>
              </Card>
            </Box>
          </Grid>

          {/* <Experince Skill Squirrel>*/}
          <Grid item sm={12} xs={12}>
            <Box>
              <Card className="customCard">
                <Box padding={4}>
                  <CardContent>
                    <Grid container justifyContent={"space-between"}>
                      <Grid item>
                        <Typography variant="h5">
                          Jr. Software Developer
                        </Typography>
                      </Grid>
                      <Grid item>
                        <Typography variant="subtitle1">
                          January 2024 - April 2024
                        </Typography>
                      </Grid>
                    </Grid>
                    <Typography variant="subtitle1" mb={2}>
                      SKill Squirrel - Career Launch Platform
                    </Typography>

                    <Typography
                      component="ul"
                      sx={{
                        color: "white",
                        listStyleType: "disc",
                        pl: 2,
                        fontSize: "1.1rem",
                      }}
                    >
                      <Typography
                        component="li"
                        sx={{ mb: 1, fontSize: "1.1rem" }}
                      >
                        Optimized page load speed by 40% through effective
                        indexing and lazy loading techniques, enhancing website
                        performance and showcasing my ability to implement
                        impactful technical solutions.
                      </Typography>
                      <Typography
                        component="li"
                        sx={{ mb: 1, fontSize: "1.1rem" }}
                      >
                        Successfully implemented W3C accessibility standards,
                        improving user experience and demonstrating my
                        commitment to inclusivity and web accessibility best
                        practices.
                      </Typography>
                      <Typography
                        component="li"
                        sx={{ mb: 1, fontSize: "1.1rem" }}
                      >
                        Resolved styling issues, improved responsiveness, and
                        refactored CSS to ensure a seamless display across
                        devices, strengthening my problem-solving and front-end
                        development skills.
                      </Typography>
                      <Typography
                        component="li"
                        sx={{ mb: 1, fontSize: "1.1rem" }}
                      >
                        Actively contributed to weekly stand-up meetings by
                        providing project updates and engaging in discussions,
                        fostering effective communication and collaboration
                        within the team.
                      </Typography>
                    </Typography>
                  </CardContent>
                </Box>
              </Card>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Layout>
  );
};

export default Home;
