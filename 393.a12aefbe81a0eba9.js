"use strict";(self.webpackChunkcontract=self.webpackChunkcontract||[]).push([[393],{3393:(w,m,r)=>{r.r(m),r.d(m,{TaskOneModule:()=>L});var p=r(9808),g=r(9525),t=r(5e3),s=r(7040),i=r(3075);const C=["\u0646","\u062b","\u0631","\u062e","\u062c","\u0633","\u062d"],_=["\u0645\u062d\u0631\u0645","\u0635\u0641\u0631","\u0631\u0628\u064a\u0639 \u0627\u0644\u0623\u0648\u0644","\u0631\u0628\u064a\u0639 \u0627\u0644\u0622\u062e\u0631","\u062c\u0645\u0627\u062f\u0649 \u0627\u0644\u0623\u0648\u0644\u0649","\u062c\u0645\u0627\u062f\u0649 \u0627\u0644\u0622\u062e\u0631\u0629","\u0631\u062c\u0628","\u0634\u0639\u0628\u0627\u0646","\u0631\u0645\u0636\u0627\u0646","\u0634\u0648\u0627\u0644","\u0630\u0648 \u0627\u0644\u0642\u0639\u062f\u0629","\u0630\u0648 \u0627\u0644\u062d\u062c\u0629"];let h=(()=>{class e extends s.wf{getMonthShortName(n){return _[n-1]}getMonthFullName(n){return _[n-1]}getWeekdayLabel(n){return C[n-1]}getDayAriaLabel(n){return`${n.day}-${n.month}-${n.year}`}}return e.\u0275fac=function(){let o;return function(a){return(o||(o=t.n5z(e)))(a||e)}}(),e.\u0275prov=t.Yz7({token:e,factory:e.\u0275fac}),e})(),f=(()=>{class e{constructor(n){this.calendar=n,this.modelChild=new t.vpe}selectToday(){this.model=this.calendar.getToday(),console.log(this.model)}ngOnInit(){}test(){console.log(this.model),this.modelChild.emit(this.model)}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(s.vL))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-higri-date"]],outputs:{modelChild:"modelChild"},features:[t._Bn([{provide:s.vL,useClass:s.dS},{provide:s.wf,useClass:h}])],decls:3,vars:2,consts:[[1,"d-flex","justify-content-center",2,"direction","ltr","text-align","left"],[1,"rtl",3,"ngModel","firstDayOfWeek","click","ngModelChange"],["dp",""]],template:function(n,a){1&n&&(t.TgZ(0,"div",0)(1,"ngb-datepicker",1,2),t.NdJ("click",function(){return a.test()})("ngModelChange",function(c){return a.model=c}),t.qZA()()),2&n&&(t.xp6(1),t.Q6J("ngModel",a.model)("firstDayOfWeek",7))},directives:[s.VL,i.JJ,i.On],styles:[""]}),e})();var d=r(7232);function x(e,o){if(1&e&&(t.TgZ(0,"span"),t._uU(1),t.ALo(2,"json"),t.qZA()),2&e){const n=t.oxw();t.xp6(1),t.hij(" ",t.lcZ(2,1,n.model)," ")}}const Z=function(e,o){return{right:e,left:o}};function k(e,o){if(1&e){const n=t.EpF();t.TgZ(0,"div",18)(1,"h4",19),t._uU(2),t.ALo(3,"translate"),t.qZA(),t.TgZ(4,"i",20),t.NdJ("click",function(){return t.CHM(n).$implicit.dismiss("Cross click")}),t.qZA()(),t.TgZ(5,"div",21)(6,"app-higri-date",22),t.NdJ("modelChild",function(l){return t.CHM(n),t.oxw().selectArabicDate(l)}),t.qZA()(),t.TgZ(7,"div",23)(8,"button",24),t.NdJ("click",function(){return t.CHM(n).$implicit.close()}),t._uU(9),t.ALo(10,"translate"),t.qZA()()}if(2&e){const n=t.oxw();t.xp6(2),t.hij("",t.lcZ(3,3,"test.identity-date")," "),t.xp6(2),t.Q6J("ngStyle",t.WLB(7,Z,"en"==n.currentLang?"20px":"auto","ar"==n.currentLang?"20px":"auto")),t.xp6(5),t.hij("",t.lcZ(10,5,"test.save")," ")}}function v(e,o){if(1&e){const n=t.EpF();t.TgZ(0,"div",18)(1,"h4",19),t._uU(2),t.ALo(3,"translate"),t.qZA(),t.TgZ(4,"i",20),t.NdJ("click",function(){return t.CHM(n).$implicit.dismiss("Cross click")}),t.qZA()(),t.TgZ(5,"div",21)(6,"div",25)(7,"ngb-datepicker",26,27),t.NdJ("ngModelChange",function(l){return t.CHM(n),t.oxw().model=l}),t.qZA()()(),t.TgZ(9,"div",23)(10,"button",24),t.NdJ("click",function(){return t.CHM(n).$implicit.close()}),t._uU(11),t.ALo(12,"translate"),t.qZA()()}if(2&e){const n=t.oxw();t.xp6(2),t.hij("",t.lcZ(3,4,"test.identity-date")," "),t.xp6(2),t.Q6J("ngStyle",t.WLB(8,Z,"en"==n.currentLang?"20px":"auto","ar"==n.currentLang?"20px":"auto")),t.xp6(3),t.Q6J("ngModel",n.model),t.xp6(4),t.hij(" ",t.lcZ(12,6,"test.save")," ")}}const A=[{path:"add-one",component:(()=>{class e{constructor(n,a){this.modalService=n,this.fb=a}selectArabicDate(n){this.model=n}ngOnInit(){}get currentLang(){return localStorage.getItem("lang")||"en"}open(n){this.modalService.open(n)}returnOwnersDataForm(){this.ownersDataForm=this.fb.group({})}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(s.FF),t.Y36(i.qu))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-task-one"]],decls:82,vars:52,consts:[[1,"container-fluid","task-one"],[1,"page-bg"],[1,"row","align-items-center"],[1,"page-title"],[1,"col-md-6","mb-3"],[1,"form-group"],["type","text",1,"form-control",3,"placeholder"],[1,"col-md-4","mb-3"],[1,"mb-2"],["for",""],[4,"ngIf"],[1,"btn","btn-sm","btn-outline-primary",3,"click"],[1,"mx-2"],[1,"d-flex","justify-content-end"],[1,"btn","btn-light"],[1,"btn","btn-primary"],["hijri",""],["en",""],[1,"modal-header"],["id","modal-basic-title",1,"modal-title"],[1,"fa-solid","fa-xmark",2,"position","absolute","top","20px","font-size","20px","cursor","pointer",3,"ngStyle","click"],[1,"modal-body"],[3,"modelChild"],[1,"modal-footer"],["type","button",1,"btn","btn-outline-dark",3,"click"],[1,"d-flex","justify-content-center",2,"direction","ltr","text-align","left"],[3,"ngModel","ngModelChange"],["dp",""]],template:function(n,a){if(1&n){const l=t.EpF();t.TgZ(0,"section",0)(1,"div",1)(2,"form",2)(3,"h2",3),t._uU(4),t.ALo(5,"translate"),t.qZA(),t.TgZ(6,"div",4)(7,"div",5),t._UZ(8,"input",6),t.ALo(9,"translate"),t.qZA()(),t.TgZ(10,"div",4)(11,"div",5),t._UZ(12,"input",6),t.ALo(13,"translate"),t.qZA()(),t.TgZ(14,"div",4)(15,"div",5),t._UZ(16,"input",6),t.ALo(17,"translate"),t.qZA()(),t.TgZ(18,"div",4)(19,"div",5),t._UZ(20,"input",6),t.ALo(21,"translate"),t.qZA()(),t.TgZ(22,"div",7)(23,"div",5),t._UZ(24,"input",6),t.ALo(25,"translate"),t.qZA()(),t.TgZ(26,"div",7)(27,"div",5)(28,"div",8)(29,"label",9),t._uU(30),t.ALo(31,"translate"),t.YNc(32,x,3,3,"span",10),t.qZA()(),t.TgZ(33,"button",11),t.NdJ("click",function(){t.CHM(l);const u=t.MAs(79);return a.open(u)}),t._uU(34,"Ar"),t.qZA(),t._UZ(35,"span",12),t.TgZ(36,"button",11),t.NdJ("click",function(){t.CHM(l);const u=t.MAs(81);return a.open(u)}),t._uU(37,"En"),t.qZA()()(),t.TgZ(38,"div",7)(39,"div",5),t._UZ(40,"input",6),t.ALo(41,"translate"),t.qZA()(),t.TgZ(42,"div",7)(43,"div",5),t._UZ(44,"input",6),t.ALo(45,"translate"),t.qZA()(),t.TgZ(46,"div",7)(47,"div",5),t._UZ(48,"input",6),t.ALo(49,"translate"),t.qZA()(),t.TgZ(50,"div",7)(51,"div",5),t._UZ(52,"input",6),t.ALo(53,"translate"),t.qZA()(),t.TgZ(54,"div",4)(55,"div",5),t._UZ(56,"input",6),t.ALo(57,"translate"),t.qZA()(),t.TgZ(58,"div",4)(59,"div",5),t._UZ(60,"input",6),t.ALo(61,"translate"),t.qZA()(),t.TgZ(62,"div",4)(63,"div",5),t._UZ(64,"input",6),t.ALo(65,"translate"),t.qZA()(),t.TgZ(66,"div",4)(67,"div",5),t._UZ(68,"input",6),t.ALo(69,"translate"),t.qZA()(),t.TgZ(70,"div",13)(71,"button",14),t._uU(72),t.ALo(73,"translate"),t.qZA(),t._UZ(74,"span",12),t.TgZ(75,"button",15),t._uU(76),t.ALo(77,"translate"),t.qZA()()()()(),t.YNc(78,k,11,10,"ng-template",null,16,t.W1O),t.YNc(80,v,13,11,"ng-template",null,17,t.W1O)}2&n&&(t.xp6(4),t.Oqu(t.lcZ(5,18,"test.owner-data")),t.xp6(4),t.s9C("placeholder",t.lcZ(9,20,"test.owner-code")),t.xp6(4),t.s9C("placeholder",t.lcZ(13,22,"test.owner-name")),t.xp6(4),t.s9C("placeholder",t.lcZ(17,24,"test.nationality")),t.xp6(4),t.s9C("placeholder",t.lcZ(21,26,"test.address")),t.xp6(4),t.s9C("placeholder",t.lcZ(25,28,"test.identity-number")),t.xp6(6),t.hij("",t.lcZ(31,30,"test.identity-date")," "),t.xp6(2),t.Q6J("ngIf","undefiend"!=a.model),t.xp6(8),t.s9C("placeholder",t.lcZ(41,32,"test.identity-source")),t.xp6(4),t.s9C("placeholder",t.lcZ(45,34,"test.mobile-mobile")),t.xp6(4),t.s9C("placeholder",t.lcZ(49,36,"test.phone-number")),t.xp6(4),t.s9C("placeholder",t.lcZ(53,38,"test.fax-number")),t.xp6(4),t.s9C("placeholder",t.lcZ(57,40,"test.contact-person")),t.xp6(4),t.s9C("placeholder",t.lcZ(61,42,"test.contact-person-number")),t.xp6(4),t.s9C("placeholder",t.lcZ(65,44,"test.account-number")),t.xp6(4),t.s9C("placeholder",t.lcZ(69,46,"test.bank-name")),t.xp6(4),t.Oqu(t.lcZ(73,48,"test.cancel")),t.xp6(4),t.Oqu(t.lcZ(77,50,"test.submit")))},directives:[i._Y,i.JL,i.F,p.O5,p.PC,f,s.VL,i.JJ,i.On],pipes:[d.X$,p.Ts],styles:[".task-one[_ngcontent-%COMP%]   .page-bg[_ngcontent-%COMP%]{border-radius:10px;background:white;padding:20px;box-shadow:0 10px 20px #00000030,0 6px 6px #0000003b}.task-one[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{padding:15px}.task-one[_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%]{font-size:20px;margin-bottom:20px}.task-one[_ngcontent-%COMP%]   .custom-breadcrumb[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{font-weight:500;color:#00000061}"]}),e})()},{path:"add-two",component:(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-task-two"]],decls:2,vars:0,template:function(n,a){1&n&&(t.TgZ(0,"p"),t._uU(1,"task-two works!"),t.qZA())},styles:[""]}),e})()},{path:"add-three",component:(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-task-three"]],decls:2,vars:0,template:function(n,a){1&n&&(t.TgZ(0,"p"),t._uU(1,"task-three works!"),t.qZA())},styles:[""]}),e})()}];let b=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[[g.Bz.forChild(A)],g.Bz]}),e})();var T=r(520),O=r(40);let y=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[[p.ez,d.aw.forChild({defaultLanguage:"en",loader:{provide:d.Zw,useFactory:M,deps:[T.eN]}})],d.aw]}),e})();function M(e){return new O.w(e,"./assets/i18n/",".json")}let L=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[[p.ez,b,s.M,s.bz,i.UX,i.u5,y,T.JF]]}),e})()}}]);