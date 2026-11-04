import React, { createContext, useState } from 'react';
export const MyContext = createContext();

export const MyProvider = ({ children }) => {
    // const [users, setUsers] = useState([{
    //     name: "Default User",
    //     products: []
    // }]);

    const [products, setProducts] = useState([
  { id: crypto.randomUUID(),
    name: "Classic Heavyweight Cotton Tee",
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_iytRHkLjY5FEooBdK0QdlhgTNJ8MtpbMwYJ5Qhsv2w&s=10',
    description: "Premium breathable 100% cotton crewneck designed for everyday casual wear with a relaxed fit.",
    price: 24.99,
    rating: "4.8",
    availability: "In Stock",
    category: "Tops"
  },
  { id: crypto.randomUUID(),
    name: "Slim-Fit Stretch Denim Jeans",
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsyK5_1cDnabMU-VkCWL8AytiMkoxA71OwEnzWEVulcQ&s=10',
    description: "Modern mid-rise blue jeans tailored with premium stretch denim for maximum comfort and durability.",
    price: 59.99,
    rating: "4.6",
    availability: "In Stock",
    category: "Bottoms"
  },
  { id: crypto.randomUUID(),
    name: "Minimalist Fleece Pullover Hoodie",
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXKIrUFz4h0YH1DXMUmHJKIznza9om6eQuwBzvaNCgHg&s=10',
    description: "Ultra-soft brushed fleece hoodie featuring a kangaroo pocket and ribbed cuffs for colder days.",
    price: 49.99,
    rating: "4.9",
    availability: "In Stock",
    category: "Outerwear"
  },
  {
    id:crypto.randomUUID(),
    name: "Vintage Oversized Corduroy Shirt",
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOjiKERFuAi5-msKUEtY0TeXiBJ4oHOMa24HIeghaHQw&s=10',
    description: "Soft-textured corduroy button-up shirt featuring dual chest pockets and a boxy silhouette.",
    price: 44.99,
    rating: "4.5",
    availability: "Low Stock",
    category: "Tops"
  },
  { id: crypto.randomUUID(),
    name: "Utility Relaxed Cargo Pants",
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtcoQy9KX08x3A8daa27bwHYNI_Sy8CHAtqy5hYKcqrg&s=10',
    description: "Durable cotton-twill cargo pants equipped with multiple functional pockets and an adjustable waistband.",
    price: 54.99,
    rating: "4.7",
    availability: "In Stock",
    category: "Bottoms"
  },
  { id: crypto.randomUUID(),
    name: "Insulated Urban Bomber Jacket",
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0pJZ-h1pvBomYjlZwrudINGk0nUlFV742b6x70Clbxg&s',
    description: "Water-resistant matte nylon bomber jacket with quilted thermal lining and a sleek front zipper closure.",
    price: 89.99,
    rating: "4.9",
    availability: "In Stock",
    category: "Outerwear"
  },
  { id: crypto.randomUUID(),
    name: "Tailored Smart Wool-Blend Trousers",
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShmHRu1AKc9ue1EZFgsJH6YR-vv1fjVsJE3i6ZcRBjqg&s=10',
    description: "Sophisticated ankle-length pleated trousers designed to transition seamlessly from work to evening outings.",
    price: 64.99,
    rating: "4.4",
    availability: "Out of Stock",
    category: "Bottoms"
  },
  { id: crypto.randomUUID(),
    name: "Casual Linen Long-Sleeve Shirt",
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQx8T0aM0GH86WRW9xfy5zLCuEBXZ7Vu4hfTr9HHmOTlQ&s',
    description: "Lightweight and airy pure linen shirt crafted for hot summer days and warm evening events.",
    price: 39.99,
    rating: "4.6",
    availability: "In Stock",
    category: "Tops"
  },
  { id: crypto.randomUUID(),
    name: "Classic Denim Trucker Jacket",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDBD0YAqibWaIfbcFzU5rU4vGCp87dT5_uhZAT7t9cyg&s=10",
    description: "Timeless button-front denim jacket featuring chest flap pockets, button cuffs, and side waist tabs.",
    price: 74.99,
    rating: "4.8",
    availability: "In Stock",
    category: "Outerwear"
  }
]);
const [cart, setCart] = useState([]);
    return (
        <MyContext.Provider value={{products, setProducts, cart, setCart,}}>
            {children}
        </MyContext.Provider>
    );
};
