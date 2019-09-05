import { NimSDK } from "../chanelSdk/nimSdk/NimSDKExports";
import { WeiXinSDK } from "../chanelSdk/wxSdk/WeiXinSDkExports";
import { GameError } from "../errorCode/ErrorCodeExports";
import {
    CommonFunction, DataStore, Dialog, GameModuleLaunchArgs,
    KeyConstants, LEnv, LobbyModuleInterface, Logger, SoundMgr
} from "../lcore/LCoreExports";
// tslint:disable-next-line:no-require-imports
import long = require("../protobufjs/long");
import { proto } from "../protoHH/protoHH";
import { Share } from "../shareUtil/ShareExports";
import { AgreementView } from "./AgreementView";
import { JoyBeanView } from './JoyBeanView';
import { NewRoomView } from "./NewRoomView";
import { ShopView, TabType } from "./ShopView";
import { UserInfoTabType, UserInfoView } from "./UserInfoView";
const { ccclass } = cc._decorator;

/**
 * 大厅视图
 */
@ccclass
export class LobbyView extends cc.Component {
    private view: fgui.GComponent;
    private lm: LobbyModuleInterface;
    private nameText: fgui.GTextField;
    private beansText: fgui.GTextField;
    private fkText: fgui.GTextField;
    private headLoader: fgui.GLoader;
    // private marqueeAction: cc.Action = null;
    private roomNumberFromShare: string = "";
    private wxShowCallBackFunction: (res: showRes) => void;

    protected async onLoad(): Promise<void> {
        // 加载大厅界面

        const lm = <LobbyModuleInterface>this.getComponent("LobbyModule");
        this.lm = lm;
        this.registerHandler();

        const loader = lm.loader;

        loader.fguiAddPackage("lobby/fui/lobby_main");
        const view = fgui.UIPackage.createObject("lobby_main", "Main").asCom;
        fgui.GRoot.inst.addChild(view);

        const x = CommonFunction.setViewInCenter(view);
        this.view = view;

        const bg = this.view.getChild('bg');
        //CommonFunction.setBgFullScreenSize(bg);

        // 兼容底部背景
        const diBg = view.getChild('bg1');
        diBg.width = bg.width;
        diBg.setPosition(-x, diBg.y);

        // 兼容跑马灯背景
        const bg3 = view.getChild('bg3');
        bg3.width = bg.width;
        bg3.setPosition(-x, bg3.y);

        const announcementText = this.view.getChild('announcementText');
        announcementText.setPosition(-x + cc.winSize.width + announcementText.width, announcementText.y);

        this.view = view;
        this.initView();
        this.testJoinGame();

        const musicVolume = +DataStore.getString(KeyConstants.MUSIC_VOLUME, "0");
        if (musicVolume > 0) {
            SoundMgr.playMusicAudio("gameb/music_hall", true);
        }

        this.initNimSDK();
        this.setLaunchCallBack();
        this.checkGpsSetting();
        this.checkAgreement();
    }

    protected onDestroy(): void {
        Logger.debug("LobbyView.onDestroy");

        SoundMgr.stopMusic();

        if (cc.sys.platform === cc.sys.WECHAT_GAME) {
            wx.offShow(this.wxShowCallBack);
        }
    }

    private registerHandler(): void {
        this.lm.msgCenter.eventTarget.on("onFastLoginComplete", this.onReconnectOk, this);
        this.lm.msgCenter.eventTarget.on("logout", this.onLogout, this);
        this.lm.eventTarget.on("onUserInfoModify", this.onUserInfoModify, this);
        this.lm.msgCenter.setGameMsgHandler(proto.casino.eMSG_TYPE.MSG_UPDATE, this.onMsgUpdate, this);

        this.lm.msgCenter.setGameMsgHandler(proto.casino.eMSG_TYPE.MSG_ENERGY_TURNABLE, this.onEnergyUpdate, this);
    }

    private checkAgreement(): void {
        const agree = DataStore.getString(KeyConstants.AGREEMENT);
        if (agree !== KeyConstants.RESULT_YES) {
            this.addComponent(AgreementView);

        }
    }

