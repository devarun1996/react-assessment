import React, {useState, useEffect} from 'react';
import './products.css';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function Header({items, changeItems}) {

  const [cart, setCart] = useState(false);
  const [totalAmount, setTotalAmount] = useState(0);

  const cartClose = () => setCart(false);
  const cartShow = () => setCart(true);

  const checkout = () => {
    changeItems([]);
    cartClose();
  }

  const deleteProduct = (productId) => {
    const newItemData = items.filter(item => item.id !== productId);
    changeItems(newItemData);
  }

  useEffect(() => {
    if (items.length > 0) {

        setTotalAmount(0);
        let total = 0;

        items.forEach(prod => {
         total = total + prod.price;
        });

        setTotalAmount(total);

    }
   }, [items]);

    return(
    <>
        <div style={{width: '100%', maxHeight: '28vh', minHeight: '100px', boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)'}}>
            <div style={{ maxHeight: '28vh', minHeight: '100px', width: '80%', margin: 'auto',
                            display: 'flex', justifyContent: 'space-between'}}>
                
                <div style={{display: 'flex', width: '45%', maxHeight: '28vh', minHeight: '97px',
                                justifyContent: 'space-around', alignItems: 'flex-end', paddingBottom: '9px'}}>

                    <img src="/static/images/logo192.png" alt='' style={{width: '177px', height: '79px'}}></img>
                    <div style={{display: 'flex', justifyContent: 'space-between', width: '28%', height: '38%'}}>
                        
                        <Link to='/home' style={{textDecoration: 'none'}}>
                            <p className="headerLinks" style={{color: 'darkslategray',
                                fontFamily: 'cursive'}}> Home </p> 
                        </Link>

                        <Link to='/products' style={{textDecoration: 'none'}}>
                            <p className="headerLinks"  style={{color: 'darkslategray',
                                fontFamily: 'cursive'}}> Products </p>
                        </Link>
                        
                    </div>

                </div>

                <div style={{display: 'flex', width: '45%', maxHeight: '28vh', minHeight: '100px', flexDirection: 'column',
                                justifyContent: 'space-between', alignItems: 'flex-end'}}>
                   
                    <div style={{display: 'flex', justifyContent: 'space-between', width: '19%'}}>
                        
                        <Link to='/login' style={{textDecoration: 'none'}}>
                            <p className="headerLinks"  style={{textDecoration: 'none', color: 'black', fontFamily: 'cursive', fontSize: 'small'}}>
                                SignIn </p>  
                        </Link>
                        
                        <Link to='/register' style={{textDecoration: 'none'}}>
                            <p className="headerLinks"  style={{textDecoration: 'none', color: 'black', fontFamily: 'cursive', fontSize: 'small'}}>
                                Register </p>
                        </Link>
                        
                    </div>

                        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', background: '#f1f1f1',
                                    width: '25%', height: '57%', cursor: 'pointer'}} onClick={cartShow}>

                            <div>
                                <img alt='' width={'35px'} src="/static/images/cart.svg"></img>
                            </div>            
                            <div>
                                {items.length} Items
                            </div>
                        </div>
                </div>
            </div>
        </div>

        <Modal centered show={cart} onHide={cartClose}>
           
           {items.length === 0 ? (
               <>
                    <Modal.Header closeButton>
                        <Modal.Title>My Cart (0 items)</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <h3>
                            No items in your cart
                        </h3>

                        <p>
                            Your favourite items are just a click away
                        </p>
                    </Modal.Body>
                    <Modal.Footer>
                        <Link to='/products' style={{width: '100%'}}>
                            <Button variant="danger" style={{width: '100%'}} onClick={cartClose}>
                                Start Shopping
                            </Button>
                        </Link>
                        
                    </Modal.Footer>
            </>
           ) : (
            <div style={{background: 'whitesmoke', maxHeight: '80vh', overflow: 'auto'}}>
                <Modal.Header closeButton>
                        <Modal.Title>My Cart ({items.length} items)</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        
                        <div style={{display: 'flex', width: '100%', flexDirection: 'column', justifyContent: 'space-around',
                                     alignItems: 'center'}}>
                            {items.map(item => (
                                <div className='mb-4' key={item.id}
                                style={{background: 'white', width: '100%', borderRadius: '5px', boxShadow: '0 6px 6px 0 rgba(0,0,0,0.2)',
                                        minHeight: '12vh', paddingRight: '5px', paddingTop: '5px'}}>
                                    
                                    <Button variant="danger" size="sm" style={{float: 'right'}} onClick={() => {deleteProduct(item.id)}}>
                                        X
                                    </Button>
                                    <div key={item.id} style={{display: 'flex', justifyContent: 'space-around'}}>
                                        <img src={item.imageURL} alt="" width="70px"></img>
                                        
                                        <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'end'}}>
                                            <h6 style={{fontWeight: 'bold'}}>{item.name}</h6>
                                            <span style={{float: 'right', fontWeight: 'bold'}}>Rs.{item.price}</span>
                                        </div>
                                    </div>

                                </div>
                            ))}     
                        </div>
                        
                        
                    </Modal.Body>
                    <Modal.Footer>
                        <Link to='/home' style={{width: '100%'}}>
                            <Button variant="danger" style={{width: '100%'}} onClick={checkout}>
                                <span style={{float: 'left'}}>Proceed to Checkout</span>
                                <span style={{float: 'right'}}>Rs{totalAmount}&nbsp;&nbsp; {'>'}</span>
                            </Button>
                        </Link>
                        
                    </Modal.Footer>
            </div>
           )}
           
        </Modal>
    </>

    )
}

export default Header;