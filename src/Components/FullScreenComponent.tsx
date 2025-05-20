import React from "react";

type FullScreenProps = {
  children?: React.ReactNode | null;
};

export const FullScreenComponent: React.FC<FullScreenProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex justify-center">
      <div className="w-full sm:w-4/5 space-y-4 rounded-sm bg-neutral-500/50">
        {children}
      </div>
    </div>
  );
};


