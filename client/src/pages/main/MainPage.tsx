import './MainPage.scss';
import LanguageSwitch from '#/features/languageSwitch';
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
