import PropTypes from "prop-types";

const PriceOption = ({ option }) => {
  const { name, price, features } = option;
  return (
    <div>
      <h2>
        <span className="text-5xl">{price}</span>
        <span className="text-2xl">$</span>
      </h2>
      <h4 className="text-3xl">{name}</h4>
    </div>
  );
};

PriceOption.PropTypes = {
  option: PropTypes.object,
};

export default PriceOption;
