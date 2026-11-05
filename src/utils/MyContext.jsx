import React, { createContext, useState } from 'react';
export const MyContext = createContext();

export const MyProvider = ({ children }) => {
  // const [users, setUsers] = useState([{
  //     name: "Default User",
  //     products: []
  // }]);

  const [products, setProducts] = useState([
    {
      id: crypto.randomUUID(),
      name: "Heavyweight Cotton Tee",
      image: "https://assets.hermes.com/is/image/hermesproduct/667795HA73_worn_102?wid=640&hei=853&fit=fit,1&$product_default_bg$",
      description: "Premium breathable 100% cotton crewneck designed for everyday casual wear with a relaxed fit.",
      price: 13000,
      rating: "4.8",
      availability: "In Stock",
      category: "Tops",
      featured: true,
      discount: 10,
      image2: "https://assets.hermes.com/is/image/hermesproduct/665400H811_worn_102?wid=640&hei=853&fit=fit,1&$product_default_bg$",
      image3: "https://assets.hermes.com/is/image/hermesproduct/665400H811_worn_103?wid=640&hei=853&fit=fit,1&$product_default_bg$",
      image4: "https://assets.hermes.com/is/image/hermesproduct/665400H811_worn_101?wid=828&hei=1104&fit=fit,1&$product_default_bg$"
    },
    {
      id: crypto.randomUUID(),
      name: "Slim-Fit Stretch Denim Jeans",
      image: "https://assets.hermes.com/is/image/hermesproduct/665400H811_worn_101?wid=640&hei=853&fit=fit,1&$product_default_bg$",
      description: "Modern mid-rise blue jeans tailored with premium stretch denim for maximum comfort and durability.",
      price: 15750,
      rating: "4.6",
      availability: "In Stock",
      category: "Bottoms",
      featured: false,
      discount: 0,
      image2: "https://assets.hermes.com/is/image/hermesproduct/665400H811_worn_102?wid=640&hei=853&fit=fit,1&$product_default_bg$",
      image3: "https://assets.hermes.com/is/image/hermesproduct/665400H811_worn_103?wid=640&hei=853&fit=fit,1&$product_default_bg$",
      image4: "https://assets.hermes.com/is/image/hermesproduct/665400H811_worn_101?wid=828&hei=1104&fit=fit,1&$product_default_bg$"
    },
    {
      id: crypto.randomUUID(),
      name: "Fleece Pullover Hoodie",
      image: "https://assets.hermes.com/is/image/hermesproduct/667705HA87_worn_102?wid=640&hei=853&fit=fit,1&$product_default_bg$",
      description: "Ultra-soft brushed fleece hoodie featuring a kangaroo pocket and ribbed cuffs for colder days.",
      price: 30300,
      rating: "4.9",
      availability: "In Stock",
      category: "Outerwear",
      featured: false,
      discount: 30,
      image2: "https://assets.hermes.com/is/image/hermesproduct/665400H811_worn_102?wid=640&hei=853&fit=fit,1&$product_default_bg$",
      image3: "https://assets.hermes.com/is/image/hermesproduct/665400H811_worn_103?wid=640&hei=853&fit=fit,1&$product_default_bg$",
      image4: "https://assets.hermes.com/is/image/hermesproduct/665400H811_worn_101?wid=828&hei=1104&fit=fit,1&$product_default_bg$"
    },
    {
      id: crypto.randomUUID(),
      name: "Oversized Corduroy Shirt",
      image: "https://assets.hermes.com/is/image/hermesproduct/662210HD01_worn_103?wid=640&hei=853&fit=fit,1&$product_default_bg$",
      description: "Soft-textured corduroy button-up shirt featuring dual chest pockets and a boxy silhouette.",
      price: 50550,
      rating: "4.5",
      availability: "Low Stock",
      category: "Tops",
      featured: false,
      discount: 0,
    },
    {
      id: crypto.randomUUID(),
      name: "Utility Relaxed Cargo Pants",
      image: "https://assets.hermes.com/is/image/hermesproduct/665020HA02_worn_101?wid=640&hei=853&fit=fit,1&$product_default_bg$",
      description: "Durable cotton-twill cargo pants equipped with multiple functional pockets and an adjustable waistband.",
      price: 6300,
      rating: "4.7",
      availability: "In Stock",
      category: "Bottoms",
      featured: true,
      discount: 0,
      image2: "https://assets.hermes.com/is/image/hermesproduct/665400H811_worn_102?wid=640&hei=853&fit=fit,1&$product_default_bg$",
      image3: "https://assets.hermes.com/is/image/hermesproduct/665400H811_worn_103?wid=640&hei=853&fit=fit,1&$product_default_bg$",
      image4: "https://assets.hermes.com/is/image/hermesproduct/665400H811_worn_101?wid=828&hei=1104&fit=fit,1&$product_default_bg$"
    },
    {
      id: crypto.randomUUID(),
      name: "Insulated Urban Jacket",
      image: "https://assets.hermes.com/is/image/hermesproduct/662060HB02_worn_102?wid=640&hei=853&fit=fit,1&$product_default_bg$",
      description: "Water-resistant matte nylon bomber jacket with quilted thermal lining and a sleek front zipper closure.",
      price: 88000,
      rating: "4.9",
      availability: "In Stock",
      category: "Outerwear",
      featured: true,
      discount: 2,
      image2: "https://assets.hermes.com/is/image/hermesproduct/665400H811_worn_102?wid=640&hei=853&fit=fit,1&$product_default_bg$",
      image3: "https://assets.hermes.com/is/image/hermesproduct/665400H811_worn_103?wid=640&hei=853&fit=fit,1&$product_default_bg$",
      image4: "https://assets.hermes.com/is/image/hermesproduct/665400H811_worn_101?wid=828&hei=1104&fit=fit,1&$product_default_bg$"
    },
    {
      id: crypto.randomUUID(),
      name: "Smart Wool-Blend Trousers",
      image: "https://assets.hermes.com/is/image/hermesproduct/662500HG73_worn_101?wid=640&hei=853&fit=fit,1&$product_default_bg$",
      description: "Sophisticated ankle-length pleated trousers designed to transition seamlessly from work to evening outings.",
      price: 42750,
      rating: "4.4",
      availability: "Out of Stock",
      category: "Bottoms",
      featured: false,
      discount: 50,
      image2: "https://assets.hermes.com/is/image/hermesproduct/665400H811_worn_102?wid=640&hei=853&fit=fit,1&$product_default_bg$",
      image3: "https://assets.hermes.com/is/image/hermesproduct/665400H811_worn_103?wid=640&hei=853&fit=fit,1&$product_default_bg$",
      image4: "https://assets.hermes.com/is/image/hermesproduct/665400H811_worn_101?wid=828&hei=1104&fit=fit,1&$product_default_bg$"
    },
    {
      id: crypto.randomUUID(),
      name: "Linen Long-Sleeve Shirt",
      image: "https://assets.hermes.com/is/image/hermesproduct/666180H673_worn_102?wid=640&hei=853&fit=fit,1&$product_default_bg$",
      description: "Lightweight and airy pure linen shirt crafted for hot summer days and warm evening events.",
      price: 22750,
      rating: "4.6",
      availability: "In Stock",
      category: "Tops",
      featured: false,
      discount: 10,
    },
    {
      id: crypto.randomUUID(),
      name: "Denim Trucker Jacket",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDBD0YAqibWaIfbcFzU5rU4vGCp87dT5_uhZAT7t9cyg&s=10",
      description: "Timeless button-front denim jacket featuring chest flap pockets, button cuffs, and side waist tabs.",
      price: 74.99,
      rating: "4.8",
      availability: "In Stock",
      category: "Outerwear",
      featured: false,
      discount: 10,
      image2: "https://assets.hermes.com/is/image/hermesproduct/665400H811_worn_102?wid=640&hei=853&fit=fit,1&$product_default_bg$",
      image3: "https://assets.hermes.com/is/image/hermesproduct/665400H811_worn_103?wid=640&hei=853&fit=fit,1&$product_default_bg$",
      image4: "https://assets.hermes.com/is/image/hermesproduct/665400H811_worn_101?wid=828&hei=1104&fit=fit,1&$product_default_bg$"
    }
  ]);
  const [cart, setCart] = useState([]);
  const [nawfalCard, setNawfalCard] = useState('')
  const [search, Setsearch] = useState('');
  const [category, setCategory] = useState("all")

  return (
    <MyContext.Provider value={[products, setProducts, cart, setCart, nawfalCard, setNawfalCard, search, Setsearch, category, setCategory]}>
      {children}
    </MyContext.Provider>
  );
};
