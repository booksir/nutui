/*! NutUI v1.2.9 Thu Jun 28 2018 17:03:52 GMT+0800 (CST) */
webpackJsonpnutui([31],{1043:function(t,n,e){(t.exports=e(1)()).push([t.i,"",""])},1185:function(t,n){t.exports={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("nut-docheader",{attrs:{name:t.$route.name,chName:t.$route.params.chnName,type:"Component",desc:"弹出面板，可自定义内容，通常作为基础组件被其他组件依赖。",showQrCode:!0}}),t._v(" "),e("h5",[t._v("示例")]),t._v(" "),e("h6",[t._v("footer含两个操作按钮")]),t._v(" "),e("nut-codebox",{attrs:{code:t.demo1,imgUrl:["../asset/img/demo/popup1.png"]}}),t._v(" "),e("h6",[t._v("footer仅有一个按钮")]),t._v(" "),e("nut-codebox",{attrs:{code:t.demo2,imgUrl:["../asset/img/demo/popup2.png"]}}),t._v(" "),e("h6",[t._v("header含有两个操作按钮")]),t._v(" "),e("nut-codebox",{attrs:{code:t.demo3,imgUrl:["../asset/img/demo/popup3.png"]}}),t._v(" "),e("h6",[t._v("仅含有关闭按钮")]),t._v(" "),e("nut-codebox",{attrs:{code:t.demo4,imgUrl:["../asset/img/demo/popup4.png"]}}),t._v(" "),e("h6",[t._v("默认示例")]),t._v(" "),e("nut-codebox",{attrs:{code:t.demo5,imgUrl:["../asset/img/demo/popup5.png"]}}),t._v(" "),e("nut-codebox",{attrs:{code:t.demo6}}),t._v(" "),e("h5",[t._v("Props")]),t._v(" "),t._m(0),t._v(" "),e("h5",[t._v("Events")]),t._v(" "),t._m(1)],1)},staticRenderFns:[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"tbl-wrapper"},[e("table",{staticClass:"u-full-width"},[e("thead",[e("tr",[e("th",[t._v("参数")]),t._v(" "),e("th",[t._v("说明")]),t._v(" "),e("th",[t._v("类型")]),t._v(" "),e("th",[t._v("默认值")]),t._v(" "),e("th",[t._v("可选值")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("popupVisible.sync")]),t._v(" "),e("td",[t._v("显示状态")]),t._v(" "),e("td",[t._v("Boolean")]),t._v(" "),e("td",[t._v("false")]),t._v(" "),e("td",[t._v("false/true")])]),t._v(" "),e("tr",[e("td",[t._v("configItems")]),t._v(" "),e("td",[t._v("配置项")]),t._v(" "),e("td",[t._v("Object")]),t._v(" "),e("td",[t._v("{}")]),t._v(" "),e("td",[t._v("--")])]),t._v(" "),e("tr",[e("td",[t._v("configItems.randomId")]),t._v(" "),e("td",[t._v("设置popup组件的顶层id")]),t._v(" "),e("td",[t._v("String")]),t._v(" "),e("td",[t._v("''")]),t._v(" "),e("td",[t._v("--")])]),t._v(" "),e("tr",[e("td",[t._v("configItems.autoClose")]),t._v(" "),e("td",[t._v("是否自动关闭蒙层（如果是，需要将popupVisible增加.sync修饰符）")]),t._v(" "),e("td",[t._v("Boolean")]),t._v(" "),e("td",[t._v("true")]),t._v(" "),e("td",[t._v("true/false")])]),t._v(" "),e("tr",[e("td",[t._v("configItems.popupHeaderVisible")]),t._v(" "),e("td",[t._v("是否显示头部")]),t._v(" "),e("td",[t._v("Boolean")]),t._v(" "),e("td",[t._v("true")]),t._v(" "),e("td",[t._v("true/false")])]),t._v(" "),e("tr",[e("td",[t._v("configItems.hasCloseBtn")]),t._v(" "),e("td",[t._v("是否有关闭按钮")]),t._v(" "),e("td",[t._v("Boolean")]),t._v(" "),e("td",[t._v("true")]),t._v(" "),e("td",[t._v("true/false")])]),t._v(" "),e("tr",[e("td",[t._v("configItems.cancelText")]),t._v(" "),e("td",[t._v("头部取消按钮文案")]),t._v(" "),e("td",[t._v("String")]),t._v(" "),e("td",[t._v("取消")]),t._v(" "),e("td",[t._v("--")])]),t._v(" "),e("tr",[e("td",[t._v("configItems.cancelClose")]),t._v(" "),e("td",[t._v("点击头部取消是否关闭面板")]),t._v(" "),e("td",[t._v("Boolean")]),t._v(" "),e("td",[t._v("true")]),t._v(" "),e("td",[t._v("true/false")])]),t._v(" "),e("tr",[e("td",[t._v("configItems.okText")]),t._v(" "),e("td",[t._v("头部确定按钮文案")]),t._v(" "),e("td",[t._v("String")]),t._v(" "),e("td",[t._v("确定")]),t._v(" "),e("td",[t._v("--")])]),t._v(" "),e("tr",[e("td",[t._v("configItems.popupFooterVisible")]),t._v(" "),e("td",[t._v("是否显示底部")]),t._v(" "),e("td",[t._v("Boolean")]),t._v(" "),e("td",[t._v("true")]),t._v(" "),e("td",[t._v("true/false")])]),t._v(" "),e("tr",[e("td",[t._v("configItems.btnAmount")]),t._v(" "),e("td",[t._v("底部展示按钮的数量")]),t._v(" "),e("td",[t._v("Number")]),t._v(" "),e("td",[t._v("2")]),t._v(" "),e("td",[t._v("2/1")])]),t._v(" "),e("tr",[e("td",[t._v("configItems.onlyOneBtnText")]),t._v(" "),e("td",[t._v("仅一个按钮文案")]),t._v(" "),e("td",[t._v("String")]),t._v(" "),e("td",[t._v("去购买")]),t._v(" "),e("td",[t._v("--")])]),t._v(" "),e("tr",[e("td",[t._v("configItems.cancelBtnText")]),t._v(" "),e("td",[t._v("底部取消按钮文案")]),t._v(" "),e("td",[t._v("String")]),t._v(" "),e("td",[t._v("取消")]),t._v(" "),e("td",[t._v("--")])]),t._v(" "),e("tr",[e("td",[t._v("configItems.cancelAutoClose")]),t._v(" "),e("td",[t._v("点击底部取消按钮是否关闭面板")]),t._v(" "),e("td",[t._v("Boolean")]),t._v(" "),e("td",[t._v("true")]),t._v(" "),e("td",[t._v("true/false")])]),t._v(" "),e("tr",[e("td",[t._v("configItems.okBtnText")]),t._v(" "),e("td",[t._v("底部确定按钮文案")]),t._v(" "),e("td",[t._v("String")]),t._v(" "),e("td",[t._v("确定")]),t._v(" "),e("td",[t._v("--")])])])])])},function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"tbl-wrapper"},[e("table",{staticClass:"u-full-width"},[e("thead",[e("tr",[e("th",[t._v("事件名")]),t._v(" "),e("th",[t._v("说明")]),t._v(" "),e("th",[t._v("回调参数")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("cancel-click")]),t._v(" "),e("td",[t._v("点击顶部取消按钮时触发")]),t._v(" "),e("td",[t._v("返回Event对象")])]),t._v(" "),e("tr",[e("td",[t._v("ok-click")]),t._v(" "),e("td",[t._v("点击顶部确定按钮时触发")]),t._v(" "),e("td",[t._v("返回Event对象")])]),t._v(" "),e("tr",[e("td",[t._v("onlyone-btn-click")]),t._v(" "),e("td",[t._v("点击底部仅有一个按钮时触发")]),t._v(" "),e("td",[t._v("返回Event对象")])]),t._v(" "),e("tr",[e("td",[t._v("cancel-btn-click")]),t._v(" "),e("td",[t._v("点击底部取消按钮时触发")]),t._v(" "),e("td",[t._v("返回Event对象")])]),t._v(" "),e("tr",[e("td",[t._v("ok-btn-click")]),t._v(" "),e("td",[t._v("点击底部取消按钮时触发")]),t._v(" "),e("td",[t._v("返回Event对象")])])])])])}]}},1252:function(t,n,e){var v=e(1043);"string"==typeof v&&(v=[[t.i,v,""]]),v.locals&&(t.exports=v.locals);e(3)("fbec4770",v,!0,{})},890:function(t,n,e){var v=e(2)(e(993),e(1185),function(t){e(1252)},null,null);t.exports=v.exports},993:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default={data:function(){return{demo1:'<nut-popup \n:popupVisible.sync="visible1" \n:configItems="popup[0]" \n@cancel-btn-click="cancelBtnFn" \n@ok-btn-click="okBtnFn" \n@close-popup="closeMask">\n</nut-popup>',demo2:'<nut-popup \n:popupVisible.sync="visible2" \n:configItems="popup[1]" \n@onlyone-btn-click="onlyOneBtnFn">\n</nut-popup>',demo3:'<nut-popup \n:popupVisible.sync="visible3" \n:configItems="popup[2]" \n@cancel-click="cancelFn" \n@ok-click="okFn">\n</nut-popup>',demo4:'<nut-popup \n:popupVisible.sync="visible4" \n:configItems="popup[3]">\n</nut-popup>',demo5:'<nut-popup \n:popupVisible.sync="visible5" \n:configItems="{}">\n</nut-popup>',demo6:"\nexport default {\n    data(){\n        return{\n          visible1: false,\n          visible2: false,\n          visible3: false,\n          visible4: false,\n          visible5: false,\n          popup: [\n            {\n              randomId: '0',\n              hasCloseBtn: true,\n              btnAmount: 2,\n              popupHeight: {\n                height: '100px'\n              },\n              cancelAutoClose: false\n            },\n            {\n              hasCloseBtn: true,\n              btnAmount: 1\n            },\n            {\n              hasCloseBtn: false,\n              popupFooterVisible: false\n            },\n            {\n              hasCloseBtn: true,\n              popupFooterVisible: false\n            }\n          ]\n        }\n    },\n    methods:{\n      popupDemo1() {\n        this.visible1 = true;\n      },\n      popupDemo2() {\n        this.visible2 = true;\n      },\n      popupDemo3() {\n        this.visible3 = true;\n      },\n      popupDemo4() {\n        this.visible4 = true;\n      },\n      popupDemo5() {\n        this.visible5 = true;\n      },\n      cancelBtnFn(e) {\n        console.log(e.target);\n      },\n      okBtnFn(e) {\n        console.log(e.target);\n      },\n      onlyOneBtnFn(e) {\n        console.log('onlyOneBtnFn')\n      },\n      cancelFn(e) { \n        console.log('cancelFn');\n      },\n      okFn(e) {\n        console.log('okFn');\n      },\n      closeMask(e) {\n        console.log('closePopup');\n        this.visible1 = false;\n      }\n    }\n}\n      "}}}}});