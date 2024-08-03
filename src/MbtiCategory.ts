type MbtiCategory = "energy" | "mind" | "nature" | "tactics";
type CategoryNumber = 1 | 2 | 3 | 4;

type LabelChoice = {
  alpha: string;
  title: {
    eng: string;
    jp: string;
  };
  note: string;
};
type LabelDescription = {
  title: {
    eng: string;
    jp: string;
  };
  note: string;

  choice1: LabelChoice;
  choice2: LabelChoice;
};

type LabelSet = {
  [t in MbtiCategory]: LabelDescription;
};
const labelSet: LabelSet = {
  energy: {
    title: {
      eng: "Energy",
      jp: "興味関心の方向",
    },
    note: "社交的な興味関心の方向",
    choice1: {
      alpha: "I",
      title: {
        eng: "Introverted",
        jp: "内向的",
      },
      note: "一人で活動するのが好み。社交的な交流につかれてしまう。",
    },
    choice2: {
      alpha: "E",
      title: {
        eng: "Extraverted",
        jp: "外向的",
      },
      note: "グループで活動するのが好み。社交的な交流で活力が得られる。",
    },
  },
  mind: {
    title: {
      eng: "Mind",
      jp: "ものの見方",
    },
    note: "どのように世界を見て、感情を処理するか",
    choice1: {
      alpha: "N",
      title: {
        eng: "Intuitive",
        jp: "直観的",
      },
      note: "安定性よりも目新しいもの、将来や隠された意味に目を向ける。好奇心が強い。",
    },
    choice2: {
      alpha: "S",
      title: {
        eng: "Observant",
        jp: "観察的",
      },
      note: "今起こっていることに目を向ける。現実的。",
    },
  },
  nature: {
    title: {
      eng: "Nature",
      jp: "判断の仕方",
    },
    note: "どのように意思決定を行い、感情に対処するか",
    choice1: {
      alpha: "T",
      title: {
        eng: "Thinking",
        jp: "思考的",
      },
      note: "客観性と合理性を重視し、感情より論理を優先する。協力よりも効率重視。",
    },
    choice2: {
      alpha: "F",
      title: {
        eng: "Feeling",
        jp: "感情型",
      },
      note: "敏感で感情表現が豊か。社会的な調和と協力を重視する。",
    },
  },
  tactics: {
    title: {
      eng: "Tactics",
      jp: "外部との接し方",
    },
    note: "どのように計画を立て、仕事や意思決定を対処するか",
    choice1: {
      alpha: "J",
      title: {
        eng: "Judging",
        jp: "判断型",
      },
      note: "わかりやすく、合理的に物事を進めたい。計画的。",
    },
    choice2: {
      alpha: "P",
      title: {
        eng: "Prospecting",
        jp: "知覚型",
      },
      note: "臨機応変に対応したり、チャンスを見つけるのが得意。柔軟性がある。",
    },
  },
};

const identityLabel: LabelDescription = {
  title: {
    eng: "Identity",
    jp: "個性",
  },
  note: "個人の性格の基盤となり、自分の能力と決断にどれだけ自信を持っているか",
  choice1: {
    alpha: "-A",
    title: {
      eng: "Assertive",
      jp: "積極的",
    },
    note: "自己主張が強く、自信がある。ストレスに強い。",
  },
  choice2: {
    alpha: "-T",
    title: {
      eng: "Turbulent",
      jp: "",
    },
    note: "自意識が強く、完璧主義、向上心を持ちやすい。ストレスに敏感。",
  },
};

export { MbtiCategory, labelSet, identityLabel };