    private wxShowCallBack(res: showRes): void {
        Logger.debug("wxShowCallBack");
        const rKey = "roomNumber";
        const roomNumber = res.query[rKey];
        if (roomNumber !== undefined && roomNumber !== null) {
            this.roomNumberFromShare = roomNumber;
            this.lm.msgCenter.closeWebsocket();
        }
        SoundMgr.resumeMusic();
    }
    private initView(): void {
        const personalRoomBtn = this.view.getChild("personalRoomBtn");
        personalRoomBtn.onClick(this.onCreateRoom, this);

        const signBtn = this.view.getChild("signBtn");
        signBtn.onClick(this.onSignBtnClick, this);

        const shopBtn = this.view.getChild("shopBtn");
        shopBtn.onClick(this.onShopBtnClick, this);

        const emailBtn = this.view.getChild("emailBtn");
        emailBtn.onClick(this.openEmailClick, this);

        const friendBtn = this.view.getChild("friendBtn");
        friendBtn.onClick(this.onFriendClick, this);

        const questBtn = this.view.getChild("questBtn");
        questBtn.onClick(this.onQuestBtnClick, this);

        const committeeBtn = this.view.getChild("committeeBtn");
        committeeBtn.onClick(this.onCommitteeBtnClick, this);

        const shareBtn = this.view.getChild("shareBtn");
        shareBtn.onClick(this.onShareBtnClick, this);

        const settingBtn = this.view.getChild("settingBtn");
        settingBtn.onClick(this.onSettingBtnClick, this);

        const addDou = this.view.getChild("addBtn1");
        addDou.onClick(this.onAddDouBtnClick, this);

        const addFK = this.view.getChild("addBtn2");
        addFK.onClick(this.onAddFKBtnClick, this);

        const joyBeanHallBtn = this.view.getChild("huanlechangBtn");
        joyBeanHallBtn.onClick(this.onJoyBeanHallBtnClick, this);

        this.nameText = this.view.getChild("nameText").asTextField;
        this.beansText = this.view.getChild("douText").asTextField;
        this.fkText = this.view.getChild("fkText").asTextField;

        this.nameText.text = CommonFunction.nameFormatWithCount(DataStore.getString(KeyConstants.NICK_NAME), 6);
        this.beansText.text = DataStore.getString(KeyConstants.BEANS);
        this.fkText.text = DataStore.getString(KeyConstants.CARD);

        const gender = DataStore.getString(KeyConstants.GENDER, "");
        const avatarURL = DataStore.getString(KeyConstants.AVATAR_URL, "");
        const avatarIndex = DataStore.getString(KeyConstants.AVATAR_INDEX, "");
        this.headLoader = this.view.getChild("iconLoader").asLoader;
        this.headLoader.onClick(this.onUserInfoClick, this);

        if (avatarURL !== "" || avatarIndex === "" || avatarIndex === "0") {
            CommonFunction.setHead(this.headLoader, avatarURL, +gender);
        } else {
            this.headLoader.url = `ui://lobby_bg_package/grxx_xttx_${avatarIndex}`;
        }
    }

    private testJoinGame(): void {
        // this.lm.msgCenter.setGameMsgHandler(proto.casino.eMSG_TYPE.MSG_PLAYER_JOIN_ACK, this.onJoinGameAck, this); // 加入游戏
        this.lm.msgCenter.eventTarget.on("onJoinGameAck", this.onJoinGameAck, this);

        const req2 = new proto.casino.packet_player_join_req({});
        const buf = proto.casino.packet_player_join_req.encode(req2);
        this.lm.msgCenter.sendGameMsg(buf, proto.casino.eMSG_TYPE.MSG_PLAYER_JOIN_REQ);
    }

    private joinTableReq(tableID: long, roomNumber?: number): void {
        this.lm.msgCenter.setGameMsgHandler(proto.casino.eMSG_TYPE.MSG_TABLE_JOIN_ACK, this.onJoinTableAck, this); // 加入桌子

        const playerID = DataStore.getString(KeyConstants.PLAYER_ID);
        const req = new proto.casino.packet_table_join_req();
        req.player_id = +playerID;
        if (tableID !== null) {
            req.table_id = tableID;
        }

        if (roomNumber !== undefined && roomNumber !== null) {
            req.tag = roomNumber;
        }

        Logger.debug("joinTable, req:", req);

        const req2 = new proto.casino.packet_table_join_req(req);
        const buf = proto.casino.packet_table_join_req.encode(req2);
        if (this.lm !== undefined) {
            this.lm.msgCenter.sendGameMsg(buf, proto.casino.eMSG_TYPE.MSG_TABLE_JOIN_REQ);
        } else {
            Logger.error("this.lm === undefined");
        }

        this.lm.msgCenter.blockNormal();

    }

