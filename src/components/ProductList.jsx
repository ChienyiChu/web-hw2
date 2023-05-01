import ProductItem from "../components/ProductItem"
//import Products from "../json/products.json"
import {Row,Col} from "antd";

function ProductList ({products,isLoading}){
  
    return(
    <div>
     <h1 className="text-center">IMAGES</h1>
     <hr className="divider--dark"/>
      <Row gutter={[32,32]}>
       {products.map(product => (
        <Col
       
         sm={{span: 12}}
         lg={{span: 8}}
         xl={{span: 6}}
         xxl={{span: 6}}
         >
          <ProductItem product={product} key={product.id}/>
         </Col>
       ))}
      </Row>

      <article className="description__layout py-4 py-sm-5">
        <div className="container">
          <h1>DESCRIPTIONS</h1>
          <hr className="divider--light"/>
          <p className="text-justify description__content py-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium laborum
            corrupti ut iure aliquam. Quod, perferendis. Libero tempore iste, animi sint numquam illum quasi laboriosam
            unde pariatur quidem! Suscipit consequatur nihil dolor impedit temporibus ad cum, voluptatum odit ratione
            ullam
            eligendi amet beatae aliquid eaque nesciunt optio nobis ducimus itaque. Voluptatibus aspernatur assumenda
            quod
            quo error consequuntur, vero iusto reprehenderit repellat maiores, sapiente dolores voluptates minima. Alias
            dolore assumenda fuga quae repellat voluptatum quo, saepe exercitationem perspiciatis reiciendis modi
            tempora.
            Recusandae explicabo iusto corporis nam numquam dignissimos, necessitatibus, iure non culpa repellat
            repudiandae temporibus! Saepe excepturi tempore iusto eos sit!</p>
        </div>
      </article>
    </div>
    );
}

export default ProductList;