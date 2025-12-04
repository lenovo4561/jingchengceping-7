// 性格测评题目数据
export const xinggeQuestions = {
  // 外向与内向倾向测试 (id: 101)
  101: [
    {
      id: 1,
      question: '周末休息时，你更倾向于哪种安排？',
      options: [
        { label: 'A', text: '主动与很多人交流，享受热闹氛围', score: 2 },
        { label: 'B', text: '参加小型沙龙，和熟人深入交流', score: 1 },
        { label: 'C', text: '在家看剧看书，偶尔和家人聊天', score: 0 },
        { label: 'D', text: '独自外出散步，完全享受独处时光', score: 0 }
      ]
    },
    {
      id: 2,
      question: '在团队会议上，你通常的表现是？',
      options: [
        { label: 'A', text: '积极发言，主导讨论方向', score: 2 },
        { label: 'B', text: '适时发表意见，参与讨论', score: 1 },
        { label: 'C', text: '倾听为主，被点名才发言', score: 0 },
        { label: 'D', text: '安静听着，尽量不说话', score: 0 }
      ]
    },
    {
      id: 3,
      question: '参加聚会后，你的感受通常是？',
      options: [
        { label: 'A', text: '精力充沛，意犹未尽', score: 2 },
        { label: 'B', text: '开心但有点累', score: 1 },
        { label: 'C', text: '需要独处来恢复精力', score: 0 },
        { label: 'D', text: '感到疲惫不堪', score: 0 }
      ]
    },
    {
      id: 4,
      question: '遇到问题时，你倾向于？',
      options: [
        { label: 'A', text: '立即找人讨论，集思广益', score: 2 },
        { label: 'B', text: '先自己想想，再请教他人', score: 1 },
        { label: 'C', text: '独立思考，除非必要不求助', score: 0 },
        { label: 'D', text: '查资料自己研究解决', score: 0 }
      ]
    },
    {
      id: 5,
      question: '如果要完成一项重要任务，你更偏好？',
      options: [
        { label: 'A', text: '主动与很多人交流，享受热闹氛围', score: 2 },
        { label: 'B', text: '参加小型沙龙，和熟人深入交流', score: 1 },
        { label: 'C', text: '在家看剧看书，偶尔和家人聊天', score: 0 },
        { label: 'D', text: '独自外出散步，完全享受独处时光', score: 0 }
      ]
    }
  ],
  // 决策风格测试 (id: 102)
  102: [
    {
      id: 1,
      question: '做重要决定时，你通常会？',
      options: [
        { label: 'A', text: '相信直觉，快速决定', score: 2 },
        { label: 'B', text: '收集信息后理性分析', score: 1 },
        { label: 'C', text: '征求他人意见后决定', score: 1 },
        { label: 'D', text: '反复权衡，难以抉择', score: 0 }
      ]
    },
    {
      id: 2,
      question: '面对风险时，你的态度是？',
      options: [
        { label: 'A', text: '勇于冒险，追求高回报', score: 2 },
        { label: 'B', text: '适度冒险，控制风险', score: 1 },
        { label: 'C', text: '谨慎行事，规避风险', score: 0 },
        { label: 'D', text: '完全回避任何风险', score: 0 }
      ]
    },
    {
      id: 3,
      question: '当决定出现失误时，你会？',
      options: [
        { label: 'A', text: '迅速调整，从错误中学习', score: 2 },
        { label: 'B', text: '分析原因，避免再犯', score: 1 },
        { label: 'C', text: '感到沮丧，需要时间恢复', score: 0 },
        { label: 'D', text: '长期自责，影响后续决策', score: 0 }
      ]
    },
    {
      id: 4,
      question: '在时间紧迫时，你如何决策？',
      options: [
        { label: 'A', text: '果断决定，相信自己', score: 2 },
        { label: 'B', text: '快速评估关键因素后决定', score: 1 },
        { label: 'C', text: '感到压力，但还是会做决定', score: 0 },
        { label: 'D', text: '焦虑不安，可能会拖延', score: 0 }
      ]
    },
    {
      id: 5,
      question: '你对自己的决策能力评价是？',
      options: [
        { label: 'A', text: '非常自信，决策力强', score: 2 },
        { label: 'B', text: '比较自信，大多数时候正确', score: 1 },
        { label: 'C', text: '一般，有时会犹豫', score: 0 },
        { label: 'D', text: '不太自信，经常后悔', score: 0 }
      ]
    }
  ],
  // 情绪管理能力测试 (id: 103)
  103: [
    {
      id: 1,
      question: '当你感到愤怒时，你通常会？',
      options: [
        { label: 'A', text: '深呼吸，让自己冷静下来', score: 2 },
        { label: 'B', text: '找人倾诉，释放情绪', score: 1 },
        { label: 'C', text: '压抑情绪，假装没事', score: 0 },
        { label: 'D', text: '发脾气，表达不满', score: 0 }
      ]
    },
    {
      id: 2,
      question: '面对压力时，你会？',
      options: [
        { label: 'A', text: '制定计划，逐步解决', score: 2 },
        { label: 'B', text: '运动或做喜欢的事放松', score: 1 },
        { label: 'C', text: '感到焦虑，但还能应对', score: 0 },
        { label: 'D', text: '感到崩溃，难以承受', score: 0 }
      ]
    },
    {
      id: 3,
      question: '你能准确识别自己的情绪吗？',
      options: [
        { label: 'A', text: '能，我很了解自己的感受', score: 2 },
        { label: 'B', text: '大多数时候可以', score: 1 },
        { label: 'C', text: '有时候会感到困惑', score: 0 },
        { label: 'D', text: '经常不知道自己在想什么', score: 0 }
      ]
    },
    {
      id: 4,
      question: '当别人批评你时，你的反应是？',
      options: [
        { label: 'A', text: '客观分析，有则改之', score: 2 },
        { label: 'B', text: '虽然不舒服，但能接受', score: 1 },
        { label: 'C', text: '感到受伤，需要时间消化', score: 0 },
        { label: 'D', text: '非常生气或沮丧', score: 0 }
      ]
    },
    {
      id: 5,
      question: '总体来说，你对自己的情绪管理满意吗？',
      options: [
        { label: 'A', text: '非常满意', score: 2 },
        { label: 'B', text: '比较满意', score: 1 },
        { label: 'C', text: '一般', score: 0 },
        { label: 'D', text: '不太满意', score: 0 }
      ]
    }
  ],
  // 做事风格测试 (id: 104)
  104: [
    {
      id: 1,
      question: '你做事情的方式通常是？',
      options: [
        { label: 'A', text: '先计划，再行动', score: 2 },
        { label: 'B', text: '边做边调整', score: 1 },
        { label: 'C', text: '随性而为', score: 0 },
        { label: 'D', text: '等到最后一刻才开始', score: 0 }
      ]
    },
    {
      id: 2,
      question: '面对复杂任务时，你会？',
      options: [
        { label: 'A', text: '分解成小步骤逐一完成', score: 2 },
        { label: 'B', text: '先处理最重要的部分', score: 1 },
        { label: 'C', text: '从简单的开始做起', score: 0 },
        { label: 'D', text: '感到不知所措', score: 0 }
      ]
    },
    {
      id: 3,
      question: '你对截止日期的态度是？',
      options: [
        { label: 'A', text: '总是提前完成', score: 2 },
        { label: 'B', text: '按时完成', score: 1 },
        { label: 'C', text: '有时会踩点', score: 0 },
        { label: 'D', text: '经常需要延期', score: 0 }
      ]
    },
    {
      id: 4,
      question: '当计划被打乱时，你会？',
      options: [
        { label: 'A', text: '灵活调整，继续推进', score: 2 },
        { label: 'B', text: '重新制定计划', score: 1 },
        { label: 'C', text: '感到烦躁，但还能应对', score: 0 },
        { label: 'D', text: '感到很沮丧，难以继续', score: 0 }
      ]
    },
    {
      id: 5,
      question: '你认为自己的执行力如何？',
      options: [
        { label: 'A', text: '很强，说到做到', score: 2 },
        { label: 'B', text: '比较强，大多能完成', score: 1 },
        { label: 'C', text: '一般，有时会拖延', score: 0 },
        { label: 'D', text: '较弱，经常完不成计划', score: 0 }
      ]
    }
  ]
}

