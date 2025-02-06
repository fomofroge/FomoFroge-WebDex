import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-6 mt-8">
      <div className="text-center text-gray-600">
        Built with ❤️ by FomoFroge Team |{' '}
        <a
          href="https://github.com/your-repo"
          target="_blank"
          rel="noopener noreferrer"
          className="text-green-600 hover:underline"
        >
          GitHub
        </a>
      </div>
    </footer>
  );
};

export default Footer;