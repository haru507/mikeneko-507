import { RiComputerLine } from "react-icons/ri";
import { FaServer } from "react-icons/fa";
import { AiOutlineAntDesign } from "react-icons/ai";
import { MdDeveloperMode } from "react-icons/md";
import { BsCircleFill } from "react-icons/bs";
import type { IProject, IServes, ISkill } from "@/utils/type";

export const services: IServes[] = [
  {
    Icon: RiComputerLine,
    title: "frontend",
    about:
      "<b>React, Vue.js</b>を用いたSPA開発が得意で、<b>状態管理（Redux, Vuex）</b>や、<b>コンポーネント駆動開発</b>に精通しています。中〜大規模アプリケーションの設計から実装、パフォーマンス最適化まで幅広い経験があります。<br/>Swift（Storyboard）でのiOS開発も経験があり、モバイルアプリ開発にも携わっています。",
  },
  {
    Icon: FaServer,
    title: "backend",
    about:
      "<b>PHP（Laravel）</b>を中心に、<b>Java, Python</b>でも開発経験があります。<br/>RESTful APIやバッチ・キュー連携などのサーバーサイド開発を得意としています。<br/>設計原則やアーキテクチャにも関心があり、より良い構成を目指しています。",
  },
  {
    Icon: MdDeveloperMode,
    title: "infrastructure",
    about:
      "<b>AWS</b>を中心に、<b>EC2, RDS, CloudFront, SQS, Lambda</b>などを用いたサービスのインフラ構築・運用経験があります。<br/><b>CI/CD環境の構築</b>により、デプロイ作業の自動化とリリースの品質向上をさせました！<br/>DVA（AWS認定資格）も取得済みです.",
  },
  {
    Icon: AiOutlineAntDesign,
    title: "leadership-skill",
    about:
      "エンジニア歴5年目を迎え、リーダーシップを発揮するためのスキルを磨いています。<br/>コードレビューを通じたフィードバックや、チーム内での心理的安全性の構築に力を入れています。また、スクラム開発の理解を深めるため、積極的にファシリテータとして参加し、チームの成長をサポートしています。",
  },
];

export const languages: ISkill[] = [
  {
    Icon: BsCircleFill,
    name: "PHP",
    level: "80%",
  },
  {
    Icon: BsCircleFill,
    name: "Javascript/Typescript",
    level: "80%",
  },
  {
    Icon: BsCircleFill,
    name: "Python",
    level: "50%",
  },
  {
    Icon: BsCircleFill,
    name: "Swift",
    level: "45%",
  },
  {
    Icon: BsCircleFill,
    name: "Java",
    level: "40%",
  },
  {
    Icon: BsCircleFill,
    name: "Kotlin",
    level: "40%",
  }
];

export const tools: ISkill[] = [
  {
    Icon: BsCircleFill,
    name: "Laravel",
    level: "80%",
  },
  {
    Icon: BsCircleFill,
    name: "React/Next.js",
    level: "75%",
  },
  {
    Icon: BsCircleFill,
    name: "Node.js",
    level: "70%",
  },
  {
    Icon: BsCircleFill,
    name: "Vue.js",
    level: "55%",
  },
  {
    Icon: BsCircleFill,
    name: "AWS",
    level: "50%",
  },
  {
    Icon: BsCircleFill,
    name: "Spring Boot",
    level: "40%",
  },
];

