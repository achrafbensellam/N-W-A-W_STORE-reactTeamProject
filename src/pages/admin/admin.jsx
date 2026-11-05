import "./admin.css";
import CardAdmin from "./components/cardDetailsProduct";
import FormAddProduct from "./components/formAdmin";
import { useContext, useState } from "react";
import { MyContext } from "../../utils/MyContext";
import Aside from "./components/aside";

function AdminDashbord() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const [selectedCategory, setSelectedCategory] = useState("");
    const [products, setProducts] = useContext(MyContext);
    const [productToEdit, setProductToEdit] = useState(null);

    const filterProducts = products.filter((product) => {
        return selectedCategory === "" ||
            product.category === selectedCategory;
    })

    function StartEdit(product) {
        console.log("Product selected:", product);

        setProductToEdit(product);
        setIsModalOpen(true)
    }



    return (

        <main className="page-admin">

            <Aside />

            <section className="section-products" >
                <div className="box-head-section">
                    <div className="box-filters">
                        <button onClick={() => setSelectedCategory("")}>
                            All Products
                        </button>
                        <select name="category" id="category"
                            value={selectedCategory}
                            onChange={((event) => setSelectedCategory(event.target.value))}
                        >
                            <option value="">Category</option>
                            <option value="Bottoms">Bottoms</option>
                            <option value="Outerwear">Outerwear</option>
                            <option value="Tops">Tops</option>
                        </select>

                    </div>
                    <div className="box-btn-add">

                        <button onClick={() => {
                            setProductToEdit(null)
                            setIsModalOpen(true)
                        }
                        }>
                            Add Product
                        </button>
                    </div>

                </div>
                <div className="box-products">
                    <div className="head-box-products">
                        <div className="box-image">
                            <span>Image</span>
                        </div>
                        <div className="box-head-info">
                            <div>
                                <span>Name</span>
                            </div>
                            <div>
                                <span>Price</span>
                            </div>
                            <div>
                                <span>Category</span>
                            </div>
                            <div>
                                <span>Stock</span>
                            </div>
                        </div>
                        <div className="box-action">
                            <span>Actions</span>

                        </div>


                    </div>

                    <CardAdmin products={filterProducts}
                        setProducts={setProducts}
                        onEdit={StartEdit} />
                </div>
            </section>
            <div className="box-formAddProduct">
                {isModalOpen && (
                    <div className="modal-overlay">
                        <FormAddProduct
                            key={productToEdit?.id ?? "new"}

                            setProducts={setProducts}
                            setIsModalOpen={setIsModalOpen}
                            productEdit={productToEdit} />
                    </div>
                )}
            </div>
        </main>
    )




}
export default AdminDashbord;