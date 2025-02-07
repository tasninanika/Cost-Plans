const Link = ({ route }) => {
  return (
    <div>
      <li className="mr-10" key={route.id}>
        <a href={`route.path`}>{route.name}</a>
      </li>
    </div>
  );
};

export default Link;
