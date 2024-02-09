"use client";
import { useEffect, useState } from 'react';
import Login from './CreateUsers/Login/page';
import { useRouter } from 'next/navigation';

export default function Home() {
  const { push } = useRouter();

  useEffect(() => {
    const timeout = setTimeout(() => {
       push('/CreateUsers/Login')
    }, 3000);

    return () => clearTimeout(timeout);
  }, []); 

 

  return (
    <main className="flex min-h-screen flex-col bg-blue-600 items-center justify-center p-2 sm:p-5 ">
      <h1 className="sm:text-9xl text-slate-400 ">
        <strong className="text-slate-100"> eShuri </strong>Web
      </h1>
    </main>
  );
}
