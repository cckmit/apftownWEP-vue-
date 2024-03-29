import Vue from 'vue'
import Router from 'vue-router'
import { getCookie, setCookie, isDevice } from '@/assets/commonjs/util.js';
import Axios from 'axios';
import qs from 'qs';
const URL = 'http://memberapi.apftown.com:8070'

//act20180808  海南项目优质对接会
import Act2018080801 from '@/components/act/20180808/01'
import Act2018080802 from '@/components/act/20180808/02'
import Act2018080803 from '@/components/act/20180808/03'
import Act2018080804 from '@/components/act/20180808/04'
import Act2018080805 from '@/components/act/20180808/05'

//act20180818  金融周
import Act2018081801 from '@/components/act/20180818/01'
import Act2018081802 from '@/components/act/20180818/02'
import Act2018081803 from '@/components/act/20180818/03'
import Act2018081804 from '@/components/act/20180818/04'
import Act2018081805 from '@/components/act/20180818/05'
import Act2018081806 from '@/components/act/20180818/06'
import Act2018081807 from '@/components/act/20180818/07'

//act20180818 清华培训act2018100801
import Act2018100801 from '@/components/act/20181008/01'
import Act2018100802 from '@/components/act/20181008/02'
import Act2018100803 from '@/components/act/20181008/03'
import Act2018100804 from '@/components/act/20181008/04'
import Act2018100805 from '@/components/act/20181008/05'
import Act2018100806 from '@/components/act/20181008/06'

//act20181031 民宿报名act2018103101
import Act2018103101 from '@/components/act/20181031/01'
import Act2018103102 from '@/components/act/20181031/02'
import Act2018103103 from '@/components/act/20181031/03'
import Act2018103104 from '@/components/act/20181031/04'
import Act2018103105 from '@/components/act/20181031/05'
import Act2018103106 from '@/components/act/20181031/06'
import Act2018103107 from '@/components/act/20181031/07'

//taxation/index 小镇税收流程
import taxation_index from '@/components/taxation/index'
import taxation_list from '@/components/taxation/list'
import taxation_1 from '@/components/taxation/1'
import taxation_2 from '@/components/taxation/2'
import taxation_3 from '@/components/taxation/3'
import taxation_4 from '@/components/taxation/4'
import taxation_5 from '@/components/taxation/5'
import taxation_6 from '@/components/taxation/6'
import taxation_701 from '@/components/taxation/701'
import taxation_702 from '@/components/taxation/702'
import taxation_703 from '@/components/taxation/703'
import taxation_704 from '@/components/taxation/704'
import taxation_705 from '@/components/taxation/705'
import taxation_706 from '@/components/taxation/706'
import taxation_707 from '@/components/taxation/707'
import taxation_708 from '@/components/taxation/708'
import taxation_709 from '@/components/taxation/709'
import taxation_710 from '@/components/taxation/710'
import taxation_711 from '@/components/taxation/711'
import taxation_712 from '@/components/taxation/712'
import taxation_713 from '@/components/taxation/713'
import taxation_714 from '@/components/taxation/714'
import taxation_715 from '@/components/taxation/715'
import taxation_716 from '@/components/taxation/716'
import taxation_717 from '@/components/taxation/717'
import taxation_718 from '@/components/taxation/718'
import taxation_719 from '@/components/taxation/719'
import taxation_720 from '@/components/taxation/720'
import taxation_721 from '@/components/taxation/721'
import taxation_722 from '@/components/taxation/722'
import taxation_723 from '@/components/taxation/723'
import taxation_724 from '@/components/taxation/724'
import taxation_725 from '@/components/taxation/725'
import taxation_726 from '@/components/taxation/726'
import taxation_727 from '@/components/taxation/727'
import taxation_728 from '@/components/taxation/728'
import taxation_729 from '@/components/taxation/729'
import taxation_730 from '@/components/taxation/730'
import taxation_731 from '@/components/taxation/731'
import taxation_732 from '@/components/taxation/732'
import taxation_733 from '@/components/taxation/733'
import taxation_734 from '@/components/taxation/734'
import taxation_735 from '@/components/taxation/735'
import taxation_736 from '@/components/taxation/736'
import taxation_737 from '@/components/taxation/737'
import taxation_738 from '@/components/taxation/738'
import taxation_739 from '@/components/taxation/739'
import taxation_740 from '@/components/taxation/740'
import taxation_741 from '@/components/taxation/741'
import taxation_742 from '@/components/taxation/742'
import taxation_8 from '@/components/taxation/8'

//act20190209 初五活动act2019020901
import Act2019020901 from '@/components/act/20190209/01'
import Act2019020902 from '@/components/act/20190209/02'
import Act2019020903 from '@/components/act/20190209/03'
import Act2019020904 from '@/components/act/20190209/04'
import Act2019020905 from '@/components/act/20190209/05'
import Act2019020906 from '@/components/act/20190209/06'

//act20190418 五一活动act2019041801
import Act2019041801 from '@/components/act/20190418/01';