    private onUserInfoClick(): void {
        const view = this.addComponent(UserInfoView);
        view.showView(UserInfoTabType.BASE_INFO);
    }

    private onSettingBtnClick(): void {
        const view = this.addComponent(UserInfoView);
        view.showView(UserInfoTabType.GAME_SETTING);
    }

    private onAddDouBtnClick(): void {
        const view = this.addComponent(ShopView);
        view.showView(this.lm.loader, TabType.Dou);
    }

    private onAddFKBtnClick(): void {
        const view = this.addComponent(ShopView);
        view.showView(this.lm.loader, TabType.FK);
    }

    private onJoyBeanHallBtnClick(): void {
        const view = this.addComponent(JoyBeanView);
        view.show();
    }

    private onFriendClick(): void {
        // TODO: 显示好友界面
        // this.showMarquee("");

    }

    private openEmailClick(): void {
        this.lm.nimSDK.disconnect();
        // TODO: 显示邮件界面
        //this.showMarquee("测试发送公告测试发送试发送公告");
        //Dialog.showReconnectDialog();
        // let count = 0;
        // const handler = () => {
        //     //
        //     Dialog.showReconnectDialog();
        //     count++;
        //     Logger.debug("showReconnectDialog count =", count);
        // };
        // setInterval(handler, 1000);

    }

    private onCreateRoom(): void {
        const newRoomView = this.addComponent(NewRoomView);
        newRoomView.showView();
    }

    private onSignBtnClick(): void {
        // TODO: 需要显示签到界面
    }

    private onShopBtnClick(): void {
        const view = this.addComponent(ShopView);
        view.showView(this.lm.loader, TabType.Dou);
    }

    private onQuestBtnClick(): void {
        // TODO: 显示任务界面
    }

    private onCommitteeBtnClick(): void {
        // TODO: 显示居委会界面
    }

    private onShareBtnClick(): void {
        if (cc.sys.platform === cc.sys.WECHAT_GAME) {
            Share.shareScreenshot("");
        }
    }

    // 相当于游戏的入口，每次重连都跑这里来
    private onJoinGameAck(ack: proto.casino.packet_player_join_ack): void {
        console.log("onJoinGameAck");
        // const reply = proto.casino.packet_player_join_ack.decode(msg.Data);

        // 如果是在房间内重连，则发通知让房间重连恢复
        if (this.lm.isGameModuleExist()) {
            let isFromShare: boolean = false;
            if (this.roomNumberFromShare !== "" && this.roomNumberFromShare !== undefined && this.roomNumberFromShare !== null) {
                isFromShare = true;
            }

            this.lm.eventTarget.emit("reconnect", isFromShare);
            this.roomNumberFromShare = "";

            return;
        }

        // 如果是登录进入房间，已经在房间则拉回房间
        const tableIDString = DataStore.getString(KeyConstants.TABLE_ID, "");
        if (tableIDString !== "") {
            Logger.debug("already in room, tableID:", tableIDString);

            const tableID = long.fromString(tableIDString, true);
            this.joinTableReq(tableID);

            DataStore.setItem(KeyConstants.TABLE_ID, "");

            return;
        }

        // 如果是从分享进来，则拉进房间
        if (cc.sys.platform === cc.sys.WECHAT_GAME) {
            if (this.roomNumberFromShare !== "" && this.roomNumberFromShare !== undefined && this.roomNumberFromShare !== null) {
                this.joinTableReq(null, +this.roomNumberFromShare);
                this.roomNumberFromShare = "";

                return;
            }
        }
    }

