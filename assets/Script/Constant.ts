export type EnvType = "develop" | "test" | "prepublish" | "online";
/**
 * Author:  王冬春
 * Version: 1.0
 * Description: 常量声明
 * History: 无
 */
export namespace Constant {
    export const gameVersion: string = "1.1.97.0604"; //服务器版本号
    export const env: EnvType = "test"; //业务环境
    export const debug: boolean = false; //调试开关

    //账号服
    export const accountUrlConfig: { [key: string]: string } = {
        develop: "https://test-ddd-common.qianz.com/auth", //开发服
        test: "https://test-ddd-common.qianz.com/auth", //外网测试服
        prepublish: "https://auth-recharge.qianz.com/auth", //预发布
        online: "https://auth-recharge.qianz.com/auth" //正式服
    };
    //策略服
    export const scheduleUrlConfig: { [key: string]: string } = {
        develop: "https://ddd-test.qianz.com/common",               //开发服
        test: "https://ddd-test.qianz.com/common",                  //外网测试服
        prepublish: "https://ddd-online-common.qianz.com/common",   //预发布
        online: "https://ddd-online-common.qianz.com/common"                   //正式服
    };

    /**
     * 和服务器约定关闭websocket连接的CloseEvent中的code如果为3000,则认为是账号被人顶掉了,
     * 否则认为是网络情况不好导致的连接关闭
     */
    export const serverKickOtherAreaCode: string = "3000"; //异地登录被踢
    export const serverIllegalityKickCode: string = "3001"; //非法被踢
    export const clientCloseCode: number = 3099;
    //分享得双倍的 2x 图片只有在玩家等级大于 showshare2xFlagLevel 时才显示出来
    export const showshare2xFlagLevel: number = 20;

    //品阶颜色
    export const qualityColor: string[] = ["#49A71A", "#49A71A", "#49A71A"];

    //正式版本帧率
    export const releaseFrameRate = 60;

    //测试版本帧率
    export const debugFrameRate = 60;

    /**
     * 所有内容的初始等级、值
     */
    export const initValue = "1";
    //仓库开放等级
    export const storageOpenLevel = 6;
    //竞技场开启等级
    export const arenaOpenLevel = 15;
    //世界boss开启等级
    export const worldBossOpenLevel = 30;
    //召唤boss开启等级
    export const callBossOpenLevel = 30;

    /**
     * 最大地图难度
     */
    export const maxMapDifficultyNum = 6;

    /**
     * 最大地图数量
     */
    export const maxMapNum = 6;

    /**
     * 最大地图关卡数量
     */
    export const maxMapStageNum = 100;
    /**
     * 玩家最大等级
     */
    export const maxPlayerLevel = 150;

    /**
     * 英雄最大星阶值
     */
    export const maxHeroStarNum = 11;

    /**
     * 碎片最大值
     */
    export const maxHeroDebrisLevelNum = 6;

    /**
     * 碎片前缀
     */
    export const typeDebris = "hb";
    /**
     * 英雄最大品阶值
     */
    export const maxHeroQualityNum = 15;

    /**
     * 英雄最大等级值
     */
    export const maxHeroLevelNum = 150;

    /**
     * 英雄最大技能等级值
     */
    export const maxHeroSkillLevelNum = 30;

    /**
     * 装备最大等级
     */
    export const maxEquipmentLevelNum = 15;
    /**
     * 装备最大星阶值
     */
    export const maxEquipmentStarNum = 5;
    /**
     * 引导用的怪物id
     */
    export const guideMonsterStage = "st_101_1_1";
    /**
     * 引导用的英雄id
     * //["he_1", "he_4", "he_5"];
     * //["he_1", "he_4", "he_5", "he_7", "he_8"];
     */
    export const guideHeroIds: string[] = ["he_1", "he_4", "he_7"];
    export const guideFightId = "guide_1_1"; //战斗引导第一步
    export const guideFightEndId = "guide_1_4"; //战斗引导第三步(最后一步)
    export const guideClickTeachId = "guide_1_1";   //教玩家点击屏幕可以攻击的步骤
    export const firstToHall = "guide_2_1";    //第一次打开大厅
    /**
     * 世界聊天最大显示消息条数
     */
    export const worldChatMsgCount = 50;
    /**
     * 好友聊天最大显示消息条数
     */
    export const friendChatMsgCount = 20;
    export const youQingXin = "gs_24_1";    //友情心
    export const qiYuanQuan = "gs_25_1";    //英雄祈愿券
    export const gaojiQiYuanQuan = "gs_26_1";   //守卫祈愿券

