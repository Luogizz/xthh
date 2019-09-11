import { CommonFunction, DataStore, KeyConstants, LobbyModuleInterface, Logger } from "../../lcore/LCoreExports";
import { proto } from "../../protoHH/protoHH";
import { LocalStrings } from "../../strings/LocalStringsExports";
const { ccclass } = cc._decorator;

const REWARD_IMG: { [key: number]: string } = {
    [proto.casino.eRESOURCE.RESOURCE_BEANS]: "ui://lobby_bg_package/ty_icon_hld",
    [proto.casino.eRESOURCE.RESOURCE_CARD]: "ui://lobby_bg_package/ty_icon_fk",
    [proto.casino.eRESOURCE.RESOURCE_NONE]: "ui://lobby_bg_package/ty_icon_hld"
};

/**
 * RedPacketView
 */
@ccclass
export class RedPacketView extends cc.Component {
    private view: fgui.GComponent;
    private win: fgui.Window;
    private lm: LobbyModuleInterface;

    private stores: proto.casino.Ired_store[];

    protected onLoad(): void {
        this.lm = <LobbyModuleInterface>this.getComponent("LobbyModule");
        const loader = this.lm.loader;
        loader.fguiAddPackage("lobby/fui_lobby_red_packet/lobby_red_packet");
        const view = fgui.UIPackage.createObject("lobby_red_packet", "redPacketView").asCom;

        CommonFunction.setViewInCenter(view);

        const mask = view.getChild("mask");
        CommonFunction.setBgFullScreenSize(mask);

        this.view = view;

        const win = new fgui.Window();
        win.contentPane = view;
        win.modal = true;

        this.win = win;

        this.initView();
        this.win.show();
    }

    protected onDestroy(): void {
        this.unRegisterHander();
        this.win.hide();
        this.win.dispose();

    }

    private registerHandler(): void {
        //
    }
    private unRegisterHander(): void {
        //
    }

    private initView(): void {

        const closeBtn = this.view.getChild("closeBtn");
        closeBtn.onClick(this.onCloseBtnClick, this);

        const redDataStr = DataStore.getString(KeyConstants.RED_DATA);
        const redData = <proto.casino.red_data>JSON.parse(redDataStr);

        const playerRedDataStr = DataStore.getString(KeyConstants.PLAYER_RED);
        const playerRedData = <proto.casino.Iplayer_red>JSON.parse(playerRedDataStr);

        Logger.debug("redData = ", redData);
        Logger.debug("playerRedData = ", playerRedData);

        this.stores = redData.stores;

        const list = this.view.getChild("list").asList;

        list.itemRenderer = (index: number, item: fgui.GObject) => {
            this.renderListItem(index, item);
        };
        list.setVirtual();
        list.numItems = this.stores.length;

        this.registerHandler();

    }
    private onCloseBtnClick(): void {
        this.destroy();
    }

    private renderListItem(index: number, obj: fgui.GObject): void {

        const redStoreItem = this.stores[index];
        // Logger.debug("renderListItem redStoreItem = ", redStoreItem);

        const com = obj.asCom;
        com.getChild("name").text = redStoreItem.name;

        const resourceType = redStoreItem.type;
        const gain = redStoreItem.gains[0];
        com.getChild("loader").asLoader.url = REWARD_IMG[gain.id];

        const count = resourceType === proto.casino.eRESOURCE.RESOURCE_RED ? redStoreItem.price / 100 : redStoreItem.price;

        const text = LocalStrings.findString("exchangeText", `${count}`);
        com.getChild("exchangeBtn").asCom.getChild("n1").text = text;

        obj.onClick(() => {
            // tslint:disable-next-line:align
        }, this);

    }

}