// 情感测评题目数据
export const qingganQuestions = {
  // 恋爱依恋模式测试 (id: 201)
  201: [
    {
      id: 1,
      question: '在恋爱关系中，你最担心的是？',
      options: [
        { label: 'A', text: '被抛弃或不被爱', score: 0 },
        { label: 'B', text: '失去自我空间', score: 1 },
        { label: 'C', text: '关系变得平淡', score: 1 },
        { label: 'D', text: '没有特别担心的', score: 2 }
      ]
    },
    {
      id: 2,
      question: '当伴侣没有及时回复消息时，你会？',
      options: [
        { label: 'A', text: '感到焦虑，反复查看手机', score: 0 },
        { label: 'B', text: '觉得无所谓，各忙各的', score: 1 },
        { label: 'C', text: '理解对方可能在忙', score: 2 },
        { label: 'D', text: '主动打电话确认', score: 1 }
      ]
    },
    {
      id: 3,
      question: '你对亲密关系的期待是？',
      options: [
        { label: 'A', text: '时刻在一起，形影不离', score: 0 },
        { label: 'B', text: '保持适当距离，各有空间', score: 1 },
        { label: 'C', text: '亲密但独立，相互支持', score: 2 },
        { label: 'D', text: '顺其自然，不强求', score: 1 }
      ]
    },
    {
      id: 4,
      question: '当发生争吵时，你通常会？',
      options: [
        { label: 'A', text: '害怕对方离开，急于和好', score: 0 },
        { label: 'B', text: '冷处理，各自冷静', score: 1 },
        { label: 'C', text: '沟通解决问题', score: 2 },
        { label: 'D', text: '逃避，不想面对', score: 0 }
      ]
    },
    {
      id: 5,
      question: '你认为理想的恋爱关系是？',
      options: [
        { label: 'A', text: '对方是我的全部', score: 0 },
        { label: 'B', text: '各自独立，偶尔交集', score: 1 },
        { label: 'C', text: '相互依赖又独立的伙伴', score: 2 },
        { label: 'D', text: '没有想过', score: 0 }
      ]
    }
  ],
  // 婚姻质量评估 (id: 202)
  202: [
    {
      id: 1,
      question: '你和伴侣的沟通频率如何？',
      options: [
        { label: 'A', text: '每天都有深入交流', score: 2 },
        { label: 'B', text: '经常聊天，偶尔深谈', score: 1 },
        { label: 'C', text: '主要是日常事务沟通', score: 0 },
        { label: 'D', text: '很少交流', score: 0 }
      ]
    },
    {
      id: 2,
      question: '在重大决定上，你们通常？',
      options: [
        { label: 'A', text: '共同商量，达成一致', score: 2 },
        { label: 'B', text: '一方主导，另一方配合', score: 1 },
        { label: 'C', text: '各自做各自的决定', score: 0 },
        { label: 'D', text: '经常因此产生矛盾', score: 0 }
      ]
    },
    {
      id: 3,
      question: '你们处理矛盾的方式是？',
      options: [
        { label: 'A', text: '冷静沟通，寻求解决', score: 2 },
        { label: 'B', text: '争吵后和好', score: 1 },
        { label: 'C', text: '冷战，等待时间化解', score: 0 },
        { label: 'D', text: '问题积累，很少解决', score: 0 }
      ]
    },
    {
      id: 4,
      question: '你对目前的婚姻生活满意度是？',
      options: [
        { label: 'A', text: '非常满意', score: 2 },
        { label: 'B', text: '比较满意', score: 1 },
        { label: 'C', text: '一般', score: 0 },
        { label: 'D', text: '不太满意', score: 0 }
      ]
    },
    {
      id: 5,
      question: '总体来说，你认为你们的婚姻？',
      options: [
        { label: 'A', text: '幸福美满', score: 2 },
        { label: 'B', text: '平淡但稳定', score: 1 },
        { label: 'C', text: '有些问题需要改善', score: 0 },
        { label: 'D', text: '存在较大危机', score: 0 }
      ]
    }
  ],
  // 暗恋对象好感度测试 (id: 203)
  203: [
    {
      id: 1,
      question: '对方看到你时的反应是？',
      options: [
        { label: 'A', text: '主动打招呼，面带微笑', score: 2 },
        { label: 'B', text: '点头示意', score: 1 },
        { label: 'C', text: '没有特别反应', score: 0 },
        { label: 'D', text: '似乎在回避', score: 0 }
      ]
    },
    {
      id: 2,
      question: '对方和你聊天时的状态是？',
      options: [
        { label: 'A', text: '很投入，话题不断', score: 2 },
        { label: 'B', text: '正常交流', score: 1 },
        { label: 'C', text: '简短回应', score: 0 },
        { label: 'D', text: '敷衍了事', score: 0 }
      ]
    },
    {
      id: 3,
      question: '对方会主动找你吗？',
      options: [
        { label: 'A', text: '经常主动联系', score: 2 },
        { label: 'B', text: '偶尔会', score: 1 },
        { label: 'C', text: '很少', score: 0 },
        { label: 'D', text: '从不', score: 0 }
      ]
    },
    {
      id: 4,
      question: '对方对你的事情关心程度如何？',
      options: [
        { label: 'A', text: '很关心，会主动询问', score: 2 },
        { label: 'B', text: '有一定关注', score: 1 },
        { label: 'C', text: '一般', score: 0 },
        { label: 'D', text: '不太关心', score: 0 }
      ]
    },
    {
      id: 5,
      question: '你觉得对方对你的态度是？',
      options: [
        { label: 'A', text: '特别友好，与众不同', score: 2 },
        { label: 'B', text: '比较友好', score: 1 },
        { label: 'C', text: '普通朋友', score: 0 },
        { label: 'D', text: '不太热情', score: 0 }
      ]
    }
  ]
}

