import "./Header.css";

function Header({ onSectionChange }) {
    return (
        <header className="header-container">
            <nav>
                <ul className="nav__list">
                    <li className="nav_item">
                        <a
                            onClick={(e) => {
                                e.preventDefault();
                                onSectionChange("sesson1");
                            }}
                        >
                            sesson1
                        </a>
                    </li>
                    <li>
                        <a
                            onClick={(e) => {
                                e.preventDefault();
                                onSectionChange("sesson2");
                            }}
                        >
                            sesson2
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
export default Header;
