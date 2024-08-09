import React from "react";
const Cart = ({onClose})=>{
    return(
        <div className="lg:w-[350px] h-[550px] bg-white shadow-lg absolute top-96 lg:top-0 rounded-lg lg:right-3 z-50 p-6 flex flex-col gap-6">
            <div className="h-[75px] flex gap-6 flex-col ">
                <div className="flex items-center justify-between">
                    <h1 className="text-sm">Shopping Cart</h1>
                    <i class='bx bxs-shopping-bag'></i>
                    <button onClick={onClose} className="text-xl">
                        &times;
                    </button>
                </div>
                <div className="w-full border-b"></div>
            </div>

            <div className="h-[300px]">
                <h1>vbnm,</h1>
            </div>

            <div className="flex flex-col h-[75px] gap-6">
                <div className="flex justify-between">
                    <p className="text-sm">Subtotal</p>
                    <p className="text-sm">Rs2500000</p>
                </div>
                 <div className="w-full border-b"></div>
            </div>

            <div className="h-[75px] flex gap-4">
                <div className="w-24 h-8 shadow-lg border-[0.8px] border-[#242424] rounded-xl flex items-center justify-center text-sm">Cart</div>
                <div className="w-24 h-8 shadow-lg border-[0.8px] border-[#242424] rounded-xl flex items-center justify-center text-sm">Checkout</div>
                <div className="w-24 h-8 shadow-lg border-[0.8px] border-[#242424] rounded-xl flex items-center justify-center text-sm">Comparison</div>
            </div>
        </div>
    )
}
export default Cart;