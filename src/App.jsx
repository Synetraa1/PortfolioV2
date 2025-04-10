﻿import React, { useRef, useEffect } from 'react';
import Navbar from './navbar';
import "./Main.css";
import {  Grid, Typography, Button, Container, Card, CardMedia, CardContent, Box, List, ListItem, Link } from '@mui/material';
import content from './Typography.json';
import { GlobalStyles } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Element, } from 'react-scroll';
import ScrollToTop from './ScrollToTop';
import CssBaseline from '@mui/material/CssBaseline';
import { motion, useInView } from "motion/react"

const theme = createTheme();

const projectVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };
  
  const UseInView = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, {
      amount: "all",
    });
  
    useEffect(() => {
      console.log(`The element ${isInView ? "is" : "is NOT"} in view`);
    }, [isInView]);

    return null;
};


function ScrollbarStyles() {
    return (
        <GlobalStyles
            styles={{
                '*::-webkit-scrollbar': {
                    width: '8px',
                    height: '10px',
                    backgroundColor: '#2b2b2b',
                },
                '*::-webkit-scrollbar-thumb': {
                    backgroundColor: '#6b6b6b',
                    borderRadius: '8px',
                    border: '2px solid #2b2b2b',
                },
                '*::-webkit-scrollbar-thumb:hover': {
                    backgroundColor: '#FFF',
                },
                '*::-webkit-scrollbar-thumb:active': {
                    backgroundColor: '#FFF',
                },
                '*': {
                    scrollbarWidth: 'thin',
                    scrollbarColor: '#ff0000 #000',
                },
            }}
        />
    );
}

