import LanguageSwitch from '#/features/languageSwitch';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '#/shared/store';
import {login, logout} from '#/shared/store/user/userSlice';

export default function Navbar() {
  const isLoggedIn = useSelector((state: RootState) => state.user.isLogged);
  const dispatch = useDispatch();
  const userData = {
    id: '123',
    name: 'John',
    surname: 'Doe',
    email: 'john.doe@example.com',
    role: 'user',
  };

  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl" href="/main">GVC</a>
      </div>
      <div className="flex-none">

        <div className="dropdown dropdown-end">
          <LanguageSwitch />

        </div>


        {isLoggedIn ? (
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">

                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
              <li>
                <button className="justify-between" onClick={() => {
                  dispatch(login(userData));
                }}>
                  Profile
                  <span className="badge">New</span>
                </button>
              </li>
              <li><a>Settings</a></li>
              <li>
                <button onClick={() => dispatch(logout())}>Logout</button>
              </li>
            </ul>
          </div>

        ) : (
          <button tabIndex={0} role="button" className="btn btn-ghost " onClick={() => dispatch(login(userData))}>
            Login
          </button>
        )}


      </div>
    </div>
  );
}