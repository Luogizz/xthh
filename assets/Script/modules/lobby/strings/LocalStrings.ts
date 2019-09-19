/**
 * 本地字符串
 */

/* tslint:disable */
// tslint关闭,字符串换行
export namespace LocalStrings {

        const localStrings: { [key: string]: string } = {
                [`loadProgressText`]: "正在加载中... {0} %",
                [`loginErrCode`]: "登录错误，错误码 : {0}",

                [`all`]: "所有",
                [`weChat`]: "微信",
                [`community`]: "工会",

                [`xthh`]: "仙桃晃晃",
                [`srlm`]: "三人两门",
                [`lrlm`]: "两人两门",

                [`boxRecord`]: "宝箱记录",
                [`fkRecord`]: "房卡记录",
                [`gameRecord`]: "战绩统计",
                [`personalRoom`]: "私人房",
                [`noGameRecordTips`]: "没有您最近的战绩记录",
                [`inputRecordId`]: "请输入视频ID",

                [`wrongGameRecordIdTips`]: "未找到该房间数据",
                [`daleyOperationTips`]: "操作频繁，请{0}秒后尝试",
                [`2playerLimitTips`]: "两人玩法不能增加此限制",

                [`advice`]: "抵制不良游戏, 拒绝盗版游戏. 注意自我保护, 谨防受骗上当. 适度游戏益脑, 沉迷游戏伤身. 合理安排时间，享受健康生活.",
                [`approvalInformation`]: "粤网文 [2019] 5856-1386号 [许可证 [粤B2-20190210] 新广初审[2017] 9751号] ISBN 978-7-7979-4213-3 北京科海电子出版社",

                [`playerVoiceFailed`]: "语音播放失败",
                [`applyDisband`]: "牌局已经开始，请申请解散房间",

                [`frequentlyRecording`]: "1秒内不能重复录音",
                [`cancelSend`]: "取消发送",
                [`durationTooShort`]: "录制要大于1秒",

                [`plLimit`]: "下家飘赖达到3次，锁牌生效，您将被限制碰牌、点笑、小朝天操作",
                [`plLimit1`]: "【{0}】飘赖{1}次，【{2}】限制【碰牌/点笑/小朝天】",
                [`plLimit2`]: "下家飘赖{0}次，限制【{1}】",

                [`autoDisband`]: "超时太久，自动解散！",
                [`alreadyCallDisband`]: "已经有人申请了解散房间",
                [`ownerCanDisband`]: "牌局未开始，只有房主可以解散房间",

                [`voiceReconnect`]: "语音网络正在重连！",

                [`getPositionFailed`]: "网络错误，获取用户位置失败!",
                [`getPositionFailedWithCode`]: "获取位置错误，状态码: {0}",
                [`gpsEffectOnWeChat`]: "在微信上打开，gps才生效",
                [`gameIsPlaying`]: "牌局正在进行中...还是打完吧！",

                [`roomHasClose`]: "您要进入的房间已经关闭喽",
                [`testInWeChat`]: "web版没实现，请在微信小游戏上测试",
                [`quitRoom`]: "你确定要离开当前所在的房间吗？",
                [`disbandRoom`]: "确定要解散当前的牌局吗？",
                [`confirmQuitRoom`]: "确实要退出房间吗？",
                [`recordInWeChat`]: "微信上才可以录音",
                [`confirmDisbandRoom`]: "你确定要发起解散当前的牌局吗？",
                [`openSettingToAuth`]: "请前往小程序设置打开定位权限",
                [`disbandTips`]: "是否解散房间？",

                [`roomNumber`]: "房号",
                [`game`]: "游戏",
                [`roundCount`]: "局数",
                [`baseScore`]: "底注",
                [`joyXiaoHao`]: "消耗台费:{0}",
                [`total`]: "总共",
                [`round`]: "局",
                [`gameResult`]: "游戏结果",
                [`recordLink`]: "战绩连接",

                [`huPaiTimes`]: "胡牌次数",
                [`zuoZhuangTimes`]: "坐庄次数",
                [`piaoLaiTimes`]: "飘赖次数",
                [`chaoShiTimes`]: "超时次数",

                [`continue`]: "继续",
                [`checkScore`]: "查看积分",
                [`againResult`]: "再来一局",
                [`plText`]: "一赖到底，飘赖子有奖，笑翻倍",
                [`admission`]: "允许进入",

                [`leftCard`]: "剩牌",

                [`leftRound`]: "还有:{0}局",
                [`lastRound`]: "最后一局",

                [`notPosition`]: "未获取位置",
                [`unknownDistance`]: "未知距离",

                [`distanceTooClose`]: "发现距离过近",
                [`km`]: "千米",
                [`m`]: "米",

                [`pengPai`]: "碰牌",
                [`xiaoChaoTian`]: "小朝天",
                [`dianXiao`]: "点笑",

                [`giveUpXiao`]: "弃笑",
                [`giveUpPeng`]: "弃碰",
                [`giveUpZuoChong`]: "弃捉铳",
                [`giveUpZimo`]: "弃自摸",

                [`giveUpHuiTouXiao`]: "弃回头笑",
                [`giveUpMenXiao`]: "弃闷笑",
                [`giveUpDaChaoTian`]: "弃大朝天",

                [`cannotRecordWhenOnPlay`]: "正在播放，不能录音",
                [`leaveRoomCountDown`]: "你的牌友已离开，({0})后，将自动解散房间！",
                [`networkConnectError`]: "请检查网络是否连接",

                [`joinRoomText`]: "请输入您要加入的6位数朋友房间号",
                [`inputRecordText`]: "请输入视频ID",
                [`inputPhoneText`]: "请输入手机号码",
                [`inputAuthText`]: "请输入验证码",
                [`inputMoneyText`]: "每次提现最少:{0}元,最多:{1}元,每天最多提现{2}次",
                [`cashOutLimit1`]: "最少提现{0}元，最多提现{1}元！",


                [`discardTipsOfMe`]: "到您出牌咯！",
                [`readyViewDisbandRoomTip`]: "房主解散房间",
                [`modifySuccess`]: "信息修改提交成功",
                [`bindPhone`]: "绑定手机：",
                [`sendAuthCode`]: "发送验证码",
                [`invalidPhone`]: "请输入有效的手机号",
                [`invalidCode`]: "请输入有效的认证码",
                [`joyText`]: "每局开局需消耗{0}欢乐豆",
                [`joyLevel1`]: "三人两门·初级场",
                [`joyLevel2`]: "三人两门·中级场",
                [`joyLevel3`]: "三人两门·高级场",
                [`beanIsLess`]: "您的欢乐豆不足，是否需要前往充值界面",
                [`bindPhoneSuccess`]: "恭喜你已成功绑定手机账号",
                [`noDataClear`]: "没有数据清除",
                [`voiceDataClear`]: "语音数据已清除",
                [`leaveGuild`]: "退工会数：{0}",

                [`winnerGain`]: "胜利获得<color=#57712 >{0}</c>能量；",
                [`loserGain`]: "失败获得<color=#57712 >{0}</c>能量；",
                [`draw`]: "<color=#57712 >{0}</c>能量抽奖一次；",
                [`sender`]: "寄件者：{0}",

                [`exchangeText`]: "{0}元兑换",
                [`pleaseUseWeChatLogin`]: "请使用微信登录！",

                [`cashOutTimes`]: "今天还可以提取{0}次",
                [`cashOutLess`]: "您今天的最高提取额度还剩余: {0}元",

                [`lessThenMin`]: "红包金额低于最少提现额度{0}元！",
                [`moreThenMax`]: "红包金额高于最多提现额度{0}元！",

                [`cashOutError`]: "提现错误！",
                [`cashOutSuccess`]: "提现成功！请到微信中查看！",
                [`canNotCashOut`]: "提现维护中,暂时不可提现！",
                [`cashOutLessThenMin`]: "低于最小提现额度{0}元！",
                [`cashOutMoreThenMax`]: "超出最大提现额度{0}元！",
                [`cashOutMaxLimit`]: "已超出今日最大提现额度！",
                [`cashOutCountMaxLimit`]: "已超出今日最大提现次数！",

                [`cashOutLimit`]: "今日提现额度已用完！",
                [`cashTimesLimit`]: "今日提现次数已用完！",

                [`exchangeSuccess`]: "兑换成功",

                [`exchangeNoEnough`]: "您的红包金额不足！",
                [`exchangeErr`]: "抱歉！您要兑换的商品已售空！",
                [`exchangeConfirm`]: "您确定要用红包 [{0}] 元兑换 [{1}]吗？",

                [`joyRoomWaitPlayer`]: "正在为您匹配游戏玩家{0}",
                [`invalidAuthCode`]: "无效的验证码",
                [`unbindPhone`]: "您的手机号未绑定，请先使用微信登录绑定手机号再使用",
                [`haveBeenSign`]: "今天已经签到过了！",
                [`signDay`]: "第{0}天",
                [`errorAuthCode`]: "验证码错误",
                // 12个 制表符
                [`agreeText0`]: `                                                                用户服务协议
重要须知：
                网络游戏用户协议（以下简称“本协议”）是由用户（以下简称“乙方”或“您”）与本游戏运营方（以下简称“甲方”或“我方”）签署的关于我方所提供的产品和服务所订立的协议。请您仔细阅读本《网络游戏用户协议》中的各个条款，包括但不限于免除或者限制我方责任的条款、对用户权利限制的条款及约定争议解决方式、司法管理的条款。双方确认前述条款并非属于《合同法》第40条规定的“免除其责任、加重对方责任、排除对方主要权利的”的条款，并同意该条款的合法性及有效性。除非您已阅读并接受本协议所有条款，否则您无权使用我方服务。如果您对本协议或我方服务有意见或建议，可与我方客户服务部门联系，我们会给予您必要的帮助。您点击同意、接受或下一步，或您注册、使用我方服务均视为您已阅读并同意签署本协议。如果您未满18周岁，请在法定监护人的陪同下阅读本协议，并特别注意未成年人使用条款。如您为未成年人法定监护人，希望合理设定孩子娱乐时间，培养孩子健康游戏习惯的，可依据相关规则登录我方未成家长监护体系平台（http://www.5206767.net/jzjhgc/index.html#2）了解相关信息。一、【定义】`,
                [`agreeText1`]: `1.1 本协议：指本协议正文、《用户服务协议》、《用户隐私政策》、游戏规则及其修订版本。上述内容一经正式发布，即为本协议不可分割的组成部分。本协议同时还包括文化部根据《网络游戏管理暂行办法》（文化部令第49号）制定的《网络游戏服务格式化协议必备条款》。1.2 游戏规则：指服务提供方（甲方）不时发布并修订的关于我方的用户守则、玩家条例、游戏公告、提示及通知等内容。1.3 甲方：指向您提供服务的《亲朋·好友圈棋牌》，在本协议中简称为“甲方”。1.4 甲方游戏：指由甲方负责运营的游戏的统称，包括计算机客户端游戏、网页游戏、HTML5游戏（H5游戏）、移动终端游戏、电视端游戏以及其他形式的游戏；我方可能以软件形式提供，这种情况下，我方还包括该相关软件及相关文档。1.5 甲方服务：指甲方向您提供的与游戏相关的各项在线运营服务。1.6 乙方：又称“玩家”或“用户”，指被授权使用我方及其服务的自然人。1.7 游戏数据：指您在使用我方过程中产生的被服务器记录的各种数据，包括但不限于角色数据、虚拟物品数据、行为日志、购买日志等等数据。二、【游戏账号】`,

                [`agreeText2`]: `2.1 您如果需要使用和享受我方，则您需要将您享有使用权微信账号作为游戏账号，并按照《网络游戏管理暂行规定》及文化部《网络游戏服务格式化协议必备条款》的要求，登录实名注册系统并进行实名注册。您对该微信账号的申请、使用等行为应符合甲方不时修订并公布的《用户服务协议》的规范。您进行实名注册时，应提供有关您本人真实、合法、准确、有效的身份信息及其他相关信息，且不得以他人身份资料进行实名注册。否则，甲方有权终止为您提供服务，并有权对您的游戏账号采取包括但不限于警告、限制或禁止使用游戏帐号全部或部分功能、删除游戏账号及游戏数据、删除相关信息、游戏账号封禁（以下有时简称“封号”）直至注销的处理措施（为描述方便，以下有时也将该等处理措施称为“处罚”），因此造成的一切后果由您自行承担。若您不进行实名注册的，或您提供的注册信息不完整的，则您可能无法使用我方或在使用我方过程中会受到相应限制。2.2 您进一步知悉并同意，您在游客模式下可能无法进行游戏充值或消费。且一旦您卸载或重装我方，或您更换手机、电脑等终端设备或该等终端设备损坏的，您在该游客模式下所有游戏相关数据可能都将会被清空，且无法查询和恢复。如因此造成您任何损失的，均由您自行承担。如您使用甲方认可的第三方帐号作为游戏账号使用和享受的，您还应遵守有关该第三方帐号的协议、规则，且因该第三方帐号产生的相关问题包括但不限于被盗等，您应自行联系该第三方进行解决，甲方可视情况提供相应的协助。`,
                [`agreeText3`]: `2.3 您充分理解并同意：为判断或核实您提供的相关实名注册信息是否真实或有效，甲方有权将您提供的实名注册信息提供给第三方进行整理、保存及比对等处理。且甲方会按照国家相关要求将您的实名注册信息运用于防沉迷系统之中，即甲方可能会根据您的实名注册信息判断您是否年满18周岁、您提交的实名身份信息是否规范或实名验证是否通过等，从而决定是否对您的游戏账号予以防沉迷限制。2.4 您充分理解并同意，甲方有权审查用户注册所提供的身份信息是否真实、有效，并应积极地采取技术与管理等合理措施保障用户账号的安全、有效；用户有义务妥善保管其账号及密码，并正确、安全地使用其账号及密码。任何一方未尽上述义务导致账号密码遗失、账号被盗等情形而给用户和他人的民事权利造成损害的，应当承担由此产生的法律责任。若您发现有他人冒用或盗用您的游戏账号及密码、或任何其他未经您合法授权使用的情形时，应立即以甲方要求的有效方式通知甲方并告知甲方需采取的措施。您通知甲方时，应提供与您注册身份信息相一致的个人有效身份信息，甲方收到您的有效请求并核实身份后，会根据您的要求或结合具体情况采取相应措施（包括但不限于暂停该账号的登录和使用等）`,

                [`agreeText4`]: `甲方因根据您的请求采取相应措施而造成您及其他用户损失的，由您自行承担。若您没有提供有效身份信息或您提供的个人有效身份信息与所注册的身份信息不一致的，甲方有权拒绝您的请求，因此造成您损失的，由您自行承担。2.5 您充分理解并同意，为高效利用服务器资源，如果您3年内未使用游戏账号登录我方，甲方有权在提前通知的情况下，对该账号及其账号下的游戏数据及相关信息采取删除等处置措施。2.6 您理解并同意，您不得将游戏账号以任何方式提供给他人使用，包括但不限于不得以转让、出租、借用等方式提供给他人作包括但不限于直播、录制、代打代练等商业性使用。否则，因此产生任何法律后果及责任均由您自行承担，且甲方有权对您的游戏账号采取包括但不限于警告、限制或禁止使用游戏帐号全部或部分功能、删除游戏账号及游戏数据及其他相关信息、封号直至注销的处理措施，因此造成的一切后果由您自行承担。三、【用户信息收集、使用及保护】3.1 您同意并授权甲方为履行本协议之目的收集您的用户信息，这些信息包括您在实名注册系统中注册的信息、您游戏账号下的游戏数据以及其他您在使用我方服务的过程中向甲方提供或甲方基于安全、用户体验优化等考虑而需收集的信息，甲方对您的用户信息的收集将遵循本协议及相关法律的规定。`,

                [`agreeText5`]: `3.2 您充分理解并同意：甲方或其合作的第三方可以根据您的用户信息，通过短信、电话、邮件等各种方式向您提供关于我方的活动信息、推广信息等各类信息。3.3 您理解并同意：为了更好地向您提供游戏服务，改善游戏体验，甲方可对您微信账号或游戏账号中的昵称、头像以及在我方中的相关操作信息、游戏信息等信息（以下称“该等信息”。该等信息具体包括但不限于您的登录状态、对战信息/状态、成就信息等）进行使用，并可向您本人或其他用户或好友展示该等信息。3.4 您应对通过我方及相关服务了解、接收或可接触到的包括但不限于其他用户在内的任何人的个人信息予以充分尊重，您不应以搜集、复制、存储、传播或以其他任何方式使用其他用户的个人信息，否则，由此产生的后果由您自行承担。3.5 保护用户信息及隐私是甲方的一项基本原则。除本协议另有规定外，我方服务对用户信息收集、使用及保护等将遵循甲方统一公布的相关隐私政策。四、【甲方服务】4.1 在您遵守本协议及相关法律法规的前提下，甲方给予您一项个人的、不可转让及非排他性的许可，以使用我方服务。您仅可为非商业目的使用我方服务，包括：（1）接收、下载、安装、启动、升级、登录、显示、运行和/或截屏我方；`,

                [`agreeText6`]: `（2）创建游戏角色，设置网名，查阅游戏规则、用户个人资料、游戏对局结果，开设游戏房间、设置游戏参数，在游戏中购买、使用游戏道具、游戏装备、游戏币等，使用聊天功能、社交分享功能；（3）使用我方支持并允许的其他某一项或几项功能。4.2 您在使用我方服务过程中不得未经甲方许可以任何方式录制、直播或向他人传播我方内容，包括但不限于不得利用任何第三方软件进行网络直播、传播等。4.3 在我方以软件形式提供的情况下，您在使用我方及我方服务时还应符合本协议第五条关于软件许可的规定。4.4 本条及本协议其他条款未明示授权的其他一切权利仍由甲方保留，您在行使这些权利时须另外取得甲方的书面许可。4.5 如果您违反本协议约定的，甲方有权采取相应的措施进行处理，该措施包括但不限于：不经通知随时对相关内容进行删除，并视行为情节对违规游戏账号处以包括但不限于警告、限制或禁止使用全部或部分功能、游戏账号封禁直至注销的处罚，并公告处理结果，要求您赔偿因您从事违约行为而给甲方造成的损失等。`,

                [`agreeText7`]: `4.6 您充分理解并同意，甲方有权依合理判断对违反有关法律法规或本协议规定的行为进行处理，对违法违规的任何用户采取适当的法律行动，并依据法律法规保存有关信息向有关部门报告等，用户应独自承担由此而产生的一切法律责任。4.7 您充分理解并同意，因您违反本协议或相关服务条款的规定，导致或产生第三方主张的任何索赔、要求或损失，您应当独立承担责任；甲方因此遭受损失的，您也应当一并赔偿。4.8 您充分理解并同意：游戏道具、游戏装备、游戏币等是我方服务的一部分，甲方在此许可您依本协议而获得其使用权。您购买、使用游戏道具、游戏装备、游戏币等应遵循本协议、游戏具体规则的要求；同时，游戏道具、游戏装备、游戏币等可能受到一定有效期限的限制，即使您在规定的有效期内未使用，除不可抗力或可归责于甲方的原因外，一旦有效期届满，将会自动失效。您充分理解并同意：为更好地向用户提供我方服务，甲方有权对游戏中的任何内容或构成元素等作出调整、更新或优化（包括但不限于您购买或正在使用的角色、游戏装备及其他游戏道具的美术设计、性能及相关数值设置等作出调整、更新或优化等）。且如甲方做出相应调整、更新或优化的，您同意不会因此追究甲方的任何法律责任。`,
                ["agreeText8"]: `4.9 您充分理解并同意：为保障您游戏账号安全，为营造公平、健康及安全的游戏环境，在您使用我方服务的过程中，在不违反相关法律规定情况下，甲方可以通过技术手段了解您终端设备的随机存储内存以及与我方同时运行的相关程序。一经发现有任何未经授权的、危害我方服务正常运营的相关程序，甲方可以收集所有与此有关的信息并采取合理措施予以打击。4.10 您充分理解并同意：为了保证您及其他用户的游戏体验，甲方有权转移或者清除我方服务器上存储的一些过往的游戏数据。4.11 甲方将按照相关法律法规和本协议的规定，采取切实有效的措施保护未成年人在使用我方服务过程中的合法权益，包括可能采取技术措施、禁止未成年人接触不适宜的游戏或者游戏功能、限制未成年人的游戏时间、预防未成年人沉迷网络。作为游戏规则的一部分，甲方还将在适当位置发布我方用户指引和警示说明，包括游戏内容介绍、正确使用游戏的方法以及防止危害发生的方法。所有未成年人用户都应在法定监护人的指导下仔细阅读并遵照执行这些指引和说明；其他玩家在使用我方服务的过程中应避免发布、产生任何有损未成年人身心健康的内容，共同营造健康游戏环境。4.12 如果您未满18周岁的，为保障您的合法权益，甲方有权依据国家有关法律法规及政策规定、本协议其他条款规定、我方运营策略或根据您法定监护人的合理要求采取以下一种或多种措施：`,
                ["agreeText9"]: `（1）将与您游戏相关的信息（包括但不限于您游戏帐号的登录信息、充值流水信息等）提供给您的法定监护人，使得您法定监护人可及时或同步了解您游戏情况；（2）限制您游戏账号的消费额度；（3）采取技术措施屏蔽某些游戏或游戏的某些功能，或限定您游戏时间或游戏时长；（4）注销或删除您游戏账号及游戏数据等相关信息；（5）您法定监护人要求采取的，或甲方认为可采取的其他合理措施，以限制或禁止您使用我方。4.13 甲方向用户提供游戏服务本身属于商业行为，用户有权自主决定是否根据甲方自行确定的收费项目（包括但不限于购买游戏内的虚拟道具的使用权以及接受其他增值服务等各类收费项目）及收费标准支付相应的费用，以获得相应的游戏服务。如您不按相应标准支付相应费用的，您将无法获得相应的游戏服务。您知悉并同意：收费项目或收费标准的改变、调整是一种正常的商业行为，您不得因为收费项目或收费标准的改变、调整而要求甲方进行赔偿或补偿。4.14 在任何情况下，甲方不对因不可抗力导致的您在使用我方服务过程中遭受的损失承担责任。该等不可抗力事件包括但不限于国家法律、法规、政策及国家机关的命令及其他政府行为或者其它的诸如地震、水灾、雪灾、火灾、海啸、台风、罢工、战争等不可预测、不可避免且不可克服的事件。`,
                ["agreeText10"]: `4.15 我方可能因游戏软件BUG、版本更新缺陷、第三方病毒攻击或其他任何因素导致您的游戏角色、游戏道具、游戏装备及游戏币等账号数据发生异常。在数据异常的原因未得到查明前，甲方有权暂时冻结该游戏账号；若查明数据异常为非正常游戏行为所致，甲方有权恢复游戏账号数据至异常发生前的原始状态（包括向第三方追回被转移数据），且甲方无须向您承担任何责任。4.16 甲方未授权您从任何第三方通过购买、接受赠与或者其他的方式获得游戏账号、游戏道具、游戏装备、游戏币等，甲方不对第三方交易的行为负责，并且不受理因任何第三方交易发生纠纷而带来的申诉。4.17 您充分理解到：不同操作系统之间存在不互通的客观情况，该客观情况并非甲方造成，由此可能导致您在某一操作系统中的充值和游戏数据不能顺利转移到另一操作系统中。由于您在不同系统进行切换造成的充值损失和游戏数据丢失风险应由您自行承担，甲方对此不承担任何责任。4.18 您充分理解到：我方中可能会设置强制对战区域或玩法，如果您不同意强制对战，请您不要进入该游戏或游戏区域；您的进入，将被视为同意该玩法并接受相应后果。4.19 甲方自行决定终止运营我方时或我方因其他任何原因终止运营时，甲方会按照文化部有关网络游戏终止运营的相关规定处理游戏终止运营相关事宜，以保障用户合法权益。五、【软件许可】`,

                ["agreeText11"]: `5.1 使用我方服务可能需要下载并安装相关软件，您可以直接从甲方的相关网站上获取该软件，也可以从得到甲方授权的第三方获取。如果您从未经甲方授权的第三方获取我方或与我方名称相同的游戏，将视为您未获得甲方授权，甲方无法保证该游戏能够正常使用，并对因此给您造成的损失不予负责。5.2 甲方可能为不同的终端设备或操作系统开发了不同的软件版本，包括但不限于windows、ios、android、windows phone、symbian、blackberry等多个应用版本，您应当根据实际情况选择下载合适的版本进行安装，下载安装程序后，您需要按照该程序提示的步骤正确安装。5.3 若我方以软件形式提供，甲方给予您一项个人的、不可转让及非排他性的许可。您仅可为非商业目的在单一台终端设备上下载、安装、登录、使用该我方。5.4 为提供更加优质、安全的服务，在软件安装时甲方可能推荐您安装其他软件，您可以选择安装或不安装。5.5 如果您不再需要使用该软件或者需要安装新版，可以自行卸载。如果您愿意帮助甲方改进产品服务，请告知卸载的原因。5.6 为了保证我方服务的安全性和功能的一致性，甲方有权对软件进行更新，或者对软件的部分功能效果进行改变或限制。`,

                ["agreeText12"]: `5.7 软件新版本发布后，旧版本的软件可能无法使用。甲方不保证旧版本软件继续可用及相应的客户服务，请您随时核对并下载最新版本。六、【用户行为规范】6.1 您充分了解并同意，您必须为自己游戏账号下的一切行为负责，包括您所发表的任何内容以及由此产生的任何后果。6.2 您除了可以按照本协议的约定使用我方服务之外，不得进行任何侵犯我方的知识产权的行为，或者进行其他的有损于甲方或其他第三方合法权益的行为。6.3 您在使用我方或我方服务时须遵守法律法规，不得利用我方或我方服务从事违法违规行为，包括但不限于以下行为：（一）违反宪法确定的基本原则的；（二）危害国家统一、主权和领土完整的；（三）泄露国家秘密、危害国家安全或者损害国家荣誉和利益的；（四）煽动民族仇恨、民族歧视，破坏民族团结，或者侵害民族风俗、习惯的；（五）宣扬邪教、迷信的；（六）散布谣言，扰乱社会秩序，破坏社会稳定的；`,
                ["agreeText13"]: `（七）宣扬淫秽、色情、赌博、暴力，或者教唆犯罪的；（八）侮辱、诽谤他人，侵害他人合法权益的；（九）违背社会公德的；（十）有法律、行政法规和国家规定禁止的其他内容的。6.4 除非法律允许或甲方书面许可，您不得从事下列行为：（1）删除游戏软件及其副本上关于著作权的信息；（2）对游戏软件进行反向工程、反向汇编、反向编译或者以其他方式尝试发现软件的源代码；（3）对游戏软件进行扫描、探查、测试，以检测、发现、查找其中可能存在的BUG或弱点；（4）对游戏软件或者软件运行过程中释放到任何终端内存中的数据、软件运行过程中客户端与服务器端的交互数据，以及软件运行所必需的系统数据，进行复制、修改、增加、删除、挂接运行或创作任何衍生作品，形式包括但不限于使用插件、外挂或非经合法授权的第三方工具/服务接入软件和相关系统；（5）修改或伪造软件运行中的指令、数据，增加、删减、变动软件的功能或运行效果，或者将用于上述用途的软件、方法进行运营或向公众传播，无论上述行为是否为商业目的；`,
                ["agreeText14"]: `（6）通过非甲方开发、授权的第三方软件、插件、外挂、系统，使用我方及我方服务，或制作、发布、传播非甲方开发、授权的第三方软件、插件、外挂、系统；（7）对游戏中甲方拥有知识产权的内容进行使用、出租、出借、复制、修改、链接、转载、汇编、发表、出版、建立镜像站点等；（8）建立有关我方的镜像站点，或者进行网页（络）快照，或者利用架设服务器等方式，为他人提供与我方服务完全相同或者类似的服务；（9）将我方的任意部分分离出来单独使用，或者进行其他的不符合本协议的使用；（10）使用、修改或遮盖我方的名称、商标或其它知识产权；（11）其他未经甲方明示授权的行为。6.5 您在使用我方服务过程中有如下任何行为的，甲方有权视情节严重程度，依据本协议及相关游戏规则的规定，对您做出暂时或永久性地禁止登录（即封号）、删除游戏账号及游戏数据、删除相关信息等处理措施，情节严重的将移交有关行政管理机关给予行政处罚，或者追究您的刑事责任：（1）以某种方式暗示或伪称甲方内部员工或某种特殊身份，企图得到不正当利益或影响其他用户权益的行为；（2）在我方中使用非法或不当词语、字符等，包括用于角色命名；`,

                ["agreeText15"]: `（3）以任何方式破坏我方或影响我方服务的正常进行；（4）各种非法外挂行为；（5）传播非法言论或不当信息；（6）盗取他人游戏账号、游戏物品；（7）私自进行游戏账号交易；（8）私自进行游戏虚拟货币、游戏装备、游戏币及其他游戏道具等交易；（9）违反本协议任何约定的；（10）其他在行业内被广泛认可的不当行为，无论是否已经被本协议或游戏规则明确列明。您知悉并同意，由于外挂具有隐蔽性或用完后即消失等特点，甲方有权根据您的游戏数据和表现异常判断您有无使用非法外挂等行为。6.6 您知悉并同意，如甲方依据本协议对您的游戏账号采取封号处理措施的，具体封号期间由甲方根据您违规行为情节而定。您知悉并同意：（1）在封号期间，您游戏账号中的游戏虚拟货币、游戏装备、游戏币及其他游戏道具可能都将无法使用；（2）如前述游戏虚拟货币、游戏装备、游戏币及其他游戏道具存在一定有效期，该有效期可能会在封号期间过期，您游戏账号解封后，您将无法使用该等已过期的游戏虚拟货币、游戏装备、游戏币及其他游戏道具。`,
                ["agreeText16"]: `据此，您也同意不会因发生前述第（1）和（或）第（2）点规定的情形而追究甲方任何法律责任。七、【知识产权】7.1 甲方是我方的知识产权权利人。我方（包括我方整体及我方涉及的所有内容、组成部分或构成要素 ）的一切著作权、商标权、专利权、商业秘密等知识产权及其他合法权益，以及与我方相关的所有信息内容（包括文字、图片、音频、视频、图表、界面设计、版面框架、有关数据或电子文档等）均受中华人民共和国法律法规和相应的国际条约保护，甲方享有上述知识产权和合法权益，但相关权利人依照法律规定应享有的权利除外。未经甲方事先书面同意，您不得以任何方式将我方（包括我方整体及我方涉及的所有内容、组成部分或构成要素 ）进行商业性使用。7.2 尽管本协议有其他规定，您在使用我方服务中产生的游戏数据的所有权和知识产权归甲方所有，甲方有权保存、处置该游戏数据。其中，甲方对用户购买游戏虚拟货币的购买记录的保存期限将遵守文化部《网络游戏管理暂行办法》有关规定。对其他游戏数据的保存期限由甲方自行决定，但国家法律法规另有规定的从其规定。7.3 我方可能涉及第三方知识产权，而该等第三方对您基于本协议在我方中使用该等知识产权有要求的，甲方将以适当方式向您告知该要求，您应当一并遵守。八、【遵守当地法律监管】`,

                ["agreeText17"]: `8.1 您在使用我方服务过程中应当遵守当地相关的法律法规，并尊重当地的道德和风俗习惯。如果您的行为违反了当地法律法规或道德风俗，您应当为此独立承担责任。8.2 您应避免因使用我方服务而使甲方卷入政治和公共事件，否则甲方有权暂停或终止对您的服务。九、【管辖与法律适用】9.1 本协议签订地为中华人民共和国湖北省。9.2 本协议的成立、生效、履行、解释及纠纷解决，适用中华人民共和国大陆地区法律（不包括冲突法）。9.3 若您和甲方之间因本协议发生任何纠纷或争议，首先应友好协商解决；协商不成的，您同意将纠纷或争议提交至本协议签订地有管辖权的人民法院管辖。9.4 本协议所有条款的标题仅为阅读方便，本身并无实际涵义，不能作为本协议涵义解释的依据。9.5 本协议条款无论因何种原因部分无效，其余条款仍有效，对各方具有约束力。十、【其他】10.1 甲方有权在必要时变更本协议条款，您可以在我方的相关页面查阅最新版本的协议条款。本协议条款变更后，如果您继续使用我方服务，即视为您已接受变更后的协议。`,
                ["agreeText18"]: `10.2 根据国家新闻出版总署关于健康游戏的忠告，甲方提醒您：抵制不良游戏，拒绝盗版游戏；注意自我保护，谨防受骗上当；适度游戏益脑，沉迷游戏伤身。七、【知识产权】7.1 甲方是我方的知识产权权利人。我方（包括我方整体及我方涉及的所有内容、组成部分或构成要素 ）的一切著作权、商标权、专利权、商业秘密等知识产权及其他合法权益，以及与我方相关的所有信息内容（包括文字、图片、音频、视频、图表、界面设计、版面框架、有关数据或电子文档等）均受中华人民共和国法律法规和相应的国际条约保护，甲方享有上述知识产权和合法权益，但相关权利人依照法律规定应享有的权利除外。未经甲方事先书面同意，您不得以任何方式将我方（包括我方整体及我方涉及的所有内容、组成部分或构成要素 ）进行商业性使用。7.2 尽管本协议有其他规定，您在使用我方服务中产生的游戏数据的所有权和知识产权归甲方所有，甲方有权保存、处置该游戏数据。其中，甲方对用户购买游戏虚拟货币的购买记录的保存期限将遵守文化部《网络游戏管理暂行办法》有关规定。对其他游戏数据的保存期限由甲方自行决定，但国家法律法规另有规定的从其规定。7.3 我方可能涉及第三方知识产权，而该等第三方对您基于本协议在我方中使用该等知识产权有要求的，甲方将以适当方式向您告知该要求，您应当一并遵守。`,

                ["agreeText19"]: `
                抵制不良游戏,拒绝盗版游戏,
                注意自我保护,谨防受骗上当,
                适度游戏益脑,沉迷游戏伤身,
                合理安排时间,享受健康生活。

                    文明游戏,禁止赌博！`,

        };

        /**
         * 获取字符串
         * @param strTag key
         * @param params 参数
         */
        export const findString = (strTag: string, ...params: string[]): string => {
                const localString = localStrings[strTag];

                if (localString === undefined || localString === "") {
                        return `Unknown strTag: ${strTag} `;
                }

                return localString.replace(/{(\d+)}/g, (match: string, num: number) => {

                        return params[num] !== undefined ? params[num] : match;
                });
        };

}
