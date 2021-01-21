import React, { memo, ReactNode } from 'react';

interface YardProps {
  children: ReactNode;
}

const YardComponent = ({ children }: YardProps) => {
  return <div className="yard">{children}</div>;
};

const Yard = memo(YardComponent);

export default Yard;
