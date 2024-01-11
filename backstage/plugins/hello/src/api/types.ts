import { createApiRef } from '@backstage/core-plugin-api';

export interface HelloApi {
    getHealth(): Promise<{ status: string; }>;
}

export const helloApiRef = createApiRef<HelloApi>({
    id: 'plugin.hello.service', 
});