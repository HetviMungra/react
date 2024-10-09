import React, { useState } from 'react';

export default function Search() {
    const [name, setName] = useState("");

    const arr = [
        { name: "Men Shoes", img: "https://m.media-amazon.com/images/I/613ap9PVq-L._AC_UL480_FMwebp_QL65_.jpg" },
        { name: "Mens Casual Shirt", img: "https://m.media-amazon.com/images/I/51STJxwM9KL._AC_UL480_FMwebp_QL65_.jpg" },
        { name: "Mens Casual Shirt Cotton", img: "https://m.media-amazon.com/images/I/61DGAlvxRLL._AC_UL480_FMwebp_QL65_.jpg" },
        { name: "Men Mens Jeans", img: "https://m.media-amazon.com/images/I/71gHEC8+QJL._AC_UL480_FMwebp_QL65_.jpg" },
        { name: "Mens Jeans Pants", img: "https://m.media-amazon.com/images/I/61lg3ufEX8L._AC_UL480_FMwebp_QL65_.jpg" },
        { name: "Women Top", img: "https://m.media-amazon.com/images/I/51Rwb7EAb6L._AC_UL480_FMwebp_QL65_.jpg" },
        { name: "Women Top Western Wear", img: "https://m.media-amazon.com/images/I/81pCdAm35JL._AC_UL480_FMwebp_QL65_.jpg" },
        { name: "Women Shoes", img: "https://m.media-amazon.com/images/I/61gQrrqyGYL._AC_UL480_FMwebp_QL65_.jpg" },
        { name: "Women Kurta", img: "https://m.media-amazon.com/images/I/51twjUo7TOL._AC_UL480_FMwebp_QL65_.jpg" },
        { name: "Women Kurta Sets with Dupatta", img: "https://m.media-amazon.com/images/I/81pa1lIVsPL._AC_UL480_FMwebp_QL65_.jpg" },
        { name: "Children's Games", img: "https://m.media-amazon.com/images/I/81cnGX6MzKL._AC_UL480_FMwebp_QL65_.jpg" },
        { name: "Children's Games Car", img: "https://m.media-amazon.com/images/I/61sWynCeb2L._AC_UL480_FMwebp_QL65_.jpg" },
        { name: "Children's Dress", img: "https://m.media-amazon.com/images/I/51nUfiMuCLL._AC_UL480_FMwebp_QL65_.jpg" },
        { name: "Children's Dress Girls 10-11", img: "https://m.media-amazon.com/images/I/610qK4JojcL._AC_UL480_FMwebp_QL65_.jpg" },
        { name: "Children's Dress Boys 1 to 2 Year", img: "https://m.media-amazon.com/images/I/514ftDnqfvL._AC_UL480_FMwebp_QL65_.jpg" },
        { name: "Home Decor", img: "https://m.media-amazon.com/images/I/61OVI7baWXL._AC_UL480_FMwebp_QL65_.jpg" },
        { name: "Home Decor Items", img: "https://m.media-amazon.com/images/I/71XbfyQN8HL._AC_UL480_FMwebp_QL65_.jpg" }
    ];

    const data = arr.filter((item) => item.name.toLowerCase().includes(name.toLowerCase()));

    return (
        <div id='main' style={{ padding: '20px' }}>
            <center>
                <h1>Product Search</h1>
                <div style={{ position: 'relative', width: '720px', margin: 'auto' }}>
                    <input
                        type="text"
                        placeholder="Enter product name (Men, Women, Children's dress...)"
                        onChange={(e) => setName(e.target.value)}
                        
                    />
                    {name && data.length > 0 && (
                        <ul style={{
                            listStyleType: 'none',
                            padding: '0',
                            margin: '0',
                            position: 'absolute',
                            width: '100%',
                            maxHeight: '300px',
                            overflowY: 'auto',
                            backgroundColor: '#fff',
                            boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                            borderRadius: '5px',
                            zIndex: '1000'
                        }}>
                            {data.map((e, i) => (
                                <li key={i} style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    padding: '10px',
                                    borderBottom: '1px solid #eee',
                                    cursor: 'pointer'
                                }}>
                                    <img src={e.img} alt={e.name} style={{ width: '40px', height: '40px', marginRight: '10px', objectFit: 'contain' }} />
                                    <span>{e.name}</span>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </center>
        </div>
    )
}
