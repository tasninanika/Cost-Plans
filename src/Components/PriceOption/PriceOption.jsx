import PropTypes from "prop-types";
import Features from "../Features/Features";

const PriceOption = ({ option }) => {
  const { name, price, features } = option;
  return (
    <div className="bg-yellow-100 rounded-lg p-8">
      <h2 className="text-center">
        <span className="text-5xl font-semibold">{price}</span>
        <span className="text-2xl">$</span>
      </h2>
      <h4 className="text-3xl text-center">{name}</h4>
      {features.map((feature, index) => (
        <Features key={index} feature={feature}></Features>
      ))}
    </div>
  );
};

PriceOption.propTypes = {
  option: PropTypes.object,
};

export default PriceOption;
