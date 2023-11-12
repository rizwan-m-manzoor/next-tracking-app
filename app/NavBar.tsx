import Link from 'next/link';
import React from 'react';

const NavBar = () => {
  return (
    <div className="flex gap-2 bg-slate-200 p-5">
      <Link href="/">TrackingApp</Link>
      <Link href="/users">Users</Link>
    </div>
  );
};

export default NavBar;
