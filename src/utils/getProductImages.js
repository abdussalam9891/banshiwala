export function getProductImages(product) {
  const { folder, imageId } = product;

  return {
    front: `/src/assets/${folder}/${imageId}-1.webp`,
    back: `/src/assets/${folder}/${imageId}-2.webp`,
  };
}
