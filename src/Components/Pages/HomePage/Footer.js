import chefsMarioAndAdrianAImage from '../../../assets/Footer.webp';
import './Footer.css'

const OurStory = () => {
  return (
    <section className="container grid our-story">
      <div className="our-story-description">
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p>
            We, Mario and Adrian, founders of Little Lemon, hail from a humble village along the Mediterranean coast.
            Growing up in a poor family, we found joy and inspiration in our grandmother's kitchen, where she taught
            us the secrets of traditional recipes passed down through generations. Despite the challenges of our
            upbringing, we dreamed of sharing our culinary heritage with the world. Driven by passion and determination,
            we moved to Chicago and established Little Lemon. Our restaurant is now celebrated for its fusion of
            timeless Mediterranean flavors and modern culinary techniques. Every dish we create tells a story of love,
            resilience, and our deep connection to our roots.
        </p>

      </div>
      <div className="our-story-chefs">
        <img src={chefsMarioAndAdrianAImage} alt="Chefs Mario and Adrian" />
      </div>
    </section>
  );
};

export default OurStory;
