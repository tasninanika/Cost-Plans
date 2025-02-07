import PriceOption from "../PriceOption/PriceOption";

const PriceOptions = () => {
  const priceOptions = [
    {
      id: 1,
      name: "Basic Glow Package",
      price: 30,
      features: [
        "Face cleansing",
        "Basic facial",
        "Threading (Eyebrows & Upper lip)",
        "Light makeup",
      ],
    },
    {
      id: 2,
      name: "Bridal Radiance Package",
      price: 120,
      features: [
        "Luxury facial",
        "Full body waxing",
        "HD bridal makeup",
        "Hair styling",
        "Manicure & Pedicure",
      ],
    },
    {
      id: 3,
      name: "Premium Skin Care Package",
      price: 80,
      features: [
        "Deep cleansing facial",
        "Gold facial treatment",
        "Eyebrow shaping",
        "Hydrating face mask",
        "Hand & foot spa",
      ],
    },
    {
      id: 4,
      name: "Hair & Beauty Combo",
      price: 50,
      features: [
        "Haircut & Styling",
        "Hair spa treatment",
        "Face cleanup",
        "Eyebrow threading",
        "Light party makeup",
      ],
    },
    {
      id: 5,
      name: "Luxury Pamper Package",
      price: 150,
      features: [
        "Full body massage",
        "Aromatherapy facial",
        "Premium hair treatment",
        "Gel manicure & pedicure",
        "Luxury bridal makeup",
      ],
    },
  ];

  return (
    <div className="m-12">
      <h2 className="text-5xl text-center mb-20">Best Prices in the town</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {priceOptions.map((option) => (
          <PriceOption key={option.id} option={option}></PriceOption>
        ))}
      </div>
    </div>
  );
};

export default PriceOptions;
