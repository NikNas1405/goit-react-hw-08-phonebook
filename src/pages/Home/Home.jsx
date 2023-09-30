import main from '../../components/Images/main.jpg';
import { Title, Wrapper, ImageHolder, ButtonLink } from './Home.styled';

const Home = () => {
  return (
    <Wrapper>
      <Title>
        Hello! Glad to see you in the your private phone book. Let`s start?
      </Title>
      <ButtonLink to="contacts">Go</ButtonLink>
      <ImageHolder>
        <img src={main} alt="background for the main page with beautyful ewe" />
      </ImageHolder>
    </Wrapper>
  );
};

export default Home;
