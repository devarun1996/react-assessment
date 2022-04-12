import Button from 'react-bootstrap/Button';

function productElement({product, setNewItem}) {

    return ( 
        <div style={{width: '16rem', minHeight: '7rem', padding: '10px 10px 10px 10px', boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)'}}>
            <h6>
                {product.name}
            </h6>

            <div className='image'>

            <img src={product.imageURL} alt='' style={{width: '177px', height: '179px'}}></img>

            </div>

            <p style={{fontSize: '11px', background: 'whitesmoke', padding: '5px 5px 5px 5px', borderRadius: '5px'}}>
               {product.description}
            </p>

            <div className="d-grid gap-2">
                <Button variant="danger" onClick={() => setNewItem(product)}>
                    Buy Now @ Rs.{product.price}
                </Button> 
            </div>
        </div>
     );
}

export default productElement;