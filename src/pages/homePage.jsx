import { useNavigate, useOutletContext } from "react-router-dom";
import "/src/styles/homePage.css";

export const HomePage = () => {
  const navigate = useNavigate();
  const handleLink = () => {
    navigate("/shop");
  };
  const { setBrand } = useOutletContext();

  const handleSneaker = (brand) => {
    setBrand(brand);
    navigate(`/shop/${brand}`);
  };
  const logos = [
    { url: "/logos/jordan.webp", brand: "Jordan" },
    { url: "/logos/adidas.webp", brand: "adidas" },
    { url: "/logos/new-balance.webp", brand: "New Balance" },
    { url: "/logos/nike.webp", brand: "Nike" },
    { url: "/logos/vans.webp", brand: "Vans" },
    { url: "/logos/puma.webp", brand: "Puma" },
    { url: "/logos/converse.webp", brand: "Converse" },
    { url: "/logos/fila.webp", brand: "Fila" },
    { url: "/logos/reebok.webp", brand: "Reebok" },
  ];
  return (
    <section className="homePageContainer">
      <article className="homePageHeader">
        <p>SneakIT, Where Style Meets Comfort</p>
        <button onClick={() => handleLink()}>Start Shopping</button>
      </article>
      <article className="homePageContent">
        <p>Most selled brands</p>
        <article className="logoContainer">
          {logos.map((logo, index) => (
            <div
              key={index}
              onClick={() => handleSneaker(logo.brand)}
              className="logoOfCompany"
            >
              <img src={logo.url} alt={`image of the logo of ${logo.brand}`} />
            </div>
          ))}
        </article>
      </article>
    </section>
  );
};
