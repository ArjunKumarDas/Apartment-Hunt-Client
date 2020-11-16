import React from 'react';
import { Button, Container, Form, Row, } from 'react-bootstrap';
import './CreateAcccount.css';
import googleIcon from '../../logos/google.png';
import facebook from '../../logos/Group 2.png';
const CreateAccount = () => {
    return (
        <div>
            <Container >
               <Row className="justify-content-md-center mt-5">
                       <Form className="create-card "> 
                           <h3 className="pb-1">Create an Account</h3>
                           <input className="border-bottom" name="name" type="text" placeholder="First Name" />
                            <br />
                            <input className="border-bottom" name="name" type="text" placeholder="Last Name" />
                            <br/>
                            <input className="border-bottom" type="text" name="email"  placeholder="User Name or Email" required />
                            <br/>
                          <input className="border-bottom" type="password" name="password"  placeholder="Password" required />
                          <br/>
                          <input className="border-bottom" type="password" name="password"  placeholder="Confrom password" required />
                          <br/>
                         <Button className="btn btn-color mt-3 mb-2">Create an account</Button>
                         <br/>
                         <h6 className="text-center">Already have an account ? <a href="#">Login</a></h6>
                          
                       </Form>
               </Row>
                <div className="text mt-2"><p>or</p></div>
               
                 <Row className="justify-content-md-center mt-1">
                    <Button className="s-border pl-1 pr-5" variant="light"  ><img src={facebook} alt="" /> Continue with Facebook</Button>
                      
                   </Row>
               <Row className="justify-content-md-center mt-2">
                      <Button className="s-border pl-1 pr-5" variant="light"  ><img src={googleIcon} alt="" /> Continue with Google</Button>
                    </Row>
            </Container>
        </div>
    );
};

export default CreateAccount;





