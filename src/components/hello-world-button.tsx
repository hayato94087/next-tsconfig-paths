import { type FC } from "react";

const HelloWorldButton: FC = () => {
  return (
    <button className="bg-orange-600 py-2 px-3 rounded-lg text-white hover:bg-orange-600/90">
      Hello Universe
    </button>
  );
};

export default HelloWorldButton;
