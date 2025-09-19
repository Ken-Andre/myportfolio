import React from 'react';

const Footer = () => {
  return (
    <footer className="border-t border-white/10 py-8">
      <div className="container mx-auto text-center text-sm text-foreground/60">
        <p>
          © {new Date().getFullYear()} André Kenmogne. Tous droits réservés.
        </p>
        <p className="mt-2">
          Construit avec Next.js, Tailwind CSS & Vercel.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
