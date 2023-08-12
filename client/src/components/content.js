import { API } from "../config/api";
import { useNavigate } from "react-router-dom";
import { FormatRupiah } from "@arismun/format-rupiah";
import { useContext } from "react";
import { UserContext } from "./context/UserContext";

const Content = (props) => {
  const navigate = useNavigate();
  const [state] = useContext(UserContext);
  const handleOpenLogin = () => {
    props.setShow("initial-focus");
  };

  const handleDetail = async (id) => {
    try {
      const response = await API.get(`/trip/${id}`);
      navigate(`/trip/${id}`);
      return response.data.data;
    } catch (error) {
      console.log("Ini Error Ke Payment", error);
    }
  };

  return (
    <div>
      {props?.quota === props?.totalBuyer ? (
        <div
          key={props?.id}
          className="p-2 rounded-md shadow-lg relative hover:border-yellow-300 border-2 border-white hover:cursor-pointer"
        >
          <div>
            <img
              className="w-full h-[250px] rounded-md object-cover"
              src={props?.image}
            />
            <p className="px-3 py-2 text-red-600 bg-white absolute rounded-l-md right-[8px] top-[30px]">
              Sold Out
            </p>
          </div>
          <p className="text-[18px] mt-4 mb-2 truncate px-2">{props?.title}</p>
          <div className="flex justify-between px-2">
            <p className="text-[#FFAF00] font-semibold">
              <FormatRupiah value={props?.price} />
            </p>
            <p className="text-[#878787] font-semibold">{props?.country}</p>
          </div>
        </div>
      ) : (
        <div
          key={props?.id}
          onClick={() => {
            !state?.isLogin ? handleOpenLogin() : handleDetail(props?.id);
          }}
          className="p-2 rounded-md shadow-lg relative hover:border-yellow-300 border-2 border-white hover:cursor-pointer"
        >
          <div>
            <img
              className="w-full h-[250px] rounded-md object-cover"
              src={props?.image}
            />
            <p className="px-3 py-2 bg-white absolute rounded-l-md right-[8px] top-[30px]">
              {props?.totalBuyer}/{props?.quota}
            </p>
          </div>
          <p className="text-[18px] mt-4 mb-2 truncate px-2">{props?.title}</p>
          <div className="flex justify-between px-2">
            <p className="text-[#FFAF00] font-semibold">
              <FormatRupiah value={props?.price} />
            </p>
            <p className="text-[#878787] font-semibold">{props?.country}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Content;
