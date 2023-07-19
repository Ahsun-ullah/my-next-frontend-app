import Image from "next/image";
import { useRouter } from "next/router";
import errorPic from "../assets/Pictures/404.jpg";

const ErrorPage = () => {
  const router = useRouter();

  setTimeout(() => {
    router.push("/");
  }, 3000);

  return (
    <div>
      <Image
        style={{
          display: "flex",
          justifyContent: "center",
        }}
        src={errorPic}
        alt=""
        width={400}
        height={400}
      />
    </div>
  );
};

export default ErrorPage;
