// Get the image from the assets folder

function getAssetURL(imageName) {
  return new URL(`../assets/${imageName}`, import.meta.url).href;
}
function getAssetImageURL(imageName) {
  return new URL(`/image/${imageName}`, import.meta.url).href;
}
export { getAssetURL };
export { getAssetImageURL };