// 2019私募大会活动(中文)
import ee_index from '@/components/act/ee2019/index'; //主体
import ee_home from '@/components/act/ee2019/home'; //首页
import ee_presenceMeeting from '@/components/act/ee2019/presenceMeeting'; //出席会议
import ee_attendExhibition from '@/components/act/ee2019/attendExhibition'; //参与展览
import ee_sponsors from '@/components/act/ee2019/sponsors'; //会议支持
import ee_attendMeeting from '@/components/act/ee2019/attendMeeting'; //列席会议
import ee_agenda from '@/components/act/ee2019/agenda'; //会议日程
import ee_mediaChannel from '@/components/act/ee2019/mediaChannel'; //媒体通道
import ee_venueInfo from '@/components/act/ee2019/venueInfo'; //会场信息
import ee_contactUs from '@/components/act/ee2019/contactUs'; //联系我们
import ee_exhibitorsReg from '@/components/act/ee2019/exhibitorsReg'; //参展报名
import ee_addPer from '@/components/act/ee2019/addPer'; // 媒体报名
import ee_perList from '@/components/act/ee2019/perList'; //人员列表
import ee_subDetails from '@/components/act/ee2019/subDetails'; //报名详情
import ee_meetingsTickets from '@/components/act/ee2019/meetingsTickets'; //会议报名
import ee_sponsorReg from '@/components/act/ee2019/sponsorReg'; // 赞助商报名
import ee_mediaReg from '@/components/act/ee2019/mediaReg'; // 媒体报名
import ee_ticketsCode from '@/components/act/ee2019/ticketsCode'; //入场券-二维码
import ee_returnlog from '@/components/act/ee2019/returnlog'; //登录状态回跳

// 2019私募大会会员中心
import ee_userCenter from '@/components/act/ee2019/user/userCenter';// 会员中心首页
import ee_tickets from '@/components/act/ee2019/user/tickets'; // 我的入场券
import ee_businessCard from '@/components/act/ee2019/user/businessCard'; // 我的名片
import ee_enterprise from '@/components/act/ee2019/user/enterprise'; // 我的企业
import ee_follow from '@/components/act/ee2019/user/follow'; // 我的关注
import ee_messageBox from '@/components/act/ee2019/user/messageBox'; // 留言箱
import ee_participatingEnterprises from '@/components/act/ee2019/user/participatingEnterprises'; // 参会企业


// 2019私募大会活动(英文)
import ee_index_en from '@/components/act/ee2019_en/index'; //主体
import ee_home_en from '@/components/act/ee2019_en/home'; //首页
import ee_presenceMeeting_en from '@/components/act/ee2019_en/presenceMeeting'; //出席会议
import ee_attendExhibition_en from '@/components/act/ee2019_en/attendExhibition'; //参与展览
import ee_sponsors_en from '@/components/act/ee2019_en/sponsors'; //会议支持
import ee_attendMeeting_en from '@/components/act/ee2019_en/attendMeeting'; //列席会议
import ee_agenda_en from '@/components/act/ee2019_en/agenda'; //会议日程
import ee_mediaChannel_en from '@/components/act/ee2019_en/mediaChannel'; //媒体通道
import ee_venueInfo_en from '@/components/act/ee2019_en/venueInfo'; //会场信息
import ee_contactUs_en from '@/components/act/ee2019_en/contactUs'; //联系我们
import ee_exhibitorsReg_en from '@/components/act/ee2019_en/exhibitorsReg'; //参展报名
import ee_addPer_en from '@/components/act/ee2019_en/addPer'; // 媒体报名
import ee_perList_en from '@/components/act/ee2019_en/perList'; //人员列表
import ee_subDetails_en from '@/components/act/ee2019_en/subDetails'; //报名详情
import ee_meetingsTickets_en from '@/components/act/ee2019_en/meetingsTickets'; //会议报名
import ee_sponsorReg_en from '@/components/act/ee2019_en/sponsorReg'; // 赞助商报名
import ee_mediaReg_en from '@/components/act/ee2019_en/mediaReg'; // 媒体报名
import ee_ticketsCode_en from '@/components/act/ee2019_en/ticketsCode'; //入场券-二维码
import ee_returnlog_en from '@/components/act/ee2019_en/returnlog'; //登录状态回跳

// 2.0网站
import Home from '@/components/2.0/Home/home';
// 产业服务
import Industry01 from '@/components/2.0/Industry/01';
import Industry02 from '@/components/2.0/Industry/02';
import Industry03 from '@/components/2.0/Industry/03';
// 学习服务
import Study01 from '@/components/2.0/Study/01';
import Study02 from '@/components/2.0/Study/02';
import Study03 from '@/components/2.0/Study/03';
// 研究服务
import Research01 from '@/components/2.0/Research/01';
import Research02 from '@/components/2.0/Research/02';
import Research03 from '@/components/2.0/Research/03';
// 园区服务
import Park01 from '@/components/2.0/Park/01';
import Park02 from '@/components/2.0/Park/02';
import Park03 from '@/components/2.0/Park/03';
import Introduce from '@/components/2.0/Introduce/introduce'; //介绍
import Service from '@/components/2.0/Service/service'; //服务
import ContactUs from '@/components/2.0/ContactUs/contactUs'; //联系我们
import Login from '@/components/2.0/Login/login'; // 登录
// 企业入驻
import EnterpriseEntry01 from '@/components/2.0/EnterpriseEntry/01';
import EnterpriseEntry02 from '@/components/2.0/EnterpriseEntry/02';
import EnterpriseEntry03 from '@/components/2.0/EnterpriseEntry/03';
// 会员中心
import Usercenter from '@/components/2.0/user/usercenter';
import Bill from '@/components/2.0/user/bill';
import Paycode from '@/components/2.0/user/paycode';
import Pay from '@/components/2.0/user/goldyb/pay';
import Payresult from '@/components/2.0/user/goldyb/payresult';
import Training_world from '@/components/2.0/user/trainingWorld';
import Training_download from '@/components/2.0/user/trainingDownload';

