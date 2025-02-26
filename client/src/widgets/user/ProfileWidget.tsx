import {useSelector} from 'react-redux';
import {RootState} from '#/shared/store';
import multiLangGreetings from '#/entities/multilangGreetings';
export default function ProfileWidget() {
  const userName = useSelector((state: RootState) => state.user.name);
  const greeting = multiLangGreetings();
  return (
    <div>

      <h1 className='text-7xl'>{greeting}, {userName}</h1>
      <div className="avatar">
        <div className="w-52 h-52 rounded-xl">
          <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" alt="" />
        </div>
      </div>
    </div>
  );
}