    /**
     * 下划线
     */
    export const underline = "_";

    /**
     * 物品前缀
     */
    export const typeGoods = "gs";

    /**
     * 装备前缀
     */
    export const typeEquip = "eq";

    /**
     * 玩家等级前缀
     */
    export const typePlayerLevel = "pl";

    /**
     * 英雄或守卫前缀
     */
    export const typeHero = "he";

    /**
     * 怪物前缀
     */
    export const typeMonster = "mo";

    /**
     * 英雄等级前缀
     */
    export const typeHeroLevel = "hl";

    /**
     * 英雄品阶前缀
     */
    export const typeHeroQuality = "hq";

    /**
     * 英雄星阶前缀
     */
    export const typeHeroLeveStar = "hs";

    /**
     * 地图关卡前缀
     */
    export const typeMapStage = "st";
    /**
     * 引导前缀
     */
    export const typeGuide = "guide";
    /**
     * 祈愿前缀
     */
    export const typeRecruit = "re";

    /**
     * 第一关
     */
    export const firstStageCfgId = "st_1_1_1";

    /**
     * 玩家主英雄id
     */
    export const mainHeroCfgId: string = "he_1";

    /**
     * 金币ID（物品表）
     */
    export const typeGold: string = "gs_1_1";

    /**
     * 钻石ID（物品表）
     */
    export const typeDiamond: string = "gs_2_1";

    /**
     * 人物经验id，用于人物升级
     */
    export const typeExp: string = "gs_23_1";
    /**
     * 经验之书物品id，用于英雄升级
     */
    export const typeGoodExp: string = "gs_3_1";
    /**
     * 守卫之书物品id，用于守卫升级
     */
    export const typeGuardExp: string = "gs_4_1";
    /**
     * 护盾物品id
     */
    export const typeShield: string = "gs_19_1";
    /**
     * 竞技币id
     */
    export const typeJingJiBi: string = "gs_33_1";
    /**
     * 兽魂,boss系统的货币
     */
    export const typeBossBi: string = "gs_90_1";
    /**
     * 挑战券
     */
    export const typeTiaoZhanQuan: string = "gs_34_1";
    /**
     * 喇叭id,世界聊天用
     */
    export const typeHorn: string = "gs_21_1";
    /**
     * 友情心
     */
    export const typeFriend: string = "gs_24_1";
    /**
     * 通缉令
     */
    export const typeWanted: string = "gs_20_1";
    /**
     * 分享卡
     */
    export const typeShare: string = "gs_75_1";
    /**
     * 帮助卡
     */
    export const typeFriendCard: string = "gs_32_1";
    /**
     * 抢夺卡
     */
    export const typeStrangerCard: string = "gs_31_1";
    /**
     * 普通boss召唤石
     */
    export const typeNormalCallStone: string = "gs_88_1";
    /**
     * 高级boss召唤石
     */
    export const typeSeniorCallStone: string = "gs_89_1";
    /**
     * 音乐开关key
     */
    export const musicState: string = "DDDMusicState";
    /**
     * 音效开关key
     */
    export const soundState: string = "DDDSoundState";
    export const tipsStr: string[] = [
        "战役中掉落各种装备。",
        "装备可以升级、升星、升品。",
        "每隔4小时可收获一次。",
        "宝库里要帮助其他玩家。",
        "宝库可加护盾防御抢夺。",
        "邀请好友可获得奖励。",
        "祈愿有三种方式。",
        "不同祈愿，消耗不同。"
    ];

    export const scenes = {
        Main: "main",
        Game: "game",
        Test: "test"
    };

