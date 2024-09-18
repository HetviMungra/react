import React, { useState } from 'react';

const products = [
  {
    id: 1, name: 'OnePlus 11R 5G (Galactic Silver, 8GB RAM, 128GB Storage)', img: 'https://m.media-amazon.com/images/I/613SAOPmLeL._AC_UL480_QL65_.jpg',
    price: 27999, ds1: '8 GB RAM | 256 GB ROM 16.26 cm (6.4 inch) Super HD Display 50MP + 13MP + 10MP | 32MP Front Camera 4310 mAh Battery  Dimensity 7300 Processor'
  },
  {
    id: 2, name: 'OPPO K12x 5G with 45W SUPERVOOC Charger In-The-Box (Breeze Blue,128 GB) ', img: 'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/m/e/3/-original-imah37gwn2xbvzhy.jpeg?q=70',
    price: 12999, ds1: '8 GB RAM | 256 GB ROM 16.26 cm (6.4 inch) Super HD Display 50MP + 13MP + 10MP | 32MP Front Camera 4310 mAh Battery  Dimensity 7300 Processor'
  },

  {
    id: 3, name: 'SAMSUNG Galaxy M34 5G (Waterfall Blue, 128 GB)  (6 GB RAM)', img: 'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/j/t/5/galaxy-m34-without-charger-sm-m346b-samsung-original-imagrue3vhfgvwjz.jpeg?q=70',
    price: 14860, ds1: '8 GB RAM | 256 GB ROM 16.26 cm (6.4 inch) Super HD Display 50MP + 13MP + 10MP | 32MP Front Camera 4310 mAh Battery  Dimensity 7300 Processor'
  },
  {
    id: 4, name: 'vivo T3 Pro 5G (Emerald Green, 128 GB)  (8 GB RAM)', img: 'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/j/4/7/-original-imah44yrqjkpckgv.jpeg?q=70',
    price: 56860, ds1: '8 GB RAM | 256 GB ROM 16.26 cm (6.4 inch) Super HD Display 50MP + 13MP + 10MP | 32MP Front Camera 4310 mAh Battery  Dimensity 7300 Processor'
  },

];

const comp = [
  {
    id: 1, name: 'MSI Thin 15 Intel Core i5 12th Gen 12450H - (16 GB/512 GB SSD/Windows 11 Home/4 GB Graphics/NVIDIA GeForce RTX 3050) Thin 15 B12UC-1692IN Gaming Laptop  (15.6 Inch, Cosmos Gray, 1.86 Kg)', img: 'https://rukminim2.flixcart.com/image/312/312/xif0q/computer/t/r/u/-original-imah3acvkdhmxkzq.jpeg?q=70',
    price: 57999, ds1: '15.6 Inch Full HD, 144Hz 45%NTSC IPS-Level Light Laptop without Optical Disk Drive'
  },
  {
    id: 2, name: 'HP Laptop AMD Ryzen 3 Quad Core 5300U - (8 GB/512 GB SSD/Windows 11 Home) 15s- eq2212AU Thin and Light Laptop   ', img: 'https://rukminim2.flixcart.com/image/312/312/xif0q/computer/v/h/a/-original-imagwy8dtkyhrehe.jpeg?q=70',
    price: 62999, ds1: 'Stylish & Portable Thin and Light Laptop 15.6 Inch Full HD, Brightness: 250 nits, 141 ppi, Color Gamut: 45%NTSC Light Laptop without Optical Disk Drive'
  },

  {
    id: 3, name: 'Acer Aspire 3 Backlit Intel Core i5 12th Gen 1235U - (8 GB/512 GB SSD/Windows 11 Home) A324-51 Thin and Light Laptop ', img: 'https://rukminim2.flixcart.com/image/312/312/xif0q/computer/w/h/7/-original-imahfepfndsqhkjr.jpeg?q=70',
    price: 42999, ds1: 'Stylish & Portable Thin and Light Laptop 15.6 Inch Full HD, Brightness: 250 nits, 141 ppi, Color Gamut: 45%NTSC Light Laptop without Optical Disk Drive'
  },
  {
    id: 4, name: 'MSI Thin 15 Intel Core i5 12th Gen 12450H - (16 GB/512 GB SSD/Windows 11 Home/4 GB Graphics/NVIDIA GeForce RTX 3050) ', img: 'https://rukminim2.flixcart.com/image/312/312/xif0q/computer/o/u/c/-original-imagvyw9srweuy9f.jpeg?q=70',
    price: 82999, ds1: 'Stylish & Portable Thin and Light Laptop 15.6 Inch Full HD, Brightness: 250 nits, 141 ppi, Color Gamut: 45%NTSC Light Laptop without Optical Disk Drive'
  },

];


const mensProducts = [
  {
    id: 1, name: 'Levi\'s Men\'s Slim Fit Jeans', img: 'https://rukminim2.flixcart.com/image/612/612/xif0q/shirt/o/v/t/xl-swi24-csmssrt7086-campus-sutra-original-imah44gtfgptmysh.jpeg?q=70',
    price: 899, ds1: 'Slim Fit, Stretchable, Mid-Rise Jeans for Men'
  },
  {
    id: 2, name: 'Puma Men\'s Running Shoes', img: 'https://rukminim2.flixcart.com/image/612/612/xif0q/shirt/j/z/i/l-shirt-161-foxter-original-imahffpb6bnwzptt.jpeg?q=70',
    price: 499, ds1: 'Comfortable Running Shoes for Men with Lightweight Cushioning'
  },
  {
    id: 3, name: 'Tommy Hilfiger Men\'s Analog Watch', img: 'https://rukminim2.flixcart.com/image/612/612/xif0q/shirt/u/9/m/s-gn-lycra-half-global-nomad-original-imah4d8qbur36xgs.jpeg?q=70',
    price: 799, ds1: 'Classic Analog Watch with Leather Strap and Water Resistance'
  },
  {
    id: 4, name: 'Ray-Ban Men\'s Aviator Sunglasses', img: 'https://rukminim2.flixcart.com/image/612/612/xif0q/shirt/h/o/u/l-st1-vebnor-original-imah4degk8bpzwmg.jpeg?q=70',
    price: 899, ds1: 'Aviator Sunglasses with UV Protection and Scratch Resistant Lens'
  },
];