    private onJoinTableAck(msg: proto.casino.ProxyMessage): void {
        Logger.debug("onJoinTableAck");

        const joinRoomAck = proto.casino.packet_table_join_ack.decode(msg.Data);
        if (joinRoomAck.ret !== 0) {
            Logger.debug("onJoinTableAck, failed:", joinRoomAck.ret);

            if (!this.lm.isGameModuleExist()) {
                const errMsg = GameError.getErrorString(joinRoomAck.ret);
                Dialog.showDialog(errMsg);
            }

            this.lm.msgCenter.unblockNormal();

            return;
        }

        const playerID = DataStore.getString(KeyConstants.PLAYER_ID);
        const myUser = { userID: playerID };

        const joinRoomParams = {
            table: joinRoomAck.tdata,
            reconnect: joinRoomAck.reconnect
        };

        Logger.debug("joinRoomParams:", joinRoomParams);

        const params: GameModuleLaunchArgs = {
            jsonString: "",
            userInfo: myUser,
            joinRoomParams: joinRoomParams,
            createRoomParams: null,
            record: null,
            roomId: joinRoomAck.tdata.room_id
        };

        const lm = <LobbyModuleInterface>this.getComponent("LobbyModule");
        lm.switchToGame(params, "gameb");
    }

    private onReconnectOk(fastLoginReply: proto.casino.packet_fast_login_ack): void {
        this.testJoinGame();
    }

    private onUserInfoModify(): void {
        const gender = DataStore.getString(KeyConstants.GENDER, "");
        const avatarURL = DataStore.getString(KeyConstants.AVATAR_URL, "");
        const avatarIndex = DataStore.getString(KeyConstants.AVATAR_INDEX, "");
        const nickName = DataStore.getString(KeyConstants.NICK_NAME, "");

        this.nameText.text = nickName;

        if (avatarURL !== "" || avatarIndex === "" || avatarIndex === "0") {
            CommonFunction.setHead(this.headLoader, avatarURL, +gender);
        } else {
            this.headLoader.url = `ui://lobby_bg_package/grxx_xttx_${avatarIndex}`;
        }
    }

    private initNimSDK(): void {
        const imaccid = DataStore.getString(KeyConstants.IM_ACCID);
        const imtoken = DataStore.getString(KeyConstants.IM_TOKEN);
        const nimSDK = new NimSDK(LEnv.yunxinAppKey, imaccid, imtoken, this);
        nimSDK.initNimSDK();

        this.lm.nimSDK = nimSDK;
    }

    // private showMarquee(announcement: string): void {

    //     if (this.marqueeAction !== null) {
    //         Logger.debug("showMarquee already had marquee action---------------------");

    //         return;
    //     }
    //     const announcementText = this.view.getChild('announcementText');
    //     const pos = this.view.getChild('pos');

    //     announcementText.text = announcement;

    //     const x = cc.winSize.width / 2 - (cc.winSize.height * 1136 / 640 / 2);
    //     announcementText.setPosition(-x + cc.winSize.width + announcementText.width, announcementText.y);

    //     const xPos = announcementText.node.x;
    //     const yPos = announcementText.node.y;

    //     // 方案：moveTo
    //     let duration = announcementText.width * 0.005;
    //     Logger.debug("duration = ", duration);

    //     if (duration < 10) {
    //         duration = 15;
    //     }

    //     const action1 = cc.moveTo(duration, pos.node.x - 100, pos.node.y);
    //     const action3 = cc.callFunc(() => {
    //         announcementText.node.setPosition(xPos, yPos);
    //         this.marqueeAction = null;
    //     });

    //     const action0 = cc.sequence(action1, action3);
    //     this.marqueeAction = announcementText.node.runAction(action0);

    // }

    private setLaunchCallBack(): void {
        if (cc.sys.platform === cc.sys.WECHAT_GAME) {
            this.wxShowCallBackFunction = <(res: showRes) => void>this.wxShowCallBack.bind(this);
            // 点别人的邀请链接 原来就在游戏内 走这里
            wx.onShow(this.wxShowCallBackFunction);
            const query = WeiXinSDK.getLaunchOption();
            const rKey = "roomNumber";
            this.roomNumberFromShare = query[rKey];
            Logger.debug(`share from wx, room number:${this.roomNumberFromShare}`);
            const handler = () => {
                SoundMgr.pauseMusic();
                SoundMgr.resumeMusic();
            };

            wx.onAudioInterruptionEnd(handler);
        }
    }

