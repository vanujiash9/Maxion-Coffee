import { createSlice } from "@reduxjs/toolkit";
import Swal from "sweetalert2";

const cart = JSON.parse(localStorage.getItem("cart")) ?? [];
const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [...cart],
  },
  reducers: {
    addtoCart(state, action) {
      let index = state.cart.findIndex((item) => item.id === action.payload.id);
      let cart = [...state.cart];

      if (index === -1) {
        cart.push({ ...action.payload, quantity: 1 });
      } else {
        state.cart[index].quantity += 1;
      }

      state.cart = cart;

      localStorage.setItem("cart", JSON.stringify(cart));
      const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.onmouseenter = Swal.stopTimer;
          toast.onmouseleave = Swal.resumeTimer;
        },
      });
      Toast.fire({
        icon: "success",
        title: "Add product successfully",
      });
    },
    removeCart(state, action) {
      let index = state.cart.findIndex((item) => item.id === action.payload);
      let cart = [...state.cart];
      if (index !== -1) {
        cart.splice(index, 1);
      }
      state.cart = cart;
    
      localStorage.setItem("cart", JSON.stringify(cart));
      Swal.fire({
        icon: "success",
        title: "Product removed successfully",
        timer: 2000,
        showConfirmButton: false,
      });
    },

    increase(state, action) {
      const productId = action.payload;
      const index = state.cart.findIndex((item) => item.id === productId);
      if (index !== -1) {
        state.cart[index].quantity += 1;
        localStorage.setItem("cart", JSON.stringify(state.cart));
      }
    },
    decrease(state, action) {
      const productId = action.payload;
      const index = state.cart.findIndex((item) => item.id === productId);
      if (index !== -1) {
        state.cart[index].quantity += 1;
        localStorage.setItem("cart", JSON.stringify(state.cart));
      }
    },

  }
});

export const { addtoCart, removeCart, increase, decrease} = cartSlice.actions;
export default cartSlice.reducer;
