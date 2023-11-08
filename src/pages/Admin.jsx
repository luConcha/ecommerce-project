import { useAuthContext } from '@/hooks/useAuthContext';
import { createItem } from '@/services/productServices';
import useForm from '@/hooks/useForm';
import { useNavigate } from 'react-router-dom';

const Admin = () => {
  const { userPayload } = useAuthContext();
  const navigate = useNavigate();

  const datos = {
    product_name: '',
    description: '',
    price: '',
    categoy: '',
    brand: '',
    sku: '',
    image: '',
  };

  const sendData = async (data) => {
    try {
      const newDatos = {
        product_name: data.product_name,
        description: data.description,
        price: parseFloat(data.price),
        categoy: data.categoy,
        brand: data.brand,
        sku: data.sku,
        image: data.image,
      };

      console.log(newDatos);
      const response = await createItem(newDatos);
      if (response.status === 200) {
        console.log('Producto creado existosamente');
        navigate('/');
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const { input, handleInputChange, handleSubmit } = useForm(sendData, datos);

  return (
    <>
      {userPayload?.role === 'ADMIN' ? (
        <div className='row justify-content-md-center'>
          <div className='col-sm-6'>
            <div className='card'>
              <div className='card-header'>Create new products</div>
              <div className='card-body'>
                <form onSubmit={handleSubmit}>
                  <div className='input-group mb-3'></div>
                  <div className='mb-3'>
                    <input
                      type='text'
                      className='form-control'
                      id='product_name'
                      name='product_name'
                      placeholder='product name'
                      value={input.product_name}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className='mb-3'>
                    <textarea
                      className='form-control'
                      id='description'
                      name='description'
                      rows={3}
                      defaultValue={''}
                      placeholder='description'
                      value={input.description}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className='input-group mb-3'>
                    <span className='input-group-text' id='basic-addon1'>
                      $
                    </span>
                    <input
                      type='text'
                      className='form-control'
                      placeholder='price'
                      aria-label='price'
                      id='price'
                      name='price'
                      aria-describedby='basic-addon1'
                      value={input.price}
                      onChange={handleInputChange}
                    />
                    <span class='input-group-text'>.00</span>
                  </div>
                  <div className='mb-3'>
                    <input
                      type='text'
                      className='form-control'
                      id='categoy'
                      name='categoy'
                      placeholder='categoy'
                      value={input.categoy}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className='mb-3'>
                    <input
                      type='text'
                      className='form-control'
                      id='brand'
                      name='brand'
                      placeholder='brand'
                      value={input.brand}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className='mb-3'>
                    <input
                      type='text'
                      className='form-control'
                      id='sku'
                      name='sku'
                      placeholder='sku'
                      value={input.sku}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className='mb-3'>
                    <input
                      type='text'
                      className='form-control'
                      id='image'
                      name='image'
                      placeholder='image'
                      value={input.image}
                      onChange={handleInputChange}
                    />
                  </div>
                  <button className='w-100 btn btn-info' type='submit'>
                    Create
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <h2>Access denied</h2>
      )}
    </>
  );
};
export default Admin;
