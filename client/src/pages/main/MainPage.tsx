import SettingsPicker from '#/widgets/SettingsPicker';
import Navbar from '#/widgets/Navbar';
import Footer from '#/widgets/Footer';

export default function MainPage() {
  return (
    <div className="main-page">
      <Navbar />
      <h1 className="text-6xl">Load Distance</h1>
      <SettingsPicker />
      <Footer />
    </div>
  );
}