// 事业测评题目数据
export const shiyeQuestions = {
  // 职业性格测试 (id: 301)
  301: [
    {
      id: 1,
      question: '你更喜欢哪种工作方式？',
      options: [
        { label: 'A', text: '与人打交道，团队协作', score: 2 },
        { label: 'B', text: '独立工作，专注任务', score: 1 },
        { label: 'C', text: '两者兼顾', score: 1 },
        { label: 'D', text: '看具体情况', score: 0 }
      ]
    },
    {
      id: 2,
      question: '处理问题时，你更依赖？',
      options: [
        { label: 'A', text: '具体事实和数据', score: 2 },
        { label: 'B', text: '直觉和灵感', score: 1 },
        { label: 'C', text: '经验和惯例', score: 1 },
        { label: 'D', text: '创新和可能性', score: 0 }
      ]
    },
    {
      id: 3,
      question: '做决定时，你更看重？',
      options: [
        { label: 'A', text: '逻辑和客观分析', score: 2 },
        { label: 'B', text: '人情和价值观', score: 1 },
        { label: 'C', text: '效率和结果', score: 1 },
        { label: 'D', text: '和谐和感受', score: 0 }
      ]
    },
    {
      id: 4,
      question: '你的工作风格是？',
      options: [
        { label: 'A', text: '计划周详，按部就班', score: 2 },
        { label: 'B', text: '灵活应变，随机应对', score: 1 },
        { label: 'C', text: '有计划但保持弹性', score: 1 },
        { label: 'D', text: '看心情和任务', score: 0 }
      ]
    },
    {
      id: 5,
      question: '你认为好的领导应该？',
      options: [
        { label: 'A', text: '公正严明，赏罚分明', score: 2 },
        { label: 'B', text: '关心下属，凝聚人心', score: 1 },
        { label: 'C', text: '能力出众，以身作则', score: 1 },
        { label: 'D', text: '善于沟通，理解员工', score: 0 }
      ]
    }
  ],
  // 职业倦怠感评估 (id: 302)
  302: [
    {
      id: 1,
      question: '你对目前工作的热情程度是？',
      options: [
        { label: 'A', text: '充满热情，干劲十足', score: 2 },
        { label: 'B', text: '还可以，正常状态', score: 1 },
        { label: 'C', text: '有些疲惫，动力不足', score: 0 },
        { label: 'D', text: '非常倦怠，不想工作', score: 0 }
      ]
    },
    {
      id: 2,
      question: '周一早上，你的心情通常是？',
      options: [
        { label: 'A', text: '期待新的一周', score: 2 },
        { label: 'B', text: '平常心对待', score: 1 },
        { label: 'C', text: '有些抗拒', score: 0 },
        { label: 'D', text: '非常不想上班', score: 0 }
      ]
    },
    {
      id: 3,
      question: '工作中你感到有成就感吗？',
      options: [
        { label: 'A', text: '经常感到成就感', score: 2 },
        { label: 'B', text: '偶尔会有', score: 1 },
        { label: 'C', text: '很少', score: 0 },
        { label: 'D', text: '几乎没有', score: 0 }
      ]
    },
    {
      id: 4,
      question: '你觉得自己的工作有意义吗？',
      options: [
        { label: 'A', text: '非常有意义', score: 2 },
        { label: 'B', text: '有一定意义', score: 1 },
        { label: 'C', text: '不太确定', score: 0 },
        { label: 'D', text: '感觉毫无意义', score: 0 }
      ]
    },
    {
      id: 5,
      question: '总体来说，你的工作状态是？',
      options: [
        { label: 'A', text: '非常好', score: 2 },
        { label: 'B', text: '比较好', score: 1 },
        { label: 'C', text: '一般', score: 0 },
        { label: 'D', text: '很差', score: 0 }
      ]
    }
  ],
  // 领导力潜质测试 (id: 303)
  303: [
    {
      id: 1,
      question: '在团队中，你通常扮演什么角色？',
      options: [
        { label: 'A', text: '领导者，组织协调', score: 2 },
        { label: 'B', text: '核心成员，积极贡献', score: 1 },
        { label: 'C', text: '执行者，完成任务', score: 0 },
        { label: 'D', text: '旁观者，较少参与', score: 0 }
      ]
    },
    {
      id: 2,
      question: '面对困难决策时，你会？',
      options: [
        { label: 'A', text: '果断决定，承担责任', score: 2 },
        { label: 'B', text: '分析后做出选择', score: 1 },
        { label: 'C', text: '征求他人意见后决定', score: 0 },
        { label: 'D', text: '希望别人来决定', score: 0 }
      ]
    },
    {
      id: 3,
      question: '你如何激励他人？',
      options: [
        { label: 'A', text: '善于鼓励，激发潜能', score: 2 },
        { label: 'B', text: '以身作则，带动他人', score: 1 },
        { label: 'C', text: '不太擅长激励', score: 0 },
        { label: 'D', text: '很少需要激励他人', score: 0 }
      ]
    },
    {
      id: 4,
      question: '面对团队冲突，你会？',
      options: [
        { label: 'A', text: '主动调解，化解矛盾', score: 2 },
        { label: 'B', text: '尝试沟通解决', score: 1 },
        { label: 'C', text: '保持中立，不介入', score: 0 },
        { label: 'D', text: '回避冲突', score: 0 }
      ]
    },
    {
      id: 5,
      question: '你认为自己有领导潜质吗？',
      options: [
        { label: 'A', text: '非常有，天生领导者', score: 2 },
        { label: 'B', text: '有一定潜质', score: 1 },
        { label: 'C', text: '不太确定', score: 0 },
        { label: 'D', text: '更适合被领导', score: 0 }
      ]
    }
  ]
}

