import { useState, useEffect, useMemo } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { FaEuroSign } from "react-icons/fa";
import { useLirMenuStore } from "../store";

const filterMenus = (menus, slug) => {
  return menus.filter((item) => item.slug === slug)[0];
};

const SinglePost = () => {
  const navigate = useNavigate();
  const { slug } = useParams();
  const allMenus = useLirMenuStore.getState().menu;

  // const visibleTodos = useMemo(() => filterTodos(todos, tab), [todos, tab]);
  const entry = useMemo(() => filterMenus(allMenus, slug), [slug]);

  // const [entry, setEntry] = useState(
  //   allMenus.filter((item) => item.slug === slug)[0]
  // );

  const onClick = () => {
    navigate(-1);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  return (
    <>
      <main className="pb-5 page">
        <div className="recipe-page animate-txtBlur">
          {/* hero */}
          <section className="grid gap-12 sm:grid-flow-col">
            <img
              src={entry.image.url}
              alt={
                entry.image.description === null
                  ? entry.desc
                  : entry.image.description
              }
              title={entry.title}
              className="h-[400px] w-full object-cover rounded-xl "
              onClick={onClick}
            />
            <article className="flex flex-col justify-center">
              <h2 className="m-0 mb-[1.38rem] text-2xl sm:text-3xl font-bold leading-[1.75] capitalize  text-primaryGreen tracking-wide">
                {entry.title}
              </h2>

              {entry.blockText &&
                entry.blockText.split("\n").map((line, index) => (
                  <p key={index} className="pb-2 font-light tracking-wide">
                    {line}
                  </p>
                ))}

              {/* icons */}
              <div className="flex justify-start grid-cols-[repeat(4,1fr)] gap-4 text-center mx-0 my-8">
                {entry.price?.length > 0 && (
                  <article className="flex items-center mx-4">
                    <FaEuroSign size={16} />
                    <h5 className="mx-2 mb-0 font-semibold text-primaryGreen size-6">
                      {entry.price}
                    </h5>
                  </article>
                )}
              </div>
            </article>
          </section>
          {/* rest of the content */}
          <section className="recipe-content">
            {/* <article>
              <h4>instructions</h4>
              {instructions.map((item, index) => {
                return (
                  <div key={index} className="single-instruction">
                    <header>
                      <p>step {index + 1}</p>
                      <div></div>
                    </header>
                    <p>{item}</p>
                  </div>
                );
              })}
            </article> */}
            {/* 
                        <article className="second-column">
              <div>
                <h4>ingredients</h4>
                {ingredients.map((item, index) => {
                  return (
                    <p key={index} className="single-ingredient">
                      {item}
                    </p>
                  );
                })}
              </div>
              <div>
                <h4>tools</h4>
                {tools.map((item, index) => {
                  return (
                    <p key={index} className="single-tool">
                      {item}
                    </p>
                  );
                })}
              </div>
            </article> */}
          </section>
        </div>
        <div className="flex justify-end w-full h-fit">
          {/* <Link to="/menu"> */}
          <button
            aria-label="back"
            className="px-4 py-2 mt-5 text-base font-extrabold text-white rounded-md border transition-colors duration-300 cursor-pointer bg-primaryGreen hover:bg-white hover:border-primaryGreen hover:text-primaryGreen"
            onClick={onClick}
          >
            Back
          </button>
          {/* </Link> */}
        </div>
      </main>
    </>
  );
};
export default SinglePost;