    /**
     * 微信托管数据 战力key
     */
    export const WX_KEY_COMBATPOWER = "COMBAT_POWER";
    /**
     * 一些固定通用弹框的标识
     */
    export const dialogViewTag = {
        HttpRetryDialog: "HttpRetryDialog", //http超时重试弹框
        GameResRetryDialog: "GameResRetryDialog", //GameResRetryDialog超时重试弹框
        RetryDialog: "RetryDialog" //重连失败的弹框
    };
    /**
     * 一些固定Loading弹框的标识
     */
    export const loadingViewTag = {
        Loading: "Loading", //重连时候用的
        ResLoading: "ResLoading", //加载资源用
        RetryLoading: "RetryLoading", //重连时候用的
        OpenViewLoading: "OpenViewLoading", //打开界面时的Loading
        HttpLoading: "HttpLoading" //http请求时用的
    };
    /**
     * 资源类型，"Global":全局资源，资源本身管理，"Scene" //场景资源，在切换场景时释放
     */
    export const resTag = { //ResTagType
        Game: "Game", //游戏资源，游戏退出时释放
        Scene: "Scene" //场景资源，在切换场景时释放
    };
    /**
     * 无需释放的资源
     */
    export const persistPrefabConfig: string[] = [
        // "prefab/view/mainView",
        // "prefab/view/BattlefieldView" //这个是因为在切换到游戏场景马上要用到，但是释放不会那么及时
        "prefab/view/guide/GuideView"
    ];
    /**
     * 推送红点字符串
     */
    export const redpotTag = {
        Applyfriend: "applyFriend", //好友申请
        FriendMsg: "friendMsg", //好友消息
        Lottery: "lottery", //祈愿
        Goldpoint: "goldpoint", //点金手
        Monthcard: "monthcard", //月卡
        MonthcardThreeDay: "monthcard3day", //月卡3天(用于显示弹框)
        AfkReward: "afkreward",  //挂机奖励
        Daily: "daily", //任务
        Achv: "achv",   //成就
        SignIn: "signin",   //签到
        Dayrecharge: "dayrecharge",   //每日首冲
        Redpacket: "redpacket", //新年红包
        ArenaReward: "arenareward",  //竞技场奖励
        ShareBack: "shareback",  //邀请有礼
        CustomsBox: "customsbox", //关卡宝箱
        CallBossReward: "callbossrewardreddot", //召唤boss奖励
        WordBossReward: "worldbossrewardreddot", //世界boss奖励
        CancelCallBossFriendNeedHelp: "cancelhelpfriendreddot",   //取消有好友邀请我去打他召唤出来的召唤boss ,因为已经被别人打死了
        CallBossFriendNeedHelp: "helpfriendreddot",    //有好友邀请我去打他召唤出来的召唤boss
        StorageGuard: "havenewheroarray",    //可以给仓库上阵守卫
        WareHouseSmokeReddot: "warehousesmokereddot" //仓库被攻击,显示冒烟特效
    };
    /**
     * 战斗类型
     */
    export const enum BattleType {
        Stage, //闯关，有掉落
        Custom, //通用自定义模式，没有掉落，结算界面自定义，必须处理战斗结果展
        ImplantBattle,  //嵌入战斗
        Guide,   //新手引导用的战斗
        SkillTest, // 技能测试模式
        Arena,   //竞技场
        WorldBoss,  //世界boss
        CallBoss    //召唤boss
    }

    //自定义战斗参数类型
    export interface BattleCustomType {
        view: string; //预设路径，用于openView
        param: Map<string, Object>; //数据
    }

    //自定义场景切换参数类型
    export interface SceneSwitchType {
        view: string; //预设路径，用于openView
        data?: Object; //数据
        params?: { [field: string]: Object }; //参数
        isOpenMain?: boolean; //是否需要打开主场景
    }

    //资源加载类型
    export type LoadingResType = { path: string; ty: typeof cc.Asset; cache?: boolean; count?: number };

    /**
     * 通用自定义战斗参数类型
     */

    export const enum SETTLEMENT_CLICK_TYPE {
        /**
         * 强化装备
         */
        StrengthEquip = 0,

        /**
         * 升级英雄
         */
        UpgradeHero = 1,

        /**
         * 召唤英雄
         */
        SummonHero = 2,

        /**
         * 战役界面
         */
        BattleView = 3
    }

    /**
     * 大地图打开过的最高等级
     */
    export const maxMapOpened: string = "DDDmaxMapOpened";

    /**
     * 装备类型
     */
    export const enum EQUIPMENT_TYPE {
        HELMET = 1, //头盔
        BREASTPLATE = 2, //衣服
        SHOES = 3, //鞋子
        WEAPONRY = 4 //武器
    }

    /**
     * 英雄类型
     */
    export const enum HERO_TYPE {
        HERO = 1, //英雄
        GUARD = 2 //守卫
    }

