"use client";
import Link from "next/link";

export default function FFATNav({ buttons }) {
  return (
    <nav className="flex justify-around py-4">
      {buttons.map((btn, i) => (
        <Link key={i} href={btn.path}>
          <div className="text-center">
            <div className="text-2xl">{btn.icon}</div>
            <div className="text-sm">{btn.label}</div>
          </div>
        </Link>
      ))}
    </nav>
  );
}
