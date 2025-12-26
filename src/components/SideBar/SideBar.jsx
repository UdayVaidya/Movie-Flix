import React from 'react'
import './SideBar.css'
import HomeIcon from '../../assets/icons/HomeIcon'
import ExploreIcon from '../../assets/icons/ExploreIcon'
import GenreIcon from '../../assets/icons/GenreIcon'
import FavouriteIcon from '../../assets/icons/FavouriteIcon'
import ContinueIcon from '../../assets/icons/ContinueIcon'
import RecentIcon from '../../assets/icons/RecentIcon'
import CollectionIcon from '../../assets/icons/CollectionIcon'
import DownloadIcon from '../../assets/icons/DownloadIcon'
import SettingIcon from '../../assets/icons/SettingIcon'
import LogoutIcon from '../../assets/icons/LogoutIcon'
import MenuIcon from '../../assets/icons/MenuIcon'


const menuItems = [
  {
    id: 1,
    icon: <HomeIcon />,
    label: "Home",
    link: "#home",
  },
  {
    id: 2,
    icon: <ExploreIcon />,
    label: "Explore",
    link: "#explore",
  },
  {
    id: 3,
    icon: <GenreIcon />,
    label: "Genre",
    link: "#genre",
  },
  {
    id: 4,
    icon: <FavouriteIcon />,
    label: "Favourites",
    link: "#favourites",
  },
];


const recentItems = [
  {
    id: 1,
    icon: <ContinueIcon />,
    label: "Continue Watching",
    link: "#continuewatching",
  },
  {
    id: 2,
    icon: <RecentIcon />,
    label: "Recently Added",
    link: "#recentlyadded",
  },
  {
    id: 3,
    icon: <CollectionIcon />,
    label: "My Collection",
    link: "#mycollection",
  },
  {
    id: 4,
    icon: <DownloadIcon style={{ fontSize: "26px" }}/>,
    label: "Download",
    link: "#download",
  },
];


const SideBar = ({ open, onClose }) => {
  return (
    <>
      <aside className={`side-bar ${open ? "open" : ""}`}>
        <div className="logo">
          <h2 className="logo-text">Movie Flix</h2>

          {/* Close icon for mobile */}
          <button className="close-btn" onClick={onClose}>
            <MenuIcon style={{ fontSize: "28px" }} />
          </button>
        </div>

        <nav>
          <div className="line"></div>

          <ul className="menu-items">
            {menuItems.map(item => (
              <li key={item.id}>
                <a href={item.link} onClick={onClose}>
                  {item.icon}
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="line"></div>

          <ul className="recent-items">
            {recentItems.map(item => (
              <li key={item.id}>
                <a href={item.link} onClick={onClose}>
                  {item.icon}
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="line"></div>
        </nav>

        <div className="bottom">
          <button><SettingIcon /> Settings</button>
          <button><LogoutIcon /> Logout</button>
        </div>
      </aside>

      {/* Overlay (mobile only) */}
      {open && <div className="sidebar-overlay" onClick={onClose} />}
    </>
  );
};

export default SideBar;
