'use client';
import { redirect } from 'next/navigation';
import { useEffect } from 'react';

function MentorDashboard() {
  const handleRetrieveToken = () => {
    if (typeof window !== 'undefined' && window.localStorage) {
      return JSON.stringify(localStorage.getItem('token'));
    }
  };
  useEffect(() => {
    const token = handleRetrieveToken();
    if (token) {
      redirect('/mentor/login');
    }
  }, []);
  return <div>hello from mentor dashboard</div>;
}

export default MentorDashboard;
