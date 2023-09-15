import CartItems from "./cartitems";
import CartIcon from "./cartIcon"



const CartContainer = () => {
    return (
        <div className="bg-warning rounded-circle p-3 position-relative">
            <CartIcon color="Black" />
            <CartItems count={5} />
        </div>
    );
};

export default CartContainer;