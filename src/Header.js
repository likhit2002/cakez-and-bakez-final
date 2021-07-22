import React,{useEffect,useState} from 'react'
import { auth } from './firebase'

import { Button, Modal, ModalHeader, ModalBody, ModalFooter,Collapse,Navbar,NavbarToggler,
  Nav,NavItem } from 'reactstrap'

import Auth from './Auth'
export default function Header({cart,likes}) {
    const [modal, setModal] = useState(false);
    const [signInOrSignUp,setSignInOrSignUp]=useState(false)
    const [isOpen, setIsOpen] = useState(false);
    function changeForSignUp(){
      setSignInOrSignUp(!signInOrSignUp)
    }
    function toggle ()  {
        setModal(!modal)}


    

    function toggleer () { 
        setIsOpen(!isOpen)}

    const [presentUser,setPresentUser]=useState(null)
  useEffect(()=>{
    auth.onAuthStateChanged(user=>{
      if (user){
        setPresentUser({uid:user.uid,email:user.email})
      }
      else{
        setPresentUser(null)
      }
    })
  }, [])
    return (
        <div>
            <header>

                <div class="header-1">

                    <a href="#" class="logo"><i class="fas fa-shopping-basket"></i>Cakez n Bakez</a>

                    <form action="" class="search-box-container">
                        <input type="search" id="search-box" placeholder="search here..."/>
                        <label for="search-box" class="fas fa-search"></label>
                    </form>

                </div>
                
                <div class="header-2" style={{display:"flex",justifyContent:"space-between"}}>
                    <div>
                    <div id="menu-bar" className="fas fa-bars" onClick={toggleer}></div>
                      <Navbar color="light" light expand="md">
                        
                        
                        <NavbarToggler onClick={toggleer} />
                        <Collapse isOpen={true} navbar>
                          <Nav className="mr-auto" navbar>
                            <NavItem>
                            
                              <a href="#home">home</a>
                            </NavItem>
                            <NavItem>
                            
                              <a href="#category">about us</a>
                            </NavItem>
                            <NavItem>
                            
                            <a href="#product">products</a>            
                            </NavItem>

                            <NavItem>
                            
                                <a href="#deal">special</a>      
                            </NavItem>
                            
                            <NavItem>
                            
                            <a href="#contact">contact</a>    
                        </NavItem>
                            
                          </Nav>
                          
                        </Collapse>
                      </Navbar>
                </div>



                




                        <div>

                            {presentUser?
                            <div class="icons " style={{display:"flex",alignItems:"center",justifyContent:"flex-end"}}>
                            <a href="#" class="fas fa-shopping-cart"><span class="cart_items">{cart}</span></a>
                            <a href="#" class="fas fa-heart"><span class="cart_items">{likes}</span></a>
                            <a href="#" class="fas fa-user-circle" title={presentUser.email}></a>
                            <Button onClick={()=>{auth.signOut()}} style={{marginLeft:"15px"}}>signOut</Button>
                            
                            </div>:<Button onClick={toggle}>SignIn / signUp</Button>}

                            <div>
                            <Modal isOpen={modal} toggle={toggle} >
                                <ModalHeader toggle={toggle}>{signInOrSignUp?"Sign Up":"Sign In"}</ModalHeader>
                                <ModalBody>
                                    <Auth toggle={toggle} signInOrSignUp={signInOrSignUp}/>
                                </ModalBody>
                                <ModalFooter>
                              {!signInOrSignUp?<p>don't you have an account yet?? <button onClick={changeForSignUp}>Sign Up here</button></p>:<div><button onClick={changeForSignUp}>Sign In</button></div>}
                               
                                </ModalFooter>
                            </Modal>

                    </div>
                </div>

            </div>

</header>
</div>
    )
}
