const { ccclass, property } = cc._decorator;

@ccclass
export class Test extends cc.Component {
    @property(cc.Node)
    private mUiNode: cc.Node = null;
    @property(cc.Label)
    private mText: cc.Label = null;
    @property(cc.Label)
    private mGcText: cc.Label = null;
    @property(cc.Label)
    private mStartTimeText: cc.Label = null;
    @property(cc.Label)
    private mTestTimeText: cc.Label = null;
    @property(cc.Label)
    private mFreNumText: cc.Label = null;
    private mPrefab: cc.Prefab = null;
    private mPfbNode: cc.Node = null;
    private mEffect: cc.AudioClip = null;
    private mTimeDelta: number = 0;
    private mIsOpen: boolean = false;
    private mAutoOpen: boolean = false;
    private mSwitchIndex: number = 0;
    private mOpenCount:number = 0;
    private mAutoGc:boolean = false;
    private mIsOpening:boolean= false;
    private mFreNum:number = 1;
    private mAudioId:number = 0;
    private mSwitchPrefab: string[] = [
        "UIPrefab", "prefab/view/invite/InviteView",
        "prefabs/vip/VipView","prefab/view/recruit/RecruitView"];
    public onLoad(): void {
        this.mText.string = this.mSwitchIndex.toString();
        console.log("onLoad prefab:",this.mSwitchPrefab[this.mSwitchIndex]);
        this.mStartTimeText.string= "";
        this.mTestTimeText.string = "";
        this.mFreNumText.string = `频率：${this.mFreNum}s`;
        if (cc.sys.isNative && cc.sys.os === cc.sys.OS_IOS) {
            console.log("onLoad IOS包");
            jm.txbugly.setAppChannel("ddddddddd");
            jm.txbugly.setAppVersion("4.4.4");
            jm.txbugly.setUserId("111100");
            jm.txbugly.setTag(888888);
            jm.txbugly.initCrashReport("0ee78bf4ad",true,5);
        }
    }
    public update(dt: number): void {
        if (!this.mAutoOpen) {
            return;
        }
        this.mTimeDelta += dt;
        if (this.mTimeDelta >= this.mFreNum) {
            this.mTimeDelta = 0;
            if (this.mIsOpen) {
                this.doClose();
            }
            else {
                this.doOpen();
            }
            this.mIsOpen = !this.mIsOpen;
        }
    }
    public onOpenBtnClick(): void {
        console.log("onOpenBtnClick click");
        this.mAutoOpen = false;
        this.mOpenCount = 1;
        this.mTestTimeText.string = "";
        this.mStartTimeText.string = "";
        this.doOpen();
    }
    public onStartBtnClick(): void {
        console.log("onStartBtnClick click");
        if (this.mAutoOpen) {
            return;
        }
        const date = new Date();
        this.mStartTimeText.string= `启动时间：${date.getMonth() + 1}-${date.getDate()} ${
            date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
        this.mOpenCount = 1;
        this.mAutoOpen = true;
    }
    public onStopBtnClick(): void {
        console.log("onStopBtnClick click");
        if (!this.mAutoOpen) {
            return;
        }
        this.mOpenCount = 1;
        this.mAutoOpen = false;
        this.doClose();
    }
    public onAutoGcClick(): void {
        console.log("onAutoGcClick click");
        this.mAutoGc = !this.mAutoGc;
        this.mGcText.string = this.mAutoGc ? '已自动' : "自动释放";
    }
    public onFreBtnClick(): void {
        console.log("onFreBtnClick click");
        this.mFreNum = (this.mFreNum + 1) % 6;
        if (this.mFreNum === 0) {
            this.mFreNum = 1;
        }
        this.mFreNumText.string = `频率：${this.mFreNum}s`;
    }
    public onCloseBtnClick(): void {
        console.log("onCloseBtnClick click");
        this.mAutoOpen = false;
        this.doClose();
    }
    public onSwitchBtn(): void {
        this.mSwitchIndex = (this.mSwitchIndex + 1) % this.mSwitchPrefab.length;
        console.log("onSwitchBtn click",this.mSwitchPrefab[this.mSwitchIndex]);
        this.mText.string = this.mSwitchIndex.toString();
    }

    public onGcBtn(): void {
        console.log("onGcBtn click");
        this.doGc();
    }

    private doGc():void {
        this.doRelease();
        cc.sys.garbageCollect();
        if (cc.sys.platform === cc.sys.WECHAT_GAME) {
            wx.triggerGC();
        }
    }

    private async doOpen():Promise<void> {
        if (this.mIsOpening) {
            return;
        }
        this.mIsOpening = true;
        this.doClose();
        jm.txbugly.log(
            3,"Test",
            `打开${this.mSwitchPrefab[this.mSwitchIndex]} count:${this.mOpenCount} maxCount:${cc.audioEngine.getMaxAudioInstance()}`);
        console.log(`打开${this.mSwitchPrefab[this.mSwitchIndex]} count:${this.mOpenCount} maxCount:${cc.audioEngine.getMaxAudioInstance()}`);
        this.mTestTimeText.string = `测试次数: ${this.mOpenCount}次 ${this.mSwitchPrefab[this.mSwitchIndex]}`;
        jm.txbugly.reportException(6,"ddd","dagagahah",
            `打开${this.mSwitchPrefab[this.mSwitchIndex]} count:${this.mOpenCount} maxCount:${cc.audioEngine.getMaxAudioInstance()}`);
        if (this.mPrefab === null) {
            const prefab = await this.loadRes<cc.Prefab>(this.mSwitchPrefab[this.mSwitchIndex],cc.Prefab);
            this.mPrefab = prefab;
        }
        this.mPfbNode = cc.instantiate(this.mPrefab);
        this.mUiNode.addChild(this.mPfbNode);
        if (this.mSwitchIndex === 1) {
            if (this.mEffect === null) {
                const music = await this.loadRes<cc.AudioClip>("sound/S_Main_Recruit",cc.AudioClip);
                this.mEffect = music;
            }
            this.mAudioId = cc.audioEngine.playEffect(this.mEffect,false);
        }
        this.mOpenCount = this.mOpenCount + 1;
        this.mIsOpening = false;
    }
    
    private async loadRes<T extends cc.Asset>(path:string,ty:typeof cc.Asset):Promise<T> {
        return new Promise<T>(resolve=>{
            cc.loader.loadRes(path, ty, null, (err, prefab) => {
                if (err) {
                    cc.error(err.message || err);
                    return;
                }
                 resolve(prefab);
            });
        });
    }

    private doClose():void {
        if (this.mPfbNode === null || this.mPfbNode === undefined) {
            return;
        }
        this.mPfbNode.removeFromParent(true);
        this.mPfbNode.destroy();
        this.mPfbNode = null;
        if (this.mAutoGc) {
            this.doRelease();
        }
    }

    private doRelease():void {
        if (this.mPrefab === null || this.mPrefab === undefined) {
            return;
        }
        const deps = cc.loader.getDependsRecursively(this.mPrefab);
        this.mPrefab.destroy();
        delete this.mPrefab;
        if (this.mEffect !== null) {
            cc.audioEngine.uncache(this.mEffect);
            const deps1 = cc.loader.getDependsRecursively(this.mEffect);
            this.mEffect.destroy();
            cc.loader.release(deps1);
            console.info("---------------释放了的音效资源：length:", deps1.length,deps1);
            this.mEffect = null;
        }
        this.mPrefab = null;
        cc.loader.release(deps);
        console.info("---------------释放了的资源：length:", deps.length,deps);
    }
}
