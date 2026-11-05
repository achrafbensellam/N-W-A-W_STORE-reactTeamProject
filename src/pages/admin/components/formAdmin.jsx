import "./formAdmin.css";
import { useState, } from "react";
import { FiX } from "react-icons/fi";

function FormAddProduct({ setProducts, setIsModalOpen, productEdit }) {
    const [product, setProduct] = useState(() => {
        if (productEdit) {
            return { ...productEdit };
        }

        return {
            name: "",
            description: "",
            price: "",
            image: "",
            stock: "",
            category: ""
        };
    });


    function HandleSubmit(event) {
        event.preventDefault();
        if (
            !product.name.trim() ||
            !product.price ||
            Number(product.price) <= 0 ||
            product.stock === "" ||
            Number(product.stock) < 0 ||
            !product.category
        ) {
            return;
        }

        if (productEdit) {
            setProducts((prevProducts) =>
                prevProducts.map((item) =>
                    item.id === productEdit.id
                        ? product
                        : item
                ))

        }
        else {

            setProducts((prevProducts) => [
                ...prevProducts,
                product

            ])
            setProduct({
                name: "",
                description: "",
                price: "",
                image: "",
                stock: "",
                category: ""
            });
        }
        setIsModalOpen(false);
    }

    return (
        <aside className="box-aside">
            <button
                type="button"
                className="close-modal"
                onClick={() => setIsModalOpen(false)}
                aria-label="Close"
            >
                <FiX />
            </button>
            <h2>{productEdit ? "Edit Product" : "Add Product"}</h2>

            <form onSubmit={HandleSubmit} className="form">
                <label htmlFor="name">Name</label>
                <input type="text"
                    placeholder="Product Name"
                    id="name"
                    name="name"
                    required
                    value={product.name}
                    onChange={(event) => setProduct({

                        ...product,
                        name: event.target.value
                    })} />
                <label htmlFor="description">Description</label>
                <textarea name="description"
                    id="description"
                    placeholder="Product Description"
                    required
                    value={product.description}
                    onChange={(event) => setProduct({
                        ...product,
                        description: event.target.value

                    })}></textarea>
                <label htmlFor="price">Price</label>
                <input type="number"
                    id="price"
                    name="price"
                    min="0"
                    required
                    placeholder="Product Price"
                    value={product.price}
                    onChange={(event) => setProduct({
                        ...product,
                        price: event.target.value
                    })} />
                <label htmlFor="image">Image URL</label>
                <input type="url"
                    id="image"
                    name="image"
                    required
                    placeholder="Product Image URL"
                    value={product.image}
                    onChange={(event) => setProduct({
                        ...product,
                        image: event.target.value
                    })} />
                <label htmlFor="stock">Stock</label>
                <input type="number"
                    id="stock"
                    name="stock"
                    placeholder="?"
                    min="0"
                    required
                    value={product.stock}
                    onChange={(event) => setProduct({
                        ...product,
                        stock: event.target.value
                    })} />
                <label htmlFor="category">Category</label>
                <select name="category" id="category"
                    value={product.category}
                    required
                    onChange={(event) => setProduct({
                        ...product,
                        category: event.target.value
                    })}>
                    <option value="">Select Category</option>
                    <option value="Bottoms">Bottoms</option>
                    <option value="Outerwear">Outerwear</option>
                    <option value="Tops">Tops</option>
                </select>
                <button type="submit">{productEdit ? "Edit Product" : "Add Product"}</button>
            </form>
        </aside>
    )
}
export default FormAddProduct