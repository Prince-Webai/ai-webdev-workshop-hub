import React from 'react';

const FloatingPhoto = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="animate-float">
        <img
          src="/placeholder.svg"
          alt="Prince Gaur Profile"
          className="w-24 h-24 rounded-full border-4 border-workshop-cyan shadow-lg neon-border object-cover"
        />
      </div>
      <span className="mt-2 text-workshop-cyan font-semibold">Prince Gaur</span>
    </div>
  );
};

export default FloatingPhoto;