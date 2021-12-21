import React from 'react';
import { useForm } from "react-hook-form";
import useAuth from '../../hooks/UseAuth';
import { clearTheCart, getStoredCart } from "../../utilities/fakedb";
import './Shipping.css';

const Shipping = () => {
 

  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const {user} = useAuth();
  const onSubmit = data => {
  const savedCart = getStoredCart();
  data.order = savedCart;
    console.log(data);

    fetch('http://localhost:5000/orders',{
      method: 'POST',
      headers: {
        'content-type':'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(result => {
      if(result.insertedId){
        alert('Orders Prossed succesfully')
        clearTheCart();
        reset();
      }
    })
  };
    return (
        <div >
         <form className="shipping-form" onSubmit={handleSubmit(onSubmit)}>

      <input placeholder="Name" defaultValue={user.displayName} {...register("name")} />
      <input placeholder="email" defaultValue={user.email} {...register("email", { required: true })} />
      {errors.email && <span className="error">This field is required</span>}
      <input placeholder="adress" defaultValue="" {...register("address")} />
      <input  placeholder="City" defaultValue="" {...register("City")} />
      <input  placeholder="Phone Number" defaultValue="" {...register("Phone")} />


      <input type="submit" />
    </form>
        </div>
    );
};

export default Shipping;