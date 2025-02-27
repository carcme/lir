import { useLirMenuStore } from "../store";

const accessToken =
  "e448ca0c6ff57f7f20b50928909200db225d6ef7645acb99f41a315d0b20beb1";
const spaceId = "j44xk2xv8em8";
const mySpaceId = import.meta.env.VITE_CONTENTFUL_SPACE_ID;
const myaccessToken = import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN;

export const getMenus = async () => {
  const query = `
    {
  en: lirMenuItemCollection(locale: "en") {
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
  de: lirMenuItemCollection(locale: "de") {
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
  lirDocsCollection{
    items{
      type
      doc {
        title
        url
      }
    }
  }
}
    `;

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
    .then((res) => {
      return res.json();
    })
    .then((response) => {
      const { data } = response;

      // get en lang items
      useLirMenuStore.setState({
        menuEN: data ? data.en.items : [],
      });
      // get de lang items
      useLirMenuStore.setState({
        menuDE: data ? data.de.items : [],
      });
      // get documents items
      useLirMenuStore.setState({
        lirDocs: data ? data.lirDocsCollection.items : [],
      });
    })
    .catch((error) => {
      console.log("🚀 ~ getMenus ~ FAILED!!:", error);
    });
};
