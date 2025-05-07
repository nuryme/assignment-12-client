import SectionTitleUnderline from "../shared components/SectionTitleUnderline";
import Card from "../shared components/Card";

const PremiumMembers = () => {
  return (
    <div className="my-24 container mx-auto">
      <SectionTitleUnderline underline={'premium'} after={'members'}></SectionTitleUnderline>
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {/* <Card></Card> */}
      </div>
    </div>
  );
};

export default PremiumMembers;
