import { Home, MetaData, MyContainer } from "../../../components";

const HomePage = () => {
  return (
    <MyContainer minH={"40vh"}>
      <MetaData title={`Vecros Blog Application`} />
      <Home />
    </MyContainer>
  );
};

export default HomePage;
