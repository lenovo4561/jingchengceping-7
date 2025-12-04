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
  ],
  // 抗压能力测试 (id: 105)
  105: [
    {
      id: 1,
      question: '当工作压力很大时，你通常会？',
      options: [
        { label: 'A', text: '保持冷静，制定应对策略', score: 2 },
        { label: 'B', text: '感到压力，但能坚持完成', score: 1 },
        { label: 'C', text: '感到焦虑，影响工作效率', score: 0 },
        { label: 'D', text: '无法承受，想要逃避', score: 0 }
      ]
    },
    {
      id: 2,
      question: '面对多个紧急任务时，你会？',
      options: [
        { label: 'A', text: '快速排序优先级，逐一解决', score: 2 },
        { label: 'B', text: '努力应对，虽然有些慌乱', score: 1 },
        { label: 'C', text: '手忙脚乱，不知从何下手', score: 0 },
        { label: 'D', text: '感到崩溃，无法处理', score: 0 }
      ]
    },
    {
      id: 3,
      question: '当遭遇重大挫折时，你会？',
      options: [
        { label: 'A', text: '快速调整心态，重新出发', score: 2 },
        { label: 'B', text: '需要时间恢复，但能走出来', score: 1 },
        { label: 'C', text: '长时间沮丧，难以振作', score: 0 },
        { label: 'D', text: '一蹶不振，失去信心', score: 0 }
      ]
    },
    {
      id: 4,
      question: '在高压环境下工作，你的表现是？',
      options: [
        { label: 'A', text: '越战越勇，发挥更好', score: 2 },
        { label: 'B', text: '保持正常水平', score: 1 },
        { label: 'C', text: '明显下降', score: 0 },
        { label: 'D', text: '完全发挥失常', score: 0 }
      ]
    },
    {
      id: 5,
      question: '总体来说，你的抗压能力如何？',
      options: [
        { label: 'A', text: '非常强，压力是动力', score: 2 },
        { label: 'B', text: '比较强，能应对常规压力', score: 1 },
        { label: 'C', text: '一般，容易被压力影响', score: 0 },
        { label: 'D', text: '较弱，害怕压力', score: 0 }
      ]
    }
  ],
  // 时间管理能力测试 (id: 106)
  106: [
    {
      id: 1,
      question: '你通常如何安排一天的工作？',
      options: [
        { label: 'A', text: '提前规划，列出清单', score: 2 },
        { label: 'B', text: '大致安排，灵活调整', score: 1 },
        { label: 'C', text: '想到什么做什么', score: 0 },
        { label: 'D', text: '完全没有计划', score: 0 }
      ]
    },
    {
      id: 2,
      question: '面对多个任务时，你会？',
      options: [
        { label: 'A', text: '按重要性和紧急程度排序', score: 2 },
        { label: 'B', text: '先做简单的，再做复杂的', score: 1 },
        { label: 'C', text: '随机选择', score: 0 },
        { label: 'D', text: '拖延到最后一起做', score: 0 }
      ]
    },
    {
      id: 3,
      question: '你是否经常感到时间不够用？',
      options: [
        { label: 'A', text: '很少，时间安排得当', score: 2 },
        { label: 'B', text: '偶尔会', score: 1 },
        { label: 'C', text: '经常感到时间紧张', score: 0 },
        { label: 'D', text: '总是手忙脚乱', score: 0 }
      ]
    },
    {
      id: 4,
      question: '你如何处理突发事件？',
      options: [
        { label: 'A', text: '快速调整计划，优先处理', score: 2 },
        { label: 'B', text: '暂停当前工作，处理突发事件', score: 1 },
        { label: 'C', text: '感到被打乱，效率下降', score: 0 },
        { label: 'D', text: '完全乱了阵脚', score: 0 }
      ]
    },
    {
      id: 5,
      question: '你对自己的时间管理能力评价是？',
      options: [
        { label: 'A', text: '非常好，高效利用时间', score: 2 },
        { label: 'B', text: '比较好，基本能按计划完成', score: 1 },
        { label: 'C', text: '一般，经常拖延', score: 0 },
        { label: 'D', text: '很差，时间总是不够', score: 0 }
      ]
    }
  ],
  // 社交能力测试 (id: 107)
  107: [
    {
      id: 1,
      question: '在陌生的社交场合，你通常会？',
      options: [
        { label: 'A', text: '主动与他人交流，快速融入', score: 2 },
        { label: 'B', text: '等待他人搭话，逐渐熟悉', score: 1 },
        { label: 'C', text: '保持沉默，很少主动', score: 0 },
        { label: 'D', text: '感到不适，想要离开', score: 0 }
      ]
    },
    {
      id: 2,
      question: '你能准确理解他人的情绪吗？',
      options: [
        { label: 'A', text: '非常准确，善于察言观色', score: 2 },
        { label: 'B', text: '大多数时候可以', score: 1 },
        { label: 'C', text: '有时会误解', score: 0 },
        { label: 'D', text: '经常理解错误', score: 0 }
      ]
    },
    {
      id: 3,
      question: '当朋友遇到困难时，你会？',
      options: [
        { label: 'A', text: '主动提供帮助和支持', score: 2 },
        { label: 'B', text: '询问是否需要帮助', score: 1 },
        { label: 'C', text: '等对方主动求助', score: 0 },
        { label: 'D', text: '不知道如何帮忙', score: 0 }
      ]
    },
    {
      id: 4,
      question: '你的朋友圈规模如何？',
      options: [
        { label: 'A', text: '很广，认识很多人', score: 2 },
        { label: 'B', text: '适中，有固定朋友圈', score: 1 },
        { label: 'C', text: '较小，只有几个朋友', score: 0 },
        { label: 'D', text: '很小，几乎没有朋友', score: 0 }
      ]
    },
    {
      id: 5,
      question: '总体来说，你的社交能力如何？',
      options: [
        { label: 'A', text: '非常强，人际关系好', score: 2 },
        { label: 'B', text: '比较强，能正常社交', score: 1 },
        { label: 'C', text: '一般，不太擅长', score: 0 },
        { label: 'D', text: '很弱，害怕社交', score: 0 }
      ]
    }
  ],
  // 自信心水平测试 (id: 108)
  108: [
    {
      id: 1,
      question: '面对新的挑战时，你的态度是？',
      options: [
        { label: 'A', text: '充满信心，相信能成功', score: 2 },
        { label: 'B', text: '有些紧张，但愿意尝试', score: 1 },
        { label: 'C', text: '担心失败，犹豫不决', score: 0 },
        { label: 'D', text: '害怕失败，不敢尝试', score: 0 }
      ]
    },
    {
      id: 2,
      question: '当别人质疑你的能力时，你会？',
      options: [
        { label: 'A', text: '用行动证明自己', score: 2 },
        { label: 'B', text: '有些不舒服，但坚持己见', score: 1 },
        { label: 'C', text: '开始怀疑自己', score: 0 },
        { label: 'D', text: '完全失去信心', score: 0 }
      ]
    },
    {
      id: 3,
      question: '你如何看待自己的优点和缺点？',
      options: [
        { label: 'A', text: '客观认识，接纳自己', score: 2 },
        { label: 'B', text: '了解优点，也知道缺点', score: 1 },
        { label: 'C', text: '更多看到缺点', score: 0 },
        { label: 'D', text: '只看到缺点，否定自己', score: 0 }
      ]
    },
    {
      id: 4,
      question: '在团队中发言时，你会？',
      options: [
        { label: 'A', text: '自信表达观点', score: 2 },
        { label: 'B', text: '有些紧张，但能表达', score: 1 },
        { label: 'C', text: '担心说错，很少发言', score: 0 },
        { label: 'D', text: '不敢发言', score: 0 }
      ]
    },
    {
      id: 5,
      question: '总体来说，你的自信心水平如何？',
      options: [
        { label: 'A', text: '非常自信', score: 2 },
        { label: 'B', text: '比较自信', score: 1 },
        { label: 'C', text: '不太自信', score: 0 },
        { label: 'D', text: '很不自信', score: 0 }
      ]
    }
  ],
  // 学习能力测试 (id: 109)
  109: [
    {
      id: 1,
      question: '当遇到全新的知识领域时，你会？',
      options: [
        { label: 'A', text: '主动深入学习，系统掌握', score: 2 },
        { label: 'B', text: '有需求时才学习核心内容', score: 1 },
        { label: 'C', text: '仅学习表面，满足基本需求', score: 0 },
        { label: 'D', text: '感到困难，不愿学习', score: 0 }
      ]
    },
    {
      id: 2,
      question: '学习新技能时，你的方式是？',
      options: [
        { label: 'A', text: '制定计划，坚持练习', score: 2 },
        { label: 'B', text: '跟着教程，及时请教', score: 1 },
        { label: 'C', text: '看看教程，很少实践', score: 0 },
        { label: 'D', text: '只看不练，难以掌握', score: 0 }
      ]
    },
    {
      id: 3,
      question: '遇到学习难题时，你会？',
      options: [
        { label: 'A', text: '拆解问题，多方查找答案', score: 2 },
        { label: 'B', text: '先尝试，必要时求助', score: 1 },
        { label: 'C', text: '搁置问题，等待他人解决', score: 0 },
        { label: 'D', text: '直接放弃，不再尝试', score: 0 }
      ]
    },
    {
      id: 4,
      question: '学习后，你会如何巩固？',
      options: [
        { label: 'A', text: '主动复盘，检验成果', score: 2 },
        { label: 'B', text: '做习题，复习重点', score: 1 },
        { label: 'C', text: '必要时才复习', score: 0 },
        { label: 'D', text: '学过就忘，不复习', score: 0 }
      ]
    },
    {
      id: 5,
      question: '对于他人分享的知识，你会？',
      options: [
        { label: 'A', text: '积极学习，主动拓展', score: 2 },
        { label: 'B', text: '判断价值后深入学习', score: 1 },
        { label: 'C', text: '表面应付，不深入研究', score: 0 },
        { label: 'D', text: '毫无兴趣，不愿倾听', score: 0 }
      ]
    }
  ],
  // 环境适应能力测试 (id: 110)
  110: [
    {
      id: 1,
      question: '当你换到一个新的工作环境时，你会？',
      options: [
        {
          label: 'A',
          text: '快速熟悉同事和工作内容，一周内适应节奏',
          score: 2
        },
        { label: 'B', text: '主动了解环境，两周左右逐渐适应', score: 1 },
        {
          label: 'C',
          text: '被动等待他人引导，一个月以上才慢慢适应',
          score: 0
        },
        { label: 'D', text: '难以适应，长期感到焦虑和不适', score: 0 }
      ]
    },
    {
      id: 2,
      question: '当生活习惯被迫改变（如搬家、作息调整）时，你会？',
      options: [
        { label: 'A', text: '主动调整自己，快速适应新习惯', score: 2 },
        { label: 'B', text: '逐步调整，一周左右适应新状态', score: 1 },
        { label: 'C', text: '感到不适，需要他人提醒才能调整', score: 0 },
        { label: 'D', text: '强烈抵触，长时间无法适应', score: 0 }
      ]
    },
    {
      id: 3,
      question: '当团队工作模式突然改变（如从线下改为线上）时，你会？',
      options: [
        { label: 'A', text: '主动学习新工具，带动他人适应新模式', score: 2 },
        { label: 'B', text: '快速学习操作方法，确保不影响工作', score: 1 },
        { label: 'C', text: '勉强学习，工作效率明显下降', score: 0 },
        { label: 'D', text: '无法适应，拒绝使用新的工作模式', score: 0 }
      ]
    },
    {
      id: 4,
      question: '当你到一个陌生的城市生活时，你会？',
      options: [
        { label: 'A', text: '主动探索城市，快速融入当地生活', score: 2 },
        { label: 'B', text: '逐步熟悉周边环境，慢慢适应生活节奏', score: 1 },
        { label: 'C', text: '局限于住所附近，很少主动探索', score: 0 },
        { label: 'D', text: '感到孤独无助，无法融入当地环境', score: 0 }
      ]
    },
    {
      id: 5,
      question: '当工作中需要使用全新的专业工具时，你会？',
      options: [
        { label: 'A', text: '立刻查阅资料学习，短期内熟练掌握', score: 2 },
        { label: 'B', text: '跟着培训学习，及时请教问题直至掌握', score: 1 },
        { label: 'C', text: '仅学习基础操作，勉强应对工作', score: 0 },
        { label: 'D', text: '感到困难，不愿学习，影响工作推进', score: 0 }
      ]
    }
  ]
}

