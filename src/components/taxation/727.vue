<template>
	<div class="tc tc7">
		<tax-head7 :path="path"></tax-head7>
		<div class="content col-333">
			<div class="fs-12 lh-24">
				<div class="mb-5">
					<span class="fw-6 fs-15">偶然所得</span><br>
					偶然所得，是指个人得奖、中奖、中彩以及其他偶然性质的所得。但以下所得不能作为偶然所得<br>
					根据财税〔2007〕34号《财政部国家税务总局关于个人取得有奖发票奖金征免个人所得税问题的通知》规定：个人取得单张有奖发票奖金所得不超过800元（含800元）的，暂免征收个人所得税；个人取得单张有奖发票奖金所得超过800元的，应金额按照个人所得税法规定的“偶然所得”目征收个人所得税<br>
					根据国税发〔1994〕127号《国家税务总局关于社会福利有奖募捐发行收入税收问题的通知》: 对个人购买社会福利有奖募捐奖券一次中奖收入不超过10000元的暂免征收个人所得税，对一次中奖收入超过10000元的，应按税法规定全额征税<br>
					根据财税字〔1998〕12号《财政部国家税务总局关于个人取得体育彩票中奖所得征免个人所得税问题的通知》：对个人购买体育彩票中奖收入的所得税政策作如下调整：凡一次中奖收入不超过1万元的，暂免征收个人所得税；超过1万元的，应按税法规定全额征收个人所得税<br>
					根据财税〔2007〕102号《财政部国家税务总局关于企业向个人支付不竞争款项征收个人所得税问题的批复》：<br>
					不竞争款项是指资产购买方企业与资产出售方企业自然人股东之间在资产购买交易中，通过签订保密和不竞争协议等方式，约定资产出售方企业自然人股东在交易完成后一定期限内，承诺不从事有市场竞争的相关业务，并负有相关技术资料的保密义务，资产购买方企业则在约定期限内，按一定方式向资产出售方企业自然人股东所支付的款项。<br>
					根据《中华人民共和国个人所得税法》第二条第十一项有关规定，鉴于资产购买方企业向个人支付的不竞争款项，属于个人因偶然因素取得的一次性所得，为此，资产出售方企业自然人股东取得的所得，应按照《中华人民共和国个人所得税法》第二条第十项“偶然所得”项目计算缴纳个人所得税，税款由资产购买方企业在向资产出售方企业自然人股东支付不竞争款项时代扣代缴。
				</div>
				<p class="mb-30"><img src="../../../static/img/taxation/content/7/7-3-25.png" alt="" class="w100"></p>
			</div>
		</div>
	</div>
</template>

<script>
	import {
		wxShare
	} from '@/assets/commonjs/util.js';
	export default {
		data() {
			return {
				path: '/taxation/t728',
				url: window.location.href,
			}
		},
		mounted() {
			//wx-share
			var title = '亚太金融小镇基金税务流程及服务';
			var imgUrl = 'http://m.apftown.com/static/img/act/wx_share.jpg';
			var desc = '一键了解入驻自贸港基金所需办理税务流程与后续全方位服务';
			var golink = window.location.href;
			wxShare(this.$root.urlPath.NEW + '/wx/share', this.url, title, imgUrl, desc, golink);
		},
	}
</script>

<style>
	@import url('../../../static/css/taxation.css');
</style>
