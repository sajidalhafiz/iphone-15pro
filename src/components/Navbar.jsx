import { appleImg, bagImg, searchImg } from '../utils'
import { navLists } from '../constants';

const Navbar = () => {
    return (
        <header className='w-full py-5 px-5 sm:px-10 flex justify-between items-center'>
            <nav className='flex w-full screen-max-width'>
                <img src={appleImg} alt="Apple-icon" width={14} height={18} />
                <div className='flex flex-1 justify-center max-sm:hidden'>
                    {navLists.map(nav => (
                        <div key={nav} className='px-5 text-sm text-gray hover:text-white cursor-pointer transition-all'>
                            {nav}
                        </div>
                    ))}
                </div>
                <div className='flex max-sm:flex-1 items-baseline gap-7 max-sm:justify-end'>
                    <img src={searchImg} alt="Search-icon" width={18} height={18} />
                    <img src={bagImg} alt="Bag-icon" width={18} height={18} />
                </div>
            </nav>
        </header>
    );
};

export default Navbar;