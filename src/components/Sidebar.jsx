import React from 'react';
import { MdHome, MdVideoLibrary, MdOutlineLiveTv, MdOutlineSportsEsports, MdMovie, MdOutlineMusicNote, MdOutlineSportsSoccer, MdOutlineWatchLater } from 'react-icons/md';
import { SiYoutubeshorts } from 'react-icons/si';
import { useSelector } from 'react-redux';

const Sidebar = () => {

    const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

    if(!isMenuOpen) return null;
    
    return (
        <div className="p-5 shadow-lg w-56 bg-white h-screen">
            <ul className="space-y-3">
                <li className="flex items-center gap-3 hover:bg-gray-100 p-2 rounded-lg cursor-pointer">
                    <MdHome size={22} /> Home
                </li>
                <li className="flex items-center gap-3 hover:bg-gray-100 p-2 rounded-lg cursor-pointer">
                    <SiYoutubeshorts size={22} /> Shorts
                </li>
                <li className="flex items-center gap-3 hover:bg-gray-100 p-2 rounded-lg cursor-pointer">
                    <MdVideoLibrary size={22} /> Videos
                </li>
                <li className="flex items-center gap-3 hover:bg-gray-100 p-2 rounded-lg cursor-pointer">
                    <MdOutlineLiveTv size={22} /> Live
                </li>
            </ul>

            <h1 className="font-bold mt-6 mb-2 text-gray-700">Subscriptions</h1>
            <ul className="space-y-3">
                <li className="flex items-center gap-3 hover:bg-gray-100 p-2 rounded-lg cursor-pointer">
                    <MdOutlineMusicNote size={22} /> Music
                </li>
                <li className="flex items-center gap-3 hover:bg-gray-100 p-2 rounded-lg cursor-pointer">
                    <MdOutlineSportsSoccer size={22} /> Sports
                </li>
                <li className="flex items-center gap-3 hover:bg-gray-100 p-2 rounded-lg cursor-pointer">
                    <MdOutlineSportsEsports size={22} /> Gaming
                </li>
                <li className="flex items-center gap-3 hover:bg-gray-100 p-2 rounded-lg cursor-pointer">
                    <MdMovie size={22} /> Movies
                </li>
            </ul>

            <h1 className="font-bold mt-6 mb-2 text-gray-700">Watch Later</h1>
            <ul className="space-y-3">
                <li className="flex items-center gap-3 hover:bg-gray-100 p-2 rounded-lg cursor-pointer">
                    <MdOutlineMusicNote size={22} /> Music
                </li>
                <li className="flex items-center gap-3 hover:bg-gray-100 p-2 rounded-lg cursor-pointer">
                    <MdOutlineSportsSoccer size={22} /> Sports
                </li>
                <li className="flex items-center gap-3 hover:bg-gray-100 p-2 rounded-lg cursor-pointer">
                    <MdOutlineSportsEsports size={22} /> Gaming
                </li>
                <li className="flex items-center gap-3 hover:bg-gray-100 p-2 rounded-lg cursor-pointer">
                    <MdMovie size={22} /> Movies
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;



// import React from 'react';

// const Sidebar = () => {
//     return (
//         <div className="p-5 shadow-lg w-48">
//             <ul>
//                 <li>Home</li>
//                 <li>Shorts</li>
//                 <li>Videos</li>
//                 <li>Live</li>
//             </ul>
//             <h1 className='font-bold'>Subscriptions</h1>
//             <ul>
//                 <li>Music</li>
//                 <li>Sports</li>
//                 <li>Gaming</li>
//                 <li>Movies</li>
//             </ul>
//             <h1 className='font-bold pt-5'>Watch Later</h1>
//             <ul>
//                 <li>Music</li>
//                 <li>Sports</li>
//                 <li>Gaming</li>
//                 <li>Movies</li>
//             </ul>
//         </div>
//     )
// }

// export default Sidebar;