    private onMsgUpdate(msg: proto.casino.ProxyMessage): void {
        const updateMsg = proto.casino.packet_update.decode(msg.Data);
        Logger.debug("onMsgUpdate,updateMsg =", updateMsg);
        if (updateMsg.type === proto.casino.eTYPE.TYPE_PLAYER_RESOURCE) {
            const playerResource = proto.casino.player_resource.decode(updateMsg.data);
            // Logger.debug("resource:", playerResource);
            if (playerResource.type === proto.casino.eRESOURCE.RESOURCE_CARD) {
                DataStore.setItem(KeyConstants.CARD, playerResource.curr.toNumber());
                this.fkText.text = playerResource.curr.toString();
            }

            if (playerResource.type === proto.casino.eRESOURCE.RESOURCE_BEANS) {
                DataStore.setItem(KeyConstants.BEANS, playerResource.curr.toNumber());
                this.beansText.text = playerResource.curr.toString();
            }

        } else if (updateMsg.type === proto.casino.eTYPE.TYPE_PLAYER_ENERGY) {
            const playerEnergy = proto.casino.player_energy.decode(updateMsg.data);
            Logger.debug("TYPE_PLAYER_ENERGY,----------------------------------------- playerEnergy = ", playerEnergy);
            const playerEnergyStr = JSON.stringify(playerEnergy);
            DataStore.setItem(KeyConstants.PLAYER_ENERGY, playerEnergyStr);
            this.lm.eventTarget.emit(KeyConstants.PLAYER_ENERGY, playerEnergy.curr_energy);
        }
    }

    private onEnergyUpdate(msg: proto.casino.ProxyMessage): void {
        Logger.debug("onEnergyUpdate");
        const updateMsg = proto.casino.energy_turnable.decode(msg.Data);
        Logger.debug("onEnergyUpdate updateMsg = ", updateMsg);
        // if (updateMsg.type === proto.casino.eTYPE.TYPE_PLAYER_RESOURCE) {
        //     const playerResource = proto.casino.player_resource.decode(updateMsg.data);
        //     // Logger.debug("resource:", playerResource);
        //     if (playerResource.type === proto.casino.eRESOURCE.RESOURCE_CARD) {
        //         DataStore.setItem(KeyConstants.CARD, playerResource.curr.toNumber());
        //         this.fkText.text = playerResource.curr.toString();
        //     }

        //     if (playerResource.type === proto.casino.eRESOURCE.RESOURCE_BEANS) {
        //         DataStore.setItem(KeyConstants.BEANS, playerResource.curr.toNumber());
        //         this.beansText.text = playerResource.curr.toString();
        //     }
        // }
    }

    private checkGpsSetting(): void {
        if (cc.sys.platform !== cc.sys.WECHAT_GAME) {
            return;
        }

        wx.getSetting({
            success: (res: getSettingRes) => {
                console.log(res);
                const authSetting = <{ 'scope.userInfo': boolean; 'scope.userLocation': boolean }>res.authSetting;
                if (!authSetting['scope.userLocation']) {
                    // 如果gps权限没打开，强制把界面上的gps置为关闭状态
                    DataStore.setItem(KeyConstants.GPS, "0");
                } else {
                    const gps = DataStore.getString(KeyConstants.GPS, "0");
                    if (+gps > 0) {
                        wx.getLocation({
                            type: 'wgs84',
                            success: (location: getLocationRes) => {
                                const playerID = DataStore.getString(KeyConstants.PLAYER_ID);
                                const req = new proto.casino.packet_coordinate(
                                    { player_id: +playerID, latitude: location.latitude, longitude: location.longitude }
                                );
                                const buf = proto.casino.packet_coordinate.encode(req);
                                this.lm.msgCenter.sendGameMsg(buf, proto.casino.eMSG_TYPE.MSG_COORDINATE);
                                Logger.debug(`latitude:${location.latitude}, longitude:${location.longitude}`);
                            },

                            // tslint:disable-next-line:no-any
                            fail: (err: any) => {
                                Logger.error("getLocation error:", err);
                            }

                        });
                    }
                }

            },

            // tslint:disable-next-line:no-any
            fail: (err: any) => {
                Logger.error("getSetting error:", err);
                DataStore.setItem(KeyConstants.GPS, "0");
                // this.applyGpsSetting();
            }
        });
    }

    private onLogout(): void {
        Logger.debug("onLogout");
        this.lm.logout();
        this.destroy();
    }
}
