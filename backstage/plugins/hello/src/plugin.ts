import { 
  createPlugin, 
  createRoutableExtension,
  createApiFactory,
  discoveryApiRef
} from '@backstage/core-plugin-api';

import { rootCatalogHelloRouteRef } from './routes';

import { HelloBackendClient } from './api/HelloBackendClient';
import { helloApiRef } from './api';

export const helloPlugin = createPlugin({
  id: 'hello',
  apis: [
    createApiFactory({
      api: helloApiRef,
      deps: { discoveryApi: discoveryApiRef },
      factory: ({ discoveryApi }) => new HelloBackendClient({ discoveryApi }),
    }),
  ],
  routes: {
    root: rootCatalogHelloRouteRef,
  },
});

export const EntityHelloContent = helloPlugin.provide(
  createRoutableExtension({
    name: 'EntityHelloContent',
    component: () =>
      import('./components/ExampleComponent').then(m => m.ExampleComponent),
    mountPoint: rootCatalogHelloRouteRef,
  }),
);