import PropTypes from "prop-types";
import Features from "../Features/Features";

const PriceOption = ({ option }) => {
  const { name, price, features } = option;
  return (
    <div className="bg-yellow-100 rounded-xl flex flex-col p-8">
      <h2 className="text-center">
        <span className="text-5xl font-semibold">{price}</span>
        <span className="text-2xl">$</span>
      </h2>
      <h4 className="text-3xl text-center mt-5 text-green-900 font-bold">
        {name}
      </h4>
      <div className="mt-8 flex-grow">
        {features.map((feature, index) => (
          <Features key={index} feature={feature}></Features>
        ))}
      </div>
      <button className="mt-12 bg-green-800 text-white w-full py-3 font-bold rounded-lg hover:bg-green-400 hover:text-black">
        Buy Now
      </button>
    </div>
  );
};

PriceOption.propTypes = {
  option: PropTypes.object,
};

export default PriceOption;
