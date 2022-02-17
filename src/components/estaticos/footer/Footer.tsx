import React from 'react';
import {Grid, Box, Typography} from "@material-ui/core";
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import './Footer.css'

function Footer(){
  return(
    <>
      <Grid container direction="row" justifyContent="center" alignItems="center">
                <Grid alignItems="center" item xs={12}>
                    <Box className="footer ">
                        <Box paddingTop={1} display="flex" alignItems="center" justifyContent="center">
                            <Typography variant="h6" align="center" gutterBottom className='texto1'>Siga-nos nas redes sociais </Typography>
                        </Box>
                        <Box display="flex" alignItems="center" justifyContent="center" className="alturaRede">
                            <a href="https://www.facebook.com/cleyfson.angelodasilva.1" target="blank">
                                <FacebookIcon className='redes' />
                            </a>
                            <a href="https://www.instagram.com/cleyfsonnen/" target="blank">
                                <InstagramIcon className='redes' />
                            </a>
                            <a href="https://www.linkedin.com/in/cleyfson-angelo-da-silva-608a68226/" target="blank">
                                <LinkedInIcon className='redes' />
                            </a>
                        </Box>
                    </Box>
                    <Box className='footer2' style={{ backgroundColor: "black", height: "60px" }}>
                        <Box paddingTop={1}>
                            <Typography variant="subtitle2" align="center" gutterBottom className='texto2' >© 2022 Copyright:</Typography>
                        </Box>
                        <Box>
                            <a target="blank" href="https://brasil.generation.org">
                                <Typography variant="subtitle2" gutterBottom className='texto2' align="center">brasil.generation.org</Typography>
                            </a>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
    </>
  )
}

export default Footer;