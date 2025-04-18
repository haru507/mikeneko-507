import React from "react";
import Bar from "@/components/Bar";
import { languages, tools } from "@/utils/data";

/* eslint-disable react/no-unescaped-entities */
function resume() {
  return (
    <div className="px-6 py-2">
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <h5 className="my-2 text-2xl font-bold">Like and Strengths</h5>
          <div>
            <p className="font-semibold">Frontend & ServerSide</p>
            <p className="my-3">
              フロントエンドとサーバーサイドの開発が得意です。特に、PHPとJavaScriptを用いた開発経験が豊富です。AWSについての経験もあるため広い視野での開発が可能です。
            </p>
          </div>
        </div>
        <div>
          <h5 className="my-2 text-2xl font-bold">Future challenges</h5>
          <div className="">
            <p className="font-semibold">Architecture & Leader's skill</p>
            <p className="my-3">
              今後は、アプリケーションの全体的な設計を改善し、より効率的で保守しやすいコードベースを作成するために、アーキテクチャのスキルを向上させることに焦点を当てます。また、チームを率いてプロジェクトを成功に導くために、リーダーシップスキルを磨きたいと考えています。
            </p>
          </div>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <h5 className="my-3 text-2xl font-bold">Languages</h5>
          <div className="my-2">
            {languages.map((language) => (
              <Bar data={language} key={language.name} />
            ))}
          </div>
        </div>
        <div>
          <h5 className="my-3 text-2xl font-bold">Framework & Tools</h5>
          <div className="my-2">
            {tools.map((tool) => (
              <Bar data={tool} key={tool.name} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default resume;
