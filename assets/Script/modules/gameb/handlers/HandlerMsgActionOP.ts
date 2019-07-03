import { Logger } from "../../lobby/lcore/LCoreExports";
import { proto } from "../../lobby/protoHH/protoHH";
import { Player } from "../Player";
import { ButtonDef } from "../PlayerInterface";
import { RoomInterface } from "../RoomInterface";

/**
 * 服务器询问玩家操作
 */
export namespace HandlerMsgActionOP {
    export const onMsg = async (msgData: ByteBuffer, room: RoomInterface): Promise<void> => {
        const reply = proto.casino_xtsj.packet_sc_op.decode(msgData);
        Logger.debug("HandlerMsgActionOP----------------------- ", reply);
        const player = <Player>room.getPlayerByUserID(`${reply.player_id}`);
        if (!player.isMe()) {

            return;
        }
        const buttonMap: string[] = [];
        const hu = room.mAlgorithm.canHu_WithOther(player.tilesHand, reply.card);
        if (hu.length > 0) {
            buttonMap.push(ButtonDef.Hu);
        }
        const gang = room.mAlgorithm.canGang_WithOther(player.tilesHand, reply.card);
        if (gang.length > 0) {
            let curNeedCards = 3;
            if (reply.card === room.mAlgorithm.getMahjongFan()) {
                curNeedCards = curNeedCards - 1;
            }
            if (room.mAlgorithm.mahjongTotal_get() > curNeedCards) {
                buttonMap.push(ButtonDef.Kong);
            }
        }
        const peng = room.mAlgorithm.canPeng_WithOther(player.tilesHand, reply.card);
        if (peng.length > 0) {
            buttonMap.push(ButtonDef.Pong);
        }
        if (buttonMap.length > 0) {
            buttonMap.push(ButtonDef.Skip);
            player.playerView.showButton(buttonMap);
        }
    };

}
