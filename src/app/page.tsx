import HelloWorldButton from "@components/hello-world-button";
import { type FC } from "react";

const Home: FC = () => {
  return (
    <div className="">
      <div className="text-lg font-bold">Home</div>
      <div>
        <span className="text-blue-500">Hello</span>
        <span className="text-red-500">World</span>
      </div>
      <HelloWorldButton />
    </div>
  );
};

export default Home;
