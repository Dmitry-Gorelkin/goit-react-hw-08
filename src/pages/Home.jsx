import { Helmet } from 'react-helmet';
import { Section } from '../components/UI/Section/Section.styled';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Phone book</title>
      </Helmet>

      <h1>Welcome to Your Contact Book</h1>
      <Section>
        <p>
          Welcome to your personal Contact Book! Here, you can effortlessly save and manage all your
          contacts in one place. Enjoy the convenience of organizing and accessing your contacts
          anytime, anywhere. Start adding your contacts now and experience the simplicity of our
          intuitive interface.
        </p>
      </Section>
    </>
  );
};

export default Home;
