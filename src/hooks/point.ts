import { useStore } from './useStore';
import { useEffect } from 'react';

export const usePoint = (status: boolean) => {
  const [state, dispatch] = useStore();
  useEffect(() => {
    console.log(status)
  }, [status]);
}