'use client';

import { useEffect, useState } from 'react';

const TimeZoneClock = () => {
  const [idTime, setIdTime] = useState('');
  const [sgtTime, setSgtTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const options = {
        hour: '2-digit',
        minute: '2-digit',
        hour12: true,
      };

      const id = new Date().toLocaleTimeString('en-ID', {
        ...options,
        timeZone: 'Asia/Jakarta',
      });

      const sgt = new Date().toLocaleTimeString('en-SG', {
        ...options,
        timeZone: 'Asia/Singapore',
      });

      setIdTime(id);
      setSgtTime(sgt);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <span> ID {idTime}</span>
      <span>|</span>
      <span>SGT {sgtTime}</span>
    </>
  );
};

export default TimeZoneClock;
