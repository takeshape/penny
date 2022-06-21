import { GetStorefrontResponse } from './queries';
import { StorefrontComponent, StorefrontTakeshapeComponent } from './types';

export function getComponent(component: StorefrontTakeshapeComponent): StorefrontComponent {}

export function getComponents(response: GetStorefrontResponse): StorefrontComponent[] {
  const components = response?.storefront?.components;

  if (!components) {
    return null;
  }

  return components.map(getComponent);
}