export default function Category() {
  const [showProduct, setShowProduct] = useState(false);

  // com 
  const [computer, setComputer] = useState(false);

  // men 
  const [men, setMen] = useState(false);

  
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [buyProduct, setBuyProduct] = useState(null);


  const toggleProduct = () => {
    setShowProduct(!showProduct);
    setComputer(false);
    setMen(false); 
  };
  //com
  const toggleComputer = () => {
    setComputer(!computer);
    setShowProduct(false);
    setMen(false); 
  };
//men
  const toggleMen = () => {
    setMen(!men);
    setShowProduct(false);
    setComputer(false); 
  };

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const handleBuyNow = (product) => {
    setBuyProduct(product);
  };

  const toggleCart = () => {
    setShowCart(!showCart);
  };
  const toggleBuy = () => {
    setBuyProduct(!buyProduct);
  };

  return (
    <div>
      <main>
        <div className="left">
          <div className="text">
          <u>  <h3>Shop by Category</h3></u>
          </div>
          <div className="list">
            <button onClick={toggleProduct}>Mobiles</button>
            <button onClick={toggleComputer}>Computer</button>
            <button  onClick={toggleMen}>Men's Fashion</button>
            <button>Women's Fashion</button>
            <button>Toys</button>
          </div>
        </div>

        <div className="right">
          {
            showProduct && products.map((product) => (
              <div className="product" key={product.id}>
                <img src={product.img} alt={product.name} />
                <ul id='pr-mobile'>
                  <li>
                    <h2>{product.name}</h2>
                    <br />
                    <p>{product.ds1}</p>
                    <h4>₹ {product.price}</h4>

                  </li>
                </ul>

                <div className="btn-mobile">
                  <button id="add" onClick={() => addToCart(product)}>Add to Cart</button>
                  <br />
                  <button id="buy" onClick={() => handleBuyNow(product)}>Buy Now</button>
                </div>
              </div>

            ))
          }
          {/* com  */}
          {
            computer && comp.map((com) => (
              <div className="product" key={com.id}>
                <img src={com.img} alt={com.name} />
                <ul id='pr-mobile'>
                  <li>
                    <h2>{com.name}</h2>
                    <br />
                    <p>{com.ds1}</p>
                    <h4>₹ {com.price}</h4>

                  </li>
                </ul>

                <div className="btn-mobile">
                  <button id="add" onClick={() => addToCart(com)}>Add to Cart</button>
                  <br />
                  <button id="buy" onClick={() => handleBuyNow(com)}>Buy Now</button>
                </div>
              </div>
            ))
          }
          {/* men  */}
          {
            men && mensProducts.map((mens) => (
              <div className="product" key={mens.id}>
                <img src={mens.img} alt={mens.name} />
                <ul id='pr-mobile'>
                  <li>
                    <h2>{mens.name}</h2>
                    <br />
                    <p>{mens.ds1}</p>
                    <h4>₹ {mens.price}</h4>

                  </li>
                </ul>

                <div className="btn-mobile">
                  <button id="add" onClick={() => addToCart(mens)}>Add to Cart</button>
                  <br />
                  <button id="buy" onClick={() => handleBuyNow(mens)}>Buy Now</button>
                </div>
              </div>

            ))
          }
        </div>


        {/* Cart Off-canvas */}
        {showCart && (
          <div className="offcanvas-cart">
            <div className="cart_title">
              <span id='cartname'>Your Cart</span>
              <button id='closeicon' onClick={toggleCart}>x</button>
            </div>
            <hr />  
          
            {cart.length > 0 ? (
              cart.map((item) => (
                <div className='cart-pro' key={item.id}>
                  <div className="cart_img">
                    <img src={item.img} alt={item.name} />
                  </div>
                  <div className="cart_text">
                    <span>{item.name}</span><br />

                    <span>₹{item.price}</span>

                    <br />
                    <br />
                    <button onClick={() => removeFromCart(item.id)}>Remove</button>
                  </div>
                </div>
              ))
            ) : (
              <p>Your cart is empty</p>
            )}
          </div>
        )}

        {/* Buy Product Page */}
        {buyProduct && (
          <div className="offcanvas-buy">
            <div className="cart_title">
              <span id='cartname'>Buy Product</span>
              <button id='closeicon' onClick={toggleBuy}>x</button>

            </div>
            <hr />
            <div className="buy_pro">
              <div className="buyimg">
                <img src={buyProduct.img} alt={buyProduct.name} />
              </div>
              <div className="buy_text">
                <span>{buyProduct.name}</span><br />

                <span>₹{buyProduct.price}</span>
              </div>
            </div>

            <form onSubmit={() => alert("Order placed!")}>
              <div>
                <label>Full Name:</label>
                <input type="text" required />
              </div>
              <div>
                <label>Address:</label>
                <textarea required />
              </div>
              <div>
                <label>Phone Number:</label>
                <input type="text" required />
              </div>
              <button id='submitbuy' type="submit">Submit</button>
            </form>
          </div>
        )}

        <button onClick={toggleCart} className="open-cart-btn">Open Cart ({cart.length})</button>
      </main>


    </div>
  );
}
