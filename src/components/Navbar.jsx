import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { styles } from '../styles';
import { navLinks } from '../constants';
import { logo, menu, close } from '../assets';

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const ref1 = useRef();

  useEffect(() => {
    const handler = (event) => {
      if (toggle && ref1.current && !ref1.current.contains(event.target)) {
        setToggle(!toggle);
      }
    };
    document.addEventListener('mousedown', handler);
  }, [toggle]);

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-4 sm:py-2 fixed top-0 z-20 bg-primary`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to='/'
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" className="w-16 h-16 object-contain" />
          <p className="sm:block hidden text-white text-[20px] font-bold cursor-pointer">
            jose.montoya
          </p>
        </Link>
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                active === link.title
                  ? "text-white"
                  : "text-[#d0cecf]"
              } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(link.title)}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={close}
            alt="close"
            className={`${toggle ? 'block' : 'hidden' } w-[22px] h-[22px] object-contain cursor-pointer`}
            onClick={() => setToggle(false)}
          />
          <img
            src={menu}
            alt="menu"
            className={`${toggle ? 'hidden' : 'block' } w-[24px] h-[24px] object-contain cursor-pointer`}
            onClick={() => setToggle(true)}
          />
          <div
            ref={ref1}
            className={`${!toggle ? 'ease-in-out duration-700 -right-40 -top-10 opacity-0' : 'ease-out duration-700 top-16 right-8 opacity-100'} shadow-5xl border-2 border-t-0 border-l-0 border-black/25 backdrop-filter backdrop-blur-sm flex p-6 black-gradient absolute mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className="list-none flex justify-end items-start flex-col gap-4">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${
                    active === link.title
                      ? "text-white"
                      : "text-[##d0cecf]"
                  } font-poppins font-medium cursor-pointer text-[16px]`}
                  onClick={() => {
                    setActive(link.title);
                    setToggle(!toggle);
                  }}
                >
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar