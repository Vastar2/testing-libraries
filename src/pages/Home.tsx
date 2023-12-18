import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <p className="text-center">Hello, Pavel! This is HOME page</p>
    </>
  );
};

export default Home;
