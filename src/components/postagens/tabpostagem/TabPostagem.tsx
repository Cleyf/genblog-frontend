import React, {useState} from 'react'
import { AppBar, Tab, Tabs, Typography, Box } from '@material-ui/core';
import { TabContext, TabPanel } from '@material-ui/lab';
import ListaPostagem from '../listapostagem/ListaPostagem';
import './TabPostagem.css';


function TabPostagem() {
    const [value, setValue] = useState('1')
    function handleChange(event: React.ChangeEvent<{}>, newValue: string){
        setValue(newValue);
    }
  return (
    <>
      <TabContext value={value}>
        <AppBar  position="static" className="backtab">
          <Tabs  centered indicatorColor="secondary" onChange={handleChange}>
            <Tab label= "Todas as postagens" value="1"/>
            <Tab label="Sobre-nós" value="2" />
          </Tabs>
        </AppBar>
        <TabPanel value="1" >
          <Box display="flex" flexWrap="wrap" justifyContent="center">
            <ListaPostagem />
          </Box>
        </TabPanel>
        <TabPanel value="2">
          <Typography  variant="h5" gutterBottom color="textPrimary" component="h5" align="center" className="titulo, about2">Sobre-nós</Typography>
          <Typography variant="body1" gutterBottom  align="justify">Olá eu sou o Cley, e esse trabalho foi realizado graças a @GenerationBrasil, e o tema ViverObrigaHistória uniu duas grandes paixões que é tecnologia e história. Aqui pretendo fazer postagens reais sobre curiosidades, mentalidades e continuidades históricas. Divirtam-se! 
          </Typography>
        </TabPanel>
      </TabContext>
    </>
  );
}
export default TabPostagem;