    /**
     * 任务类型
     */
    export const enum TASK_TYPE {
        ACHV_TASK = 1, //成就
        DAILY_TASK = 2 //日常任务
    }
    /**
     * 任务跳转类型
     */
    export const enum TASK_JUMP_TYPE {
        // 跳转类型 1-战役 2-英雄 3-点金手 4-仓库 5-守卫 6-商城钻石页签 7-祈愿 8-邀请有礼 9-竞技场
        NOT_TASK = 0,
        BATTLE_TASK = 1,
        HEAR_TASK = 2,
        GOLD_TASK = 3,
        STORAGE_TASK = 4,
        MONSTER_TASK = 5,
        MALL_TASK = 6,
        RECRUIT_TASK = 7,
        INVITE = 8,
        ARENA = 9
    }
    /**
     * 怪物类型
     */
    export const enum MONSTER_TYPE {
        MONSTER = 1, //普通怪
        BOSS = 2, //boss
        EGG = 3 //彩蛋
    }

    /**
     * 本地资源版本key
     */
    export const localResVersionKey: string = "localResVersionKey";
    /**
     * 小商城返回类型
     */
    export const enum SmallMallBackType {
        Success = 0, //购买成功
        Error = 1, //返回错误
        Cencel = 2,  //取消购买
        Close = 3  //非正常情况关闭了界面
    }

    /**
     * 仓库系统tag类型
     */
    export const enum StorageTagType {
        Other = 0, //未知
        Rob = 1, //抢夺
        Help = 2,  //帮助
        Wanted = 3,  //通缉
        Shield = 4  //护盾
    }
    /**
     * 商品类型
     */
    export const enum MallType {
        MALL = 1, //商城
        FIRST = 3, //首冲
        LIMIT = 4, //限购
        MONTH = 5, //月卡
        RECHARGE_TRIPLE = 6, //充值得三倍
        WEEK_GIFT = 7,  //周礼包
        MONTH_GIFT = 8  //月礼包
    }

    /**
     * 英雄升级类型
     */
    export const enum HeroUpgradesType {
        INVALID = -1, //无效
        LEVEL = 0, //等级
        QUALITYS = 1, //品阶
        STAR = 2, //星阶
        SKILL = 3, //技能
        EQUIPMENT = 4, //装备
        PLAYER_LEVEL = 5 //玩家等级
    }

    /**
     * 英雄属性类型
     */
    export const enum HeroPropertyType {
        HP = 0, //血量
        PATK = 1, //物攻
        MATK = 2, //法攻
        PDEF = 3, //物防
        MDEF = 4, //法防
        ASPD = 5, //速度
        COMBATPOWER = 6 //总战力
    }
    /**
     * 功能对应的Tip配置ID
     */
    export const enum TipType {
        HeroUpdateStar = 1, //英雄升星阶
        HeroUpdateQuality = 2,   //英雄升品级
        GetItem = 3,    //获得物品
        GetHero = 4,    //获得英雄
        GetGuard = 5,   //获得守卫
        GuardUpdateStar = 6,    //守卫升星阶
        GuardUpdateQuality = 7,  //守卫升品级
        Normal = 8  //普通公告
    }
    export interface TipParam {
        playerId: string;
        playerName: string;
        heroName?: string;
        num?: number;
        itemName?: string;
        guardName?: string;
    }
    //Boss状态,用于判断boss有没有开启
    export const enum BossState {
        NotStarted = 0, //活动时间未开始
        BossAlive = 1,    //活动时间内,Boss还活着
        BossDead = 2,   //活动时间内,Boss已经被打死
        TimeOver = 3    //活动时间已结束
    }
    //召唤boss类型
    export const enum CallBossType {
        Free = 1,   //免费
        Normal = 2, //普通
        Senior = 3, //高级
        Help = 4    //帮助其他人
    }
    //boss战背景图片
    export const bossFightBg: string = "battlebj_yzbk1";
    export const arenaFightBg: string = "battlebj_yzbk1";
    export const storageFightBg: string = "battlebj_yzbk1";
    export const callBossSingleTime: number = 300;
    export const worldBossSingleTime: number = 300;
    export const enum MallViewType {
        Arena = 1,  //竞技场商店
        Boss = 2    //BOSS商店
    }
    export const openBoss: boolean = true;
}
