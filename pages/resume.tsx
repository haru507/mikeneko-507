import React from "react";
import Bar from "../components/Bar";
import { languages, tools } from "../data";

/* eslint-disable react/no-unescaped-entities */
function resume() {
  return (
    <div className="px-6 py-2">
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <h5 className="my-2 text-2xl font-bold">得意なこと</h5>
          <div>
            <h5 className="my-2 text-xl font-bold"></h5>
            <p className="font-semibold">フロント&サーバサイド</p>
            <p className="my-3">
              React, Laravelが得意です。副業でも3件ほど携わることができました。
              SpringBootも案件募集中です。Node.jsやGo言語などの学習も行い、携われる案件の数を増やしたいと考えています。
            </p>
          </div>
        </div>
        <div>
          <h5 className="my-2 text-2xl font-bold">これからすること</h5>
          <div className="">
            <h5 className="my-2 text-xl font-bold"></h5>
            <p className="font-semibold">モバイル&インフラ</p>
            <p className="my-3">
              FlutterやSwiftといったモバイルアプリの作成やAWS、GCPといったインフラに関する知識も必要だと感じております。今年の7月末にAWS デベロッパーアソシエイトの資格を取得しました。
            </p>
          </div>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <h5 className="my-3 text-2xl font-bold">言語</h5>
          <div className="my-2">
            {languages.map((language) => (
              <Bar data={language} key={language.name} />
            ))}
          </div>
        </div>
        <div>
          <h5 className="my-3 text-2xl font-bold">フレームワーク & ツール</h5>
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
