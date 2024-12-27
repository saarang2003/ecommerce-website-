import React, { useState } from 'react';
import Search from '../common/search';
import Noty from '../common/Noty';
import { Heart } from 'lucide-react';
import { CircleUser } from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from '../../store/auth';
import { useNavigate } from 'react-router';

function Header() {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const {user} = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();


  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  }

   function handleLogout() {
      dispatch(logoutUser());
    }
  

  return (
    <div>
      <div className="relative mx-auto max-w-screen-xl py-1 font font-serif">
        GET IT OR REGRET IT, HUGE SAVINGS UP TO 90% OFF
      </div>
      <div className="px-4 shadow border-2 border-black">
        <div className="relative mx-auto  flex max-w-screen-2xl flex-col py-4 sm:flex-row sm:items-center sm:justify-between">
          <a className="flex items-center text-2xl font-black" href="/">
            <span className="mr-2 text-2xl text-blue-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                role="img"
                width="1em"
                height="1em"
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M6.925 16.875Q5.2 16.225 4.1 14.713Q3 13.2 3 11.25q0-1.975.938-3.513Q4.875 6.2 6 5.15q1.125-1.05 2.062-1.6L9 3v2.475q0 .625.45 1.062q.45.438 1.075.438q.35 0 .65-.15q.3-.15.5-.425L12 6q.95.55 1.625 1.35t1.025 1.8l-1.675 1.675q-.05-.6-.287-1.175q-.238-.575-.638-1.05q-.35.2-.738.287q-.387.088-.787.088q-1.1 0-1.987-.612Q7.65 7.75 7.25 6.725q-.95.925-1.6 2.062Q5 9.925 5 11.25q0 .775.275 1.462q.275.688.75 1.213q.05-.5.287-.938q.238-.437.588-.787L9 10.1l2.15 2.1q.05.05.1.125t.1.125l-1.425 1.425q-.05-.075-.087-.125q-.038-.05-.088-.1L9 12.925l-.7.7q-.125.125-.212.287q-.088.163-.088.363q0 .3.175.537q.175.238.45.363ZM9 10.1Zm0 0ZM7.4 22L6 20.6L19.6 7L21 8.4L17.4 12H21v2h-5.6l-.5.5l1.5 1.5H21v2h-2.6l2.1 2.1l-1.4 1.4l-2.1-2.1V22h-2v-4.6l-1.5-1.5l-.5.5V22h-2v-3.6Z"
                />
              </svg>
            </span>
            <span>Clothes & Co</span>
          </a>
          <nav className="flex pl-2">
            <ul className="flex gap-x-4">
              <li>
                <Search />
              </li>
              <li>
                <a className="text-gray-600 hover:text-blue-600" href="#">
                  <Heart />
                </a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-blue-600" href="/shop/checkout">
                  <Noty width={"25px"} color={"#122C34"} count={10} />
                </a>
              </li>
              <li className="relative">
                {/* User Profile Icon */}
                <a href="#" className="text-gray-600" onClick={toggleDropdown}>
                  <CircleUser width={"30px"} />
                </a>

                {/* Dropdown Menu */}
                {dropdownVisible && (
  <div className="z-50 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 absolute top-12 mt-2 right-0">
    <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
      <li>
        <a
          href="/shop/account"
          className="block px-4 py-2 text-black hover:bg-gray-600 dark:hover:text-white "
        >
          Personal Data
        </a>
      </li>
      <li>
        <button
           onClick={handleLogout}
          className="block w-full px-4 py-2 text-left text-black hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
        >
          Sign Out
        </button>
      </li>
    </ul>
  </div>
)}
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Header;
