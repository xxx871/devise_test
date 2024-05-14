// components/SetCookies.tsx
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Cookies from 'js-cookie';

const SetCookies = () => {
  const router = useRouter();
  const { query } = router;

  useEffect(() => {
    if (typeof window !== 'undefined' && query['access-token'] && query.client && query.uid) {
      Cookies.set('access-token', query['access-token'] as string);
      Cookies.set('client', query.client as string);
      Cookies.set('uid', query.uid as string);

      // トークンをクッキーに設定した後、リダイレクト
      router.replace('/');
    }
  }, [query, router]);

  return null;
};

export default SetCookies;
