import React from "react";
import { FaArrowCircleRight } from "react-icons/fa";
import { NavDashboard } from "../../components/NavDashboard";
import { Link } from "react-router-dom";

export default function Meet() {
  const data = [
    {
      name: "indiana",
      last: "polis",
      date: "22/03/2024",
    },
    {
      name: "galsen",
      last: "dakar",
      date: "22/03/2024",
    },
    {
      name: "fane",
      last: "foire",
      date: "22/03/2024",
    },
    {
      name: "mbao",
      last: "sipress",
      date: "22/03/2024",
    },
    {
      name: "pikine",
      last: "petit",
      date: "22/03/2024",
    },
  ];

  return (
    <div>
      <NavDashboard />
      <div className="flex items-center justify-between px-12">
        <h2 className="text-3xl my-10">Mes Rendez-vous</h2>
        <Link to="/dashboard/register">
          <button
            title="Add New"
            class="group cursor-pointer outline-none hover:rotate-90 duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50px"
              height="50px"
              viewBox="0 0 24 24"
              class="stroke-blue-400 fill-none group-hover:fill-blue-800 group-active:stroke-blue-200 group-active:fill-blue-600 group-active:duration-0 duration-300"
            >
              <path
                d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
                stroke-width="1.5"
              ></path>
              <path d="M8 12H16" stroke-width="1.5"></path>
              <path d="M12 16V8" stroke-width="1.5"></path>
            </svg>
          </button>
        </Link>
      </div>
      <table className="border-collapse  w-11/12 mx-auto my-5 border-t-2 border-slate-500">
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td className=" border-b-2 border-slate-700 flex justify-between p-2">
                <div className="flex flex-col">
                  <span>{item.date}</span>
                  <span className="font-semibold text-sky-500">
                    {item.name}
                  </span>
                </div>
                <div className="flex flex-col items-end">
                  <span>{item.last}</span>
                  <Link to="/dashboard/Detail">
                    <span>
                      <FaArrowCircleRight className="text-xl  text-sky-700" />
                    </span>
                  </Link>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
