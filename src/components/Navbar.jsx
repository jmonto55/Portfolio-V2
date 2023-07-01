import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { MdDarkMode, MdLightMode } from 'react-icons/md';
import { HiOutlineMenuAlt3 } from 'react-icons/hi';
import { VscChromeClose } from 'react-icons/vsc';
import { styles } from '../styles';
import { navLinks } from '../constants';

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [dark, setDark] = useState(true);
  const ref1 = useRef();

  useEffect(() => {
    const handler = (event) => {
      if (toggle && ref1.current && !ref1.current.contains(event.target)) {
        setToggle(!toggle);
      }
    };
    document.addEventListener('mousedown', handler);
  }, [toggle]);

  const toggleTheme = () => {
    const htmlElement = document.querySelector('html');
    setDark(!dark);
    if (htmlElement.classList.contains('dark')) {
      htmlElement.classList.remove('dark');
    } else {
      htmlElement.classList.add('dark');
    }
  };

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-4 sm:py-2 fixed top-0 z-20 bg-primary dark:bg-slate-200`}
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
          <p className="text-2xl font-bold flex">
            <span className="text-red-600">{"<"}</span>
            <span className="text-neutral-200 dark:text-neutral-900">Jm</span>
            <span className="text-red-600">{"/>"}</span>
          </p>
          <p className="sm:block hidden text-white text-[20px] font-bold cursor-pointer dark:text-neutral-800">
            jose.montoya
          </p>
        </Link>
        <div className="flex w-3/4 justify-end items-center pr-5 text-white dark:text-neutral-900">
          <MdDarkMode onClick={toggleTheme} className={`cursor-pointer text-lg ${dark ? 'hidden' : 'block'}`} />
          <MdLightMode onClick={toggleTheme} className={`cursor-pointer text-lg ${!dark ? 'hidden' : 'block'}`} />
        </div>
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                active === link.title
                  ? "text-white dark:text-neutral-600"
                  : "text-neutral-300 dark:text-neutral-800"
              } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(link.title)}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <VscChromeClose
            className={`${toggle ? 'block' : 'hidden' } text-lg w-[22px] h-[22px] object-contain cursor-pointer dark:text-neutral-900`}
            onClick={() => setToggle(false)}
          />

          <HiOutlineMenuAlt3
            className={`${toggle ? 'hidden' : 'block' } w-[24px] h-[24px] object-contain cursor-pointer dark:text-neutral-900`}
            onClick={() => setToggle(true)}
          />
          <div
            ref={ref1}
            className={`${!toggle ? 'ease-in-out duration-700 -right-40 -top-10 opacity-0' : 'ease-out duration-700 top-16 right-8 opacity-100'} shadow-5xl border-2 border-t-0 border-l-0 border-black/25 backdrop-filter backdrop-blur-sm flex p-6 black-gradient absolute mx-4 my-2 min-w-[140px] z-10 rounded-xl dark:bg-gradient-to-r from-slate-100 to-slate-300  dark:text-neutral-900`}
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