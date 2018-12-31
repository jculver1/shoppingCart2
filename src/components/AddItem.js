import React from 'react'

const AddItems = (props) => {
    return (
        <div>
            <form>
                <div class="form-group">
                    <label for="exampleFormControlSelect1">Select Item</label>
                    <select onChange ={props.selectItem} class="form-control" id="exampleFormControlSelect1">
                    {props.product.map(item => <option key={item.id} value = {item.name} price = {item.price}> {item.name} ${(item.priceInCents / 100).toFixed(2)} </option>)}
                    </select>
                </div>

                <div class="form-group">
                    <label for="exampleFormControlInput1">Quantity:</label>
                    <input onChange = {props.quantity} type="number" class="form-control" id="quantity" data-bind="value:replyNumber"></input>
                </div>
                <button onClick = {props.addItem} type="submit" class="btn btn-primary">Add Item</button>
            </form>
        </div>
    )
   
    }

export default AddItems 