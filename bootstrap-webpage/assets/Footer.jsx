import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

export default function Footer() {
  return (
    <div>
        <center>
        <footer>
          <h1>Vixcon.</h1><p>We are a creative-led experiential Event Production Agency that helps  <br />brands connect, engage and evolve.</p>
          <InputGroup  id='form' className="mb-5">
        <Form.Control 
          placeholder="Put your email address"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
        />
        <Button variant="primary" id="button-addon2" >
          SUBSCRIBE NOW
        </Button>
      </InputGroup>
      <p>We will not spam at your inbox .Don't panic</p>
      <hr />
      
      <p>Copyright Reserved to Themefisher.2019</p>
        </footer>
        </center>
    </div>
  )
}
