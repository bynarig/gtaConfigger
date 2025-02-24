import Select from '#/shared/ui/select';
import { useTranslation } from 'react-i18next';

const languages = [
  { value: 'en', label: 'English' },
  { value: 'ua', label: 'Українська' },
  { value: 'ru', label: 'Русский' },
];

export default function LanguageSwitch() {
  const { i18n } = useTranslation();

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