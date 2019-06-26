/**
* 日志级别
*/
// export enum CRLogLevel { Off = 0, Error = 1, Warning = 2, Info = 3, Debug = 4, Verbose = 5 };

declare namespace jm {
    export class txbugly {
        /**
         * @brief 初始化
         * @param appId 注册应用时，Bugly分配的AppID
         * @param debug 是否开启Debug信息打印，默认关闭，开启则会打印SDK的调试信息
         * @param level 是否开启崩溃时自定义日志的上报，默认值为 {@link CRLogLevel:Off}，即关闭。设置为其他的值，即会在崩溃时上报自定义日志。如设置为CRLogLevel:Warning，则会上报CRLogLevel:Warning、CRLogLevel:Error的日志
        */
        public static initCrashReport(appId: string): void;
        public static initCrashReport(appId: string, debug: boolean): void;
        public static initCrashReport(appId: string, debug: boolean, level: number): void;

        /**
         * @brief 设置应用的用户唯一标识
         * @param userId
        */
        public static setUserId(userId: string): void;

        /**
         * @brief 上报自定义错误
         * @param category  错误的分类，5表示Lua错误，6表示JS错误
         * @param type      错误类型的名称
         * @param msg       错误原因
         * @param traceback 错误堆栈
        */
        public static reportException(category: number, type: string, msg: string, traceback: string);
        public static reportException(category: number, type: string, msg: string, traceback: string, quit: boolean);

        /**
         * @brief 设置自定义标签，标签需预先在Bugly平台定义
         * @param tag
        */
        public static setTag(tag: number): void;

        /**
         * @brief 设置自定义Key-Value
         * @param key
         * @param value
        */
        public static addUserValue(key: string, value: string): void;

        /**
         * @brief 删除指定的Key-Value
         * @param key
        */
        public static removeUserValue(key: string): void;

        /**
         * @brief 自定义日志
         * @param level 日志级别 {@link CRLogLevel}
         * @param tag   日志标签
         * @param fmt   日志内容
        */
        public static log(level: number, tag: string, fmt: string);

        /**
         * @brief 设置渠道
         * @param channel 渠道标识
        */
        public static setAppChannel(channel: string): void;

        /**
         * @brief 设置应用版本
         * @param version 应用版本信息
        */
        public static setAppVersion(version: string): void;

        /**
         * @brief 设置CrashReporter的渠道类别，默认值为0，表示官方版本，2表示MSDK内置版本，3表示IM SDK内置版本
         * @param type
        */
        public static setCrashReporterType(type: number): void;

        /**
         * @brief 设置热更版本
         * @param type
        */
        public static setHotVersion(_v: string): void;

        /**
         * @brief 获取热更版本
         * @param type
        */
        public static getHotVersion(): string;
    }
}
