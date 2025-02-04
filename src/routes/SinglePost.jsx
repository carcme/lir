import { useCallback, useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { FaEuroSign } from "react-icons/fa";

import client from "../client";

export default function SinglePost() {
  const { id } = useParams();
  const [entry, setEntry] = useState([]);

  const sanitise = useCallback((rawData) => {
    const items = rawData.map((data) => {
      console.log("🚀 ~ slides ~ data:", data);
      const { title, desc, featured, slug, price, block } = data.fields;
      console.log("🚀 ~ items ~ data.fields:", data.fields);
      const id = data.sys.id;
      const image = data.fields.image.fields.file.url;

      return { id, title, desc, image, featured, slug, price, block };
    });
    console.log("🚀 ~ slides ~ slides:", items);
    setEntry(items[0]);
  }, []);

  const getEntry = useCallback(async () => {
    try {
      const resp = await client.getEntries({
        content_type: "lirMenuItem",
        "sys.id": `${id}`,
      });
      const data = resp.items;

      if (data) sanitise(data);
      else setEntry([]);
    } catch (error) {
      console.log("🚀 ~ SinglePost ~ error:", error);
    }
  }, []);

  useEffect(() => {
    getEntry();
    window.scrollTo(0, 0);
  }, [id]);
  return (
    <>
      <main className="pt-32 pb-16 page">
        <div className="recipe-page">
          {/* hero */}
          <section className="grid sm:grid-flow-col gap-12">
            <img
              src={entry.image}
              alt={entry.title}
              title={entry.title}
              className="h-[400px] w-full object-cover rounded-lg"
            />
            <article className="flex flex-col justify-center">
              <h2 className="m-0 mb-[1.38rem] text-2xl sm:text-3xl md:text-5xl font-Inconsolata font-normal leading-[1.75] capitalize tracking-wide]">
                {entry.title}
              </h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
                beatae animi laudantium recusandae aut exercitationem voluptates
                magnam, quasi nam! Consequatur magni impedit accusamus amet
                tenetur quam in exercitationem eius earum, minima minus. Eveniet
                quasi incidunt placeat praesentium repellendus. Ullam,
                perspiciatis?
              </p>
              {/* icons */}
              <div className="flex justify-start grid-cols-[repeat(4,1fr)] gap-4 text-center mx-0 my-8">
                {entry.price?.length > 0 && (
                  <article className="flex mx-4 items-center">
                    <FaEuroSign size={16} />
                    <h5 className="mb-0 mx-2 text-primaryGreen font-semibold size-6">
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
        <div className="w-full flex h-fit justify-end">
          <Link to="/menu">
            <button className="px-4 py-2 rounded-md mt-5  bg-primaryGreen font-extrabold text-white text-base  transition-colors duration-300 cursor-pointer hover:bg-white hover:text-primaryGreen font-mono">
              Back
            </button>
          </Link>
        </div>
      </main>
    </>
  );
}
