import React from 'react';
import { Container, Button, Stack } from 'react-bootstrap';

function AboutUs() {
  const buttonStyle = {
    width: '197px',
    height: '68px',
    background: '#5DBDB9',
    borderRadius: '20px',
    border: 'none',
    marginTop: '62px',
    fontSize: 18,
    fontFamily: 'Lato',
    fontWeight: '500',
  };

  return (
    <Container fluid 
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '935px',
        flexShrink: 0, // Cambiado a camelCase
        background: 'linear-gradient(90deg, #0170BB -1.18%, rgba(93, 189, 185, 0.00) 122.43%)',
        color: 'white',
      }}>
        <div 
          style={{
            width: '60%', // Ajusta según tus necesidades
            textAlign: 'center',
            fontSize: 22, 
            fontFamily: 'Lato', 
            fontWeight: '300', 
            wordWrap: 'break-word',
            marginBottom: '20px',
          }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam a neque et neque tincidunt laoreet vel pretium dui. Vivamus ut sem mollis, mollis mauris sed, pulvinar enim. Aenean porttitor sem sed scelerisque mattis. Duis tempor finibus nisl eget congue. Duis eget maximus nunc, eu facilisis nunc. <br/><br/>Morbi molestie, ante tempor pretium ornare, ante sem ullamcorper ante, id sodales magna quam quis ante. Etiam pulvinar, lorem quis posuere bibendum, nisi ante molestie metus, non dictum lacus ex eget quam. Quisque lacus dui, pulvinar at efficitur pellentesque, fermentum quis est. Cras eu vulputate metus.
        </div>
        <Stack 
          direction="horizontal" 
          gap={5}
          style={{ display: 'flex', justifyContent: 'center' }}
        >
          <Button variant="primary" style={buttonStyle}>Find Help</Button>
          <Button variant="secondary" style={buttonStyle}>Blog</Button>  
        </Stack>
    </Container>
  );
}

export default AboutUs;
