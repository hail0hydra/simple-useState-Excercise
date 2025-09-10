import { useState } from "react"

const ShoppingList = () => {

    const [list, setList] = useState([]);
    const [item, setItem] = useState("")
    const [quantity, setQuantity] = useState("")

    const handleSubmit = ()=> {
        event.preventDefault();
        // console.log("heehee");
        setList([...list,{name: item, quantity: quantity}])
        setItem("")
        setQuantity("")

    }

    return (
        <div style={{background: 'crimson', padding: 20, borderRadius: 18}}>
            <h1>Shopping List</h1>
            <p>current items: {list.length}</p>
            {
                list.map((item)=>(
                     <li key={Math.random()}>Name: {item.name}<br/>Quantity: {item.quantity}<br/><br/></li>
                ))
            }

            <form onSubmit={handleSubmit}>
                <label>Item Name:
                    <input type="text" style={{marginLeft: '1em'}} value={item} onChange={(event)=> setItem(event.target.value)} placeholder="what's my name?" name="item" />
                </label>
                <br/>
                <label>Quanity:
                    <input type="text" style={{marginLeft: '2.3em'}} value={quantity} onChange={(event)=> setQuantity(event.target.value)} placeholder="how much?" name="quantity" />
                </label>
                <br/>
                <br/>
                <div style={{marginLeft: '7em'}}>
                <button type="submit">Add to List</button>
                </div>
            </form>
        </div>
    )
}

export default ShoppingList
