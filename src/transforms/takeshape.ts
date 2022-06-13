import {
  ProductPageDetail,
  ProductPageDetails,
  ProductPageOptions,
  ProductPagePolicies,
  ProductPagePolicy,
  ProductPageProductComponent,
  ProductPageTakeshapeItem
} from 'features/ProductPage/types';

function buildImageUrl(assetPath: string) {
  return `https://images.takeshape.io/${assetPath}`;
}

function getProductComponent(productComponent?: string): ProductPageProductComponent {
  switch (productComponent) {
    case 'withImage':
      return 'withImage';
    case 'withImageGrid':
    default:
      return 'withImageGrid';
  }
}

export function takeshapeItemToProductPageDetails({ details }: ProductPageTakeshapeItem): ProductPageDetails {
  if (!details) {
    return null;
  }

  return {
    text: {
      // Using canvas fields to support inline tags only
      primary: details.text.primaryHtml.replace(/<\/?p>/g, ''),
      secondary: details.text.secondaryHtml.replace(/<\/?p>/g, '')
    },
    details: details.details.map<ProductPageDetail>(
      (detail): ProductPageDetail => ({
        image: {
          url: buildImageUrl(detail.image.path),
          altText: detail.image.description ?? ''
        },
        description: detail.descriptionHtml.replace(/<\/?p>/g, '')
      })
    )
  };
}

export function takeshapeItemToProductPagePolicies({ policies }: ProductPageTakeshapeItem): ProductPagePolicies {
  if (!policies) {
    return null;
  }

  return {
    policies: policies.policies.map<ProductPagePolicy>((policy) => ({
      name: policy.nameHtml.replace(/<\/?p>/g, ''),
      description: policy.descriptionHtml.replace(/<\/?p>/g, ''),
      image: {
        url: buildImageUrl(policy.image.path),
        altText: policy.image.description ?? ''
      }
    }))
  };
}

export function takeshapeItemToProductPageOptions(item: ProductPageTakeshapeItem): ProductPageOptions {
  return {
    showDetails: item.showDetails ?? false,
    showPolicies: item.showPolicies ?? false,
    showReviews: item.hideReviews === true ? false : true,
    showRelatedProducts: item.hideRelatedProducts === true ? false : true,
    component: getProductComponent(item.productComponent)
  };
}