// 情感测评题目数据
export const qingganQuestions = {
  // 恋爱中的安全感测试 (id: 201)
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
  // 亲情联结深度测试 (id: 202)
  202: [
    {
      id: 1,
      question: '你多久和父母深入交流一次？',
      options: [
        { label: 'A', text: '每天都会聊天', score: 2 },
        { label: 'B', text: '每周几次', score: 1 },
        { label: 'C', text: '每月几次', score: 0 },
        { label: 'D', text: '很少交流', score: 0 }
      ]
    },
    {
      id: 2,
      question: '家人遇到困难时，你会？',
      options: [
        { label: 'A', text: '第一时间提供帮助和支持', score: 2 },
        { label: 'B', text: '询问是否需要帮助', score: 1 },
        { label: 'C', text: '等家人主动求助', score: 0 },
        { label: 'D', text: '觉得不方便介入', score: 0 }
      ]
    },
    {
      id: 3,
      question: '你了解父母的梦想和遗憾吗？',
      options: [
        { label: 'A', text: '非常了解，经常聊这些', score: 2 },
        { label: 'B', text: '了解一些', score: 1 },
        { label: 'C', text: '不太了解', score: 0 },
        { label: 'D', text: '从未关注过', score: 0 }
      ]
    },
    {
      id: 4,
      question: '重要节日时，你会？',
      options: [
        { label: 'A', text: '提前准备，陪伴家人', score: 2 },
        { label: 'B', text: '打电话问候', score: 1 },
        { label: 'C', text: '发个信息祝福', score: 0 },
        { label: 'D', text: '经常忘记', score: 0 }
      ]
    },
    {
      id: 5,
      question: '你对家庭的重视程度是？',
      options: [
        { label: 'A', text: '非常重视，家人第一', score: 2 },
        { label: 'B', text: '比较重视', score: 1 },
        { label: 'C', text: '一般', score: 0 },
        { label: 'D', text: '不太重视', score: 0 }
      ]
    }
  ],
  // 友情稳定性测试 (id: 203)
  203: [
    {
      id: 1,
      question: '你有几个可以深入交心的朋友？',
      options: [
        { label: 'A', text: '5个以上', score: 2 },
        { label: 'B', text: '3-4个', score: 1 },
        { label: 'C', text: '1-2个', score: 0 },
        { label: 'D', text: '没有', score: 0 }
      ]
    },
    {
      id: 2,
      question: '朋友找你倾诉时，你会？',
      options: [
        { label: 'A', text: '认真倾听，给予支持', score: 2 },
        { label: 'B', text: '听完给建议', score: 1 },
        { label: 'C', text: '简单安慰几句', score: 0 },
        { label: 'D', text: '觉得麻烦', score: 0 }
      ]
    },
    {
      id: 3,
      question: '你多久主动联系朋友？',
      options: [
        { label: 'A', text: '经常主动联系', score: 2 },
        { label: 'B', text: '偶尔主动', score: 1 },
        { label: 'C', text: '很少主动', score: 0 },
        { label: 'D', text: '从不主动', score: 0 }
      ]
    },
    {
      id: 4,
      question: '朋友之间发生矛盾时，你会？',
      options: [
        { label: 'A', text: '主动沟通解决', score: 2 },
        { label: 'B', text: '等对方先道歉', score: 1 },
        { label: 'C', text: '冷处理，慢慢疏远', score: 0 },
        { label: 'D', text: '直接断交', score: 0 }
      ]
    },
    {
      id: 5,
      question: '你认为友情最重要的是？',
      options: [
        { label: 'A', text: '真诚和信任', score: 2 },
        { label: 'B', text: '互相帮助', score: 1 },
        { label: 'C', text: '有共同话题', score: 0 },
        { label: 'D', text: '没想过', score: 0 }
      ]
    }
  ],
  // 自我情绪管理能力测试 (id: 204)
  204: [
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
  // 婚姻幸福感测试 (id: 205)
  205: [
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
  // 亲子沟通有效性测试 (id: 206)
  206: [
    {
      id: 1,
      question: '你每天和孩子深入交流的时间有多长？',
      options: [
        { label: 'A', text: '1小时以上', score: 2 },
        { label: 'B', text: '30分钟-1小时', score: 1 },
        { label: 'C', text: '10-30分钟', score: 0 },
        { label: 'D', text: '几乎没有', score: 0 }
      ]
    },
    {
      id: 2,
      question: '孩子向你倾诉烦恼时，你会？',
      options: [
        { label: 'A', text: '认真倾听，理解孩子感受', score: 2 },
        { label: 'B', text: '听完后给建议', score: 1 },
        { label: 'C', text: '说"这不算什么"，轻视问题', score: 0 },
        { label: 'D', text: '没时间听，让孩子自己解决', score: 0 }
      ]
    },
    {
      id: 3,
      question: '你了解孩子的兴趣爱好吗？',
      options: [
        { label: 'A', text: '非常了解，经常一起参与', score: 2 },
        { label: 'B', text: '了解一些', score: 1 },
        { label: 'C', text: '不太了解', score: 0 },
        { label: 'D', text: '完全不了解', score: 0 }
      ]
    },
    {
      id: 4,
      question: '孩子犯错时，你会？',
      options: [
        { label: 'A', text: '耐心沟通，引导孩子认识错误', score: 2 },
        { label: 'B', text: '批评教育', score: 1 },
        { label: 'C', text: '严厉惩罚', score: 0 },
        { label: 'D', text: '不管不问', score: 0 }
      ]
    },
    {
      id: 5,
      question: '你认为亲子沟通最重要的是？',
      options: [
        { label: 'A', text: '理解和尊重', score: 2 },
        { label: 'B', text: '及时沟通', score: 1 },
        { label: 'C', text: '树立权威', score: 0 },
        { label: 'D', text: '没想过', score: 0 }
      ]
    }
  ],
  // 职场人际关系和谐度测试 (id: 207)
  207: [
    {
      id: 1,
      question: '你和同事的关系如何？',
      options: [
        { label: 'A', text: '非常融洽，像朋友一样', score: 2 },
        { label: 'B', text: '比较和谐，正常交往', score: 1 },
        { label: 'C', text: '一般，仅限工作', score: 0 },
        { label: 'D', text: '关系紧张', score: 0 }
      ]
    },
    {
      id: 2,
      question: '同事需要帮助时，你会？',
      options: [
        { label: 'A', text: '主动提供帮助', score: 2 },
        { label: 'B', text: '被请求时会帮', score: 1 },
        { label: 'C', text: '看情况决定', score: 0 },
        { label: 'D', text: '觉得麻烦，不愿帮', score: 0 }
      ]
    },
    {
      id: 3,
      question: '职场中发生矛盾时，你会？',
      options: [
        { label: 'A', text: '主动沟通解决', score: 2 },
        { label: 'B', text: '等对方先沟通', score: 1 },
        { label: 'C', text: '冷处理，避免接触', score: 0 },
        { label: 'D', text: '记仇，伺机报复', score: 0 }
      ]
    },
    {
      id: 4,
      question: '你参加团队活动的频率？',
      options: [
        { label: 'A', text: '积极参加', score: 2 },
        { label: 'B', text: '偶尔参加', score: 1 },
        { label: 'C', text: '很少参加', score: 0 },
        { label: 'D', text: '从不参加', score: 0 }
      ]
    },
    {
      id: 5,
      question: '你对职场人际关系的态度是？',
      options: [
        { label: 'A', text: '非常重视，用心经营', score: 2 },
        { label: 'B', text: '比较重视', score: 1 },
        { label: 'C', text: '一般', score: 0 },
        { label: 'D', text: '不重视', score: 0 }
      ]
    }
  ],
  // 共情能力测试 (id: 208)
  208: [
    {
      id: 1,
      question: '朋友向你倾诉工作不顺时，你会？',
      options: [
        {
          label: 'A',
          text: '认真倾听，理解朋友的感受，给予情感支持',
          score: 2
        },
        { label: 'B', text: '听完后给出建议，帮朋友分析问题', score: 1 },
        { label: 'C', text: '简单安慰几句，转移话题', score: 0 },
        { label: 'D', text: '觉得朋友太矫情，不耐烦', score: 0 }
      ]
    },
    {
      id: 2,
      question: '看到陌生人在公共场合哭泣，你会？',
      options: [
        { label: 'A', text: '主动上前询问是否需要帮助', score: 2 },
        { label: 'B', text: '观察一下情况，考虑是否帮忙', score: 1 },
        { label: 'C', text: '觉得尴尬，快速离开', score: 0 },
        { label: 'D', text: '完全不关心，当作没看见', score: 0 }
      ]
    },
    {
      id: 3,
      question: '家人因工作失误被批评，回家后情绪低落，你会？',
      options: [
        { label: 'A', text: '主动关心，听家人倾诉，帮家人分析问题', score: 2 },
        { label: 'B', text: '安慰家人，让家人别往心里去', score: 1 },
        { label: 'C', text: '说"这点小事不算什么"，忽视家人的情绪', score: 0 },
        { label: 'D', text: '指责家人不够努力，才会被批评', score: 0 }
      ]
    },
    {
      id: 4,
      question: '和观点不同的人争论时，你会？',
      options: [
        {
          label: 'A',
          text: '认真倾听对方的想法，尝试理解对方的立场',
          score: 2
        },
        { label: 'B', text: '坚持自己的观点，但会听对方说完', score: 1 },
        { label: 'C', text: '打断对方，极力说服对方', score: 0 },
        { label: 'D', text: '直接反驳，嘲笑对方的观点', score: 0 }
      ]
    },
    {
      id: 5,
      question: '下属因压力大而工作效率下降，你会？',
      options: [
        {
          label: 'A',
          text: '和下属沟通，了解压力来源，提供支持和调整建议',
          score: 2
        },
        { label: 'B', text: '提醒下属提高效率，但不问原因', score: 1 },
        { label: 'C', text: '批评下属工作态度不端正', score: 0 },
        { label: 'D', text: '直接警告或惩罚下属', score: 0 }
      ]
    }
  ],
  // 失恋后心理恢复能力测试 (id: 209)
  209: [
    {
      id: 1,
      question: '刚失恋时，你会如何调节情绪？',
      options: [
        {
          label: 'A',
          text: '接纳失恋的痛苦，通过运动、社交等方式释放情绪',
          score: 2
        },
        { label: 'B', text: '向家人朋友倾诉，寻求安慰', score: 1 },
        { label: 'C', text: '独自躲起来伤心，不愿和人交流', score: 0 },
        { label: 'D', text: '借酒消愁，沉迷游戏等逃避现实', score: 0 }
      ]
    },
    {
      id: 2,
      question: '看到前任和新欢的消息，你会？',
      options: [
        { label: 'A', text: '坦然面对，祝福对方，专注自己的生活', score: 2 },
        { label: 'B', text: '有点失落，但会尽快转移注意力', score: 1 },
        { label: 'C', text: '心里嫉妒，忍不住关注对方的动态', score: 0 },
        { label: 'D', text: '愤怒不已，想报复对方或新欢', score: 0 }
      ]
    },
    {
      id: 3,
      question: '失恋一个月后，你能正常投入工作和生活吗？',
      options: [
        { label: 'A', text: '能正常投入，还会主动提升自己', score: 2 },
        { label: 'B', text: '基本能投入，但偶尔会情绪低落', score: 1 },
        { label: 'C', text: '工作生活受影响，效率明显下降', score: 0 },
        { label: 'D', text: '无法投入，整日精神恍惚', score: 0 }
      ]
    },
    {
      id: 4,
      question: '你会如何看待这段失恋的经历？',
      options: [
        { label: 'A', text: '认为是成长的机会，从中总结经验', score: 2 },
        { label: 'B', text: '觉得有点遗憾，但接受现实', score: 1 },
        { label: 'C', text: '沉浸在遗憾中，后悔自己的做法', score: 0 },
        { label: 'D', text: '觉得是对方的错，怨恨对方', score: 0 }
      ]
    },
    {
      id: 5,
      question: '失恋后，你会愿意开始新的感情吗？',
      options: [
        { label: 'A', text: '调整好自己后，会主动接触新的人', score: 2 },
        { label: 'B', text: '等缘分，有人追求会考虑', score: 1 },
        { label: 'C', text: '很长时间都不想谈恋爱', score: 0 },
        { label: 'D', text: '对感情失去信心，不想再恋爱', score: 0 }
      ]
    }
  ],
  // 家庭矛盾处理能力测试 (id: 210)
  210: [
    {
      id: 1,
      question: '婆媳/翁婿之间产生矛盾，你会？',
      options: [
        {
          label: 'A',
          text: '主动调解，分别倾听双方诉求，寻求平衡点',
          score: 2
        },
        { label: 'B', text: '站在有理的一方，帮其解释', score: 1 },
        { label: 'C', text: '偏袒自己的家人，指责对方', score: 0 },
        { label: 'D', text: '逃避问题，让他们自行解决', score: 0 }
      ]
    },
    {
      id: 2,
      question: '兄弟姐妹因财产分配产生分歧，你会？',
      options: [
        { label: 'A', text: '提议坐下来协商，兼顾各方利益', score: 2 },
        { label: 'B', text: '表达自己的想法，希望大家妥协', score: 1 },
        { label: 'C', text: '坚持自己的利益，不愿让步', score: 0 },
        { label: 'D', text: '争吵不休，甚至闹到断绝关系', score: 0 }
      ]
    },
    {
      id: 3,
      question: '家人因生活习惯不同发生争执，你会？',
      options: [
        {
          label: 'A',
          text: '尊重彼此习惯，商量制定双方都能接受的规则',
          score: 2
        },
        { label: 'B', text: '尽量迁就对方，自己默默适应', score: 1 },
        { label: 'C', text: '要求对方改变习惯，适应自己', score: 0 },
        { label: 'D', text: '互相指责，矛盾不断升级', score: 0 }
      ]
    },
    {
      id: 4,
      question: '亲戚向你提出不合理的要求（如过度借贷），你会？',
      options: [
        { label: 'A', text: '委婉拒绝，说明自己的难处，表达关心', score: 2 },
        { label: 'B', text: '勉强答应，心里很不舒服', score: 1 },
        { label: 'C', text: '直接拒绝，语气生硬', score: 0 },
        { label: 'D', text: '答应后又后悔，背后抱怨', score: 0 }
      ]
    },
    {
      id: 5,
      question: '家庭聚会时，家人当众批评你的生活方式，你会？',
      options: [
        {
          label: 'A',
          text: '平静表达自己的想法，尊重家人的意见但坚持自我',
          score: 2
        },
        { label: 'B', text: '当场不反驳，事后和家人沟通', score: 1 },
        { label: 'C', text: '当场反驳，和家人争吵', score: 0 },
        { label: 'D', text: '忍气吞声，心里怨恨家人', score: 0 }
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
  ],
  // 职业忠诚度测试 (id: 304)
  304: [
    {
      id: 1,
      question: '竞争对手公司高薪挖你，你会？',
      options: [
        {
          label: 'A',
          text: '综合评估公司发展前景、个人成长空间，若当前公司更适合则拒绝',
          score: 2
        },
        { label: 'B', text: '与当前公司谈涨薪，否则跳槽', score: 1 },
        { label: 'C', text: '直接答应跳槽，不告知当前公司', score: 0 },
        { label: 'D', text: '先答应跳槽，再向当前公司索要高薪', score: 0 }
      ]
    },
    {
      id: 2,
      question: '公司遇到暂时的经营困难，需要降薪度过，你会？',
      options: [
        {
          label: 'A',
          text: '了解困难原因，若公司有解决能力则支持，与公司共渡难关',
          score: 2
        },
        { label: 'B', text: '勉强接受，但私下找新工作', score: 1 },
        { label: 'C', text: '直接拒绝，立即辞职', score: 0 },
        { label: 'D', text: '接受降薪，但消极工作', score: 0 }
      ]
    },
    {
      id: 3,
      question: '你会向外界泄露公司的商业机密或内部信息吗？',
      options: [
        { label: 'A', text: '绝对不会，严格遵守保密规定', score: 2 },
        {
          label: 'B',
          text: '关系好的朋友询问时，会透露少量不重要信息',
          score: 1
        },
        { label: 'C', text: '为了个人利益，偶尔泄露', score: 0 },
        { label: 'D', text: '经常泄露，换取好处', score: 0 }
      ]
    },
    {
      id: 4,
      question: '公司组织内部推荐人才，你会？',
      options: [
        { label: 'A', text: '积极推荐合适的人才，帮助公司发展', score: 2 },
        { label: 'B', text: '只在熟人拜托时推荐', score: 1 },
        { label: 'C', text: '觉得麻烦，不参与', score: 0 },
        { label: 'D', text: '推荐不合格的熟人，获取好处', score: 0 }
      ]
    },
    {
      id: 5,
      question: '离开上一家公司后，你会如何评价它？',
      options: [
        { label: 'A', text: '客观评价，肯定优点，不恶意诋毁', score: 2 },
        { label: 'B', text: '只说优点，回避缺点', score: 1 },
        { label: 'C', text: '抱怨缺点，很少提优点', score: 0 },
        { label: 'D', text: '恶意诋毁，编造虚假信息', score: 0 }
      ]
    }
  ],
  // 职业适应能力测试 (id: 305)
  305: [
    {
      id: 1,
      question: '公司调整组织架构，你的工作内容大幅变化，你会？',
      options: [
        {
          label: 'A',
          text: '快速了解新工作要求，学习相关技能，尽快适应',
          score: 2
        },
        { label: 'B', text: '慢慢适应，遇到问题再解决', score: 1 },
        { label: 'C', text: '抱怨调整，工作消极', score: 0 },
        { label: 'D', text: '直接辞职，不接受变化', score: 0 }
      ]
    },
    {
      id: 2,
      question: '被派往陌生城市的分公司工作，你会？',
      options: [
        {
          label: 'A',
          text: '提前了解当地情况，主动融入新团队，适应新环境',
          score: 2
        },
        { label: 'B', text: '接受安排，但只专注工作，不融入环境', score: 1 },
        { label: 'C', text: '找借口拒绝外派', score: 0 },
        { label: 'D', text: '勉强外派，但频繁请假回原城市', score: 0 }
      ]
    },
    {
      id: 3,
      question: '公司引入新的工作系统，操作方式与之前完全不同，你会？',
      options: [
        { label: 'A', text: '参加培训，主动摸索，最快掌握系统操作', score: 2 },
        { label: 'B', text: '等待同事学会后再请教', score: 1 },
        { label: 'C', text: '抱怨系统难用，仍用旧方法工作', score: 0 },
        { label: 'D', text: '拒绝使用新系统，影响工作进度', score: 0 }
      ]
    },
    {
      id: 4,
      question: '从基层岗位晋升到管理岗位，你会？',
      options: [
        {
          label: 'A',
          text: '学习管理知识，向资深管理者请教，快速转变角色',
          score: 2
        },
        { label: 'B', text: '沿用基层工作思路，慢慢摸索管理方法', score: 1 },
        { label: 'C', text: '觉得压力大，想退回基层', score: 0 },
        { label: 'D', text: '摆官架子，不实际做事', score: 0 }
      ]
    },
    {
      id: 5,
      question: '行业突然出现颠覆性技术，你的专业技能面临淘汰，你会？',
      options: [
        { label: 'A', text: '紧急学习新技能，转型适应行业变化', score: 2 },
        { label: 'B', text: '焦虑不安，被动等待', score: 1 },
        { label: 'C', text: '抱怨行业变化快，不愿学习', score: 0 },
        { label: 'D', text: '放弃该行业，盲目转行', score: 0 }
      ]
    }
  ],
  // 工作压力管理能力测试 (id: 306)
  306: [
    {
      id: 1,
      question: '面对紧急的工作任务，你会？',
      options: [
        { label: 'A', text: '冷静分析，制定计划，高效完成', score: 2 },
        { label: 'B', text: '有些紧张，但能按时完成', score: 1 },
        { label: 'C', text: '感到压力很大，效率下降', score: 0 },
        { label: 'D', text: '手忙脚乱，难以应对', score: 0 }
      ]
    },
    {
      id: 2,
      question: '当工作量超出预期时，你会？',
      options: [
        { label: 'A', text: '合理安排优先级，必要时寻求帮助', score: 2 },
        { label: 'B', text: '加班加点，努力完成', score: 1 },
        { label: 'C', text: '感到焦虑，影响睡眠', score: 0 },
        { label: 'D', text: '抱怨压力大，消极应对', score: 0 }
      ]
    },
    {
      id: 3,
      question: '你如何缓解工作压力？',
      options: [
        { label: 'A', text: '运动、冥想等健康方式', score: 2 },
        { label: 'B', text: '和朋友倾诉', score: 1 },
        { label: 'C', text: '暴饮暴食或熬夜', score: 0 },
        { label: 'D', text: '不知道如何缓解', score: 0 }
      ]
    },
    {
      id: 4,
      question: '长期高压工作后，你的状态是？',
      options: [
        { label: 'A', text: '依然保持良好状态', score: 2 },
        { label: 'B', text: '有些疲惫，但能恢复', score: 1 },
        { label: 'C', text: '明显感到倦怠', score: 0 },
        { label: 'D', text: '身心俱疲，想要逃离', score: 0 }
      ]
    },
    {
      id: 5,
      question: '你对工作压力的态度是？',
      options: [
        { label: 'A', text: '压力是动力，能激发潜能', score: 2 },
        { label: 'B', text: '适度压力可以接受', score: 1 },
        { label: 'C', text: '害怕压力，尽量避免', score: 0 },
        { label: 'D', text: '无法承受任何压力', score: 0 }
      ]
    }
  ],
  // 团队协作能力测试 (id: 307)
  307: [
    {
      id: 1,
      question: '在团队项目中，你通常？',
      options: [
        { label: 'A', text: '主动承担任务，积极配合', score: 2 },
        { label: 'B', text: '完成分配的工作', score: 1 },
        { label: 'C', text: '被动等待安排', score: 0 },
        { label: 'D', text: '能推就推，不愿参与', score: 0 }
      ]
    },
    {
      id: 2,
      question: '当团队成员需要帮助时，你会？',
      options: [
        { label: 'A', text: '主动提供帮助和支持', score: 2 },
        { label: 'B', text: '被请求时会帮忙', score: 1 },
        { label: 'C', text: '看情况决定', score: 0 },
        { label: 'D', text: '觉得不是自己的事', score: 0 }
      ]
    },
    {
      id: 3,
      question: '团队意见不统一时，你会？',
      options: [
        { label: 'A', text: '倾听各方意见，寻求共识', score: 2 },
        { label: 'B', text: '表达自己观点，尊重他人', score: 1 },
        { label: 'C', text: '坚持己见，不愿妥协', score: 0 },
        { label: 'D', text: '保持沉默，不参与讨论', score: 0 }
      ]
    },
    {
      id: 4,
      question: '你如何看待团队荣誉？',
      options: [
        { label: 'A', text: '团队成功比个人成功更重要', score: 2 },
        { label: 'B', text: '两者都重要', score: 1 },
        { label: 'C', text: '个人成功更重要', score: 0 },
        { label: 'D', text: '不太关心', score: 0 }
      ]
    },
    {
      id: 5,
      question: '总体来说，你的团队协作能力如何？',
      options: [
        { label: 'A', text: '非常强，是团队核心', score: 2 },
        { label: 'B', text: '比较强，能很好配合', score: 1 },
        { label: 'C', text: '一般，勉强应付', score: 0 },
        { label: 'D', text: '较弱，更喜欢独立工作', score: 0 }
      ]
    }
  ],
  // 职业发展规划清晰度测试 (id: 308)
  308: [
    {
      id: 1,
      question: '你有明确的职业目标吗？',
      options: [
        { label: 'A', text: '有清晰的短期和长期目标', score: 2 },
        { label: 'B', text: '有大致方向', score: 1 },
        { label: 'C', text: '不太清楚', score: 0 },
        { label: 'D', text: '完全没有', score: 0 }
      ]
    },
    {
      id: 2,
      question: '你会为职业发展做规划吗？',
      options: [
        { label: 'A', text: '定期制定和调整职业规划', score: 2 },
        { label: 'B', text: '偶尔会想一想', score: 1 },
        { label: 'C', text: '很少规划', score: 0 },
        { label: 'D', text: '从不规划，走一步看一步', score: 0 }
      ]
    },
    {
      id: 3,
      question: '你了解自己的职业优势吗？',
      options: [
        { label: 'A', text: '非常了解，能充分发挥', score: 2 },
        { label: 'B', text: '了解一些', score: 1 },
        { label: 'C', text: '不太了解', score: 0 },
        { label: 'D', text: '完全不了解', score: 0 }
      ]
    },
    {
      id: 4,
      question: '你会主动提升职业技能吗？',
      options: [
        { label: 'A', text: '经常学习，持续提升', score: 2 },
        { label: 'B', text: '有需要时会学', score: 1 },
        { label: 'C', text: '很少主动学习', score: 0 },
        { label: 'D', text: '从不主动学习', score: 0 }
      ]
    },
    {
      id: 5,
      question: '你对自己的职业发展满意吗？',
      options: [
        { label: 'A', text: '非常满意，按计划发展', score: 2 },
        { label: 'B', text: '比较满意', score: 1 },
        { label: 'C', text: '不太满意', score: 0 },
        { label: 'D', text: '很不满意，感到迷茫', score: 0 }
      ]
    }
  ],
  // 创新思维能力测试 (id: 309)
  309: [
    {
      id: 1,
      question: '面对问题时，你会？',
      options: [
        { label: 'A', text: '寻找多种创新解决方案', score: 2 },
        { label: 'B', text: '尝试新方法', score: 1 },
        { label: 'C', text: '使用常规方法', score: 0 },
        { label: 'D', text: '等待他人解决', score: 0 }
      ]
    },
    {
      id: 2,
      question: '你对新事物的态度是？',
      options: [
        { label: 'A', text: '充满好奇，主动尝试', score: 2 },
        { label: 'B', text: '愿意了解', score: 1 },
        { label: 'C', text: '保持观望', score: 0 },
        { label: 'D', text: '抗拒改变', score: 0 }
      ]
    },
    {
      id: 3,
      question: '工作中你会提出改进建议吗？',
      options: [
        { label: 'A', text: '经常提出创新想法', score: 2 },
        { label: 'B', text: '偶尔会提', score: 1 },
        { label: 'C', text: '很少提', score: 0 },
        { label: 'D', text: '从不提，按部就班', score: 0 }
      ]
    },
    {
      id: 4,
      question: '你如何看待失败？',
      options: [
        { label: 'A', text: '是创新必经之路，从中学习', score: 2 },
        { label: 'B', text: '可以接受', score: 1 },
        { label: 'C', text: '感到沮丧', score: 0 },
        { label: 'D', text: '害怕失败，不敢尝试', score: 0 }
      ]
    },
    {
      id: 5,
      question: '你的创新思维能力如何？',
      options: [
        { label: 'A', text: '非常强，经常有新想法', score: 2 },
        { label: 'B', text: '比较强', score: 1 },
        { label: 'C', text: '一般', score: 0 },
        { label: 'D', text: '较弱，思维固化', score: 0 }
      ]
    }
  ],
  // 职场情商测试 (id: 310)
  310: [
    {
      id: 1,
      question: '你能准确识别他人的情绪吗？',
      options: [
        { label: 'A', text: '非常准确，善于察言观色', score: 2 },
        { label: 'B', text: '大多数时候可以', score: 1 },
        { label: 'C', text: '有时会误解', score: 0 },
        { label: 'D', text: '经常理解错误', score: 0 }
      ]
    },
    {
      id: 2,
      question: '面对职场冲突，你会？',
      options: [
        { label: 'A', text: '冷静分析，妥善处理', score: 2 },
        { label: 'B', text: '尝试沟通解决', score: 1 },
        { label: 'C', text: '情绪化反应', score: 0 },
        { label: 'D', text: '逃避或激化矛盾', score: 0 }
      ]
    },
    {
      id: 3,
      question: '你能控制自己的情绪吗？',
      options: [
        { label: 'A', text: '非常好，不轻易表露', score: 2 },
        { label: 'B', text: '大多数时候可以', score: 1 },
        { label: 'C', text: '有时会失控', score: 0 },
        { label: 'D', text: '经常情绪化', score: 0 }
      ]
    },
    {
      id: 4,
      question: '你的人际关系处理能力如何？',
      options: [
        { label: 'A', text: '非常强，人缘很好', score: 2 },
        { label: 'B', text: '比较强', score: 1 },
        { label: 'C', text: '一般', score: 0 },
        { label: 'D', text: '较弱，经常有矛盾', score: 0 }
      ]
    },
    {
      id: 5,
      question: '总体来说，你的职场情商如何？',
      options: [
        { label: 'A', text: '非常高', score: 2 },
        { label: 'B', text: '比较高', score: 1 },
        { label: 'C', text: '一般', score: 0 },
        { label: 'D', text: '较低', score: 0 }
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
  ],
  // 追剧风格测试 (id: 404)
  404: [
    {
      id: 1,
      question: '你会如何选择要追的剧？',
      options: [
        {
          label: 'A',
          text: '看剧情简介、演员阵容和豆瓣评分，精挑细选',
          score: 2
        },
        { label: 'B', text: '看朋友推荐或短视频平台种草', score: 1 },
        { label: 'C', text: '打开视频APP，随便点一个热门剧', score: 0 },
        { label: 'D', text: '别人看什么自己就看什么', score: 0 }
      ]
    },
    {
      id: 2,
      question: '追剧时，你会控制进度吗？',
      options: [
        { label: 'A', text: '每天追2-3集，不影响工作和休息', score: 2 },
        { label: 'B', text: '周末一次性追很多集，平时不看', score: 1 },
        { label: 'C', text: '熬夜追完一整部，不管多晚', score: 0 },
        { label: 'D', text: '想看就看，没有固定节奏', score: 0 }
      ]
    },
    {
      id: 3,
      question: '遇到烂剧，你会？',
      options: [
        { label: 'A', text: '看2集后果断弃剧，不浪费时间', score: 2 },
        { label: 'B', text: '勉强看完，想知道结局', score: 1 },
        { label: 'C', text: '一边吐槽一边看，越骂越上瘾', score: 0 },
        { label: 'D', text: '不管好坏，都能看完', score: 0 }
      ]
    },
    {
      id: 4,
      question: '追剧时，你会和别人互动吗？',
      options: [
        { label: 'A', text: '看剧后和朋友讨论剧情，写短评', score: 2 },
        { label: 'B', text: '刷剧评区，看别人的分析', score: 1 },
        { label: 'C', text: '发弹幕吐槽，和网友互动', score: 1 },
        { label: 'D', text: '独自看剧，不和任何人交流', score: 0 }
      ]
    },
    {
      id: 5,
      question: '追完一部剧后，你会？',
      options: [
        { label: 'A', text: '整理剧中经典台词，回顾喜欢的片段', score: 2 },
        { label: 'B', text: '很快忘记，开始追下一部', score: 1 },
        { label: 'C', text: '陷入剧情无法自拔，情绪低落好几天', score: 0 },
        { label: 'D', text: '没什么感觉，只是打发时间', score: 0 }
      ]
    }
  ],
  // 养宠物态度测试 (id: 405)
  405: [
    {
      id: 1,
      question: '如果要养宠物，你会怎么选？',
      options: [
        {
          label: 'A',
          text: '结合自己的作息和居住环境，选合适的宠物',
          score: 2
        },
        { label: 'B', text: '选颜值高、受欢迎的宠物，如猫咪、狗狗', score: 1 },
        { label: 'C', text: '选好养活的，如金鱼、仓鼠', score: 0 },
        { label: 'D', text: '随便选一个，别人送什么养什么', score: 0 }
      ]
    },
    {
      id: 2,
      question: '养宠物前，你会做准备吗？',
      options: [
        {
          label: 'A',
          text: '学习宠物喂养知识，准备粮食、用品和疫苗',
          score: 2
        },
        { label: 'B', text: '简单买些粮食和笼子，其他再说', score: 1 },
        { label: 'C', text: '什么都不准备，养了再说', score: 0 },
        { label: 'D', text: '让别人帮忙准备，自己不管', score: 0 }
      ]
    },
    {
      id: 3,
      question: '宠物生病时，你会？',
      options: [
        { label: 'A', text: '立即带宠物去医院，细心照顾', score: 2 },
        { label: 'B', text: '上网查资料，买些药自己治', score: 1 },
        { label: 'C', text: '有点着急，但不知道怎么办', score: 0 },
        { label: 'D', text: '觉得麻烦，不想管', score: 0 }
      ]
    },
    {
      id: 4,
      question: '你会花时间陪宠物吗？',
      options: [
        { label: 'A', text: '每天固定时间陪宠物玩耍、遛弯', score: 2 },
        { label: 'B', text: '有空时陪宠物，忙时就忽略', score: 1 },
        { label: 'C', text: '偶尔逗一下宠物，很少专门陪伴', score: 0 },
        { label: 'D', text: '从不陪宠物，只给食物', score: 0 }
      ]
    },
    {
      id: 5,
      question: '如果要出差，你会怎么安排宠物？',
      options: [
        {
          label: 'A',
          text: '托付给靠谱的朋友或宠物寄养店，交代注意事项',
          score: 2
        },
        { label: 'B', text: '让家人帮忙照看，简单说明情况', score: 1 },
        { label: 'C', text: '留足够的食物和水，让宠物独自在家', score: 0 },
        { label: 'D', text: '不管不顾，让宠物自生自灭', score: 0 }
      ]
    }
  ],
  // 你的理想旅行方式测试 (id: 406)
  406: [
    {
      id: 1,
      question: '你更喜欢哪种旅行方式？',
      options: [
        { label: 'A', text: '自由行，自己规划行程', score: 2 },
        { label: 'B', text: '半自由行，有导游但时间灵活', score: 1 },
        { label: 'C', text: '跟团游，省心省力', score: 0 },
        { label: 'D', text: '不喜欢旅行', score: 0 }
      ]
    },
    {
      id: 2,
      question: '旅行时你更注重什么？',
      options: [
        { label: 'A', text: '体验当地文化和生活', score: 2 },
        { label: 'B', text: '打卡著名景点', score: 1 },
        { label: 'C', text: '美食和购物', score: 1 },
        { label: 'D', text: '休息放松', score: 0 }
      ]
    },
    {
      id: 3,
      question: '你喜欢去哪类目的地？',
      options: [
        { label: 'A', text: '小众冷门的地方', score: 2 },
        { label: 'B', text: '热门旅游城市', score: 1 },
        { label: 'C', text: '海岛度假村', score: 0 },
        { label: 'D', text: '都可以', score: 0 }
      ]
    },
    {
      id: 4,
      question: '旅行前你会做攻略吗？',
      options: [
        { label: 'A', text: '详细规划每天行程', score: 2 },
        { label: 'B', text: '大致了解景点和美食', score: 1 },
        { label: 'C', text: '简单看看就出发', score: 0 },
        { label: 'D', text: '完全不做攻略', score: 0 }
      ]
    },
    {
      id: 5,
      question: '你更喜欢和谁一起旅行？',
      options: [
        { label: 'A', text: '独自旅行', score: 2 },
        { label: 'B', text: '和朋友一起', score: 1 },
        { label: 'C', text: '和家人一起', score: 1 },
        { label: 'D', text: '都可以', score: 0 }
      ]
    }
  ],
  // 你的美食偏好测试 (id: 407)
  407: [
    {
      id: 1,
      question: '你更喜欢什么口味？',
      options: [
        { label: 'A', text: '辣味', score: 2 },
        { label: 'B', text: '甜味', score: 1 },
        { label: 'C', text: '咸鲜', score: 1 },
        { label: 'D', text: '清淡', score: 0 }
      ]
    },
    {
      id: 2,
      question: '你愿意尝试新奇的食物吗？',
      options: [
        { label: 'A', text: '非常愿意，喜欢探索', score: 2 },
        { label: 'B', text: '会尝试，但有选择', score: 1 },
        { label: 'C', text: '比较保守，只吃熟悉的', score: 0 },
        { label: 'D', text: '完全不愿意', score: 0 }
      ]
    },
    {
      id: 3,
      question: '你更喜欢在哪里吃饭？',
      options: [
        { label: 'A', text: '网红餐厅或特色小店', score: 2 },
        { label: 'B', text: '连锁品牌餐厅', score: 1 },
        { label: 'C', text: '家里自己做', score: 0 },
        { label: 'D', text: '随便哪里都行', score: 0 }
      ]
    },
    {
      id: 4,
      question: '你对美食的态度是？',
      options: [
        { label: 'A', text: '是生活的重要乐趣', score: 2 },
        { label: 'B', text: '喜欢美食，但不痴迷', score: 1 },
        { label: 'C', text: '只是填饱肚子', score: 0 },
        { label: 'D', text: '不太关注', score: 0 }
      ]
    },
    {
      id: 5,
      question: '你会为了美食专门去一个地方吗？',
      options: [
        { label: 'A', text: '会，美食值得专程前往', score: 2 },
        { label: 'B', text: '顺路的话会去', score: 1 },
        { label: 'C', text: '不会专门去', score: 0 },
        { label: 'D', text: '觉得没必要', score: 0 }
      ]
    }
  ],
  // 你的购物风格测试 (id: 408)
  408: [
    {
      id: 1,
      question: '你的购物习惯是？',
      options: [
        { label: 'A', text: '提前列清单，理性购买', score: 2 },
        { label: 'B', text: '看到喜欢的就买', score: 1 },
        { label: 'C', text: '经常冲动消费', score: 0 },
        { label: 'D', text: '很少购物', score: 0 }
      ]
    },
    {
      id: 2,
      question: '购物前你会比价吗？',
      options: [
        { label: 'A', text: '会仔细对比多家', score: 2 },
        { label: 'B', text: '简单看看', score: 1 },
        { label: 'C', text: '很少比价', score: 0 },
        { label: 'D', text: '从不比价', score: 0 }
      ]
    },
    {
      id: 3,
      question: '你更喜欢线上还是线下购物？',
      options: [
        { label: 'A', text: '线上购物，方便快捷', score: 2 },
        { label: 'B', text: '线下购物，可以试穿试用', score: 1 },
        { label: 'C', text: '两者结合', score: 1 },
        { label: 'D', text: '都不喜欢', score: 0 }
      ]
    },
    {
      id: 4,
      question: '遇到打折促销，你会？',
      options: [
        { label: 'A', text: '理性判断是否真的需要', score: 2 },
        { label: 'B', text: '会买一些', score: 1 },
        { label: 'C', text: '大量囤货', score: 0 },
        { label: 'D', text: '不受影响', score: 0 }
      ]
    },
    {
      id: 5,
      question: '你对购物的态度是？',
      options: [
        { label: 'A', text: '理性消费，按需购买', score: 2 },
        { label: 'B', text: '适度消费', score: 1 },
        { label: 'C', text: '购物是减压方式', score: 0 },
        { label: 'D', text: '能不买就不买', score: 0 }
      ]
    }
  ],
  // 你的社交媒体人格测试 (id: 409)
  409: [
    {
      id: 1,
      question: '你多久发一次朋友圈/动态？',
      options: [
        { label: 'A', text: '每天都发', score: 2 },
        { label: 'B', text: '每周几次', score: 1 },
        { label: 'C', text: '偶尔发一次', score: 0 },
        { label: 'D', text: '几乎不发', score: 0 }
      ]
    },
    {
      id: 2,
      question: '你更喜欢发什么内容？',
      options: [
        { label: 'A', text: '生活日常和心情', score: 2 },
        { label: 'B', text: '美食和旅行', score: 1 },
        { label: 'C', text: '转发和分享', score: 0 },
        { label: 'D', text: '什么都不发', score: 0 }
      ]
    },
    {
      id: 3,
      question: '你会给别人的动态点赞评论吗？',
      options: [
        { label: 'A', text: '经常互动', score: 2 },
        { label: 'B', text: '偶尔会', score: 1 },
        { label: 'C', text: '很少互动', score: 0 },
        { label: 'D', text: '从不互动', score: 0 }
      ]
    },
    {
      id: 4,
      question: '你在意别人的点赞和评论吗？',
      options: [
        { label: 'A', text: '比较在意', score: 2 },
        { label: 'B', text: '有点在意', score: 1 },
        { label: 'C', text: '不太在意', score: 0 },
        { label: 'D', text: '完全不在意', score: 0 }
      ]
    },
    {
      id: 5,
      question: '你对社交媒体的态度是？',
      options: [
        { label: 'A', text: '生活的重要部分', score: 2 },
        { label: 'B', text: '偶尔使用', score: 1 },
        { label: 'C', text: '可有可无', score: 0 },
        { label: 'D', text: '不喜欢使用', score: 0 }
      ]
    }
  ],
  // 你的生活态度测试 (id: 410)
  410: [
    {
      id: 1,
      question: '你对生活的态度是？',
      options: [
        { label: 'A', text: '积极乐观，充满希望', score: 2 },
        { label: 'B', text: '比较乐观', score: 1 },
        { label: 'C', text: '平淡看待', score: 0 },
        { label: 'D', text: '消极悲观', score: 0 }
      ]
    },
    {
      id: 2,
      question: '遇到困难时，你会？',
      options: [
        { label: 'A', text: '积极面对，寻找解决方法', score: 2 },
        { label: 'B', text: '努力应对', score: 1 },
        { label: 'C', text: '感到沮丧', score: 0 },
        { label: 'D', text: '想要逃避', score: 0 }
      ]
    },
    {
      id: 3,
      question: '你有明确的生活目标吗？',
      options: [
        { label: 'A', text: '有清晰的目标和规划', score: 2 },
        { label: 'B', text: '有大致方向', score: 1 },
        { label: 'C', text: '不太清楚', score: 0 },
        { label: 'D', text: '没有目标', score: 0 }
      ]
    },
    {
      id: 4,
      question: '你如何平衡工作和生活？',
      options: [
        { label: 'A', text: '很好地平衡两者', score: 2 },
        { label: 'B', text: '尽量平衡', score: 1 },
        { label: 'C', text: '工作优先', score: 0 },
        { label: 'D', text: '难以平衡', score: 0 }
      ]
    },
    {
      id: 5,
      question: '你对未来的看法是？',
      options: [
        { label: 'A', text: '充满期待和信心', score: 2 },
        { label: 'B', text: '比较期待', score: 1 },
        { label: 'C', text: '不确定', score: 0 },
        { label: 'D', text: '感到迷茫', score: 0 }
      ]
    }
  ]
}
