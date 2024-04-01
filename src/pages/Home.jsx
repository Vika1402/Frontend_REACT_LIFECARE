import Hero from "../components/Hero.jsx";
import Biography from "../components/Biography.jsx";
import Departments from "../components/Departments.jsx";
import MessageForm from "../components/MessageForm.jsx";
const Home = () => {
  return (
    <>
      <Hero
        title={"Welcome To Life Care Medical Institute"}
        imageUrl={"/doctor2.png"}
      />
      <Biography imageUrl={"/about.png"} />
      <Departments />
      <MessageForm />
    </>
  );
};

export default Home;
