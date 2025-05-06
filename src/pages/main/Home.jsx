import Banner from "../../components/Banner";
import HowItWorks from "../../components/HowItWorks";
import PremiumMembers from "../../components/PremiumMembers";
import SuccessCounter from "../../components/SuccessCounter";
import SuccessStory from "../../components/SuccessStory";

const Home = () => {
  return (
    <div className="mt-24">
      <Banner></Banner>

      <PremiumMembers></PremiumMembers>

      <div className="bg-secondary/50 py-24">
        <HowItWorks></HowItWorks>
      </div>

      <SuccessCounter></SuccessCounter>

      <div className="bg-secondary/50 py-24">
        <SuccessStory></SuccessStory>
      </div>
    </div>
  );
};

export default Home;
