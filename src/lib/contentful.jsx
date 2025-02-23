import { useLirMenuStore } from "../store";

const accessToken =
  "e448ca0c6ff57f7f20b50928909200db225d6ef7645acb99f41a315d0b20beb1";
const spaceId = "j44xk2xv8em8";
const mySpaceId = import.meta.env.VITE_CONTENTFUL_SPACE_ID;
const myaccessToken = import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN;

export const getMenus = async () => {
  const query = `
    {
      lirMenuItemCollection {
        items {
          title
          desc
          blockText
          image {
            url
            description
            width
            height
          }
          featured
          slug
          tags
          price 
        }
      }
    }
    `;
  const accessToken =
    "e448ca0c6ff57f7f20b50928909200db225d6ef7645acb99f41a315d0b20beb1";

  fetch(
    `https://graphql.contentful.com/content/v1/spaces/${mySpaceId}/environments/master`,
    {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${myaccessToken}`,
      },
      body: JSON.stringify({
        query,
      }),
    }
  )
    .then((res) => res.json())
    .then((response) => {
      const { data } = response;

      useLirMenuStore.setState({
        menu: data ? data.lirMenuItemCollection.items : [],
      });
    })
    .catch((error) => {
      console.log("🚀 ~ getMenus ~ FAILED!!:", error);
    });
};
