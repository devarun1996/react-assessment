import React, {useState, useEffect} from 'react';
import Element from './productElement';
import './products.css';
import Spinner from 'react-bootstrap/Spinner';

function Products ({itemData}) {

    const [products, setProducts] = useState([]);

    const [loader, setLoader] = useState(true);

    const [filteredProducts, setfilteredProducts] = useState([]);

    const [categories, setCategories] = useState([]);

    const [activeCategory, setActiveCategory] = useState('');

    useEffect(() => {
     getProducts();
     getCategories();
    }, []);

    const getProducts = async () => {
      const response = await fetch('http://localhost:5000/products');
      const data = await response.json();
      setProducts(data);
      setfilteredProducts(data);
      setLoader(false);
    }

    const getCategories = async () => {
      const response = await fetch('http://localhost:5000/categories');
      const data = await response.json();
      data.sort((a, b) => a.order - b.order);
      setCategories(data);
    }

    const setCategory = (catId) => {
      setActiveCategory(catId);
      const filteredData = products.filter(prod => prod.category === catId);
      setfilteredProducts(filteredData);
    }

    const setNewItem = (itemInfo) => {
      const newItemData = [...itemData.items, itemInfo];
      itemData.changeItems(newItemData);
    }

    return ( 
        <div className='row' style={{padding: '10px 10px 10px 70px'}}>
            
            <div className='col-sm-2 border' style={{background: 'whitesmoke'}}>

                    {categories.map(cat => (
                      <div key={cat.id}>
                      {cat.enabled ? (
                      <div className={cat.id === activeCategory ? 'active border-bottom mb-4 mt-4' : 'disabled border-bottom mb-4 mt-4'}
                         style={{cursor: 'pointer'}} onClick={() => setCategory(cat.id)}>
                            <p>{cat.name}</p>
                        </div>
                        ) : (<></>)}
                      </div>
                        
                    ))}
            </div>

            <div className='col-md-10'>

                <div className='row col-md-12'>

                  {
                    loader ? (
                      <Spinner animation="border" role="status">
                      </Spinner>
                    ) : (<></>)
                  }

                  {
                  filteredProducts.length === 0 && !loader ? (<h2>No products available!</h2>) : (<></>)
                  }

                  {filteredProducts.map(prod => (    
                            
                      <div className='col-md-3 mb-4' key={prod.id}>
                          <Element 
                              product={prod}
                              setNewItem={setNewItem.bind(this)}
                          />
                      </div>                
                   ))}
                    
                </div>    
            </div>   

        </div>
     );
}

export default Products;