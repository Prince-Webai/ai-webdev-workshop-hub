import React from 'react';

const FloatingPhoto = () => {
  return (
    <div className="fixed top-24 right-6 z-50 animate-float">
      <img
        src="/placeholder.svg"
        alt="Floating Profile"
        className="w-24 h-24 rounded-full border-4 border-workshop-cyan shadow-lg neon-border object-cover"
      />
    </div>
  );
};

export default FloatingPhoto;