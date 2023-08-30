const Cart = ({ item, active }) => {
  return (
    <div
      className={` h-52 border border-gray-400 bg-slate-50 rounded-md p-4 flex justify-center text-center items-center ${
        active ? "bg-red-300" : ""
      }`}
    >
      <p>{active ? item.answer : item.question}</p>
    </div>
  );
};

export default Cart;
