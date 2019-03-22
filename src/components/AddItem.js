import React from 'react'

const AddItems = (props) => {
    return (
        <div>
            <form>
                <div className = "form-group">
                    <label htmlFor="exampleFormControlSelect1">Select Item</label>
                    <select onChange ={props.selectItem} className="form-control" id="exampleFormControlSelect1">
                    {props.product.map(item => <option key={item.id} value = {item.name} price = {item.price}> {item.name} ${(item.priceInCents / 100).toFixed(2)} </option>)}
                    </select>
                </div>
                <div className = "form-group">
                    <label htmlFor="exampleFormControlInput1">Quantity:</label>
                    <input onChange = {props.quantity} type="number" className="form-control" id="quantity" data-bind="value:replyNumber"></input>
                </div>
                <button onClick = {props.addItem} type="submit" className="btn btn-primary">Add Item</button>
            </form>
        </div>
    )
   
    }

export default AddItems 