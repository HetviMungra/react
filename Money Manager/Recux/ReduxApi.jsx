import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from '../Feature/ApiSlice';

export default function ReduxApi() {
    const [saveMoney, setSaveMoney] = useState("");
    const [cartMoney, setCartMoney] = useState("");
    const [cartName, setCarName] = useState("");
    const [cartList, setCartList] = useState([]);

    const dispatch = useDispatch();
    const count_money = useSelector((state) => state.moneyKey.count_money);

    const addMoney = () => {
        const amount = Number(saveMoney);
        if (amount) {
            dispatch(increment(amount));
            setSaveMoney("");
        }
    };

    const deleteMoney = () => {
        const amount = Number(cartMoney);
        if (amount && cartName) {
            if (count_money < amount) {
                alert("Money to add more");
                return;
            }
            dispatch(decrement(amount));
            setCartList([...cartList, { cartMoney: amount, cartName }]);
            setCartMoney("");
            setCarName("");
        }
    };

    return (
        <div className='body'>
        <div style={styles.container}>
            <h1 className='m'  style={styles.title}>Money Manager</h1>
            <h3 style={styles.balance}>Balance: ${count_money}</h3>

            <div style={styles.inputContainer}>
                <input
                    type="number"
                    value={saveMoney}
                    onChange={(e) => setSaveMoney(e.target.value)}
                    placeholder="Enter amount"
                    style={styles.input}
                />
                <button onClick={addMoney} style={styles.button}>Add Money</button>
            </div>

            <div style={styles.inputContainer}>
                <input
                    type="number"
                    value={cartMoney}
                    onChange={(e) => setCartMoney(e.target.value)}
                    placeholder="Enter amount"
                    style={styles.input}
                />
                <input
                    type="text"
                    value={cartName}
                    placeholder="  Expense Name"
                    onChange={(e) => setCarName(e.target.value)}
                    style={styles.input}
                />
                <button onClick={deleteMoney} style={styles.button}>Add Expense</button>
            </div>

            <div style={styles.cartList}>
                {cartList.map((e, i) => (
                    <div key={i} style={styles.cartItem}>
                        <h2>{e.cartMoney} - {e.cartName}</h2>
                    </div>
                ))}
            </div>
        </div>
        </div>
    );
}

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
        fontFamily: 'Arial, sans-serif',
    },
    title: {
        fontSize: '2.5rem',
        marginBottom: '20px',
        color: '#fff',
    },
    balance: {
        fontSize: '1.5rem',
        marginBottom: '20px',
        color: '#4CAF50',
    },
    inputContainer: {
        marginBottom: '20px',
        display: 'flex',
        gap: '10px',
    },
    input: {
        padding: '10px',
        fontSize: '1rem',
        borderRadius: '5px',
        border: '1px solid #ccc',
        outline: 'none',
        width: '200px',
    },
    button: {
        padding: '10px 20px',
        backgroundColor: '#4CAF50',
        color: '#fff',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        fontSize: '1rem',
    },
    buttonHover: {
        backgroundColor: '#45a049',
    },
    cartList: {
        marginTop: '30px',
        width: '80%',
    },
    cartItem: {
        backgroundColor: '#f9f9f9',
        padding: '10px',
        marginBottom: '10px',
        borderRadius: '5px',
        boxShadow: '0 0 5px rgba(0, 0, 0, 0.1)',
        textAlign: 'center',
    }
};
