export default [
  "",
  {
    title: "📋 攻略导航",
    collapsable: false,
    children: [
      "行前须知.md",
      "住宿推荐.md",
      {
        title: "🏨 酒店详情",
        collapsable: true,
        sidebarDepth: 1,
        children: [
          {
            title: "Night 1–3：潮州古城（3晚）",
            collapsable: true,
            sidebarDepth: 1,
            children: [
              "住宿推荐/night-1-3-潮州古城/耀和别院·清代庭院.md",
              "住宿推荐/night-1-3-潮州古城/潮·颂居-Guesthouse.md",
              "住宿推荐/night-1-3-潮州古城/绿洲庭院民宿.md",
            ],
          },
          {
            title: "Night 4：汕头市区（1晚）",
            collapsable: true,
            sidebarDepth: 1,
            children: [
              "住宿推荐/night-4-汕头市区/汕头龙光喜来登酒店.md",
              "住宿推荐/night-4-汕头市区/汕头国际大酒店.md",
              "住宿推荐/night-4-汕头市区/汕头万象城亚朵酒店.md",
            ],
          },
          {
            title: "Night 5–6：南澳岛（2晚）",
            collapsable: true,
            sidebarDepth: 1,
            children: [
              "住宿推荐/night-5-6-南澳岛/海棠里·观海民宿.md",
              "住宿推荐/night-5-6-南澳岛/MUMU泊木·拾陸間.md",
              "住宿推荐/night-5-6-南澳岛/书野家辰夕海景民宿.md",
            ],
          },
          {
            title: "Night 7：潮州收官（1晚）",
            collapsable: true,
            sidebarDepth: 1,
            children: [
              "住宿推荐/night-7-潮州收官/乃兴石湖休闲避暑山庄.md",
            ],
          },
        ],
      },
      "每日行程.md",
      "预算汇总.md",
      "热门打卡.md",
      "避坑提醒.md",
      "图片来源.md",
    ],
  },
];
