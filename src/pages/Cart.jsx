import { CartContext } from "../Context/CartContext.jsx";
import { useContext } from "react";
import { Image } from "antd";
import PlusOutlined from "@ant-design/icons/lib/icons/PlusOutlined";
import MinusOutlined from "@ant-design/icons/lib/icons/MinusOutlined";
import { Button } from "antd";

function Cart() {
    const { cartItems, addItemToCart, isItemAdded, removeCartItem, lessQuantityFromCart } = useContext(CartContext);

    const totalAmount = cartItems.reduce((total, obj) => total + obj.quantity * obj.price, 0)
    const totalQuantity = cartItems.reduce((total, obj) => total + obj.quantity, 0)
    return (
        <>
        <div className="container mx-auto">
            <h1 className="text-center font-bold text-3xl">Cart</h1>

            <div className="flex my-5">
                <div className="flex flex-grow items-center flex-col rounded mx-1 p-2 text-3xl">Total Amount :
                {Math.round(totalAmount)}</div>
                <div className="flex flex-grow items-center flex-col rounded mx-1 p-2 text-3xl">Total Quantity : {totalQuantity} </div>
                <div className="flex flex-grow items-center flex-col border cursor-pointer rounded mx-1 p-2 text-3xl">Checkout</div>
            </div>




            {cartItems.map((data) => (
                <div key={data.id} className="flex items-center border rounded my-5">
                    <Image src={data.thumbnail} height={90} width={90} />
                    <div className="flex flex-col mx-2 my-3">
                        <p className="text-md font-bold">{data.title}</p>
                        <p className="text-sm">{data.category}</p>
                        <p className="text-sm font-bold">Price :{data.price}</p>
                        <div className="flex">
                            <PlusOutlined onClick={() => addItemToCart(data)} className="mx-2 bg-purple-300 rounded-full p-1 cursor-pointer" />
                            <p>{data.quantity}</p>
                            <Button className="mx-2" disabled={data.quantity === 1}>
                                <MinusOutlined
                                    onClick={() => lessQuantityFromCart(data.id)}
                                    className="cursor-pointer bg-purple-300 rounded-full p-1" />
                            </Button>
                            <Button danger onClick={() => removeCartItem(data.id)} >Remove </Button>
                        </div>
                    </div>
                </div>
            ))}

        </div>
        </>
    )
}


export default Cart