import { Link } from "react-router-dom";
const Sidebar = () => {
  return (
    <aside className="sidebar h-screen  bg-gray-900 text-white w-[20vw] p-4">
      <nav>
        <ul className="gap-4 flex flex-col">
            <Link to='/'><li className="bg-gray-600 text-center py-2 text-[18px]"><p >Notes</p></li></Link>
            <Link to='/trashnotes'> <li className="bg-gray-600 text-center py-2 text-[18px]"><p >Trash</p></li></Link>
            <Link to='/setting'><li className="bg-gray-600 text-center py-2 text-[18px]">< p >Setting</p></li></Link>
            <Link to='/help'> <li className="bg-gray-600 text-center py-2 text-[18px]">< p >Help</p></li></Link>
          
          
         
          
        
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;

