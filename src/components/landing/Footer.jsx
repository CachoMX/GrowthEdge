import React from 'react';

export default function Footer() {
  return (
    <footer className="py-12 px-4 border-t border-slate-200">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <p className="text-slate-900 font-semibold text-base">GrowthEdge</p>
        </div>
        <p className="text-slate-500 text-xs max-w-2xl mx-auto text-center">
          This site is not a part of the Facebook™ website or Meta Platforms, Inc. Additionally, this site is NOT endorsed by Facebook™ in any way. Facebook™ is a trademark of Meta Platforms, Inc.
        </p>
        <p className="text-slate-500 text-xs text-center mt-6">
          © {new Date().getFullYear()} GrowthEdge. All rights reserved.
        </p>
      </div>
    </footer>
  );
}