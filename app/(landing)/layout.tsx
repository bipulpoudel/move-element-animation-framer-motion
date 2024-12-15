import Header from "@/components/layout/header";

const LandingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col w-full h-full">
      <Header />
      <div className="flex flex-col w-full h-full mt-16">{children}</div>
    </div>
  );
};

export default LandingLayout;
