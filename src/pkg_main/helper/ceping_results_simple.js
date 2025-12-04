// 简化版测评结果数据 - 根据测评ID和分数百分比返回结果
// 由于完整结果文案过多，这里提供一个通用的结果生成函数

export function getTestResult(testId, totalScore, maxScore) {
  const percentage = totalScore / maxScore

  // 根据测评ID返回对应的结果
  // 这里先实现几个示例，其他的可以逐步补充

  // 性格测评 (101-110)
  if (testId >= 101 && testId <= 110) {
    return getXinggeResult(testId, percentage)
  }

  // 情感测评 (201-210)
  if (testId >= 201 && testId <= 210) {
    return getQingganResult(testId, percentage)
  }

  // 事业测评 (301-310)
  if (testId >= 301 && testId <= 310) {
    return getShiyeResult(testId, percentage)
  }

  // 趣味测评 (401-410)
  if (testId >= 401 && testId <= 410) {
    return getQuweiResult(testId, percentage)
  }

  // 默认返回
  return {
    title: '测评完成',
    content: '感谢您完成本次测评！'
  }
}

// 性格测评结果
function getXinggeResult(testId, percentage) {
  const results = {
    101: {
      // 外向与内向倾向测试
      high: {
        title: '极致外向型——社交场上的活力源泉',
        content:
          '你是典型的外向型人格，精力来源于与他人的互动。社交对你而言不是负担，而是补充能量的方式，无论是大型聚会还是陌生社交场景，你都能快速适应并展现出强大的沟通能力。'
      },
      mediumHigh: {
        title: '平衡外向型——灵活切换的社交智者',
        content:
          '你具备良好的社交适应能力，既能在热闹场合中游刃有余，也能享受独处时光。这种平衡让你在不同环境中都能找到舒适的状态。'
      },
      mediumLow: {
        title: '平衡内向型——独处与社交的平衡者',
        content:
          '你更倾向于内向，但并非完全排斥社交。你喜欢深度的一对一交流，而非大型社交活动。独处对你来说是恢复精力的重要方式。'
      },
      low: {
        title: '极致内向型——独处中的深度思考者',
        content:
          '你是典型的内向型人格，独处是你最舒适的状态。你拥有丰富的内心世界，善于深度思考和自我反省。'
      }
    },
    102: {
      // 决策风格测试
      high: {
        title: '理性数据型——数据驱动的决策专家',
        content:
          '你是典型的理性决策者，习惯通过数据分析和逻辑推理做出决定。你相信事实和证据，不轻易被情绪左右。'
      },
      mediumHigh: {
        title: '综合分析型——利弊权衡的决策智者',
        content:
          '你善于综合考虑多方面因素做决策，既重视数据分析，也关注人文因素。'
      },
      mediumLow: {
        title: '情感考量型——以人为本的决策守护者',
        content:
          '你在做决策时更注重人的感受和价值观，相信和谐的人际关系和团队氛围对成功至关重要。'
      },
      low: {
        title: '直觉主导型——灵感驱动的决策先锋',
        content: '你习惯依靠直觉和灵感做决策，相信内心的感觉和第一印象。'
      }
    },
    103: {
      // 情绪管理能力测试
      high: {
        title: '情绪冲动型——情绪主导的直球选手',
        content:
          '你的情绪表达直接而强烈，容易被情绪左右行为。建议学习情绪管理技巧，如深呼吸、冷静期等。'
      },
      mediumHigh: {
        title: '情绪稳定型——收放自如的情绪管理者',
        content: '你拥有良好的情绪管理能力，能够在大多数情况下保持冷静和理性。'
      },
      mediumLow: {
        title: '情绪敏感型——共情力强的情绪感知者',
        content: '你对情绪非常敏感，能够敏锐地察觉自己和他人的情绪变化。'
      },
      low: {
        title: '情绪压抑型——自我封闭的情绪隐藏者',
        content:
          '你习惯压抑自己的情绪，很少向他人表达真实感受。建议尝试在安全的环境中逐步表达情绪。'
      }
    }
  }

  // 根据分数返回对应结果
  const testResult = results[testId] || results[101]

  if (percentage >= 0.75) {
    return testResult.high
  } else if (percentage >= 0.5) {
    return testResult.mediumHigh
  } else if (percentage >= 0.25) {
    return testResult.mediumLow
  } else {
    return testResult.low
  }
}

// 情感测评结果
function getQingganResult(testId, percentage) {
  // 简化处理，返回通用结果
  if (percentage >= 0.75) {
    return {
      title: '情感能力出色',
      content:
        '你在这方面表现出色，拥有良好的情感处理能力。继续保持这种积极的状态，你的情感生活会更加和谐美满。'
    }
  } else if (percentage >= 0.5) {
    return {
      title: '情感能力良好',
      content:
        '你在这方面表现良好，能够较好地处理情感问题。继续努力提升，你会拥有更加幸福的情感生活。'
    }
  } else if (percentage >= 0.25) {
    return {
      title: '情感能力一般',
      content:
        '你在这方面还有提升空间。建议多学习情感处理技巧，提升情感智慧，改善人际关系。'
    }
  } else {
    return {
      title: '情感能力需提升',
      content:
        '你在这方面需要加强。建议寻求专业帮助，学习情感处理方法，逐步提升情感能力。'
    }
  }
}

// 事业测评结果
function getShiyeResult(testId, percentage) {
  // 简化处理，返回通用结果
  if (percentage >= 0.75) {
    return {
      title: '职业能力出色',
      content:
        '你在职场中表现出色，拥有很强的职业能力。继续发挥你的优势，你的职业发展前景广阔。'
    }
  } else if (percentage >= 0.5) {
    return {
      title: '职业能力良好',
      content:
        '你的职业能力良好，能够胜任当前工作。继续学习提升，你会获得更好的职业发展。'
    }
  } else if (percentage >= 0.25) {
    return {
      title: '职业能力一般',
      content:
        '你的职业能力还有提升空间。建议多学习职业技能，提升专业能力，为职业发展打好基础。'
    }
  } else {
    return {
      title: '职业能力需提升',
      content:
        '你在职场中还需要加强。建议制定职业发展计划，系统学习提升，逐步增强职业竞争力。'
    }
  }
}

// 趣味测评结果
function getQuweiResult(testId, percentage) {
  // 简化处理，返回通用结果
  if (percentage >= 0.75) {
    return {
      title: '测评结果A',
      content:
        '根据你的选择，你属于这一类型。你拥有独特的个性和特点，继续保持你的风格！'
    }
  } else if (percentage >= 0.5) {
    return {
      title: '测评结果B',
      content:
        '根据你的选择，你属于这一类型。你的性格特点鲜明，有自己独特的魅力。'
    }
  } else if (percentage >= 0.25) {
    return {
      title: '测评结果C',
      content:
        '根据你的选择，你属于这一类型。你有很多有趣的特质，值得进一步探索。'
    }
  } else {
    return {
      title: '测评结果D',
      content:
        '根据你的选择，你属于这一类型。每个人都有独特之处，继续发现自己的闪光点！'
    }
  }
}
