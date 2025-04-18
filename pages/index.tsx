import ServiceCard from "@/components/ServiceCard";
import { services } from "@/utils/data";
import type { GetServerSidePropsContext } from "next";
import React from "react";

const index = ({endpoint}) => {
  return (
    <div className="flex flex-col flex-grow px-6 pt-1">
      <h5 className="my-3 font-medium leading-normal">
        職歴については<a href="https://github.com/haru507" className="text-blue-500 underline hover:text-blue-700">こちら</a>からご確認ください。<br />
        フルスタックエンジニアとして、Webアプリケーションやモバイルアプリの開発に携わっています。<br />
        React, Next.js, Laravel, AWS などを活用し、要件定義から実装、運用まで一貫して対応可能です。<br />
        常にユーザー視点を意識し、使いやすく、拡張性の高い設計を心がけています。<br />
        ご相談・ご依頼がありましたら、お気軽にご連絡くださいませ。<br />
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
  return {
    props: {
      endpoint: process.env.VERCEL_URL,
    },
  };
};
