import React from 'react';
import { useEntity } from '@backstage/plugin-catalog-react';
import { useHelloObjects } from '../../hooks/useHelloPluginObjects'

export const ExampleComponent = () => {
  const { entity } = useEntity();
  const { error, loading, status } = useHelloObjects();
  if (loading) {
    return <div>Loading</div>;
  }
  if (error) {
    return <div>Error</div>;
  }
  return (<>
    <div>Hello {entity.metadata.name}</div>
    <div>Status: {status}</div>
  </>);
}