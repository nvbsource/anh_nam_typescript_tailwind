import React from "react";
type Props = {
  children: JSX.Element;
};
const DefaultLayout: React.FC<Props> = ({ children }) => {
  return (
    <div className="app-layout-blank flex flex-auto flex-col h-[100vh]">
      <main className="h-full">
        <div className="page-container relative h-full flex flex-auto flex-col">
          {children}
        </div>
      </main>
    </div>
  );
};

export default DefaultLayout;
