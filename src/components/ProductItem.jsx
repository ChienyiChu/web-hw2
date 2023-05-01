const ProductItem = ({product}) =>{
    return(
        <article className="image__layout py-3 py-sm-5" key={product.id}>
        <div className="container">

          <div className="row">
            <div className="image">
              <a href="" className="image__link">
                <img src={product.image} alt="" className="image__style"/>
              </a>
              <p className="image_title">{product.name}</p>
            </div>
            </div>
        </div>
      </article>
    );
}

export default ProductItem;