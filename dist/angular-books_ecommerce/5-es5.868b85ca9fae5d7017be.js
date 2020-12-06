!function(){function t(e,n){return(t=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(e,n)}function e(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var a,i=o(t);if(e){var r=o(this).constructor;a=Reflect.construct(i,arguments,r)}else a=i.apply(this,arguments);return n(this,a)}}function n(t,e){return!e||"object"!=typeof e&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function o(t){return(o=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function a(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function r(t,e,n){return e&&i(t.prototype,e),n&&i(t,n),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"0EKl":function(n,o,i){"use strict";i.r(o),i.d(o,"CatalogueModule",(function(){return ot}));var c,b=i("ofXK"),s=i("tyNb"),l=i("3Pt+"),u=i("fXoL"),p=i("kxps"),f=i("/t3+"),d=i("bTqV"),m=i("NFeN"),h=i("kmnG"),g=i("qFsG"),v=((c=function(){function t(e,n,o,i){a(this,t),this.formBuilder=e,this.bookManagament=n,this.route=o,this.router=i}return r(t,[{key:"ngOnInit",value:function(){var t=this.route.snapshot.paramMap.get("isbn");this.parameter=this.bookManagament.readBook(t),this.parameter?(this.new=!1,this.action="Modificar"):(this.new=!0,this.action="A\xf1adir"),this.buildForm()}},{key:"buildForm",value:function(){var t,e,n,o;this.new?(t="",e="",n="",o=0):(t=this.parameter.title,e=this.parameter.abstract,n=this.parameter.isbn,o=this.parameter.price),this.formGroup=this.formBuilder.group({title:[t,[l.m.required]],abstract:[e,[l.m.required]],isbn:[n,[l.m.required,l.m.minLength(10)]],price:[o,[l.m.required,this.validatePrice]]})}},{key:"validatePrice",value:function(t){console.log("Se esta validando el precio")}},{key:"getError",value:function(t){var e="",n=this.formGroup.get(t);return n.touched&&null!=n.errors&&(e=JSON.stringify(n.errors)),e}},{key:"onSubmit",value:function(){var t={title:this.formGroup.get("title").value,abstract:this.formGroup.get("abstract").value,isbn:this.formGroup.get("isbn").value,price:this.formGroup.get("price").value};this.new?(this.bookManagament.addbook(t),console.log("Se a\xf1ade un nuevo libro")):(this.bookManagament.modifyBook(this.parameter.isbn,t),console.log("Se modifica un libro existente")),this.router.navigate(["/catalogue"])}}]),t}()).\u0275fac=function(t){return new(t||c)(u.Lb(l.b),u.Lb(p.a),u.Lb(s.a),u.Lb(s.b))},c.\u0275cmp=u.Fb({type:c,selectors:[["app-add-modify"]],decls:32,vars:4,consts:[["color","primary"],[1,"toolbar"],["routerLink","/catalogue"],["mat-raised-button","","focusable","false"],[3,"formGroup","ngSubmit"],["matInput","","type","text","formControlName","title","placeholder","Angular 10"],["matInput","","type","text","formControlName","abstract","placeholder","Libro para desarrolladores sin experiencia en Angular..."],["matInput","","type","text","formControlName","isbn","placeholder","1985170280"],["matInput","","type","number","formControlName","price","placeholder","50.90"],["mat-raised-button","","focusable","false",3,"disabled"]],template:function(t,e){1&t&&(u.Rb(0,"section"),u.Rb(1,"header"),u.Rb(2,"mat-toolbar",0),u.Rb(3,"mat-toolbar-row"),u.Rb(4,"span"),u.vc(5),u.Qb(),u.Mb(6,"span",1),u.Rb(7,"a",2),u.Rb(8,"button",3),u.Rb(9,"mat-icon"),u.vc(10,"reply"),u.Qb(),u.Rb(11,"span"),u.vc(12,"Volver"),u.Qb(),u.Qb(),u.Qb(),u.Qb(),u.Qb(),u.Qb(),u.Rb(13,"form",4),u.Yb("ngSubmit",(function(){return e.onSubmit()})),u.Rb(14,"mat-form-field"),u.Rb(15,"mat-label"),u.vc(16,"T\xedtulo"),u.Qb(),u.Mb(17,"input",5),u.Qb(),u.Rb(18,"mat-form-field"),u.Rb(19,"mat-label"),u.vc(20,"Resumen"),u.Qb(),u.Mb(21,"input",6),u.Qb(),u.Rb(22,"mat-form-field"),u.Rb(23,"mat-label"),u.vc(24,"ISBN"),u.Qb(),u.Mb(25,"input",7),u.Qb(),u.Rb(26,"mat-form-field"),u.Rb(27,"mat-label"),u.vc(28,"Precio"),u.Qb(),u.Mb(29,"input",8),u.Qb(),u.Rb(30,"button",9),u.vc(31),u.Qb(),u.Qb(),u.Qb()),2&t&&(u.Ab(5),u.xc("",e.action," libro"),u.Ab(8),u.ic("formGroup",e.formGroup),u.Ab(17),u.ic("disabled",e.formGroup.invalid),u.Ab(1),u.wc(e.action))},directives:[f.a,f.c,s.c,d.a,m.a,l.n,l.h,l.d,h.b,h.e,g.a,l.a,l.g,l.c,l.k],styles:["form[_ngcontent-%COMP%]{margin:0 20px;border:1pt solid #000;border-radius:10px;background:#69f0ae;display:flex;flex-direction:column}.toolbar[_ngcontent-%COMP%]{flex:1 1 auto}mat-form-field[_ngcontent-%COMP%]{padding:10px 40px}section[_ngcontent-%COMP%]{background:#000;padding-bottom:10px}input[_ngcontent-%COMP%]{color:#000}header[_ngcontent-%COMP%]{margin-bottom:10px}mat-label[_ngcontent-%COMP%]{color:#000}"]}),c),y=i("+0xr"),R=i("M9IT"),Q=i("8LU1"),k=i("FKr1"),C=(i("FtGj"),i("XNiG"));i("VRyK"),i("R0Ic"),i("u47x");var w,M,O=Object(k.r)(Object(k.p)((function t(){a(this,t)}))),x=((w=function(n){!function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&t(e,n)}(i,n);var o=e(i);function i(){var t;return a(this,i),(t=o.apply(this,arguments)).sortables=new Map,t._stateChanges=new C.a,t.start="asc",t._direction="",t.sortChange=new u.o,t}return r(i,[{key:"register",value:function(t){this.sortables.set(t.id,t)}},{key:"deregister",value:function(t){this.sortables.delete(t.id)}},{key:"sort",value:function(t){this.active!=t.id?(this.active=t.id,this.direction=t.start?t.start:this.start):this.direction=this.getNextSortDirection(t),this.sortChange.emit({active:this.active,direction:this.direction})}},{key:"getNextSortDirection",value:function(t){if(!t)return"";var e,n,o,a=(e=t.start||this.start,n=null!=t.disableClear?t.disableClear:this.disableClear,o=["asc","desc"],"desc"==e&&o.reverse(),n||o.push(""),o),i=a.indexOf(this.direction)+1;return i>=a.length&&(i=0),a[i]}},{key:"ngOnInit",value:function(){this._markInitialized()}},{key:"ngOnChanges",value:function(){this._stateChanges.next()}},{key:"ngOnDestroy",value:function(){this._stateChanges.complete()}},{key:"direction",get:function(){return this._direction},set:function(t){this._direction=t}},{key:"disableClear",get:function(){return this._disableClear},set:function(t){this._disableClear=Object(Q.c)(t)}}]),i}(O)).\u0275fac=function(t){return S(t||w)},w.\u0275dir=u.Gb({type:w,selectors:[["","matSort",""]],hostAttrs:[1,"mat-sort"],inputs:{disabled:["matSortDisabled","disabled"],start:["matSortStart","start"],direction:["matSortDirection","direction"],disableClear:["matSortDisableClear","disableClear"],active:["matSortActive","active"]},outputs:{sortChange:"matSortChange"},exportAs:["matSort"],features:[u.xb,u.yb]}),w),S=u.Tb(x),P=i("d3UM"),_=i("lJxs"),A=i("UXun"),I=i("tk/3"),L=((M=function(){function t(e){a(this,t),this.httpClient=e,this.ratesApi="https://api.exchangeratesapi.io/latest?symbols=",this.rate=1}return r(t,[{key:"transform",value:function(t,e){return e?this.getCotizacionesOnline$(e).pipe(Object(_.a)((function(e){return t*e}))):(console.log("Se mantiene la moneda"),t)}},{key:"getCotizacionesOnline$",value:function(t){var e=this.ratesApi+t;return console.log("Se hace una conversion a "+t),this.httpClient.get(e).pipe(Object(A.a)(1),Object(_.a)((function(e){return e.rates[t]})))}}]),t}()).\u0275fac=function(t){return new(t||M)(u.Lb(I.a))},M.\u0275pipe=u.Kb({name:"exRate",type:M,pure:!0}),M);function j(t,e){if(1&t&&(u.Rb(0,"mat-option",22),u.vc(1),u.Qb()),2&t){var n=e.$implicit;u.ic("value",n),u.Ab(1),u.xc(" ",n," ")}}function D(t,e){1&t&&(u.Rb(0,"th",23),u.vc(1," ISBN "),u.Qb())}function T(t,e){if(1&t&&(u.Rb(0,"td",24),u.vc(1),u.Qb()),2&t){var n=e.$implicit;u.Ab(1),u.xc(" ",n.isbn," ")}}function B(t,e){1&t&&(u.Rb(0,"th",23),u.vc(1," T\xedtulo "),u.Qb())}function G(t,e){if(1&t&&(u.Rb(0,"td",24),u.vc(1),u.Qb()),2&t){var n=e.$implicit;u.Ab(1),u.xc(" ",n.title," ")}}function F(t,e){1&t&&(u.Rb(0,"th",23),u.vc(1,"Precio"),u.Qb())}function N(t,e){if(1&t&&(u.Rb(0,"span"),u.vc(1),u.dc(2,"number"),u.Qb()),2&t){var n=u.cc().$implicit,o=u.cc();u.Ab(1),u.yc(" ",u.fc(2,2,n.price,"1.0-0")," ",o.selectedType," ")}}function z(t,e){if(1&t&&(u.Rb(0,"span"),u.vc(1),u.dc(2,"number"),u.dc(3,"async"),u.dc(4,"exRate"),u.Qb()),2&t){var n=u.cc().$implicit,o=u.cc();u.Ab(1),u.yc(" ",u.fc(2,2,u.ec(3,5,u.fc(4,7,n.price,o.selectedType)),"1.0-0")," ",o.selectedType," ")}}function E(t,e){if(1&t&&(u.Rb(0,"td",24),u.uc(1,N,3,5,"span",25),u.uc(2,z,5,10,"span",25),u.Qb()),2&t){var n=u.cc();u.Ab(1),u.ic("ngIf","EUR"===n.selectedType),u.Ab(1),u.ic("ngIf","EUR"!==n.selectedType)}}function U(t,e){1&t&&(u.Rb(0,"th",23),u.vc(1," Acciones"),u.Qb())}function $(t,e){if(1&t){var n=u.Sb();u.Rb(0,"td",24),u.Rb(1,"div",26),u.Rb(2,"a",27),u.Rb(3,"button",28),u.Rb(4,"mat-icon"),u.vc(5,"visibility"),u.Qb(),u.Qb(),u.Qb(),u.Rb(6,"a",27),u.Rb(7,"button",29),u.Rb(8,"mat-icon"),u.vc(9,"edit"),u.Qb(),u.Qb(),u.Qb(),u.Rb(10,"button",30),u.Yb("click",(function(){u.oc(n);var t=e.$implicit;return u.cc().deleteBook(t.isbn)})),u.Rb(11,"mat-icon"),u.vc(12,"delete"),u.Qb(),u.Qb(),u.Qb(),u.Qb()}if(2&t){var o=e.$implicit;u.Ab(2),u.jc("routerLink","detail/",o.isbn,""),u.Ab(4),u.jc("routerLink","modify/",o.isbn,"")}}function q(t,e){1&t&&u.Mb(0,"tr",31)}function J(t,e){1&t&&u.Mb(0,"tr",32)}var K,V,X,Y,H=function(){return[5,10,25]},Z=((K=function(){function t(e){a(this,t),this.bookManagament=e,this.header=["isbn","title","price","actions"],this.refreshBookList()}return r(t,[{key:"ngOnInit",value:function(){this.moneyType=["EUR","USD","GBP"],this.selectedType="EUR",this.dataSource.filterPredicate=function(t,e){return console.log(t.isbn),t.isbn==e}}},{key:"ngAfterViewInit",value:function(){this.dataSource.paginator=this.paginator,this.dataSource.sort=this.sort}},{key:"applyFilter",value:function(t){var e=t.target.value;console.log(e),this.dataSource.filter=e.toString(),this.dataSource.paginator&&this.dataSource.paginator.firstPage()}},{key:"deleteBook",value:function(t){this.bookManagament.deleteBook(t),this.refreshBookList()}},{key:"refreshBookList",value:function(){this.booklist=this.bookManagament.readBookList(),this.dataSource=new y.k(this.booklist)}}]),t}()).\u0275fac=function(t){return new(t||K)(u.Lb(p.a))},K.\u0275cmp=u.Fb({type:K,selectors:[["app-catalogue"]],viewQuery:function(t,e){var n;1&t&&(u.zc(R.a,!0),u.zc(x,!0)),2&t&&(u.lc(n=u.Zb())&&(e.paginator=n.first),u.lc(n=u.Zb())&&(e.sort=n.first))},decls:41,vars:7,consts:[["color","primary"],[1,"toolbarRow1"],[1,"catalogue"],[1,"selectTypeMoney"],["appearance","fill",1,"selectType"],[3,"ngModel","ngModelChange"],[3,"value",4,"ngFor","ngForOf"],["routerLink","add"],["mat-raised-button","","focusable","false"],["matInput","","placeholder","Ejemplo: 1985170280",3,"keyup"],["input",""],[1,"mat-elevation-z8"],["mat-table","",1,"mat-elevation-z8",3,"dataSource"],["matColumnDef","isbn"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","title"],["matColumnDef","price"],["matColumnDef","actions"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],[3,"pageSizeOptions"],[3,"value"],["mat-header-cell",""],["mat-cell",""],[4,"ngIf"],[1,"actionButtons"],[3,"routerLink"],["mat-stroked-button","","color","primary","focusable","false"],["mat-stroked-button","","color","accent","focusable","false"],["mat-stroked-button","","color","warn","focusable","false",3,"click"],["mat-header-row",""],["mat-row",""]],template:function(t,e){1&t&&(u.Rb(0,"mat-toolbar",0),u.Rb(1,"mat-toolbar-row",1),u.Rb(2,"span"),u.vc(3,"Cat\xe1logo de libros"),u.Qb(),u.Mb(4,"span",2),u.Rb(5,"div",3),u.Rb(6,"mat-form-field",4),u.Rb(7,"mat-label"),u.vc(8,"Moneda actual:"),u.Qb(),u.Rb(9,"mat-select",5),u.Yb("ngModelChange",(function(t){return e.selectedType=t})),u.uc(10,j,2,2,"mat-option",6),u.Qb(),u.Qb(),u.Qb(),u.Mb(11,"span",2),u.Rb(12,"a",7),u.Rb(13,"button",8),u.Rb(14,"mat-icon"),u.vc(15,"add"),u.Qb(),u.Rb(16,"span"),u.vc(17,"A\xf1adir nuevo libro"),u.Qb(),u.Qb(),u.Qb(),u.Qb(),u.Rb(18,"mat-toolbar-row"),u.Rb(19,"mat-form-field"),u.Rb(20,"mat-label"),u.vc(21,"Filtrar por: ISBN"),u.Qb(),u.Rb(22,"input",9,10),u.Yb("keyup",(function(t){return e.applyFilter(t)})),u.Qb(),u.Qb(),u.Qb(),u.Qb(),u.Rb(24,"div",11),u.Rb(25,"table",12),u.Pb(26,13),u.uc(27,D,2,0,"th",14),u.uc(28,T,2,1,"td",15),u.Ob(),u.Pb(29,16),u.uc(30,B,2,0,"th",14),u.uc(31,G,2,1,"td",15),u.Ob(),u.Pb(32,17),u.uc(33,F,2,0,"th",14),u.uc(34,E,3,2,"td",15),u.Ob(),u.Pb(35,18),u.uc(36,U,2,0,"th",14),u.uc(37,$,13,2,"td",15),u.Ob(),u.uc(38,q,1,0,"tr",19),u.uc(39,J,1,0,"tr",20),u.Qb(),u.Mb(40,"mat-paginator",21),u.Qb()),2&t&&(u.Ab(9),u.ic("ngModel",e.selectedType),u.Ab(1),u.ic("ngForOf",e.moneyType),u.Ab(15),u.ic("dataSource",e.dataSource),u.Ab(13),u.ic("matHeaderRowDef",e.header),u.Ab(1),u.ic("matRowDefColumns",e.header),u.Ab(1),u.ic("pageSizeOptions",u.kc(6,H)))},directives:[f.a,f.c,h.b,h.e,P.a,l.g,l.j,b.k,s.c,d.a,m.a,g.a,y.j,y.c,y.e,y.b,y.g,y.i,R.a,k.h,y.d,y.a,b.l,y.f,y.h],pipes:[b.e,b.b,L],styles:["table[_ngcontent-%COMP%]{width:100%}.mat-form-field[_ngcontent-%COMP%]{font-size:14px;width:100%}td[_ngcontent-%COMP%], th[_ngcontent-%COMP%]{width:25%}.catalogue[_ngcontent-%COMP%]{flex:1 1 auto}.headertoolbar[_ngcontent-%COMP%]{box-shadow:10px 5px 5px #000}mat-toolbar[_ngcontent-%COMP%]{padding-top:10px}"]}),K),W=i("Wp6s"),tt=[{path:"",component:Z},{path:"add",component:v},{path:"modify/:isbn",component:v},{path:"detail/:isbn",component:(V=function(){function t(e,n){a(this,t),this.bookManagament=e,this.route=n}return r(t,[{key:"ngOnInit",value:function(){var t=this.route.snapshot.paramMap.get("isbn");this.book=this.bookManagament.readBook(t)}}]),t}(),V.\u0275fac=function(t){return new(t||V)(u.Lb(p.a),u.Lb(s.a))},V.\u0275cmp=u.Fb({type:V,selectors:[["app-detail"]],decls:35,vars:4,consts:[["color","primary"],[1,"toolbar"],["routerLink","/catalogue"],["mat-raised-button","","focusable","false"],[1,"title"],[1,"booktitle"],[1,"detail"],[1,"card","abstract"],[1,"card"],["mat-button","","color","accent"],["mat-button",""]],template:function(t,e){1&t&&(u.Rb(0,"mat-toolbar",0),u.Rb(1,"mat-toolbar-row"),u.Rb(2,"span"),u.vc(3,"Detalle del libro"),u.Qb(),u.Mb(4,"span",1),u.Rb(5,"a",2),u.Rb(6,"button",3),u.Rb(7,"mat-icon"),u.vc(8,"reply"),u.Qb(),u.Rb(9,"span"),u.vc(10,"Volver"),u.Qb(),u.Qb(),u.Qb(),u.Qb(),u.Rb(11,"mat-toolbar-row"),u.Mb(12,"span",4),u.Rb(13,"span",5),u.vc(14),u.Qb(),u.Qb(),u.Qb(),u.Rb(15,"section",6),u.Rb(16,"mat-card",7),u.Rb(17,"mat-card-content"),u.Rb(18,"p"),u.vc(19),u.Qb(),u.Qb(),u.Qb(),u.Rb(20,"mat-card",8),u.Rb(21,"mat-card-content"),u.Rb(22,"p"),u.vc(23," ISBN: "),u.Qb(),u.Rb(24,"p"),u.vc(25),u.Qb(),u.Rb(26,"p"),u.vc(27," Precio: "),u.Qb(),u.Rb(28,"p"),u.vc(29),u.Qb(),u.Qb(),u.Rb(30,"mat-card-actions"),u.Rb(31,"button",9),u.vc(32,"Comprar"),u.Qb(),u.Rb(33,"button",10),u.vc(34,"Compartir"),u.Qb(),u.Qb(),u.Qb(),u.Qb()),2&t&&(u.Ab(14),u.wc(e.book.title),u.Ab(5),u.xc(" ",e.book.abstract," "),u.Ab(6),u.xc(" ",e.book.isbn," "),u.Ab(4),u.xc(" ",e.book.price," EUR "))},directives:[f.a,f.c,s.c,d.a,m.a,W.a,W.c,W.b],styles:[".booktitle[_ngcontent-%COMP%]{font-size:20px}.title[_ngcontent-%COMP%]{flex:0.5 1 auto}.toolbar[_ngcontent-%COMP%]{flex:1 1 auto;padding:0 10px}.card[_ngcontent-%COMP%]{max-width:1000px;margin:10px}.abstract[_ngcontent-%COMP%]{width:70%}.detail[_ngcontent-%COMP%]{display:flex;flex-direction:row}.rowToolbar1[_ngcontent-%COMP%]{margin-top:20px}"]}),V)}],et=((X=function t(){a(this,t)}).\u0275mod=u.Jb({type:X}),X.\u0275inj=u.Ib({factory:function(t){return new(t||X)},imports:[[s.d.forChild(tt)],s.d]}),X),nt=i("hctd"),ot=((Y=function t(){a(this,t)}).\u0275mod=u.Jb({type:Y}),Y.\u0275inj=u.Ib({factory:function(t){return new(t||Y)},imports:[[b.c,et,nt.a,l.l]]}),Y)}}])}();