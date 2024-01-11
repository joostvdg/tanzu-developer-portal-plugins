import { HelloApi } from './types';
import { DiscoveryApi } from '@backstage/core-plugin-api';

export class HelloBackendClient implements HelloApi {
  private readonly discoveryApi: DiscoveryApi;
  constructor(options: {
    discoveryApi: DiscoveryApi;
  }) {
    this.discoveryApi = options.discoveryApi;
  }
  private async handleResponse(response: Response): Promise<any> {
    if (!response.ok) {
      throw new Error();
    }
    return await response.json();
  }
  async getHealth(): Promise<{ status: string; }> {
    const url = `${await this.discoveryApi.getBaseUrl('hello')}/health`;
    const response = await fetch(url, {
      method: 'GET',
    });
    return await this.handleResponse(response);
  }
}