// 趣味测评题目数据
export const quweiQuestions = {
  // 你的前世身份测试 (id: 401)
  401: [
    {
      id: 1,
      question: '你更喜欢哪种生活方式？',
      options: [
        { label: 'A', text: '奢华富贵，锦衣玉食', score: 2 },
        { label: 'B', text: '行侠仗义，浪迹天涯', score: 1 },
        { label: 'C', text: '田园牧歌，悠然自得', score: 1 },
        { label: 'D', text: '潜心修行，与世无争', score: 0 }
      ]
    },
    {
      id: 2,
      question: '如果穿越到古代，你想做什么？',
      options: [
        { label: 'A', text: '皇帝或王后', score: 2 },
        { label: 'B', text: '大侠或将军', score: 1 },
        { label: 'C', text: '诗人或画家', score: 1 },
        { label: 'D', text: '隐士或道士', score: 0 }
      ]
    },
    {
      id: 3,
      question: '你对权力的态度是？',
      options: [
        { label: 'A', text: '渴望拥有，掌控一切', score: 2 },
        { label: 'B', text: '用来行善，帮助他人', score: 1 },
        { label: 'C', text: '无所谓，顺其自然', score: 0 },
        { label: 'D', text: '避之不及，自由最重要', score: 0 }
      ]
    },
    {
      id: 4,
      question: '你更看重什么？',
      options: [
        { label: 'A', text: '财富和地位', score: 2 },
        { label: 'B', text: '正义和荣誉', score: 1 },
        { label: 'C', text: '自由和艺术', score: 1 },
        { label: 'D', text: '内心的平静', score: 0 }
      ]
    },
    {
      id: 5,
      question: '你的性格更接近？',
      options: [
        { label: 'A', text: '霸气外露，雷厉风行', score: 2 },
        { label: 'B', text: '豪爽仗义，嫉恶如仇', score: 1 },
        { label: 'C', text: '温文尔雅，才华横溢', score: 1 },
        { label: 'D', text: '淡泊名利，超然物外', score: 0 }
      ]
    }
  ],
  // 测测你的灵魂动物 (id: 402)
  402: [
    {
      id: 1,
      question: '你更喜欢哪种环境？',
      options: [
        { label: 'A', text: '广阔的草原', score: 2 },
        { label: 'B', text: '茂密的森林', score: 1 },
        { label: 'C', text: '蔚蓝的大海', score: 1 },
        { label: 'D', text: '高耸的山峰', score: 0 }
      ]
    },
    {
      id: 2,
      question: '你的社交方式是？',
      options: [
        { label: 'A', text: '喜欢群居，热闹', score: 2 },
        { label: 'B', text: '小团体，亲密', score: 1 },
        { label: 'C', text: '独来独往', score: 0 },
        { label: 'D', text: '看心情', score: 0 }
      ]
    },
    {
      id: 3,
      question: '面对危险时，你会？',
      options: [
        { label: 'A', text: '勇敢面对，迎难而上', score: 2 },
        { label: 'B', text: '机智应对，寻找出路', score: 1 },
        { label: 'C', text: '谨慎观察，伺机而动', score: 1 },
        { label: 'D', text: '快速逃离，保全自己', score: 0 }
      ]
    },
    {
      id: 4,
      question: '你的作息习惯是？',
      options: [
        { label: 'A', text: '早起早睡', score: 2 },
        { label: 'B', text: '晚睡晚起', score: 1 },
        { label: 'C', text: '不规律', score: 0 },
        { label: 'D', text: '随心所欲', score: 0 }
      ]
    },
    {
      id: 5,
      question: '你最看重的品质是？',
      options: [
        { label: 'A', text: '力量和勇气', score: 2 },
        { label: 'B', text: '智慧和灵活', score: 1 },
        { label: 'C', text: '忠诚和温柔', score: 1 },
        { label: 'D', text: '自由和独立', score: 0 }
      ]
    }
  ],
  // 你的隐藏超能力是什么 (id: 403)
  403: [
    {
      id: 1,
      question: '如果可以拥有一种超能力，你选？',
      options: [
        { label: 'A', text: '读心术', score: 2 },
        { label: 'B', text: '隐身术', score: 1 },
        { label: 'C', text: '时间暂停', score: 1 },
        { label: 'D', text: '瞬间移动', score: 0 }
      ]
    },
    {
      id: 2,
      question: '你的直觉准确吗？',
      options: [
        { label: 'A', text: '非常准，经常应验', score: 2 },
        { label: 'B', text: '比较准', score: 1 },
        { label: 'C', text: '一般', score: 0 },
        { label: 'D', text: '不太准', score: 0 }
      ]
    },
    {
      id: 3,
      question: '你善于察言观色吗？',
      options: [
        { label: 'A', text: '非常善于，一眼看穿', score: 2 },
        { label: 'B', text: '比较善于', score: 1 },
        { label: 'C', text: '一般', score: 0 },
        { label: 'D', text: '不太擅长', score: 0 }
      ]
    },
    {
      id: 4,
      question: '你的学习能力如何？',
      options: [
        { label: 'A', text: '学什么都很快', score: 2 },
        { label: 'B', text: '感兴趣的学得快', score: 1 },
        { label: 'C', text: '一般', score: 0 },
        { label: 'D', text: '需要花很多时间', score: 0 }
      ]
    },
    {
      id: 5,
      question: '你相信自己有潜在的超能力吗？',
      options: [
        { label: 'A', text: '相信，只是还没发现', score: 2 },
        { label: 'B', text: '可能有吧', score: 1 },
        { label: 'C', text: '不太相信', score: 0 },
        { label: 'D', text: '完全不信', score: 0 }
      ]
    }
  ]
}
