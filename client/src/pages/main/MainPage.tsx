import './MainPage.scss';
import LanguageSwitch from '#/widgets/languageSwitch';
import SettingsPicker from '#/widgets/settingsPicker';

export default function MainPage() {
  return (
    <div className="main-page">
      <LanguageSwitch />
      <h1>Load Distance</h1>
      <SettingsPicker />
    </div>
  );
}
