import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import { auth } from '../../../firebase.init';


const Header = () => {
    const [user]= useAuthState(auth);
    const handleSignOut=()=>{
        signOut(auth)
    }
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" sticky='top'  className='element-bg'  variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to="/">
                        
                        <h3 className='fw-bold main-color ' >Ice Storage</h3>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="/">Home</Nav.Link>
                            <Nav.Link as={Link} to="/about" >About</Nav.Link>
                            <Nav.Link as={Link} to="/blogs" >Blogs</Nav.Link>
                            
                        </Nav>
                        <Nav>
                            
                            {
                                user&& <Nav.Link as={Link} to="/manageInventories">Manage Inventories</Nav.Link>
                            }
                            {
                                user&& <Nav.Link as={Link} to="/addInventory">Add Product</Nav.Link>
                            }
                            {
                                user&& <Nav.Link as={Link} to="/myProducts">My Products</Nav.Link>
                            }
                            {
                                user?.displayName && <span className="text-white m-2"> {user.displayName}  </span>
                            }
                            {
                                user? <button className='btn btn-danger' onClick={handleSignOut} >Sign Out</button>
                                 :
                                <Nav.Link as={Link} to="/login">Login</Nav.Link>
                            }
                                
                                
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;