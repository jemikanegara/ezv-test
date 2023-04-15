import { useRouter } from "next/router";
import { ReactElement, useEffect, useState } from "react";
import { TbTruckLoading } from 'react-icons/tb'

export interface LoadingCheckProps {
  children: ReactElement;
}

// source: https://stackoverflow.com/questions/55624695/loading-screen-on-next-js-page-transition
export default function LoadingCheck({children} : LoadingCheckProps) {
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  useEffect(() => {
      const handleStart = (url: string) => (url !== router.asPath) && setLoading(true);
      const handleComplete = (url: string) => (url === router.asPath) && setLoading(false);

      router.events.on('routeChangeStart', handleStart)
      router.events.on('routeChangeComplete', handleComplete)
      router.events.on('routeChangeError', handleComplete)

      return () => {
          router.events.off('routeChangeStart', handleStart)
          router.events.off('routeChangeComplete', handleComplete)
          router.events.off('routeChangeError', handleComplete)
      }
  }, [router.asPath, router.events])
  
  if (loading) {
    return (
      <div className="h-screen w-screen flex justify-center items-center fixed bg-white">
        <div>
          <TbTruckLoading size={100} /> Loading page...
        </div>
      </div>
    )
  }
  if (children) return children
  return null
}
