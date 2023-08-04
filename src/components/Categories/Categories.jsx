import './categories.css';
const Categories = () => {
  return (
    <section className='py-3 text-center container'>
      <div className='row py-lg'>
        <div className='col-lg col-md mx-auto'>
          <h1 className='fw-light'>Categorias</h1>
          <p>
            <a href='#' className='btn btn-primary my-2 btn-space '>
              Kids
            </a>
            <a href='#' className='btn btn-primary my-2 btn-space '>
              Shoes
            </a>
            <a href='#' className='btn btn-primary my-2 btn-space '>
              Computers
            </a>
            <a href='#' className='btn btn-primary my-2 btn-space '>
              Grocery
            </a>
            <a href='#' className='btn btn-primary my-2 btn-space '>
              Automotive
            </a>
            <a href='#' className='btn btn-primary my-2 btn-space '>
              Toys
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};
export default Categories;
