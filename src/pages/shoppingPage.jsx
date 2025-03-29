import { ShoppingCard } from "/src/components/shoppingCard.jsx";
import { useState } from "react";
import { icons } from "/src/assets/icons.jsx";

export const ShopPage = () => {
  const [page, setPage] = useState(1);
  //funciones que contralan la paginacion, y al ahcer click auto scrollea al comienzo
  const prevPage = () => {
    if (page > 1) {
      setPage(page - 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const nextPage = () => {
    setPage(page + 1);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <>
      <ShoppingCard page={page} setPage={setPage} />
      <section className="pageControl">
        <article onClick={() => prevPage()}>{icons[1].leftArrow}</article>
        <article className="currentPage">{page}</article>
        <article onClick={() => nextPage()}>{icons[2].rightArrow}</article>
      </section>
    </>
  );
};
