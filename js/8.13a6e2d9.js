(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[8],{5499:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("q-dialog",{attrs:{persistent:""},model:{value:e.OpenModalFicha,callback:function(t){e.OpenModalFicha=t},expression:"OpenModalFicha"}},[a("q-card",{staticStyle:{width:"400px"}},[a("q-card-section",{staticClass:"row items-center"},[a("div",{staticClass:"text-h6"},[e._v("Editar Ficha")]),a("q-space"),a("q-btn",{attrs:{icon:"close",flat:"",round:"",dense:""},on:{click:function(t){return e.closeModal()}}})],1),e.paciente?a("q-card-section",{staticClass:"q-pt-none"},[a("div",{staticClass:"q-pt-none"},[a("div",{staticClass:"q-col-gutter-md row"},[a("div",{staticClass:"col-12"},[a("q-input",{attrs:{dense:"",outlined:"",label:"Nome"},model:{value:e.paciente.name,callback:function(t){e.$set(e.paciente,"name",t)},expression:"paciente.name"}})],1),a("div",{staticClass:"col-6"},[a("q-input",{attrs:{dense:"",outlined:"",label:"CPF",mask:"###.###.###-##"},model:{value:e.paciente.cpf,callback:function(t){e.$set(e.paciente,"cpf",t)},expression:"paciente.cpf"}})],1),a("div",{staticClass:"col-6"},[a("q-input",{directives:[{name:"mask",rawName:"v-mask",value:["(##)####-####","(##)#####-####"],expression:"['(##)####-####', '(##)#####-####']"}],attrs:{dense:"",outlined:"",label:"Telefone"},model:{value:e.paciente.phone,callback:function(t){e.$set(e.paciente,"phone",t)},expression:"paciente.phone"}})],1),a("div",{staticClass:"col-12"},[a("q-input",{attrs:{dense:"",outlined:"",label:"Pasta"},model:{value:e.paciente.externalFile,callback:function(t){e.$set(e.paciente,"externalFile",t)},expression:"paciente.externalFile"}})],1)])])]):e._e(),e.paciente?a("q-card-actions",{attrs:{align:"right"}},[a("div",{staticClass:"q-ma-sm q-gutter-xs"},[a("q-btn",{attrs:{"no-caps":"",loading:e.loadingMorto,dense:"",outline:"",color:e.paciente.active?"negative":"warning",label:e.paciente.active?"Editar e desativar":"Editar e reativar"},on:{click:function(t){return e.arquivoMorto(e.paciente.active)}},scopedSlots:e._u([{key:"loading",fn:function(){return[a("q-spinner",{attrs:{color:"primary",size:".8em"}})]},proxy:!0}],null,!1,1493926367)}),a("q-btn",{attrs:{"no-caps":"",loading:e.loadingSaving,dense:"",outline:"",color:"positive",label:"Editar"},on:{click:e.editFicha},scopedSlots:e._u([{key:"loading",fn:function(){return[a("q-spinner",{attrs:{color:"primary",size:".8em"}})]},proxy:!0}],null,!1,1493926367)})],1)]):a("q-card-section",{staticStyle:{height:"300px"}}),a("q-inner-loading",{attrs:{showing:e.loadingFicha}},[a("q-spinner",{attrs:{color:"primary",size:"3em"}}),a("p",{staticClass:"q-mt-md"},[e._v("Trazendo informações do usuário...")])],1)],1)],1)},i=[],o=(a("b0c0"),a("d3b7"),a("e6cf"),a("a79d"),a("3a60")),s={name:"modalShowUser",props:{OpenModal:{type:Boolean,default:!1}},directives:{mask:o["mask"]},data:function(){return{loadingFicha:!1,loadingSaving:!1,loadingMorto:!1,paciente:null}},methods:{editFicha:function(){var e=this;this.loadingSaving=!0;var t={name:this.paciente.name,phone:this.paciente.phone,cpf:this.paciente.cpf,externalFile:this.paciente.externalFile};this.$axios.put("patients/"+this.paciente.id,t).then((function(t){t.data.success&&(e.$q.notify({message:t.data.message,color:"green",position:"top-right"}),e.$emit("repaginate"))})).catch((function(t){e.$q.notify({message:t.response.data.message,color:"red",position:"top-right"})})).finally((function(){e.loadingSaving=!1,e.closeModal()}))},arquivoMorto:function(e){var t=this;this.$q.dialog({title:this.paciente.name,message:e?"Tem certeza que deseja mandar esta ficha ao Arquivo Morto?":"Tem certeza que deseja reativar esta ficha?",cancel:"Cancelar",persistent:!0}).onOk((function(){t.$q.loading.show()})).onOk((function(){t.loadingMorto=!0;var a={name:t.paciente.name,phone:t.paciente.phone,cpf:t.paciente.cpf,externalFile:t.paciente.externalFile,active:!e};t.$axios.put("patients/"+t.paciente.id,a).then((function(e){e.data.success&&(t.$q.notify({message:e.data.message,color:"green",position:"top-right"}),t.$emit("repaginate"))})).catch((function(e){t.$q.notify({message:e.response.data.message,color:"red",position:"top-right"})})).finally((function(){t.loadingMorto=!1,t.closeModal()}))})).onCancel((function(){t.$q.loading.hide()})).onDismiss((function(){t.$q.loading.hide()}))},getFicha:function(){var e=this;this.loadingFicha=!0,this.$axios.get("/patients/"+this.patientId).then((function(t){t.data.success&&(e.paciente=t.data.user)})).finally((function(){e.loadingFicha=!1}))},closeModal:function(){this.$emit("closeModal"),this.paciente=null,this.$store.commit("forms/setSelectedUserId",null)}},computed:{OpenModalFicha:{get:function(){return this.OpenModal}},patientId:{get:function(){return this.$store.getters["forms/getSelectedUserId"]},set:function(e){this.$store.commit("forms/setSelectedUserId",e)}}},mounted:function(){this.getFicha()}},c=s,l=a("2877"),r=a("24e8"),d=a("f09f"),p=a("a370"),u=a("2c91"),h=a("9c40"),f=a("27f9"),m=a("4b7e"),g=a("0d59"),v=a("74f7"),q=a("eebe"),x=a.n(q),$=Object(l["a"])(c,n,i,!1,null,"7f5762d5",null);t["default"]=$.exports;x()($,"components",{QDialog:r["a"],QCard:d["a"],QCardSection:p["a"],QSpace:u["a"],QBtn:h["a"],QInput:f["a"],QCardActions:m["a"],QSpinner:g["a"],QInnerLoading:v["a"]})}}]);