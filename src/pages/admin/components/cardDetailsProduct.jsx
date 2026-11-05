import "./cardDetailsProduct.css";


function CardAdmin({ products, setProducts, onEdit }) {

    function StartEdit(product) {
        onEdit(product);
    }
    function DeleteProduct(id) {
        setProducts((prevProducts) => {
            return prevProducts.filter((product) => product.id !== id)
        })
    }

    return (
        <div className="box-card-admin-details-product">
            {
                products.map((product) => {
                    return (
                        <div key={product.id} className="card-product">
                            <div className="box-image-product">
                                <img src={product.image} alt={product.name} />
                            </div>

                            <div className="box-info">
                                <div className="box-name-product">
                                    <span>{product.name}</span>
                                </div>
                                <div>
                                    <span>{product.price}</span>
                                </div>
                                <div>
                                    <span>{product.category}</span>
                                </div>
                                <div>
                                    <span>{product.stock}</span>
                                </div>
                            </div>

                            <div className="box-buttons-product">
                                <button className="btn-edit"
                                    onClick={() => StartEdit(product)}
                                >Edit</button>
                                <button className="btn-delete"
                                    onClick={() => DeleteProduct(product.id)}>
                                    Delete
                                </button>
                            </div>

                        </div>
                    );
                })
            }
        </div>
    )
}

export default CardAdmin;