import MainLayout from "../../layouts/MainLayout";
import HomeModules from "../../modules/Home";
const Home = () => {
  document.title = "Its Me";
  return (
    <MainLayout>
      <HomeModules />
    </MainLayout>
  );
};
export default Home;