const App = () => {
    const targetRef = useRef(null);
    const [rotate, setRotate] = React.useState(0)
    const buttonStyle = {
        color: '#fff',
        fontSize: '20px',
        padding: '10px 15px',
        border: '1px solid #ff0000',
        maxWidth: '25%',
        '&:hover': {
            backgroundColor: '#b71c1c',
            border: '1px solid #fff',
        }
    };

    const hoverButtonStyles = {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 2,
        opacity: 0,
        visibility: 'hidden',
        transition: 'all 0.3s ease',
      };

    const ProjectDescription = ({ title, subtitle, tasks }) => (
        <Box sx={{ mb: 4 }}>
          <Typography variant="h3" sx={{
            fontSize: '32px',
            fontWeight: 'bold',
            color: '#FFF',
            mb: 1,
            pt: 2,
          }}>
            {title}
          </Typography>
          <Typography sx={{ fontSize: '15px', color: "grey" }}>
            {subtitle}
          </Typography>
          <List dense sx={{ listStyleType: 'disc', pl: 2 }}>
            {tasks.map((task, index) => (
              <ListItem key={index} sx={{ display: 'list-item', color: '#FFF', p: 0, mb: 1 }}>
                <Typography sx={{ fontSize: '16px' }}>{task}</Typography>
              </ListItem>
            ))}
          </List>
        </Box>
      );
      
      // Styles
      const projectImageContainerStyles = {
        position: 'relative',
        display: 'inline-block',
        lineHeight: 0,
        '&:hover .hover-buttons': {
          opacity: 1,
          visibility: 'visible',
        }
      };
      const buttonStyles = {
        backgroundColor: '#FFF',
        color: '#000',
        '&:hover': {
          backgroundColor: '#EEE',
        }
      };

    return (
        <ThemeProvider theme={theme}>
        <CssBaseline />
        <ScrollbarStyles />
        <div>

        <>
            <Navbar />
            <section id='landing'>
                <Container maxWidth='xl' disableGutters
                    sx={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', pb: 0, }}>

                    <Grid container
                        sx={{ maxWidth: '1400px', display: 'flex', alignItems: 'center', justifyContent: 'center', }}>

                        <Grid item lg={6} md={6} sm={12} xs={12}
                            sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'center',}}>
                            <Typography variant="h1" sx={{ fontSize: '48px', fontWeight: 'bold', pb: 2, mt:{xs:20, md:0, lg:0} }} color="#FFF">{content.greeting}</Typography>
                            <Typography variant="h2" sx={{ fontSize: '20px', pb:2 }} color="#FFF">{content.intro1}</Typography>
                            <Typography variant="h2" sx={{ fontSize: '20px' }} color="#808080">{content.intro2}</Typography>
                            <Typography variant="h2" sx={{ fontSize: '20px', pb: 2 }} color="#808080">{content.intro3}</Typography>
                            <Button sx={buttonStyle}><Link href="mailto:hickman.nico@gmail.com" color="#FFF" underline="hover" target="_blank" rel="noopener"> Contact Me </Link></Button>
                        </Grid>

                        <Grid item lg={6} md={6} sm={12} xs={12}
                            sx={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                            <img alt="Nico" src="/Images/Nico.png"
                                style={{maxWidth: '65%', height: 'auto'}}/>
                        </Grid>

                        <Grid item sx={{mt:'10vh'} }>
                            <img alt="Divider Line" src="/Images/Line1.png"/>
                        </Grid>
                    </Grid>
                </Container>
            </section>

            <section id='aboutme'>
                <Container maxWidth='xl' disableGutters
                    sx={{ minHeight: '85vh', display: 'flex', alignItems: 'center', justifyContent: 'center', mt: 0, }}>

                    <Grid container
                        sx={{ maxWidth: '1400px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', }}>

                        {/* Title Section */}
                        <Grid item xs={12}
                            sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'center', width: '100%', }}>
                            <Typography variant="h1" sx={{ fontSize: '48px', fontWeight: 'bold', pb: 10 }} color="#FFF">{content.info.title}</Typography>
                        </Grid>

                        {/* Content Section*/}
                        <Grid container
                            sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%', gap: 4, }}>

                            <Grid item lg={5} md={6} sm={12} xs={12}sx={{                               
                                backgroundImage: 'url(/Images/introductionbg.png)',
                                backgroundSize: 'cover',
                                backgroundRepeat: 'no-repeat',
                                backgroundPosition: 'center',
                                borderRadius: '24px',
                                minHeight: '350px',
                                p: 4,
                                }}>
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 1 }}
                                variants={projectVariants}
                                sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'flex-start',
                                justifyContent: 'center',
                                }}
                            >
                                <Typography variant="h3" sx={{ fontSize: '24px', fontWeight: 'bold', pb: 2 }} color="#FFF">
                                {content.info.intro1}
                                </Typography>
                                <Typography variant="h3" sx={{ fontSize: '18px', pb: 2 }} color="#FFF">
                                {content.info.intro2}
                                </Typography>
                                <Typography variant="h3" sx={{ fontSize: '18px', pb: 2 }} color="#FFF">
                                {content.info.intro3}
                                </Typography>
                                <Typography variant="h3" sx={{ fontSize: '18px' }} color="#FFF">
                                {content.info.intro4}
                                </Typography>
                                </motion.div>
                                </Grid>

                                <Grid item lg={5} md={6} sm={12} xs={12} sx={{                               
                                backgroundImage: 'url(/Images/experience.png)',
                                backgroundSize: 'cover',
                                backgroundRepeat: 'no-repeat',
                                backgroundPosition: 'center',
                                borderRadius: '24px',
                                minHeight: '350px',
                                p: 4,
                                mt:{xs:20,md:0,lg:0},}}>
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.5 }}
                                variants={projectVariants}
                                sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'flex-start',
                                justifyContent: 'center',
                                }}
                            >
                                <Typography variant="h3" sx={{ fontSize: '24px', fontWeight: 'bold', pb: 2 }} color="#FFF">
                                {content.experience.intro1}
                                </Typography>
                                <Typography variant="h3" sx={{ fontSize: '18px', pb: 2 }} color="#FFF">
                                {content.experience.intro2}
                                </Typography>
                                <Typography variant="h3" sx={{ fontSize: '18px', pb: 2 }} color="#FFF">
                                {content.experience.intro3}
                                </Typography>
                                <Typography variant="h3" sx={{ fontSize: '18px' }} color="#FFF">
                                {content.experience.intro4}
                                </Typography>
                                </motion.div>
                                </Grid>
                        </Grid>
                    </Grid>
                </Container>
            </section>

            <section id='technologies'>
                <Container maxWidth='xl' disableGutters
                    sx={{display: 'flex', alignItems: 'center', justifyContent: 'center', pt: 20, pb: 10,}}>
                    <Grid container
                        sx={{maxWidth: '1400px', display: 'flex', flexDirection: 'column',
                            alignItems: 'flex', justifyContent: 'center', gap: 4,}}>

                        {/* Title Section */}
                        <Grid item xs={12}>
                            <Typography variant="h1" sx={{ fontSize: '48px', fontWeight: 'bold' }} color="#FFF">{content.technology.title}</Typography>
                        </Grid>

                        {/* Subtitle Section */}
                        <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center' }}>
                            <Typography variant="h2" sx={{ fontSize: '22px', textAlign: 'center' }} color="#FFF">{content.technology.subtitle}</Typography>
                        </Grid>

                        <Grid container item xs={12} sx={{ pt: 8, gap: 5, display: 'flex', justifyContent: 'center', }}>

                            {/* Figma */}
                            <Grid item lg={1} md={4} sm={6} xs={5}sx={{paddingLeft:{xs:5, md:0, lg:0}}}>
                                <Card sx={{
                                    display: "flex", flexDirection: "column", backgroundColor: "#808080",
                                    maxWidth: 110, borderRadius: '16px', height: '100%'}}>

                                    <CardMedia
                                        component="img" image="/Images/Logos/Figma.png" alt="Figma logo"/>
                                    <Box sx={{
                                        display: "flex", flexDirection: "column", textAlign: "center",}}>
                                        <CardContent>
                                            <Typography>{content.technology.figma}</Typography>
                                        </CardContent>
                                    </Box>
                                </Card>
                            </Grid>

                            {/* Javascript */}
                            <Grid item lg={1} md={4} sm={6} xs={5}>
                                <Card sx={{
                                    display: "flex", flexDirection: "column", backgroundColor: "#808080",
                                    maxWidth: 110, borderRadius: '16px', height: '100%'}}>
                                    <CardMedia component="img" image="/Images/Logos/Javascript.png" alt="Javascript logo"/>
                                    <Box sx={{display: "flex", flexDirection: "column", textAlign: "center",}}>
                                        <CardContent>
                                            <Typography>{content.technology.javascript}</Typography>
                                        </CardContent>
                                    </Box>
                                </Card>
                            </Grid>

                            {/* HTML5 */}
                            <Grid item lg={1} md={4} sm={6} xs={5}sx={{paddingLeft:{xs:5, md:0, lg:0}}}>
                                <Card sx={{
                                    display: "flex", flexDirection: "column", backgroundColor: "#808080",
                                    maxWidth: 110, borderRadius: '16px', height: '100%'}}>
                                    <CardMedia component="img" image="/Images/Logos/HTML.png" alt="Figma logo"/>
                                    <Box sx={{
                                        display: "flex", flexDirection: "column", textAlign: "center",}}>
                                        <CardContent>
                                            <Typography>{content.technology.html}</Typography>
                                        </CardContent>
                                    </Box>
                                </Card>
                            </Grid>

                            {/* CSS */}
                            <Grid item lg={1} md={4} sm={6} xs={5}>
                                <Card sx={{
                                    display: "flex", flexDirection: "column", backgroundColor: "#808080",
                                    maxWidth: 110, borderRadius: '16px', height: '100%'}}>
                                    <CardMedia component="img" image="/Images/Logos/CSS.png" alt="Figma logo"/>
                                    <Box sx={{
                                        display: "flex", flexDirection: "column", textAlign: "center",}}>
                                        <CardContent>
                                            <Typography>{content.technology.css}</Typography>
                                        </CardContent>
                                    </Box>
                                </Card>
                            </Grid>

                            {/* React */}
                            <Grid item lg={1} md={4} sm={6} xs={5}sx={{paddingLeft:{xs:5, md:0, lg:0}}}>
                                <Card sx={{
                                    display: "flex", flexDirection: "column", backgroundColor: "#808080",
                                    maxWidth: 110, borderRadius: '16px', height: '100%'}}>
                                    <CardMedia component="img" image="/Images/Logos/React.png" alt="Figma logo"/>
                                    <Box sx={{
                                        display: "flex", flexDirection: "column", textAlign: "center",}}>
                                        <CardContent>
                                            <Typography>{content.technology.react}</Typography>
                                        </CardContent>
                                    </Box>
                                </Card>
                            </Grid>

                            {/* MUI */}
                            <Grid item lg={1} md={4} sm={6} xs={5}>
                                <Card sx={{
                                    display: "flex", flexDirection: "column",  backgroundColor: "#808080",
                                    maxWidth: 110, borderRadius: '16px', height: '100%'}}>
                                    <CardMedia component="img" image="/Images/Logos/MaterialUI.png" alt="Figma logo" />
                                    <Box sx={{
                                        display: "flex", flexDirection: "column", textAlign: "center",}}>
                                        <CardContent>
                                            <Typography>{content.technology.materialui}</Typography>
                                        </CardContent>
                                    </Box>
                                </Card>
                            </Grid>

                            {/* Wordpress */}
                            <Grid item lg={1} md={4} sm={6} xs={5}sx={{paddingLeft:{xs:5, md:0, lg:0}}}>
                                <Card sx={{
                                    display: "flex", flexDirection: "column", backgroundColor: "#808080",
                                    maxWidth: 110, borderRadius: '16px', height: '100%'}}>
                                    <CardMedia
                                        component="img" image="/Images/Logos/Wordpress.png" alt="Figma logo"/>
                                    <Box sx={{
                                        display: "flex", flexDirection: "column", textAlign: "center",}}>
                                        <CardContent>
                                            <Typography>{content.technology.wordpress}</Typography>
                                        </CardContent>
                                    </Box>
                                </Card>
                            </Grid>

                            {/* Lua */}
                            <Grid item lg={1} md={4} sm={6} xs={5}>
                                <Card sx={{
                                    display: "flex", flexDirection: "column", backgroundColor: "#808080",
                                    maxWidth: 110, borderRadius: '16px', height: '100%', }}>
                                    <CardMedia
                                        component="img" image="/Images/Logos/Lua.png" alt="Figma logo"/>
                                    <Box sx={{
                                        display: "flex", flexDirection: "column", textAlign: "center",}}>
                                        <CardContent>
                                            <Typography>{content.technology.lua}</Typography>
                                        </CardContent>
                                    </Box>
                                </Card>
                            </Grid>

                            {/* Git */}
                            <Grid item lg={1} md={4} sm={6} xs={5} sx={{paddingLeft:{xs:2, md:0, lg:0}}}>
                                <Card sx={{
                                    display: "flex", flexDirection: "column", backgroundColor: "#808080",
                                    maxWidth: 110, borderRadius: '16px', height: '100%'}}>
                                    <CardMedia
                                        component="img" image="/Images/Logos/Git.png" alt="Figma logo"/>
                                    <Box sx={{
                                        display: "flex", flexDirection: "column", textAlign: "center",}}>
                                        <CardContent>
                                            <Typography>{content.technology.git}</Typography>
                                        </CardContent>
                                    </Box>
                                </Card>
                            </Grid>
                        </Grid>
                    </Grid>
                </Container>
            </section>

            <Element name="Projects1">
            <section id='Projects1'>
                <Container maxWidth='xxl' sx={{ py: 25 }}>
                <Grid container sx={{ maxWidth: '1400px', mx: 'auto' }} spacing={4}>
                    
                    {/* Title Section */}
                    <Grid item xs={12}>
                    <Typography variant="h1" sx={{
                        fontSize: '48px',
                        fontWeight: 'bold',
                        color: '#FFF',
                        mb: 4
                    }}>
                        {content.projects.title}
                    </Typography>
                    </Grid>

                    {/* Subtitle Section */}
                    <Grid item xs={12}>
                    <Typography variant="h2" sx={{
                        fontSize: '26px',
                        color: '#FFF',
                        mb: 3,
                        borderBottom: '1px solid #333',
                        pb: 1
                    }}>
                        {content.projects.subtitle}
                    </Typography>
                    </Grid>

                    {/* BarelyWeathery Project */}
                    <Grid container sx={{ width: '100%', gap: 10, mb: 10 }}>
                    <Grid item lg={6} md={6} sm={12} xs={12} sx={{ pt: 5 }}>
                        <Box sx={{
                        position: 'relative',
                        display: 'inline-block',
                        lineHeight: 0,
                        '&:hover .hover-buttons': {
                            opacity: 1,
                            visibility: 'visible',
                        }
                        }}>
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.5 }}
                            variants={projectVariants}
                        >
                            <img
                            alt='weather app barelyweathery'
                            src='/Images/Projects/BarelyWeathery.png'
                            style={{ width: '100%', height: 'auto' }}
                            />
                        </motion.div>
                        <Box className="hover-buttons" sx={hoverButtonStyles}>
                            <Button variant="contained" sx={buttonStyles}>
                            <Link href="https://www.barelyweathery.com" color="#000" underline="hover" target="_blank" rel="noopener"> 
                                {content.projects.live}
                            </Link> 
                            </Button>
                            <Button variant="contained" sx={buttonStyles}>
                            <Link href="https://github.com/Synetraa1/BarelyWeathery" color="#000" underline="hover" target="_blank" rel="noopener">  
                                {content.projects.github}
                            </Link> 
                            </Button>
                        </Box>
                        </Box>
                    </Grid>
                    <Grid item lg={4} md={6} sm={12} xs={12}sx={{my:'auto'}}>
                        <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        variants={projectVariants}
                        >
                        <ProjectDescription 
                            title={content.projects.weathertitle}
                            subtitle={content.projects.weathersub}
                            tasks={[
                            content.projects.weathertask1,
                            content.projects.weathertask2,
                            content.projects.weathertask3,
                            content.projects.weathertask4,
                            content.projects.weathertask5,
                            content.projects.weathertask6
                            ]}
                        />
                        </motion.div>
                    </Grid>
                    </Grid>

                    {/* Karpon Project */}
                    <Grid container sx={{ width: '100%', gap: 10, mb: 10 }}>
                    <Grid item lg={6} md={6} sm={12} xs={12} sx={{ pt: 5 }}>
                        <Box sx={projectImageContainerStyles}>
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.5 }}
                            variants={projectVariants}
                        >
                            <img
                            alt='Carbon footprint calculator'
                            src='/Images/Projects/Karpon.png'
                            style={{ width: '100%', height: 'auto' }}
                            />
                        </motion.div>
                        <Box className="hover-buttons" sx={hoverButtonStyles}>
                            <Button variant="contained" sx={buttonStyles}>
                            <Link href="https://www.karpon.fi" color="#000" underline="hover" target="_blank" rel="noopener"> 
                                {content.projects.live}
                            </Link> 
                            </Button>
                            <Button variant="contained" sx={buttonStyles}>
                            <Link href="https://github.com/Synetraa1/Karpon" color="#000" underline="hover" target="_blank" rel="noopener">  
                                {content.projects.github}
                            </Link> 
                            </Button>
                        </Box>
                        </Box>
                    </Grid>
                    <Grid item lg={4} md={6} sm={12} xs={12} sx={{my:'auto'}}>
                        <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        variants={projectVariants}
                        >
                        <ProjectDescription 
                            title={content.projects.karpontitle}
                            subtitle={content.projects.karponsub}
                            tasks={[
                            content.projects.karpontask1,
                            content.projects.karpontask2,
                            content.projects.karpontask3
                            ]}
                        />
                        </motion.div>
                    </Grid>
                    </Grid>

                    {/* Startecon Project */}
                    <Grid container sx={{ width: '100%', gap: 10, mb: 10 }}>
                    <Grid item lg={6} md={6} sm={12} xs={12}sx={{ pt: 5 }}>
                        <Box sx={projectImageContainerStyles}>
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.5 }}
                            variants={projectVariants}
                        >
                            <img
                            alt='Startecon Oy homepage'
                            src='/Images/Projects/Startecon.png'
                            style={{ width: '100%', height: 'auto' }}
                            />
                        </motion.div>
                        <Box className="hover-buttons" sx={hoverButtonStyles}>
                            <Button variant="contained" sx={buttonStyles}>
                            <Link href="https://www.startecon.fi" color="#000" underline="hover" target="_blank" rel="noopener"> 
                                {content.projects.live}
                            </Link> 
                            </Button>
                            <Button variant="contained" sx={buttonStyles}>
                            <Link href="https://github.com/Synetraa1/Startecon.fi" color="#000" underline="hover" target="_blank" rel="noopener">  
                                {content.projects.github}
                            </Link> 
                            </Button>
                        </Box>
                        </Box>
                    </Grid>
                    <Grid item lg={4} md={6} sm={12} xs={12} sx={{my:'auto'}}>
                        <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        variants={projectVariants}
                        >
                        <ProjectDescription 
                            title={content.projects.startitle}
                            subtitle={content.projects.starsub}
                            tasks={[
                            content.projects.startask1,
                            content.projects.startask2,
                            content.projects.startask3
                            ]}
                        />
                        </motion.div>
                    </Grid>
                    </Grid>

                            {/* Mediastation Project */}
                            <Grid container sx={{ width: '100%', gap: 10, mb: 10 }}>
                    <Grid item lg={6} md={6} sm={12} xs={12} sx={{ pt: 5 }}>
                        <Box sx={projectImageContainerStyles}>
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.5 }}
                            variants={projectVariants}
                        >
                            <img
                            alt='MediaStation Oy Homepage'
                            src='/Images/Projects/Mediastation.png'
                            style={{ width: '100%', height: 'auto' }}
                            />
                        </motion.div>
                        <Box className="hover-buttons" sx={hoverButtonStyles}>
                            <Button variant="contained" sx={buttonStyles}>
                            <Link href="https://www.mediastation.fi" color="#000" underline="hover" target="_blank" rel="noopener"> 
                                {content.projects.live}
                            </Link> 
                            </Button>
                            <Button variant="contained" sx={buttonStyles}> 
                                {content.projects.norepo}
                            </Button>
                        </Box>
                        </Box>
                    </Grid>
                    <Grid item lg={4} md={6} sm={12} xs={12} sx={{my:'auto'}}>
                        <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        variants={projectVariants}
                        >
                        <ProjectDescription 
                            title={content.projects.mediatitle}
                            subtitle={content.projects.mediasub}
                            tasks={[
                            content.projects.mediatask1,
                            content.projects.mediatask2,
                            content.projects.mediatask3
                            ]}
                        />
                        </motion.div>
                    </Grid>
                    </Grid>

                            {/* MarkusMoments Project */}
                            <Grid container sx={{ width: '100%', gap: 10, mb: 10 }}>
                    <Grid item lg={6} md={6} sm={12} xs={12} sx={{ pt: 5 }}>
                        <Box sx={projectImageContainerStyles}>
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.5 }}
                            variants={projectVariants}
                        >
                            <img
                            alt='MarkusMoments website'
                            src='/Images/Projects/MarkusMoments.png'
                            style={{ width: '100%', height: 'auto' }}
                            />
                        </motion.div>
                        <Box className="hover-buttons" sx={hoverButtonStyles}>
                            <Button variant="contained" sx={buttonStyles}>
                                {content.projects.notlive}
                            </Button>
                            <Button variant="contained" sx={buttonStyles}>
                            <Link href="https://github.com/Synetraa1/MarkusMoments" color="#000" underline="hover" target="_blank" rel="noopener">  
                                {content.projects.github}
                            </Link> 
                            </Button>
                        </Box>
                        </Box>
                    </Grid>
                    <Grid item lg={4} md={6} sm={12} xs={12} sx={{my:'auto'}}>
                        <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        variants={projectVariants}
                        >
                        <ProjectDescription 
                            title={content.projects.markustitle}
                            subtitle={content.projects.markussub}
                            tasks={[
                            content.projects.markustask1,
                            content.projects.markustask2,
                            content.projects.markustask3
                            ]}
                        />
                        </motion.div>
                    </Grid>
                    </Grid>

                </Grid>
                </Container>
            </section>
            </Element>
            <Element name="Resume">
                <section id='Resume'>
                    <Container maxWidth='xxl' sx={{ py: 15 }}>
                        <Grid container sx={{ maxWidth: '1400px', mx: 'auto' }} spacing={4}>

                            {/* Main Title */}
                            <Grid item xs={12}>
                                <Typography variant="h1" sx={{
                                    fontSize: '48px',
                                    fontWeight: 'bold',
                                    color: '#FFF',
                                    mb: 4
                                }}>
                                    {content.resume.title}
                                </Typography>
                            </Grid>

                            {/* Work Experience Section */}
                            <Grid item xs={12}>
                                <Typography variant="h2" sx={{
                                    fontSize: '32px',
                                    fontWeight: 'bold',
                                    color: '#FFF',
                                    mb: 3,
                                    borderBottom: '1px solid #333',
                                    pb: 1
                                }}>
                                    {content.resume.worksubtitle}
                                </Typography>

                                {/* Startecom Experience */}
                                <Box sx={{ mb: 4 }}>
                                    <Typography variant="h3" sx={{
                                        fontSize: '24px',
                                        fontWeight: 'bold',
                                        color: '#FFF',
                                        mb: 1, paddingRight:{xs:5, md:0, lg:0}
                                    }}>
                                        {content.resume.startecon}
                                    </Typography>
                                    <Typography sx={{ fontSize: '16px', color: "grey" }}>
                                        {content.resume.stardate}</Typography>

                                    <List dense sx={{ listStyleType: 'disc', pl: 2 }}>
                                        <ListItem sx={{ display: 'list-item', color: '#FFF', p: 0, mb: 1 }}>
                                            <Typography sx={{ fontSize: '18px', paddingRight:{xs:5, md:0, lg:0} }}>
                                                {content.resume.startask1}
                                            </Typography>
                                        </ListItem>
                                        <ListItem sx={{ display: 'list-item', color: '#FFF', p: 0, mb: 1 }}>
                                            <Typography sx={{ fontSize: '18px', paddingRight:{xs:5, md:0, lg:0} }}>
                                                {content.resume.startask2}
                                            </Typography>
                                        </ListItem>
                                        <ListItem sx={{ display: 'list-item', color: '#FFF', p: 0, mb: 1 }}>
                                            <Typography sx={{ fontSize: '18px', paddingRight:{xs:5, md:0, lg:0} }}>
                                                {content.resume.startask3}
                                            </Typography>
                                        </ListItem>
                                        <ListItem sx={{ display: 'list-item', color: '#FFF', p: 0, mb: 1 }}>
                                            <Typography sx={{ fontSize: '18px', paddingRight:{xs:5, md:0, lg:0} }}>
                                                {content.resume.startask4}
                                            </Typography>
                                        </ListItem>
                                        <ListItem sx={{ display: 'list-item', color: '#FFF', p: 0, mb: 1 }}>
                                            <Typography sx={{ fontSize: '18px', paddingRight:{xs:5, md:0, lg:0} }}>
                                                {content.resume.startask5}
                                            </Typography>
                                        </ListItem>
                                    </List>
                                </Box>

                                {/* Veikkaus Experience 1 */}
                                <Box sx={{ mb: 4 }}>
                                    <Typography variant="h3" sx={{
                                        fontSize: '24px',
                                        fontWeight: 'bold',
                                        color: '#FFF',
                                        mb: 1, paddingRight:{xs:5, md:0, lg:0}
                                    }}>
                                        {content.resume.veikkaus1}
                                    </Typography>
                                    <Typography sx={{ fontSize: '16px', color: "grey" }}>
                                        {content.resume.veikkausdate1}</Typography>

                                    <List dense sx={{ listStyleType: 'disc', pl: 2 }}>
                                        <ListItem sx={{ display: 'list-item', color: '#FFF', p: 0, mb: 1 }}>
                                            <Typography sx={{ fontSize: '18px', paddingRight:{xs:5, md:0, lg:0} }}>
                                                {content.resume.veikkaus1task1}
                                            </Typography>
                                        </ListItem>
                                        <ListItem sx={{ display: 'list-item', color: '#FFF', p: 0, mb: 1 }}>
                                            <Typography sx={{ fontSize: '18px', paddingRight:{xs:5, md:0, lg:0} }}>
                                                {content.resume.veikkaus1task2}
                                            </Typography>
                                        </ListItem>
                                        <ListItem sx={{ display: 'list-item', color: '#FFF', p: 0 }}>
                                            <Typography sx={{ fontSize: '18px', paddingRight:{xs:5, md:0, lg:0} }}>
                                                {content.resume.veikkaus1task3}
                                            </Typography>
                                        </ListItem>
                                    </List>
                                </Box>

                                {/* Veikkaus Experience 2 */}
                                <Box sx={{ mb: 4 }}>
                                    <Typography variant="h3" sx={{
                                        fontSize: '24px',
                                        fontWeight: 'bold',
                                        color: '#FFF',
                                        mb: 1, paddingRight:{xs:5, md:0, lg:0}
                                    }}>
                                        {content.resume.veikkaus2}
                                    </Typography>
                                    <Typography sx={{ fontSize: '16px', color: "grey" }}>
                                        {content.resume.veikkausdate2}</Typography>

                                    <List dense sx={{ listStyleType: 'disc', pl: 2 }}>
                                        <ListItem sx={{ display: 'list-item', color: '#FFF', p: 0, mb: 1 }}>
                                            <Typography sx={{ fontSize: '18px', paddingRight:{xs:5, md:0, lg:0} }}>
                                                {content.resume.veikkaus2task1}
                                            </Typography>
                                        </ListItem>
                                        <ListItem sx={{ display: 'list-item', color: '#FFF', p: 0, mb: 1 }}>
                                            <Typography sx={{ fontSize: '18px', paddingRight:{xs:5, md:0, lg:0} }}>
                                                {content.resume.veikkaus2task2}
                                            </Typography>
                                        </ListItem>
                                        <ListItem sx={{ display: 'list-item', color: '#FFF', p: 0 }}>
                                            <Typography sx={{ fontSize: '18px', paddingRight:{xs:5, md:0, lg:0} }}>
                                                {content.resume.veikkaus2task3}
                                            </Typography>
                                        </ListItem>
                                    </List>
                                </Box>

                                {/* Facebook Experience */}
                                <Box sx={{ mb: 4 }}>
                                    <Typography variant="h3" sx={{
                                        fontSize: '24px',
                                        fontWeight: 'bold',
                                        color: '#FFF',
                                        mb: 1, paddingRight:{xs:5, md:0, lg:0}
                                    }}>
                                        {content.resume.facebook}
                                    </Typography>
                                    <Typography sx={{ fontSize: '16px', color: "grey", paddingRight:{xs:5, md:0, lg:0} }}>
                                        {content.resume.facedate}</Typography>

                                    <List dense sx={{ listStyleType: 'disc', pl: 2 }}>
                                        <ListItem sx={{ display: 'list-item', color: '#FFF', p: 0, mb: 1 }}>
                                            <Typography sx={{ fontSize: '18px', paddingRight:{xs:5, md:0, lg:0} }}>
                                                {content.resume.facetask1}
                                            </Typography>
                                        </ListItem>
                                        <ListItem sx={{ display: 'list-item', color: '#FFF', p: 0, mb: 1 }}>
                                            <Typography sx={{ fontSize: '18px', paddingRight:{xs:5, md:0, lg:0} }}>
                                                {content.resume.facetask2}
                                            </Typography>
                                        </ListItem>
                                        <ListItem sx={{ display: 'list-item', color: '#FFF', p: 0 }}>
                                            <Typography sx={{ fontSize: '18px', paddingRight:{xs:5, md:0, lg:0} }}>
                                                {content.resume.facetask3}
                                            </Typography>
                                        </ListItem>
                                    </List>
                                </Box>
                            </Grid>

                            {/* Divider */}
                            <Grid item xs={12}>
                                <Box sx={{ borderBottom: '1px solid #333', my: 4 }} />
                            </Grid>

                            {/* Education Section */}
                            <Grid item xs={12} md={6}>
                                <Typography variant="h2" sx={{
                                    fontSize: '32px',
                                    fontWeight: 'bold',
                                    color: '#FFF',
                                    mb: 3,
                                    borderBottom: '1px solid #333',
                                    pb: 1
                                }}>
                                    {content.education.title}
                                </Typography>

                                <Box sx={{ mb: 2 }}>
                                    <Typography sx={{ fontSize: '16px', color: 'grey',}}>
                                        {content.education.keudadate}
                                    </Typography>
                                    <Typography sx={{ fontSize: '18px', color: '#FFF', paddingRight:{xs:5, md:0, lg:0} }}>
                                        {content.education.keudacert}
                                    </Typography>
                                </Box>

                                <Box>
                                    <Typography sx={{ fontSize: '16px', color: 'grey',}}>
                                        {content.education.pobaldate}
                                    </Typography>
                                    <Typography sx={{ fontSize: '18px', color: '#FFF', paddingRight:{xs:5, md:0, lg:0} }}>
                                        {content.education.pobalcert}
                                    </Typography>
                                </Box>
                            </Grid>

                            {/* Languages Section */}
                            <Grid item xs={12} md={6}>
                                <Typography variant="h2" sx={{
                                    fontSize: '32px',
                                    fontWeight: 'bold',
                                    color: '#FFF',
                                    mb: 3,
                                    borderBottom: '1px solid #333',
                                    pb: 1
                                }}>
                                    {content.languages.title}
                                </Typography>

                                <List dense>
                                    <ListItem sx={{ p: 0, mb: 1 }}>
                                        <Typography sx={{ fontSize: '18px', color: '#FFF' }}>
                                            {content.languages.english}
                                        </Typography>
                                    </ListItem>
                                    <ListItem sx={{ p: 0, mb: 1 }}>
                                        <Typography sx={{ fontSize: '18px', color: '#FFF' }}>
                                            {content.languages.finnish}
                                        </Typography>
                                    </ListItem>
                                    <ListItem sx={{ p: 0 }}>
                                        <Typography sx={{ fontSize: '18px', color: '#FFF' }}>
                                            {content.languages.german}
                                        </Typography>
                                    </ListItem>
                                </List>
                            </Grid>

                            {/* Qualifications Section */}
                            <Grid item xs={12} md={6} sx={{ mt: 4 }}>
                                <Typography variant="h2" sx={{
                                    fontSize: '32px',
                                    fontWeight: 'bold',
                                    color: '#FFF',
                                    mb: 3,
                                    borderBottom: '1px solid #333',
                                    pb: 1
                                }}>
                                    {content.qualifications.title}
                                </Typography>

                                <List dense>
                                    <ListItem sx={{ p: 0, mb: 1 }}>
                                        <Typography sx={{ fontSize: '18px', color: '#FFF', paddingRight:{xs:5, md:0, lg:0} }}>
                                            {content.qualifications.military}
                                        </Typography>
                                    </ListItem>
                                    <ListItem sx={{ p: 0, mb: 1 }}>
                                        <Typography sx={{ fontSize: '18px', color: '#FFF', paddingRight:{xs:5, md:0, lg:0} }}>
                                            {content.qualifications.pobal}
                                        </Typography>
                                    </ListItem>
                                    <ListItem sx={{ p: 0, mb: 1 }}>
                                        <Typography sx={{ fontSize: '18px', color: '#FFF', paddingRight:{xs:5, md:0, lg:0} }}>
                                            {content.qualifications.warehouse}
                                        </Typography>
                                    </ListItem>
                                    <ListItem sx={{ p: 0 }}>
                                        <Typography sx={{ fontSize: '18px', color: '#FFF', paddingRight:{xs:5, md:0, lg:0} }}>
                                            {content.qualifications.pobaljr}
                                        </Typography>
                                    </ListItem>
                                </List>
                            </Grid>
                        </Grid>
                    </Container>

                {/* Site footer */}
                <Box component="footer" sx={{
                    mt: 10,
                    py: 3,
                    textAlign: 'center',
                    borderTop: '1px solid rgba(255, 255, 255, 0.2)',
                }}>
                    <Typography variant="body2" color="#FFF" sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
                        &copy; {new Date().getFullYear()} Nicholas Hickman
                        <span style={{ margin: '0 4px' }}>|</span>
                        <Typography variant="body2" color="#FFF" component="span">
                            <Link href="https://www.github.com/Synetraa1" target="_blank" rel="noopener noreferrer" style={{ color: '#fff', textDecoration: 'none' }}>
                                My GitHub
                            </Link>
                        </Typography>
                        <span style={{ margin: '0 4px' }}>|</span>
                        <Typography variant="body2" color="#FFF" component="span">
                            <Link href="https://www.linkedin.com/in/nicholas-hickman-289673216/" target="_blank" rel="noopener noreferrer" style={{ color: '#fff', textDecoration: 'none' }}>
                               My  LinkedIn
                            </Link>
                        </Typography>
                        <span style={{ margin: '0 4px' }}>|</span>
                        <Typography variant="body2" color="#FFF" component="span">
                            <a href="mailto:hickman.nico@gmail.com">hickman.nico@gmail.com</a>
                        </Typography>
                    </Typography>
                     </Box>
                     </section >
                    </Element >
            <ScrollToTop />

        </>
        </div>
        </ThemeProvider>
    );
    };
    export default App;
