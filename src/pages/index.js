import DashboardLayout from "@/component/Layouts/DashboardLayout";
import RootLayout from "@/component/Layouts/RootLayout";
import Head from "next/head";

const HomePage = () => {
  return (
    <div>
      <Head>
        <title>Home Page</title>
        <meta
          name="My Next App"
          description="This page is creating with next js "
        />
      </Head>
      <h1>This is Home Page</h1>
    </div>
  );
};

export default HomePage;

HomePage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
