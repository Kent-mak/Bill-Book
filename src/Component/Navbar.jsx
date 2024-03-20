import logo from '../Assets/logo.png';


function Navbar(){
    return(
        <div>
            <div className="flex justify-between items-center h-18 px-4  text-gray-dark border-b-2 border-gray-dark">
                <img className="my-1 w-14 h-12" src={logo} alt=""></img>
                <h1 className='w-full text-5xl font-bold text-[#EE7214]'>BILLBOOK</h1>
                <ul className="flex whitespace-nowrap item-center">
                    <li className="mx-4">
                        <a href='#'>HOME</a>
                    </li>
                    <li className="mx-4">
                        <a href='#'>MY BOOK</a>
                    </li>
                    <li className="mx-4">
                        <a href='#'>JOIN BOOK</a>
                    </li>
                    <li>
                        <a href="">LOGIN</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar;