import React, {useState} from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import Feedback from 'react-bootstrap/Feedback';
import InputGroup from 'react-bootstrap/InputGroup';

function Login() {

    const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

    return ( 
        <div style={{backgroundColor: 'whitesmoke', height: '100%', display: 'flex', overflow: 'auto'}}>

            <div style={{width: '100%', height: '100%', display: 'flex', flexDirection: 'column',
             justifyContent: 'center', alignItems: 'center'}}>

                <div>
                    <h2>Login</h2>
                </div>
                <br></br>
                <div>
                    <p>Get access to your Orders, Wishlist and Recommendations</p>
                </div>
            </div>

            <div style={{width: '100%', height: '100%', display: 'flex', justifyContent: 'flex-start', alignItems: 'center'}}>
                <Form style={{width: '50%'}} noValidate validated={validated} onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email</Form.Label>
                        <InputGroup hasValidation>
                            <Form.Control type="email" placeholder="Enter email" required/>
                            <Form.Control.Feedback type="invalid">
                                Please enter an email.
                            </Form.Control.Feedback>
                        </InputGroup>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" required/>
                    </Form.Group>

                    <Link to='/home' style={{textDecoration: 'none'}}>
                            <div className="d-grid gap-2">
                                <Button variant="danger" type="submit">
                                    Login
                                </Button>
                            </div>
                    </Link>    
                </Form>
            </div>

        </div>
     );
}

export default Login;