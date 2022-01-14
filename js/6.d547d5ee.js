(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[6],{"051b":function(e,s,t){"use strict";t.r(s);var a=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"q-col-gutter-md row q-ma-xs"},[t("div",{staticClass:"col-12"},[t("q-table",{attrs:{title:"Usuários",data:e.users,columns:e.columns,"row-key":"name","no-data-label":"Nenhum usuário encontrado",pagination:{rowsPerPage:0}},scopedSlots:e._u([{key:"top",fn:function(){return[t("div",{staticClass:"q-table__control"},[t("div",{staticClass:"q-table__title"},[e._v("\n            Usuários\n            "),t("p",{staticClass:"text-caption"},[e._v("Mostrando "+e._s(e.users.length)+" de "+e._s(e.pagination.count)+" "+e._s(e.pagination.count>1?"usuários":"usuário")+".")]),t("p",[t("q-btn",{staticClass:"text-grey-8 q-pr-xs",staticStyle:{border:"1px dashed rgba(0, 0, 0, 0.12)"},attrs:{label:"Novo Usuário",icon:"add",flat:"",dense:"",disable:!0,"no-caps":"","no-wrap":""}})],1)])]),t("q-space"),t("q-btn",{staticClass:"q-ml-md",attrs:{flat:"","no-caps":"","no-wrap":"",color:"accent",label:e.label}},[t("q-menu",[t("q-list",{staticStyle:{"min-width":"100px"}},e._l(e.options,(function(s,a){return t("q-item",{directives:[{name:"close-popup",rawName:"v-close-popup"}],key:"group-option-"+a,class:{"bg-secondary":e.label===s.label},attrs:{clickable:""},on:{click:function(t){return e.changeFilter(s)}}},[t("q-item-section",[e._v(e._s(s.label))])],1)})),1)],1)],1)]},proxy:!0},{key:"body",fn:function(s){return[t("q-tr",{staticClass:"cursor-pointer",attrs:{props:s},on:{click:function(t){return e.openUsuario(s.row.id)}}},[t("q-td",[e._v("\n            "+e._s(s.row.id)+"\n          ")]),t("q-td",[t("q-icon",{attrs:{name:"circle",color:e.checkColor(s.row.active),size:"20px"}},[t("q-tooltip",{attrs:{anchor:e.$q.screen.lt.md?"top middle":"bottom middle",self:e.$q.screen.lt.md?"bottom middle":"top middle","content-style":"font-size: 12px",offset:[10,10],"content-class":"bg-grey-8"}},[e._v(e._s(s.row.active?"Usuário Ativo":"Usuário Inativo"))])],1)],1),t("q-td",[e._v("\n            "+e._s(s.row.name)+"\n          ")]),t("q-td",[e._v("\n            "+e._s(s.row.email)+"\n          ")]),t("q-td",[e._v("\n            "+e._s(s.row.cpf)+"\n          ")]),t("q-td",[e._v("\n            "+e._s(e.moment(s.row.createdAt).format("DD/MM/YYYY HH:mm")+"h")+"\n          ")])],1)]}},{key:"bottom",fn:function(){return[t("div")]},proxy:!0}])}),e.OpenModalUser?t("modal-show-usuario",{ref:"showUsuario",attrs:{OpenModal:e.OpenModalUser},on:{closeModal:function(s){e.OpenModalUser=!1},repaginate:function(s){e.resetPagination(),e.getUsers()}}}):e._e()],1)])},n=[],o=(t("e260"),t("d3b7"),t("e6cf"),t("3ca3"),t("ddb0"),t("b0c0"),t("a79d"),t("99af"),{name:"Users",meta:{title:"Cadastra-Re",titleTemplate:function(e){return"".concat(e," - Usuários")}},components:{modalShowUsuario:function(){return Promise.all([t.e(0),t.e(9)]).then(t.bind(null,"e996"))}},data:function(){return{OpenModalUser:!1,filterConfirmed:!0,users:[],columns:[{name:"id",label:"ID",align:"left",field:function(e){return e.id},format:function(e){return"".concat(e)},sortable:!0},{name:"active",label:"Ativo",align:"left",field:function(e){return e.active},format:function(e){return"".concat(e)},sortable:!0},{name:"name",label:"Nome",align:"left",field:function(e){return e.name},format:function(e){return"".concat(e)},sortable:!0},{name:"email",label:"E-mail",align:"left",field:function(e){return e.email},format:function(e){return"".concat(e)},sortable:!0},{name:"cpf",label:"CPF",align:"left",field:function(e){return e.cpf},format:function(e){return"".concat(e)},sortable:!0},{name:"createdAt",label:"Data de Criação",align:"left",field:function(e){return e.createdAt},format:function(e){return"".concat(e)},sortable:!0}],pagination:{count:0,limit:20,nextPage:!0,offset:0,page:0},label:"Usuários do sistema",options:[{label:"Usuários do sistema",value:!0},{label:"Cadastros pendentes",value:null},{label:"Cadastros recusados",value:!1}],moment:null}},computed:{userId:{get:function(){return this.$store.getters["users/getSelectedUserId"]},set:function(e){this.$store.commit("users/setSelectedUserId",e)}}},methods:{checkColor:function(e){return!0===e?"positive":"negative"},getUsers:function(){var e=this;this.pagination.nextPage&&(this.$q.loading.show(),this.$axios.get("/users",{params:{page:++this.pagination.page,confirmed:this.filterConfirmed}}).then((function(s){s.data.success&&(e.users=e.users.concat(s.data.users),e.pagination=s.data.pagination)})).finally((function(){e.$q.loading.hide()})))},openUsuario:function(e){this.userId=e,this.OpenModalUser=!0},resetPagination:function(){this.pagination={count:0,limit:20,nextPage:!0,offset:0,page:0},this.users=[]},changeFilter:function(e){this.label=e.label,this.filterConfirmed=e.value,this.resetPagination(),this.getUsers()},handleScroll:function(){window.innerHeight+window.scrollY>=document.body.offsetHeight&&this.getUsers()}},created:function(){this.moment=t("c1df"),this.moment.locale("pt-BR")},mounted:function(){window.addEventListener("scroll",this.handleScroll),this.resetPagination(),this.getUsers()},beforeRouteLeave:function(e,s,t){window.removeEventListener("scroll",this.handleScroll),t()}}),c=o,r=t("2877"),i=t("eaac"),l=t("9c40"),d=t("2c91"),f=t("ddd8"),u=t("4e73"),b=t("1c1c"),j=t("66e5"),m=t("4074"),p=t("bd08"),h=t("db86"),g=t("0016"),v=t("05c0"),k=t("7f67"),w=t("eebe"),y=t.n(w),_=Object(r["a"])(c,a,n,!1,null,null,null);s["default"]=_.exports;y()(_,"components",{QTable:i["a"],QBtn:l["a"],QSpace:d["a"],QSelect:f["a"],QMenu:u["a"],QList:b["a"],QItem:j["a"],QItemSection:m["a"],QTr:p["a"],QTd:h["a"],QIcon:g["a"],QTooltip:v["a"]}),y()(_,"directives",{ClosePopup:k["a"]})},4678:function(e,s,t){var a={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn-bd":"9686","./bn-bd.js":"9686","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-mx":"b5b7","./es-mx.js":"b5b7","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df48","./fa.js":"8df48","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b46","./gd.js":"f6b46","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tk":"5aff","./tk.js":"5aff","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function n(e){var s=o(e);return t(s)}function o(e){if(!t.o(a,e)){var s=new Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}return a[e]}n.keys=function(){return Object.keys(a)},n.resolve=o,e.exports=n,n.id="4678"}}]);