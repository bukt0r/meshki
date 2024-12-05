import RectangleBanner from "../components/HomePage/RectangleBanner/page";
import MainPage from "../components/HomePage/MainPage/page";
import Collections from "../components/HomePage/Collections/page";
import Novelty from "../components/HomePage/Novelty/page";

export default function Home() {
  return (
    <main>
      <MainPage/>
      <RectangleBanner/>
      <Collections/>
      <Novelty/>
    </main>
  );
}