export const projects: IProject[] = [
  {
    id: 1,
    name: "KCSグループウェア",
    description: "専門学校で卒業研究を使うときに使えるグループウェア",
    image_path: "/images/mypage.png",
    deployed_url: "https://kcska-my.sharepoint.com/:p:/g/personal/20192132_kcska_onmicrosoft_com/EcwCz9ncvRpItRcBF1z1AZsBWQwLLjNcbjIXoAVt8vmQ6g?e=eufL3G",
    github_url: "https://github.com/haru507/kcs-groupware",
    category: ["react", "laravel"],
    key_techs: ["React", "Laravel", "Material UI", "MySQL", "Docker"],
  },
  {
    id: 2,
    name: "居酒屋検索アプリ",
    image_path: "/images/izakaya.png",
    deployed_url:
      "https://kcska-my.sharepoint.com/:p:/g/personal/20192132_kcska_onmicrosoft_com/EUkfazM4MU5DlpwCa-tMjXMB37BNiLqX7bOlO1RJq7SfKA?e=8TII9U",
    github_url: "https://github.com/haru507/StoreSearchApp",
    category: ["php"],
    description: "自分の位置情報から近くの飲食店を検索できます",
    key_techs: ["PHP", "Javascript", "Docker", "GCP API", "HotPepperAPI"],
  },
  {
    id: 3,
    name: "旧ポートフォリオ",
    image_path: "/images/portfolio.png",
    deployed_url:
      "https://haru507.github.io/haru507.github.io-myTheWork/",
    github_url: "https://github.com/haru507/haru507.github.io-myTheWork",
    category: ["php"],
    description: "昨年私が作ったポートフォリオです。特に何も実装しておりませんが第一号ということで残しております",
    key_techs: ["HTML", "CSS", "Javascript",],
  },
  {
    id: 4,
    name: "温泉と焼肉のためのアプリ",
    image_path: "/images/onsen_meet.png",
    deployed_url: "https://github.com/haru507/onsen-meet-app-ts",
    github_url: "https://github.com/haru507/onsen-meet-app-spring",
    category: ["react", "spring"],
    description: "位置情報から焼肉と温泉のお店を表示します。（作成中）",
    key_techs: ["React", "SpringBoot", "PostgreSQL", "Docker", "GCP API", "HotPepperAPI",],
  },

  {
    id: 5,
    name: "Q&Aサイト",
    image_path: "/images/noimage.png",
    deployed_url: "",
    github_url: "",
    category: ["react"],
    description:
      "クラウドワークスにてReact + Redux + Firebaseで学習用Q＆Aのサイトの構築に携わりました",
    key_techs: ["React", "Redux", "Firebase",],
  },

  {
    id: 6,
    name: "バイカー向けマッチングアプリ",
    image_path: "/images/motasapo.png",
    deployed_url: "",
    github_url: "",
    category: ["react", "laravel"],
    description:
      "クラウドワークスにてLaravel + React + MySQLでチャット機能の開発に携わりました",
    key_techs: ["React", "Laravel", "MySQL", "Docker"],
  },

  {
    id: 7,
    name: "WordPressの開発作業",
    image_path: "/images/kinglish.png",
    deployed_url: "https://pange-hoiku.com/lp2008/",
    github_url: "",
    category: ["wordpress"],
    description:
      "クラウドワークスにてWordPressでWebサイトの開発作業と機能追加・修正作業に携わりました",
    key_techs: ["WordPress", "PHP", "Javascript"],
  },
  {
    id: 8,
    name: "airo Car Shareの機能追加・修正",
    image_path: "/images/airo.png",
    deployed_url: "https://airocar.net/",
    github_url: "",
    category: ["laravel"],
    description:
      'クラウドワークスにてLaravelでシステムの構築と新たに機能追加と修正作業に携わりました',
    key_techs: [
      "Laravel",
      "Bootstrap"
    ],
  },
  {
    id: 9,
    name: "Zoom自動立ち上げ機能",
    image_path: "/images/zoom.png",
    deployed_url: "",
    github_url: "",
    category: ["python"],
    description:
      "研修で寝坊しないために作りました。定期実行にしているため決まった時間に勝手に起動します",
    key_techs: ["Python", "Selenium","cron"],
  },
  {
    id: 10,
    name: "日報自動書き込みシステム",
    image_path: "/images/excel.png",
    deployed_url: "",
    github_url: "",
    category: ["python"],
    description:
      "研修の日報はエクセルに書くため、プログラムを実行すると決まった日にちのセルに書き込みを行ってくれるプログラムを作りました。メールまで作ってくれます",
    key_techs: ["Python", "openpyxl", "LibreOffice",],
  },
  {
    id: 11,
    name: "ito",
    image_path: "/images/ito.png",
    deployed_url: "http://54.65.27.209/start",
    github_url: "https://github.com/haru507/ito",
    category: ["react"],
    description:
      "React, GoとWebSocketを使って ito のゲームを作りました。",
      key_techs: ["react", "go", "websocket"]
  },
  {
    id: 12,
    name: "Laravel, AWS, 画像認識エンジンの連携における設計",
    image_path: "/images/new_service.png",
    deployed_url: "",
    github_url: "",
    category: ["laravel"],
    description:
      "既存システムのAWS, Laravel環境に画像認識エンジンを搭載したときの簡易設計図です。\n\
      （踏み込んだことは書けませんが精一杯のわかりやすい図を書きました。）",
      key_techs: ["AWS", "Laravel", "supervisors"]
  }
];
