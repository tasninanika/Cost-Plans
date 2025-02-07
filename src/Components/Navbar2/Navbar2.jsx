
const Navbar2 = () => {

    const routes = [
        { id: 1, path: "/", name: "Home" },
        { id: 2, path: "/about", name: "About" },
        { id: 3, path: "/services", name: "Services" },
        { id: 4, path: "/pricing", name: "Pricing" },
        { id: 5, path: "/contact", name: "Contact" }
      ];
      
      

    return (
        <nav>
            <ul className="md:flex">
            {
                routes.map(route => <li className="mr-10" key={route.id}> <a href={`route.path`}>{route.name}</a></li>)
            }
            </ul>
        </nav>
    );
};

export default Navbar2;
