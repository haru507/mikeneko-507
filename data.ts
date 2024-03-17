import { RiComputerLine } from "react-icons/ri";
import { FaServer } from "react-icons/fa";
import { AiOutlineAntDesign, AiOutlineApi } from "react-icons/ai";
import { MdDeveloperMode } from "react-icons/md";
import { BsCircleFill } from "react-icons/bs";
import { IProject, IServes, ISkill } from "./type";

export const services: IServes[] = [
  {
    Icon: RiComputerLine,
    title: "フロントエンド",
    about:
      "<b>React, Vue.js</b>などのSPAでの開発が得意。<br/>Reduxなどの状態管理を用いた中規模~大規模の開発経験もあります。<br/>\
      iOSの開発でSwift StoryBoardでの開発の経験もあり、<br />\
      なんやかんやで１年ほど経験があります。",
  },
  {
    Icon: FaServer,
    title: "バックエンド",
    about:
      "<b>PHP, Java, Python</b>が得意です。<br />\
      特にLaravelが得意で、API開発からバッチとキューの連携など様々な経験を積んできました！<br />\
      今後は、アーキテクチャや設計原則などを取り入れられるようにしていきたい。",
  },
  {
    Icon: MdDeveloperMode,
    title: "インフラストラクチャ",
    about:
      "サービスひとつのインフラ環境の構築をしたことがあります。<br />\
      EC2, RDS, CloudFront, SQS, Lambdaなどほとんどのサービスは扱えます！<br />\
      また、AWSのDVAの資格の取得経験あり。",
  },
  {
    Icon: AiOutlineAntDesign,
    title: "リーダースキル",
    about:
      "エンジニア歴4年目となり、リーダーになるためのスキルを磨いています！<br />\
      コードレビューやチーム開発における心理的安全性の部分について学習を行なっています。<br />\
      スクラム開発にもまだまだ慣れていないため本を読んだり、積極的にスクラムイベントのファシリテータを行なったりしています！",
  },
];

export const languages: ISkill[] = [
  {
    Icon: BsCircleFill,
    name: "Java",
    level: "70%",
  },
  {
    Icon: BsCircleFill,
    name: "PHP",
    level: "80%",
  },
  {
    Icon: BsCircleFill,
    name: "Python",
    level: "45%",
  },
  {
    Icon: BsCircleFill,
    name: "Javascript",
    level: "75%",
  },
  {
    Icon: BsCircleFill,
    name: "Flutter",
    level: "40%",
  },
  {
    Icon: BsCircleFill,
    name: "Swift",
    level: "50%",
  },
  {
    Icon: BsCircleFill,
    name: "Kotlin",
    level: "50%",
  }
];

export const tools: ISkill[] = [
  {
    Icon: BsCircleFill,
    name: "React",
    level: "80%",
  },
  {
    Icon: BsCircleFill,
    name: "Spring Boot",
    level: "60%",
  },
  {
    Icon: BsCircleFill,
    name: "Laravel",
    level: "80%",
  },
  {
    Icon: BsCircleFill,
    name: "Vue.js",
    level: "60%",
  },
  {
    Icon: BsCircleFill,
    name: "UML",
    level: "45%",
  },
  {
    Icon: BsCircleFill,
    name: "AWS",
    level: "30%",
  },
  {
    Icon: BsCircleFill,
    name: "GCP",
    level: "25%",
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
  }
];
