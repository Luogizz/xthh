import { CommonFunction, DataStore, LobbyModuleInterface, Logger } from "../lcore/LCoreExports";
import { proto as protoHH} from "../protoHH/protoHH";

const { ccclass } = cc._decorator;

const beanChannel = "android_h5";
/**
 * 用户信息页面
 */
@ccclass
export class ShopView extends cc.Component {

    private view: fgui.GComponent;
    private win: fgui.Window;
    private eventTarget: cc.EventTarget;

    private vipView: fgui.GComponent;

    private beanItemList: fgui.GList;
    private beanPayCfgs: protoHH.casino.Ipay[];
    // private cardPayCfgs: protoHH.casino.Ipay[];

    protected onLoad(): void {

        this.eventTarget = new cc.EventTarget();

        const lm = <LobbyModuleInterface>this.getComponent("LobbyModule");
        const loader = lm.loader;
        loader.fguiAddPackage("lobby/fui_lobby_shop/lobby_shop");

        const view = fgui.UIPackage.createObject("lobby_shop", "shopView").asCom;
        CommonFunction.setViewInCenter(view);
        this.view = view;

        const vipView = fgui.UIPackage.createObject("lobby_shop", "vipView").asCom;
        CommonFunction.setViewInCenter(vipView);
        this.vipView = vipView;

        const win = new fgui.Window();
        win.contentPane = view;
        win.modal = true;

        this.win = win;
        this.win.show();

        this.initView();
    }

    protected onDestroy(): void {

        this.eventTarget.emit("destroy");
        this.win.hide();
        this.win.dispose();
    }

    private onCloseClick(): void {
        this.destroy();
    }

    private initView(): void {
        const closeBtn = this.view.getChild("closeBtn");
        closeBtn.onClick(this.onCloseClick, this);

        this.initShopCardView();
        this.initShopBeansView();
        this.initVipView();
    }

    private initShopCardView(): void {
        // TODO:
    }

    private initShopBeansView(): void {
        this.beanPayCfgs = this.getPayCfgs(beanChannel, protoHH.casino.eRESOURCE.RESOURCE_BEANS);

        const beansView = this.view.getChild("douCom").asCom;
        const vipBtn = beansView.getChild("vipBtn");
        vipBtn.onClick(this.onVipBtnClick, this);

        this.beanItemList = beansView.getChild("list").asList;
        this.beanItemList.on(fgui.Event.CLICK_ITEM, this.onBeanItemClick, this);
        this.beanItemList.setVirtual();
        this.beanItemList.itemRenderer = (index: number, item: fgui.GObject) => {
            this.renderItemList(index, item);
        };

        this.beanItemList.numItems = this.beanPayCfgs.length;
    }

    private initVipView(): void {
        const vipViewCloseBtn = this.vipView.getChild("closeBtn");
        vipViewCloseBtn.onClick(this.onVipViewCloseBtnClick, this);

    }

    private showVipView(): void {
        this.win.contentPane = this.vipView;
        this.win.show();
    }

    private renderItemList(index: number, item: fgui.GObject): void {
        const beanPayCfg = this.beanPayCfgs[index];
        const itemCom = item.asCom;
        const nameText = itemCom.getChild("countText").asTextField;
        nameText.text = beanPayCfg.name;

        const giveMoreText = itemCom.getChild("giveMore").asTextField;
        giveMoreText.visible = false;

        // const scText = itemCom.getChild("scText").asTextField;
        // scText.visible = true;

        // const scBg = itemCom.getChild("bgSC");
        // scBg.visible = true;

        const loader = itemCom.getChild("loader").asLoader;
        loader.url = `ui://lobby_shop/cz_icon_hld${index + 1}`;

        const buyBtn = itemCom.getChild("buyBtn").asButton;
        buyBtn.getChild("n1").text = beanPayCfg.price_info;
        buyBtn.onClick(this.onBeanBuyBtnClick, this);
        buyBtn.data = index;

        // TODO:
    }

    private onBeanItemClick(clickItem: fgui.GObject): void {
        // TODO:
    }

    private onBeanBuyBtnClick(ev: fgui.Event): void {
        const index = <number>ev.initiator.data;
        const beanPayCfg = this.beanPayCfgs[index];

        Logger.debug("beanPayCfg:", beanPayCfg);

    }
    private onVipBtnClick(): void {
        this.showVipView();
    }

    private onVipViewCloseBtnClick(): void {
        this.win.hide();

        this.win.contentPane = this.view;
        this.win.show();
    }

    private getPayCfgs(payChannel: string, payType: number): protoHH.casino.Ipay[] {
        const payCfgs: protoHH.casino.Ipay[] = [];

        const payDataStr = DataStore.getString("payData");
        const payData = <protoHH.casino.pay_data>JSON.parse(payDataStr);
        for (const pay of payData.pays) {
            if (pay.type === protoHH.casino.eRESOURCE.RESOURCE_BEANS && pay.channel === payChannel) {
                payCfgs.push(pay);
            }
        }

        return payCfgs;
    }

}