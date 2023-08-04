import { useStoreContext } from '@/hooks/useStoreContext';

const ProductList = () => {
  const { products, loading, search } = useStoreContext();

  return (
    <div className='album py-5 bg-body-tertiary'>
      <div className='container'>
        <div className='row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3'>
          {loading ? (
            <h1>Cargando...</h1>
          ) : (
            products
              .filter((product) => {
                if (search === '' && product.isActive) {
                  return product;
                } else if (
                  product.product_name
                    .toLowerCase()
                    .includes(search.toLowerCase())
                ) {
                  return product;
                }
                return null;
              })
              .map((product) => (
                <div key={product.id} className='col'>
                  <div className='card shadow-sm'>
                    <img
                      src={product.image}
                      alt='product'
                      style={{ width: '210px', height: '210px' }}
                      className='bd-placeholder-img card-img-top'
                    />
                    <div className='card-body'>
                      <h6 className='card-title'>{product.product_name}</h6>
                      {/* <p className='card-text'>{product.description}</p> */}
                      <div className='d-flex justify-content-between align-items-center'>
                        <div className='btn-group'>
                          <button
                            type='button'
                            className='btn btn-sm btn-outline-secondary'
                          >
                            View
                          </button>
                        </div>
                        <small className='text-body-secondary'>
                          {product.category}
                        </small>
                        <small className='text-body-secondary'>
                          $ {product.price}
                        </small>
                      </div>
                    </div>
                  </div>
                </div>
              ))
          )}
        </div>
      </div>
    </div>
  );
};
export default ProductList;
