import "./formAdmin.css";
import { useState, } from "react";
import { FiX } from "react-icons/fi";

function FormAddProduct({ setProducts, setIsModalOpen, productEdit, setNotification }) {
    const [product, setProduct] = useState(() => {
        if (productEdit) {
            return { ...productEdit };
        }
        return {
            name: "",
            description: "",
            price: "",
            image: "",
            image2: "",
            image3: "",
            image4: "",
            stock: "",
            category: "",
            availability: "",
            rating: "",
            featured: false,
            discount: ""
        };

    });

    const rating = product.rating === "" ? null : Number(product.rating);
    const discount = product.discount === "" ? 0 : Number(product.discount);
    function HandleSubmit(event) {
        event.preventDefault();
        if (
            !product.name.trim() ||
            !product.description.trim() ||
            !product.price ||
            Number(product.price) <= 0 ||
            product.stock === "" ||
            Number(product.stock) < 0 ||
            !product.category ||
            !product.image.trim() ||
            (rating !== null && (rating < 0 || rating > 5)) ||
            (discount < 0 || discount > 100) ||
            !product.availability
        ) {
            return;
        }

        const newProduct = {
            ...product,
            price: Number(product.price),
            stock: Number(product.stock),
            rating: product.rating === "" ? "" : Number(product.rating),
            discount: product.discount === "" ? 0 : Number(product.discount)


        };

        if (productEdit) {

            setProducts((prevProducts) =>
                prevProducts.map((item) =>
                    item.id === productEdit.id
                        ? {
                            ...newProduct,
                            id: productEdit.id
                        }
                        : item
                )
            );

        } else {

            setProducts((prevProducts) => [
                ...prevProducts,
                {
                    ...newProduct,
                    id: crypto.randomUUID()
                }
            ]);

        }
        setNotification(
            productEdit
                ? "Product updated successfully!"
                : "Product added successfully!"
        );
        setIsModalOpen(false);
    }



    return (
        <aside className="box-aside">
            <div className="form-header">

                <div className="box-icoun-close">
                    <button
                        type="button"
                        className="close-modal"
                        onClick={() => setIsModalOpen(false)}
                        aria-label="Close"
                    >
                        <FiX />
                    </button>
                </div>
                <h2>{productEdit ? "Edit Product" : "Add Product"}</h2>
            </div>

            <div className="form-body">

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
                    <label htmlFor="image2">Image 2 URL</label>
                    <input
                        type="url"
                        id="image2"
                        name="image2"
                        placeholder="Second Image URL"
                        value={product.image2}
                        onChange={(event) => setProduct({
                            ...product,
                            image2: event.target.value
                        })}
                    />
                    <label htmlFor="image3">Image 3 URL</label>
                    <input
                        type="url"
                        id="image3"
                        name="image3"
                        placeholder="Third Image URL"
                        value={product.image3}
                        onChange={(event) => setProduct({
                            ...product,
                            image3: event.target.value
                        })}
                    />
                    <label htmlFor="image4">Image 4 URL</label>
                    <input
                        type="url"
                        id="image4"
                        name="image4"
                        placeholder="Fourth Image URL"
                        value={product.image4}
                        onChange={(event) => setProduct({
                            ...product,
                            image4: event.target.value
                        })}
                    />
                    <label htmlFor="availability">Availability</label>
                    <select
                        name="availability"
                        id="availability"
                        value={product.availability}
                        onChange={(event) => setProduct({
                            ...product,
                            availability: event.target.value
                        })}
                    >
                        <option value="">Select Availability</option>
                        <option value="In Stock">In Stock</option>
                        <option value="Out of Stock">Out of Stock</option>
                        <option value="Coming Soon">Coming Soon</option>
                    </select>

                    <label htmlFor="rating">Rating</label>
                    <input
                        type="number"
                        id="rating"
                        name="rating"
                        min="0"
                        max="5"
                        step="0.1"
                        placeholder="Product Rating"
                        value={product.rating}
                        onChange={(event) => setProduct({
                            ...product,
                            rating: event.target.value
                        })}
                    />
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
                    <label htmlFor="discount">Discount (%)</label>
                    <input
                        type="number"
                        id="discount"
                        name="discount"
                        min="0"
                        max="100"
                        value={product.discount}
                        placeholder="Product Discount"
                        onChange={(event) => setProduct({
                            ...product,
                            discount: event.target.value
                        })}
                    />
                    <label htmlFor="featured">Featured Product</label>
                    <input
                        type="checkbox"
                        id="featured"
                        name="featured"
                        checked={Boolean(product.featured)}
                        onChange={(event) => setProduct({
                            ...product,
                            featured: event.target.checked
                        })}
                    />
                    <button type="submit">{productEdit ? "Edit Product" : "Add Product"}</button>
                </form>
            </div>
        </aside>
    )
}
export default FormAddProduct