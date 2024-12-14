import ServiceCard from "@/components/ServiceCard";
import { services } from "@/utils/data";
import { GetServerSidePropsContext } from "next";
import React from "react";

const index = ({endpoint}) => {
  return (
    <div className="flex flex-col flex-grow px-6 pt-1">
       <h5 className="my-3 font-medium leading-normal">
        2年間のIT専門学校で卒業研究として<b>グループウェアシステム</b>を作成し、優秀賞を受賞しました。<br />
        1社目では受託開発系のベンチャー企業に勤め、副業も行っていました。<br />
        <b>Laravel</b>、<b>Swift</b>、<b>React</b>を用いた開発から、AWSでのインフラ環境の構築まで幅広く対応可能です。<br />
        特に、既存のLaravelサービスに画像認識サーバーとの連携システムを構築し、<br />
        Laravelのバッチ処理に加え、「SupervisorやSQSなどのキュー」に関する知識と経験を得ました。<br />
        2023年の夏頃に転職活動を開始し、2024年の2月に事業系の自社サービスを提供する会社に転職しました。<br />
        現在は、スクラム開発において求人サイトの新規機能開発・改修を主に担当しています。<br />
        新規機能開発では、Lambda、Node.js、Typescriptを用いて他の求人システムとの連携システムを構築しています。<br />
        また、Terraformを使用してAWSサービスの構築も行っています。
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