// 2.0_EN
import Login_en from '@/components/2.0_en/Login/login'; // 登录

Vue.use(Router)
export default new Router({
    mode: 'history',
    routes: [
        { path: '/', redirect: { name: 'home' } },
        { path: '/home', name: 'home', component: Home, meta: { title: '亚太金融小镇' } },

        //海南项目优质对接会
        { path: '/act/act2018080801', name: 'act.act2018080801', component: Act2018080801, meta: { title: '2018海南优质项目对接会' } },
        { path: '/act/act2018080802', name: 'act.act2018080802', component: Act2018080802, meta: { title: '2018海南优质项目对接会' } },
        { path: '/act/act2018080803', name: 'act.act2018080803', component: Act2018080803, meta: { title: '2018海南优质项目对接会' } },
        { path: '/act/act2018080804', name: 'act.act2018080804', component: Act2018080804, meta: { title: '2018海南优质项目对接会' } },
        { path: '/act/act2018080805', name: 'act.act2018080805', component: Act2018080805, meta: { title: '2018海南优质项目对接会' } },

        //20180818金融周
        { path: '/act/act2018081801', name: 'act.act2018081801', component: Act2018081801, meta: { title: '2019三亚国际金融周-亚太金融小镇' } },
        { path: '/act/act2018081802', name: 'act.act2018081802', component: Act2018081802, meta: { title: '2019三亚国际金融周-亚太金融小镇' } },
        { path: '/act/act2018081803', name: 'act.act2018081803', component: Act2018081803, meta: { title: '2019三亚国际金融周-亚太金融小镇' } },
        { path: '/act/act2018081804', name: 'act.act2018081804', component: Act2018081804, meta: { title: '2019三亚国际金融周-亚太金融小镇' } },
        { path: '/act/act2018081805', name: 'act.act2018081805', component: Act2018081805, meta: { title: '2019三亚国际金融周-亚太金融小镇' } },
        { path: '/act/act2018081806', name: 'act.act2018081806', component: Act2018081806, meta: { title: '2019三亚国际金融周-亚太金融小镇' } },
        { path: '/act/act2018081807', name: 'act.act2018081807', component: Act2018081807, meta: { title: '2019三亚国际金融周-亚太金融小镇' } },

        //清华培训act2018100801
        { path: '/act/act2018100801', name: 'act.act2018100801', component: Act2018100801, meta: { title: '国际金融培训基地-三亚·亚太金融小镇' } },
        { path: '/act/act2018100802', name: 'act.act2018100802', component: Act2018100802, meta: { title: '国际金融培训基地-三亚·亚太金融小镇' } },
        { path: '/act/act2018100803', name: 'act.act2018100803', component: Act2018100803, meta: { title: '国际金融培训基地-三亚·亚太金融小镇' } },
        { path: '/act/act2018100804', name: 'act.act2018100804', component: Act2018100804, meta: { title: '国际金融培训基地-三亚·亚太金融小镇' } },
        { path: '/act/act2018100805', name: 'act.act2018100805', component: Act2018100805, meta: { title: '国际金融培训基地-三亚·亚太金融小镇' } },
        {
            path: '/act/act2018100806',
            name: 'act.act2018100806',
            component: Act2018100806,
            meta: { title: '国际金融培训基地-三亚·亚太金融小镇' },
            beforeEnter: (to, from, next) => {
                if (getCookie('APF_UID')) { // 通过vuex state获取当前的token是否存在
                    Axios.get(URL + '/wap/activity/actAlready', {
                            params: { activityNo: '20181008', APF_UID: getCookie('APF_UID'), }
                        })
                        .then(res => {
                            if (res.data.data != false) {
                                next();
                            } else {
                                next({ path: '/act/act2018100805', })
                            }
                        })
                        .catch(err => { console.log(err) })
                } else {
                    next({ path: '/act/act2018100801', })
                }
            }
        },

        //民宿预订活动act2018103101
        { path: '/act/act2018103101', name: 'act.act2018103101', component: Act2018103101, meta: { title: '海棠花居预订' } },
        { path: '/act/act2018103102', name: 'act.act2018103102', component: Act2018103102, meta: { title: '海棠花居预订' } },
        { path: '/act/act2018103103', name: 'act.act2018103103', component: Act2018103103, meta: { title: '海棠花居预订' } },
        { path: '/act/act2018103104', name: 'act.act2018103104', component: Act2018103104, meta: { title: '海棠花居预订' } },
        { path: '/act/act2018103105', name: 'act.act2018103105', component: Act2018103105, meta: { title: '海棠花居预订' } },
        { path: '/act/act2018103106', name: 'act.act2018103106', component: Act2018103106, meta: { title: '海棠花居预订' } },
        {
            path: '/act/act2018103107',
            name: 'act.act2018103107',
            component: Act2018103107,
            meta: { title: '海棠花居预订' },
            //             beforeEnter: (to, from, next) => {
            //                 if (getCookie('APF_UID')) {
            //                     Axios.get(URL + '/wap/activity/actAlready', {
            //                             params: { activityNo: '20181031', APF_UID: getCookie('APF_UID'), }
            //                         })
            //                         .then(res => {
            //                             if (res.data.data != false) {
            //                                 next();
            //                             } else {
            //                                 next({ path: '/act/act2018103101', })
            //                             }
            //                         })
            //                         .catch(err => { console.log(err) })
            //                 } else {
            //                     next({ path: '/act/act2018103101' })
            //                 }
            //             }
        },
        //税收流程
        { path: '/taxation/index', name: 'taxation.index', component: taxation_index, meta: { title: '亚太金融小镇税收相关服务' } },
        { path: '/taxation/list', name: 'taxation.list', component: taxation_list, meta: { title: '亚太金融小镇税收相关服务' } },
        { path: '/taxation/t1', name: 'taxation.t1', component: taxation_1, meta: { title: '亚太金融小镇税收相关服务' } },
        { path: '/taxation/t2', name: 'taxation.t2', component: taxation_2, meta: { title: '亚太金融小镇税收相关服务' } },
        { path: '/taxation/t3', name: 'taxation.t3', component: taxation_3, meta: { title: '亚太金融小镇税收相关服务' } },
        { path: '/taxation/t4', name: 'taxation.t4', component: taxation_4, meta: { title: '亚太金融小镇税收相关服务' } },
        { path: '/taxation/t5', name: 'taxation.t5', component: taxation_5, meta: { title: '亚太金融小镇税收相关服务' } },
        { path: '/taxation/t6', name: 'taxation.t6', component: taxation_6, meta: { title: '亚太金融小镇税收相关服务' } },
        { path: '/taxation/t701', name: 'taxation.t701', component: taxation_701, meta: { title: '亚太金融小镇税收相关服务' } },
        { path: '/taxation/t702', name: 'taxation.t702', component: taxation_702, meta: { title: '亚太金融小镇税收相关服务' } },
        { path: '/taxation/t703', name: 'taxation.t703', component: taxation_703, meta: { title: '亚太金融小镇税收相关服务' } },
        { path: '/taxation/t704', name: 'taxation.t704', component: taxation_704, meta: { title: '亚太金融小镇税收相关服务' } },
        { path: '/taxation/t705', name: 'taxation.t705', component: taxation_705, meta: { title: '亚太金融小镇税收相关服务' } },
        { path: '/taxation/t706', name: 'taxation.t706', component: taxation_706, meta: { title: '亚太金融小镇税收相关服务' } },
        { path: '/taxation/t707', name: 'taxation.t707', component: taxation_707, meta: { title: '亚太金融小镇税收相关服务' } },
        { path: '/taxation/t708', name: 'taxation.t708', component: taxation_708, meta: { title: '亚太金融小镇税收相关服务' } },
        { path: '/taxation/t709', name: 'taxation.t709', component: taxation_709, meta: { title: '亚太金融小镇税收相关服务' } },
        { path: '/taxation/t710', name: 'taxation.t710', component: taxation_710, meta: { title: '亚太金融小镇税收相关服务' } },
        { path: '/taxation/t711', name: 'taxation.t711', component: taxation_711, meta: { title: '亚太金融小镇税收相关服务' } },
        { path: '/taxation/t712', name: 'taxation.t712', component: taxation_712, meta: { title: '亚太金融小镇税收相关服务' } },
        { path: '/taxation/t713', name: 'taxation.t713', component: taxation_713, meta: { title: '亚太金融小镇税收相关服务' } },
        { path: '/taxation/t714', name: 'taxation.t714', component: taxation_714, meta: { title: '亚太金融小镇税收相关服务' } },
        { path: '/taxation/t715', name: 'taxation.t715', component: taxation_715, meta: { title: '亚太金融小镇税收相关服务' } },
        { path: '/taxation/t716', name: 'taxation.t716', component: taxation_716, meta: { title: '亚太金融小镇税收相关服务' } },
        { path: '/taxation/t717', name: 'taxation.t717', component: taxation_717, meta: { title: '亚太金融小镇税收相关服务' } },
        { path: '/taxation/t718', name: 'taxation.t718', component: taxation_718, meta: { title: '亚太金融小镇税收相关服务' } },
        { path: '/taxation/t719', name: 'taxation.t719', component: taxation_719, meta: { title: '亚太金融小镇税收相关服务' } },
        { path: '/taxation/t720', name: 'taxation.t720', component: taxation_720, meta: { title: '亚太金融小镇税收相关服务' } },
        { path: '/taxation/t721', name: 'taxation.t721', component: taxation_721, meta: { title: '亚太金融小镇税收相关服务' } },
        { path: '/taxation/t722', name: 'taxation.t722', component: taxation_722, meta: { title: '亚太金融小镇税收相关服务' } },
        { path: '/taxation/t723', name: 'taxation.t723', component: taxation_723, meta: { title: '亚太金融小镇税收相关服务' } },
        { path: '/taxation/t724', name: 'taxation.t724', component: taxation_724, meta: { title: '亚太金融小镇税收相关服务' } },
        { path: '/taxation/t725', name: 'taxation.t725', component: taxation_725, meta: { title: '亚太金融小镇税收相关服务' } },
        { path: '/taxation/t726', name: 'taxation.t726', component: taxation_726, meta: { title: '亚太金融小镇税收相关服务' } },
        { path: '/taxation/t727', name: 'taxation.t727', component: taxation_727, meta: { title: '亚太金融小镇税收相关服务' } },
        { path: '/taxation/t728', name: 'taxation.t728', component: taxation_728, meta: { title: '亚太金融小镇税收相关服务' } },
        { path: '/taxation/t729', name: 'taxation.t729', component: taxation_729, meta: { title: '亚太金融小镇税收相关服务' } },
        { path: '/taxation/t730', name: 'taxation.t730', component: taxation_730, meta: { title: '亚太金融小镇税收相关服务' } },
        { path: '/taxation/t731', name: 'taxation.t731', component: taxation_731, meta: { title: '亚太金融小镇税收相关服务' } },
        { path: '/taxation/t732', name: 'taxation.t732', component: taxation_732, meta: { title: '亚太金融小镇税收相关服务' } },
        { path: '/taxation/t733', name: 'taxation.t733', component: taxation_733, meta: { title: '亚太金融小镇税收相关服务' } },
        { path: '/taxation/t734', name: 'taxation.t734', component: taxation_734, meta: { title: '亚太金融小镇税收相关服务' } },
        { path: '/taxation/t735', name: 'taxation.t735', component: taxation_735, meta: { title: '亚太金融小镇税收相关服务' } },
        { path: '/taxation/t736', name: 'taxation.t736', component: taxation_736, meta: { title: '亚太金融小镇税收相关服务' } },
        { path: '/taxation/t737', name: 'taxation.t737', component: taxation_737, meta: { title: '亚太金融小镇税收相关服务' } },
        { path: '/taxation/t738', name: 'taxation.t738', component: taxation_738, meta: { title: '亚太金融小镇税收相关服务' } },
        { path: '/taxation/t739', name: 'taxation.t739', component: taxation_739, meta: { title: '亚太金融小镇税收相关服务' } },
        { path: '/taxation/t740', name: 'taxation.t740', component: taxation_740, meta: { title: '亚太金融小镇税收相关服务' } },
        { path: '/taxation/t741', name: 'taxation.t741', component: taxation_741, meta: { title: '亚太金融小镇税收相关服务' } },
        { path: '/taxation/t742', name: 'taxation.t742', component: taxation_742, meta: { title: '亚太金融小镇税收相关服务' } },
        { path: '/taxation/t8', name: 'taxation.t8', component: taxation_8, meta: { title: '亚太金融小镇税收相关服务' } },

        // 初五活动act2019020901
        { path: '/act/act2019020901', name: 'act.act2019020901', component: Act2019020901, meta: { title: '亚太金融小镇财神节庙会' } },
        { path: '/act/act2019020902', name: 'act.act2019020902', component: Act2019020902, meta: { title: '亚太金融小镇财神节庙会' } },
        { path: '/act/act2019020903', name: 'act.act2019020903', component: Act2019020903, meta: { title: '亚太金融小镇财神节庙会' } },
        { path: '/act/act2019020904', name: 'act.act2019020904', component: Act2019020904, meta: { title: '亚太金融小镇财神节庙会' } },
        { path: '/act/act2019020905', name: 'act.act2019020905', component: Act2019020905, meta: { title: '亚太金融小镇财神节庙会' } },
        { path: '/act/act2019020906', name: 'act.act2019020906', component: Act2019020906, meta: { title: '亚太金融小镇财神节庙会' }, },

        // 2019私募大会ee2019(中文)
        {
            path: '/ee2019/home',
            name: 'ee2019.index',
            component: ee_index,
            children: [
				{ path: '/ee2019/home', name: 'ee2019.home', component: ee_home, meta: { title: '2019私募大会-首页' } },
				{ path: '/ee2019/presenceMeeting', name: 'ee2019.presenceMmeeting', component: ee_presenceMeeting, meta: { title: '2019私募大会-出席会议' } },
				{ path: '/ee2019/attendExhibition', name: 'ee2019.attendExhibition', component: ee_attendExhibition, meta: { title: '2019私募大会-参与展览' } },
				{ path: '/ee2019/sponsors', name: 'ee2019.sponsors', component: ee_sponsors, meta: { title: '2019私募大会-会议支持' } },
				{ path: '/ee2019/attendMeeting', name: 'ee2019.attendMeeting', component: ee_attendMeeting, meta: { title: '2019私募大会-列席会议' } },
				{ path: '/ee2019/agenda', name: 'ee2019.agenda', component: ee_agenda, meta: { title: '2019私募大会-会议日程' } },
				{ path: '/ee2019/mediaChannel', name: 'ee2019.mediaChannel', component: ee_mediaChannel, meta: { title: '2019私募大会-媒体通道' } },
				{ path: '/ee2019/venueInfo', name: 'ee2019.venueInfo', component: ee_venueInfo, meta: { title: '2019私募大会-会场信息' } },
				{ path: '/ee2019/contactUs', name: 'ee2019.contactUs', component: ee_contactUs, meta: { title: '2019私募大会-联系我们' } },
				{ path: '/ee2019/exhibitorsReg', name: 'ee2019.exhibitorsReg', component: ee_exhibitorsReg, meta: { title: '2019私募大会-参展报名', requireAuth: true } },
				{ path: '/ee2019/addPer', name: 'ee2019.addPer', component: ee_addPer, meta: { title: '2019私募大会-人员信息', requireAuth: true } },
				{ path: '/ee2019/perList', name: 'ee2019.perList', component: ee_perList, meta: { title: '2019私募大会-人员列表', requireAuth: true } },
				{ path: '/ee2019/subDetails', name: 'ee2019.subDetails', component: ee_subDetails, meta: { title: '2019私募大会-报名详情', requireAuth: true } },
				{ path: '/ee2019/meetingsTickets', name: 'ee2019.meetingsTickets', component: ee_meetingsTickets, meta: { title: '2019私募大会-参会报名', } },
				{ path: '/ee2019/sponsorReg', name: 'ee2019.sponsorReg', component: ee_sponsorReg, meta: { title: '2019私募大会-赞助商报名', requireAuth: true } },
				{ path: '/ee2019/mediaReg', name: 'ee2019.mediaReg', component: ee_mediaReg, meta: { title: '2019私募大会-媒体报名', requireAuth: true } },
        { path: '/ee2019/ticketsCode', name: 'ee2019.ticketsCode', component: ee_ticketsCode, meta: { title: '2019私募大会-入场券（二维码）', requireAuth: true } },

        // 会员中心
        { path: '/ee2019/userCenter', name: 'ee2019.userCenter', component: ee_userCenter, meta: { title: '私募大会-会员中心' }},
        { path: '/ee2019/tickets', name: 'ee2019.tickets', component: ee_tickets, meta: { title: '私募大会-会员中心' }},
        { path: '/ee2019/businessCard', name: 'ee2019.businessCard', component: ee_businessCard, meta: { title: '私募大会-会员中心' }},
        { path: '/ee2019/follow', name: 'ee2019.follow', component: ee_follow, meta: { title: '私募大会-会员中心' }},
        { path: '/ee2019/messageBox', name: 'ee2019.messageBox', component: ee_messageBox, meta: { title: '私募大会-会员中心' }},
        { path: '/ee2019/participatingEnterprises', name: 'ee2019.participatingEnterprises', component: ee_participatingEnterprises, meta: { title: '私募大会-会员中心' }},
        { path: '/ee2019/enterprise', name: 'ee2019.enterprise', component: ee_enterprise, meta: { title: '私募大会-会员中心' }},
			]
			//children是嵌套的部分
        },
        { path: '/ee2019/returnlog', name: 'ee2019.returnlog', component: ee_returnlog, meta: { requireAuth: true } },

        // 2019私募大会ee2019(英文)
        {
            path: '/ee2019/home_en',
            name: 'ee2019.index_en',
            component: ee_index_en,
            children: [
				{ path: '/ee2019/home_en', name: 'ee2019.home_en', component: ee_home_en, meta: { title: '2019 Private Equity & Exchange Conference - Home' } },
				{ path: '/ee2019/presenceMeeting_en', name: 'ee2019.presenceMmeeting_en', component: ee_presenceMeeting_en, meta: { title: '2019 Private Equity & Exchange Conference - Visit' } },
				{ path: '/ee2019/attendExhibition_en', name: 'ee2019.attendExhibition_en', component: ee_attendExhibition_en, meta: { title: '2019 Private Equity & Exchange Conference - Exhibitor' } },
				{ path: '/ee2019/sponsors_en', name: 'ee2019.sponsors_en', component: ee_sponsors_en, meta: { title: '2019 Private Equity & Exchange Conference - Sponsor' } },
				{ path: '/ee2019/attendMeeting_en', name: 'ee2019.attendMeeting_en', component: ee_attendMeeting_en, meta: { title: '2019 Private Equity & Exchange Conference - Attend' } },
				{ path: '/ee2019/agenda_en', name: 'ee2019.agenda_en', component: ee_agenda_en, meta: { title: '2019 Private Equity & Exchange Conference - Programme' } },
				{ path: '/ee2019/mediaChannel_en', name: 'ee2019.mediaChannel_en', component: ee_mediaChannel_en, meta: { title: '2019 Private Equity & Exchange Conference - Press' } },
				{ path: '/ee2019/venueInfo_en', name: 'ee2019.venueInfo_en', component: ee_venueInfo_en, meta: { title: '2019 Private Equity & Exchange Conference - Practical Info' } },
				{ path: '/ee2019/contactUs_en', name: 'ee2019.contactUs_en', component: ee_contactUs_en, meta: { title: '2019 Private Equity & Exchange Conference - Contact us' } },
				{ path: '/ee2019/exhibitorsReg_en', name: 'ee2019.exhibitorsReg_en', component: ee_exhibitorsReg_en, meta: { title: '2019 Private Equity & Exchange Conference - Registration for Exhibition', requireAuth_en: true } },
				{ path: '/ee2019/addPer_en', name: 'ee2019.addPer_en', component: ee_addPer_en, meta: { title: '2019 Private Equity & Exchange Conference - Personnel Information', requireAuth_en: true } },
				{ path: '/ee2019/perList_en', name: 'ee2019.perList_en', component: ee_perList_en, meta: { title: '2019 Private Equity & Exchange Conference - Personnel List', requireAuth_en: true } },
				{ path: '/ee2019/subDetails_en', name: 'ee2019.subDetails_en', component: ee_subDetails_en, meta: { title: '2019 Private Equity & Exchange Conference - Registration details', requireAuth_en: true } },
				{ path: '/ee2019/meetingsTickets_en', name: 'ee2019.meetingsTickets_en', component: ee_meetingsTickets_en, meta: { title: '2019 Private Equity & Exchange Conference - Registration for the Conference', } },
				{ path: '/ee2019/sponsorReg_en', name: 'ee2019.sponsorReg_en', component: ee_sponsorReg_en, meta: { title: '2019 Private Equity & Exchange Conference - Sponsor registration', requireAuth_en: true } },
				{ path: '/ee2019/mediaReg_en', name: 'ee2019.mediaReg_en', component: ee_mediaReg_en, meta: { title: '2019 Private Equity & Exchange Conference - Media Registration', requireAuth_en: true } },
        { path: '/ee2019/ticketsCode_en', name: 'ee2019.ticketsCode_en', component: ee_ticketsCode_en, meta: { title: '2019 Private Equity & Exchange Conference - Admission ticket', requireAuth_en: true } },



			]
			//children是嵌套的部分
        },
        { path: '/ee2019/returnlog_en', name: 'ee2019.returnlog_en', component: ee_returnlog_en, meta: { requireAuth_en: true } },

        //民宿预订活动act2019041801
        { path: '/act/act2019041801', name: 'act.act2019041801', component: Act2019041801, meta: { title: '海棠花居预订' } },

        // 2.0网站
        {
            path: '/login',
            name: 'login',
            component: Login,
            meta: { title: '亚太金融小镇' },
            beforeEnter: (to, from, next) => {
                to.query['log'] = false;
                if (isDevice() == '微信浏览器') { //是否微信浏览器打开
                    to.query.log = true;
                    let url = location.search;
                    let theRequest = new Object();
                    let code = '',
                        apf_WX_OID = '',
                        apf_UID = '';
                    let toUrl = (to.query.returnUrl ? to.query.returnUrl : 'user/center'); //参数中有回跳页面跳转回去 否则跳转用户中心
                    if (url.indexOf("?") != -1) {
                        var str = url.substr(1);
                        str = str.split("&");
                        for (var i = 0; i < str.length; i++) {
                            theRequest[str[i].split("=")[0]] = unescape(str[i].split("=")[1]);
                        }
                    }
                    var url2 = 'http://m.apftown.com' + to.fullPath; //授权回跳地址
                    // 微信授权
                    if (theRequest.hasOwnProperty('code')) {
                        code = theRequest.code
                        if (theRequest.code == "''" || !theRequest.code || theRequest.code == 'undefined') {
                            location.href = 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=wxf22fa92a73f19465&redirect_uri=' +
                                encodeURIComponent(url2) + '&response_type=code&scope=snsapi_userinfo&state=STATE#wechat_redirect'
                        }
                    } else {
                        location.href = 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=wxf22fa92a73f19465&redirect_uri=' +
                            encodeURIComponent(url2) + '&response_type=code&scope=snsapi_userinfo&state=STATE#wechat_redirect'
                    }
                    // 同意授权成功存在code
                    if (code) {
                        if (getCookie('APF_WX_OID')) {
                            if (getCookie('APF_UID')) {
                                location.href = 'http://m.apftown.com' + toUrl;
                            } else {
                                Axios.post(URL + '/wap/login/wxLogin',
                                        qs.stringify({
                                            APF_WX_OID: apf_WX_OID || getCookie('APF_WX_OID'),
                                        })
                                    )
                                    .then(res => {
                                        if (res.data.success) {
                                            apf_UID = res.data.data;
                                            setCookie('APF_UID', res.data.data);
                                            setCookie('APF_WX_OID', apf_WX_OID);
                                            location.href = 'http://m.apftown.com' + toUrl;
                                        } else {
                                            if (res.data.errCode == '001006012') next();
                                        }
                                    })
                                    .catch(err => {
                                        console.log(err)
                                    })
                            }
                        } else { //获取wx_oid
                            Axios.post(URL + '/wx/wxOAuth2/openId',
                                    qs.stringify({
                                        code: code
                                    })
                                )
                                .then(res => {
                                    if (res.data.success) {
                                        apf_WX_OID = res.data.data.apf_WX_OID;
                                        setCookie('APF_WX_OID', apf_WX_OID);
                                        if (!res.data.data.apf_UID) {
                                            //登录注册
                                            next()
                                        } else {
                                            apf_UID = res.data.data.apf_UID;
                                            Axios.post(URL + '/wx/bindingUser',
                                                    qs.stringify({
                                                        APF_WX_OID: apf_WX_OID,
                                                        APF_UID: apf_UID
                                                    })
                                                )
                                                .then(res => {
                                                    if (res.data.success) {
                                                        console.log("binding");
                                                        setCookie('APF_UID', apf_UID);
                                                        setCookie('APF_WX_OID', apf_WX_OID);
                                                        location.href = 'http://m.apftown.com' + toUrl;
                                                    } else {

                                                    }
                                                })
                                                .catch(err => {
                                                    console.log(err)
                                                })

                                        }
                                    } else {
                                        //登录注册
                                        to.query.log = false;
                                        next()
                                    }
                                })
                                .catch(err => {
                                    console.log(err)
                                })
                        }
                    }

                } else {
                    next()
                }
            },
        },
        { path: '/introduce', name: 'introduce', component: Introduce, meta: { title: '简介' } },
        { path: '/service', name: 'service', component: Service, meta: { title: '服务' } },
        { path: '/contactUs', name: 'contactUs', component: ContactUs, meta: { title: '联系我们' } },
        // 企业入驻
        { path: '/EnterpriseEntry/01', name: 'enterpriseEntry.01', component: EnterpriseEntry01, meta: { title: '亚太金融小镇' } },
        { path: '/EnterpriseEntry/02', name: 'enterpriseEntry.02', component: EnterpriseEntry02, meta: { title: '亚太金融小镇' } },
        { path: '/EnterpriseEntry/03', name: 'enterpriseEntry.03', component: EnterpriseEntry03, meta: { title: '亚太金融小镇' } },
        // 产业服务
        { path: '/industry/01', name: 'industry.01', component: Industry01, meta: { title: '小镇优势' } },
        { path: '/industry/02', name: 'industry.02', component: Industry02, meta: { title: '金融支持' } },
        { path: '/industry/03', name: 'industry.03', component: Industry03, meta: { title: '注册流程' } },
        // 学习服务
        { path: '/study/01', name: 'study.01', component: Study01, meta: { title: '场地预定' } },
        { path: '/study/02', name: 'study.02', component: Study02, meta: { title: '金融培训' } },
        { path: '/study/03', name: 'study.03', component: Study03, meta: { title: '金融会议' } },
        // 研究服务
        { path: '/research/01', name: 'research.01', component: Research01, meta: { title: '研究成果' } },
        { path: '/research/02', name: 'research.02', component: Research02, meta: { title: '合作机构' } },
        { path: '/research/03', name: 'research.03', component: Research03, meta: { title: '金融专家' } },
        // 研究服务
        { path: '/park/01', name: 'park.01', component: Park01, meta: { title: '小镇住宿' } },
        { path: '/park/02', name: 'park.02', component: Park02, meta: { title: '办公物业' } },
        { path: '/park/03', name: 'park.03', component: Park03, meta: { title: '参观小镇' } },
        // 会员中心
        { path: '/user/center', name: 'user.center', component: Usercenter, meta: { title: '会员中心', requireAuth: false } },
        { path: '/user/bill', name: 'user.bill', component: Bill, meta: { title: '金元宝', requireAuth: true } },
        { path: '/user/paycode', name: 'user.paycode', component: Paycode, meta: { title: '金元宝支付', requireAuth: true } },
        { path: '/user/pay', name: 'user.pay', component: Pay, meta: { title: '金元宝核销', requireAuth: true } },
        { path: '/user/payresult', name: 'user.payresult', component: Payresult, meta: { title: '支付成功', requireAuth: true } },
        { path: '/user/trainingWorld', name: 'user.trainingWorld', component: Training_world, meta: { title: '培训天地', requireAuth: true } },
        { path: '/user/trainingDownload', name: 'user.trainingDownload', component: Training_download, meta: { title: '中国人民解放军总医院2019神经内镜高级研修班', requireAuth: true } },

        // 2.0_EN
        {
            path: '/login_en',
            name: 'login_en',
            component: Login_en,
            meta: { title: 'Asia-Pacific Financial Town' },
            beforeEnter: (to, from, next) => {
                to.query['log'] = false;
                if (isDevice() == '微信浏览器') { //是否微信浏览器打开
                    to.query.log = true;
                    let url = location.search;
                    let theRequest = new Object();
                    let code = '',
                        apf_WX_OID = '',
                        apf_UID = '';
                    let toUrl = (to.query.returnUrl ? to.query.returnUrl : 'user/center'); //参数中有回跳页面跳转回去 否则跳转用户中心
                    if (url.indexOf("?") != -1) {
                        var str = url.substr(1);
                        str = str.split("&");
                        for (var i = 0; i < str.length; i++) {
                            theRequest[str[i].split("=")[0]] = unescape(str[i].split("=")[1]);
                        }
                    }
                    var url2 = 'http://m.apftown.com' + to.fullPath; //授权回跳地址
                    // 微信授权
                    if (theRequest.hasOwnProperty('code')) {
                        code = theRequest.code
                        if (theRequest.code == "''" || !theRequest.code || theRequest.code == 'undefined') {
                            location.href = 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=wxf22fa92a73f19465&redirect_uri=' +
                                encodeURIComponent(url2) + '&response_type=code&scope=snsapi_userinfo&state=STATE#wechat_redirect'
                        }
                    } else {
                        location.href = 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=wxf22fa92a73f19465&redirect_uri=' +
                            encodeURIComponent(url2) + '&response_type=code&scope=snsapi_userinfo&state=STATE#wechat_redirect'
                    }
                    // 同意授权成功存在code
                    if (code) {
                        if (getCookie('APF_WX_OID')) {
                            if (getCookie('APF_UID')) {
                                location.href = 'http://m.apftown.com' + toUrl;
                            } else {
                                Axios.post(URL + '/wap/login/wxLogin',
                                        qs.stringify({
                                            APF_WX_OID: apf_WX_OID || getCookie('APF_WX_OID'),
                                        })
                                    )
                                    .then(res => {
                                        if (res.data.success) {
                                            apf_UID = res.data.data;
                                            setCookie('APF_UID', res.data.data);
                                            setCookie('APF_WX_OID', apf_WX_OID);
                                            location.href = 'http://m.apftown.com' + toUrl;
                                        } else {
                                            if (res.data.errCode == '001006012') next();
                                        }
                                    })
                                    .catch(err => {
                                        console.log(err)
                                    })
                            }
                        } else { //获取wx_oid
                            Axios.post(URL + '/wx/wxOAuth2/openId',
                                    qs.stringify({
                                        code: code
                                    })
                                )
                                .then(res => {
                                    if (res.data.success) {
                                        apf_WX_OID = res.data.data.apf_WX_OID;
                                        setCookie('APF_WX_OID', apf_WX_OID);
                                        if (!res.data.data.apf_UID) {
                                            //登录注册
                                            next()
                                        } else {
                                            apf_UID = res.data.data.apf_UID;
                                            Axios.post(URL + '/wx/bindingUser',
                                                    qs.stringify({
                                                        APF_WX_OID: apf_WX_OID,
                                                        APF_UID: apf_UID
                                                    })
                                                )
                                                .then(res => {
                                                    if (res.data.success) {
                                                        console.log("binding");
                                                        setCookie('APF_UID', apf_UID);
                                                        setCookie('APF_WX_OID', apf_WX_OID);
                                                        location.href = 'http://m.apftown.com' + toUrl;
                                                    } else {

                                                    }
                                                })
                                                .catch(err => {
                                                    console.log(err)
                                                })

                                        }
                                    } else {
                                        //登录注册
                                        to.query.log = false;
                                        next()
                                    }
                                })
                                .catch(err => {
                                    console.log(err)
                                })
                        }
                    }

                } else {
                    next()
                }
            },
        },
    ]
})
