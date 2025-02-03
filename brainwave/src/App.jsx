import ButtonGradient from "./assets/svg/ButtonGradient";
import Button from "./Components/Button";

const App = () => {
  return (
    <>
      <h1 className="text-3xl font-bold underline">Hey you</h1>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Button className="mt-10" href="">
          Something
        </Button>
      </div>
      <ButtonGradient />
    </>
  );
};

export default App;
