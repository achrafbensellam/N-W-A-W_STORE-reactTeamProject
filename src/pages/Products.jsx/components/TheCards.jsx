import React, { useContext, useState } from "react";
import { MyContext } from "../../../utils/MyContext";
import "../components/Cards.css";

import { FaStar } from "react-icons/fa6";
import { FaRegStarHalfStroke } from "react-icons/fa6";
import { BiCategory } from "react-icons/bi";
import { CiSearch } from "react-icons/ci";
import { Link } from "react-router-dom";

import Slider from "@mui/material/Slider";

function Showdetails() {
  const [Priceslct, setPriceslct] = useState("all");

  const [category, setCategory] = useState("all");
  const [search, Setsearch] = useState("");
  const [products, setProducts, cart, setCart] = useContext(MyContext);

  const [selectedCard, setSelectedCard] = useState(null);
  // the checked btns
  const [isChecked1, setIschecked1] = useState(false);
  const [isChecked2, setIschecked2] = useState(false);
  const [isChecked3, setIschecked3] = useState(false);
  //the last checked btns
  // const [selectedCard,setSelectedCard] = useState(null);

  const [value, setValue] = useState([800, 8800]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const thedisplayandsearch = products.filter((aproduct) => {
    if (aproduct !== null) {
      if (aproduct.price < value[0] || aproduct.price > value[1]) {
        return false;
      }

      if (
        Priceslct === "all" &&
        category === "all" &&
        isChecked1 === false &&
        isChecked2 === false &&
        isChecked3 === false
      ) {
        return aproduct.name.toLowerCase().includes(search.toLowerCase());
      }
      if (
        category === "all" &&
        isChecked1 === false &&
        isChecked2 === false &&
        isChecked3 === false
      ) {
        if (Priceslct === "lessthan10" && aproduct.price <= 1000) {
          return aproduct.name.toLowerCase().includes(search.toLowerCase());
        }
        if (Priceslct === "morethan20" && aproduct.price >= 2000) {
          return aproduct.name.toLowerCase().includes(search.toLowerCase());
        }

        if (Priceslct === "morethan30" && aproduct.price > 3000) {
          return aproduct.name.toLowerCase().includes(search.toLowerCase());
        }
      }
    }

    if (category === "Tops" || isChecked1 === true) {
      if (aproduct.category === "Tops") {
        if (
          Priceslct === "all" ||
          (Priceslct === "lessthan10" && aproduct.price <= 1000) ||
          (aproduct.price >= 2000 && Priceslct === "morethan20") ||
          (aproduct.price > 3000 && Priceslct === "morethan30")
        ) {
          return aproduct.name.toLowerCase().includes(search.toLowerCase());
        }
      }
    }
    if (category === "Bottoms" || isChecked2 === true) {
      if (aproduct.category === "Bottoms") {
        if (
          Priceslct === "all" ||
          (Priceslct === "lessthan10" && aproduct.price <= 1000) ||
          (aproduct.price >= 2000 && Priceslct === "morethan20") ||
          (aproduct.price > 3000 && Priceslct === "morethan30")
        ) {
          return aproduct.name.toLowerCase().includes(search.toLowerCase());
        }
      }
    }

    if (category === "Outerwear" || isChecked3 === true) {
      if (aproduct.category === "Outerwear") {
        if (
          Priceslct === "all" ||
          (Priceslct === "lessthan10" && aproduct.price <= 1000) ||
          (Priceslct === "morethan20" && aproduct.price >= 2000) ||
          (Priceslct === "morethan30" && aproduct.price > 3000)
        ) {
          return aproduct.name.toLowerCase().includes(search.toLowerCase());
        }
      }
    }
  });

  return (
    <section className="thefirstcontainerintheproductspage">
      <div className="thefilterbar">
        <div className="theboxoftheiconandthesearch">
          <CiSearch className="icon" />{" "}
          <input
            type="search"
            value={search}
            onChange={(evnt) => Setsearch(evnt.target.value)}
            className="searchinpt"
            placeholder="Search your favorite......"
          />
        </div>{" "}
        <select
          name=""
          id=""
          value={category}
          onChange={(event) => setCategory(event.target.value)}
          className="theselectinpt"
        >
          <option value="all">select categroy</option>
          <option value="Tops">Tops</option>
          <option value="Bottoms">Bottoms</option>
          <option value="Outerwear">Outerwear</option>
        </select>
        <br />
        <div className="thedivofthecheckboxes">
          <input
            type="checkbox"
            checked={isChecked1}
            onChange={(event) => setIschecked1(event.target.checked)}
          />
          <label htmlFor="">Tops</label>
        </div>
        <div className="thedivofthecheckboxes">
          <input
            type="checkbox"
            checked={isChecked2}
            onChange={(event) => setIschecked2(event.target.checked)}
          />
          <label htmlFor="">Bottoms</label>
        </div>
        <div className="thedivofthecheckboxes">
          <input
            type="checkbox"
            checked={isChecked3}
            onChange={(event) => setIschecked3(event.target.checked)}
          />
          <label htmlFor="">Outerw</label>
        </div>
        <label htmlFor="" className="theRangerlabel">
          Price Filters :
        </label>
        <select
          className="theselectinpt"
          name=""
          id=""
          value={Priceslct}
          onChange={(event) => setPriceslct(event.target.value)}
        >
          <option value="all">All</option>
          <option value="lessthan10"> 1000$ or less</option>
          <option value="morethan20"> +2000$</option>
          <option value="morethan30"> +3000$</option>
        </select>
        <div className="thedivoftheslider">
          <p>The Ranger : </p>
          <div className="thedivoftheslider">
            <Slider
              className="theslider"
              getAriaLabel={() => "Temperature range"}
              value={value}
              valueLabelDisplay="auto"
              onChange={handleChange}
              min={800}
              max={8800}
            />
          </div>
        </div>
      </div>

      <div className="theproductsConta">
        {thedisplayandsearch.length < 0 ? (
          <div className="not-found-message">
            <h2 style={{ color: "red", textAlign: "center", width: "100%" }}>
              Sorry, no products match your search!
            </h2>
          </div>
        ) : (
          thedisplayandsearch.map((item) => (
            <div className="cardofProductspage" key={item.id}>
              <div className="theimagebox">
                <img className="theimage" src={item.image} alt="" />
              </div>
              <div className="thetext">
                <h2>Name : {item.name}</h2>
                <div className="FaStar">
                  {" "}
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaRegStarHalfStroke />
                </div>
                <h2>Price : {item.price}$</h2>
                {item.discount > 0 && (
  <div >
    <p style={{ color: "red", fontWeight: "bold", fontSize: "16px" }}>
      Discount: {item.discount}% OFF
    </p>
    <p style={{ color: "yellow", fontWeight: "bold", fontSize: "18px"}}>
    get it now {Number(item.price) - ((Number(item.price) * Number(item.discount)) / 100)}$ 
    </p>
  </div>
)}
                <h2>category : {item.category}</h2>

                {/* this is the ADD BUTTON */}
                <button
                  className="theaddcardofwidad"
                  onClick={() => {
                    const existingProduct = cart.find(
                      (product) => product.id === item.id,
                    );
                    if (existingProduct) {
                      setCart((currentCart) =>
                        currentCart.map((product) =>
                          product.id === item.id
                            ? {
                                ...product,
                                quantity: product.quantity + 1,
                              }
                            : product,
                        ),
                      );
                    } else {
                      setCart((currentCart) => [
                        ...currentCart,
                        { ...item, quantity: 1 },
                      ]);
                    }
                  }}
                >
                  Add to Cart
                </button>

                <button className="theguy">
                  {" "}
                  <Link className="thehero" to={`/Products/${item.id}`}>
                    view details
                  </Link>{" "}
                </button>
                {/* <button className="theguy" > <Link to={`/item/${item.id}`}>view details</Link>  </button> */}
              </div>
            </div>
          ))
        )}
      </div>
    </section>
  );
}

export default Showdetails;
