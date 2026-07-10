# 潮州旅游攻略验证审查 Spec

## Why

经过多轮优化后，潮州旅游攻略文档已大幅更新。为确保文档的**时效性**（信息是否最新）、**真实性**（内容是否准确无误）、**合理性**（行程逻辑是否通顺），需进行一次系统性验证审查。本轮将结合 code-reviewer 静态分析、 summarize 内容提炼、multi-search-engine 联网搜索、agent-browser 网页抓取等工具，交叉验证文档质量。

## What Changes

### 一、时效性验证
- 使用 WebSearch / agent-browser 抓取最新网页，验证所有标注日期的信息（门票、营业时间、价格、距离）
- 验证 2026 年 7-8 月暑假活动信息是否最新
- 验证新开景点（潮人公园 2026.1.3、大吴营地 2026.1 月底、百花台民宿 2026.2.7）的营业状态

### 二、真实性验证
- 使用 code-reviewer 对 Markdown 文档进行静态分析，检测：
  - 数据不一致（同一条信息在不同文档中表述不同）
  - 死链接 / 不可达的内部链接
  - Markdown 语法错误
  - 表格格式问题
- 使用 WebSearch 抽查关键事实数据
- 验证所有"✅ 已核实"标注的信息是否确实可溯源

### 三、合理性验证
- 检查行程逻辑：Day 1-7 的景点安排是否合理（距离、时间、体力分配）
- 检查预算数据：各文档间的预算数字是否一致
- 检查餐饮安排：三餐推荐是否与当日行程位置匹配
- 检查天气与着装建议是否与 7 月潮州实际气候匹配

### 四、跨文档一致性审查
- 价格数据：同一餐厅/景点在不同文档中的价格是否一致
- 距离数据：同一路线在不同文档中的距离是否一致
- 时间数据：开放时间、营业时间在各文档中是否一致
- 名称统一：景点/餐厅名称拼写是否统一

## Impact

- **Affected files**:
  - `攻略/每日行程.md`
  - `攻略/预算汇总.md`
  - `攻略/README.md`
  - `攻略/热门打卡.md`
  - `攻略/避坑提醒.md`
  - `攻略/行前须知.md`
  - `攻略/住宿.md`
  - `攻略/图片来源.md`
  - `攻略/checklist.md`
  - `攻略/修改说明.md`
  - `.vuepress/sidebars/guideSideBar.ts`
- **工具链**: code-reviewer, summarize, multi-search-engine, agent-browser, WebSearch, WebFetch

## ADDED Requirements

### Requirement: 时效性验证
The system SHALL 通过 WebSearch + agent-browser 抓取 2026 年最新信息，验证文档中所有时间敏感数据的时效性。

#### Scenario: 门票价格时效性
- **WHEN** 检查青岚怪臼谷门票价格
- **THEN** 通过 WebSearch 获取 2026 年最新票价，与文档标注对比

#### Scenario: 新景点营业状态
- **WHEN** 检查大吴营地、百花台民宿
- **THEN** 通过网络搜索确认当前是否仍在营业/试营业

### Requirement: 真实性验证
The system SHALL 使用 code-reviewer 对 Markdown 文档进行静态分析，发现数据不一致、链接错误、语法问题。

#### Scenario: 跨文档数据不一致
- **WHEN** 发现同一景点价格在不同文档中不同
- **THEN** 标记为不一致，并提供修正建议

### Requirement: 合理性验证
The system SHALL 审查行程逻辑、预算合理性、餐饮匹配度。

#### Scenario: 行程过密
- **WHEN** 某天内景点数量过多或交通时间过长
- **THEN** 标注为潜在问题，建议调整

## MODIFIED Requirements

### Requirement: 修改说明文档
修改说明.md 仅保留待核实清单（已完成）。本轮验证发现的新问题将在验证报告中记录。

## REMOVED Requirements

无
