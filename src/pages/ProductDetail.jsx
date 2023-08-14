import { useEffect, useState } from 'react';
import { getSingleItem } from '@/services/productServices';
import { useParams } from 'react-router-dom';
const ProductDetail = () => {
  const [product, setProduct] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await getSingleItem(id);
        if (response.status === 200) {
          setProduct(response.data);
        }
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchProduct();
  }, [id]);

  return (
    <div className='card mb-3'>
      <div className='row g-0'>
        <div className='col-md-4'>
          <img
            src={product?.image}
            className='img-fluid rounded-start'
            alt='...'
            style={{ minWidth: 200, minHeight: 200 }}
          />
        </div>
        <div className='col-md-8'>
          <div className='card-body'>
            <h5 className='card-title'>{product?.product_name}</h5>
            <p className='card-text'>{product?.description}</p>

            <p className='card-text'>
              <small className='text-body-secondary'>
                Price: ${product?.price}
              </small>
            </p>
            <p className='card-text'>
              <small className='text-body-secondary'>
                Category: {product?.category}
              </small>
            </p>
            <button type='button' className='btn btn-sm btn-outline-primary'>
              {' '}
              Agregar a carrito
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProductDetail;
