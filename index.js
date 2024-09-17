// window.onload = function() {
//   document.getElementById('main-content').innerHTML = 'Hello, github pages :)'
// }


const { createApp } = Vue
createApp({

	data(){
		return {
			questions:['我感到每天都在朝自己的目标迈进',
			'有麻烦的时候，我通常能想到一些应付的方法',
			'一些技能（比如跑步、演讲、写作），即使我再努力，也不会学得多好',
			'我认为逆境有时候是对成长的一种帮助',
			'当一个有难度的工作需要人做时，我不希望那人是我',
			'我不喜欢所有新鲜且经常变化的事',
			'无论是什么事情，一旦开始了我就会坚持下去直至完成',
			'我觉得与结果相比，做一件事的过程更能够帮助人成长',
			'当得知一个坏消息时，我的情绪通常会比其他人更激烈',
			'我经常试图摆脱脑海中一些不必要的想法',
			'我总是需要克制自己想要一直休闲、娱乐、放松的欲望',
			'失败总是让我在相当长一段时间内感到气馁',
			'我在工作或学习时，脑子里常会想到其他不相干的事情',
			'我常常能在自己所做的事情中找到乐趣',
			'当被迫在压力下工作时，我感到心烦意乱又极不情愿',
			'当碰到一个没有把握解决的难题时，我会非常兴奋、快乐',
			'我知道自己现在是为了什么而努力',
			'我相信自己能有效应对任何生活中突发的意外',
			'不管我所做的事成绩好坏，我都从不怀疑自己的学习能力',
			'经历挫折后我一般会变得更加成熟和有经验',
			'我不喜欢做那些我不知道能否顺利完成的事',
			'我不喜欢在不熟悉的环境中做事',
			'我喜欢那种需要全力以赴才能完成的工作',
			'不管一件事的结果如何，我相信自己在过程中付出的努力是不会白费的',
			'每次有情绪波动的时候，我都能第一时间觉察',
			'我常常试着不去想、也不和人讨论让我烦恼的事情',
			'我经常得抵抗美食的诱惑',
			'我一般要过很久才能忘记不愉快的事情',
			'我在工作或学习时，对周围的动静比如有人说话和倒水听得很清楚',
			'只要是能获得满足感的工作，哪怕没有报酬我也愿意做',
			'面对压力时，我会思考自己做了什么事情要承受这些',
			'面对的事越困难，我越能集中自己的全部精力去面对'],


			options:['完全不符','不太符合','一般','比较符合','完全符合'],
			chose:[0,0,0,0,0,0,0,0,
				   0,0,0,0,0,0,0,0,
				   0,0,0,0,0,0,0,0,
				   0,0,0,0,0,0,0,0],
			text:'无',
		}

	},
	methods:{

		makechose(index,cid){

			this.chose[index] = cid;
			this.text = '改变了';
	}
}


}).mount("#main-content")

