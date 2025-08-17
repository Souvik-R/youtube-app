import React from 'react';
import {
  MdHome,
  MdSubscriptions,
  MdVideoLibrary,
  MdHistory,
  MdOutlineVideoSettings,
  MdOutlineWatchLater,
  MdThumbUp,
} from 'react-icons/md';
import { SiYoutubeshorts } from 'react-icons/si';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  const mainItems = [
    { icon: <MdHome size={22} />, label: "Home", path: "/" },
    { icon: <SiYoutubeshorts size={22} />, label: "Shorts" },
    { icon: <MdSubscriptions size={22} />, label: "Subscriptions" },
  ];

  const yourItems = [
    { icon: <MdVideoLibrary size={22} />, label: "Library" },
    { icon: <MdHistory size={22} />, label: "History" },
    { icon: <MdOutlineVideoSettings size={22} />, label: "Your videos" },
    { icon: <MdOutlineWatchLater size={22} />, label: "Watch later" },
    { icon: <MdThumbUp size={22} />, label: "Liked videos" },
  ];

  const exploreItems = [
    { label: "Gaming" },
    { label: "Movies" },
    { label: "Entertainment" },
    { label: "Kapil Sharma" },
    { label: "News" },
    { label: "Funny" },
    { label: "Cricket" },
    { label: "Accessories" },
  ];

  return (
    <div
      className={`bg-white h-screen overflow-y-auto transition-all duration-300 
      ${isMenuOpen ? "w-130 px-3" : "w-35 px-3"} py-4`}
    >
      <ul className="space-y-1 pb-3 border-b border-gray-200">
        {mainItems.map((item, idx) => (
          <li
            key={idx}
            className={`flex items-center gap-4 hover:bg-gray-100 p-3 rounded-xl cursor-pointer
              ${idx === 0 ? "bg-gray-100 font-medium" : ""}`}
          >
            {item.path ? (
              <Link to={item.path} className="flex items-center gap-4 w-full">
                <span className={`${idx === 0 ? "text-black" : "text-gray-700"}`}>{item.icon}</span>
                {isMenuOpen && <span className="text-sm">{item.label}</span>}
              </Link>
            ) : (
              <>
                <span className="text-gray-700">{item.icon}</span>
                {isMenuOpen && <span className="text-sm">{item.label}</span>}
              </>
            )}
          </li>
        ))}
      </ul>

      <div className="mt-3 pb-3 border-b border-gray-200">
        {isMenuOpen && (
          <h2 className="font-medium text-sm px-2 mb-2 text-gray-800">You</h2>
        )}
        <ul className="space-y-1">
          {yourItems.map((item, idx) => (
            <li
              key={idx}
              className="flex items-center gap-4 hover:bg-gray-100 p-3 rounded-xl cursor-pointer"
            >
              <span className="text-gray-700">{item.icon}</span>
              {isMenuOpen && <span className="text-sm">{item.label}</span>}
            </li>
          ))}
        </ul>
      </div>

      {isMenuOpen && (
        <div className="mt-3">
          <h2 className="font-medium text-sm px-2 mb-2 text-gray-800">Explore</h2>
          <ul className="space-y-1">
            {exploreItems.map((item, idx) => (
              <li
                key={idx}
                className="flex items-center gap-4 hover:bg-gray-100 p-3 rounded-xl cursor-pointer"
              >
                <div className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center">
                  <span className="text-xs text-gray-600">{item.label.charAt(0)}</span>
                </div>
                <span className="text-sm">{item.label}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
