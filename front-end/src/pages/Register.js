import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';


function Register() {
    return ( 
        <div style={{height: '100%', display: 'flex', backgroundColor: 'whitesmoke'}}>

            <div style={{width: '100%', height: '100%', display: 'flex', flexDirection: 'column',
             justifyContent: 'center', alignItems: 'center'}}>

                <div>
                    <h2>Signup</h2>
                </div>
                <br></br>
                <div>
                    <p>We do not share your personal details with anyone else.</p>
                </div>
            </div>

            <div style={{width: '100%', height: '100%', overflow: 'auto', display: 'flex', justifyContent: 'flex-start', alignItems: 'center'}}>
                
                <div style={{width: '50%'}}>
                    <Form>

                        <Form.Group className="mb-3" controlId="formBasicFirst">
                            <Form.Label>First Name</Form.Label>
                            <Form.Control type="text" placeholder="First Name" />
                        </Form.Group>    

                        <Form.Group className="mb-3" controlId="formBasicLast">
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control type="text" placeholder="Last Name" />
                        </Form.Group>  

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>    

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>  

                        <Form.Group className="mb-3" controlId="formBasicCnfPassword">
                            <Form.Label>Confirm Password</Form.Label>
                            <Form.Control type="password" placeholder="Confirm Password" />
                        </Form.Group>  

                        <div className="d-grid gap-2">

                        <Link to='/login' style={{textDecoration: 'none'}}>
                            <div className="d-grid gap-2">
                                <Button variant="danger" type="submit">
                                    Signup
                                </Button> 
                            </div>
                            
                        </Link>
                            
                        </div>
                        
                    </Form>
                </div>

               
            </div>
        </div>
     );
}

export default Register;