(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{TP0X:function(n,e,r){"use strict";r.r(e);var a=r("CcnG"),t=function(){return function(){}}(),o=r("pMnS"),l=r("oveR"),i=r("hNGQ"),u=r("+dxm"),d=r("jIY6"),p=r("bl9C"),m=function(){function n(){this.columnDefs=[{headerName:"Name",field:"student_name"},{headerName:"Class",field:"class",editable:!0},{headerName:"Gender",field:"gender"},{headerName:"Aadhar",field:"aadhar"},{headerName:"Stnid",field:"stnid"},{headerName:"Section",field:"section"}],this.rowData=[]}return n.prototype.ngOnInit=function(){var n=this;fetch(p.a.API_ENDPOINT+"/students_ctrl.php/getall").then(function(n){return n.json()}).then(function(e){return n.rowData=e})},n}(),c=a["\u0275crt"]({encapsulation:0,styles:["",[""]],data:{animation:[{type:7,name:"routerTransition",definitions:[],options:{}}]}});function s(n){return a["\u0275vid"](0,[(n()(),a["\u0275eld"](0,16777216,null,null,4,"ag-grid-angular",[["class","ag-theme-fresh"],["style","width: 900px; height: 320px;"]],null,null,null,l.b,l.a)),a["\u0275prd"](512,null,i.AngularFrameworkOverrides,i.AngularFrameworkOverrides,[a.NgZone]),a["\u0275prd"](512,null,u.AngularFrameworkComponentWrapper,u.AngularFrameworkComponentWrapper,[]),a["\u0275did"](3,4898816,null,1,d.AgGridAngular,[a.ElementRef,a.ViewContainerRef,i.AngularFrameworkOverrides,u.AngularFrameworkComponentWrapper,a.ComponentFactoryResolver],{rowData:[0,"rowData"],columnDefs:[1,"columnDefs"],paginationPageSize:[2,"paginationPageSize"],enableSorting:[3,"enableSorting"],enableFilter:[4,"enableFilter"],pagination:[5,"pagination"]},null),a["\u0275qud"](603979776,1,{columns:1})],function(n,e){var r=e.component;n(e,3,0,r.rowData,r.columnDefs,10,!0,!0,!0)},null)}function f(n){return a["\u0275vid"](0,[(n()(),a["\u0275eld"](0,0,null,null,1,"app-tables",[],null,null,null,s,c)),a["\u0275did"](1,114688,null,0,m,[],null,null)],function(n,e){n(e,1,0)},null)}var g=a["\u0275ccf"]("app-tables",m,f,{},{},[]),h=r("Ip0R"),w=r("ZYCi"),v=function(){return function(){}}(),C=r("+Sv0"),b=r("SXLW");r.d(e,"TablesModuleNgFactory",function(){return A});var A=a["\u0275cmf"](t,[],function(n){return a["\u0275mod"]([a["\u0275mpd"](512,a.ComponentFactoryResolver,a["\u0275CodegenComponentFactoryResolver"],[[8,[o.a,g]],[3,a.ComponentFactoryResolver],a.NgModuleRef]),a["\u0275mpd"](4608,h.n,h.m,[a.LOCALE_ID,[2,h.C]]),a["\u0275mpd"](1073742336,h.b,h.b,[]),a["\u0275mpd"](1073742336,w.p,w.p,[[2,w.u],[2,w.l]]),a["\u0275mpd"](1073742336,v,v,[]),a["\u0275mpd"](1073742336,C.a,C.a,[]),a["\u0275mpd"](1073742336,b.AgGridModule,b.AgGridModule,[]),a["\u0275mpd"](1073742336,t,t,[]),a["\u0275mpd"](1024,w.j,function(){return[[{path:"",component:m}]]},[])])})}}]);