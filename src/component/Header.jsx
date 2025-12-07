import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div>
            <Link to={'/Phones'}>go to phones</Link>
            <Link></Link>
        </div>
    );
};

export default Header;