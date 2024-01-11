import { useEffect, useState } from 'react';
import { useApi } from '@backstage/core-plugin-api';
import { helloApiRef } from '../api/types';

export const useHelloObjects = () => {
    const [loading, setLoading] = useState<boolean>(true);
    const [status, setStatus] = useState<string>('');
    const [error, setError] = useState<boolean>(false);
    const helloApi = useApi(helloApiRef);
    const getObjects = async () => {
      try {
        const health = await helloApi.getHealth();
        setStatus(health.status);
      } catch (e) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    useEffect(() => {
      getObjects();
    });
    return {
      error,
      loading,
      status,
    }
}