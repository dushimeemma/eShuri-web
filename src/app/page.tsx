"use client";
import { useEffect, useState } from 'react';
import Login from './CreateUsers/Login/page';

export default function Home() {
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setRedirect(true);
    }, 3000);

    return () => clearTimeout(timeout);
  }, []); 

  if (redirect) {
    return <Login />
  }

  return (
    <main className="flex min-h-screen flex-col bg-blue-600 items-center justify-center p-2 sm:p-5">
      <h1 className="text-9xl text-slate-400">
        <strong className="text-slate-100"> eShuri </strong>Web
      </h1>
    </main>
  );
}
