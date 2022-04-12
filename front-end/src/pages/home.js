import React, {useState, useEffect} from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

function Home() {

    const [banners, setBanners] = useState([]);

    const [categories, setCategories] = useState([]);

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };

    useEffect(() => {
        getBanners();
        getCategories();
       }, []);
   
       const getBanners = async () => {
         const response = await fetch('http://localhost:5000/banners');
         const data = await response.json();
         data.sort((a, b) => a.order - b.order);
         setBanners(data);
       }

       const getCategories = async () => {
        const response = await fetch('http://localhost:5000/categories');
        const data = await response.json();
        data.sort((a, b) => a.order - b.order);
        setCategories(data);
      }

    return ( 
        <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center',
                    paddingTop: '20px'}}>

            <div className='mb-5' style={{maxWidth: '65vw', boxShadow: '0 6px 6px 0 rgba(0,0,0,0.2)'}}>
                <Carousel activeIndex={index} onSelect={handleSelect} variant='dark'>
                    {banners.map((banner) => (
                       <Carousel.Item key={banner.id}>
                        <img
                        className="d-block w-100"
                        src={banner.bannerImageUrl}
                        alt={banner.bannerImageAlt}
                        />
                    </Carousel.Item> 
                    ))}
                    
                </Carousel>
            </div>
                    
            {categories.map((cat, index) => (
                cat.enabled ? 
                    (index % 2 === 0 ? 
                        (
                        <div className='mb-5' style={{width: '65vw', display: 'flex', flexDirection: 'row', justifyContent: 'space-around',
                            padding: '10px 10px 10px 10px', boxShadow: '0 6px 6px 0 rgba(0,0,0,0.2)'}} key={cat.id}>
            
                            <div>
                                <img alt="" src={cat.imageUrl} width='250px'></img>
                            </div>

                            <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                                <h2>{cat.name}</h2>
                                <p style={{fontSize: '12px'}}>{cat.description}</p>
                                <Link to='/products'>
                                    <Button variant="danger">
                                        Explore {cat.key}
                                    </Button>
                                </Link>
                            </div>

                        </div>
                    ) : 

                    (
                        <div className='mb-5' style={{width: '65vw', display: 'flex', flexDirection: 'row', justifyContent: 'space-around',
                            padding: '10px 10px 10px 10px', boxShadow: '0 6px 6px 0 rgba(0,0,0,0.2)'}}>
    
                            <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                                <h2>{cat.name}</h2>
                                <p style={{fontSize: '12px'}}>{cat.description}</p>
                                <Link to='/products'>
                                    <Button variant="danger">
                                        Explore {cat.key}
                                    </Button>
                                </Link>
                            </div>

                            <div>
                                <img alt="" src={cat.imageUrl} width='250px'></img>
                            </div>

                    </div>
                    )
                    
                    ) : 

                    (<></>)
            ))}

        </div>
     );
}

export default Home;