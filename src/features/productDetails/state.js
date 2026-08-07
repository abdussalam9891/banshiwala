export const productState = {

  product: null,

  activeImageIndex: 0,

  activeTab: "description",

};

export function setProduct(product) {

  productState.product = product;

}

export function setActiveImage(index) {

  productState.activeImageIndex = index;

}

export function setActiveTab(tab) {

  productState.activeTab = tab;

}
