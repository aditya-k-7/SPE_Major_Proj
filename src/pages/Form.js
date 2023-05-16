import React from 'react';
import './Form.css'
import { useNavigate } from 'react-router-dom';



export const Form = ({ onSubmit }) => {
  const nav = useNavigate();
  const nav_submit = () => {nav('/home')}
  return (
    <div class="form-container">
      <form onSubmit={onSubmit} class="my-form">
        <div class="form-group">
          <label for="name">Project Title</label>
          <input class="form-control" id="name" />
        </div>
        <div class="form-group">
          <label for="email">Email address</label>
          <input
            type="email"
            class="form-control"
            id="email"
            placeholder="name@example.com"
          />
        </div>
        <div class="form-group">
          <label for="description">Project Description</label>
          <input
            type="text"
            class="form-control"
            id="description"
          />
        </div>
        <div class="form-group">
          <label for="amount">Required amount</label>
          <input
            type="currency"
            class="form-control"
            id="amount"
            placeholder="xyz/-"
          />
        </div>
        <div class="form-group">
          <label for="upidetails">Payment details</label>
          <input
            type="currency"
            class="form-control"
            id="upidetails"
            placeholder="UPI ID"
          />
        </div>
        <div class="form-group">
            <button className="form-control btn btn-primary" type="submit">Submit</button>
        </div>
      </form>
    </div>


  );
};
export default Form;
