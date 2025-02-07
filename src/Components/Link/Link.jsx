import PropTypes from "prop-types";

const Link = ({ route }) => {
  return (
    <div>
      <li className="mr-10 hover:bg-gray-100 px-6">
        <a href={route.path}>{route.name}</a>
      </li>
    </div>
  );
};

Link.propTypes = {
  route: PropTypes.object,
};

export default Link;
