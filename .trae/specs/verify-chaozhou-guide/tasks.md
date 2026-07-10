# Tasks

## 阶段一：时效性验证（联网搜索 + 网页抓取）

- [ ] Task 1: 验证核心景点门票价格（2026 年最新）
  - [ ] SubTask 1.1: WebSearch 核实青岚怪臼谷门票（文档标注 ¥58 起）
  - [ ] SubTask 1.2: WebSearch 核实淡浮院门票（文档标注 ¥36-40）
  - [ ] SubTask 1.3: WebSearch 核实广济桥门票（文档标注 ¥20）
  - [ ] SubTask 1.4: WebSearch 核实凤凰山天池门票（文档标注 ¥40）
  - [ ] SubTask 1.5: WebSearch 核实己略黄公祠/许驸马府门票

- [ ] Task 2: 验证营业时间与活动信息
  - [ ] SubTask 2.1: WebSearch 核实开元寺开放时间（文档标注 8:00-17:30）
  - [ ] SubTask 2.2: WebSearch 核实广济桥灯光秀场次（文档标注周一至周四两场）
  - [ ] SubTask 2.3: WebSearch 核实广济桥夜间非遗秀（推广期 ¥99）
  - [ ] SubTask 2.4: WebSearch 核实 2026 年暑假非遗活动（7-8 月）

- [ ] Task 3: 验证新景点营业状态
  - [ ] SubTask 3.1: WebSearch 核实潮人公园 2026.1.3 开园后状态
  - [ ] SubTask 3.2: WebSearch 核实大吴营地营业状态（周五周六晚七点演出）
  - [ ] SubTask 3.3: WebSearch 核实百花台民宿是否仍在试营业

- [ ] Task 4: 验证餐厅信息
  - [ ] SubTask 4.1: WebSearch 核实老彬蚝烙（水平路 50 号，营业时间）
  - [ ] SubTask 4.2: WebSearch 核实兴潮牛坊（汤平路 11 号，人均 ¥50-62）
  - [ ] SubTask 4.3: WebSearch 核实阿群砂锅粥（新阳路，营业时间）
  - [ ] SubTask 4.4: WebSearch 核实溪口刘卜鹅肉店（上西平街 245 号）
  - [ ] SubTask 4.5: WebSearch 核实枫春白粥（营业时间 18:00-凌晨 5:00）

## 阶段二：真实性验证（code-reviewer + 静态分析）

- [ ] Task 5: 运行 code-reviewer 对所有 Markdown 文档进行静态分析
  - [ ] SubTask 5.1: 检查 Markdown 语法错误
  - [ ] SubTask 5.2: 检查表格格式问题
  - [ ] SubTask 5.3: 检查内部链接可达性
  - [ ] SubTask 5.4: 检查 frontmatter 格式一致性

- [ ] Task 6: 跨文档数据一致性检查
  - [ ] SubTask 6.1: 对比每日行程.md / 预算汇总.md / README.md 中的价格数据
  - [ ] SubTask 6.2: 对比各文档中的距离数据
  - [ ] SubTask 6.3: 对比各文档中的开放时间
  - [ ] SubTask 6.4: 检查景点/餐厅名称拼写一致性

## 阶段三：合理性验证（行程逻辑审查）

- [ ] Task 7: 行程逻辑审查
  - [ ] SubTask 7.1: 检查 Day 1-7 每日景点数量与交通时间是否合理
  - [ ] SubTask 7.2: 检查三餐推荐位置是否与当日行程匹配
  - [ ] SubTask 7.3: 检查住宿与每日出发点的距离合理性

- [ ] Task 8: 预算合理性审查
  - [ ] SubTask 8.1: 检查"按类别汇总"与"每日预算速查"是否一致
  - [ ] SubTask 8.2: 检查人均计算是否正确（9 人：6 大 3 小）
  - [ ] SubTask 8.3: 检查旧版 vs 新版预算对比数据是否准确

- [ ] Task 9: 天气与着装建议合理性
  - [ ] SubTask 9.1: WebSearch 核实 2026 年 7 月潮州天气预报
  - [ ] SubTask 9.2: 检查着装建议是否匹配 7 月高温高湿气候

## 阶段四：生成验证报告

- [ ] Task 10: 汇总验证结果
  - [ ] SubTask 10.1: 整理时效性问题清单
  - [ ] SubTask 10.2: 整理真实性问题清单
  - [ ] SubTask 10.3: 整理合理性问题清单
  - [ ] SubTask 10.4: 更新修改说明.md 待核实清单（如发现问题）

# Task Dependencies

- Task 5 可与 Task 1-4 并行
- Task 6 依赖 Task 1-4 的核实结果
- Task 7-9 可与 Task 5-6 并行
- Task 10 依赖所有前置任务完成
