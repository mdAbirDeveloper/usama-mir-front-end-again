import DashboardLayout from "../DashboardLayout/DashboardLayout";

const index = () => {
  return (
    <div className="max-w-[1200px] mx-auto min-h-screen">
      <h1 className="text-5xl font-serif font-thin text-center mt-20">this is dashboard</h1>
    </div>
  );
};

export default index;

index.getLayout = function getLayout(page) {
  return <DashboardLayout>{page}</DashboardLayout>;
};