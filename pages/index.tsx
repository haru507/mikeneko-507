import { GetServerSidePropsContext } from "next";
import React from "react";
import ServiceCard from "../components/ServiceCard";
import { services } from "../data";

const index = ({endpoint}) => {

  return (
    <div className="flex flex-col flex-grow px-6 pt-1">
      <h5 className="my-3 font-medium">
        私は、ITの専門学校に２年間通ってITに関する知識を養いました。<br />
        卒業研究では、校内システム「グループウェア」を作り優秀賞をいただきました。<br />
        現在、受託開発系のベンチャー企業に勤めながら副業も行っております。<br />
        お仕事なども募集しておりますのでEmailやTwitterなどからメッセージをいただければ幸いです。
      </h5>
      <div
        className="flex-grow p-4 mt-5 bg-gray-400 dark:bg-dark-100"
        style={{ marginLeft: "-1.5rem", marginRight: "-1.5rem" }}
      >
        <h6 className="my-3 text-xl font-bold tracking-wide">job description</h6>
        <div className="grid gap-6 lg:grid-cols-2">
          {services.map((service) => (
            <div
              className="bg-gray-200 rounded-lg lg:col-span-1 dark:bg-dark-200"
              key={service.title}
            >
              <ServiceCard service={service} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default index;

export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  // console.log(process.env.VERCEL_URL);

  // const res = await fetch(`${process.env.VERCEL_URL}/api/services`);
  // const data = await res.json();

  return {
    props: {
      endpoint: process.env.VERCEL_URL,
    },
  };
};

// export const getStaticProps = async (context: GetServerSidePropsContext) => {
//   const res = await fetch("http://localhost:3000/api/services");
//   const data = await res.json();

//   console.log("SERVER", services);

//   return {
//     props: {
//       services: data.services,
//     },
//   };
// };
