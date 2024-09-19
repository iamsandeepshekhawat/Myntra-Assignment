import Link from "next/link";
import { menuItems, rightMenuItems, logoItems } from "../utils/constants";
import Search from "./Search/Search";

const Header = () => {
    return (
        <div className="header">
            <div className="container">
                <div className="logo">
                    <Link href="/">
                        <img
                            src={logoItems[0]}
                            alt={logoItems[1]}
                            width={logoItems[2]}
                            height={logoItems[3]}
                        />
                    </Link>
                </div>
                <div className="menu">
                    <div className="menu__left">
                        {menuItems.map((item, index) => (
                            <div className="menu__item" key={index}>
                                {item.title}
                            </div>
                        ))}
                    </div>
                </div>
                <Search />
                <div className="right-menu">
                    {rightMenuItems.map((item, index) => (
                        <div className="right-menu__item" key={index}>
                            <div className="right-menu__icon">
                                {item.icon}
                            </div>
                            <div className="right-menu__title">
                                {item.title}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Header;
