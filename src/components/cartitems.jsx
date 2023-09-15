


const CartItems = ({ count = 0 }) => {
    return (
        <div className="position-absolute bg-secondary rounded-circle px-2" style={{ top: 0, right: 0 }}>
            <span style={{ fontSize: "15px", color: "black" }}> {count} </span>
        </div>
    );
};

export default CartItems;