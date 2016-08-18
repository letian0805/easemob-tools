var PAGE_TYPE = 0;
var PAGE_TYPE_SUBPAGE = PAGE_TYPE++;
var PAGE_TYPE_LINK = PAGE_TYPE++;

var ToolboxConfig = {
	disc:"工具箱",
	tools:{
		/*
		empty:{
			type: PAGE_TYPE_SUBPAGE,
			host:"",
			page:"/empty.html",
			desc:"空白页"
		},
		*/
		muclog:{
			type: PAGE_TYPE_SUBPAGE,
			rest: "http://d.easemob.com:3010",
			page: "/muclog.html",
			desc: "MUC日志查询",
			active: true
		},
		msglog:{
			type: PAGE_TYPE_SUBPAGE,
			rest: "http://localhost:1234",
			page: "/msglog.html",
			desc: "消息记录查询"
		},
		cipage:{
			type: PAGE_TYPE_LINK,
			page: "http://ci-ali.easemob.com/",
			desc: "CI监控"
		},
		zabbix:{
			type: PAGE_TYPE_SUBPAGE,
			page: "/zabbix.html",
			desc: "zabbix监控"
		},
		health:{
			type: PAGE_TYPE_SUBPAGE,
			page:"http://123.57.141.188:52580/",
			desc:"健康检查"
		},
		webim:{
			type: PAGE_TYPE_SUBPAGE,
			page: "/webim.html",
			desc: "webim"
		},
		kafka:{
			type: PAGE_TYPE_SUBPAGE,
			page:"http://182.92.99.106/",
			desc:"kafka监控"
		},
		grafana:{
			type: PAGE_TYPE_SUBPAGE,
			page:"http://grafana.op.easemob.com:10000/grafana/#/dashboard/db/easemob",
			desc:"grafana"
		},
		elk:{
			type: PAGE_TYPE_SUBPAGE,
			page: "http://54.67.55.145/app/kibana",
			desc: "ELK"
		}
	}
}
