var PAGE_TYPE = 0;
var PAGE_TYPE_SUBPAGE = PAGE_TYPE++;
var PAGE_TYPE_LINK = PAGE_TYPE++;

var ToolboxConfig = {
	disc:"工具箱",
	tools:{
		muclog:{
			type: PAGE_TYPE_SUBPAGE,
			host: "http://d.easemob.com:3010",
			page: "muclog.html",
			desc: "MUC日志查询",
			active: true
		},
		msglog:{
			type: PAGE_TYPE_SUBPAGE,
			host: "http://123.56.92.91:1717/message",
			page: "msglog.html",
			desc: "消息记录查询"
		},
		cipage:{
			type: PAGE_TYPE_LINK,
			host: "",
			page: "http://ci-ali.easemob.com/",
			desc: "CI监控"
		},
		zabbix:{
			type: PAGE_TYPE_SUBPAGE,
			host: "",
			page: "http://123.56.207.23/zabbix",
			desc: "zabbix监控"
		},
		empty:{
			type: PAGE_TYPE_SUBPAGE,
			host:"",
			page:"empty.html",
			desc:"空白页"
		}
	}
}
