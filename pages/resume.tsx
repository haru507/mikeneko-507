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
            <h5 className="my-2 text-xl font-bold"></h5>
            <p className="font-semibold">Frontend & ServerSide</p>
            <p className="my-3">
              PHPとJSの経験が多く、自分自身も自信を持って設計と実装ができます！<br />
              AWSの知識も少し持っているためその知識を活用したり、もっと学習や構築を行い、レベルアップしていきたい。
            </p>
          </div>
        </div>
        <div>
          <h5 className="my-2 text-2xl font-bold">Future challenges</h5>
          <div className="">
            <h5 className="my-2 text-xl font-bold"></h5>
            <p className="font-semibold">Architecture & Leader's skill</p>
            <p className="my-3">
              今後の課題としてはアーキテクチャに関する知識を養い、保守性や拡張性といったところも考慮できるようにしたい。
              また、リーダーとしては１チームを引っ張っていけるような技術力と指導力を身につけていきたい。
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
