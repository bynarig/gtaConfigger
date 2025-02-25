import Select from '#/shared/ui/Select';
import {useTranslation} from 'react-i18next';

const languages = [
  {value: 'en', label: '🇺🇸'},
  {value: 'ua', label: '🇺🇦'},
  {value: 'ru', label: '🇷🇺'},
];

export default function LanguageSwitch() {
  const {i18n} = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng); // Change the language
  };

  return (
    <Select
      options={languages} // Pass the array of objects
      onChange={(selectedValue) => changeLanguage(selectedValue)} // Pass the selected value
    />
  );
}
