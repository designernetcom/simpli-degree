(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1800],{53076:function(A,e,r){Promise.resolve().then(r.t.bind(r,3645,23)),Promise.resolve().then(r.bind(r,3520)),Promise.resolve().then(r.bind(r,7051)),Promise.resolve().then(r.bind(r,22397)),Promise.resolve().then(r.bind(r,56909)),Promise.resolve().then(r.bind(r,66142)),Promise.resolve().then(r.bind(r,31064)),Promise.resolve().then(r.bind(r,84773)),Promise.resolve().then(r.t.bind(r,9771,23)),Promise.resolve().then(r.bind(r,84525)),Promise.resolve().then(r.t.bind(r,3651,23)),Promise.resolve().then(r.t.bind(r,71897,23)),Promise.resolve().then(r.t.bind(r,85481,23))},50292:function(A,e,r){"use strict";r.d(e,{w_:function(){return s}});var n=r(15082),o={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},a=n.createContext&&n.createContext(o),t=function(){return(t=Object.assign||function(A){for(var e,r=1,n=arguments.length;r<n;r++)for(var o in e=arguments[r])Object.prototype.hasOwnProperty.call(e,o)&&(A[o]=e[o]);return A}).apply(this,arguments)},i=function(A,e){var r={};for(var n in A)Object.prototype.hasOwnProperty.call(A,n)&&0>e.indexOf(n)&&(r[n]=A[n]);if(null!=A&&"function"==typeof Object.getOwnPropertySymbols)for(var o=0,n=Object.getOwnPropertySymbols(A);o<n.length;o++)0>e.indexOf(n[o])&&Object.prototype.propertyIsEnumerable.call(A,n[o])&&(r[n[o]]=A[n[o]]);return r};function s(A){return function(e){return n.createElement(l,t({attr:t({},A.attr)},e),function A(e){return e&&e.map(function(e,r){return n.createElement(e.tag,t({key:r},e.attr),A(e.child))})}(A.child))}}function l(A){var e=function(e){var r,o=A.attr,a=A.size,s=A.title,l=i(A,["attr","size","title"]),_=a||e.size||"1em";return e.className&&(r=e.className),A.className&&(r=(r?r+" ":"")+A.className),n.createElement("svg",t({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},e.attr,o,l,{className:r,style:t(t({color:A.color||e.color},e.style),A.style),height:_,width:_,xmlns:"http://www.w3.org/2000/svg"}),s&&n.createElement("title",null,s),A.children)};return void 0!==a?n.createElement(a.Consumer,null,function(A){return e(A)}):e(o)}},84773:function(A,e,r){"use strict";var n=r(76136),o=r(15082),a=r(8227),t=r.n(a),i=r(65257);e.default=()=>{let[A,e]=(0,o.useState)(null),r=r=>{e(A===r?null:r)};return(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)("div",{className:t().main,children:[(0,n.jsx)("h3",{className:t().heading,children:"FAQs"}),(0,n.jsx)("div",{className:t().faqMainContainer,children:[{Q:"What do I get by referring my friends?",A:"It is a great way to earn some extra money as you get a generous reward of INR 5,000 on your 1st referral, INR 6,000 on your 2nd and INR 7,000 on your third referral. This means you can earn up to INR 18,000; T&C apply. The amount may vary for different university courses. Furthermore, you can help your friend pursue quality education from the best university."},{Q:"Who can refer? Is there any criteria?",A:"This referral scheme is open to anyone who is looking for online education and has friends with the same goal."},{Q:"How should I refer? ",A:"Start by sharing your friend’s contact with us. When he/she successfully enrolls through your referral, they shall benefit from our premier courses. As a token of appreciation, you will receive INR 5,000 for your 1st referral, INR 6,000 on your 2nd and INR 7,000 on your third referral. The amount may vary for different university courses."},{Q:"How will I receive the reward?",A:"Once your referred friend is successfully enrolled in his/her chosen programme, you receive the reward money of INR 5,000 for 1st referral. If you have referred 3 friends and all have enrolled, you can earn up to INR 18,000 in reward. "},{Q:"Does my friend need a special coupon code? ",A:"No, your friend does not need a coupon code for you to earn the reward. You simply have to share your friend’s contact details. After their enrolment, you receive the reward money."}].map((e,o)=>(0,n.jsxs)("div",{children:[(0,n.jsxs)("div",{className:t().questionContainer,children:[(0,n.jsx)("div",{className:t().ques,children:e.Q}),(0,n.jsx)("div",{onClick:()=>r(o),className:t().accordionIcon,children:A===o?(0,n.jsx)(i.Vmf,{className:t().icon}):(0,n.jsx)(i.OId,{className:t().icon})})]}),A===o&&(0,n.jsx)("div",{className:t().ans,children:e.A})]},o))})]})})}},84525:function(A,e,r){"use strict";r.d(e,{default:function(){return u}});var n=r(76136),o=r(15082),a=r(49872),t=r.n(a),i=r(24218),s=r.n(i),l=r(32293),_=()=>{let[A,e]=(0,o.useState)(!1),[r,a]=(0,o.useState)(""),[t,i]=(0,o.useState)(!1),[_,c]=(0,o.useState)({name:"",phone:"",friendName:"",friendPhone:"",program:"",college:""}),[u,d]=(0,o.useState)({});(0,o.useEffect)(()=>{var A,e,r;let n,o;e=(A=document).createElement("script"),r=A.getElementsByTagName("script")[0],e.type="text/javascript",e.async=!0,e.src="https://hithunt.automateazy.com/api/v1/setCookie?clientAPI=AxBY5IRM7fL4f3MvLIN5wjfqBcrgW",r.parentNode.insertBefore(e,r),e.onload=()=>{"function"==typeof aztm&&aztm("send","pagevisit")},n=new URL(window.location.href),o={},n.searchParams.forEach((A,e)=>{e.startsWith("utm_")&&(o[e]=A)}),d(o)},[]);let h=async A=>{if(A.preventDefault(),t){a("⚠ already submitted");return}i(!0);let r=["name","friendName","phone","program","friendPhone","college"].filter(A=>!_[A]);if(r.length>0){a('Missing field "'.concat(r.join(", "),'"')),i(!1);return}if(10!==_.phone.length){a("Enter correct phone number"),i(!1);return}console.log(_,"data");let n={...u,name:_.friendName,phone:_.friendPhone,refer_user_name:_.name,refer_user_phone:_.phone,program:_.program,path:"/refer-and-earn",clg_id:_.college,lead_type:"CSL",source:(null==u?void 0:u.utm_source)?"".concat(u.utm_source,"_CAMPAIGN_REFERRAL"):"CAMPAIGN_REFERRAL",email:"unknown@gmail.com",state:"unknown"};try{(await fetch("https://learned-one-411711.wl.r.appspot.com/lead",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)})).ok?("function"==typeof aztm&&aztm("submitted",{event_name:"leadform_submitted",event_category:"CTA Button",event_value:{button_class:"leadform"}}),c({name:"",phone:"",program:"",college:"",friendName:"",friendPhone:""}),e(!0),setTimeout(()=>{e(!1),i(!1)},3e3)):alert("Error submitting the form. Please try again later.")}catch(A){console.error("Error submitting the form:",A),a("Error submitting the form. Please try again later.")}finally{i(!1)}},g=A=>{let{name:e,value:r}=A.target;c(A=>({...A,[e]:r})),a("")};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(l.Z,{toast:A,toastText:"Form submitted successfully!"}),(0,n.jsx)("div",{children:(0,n.jsxs)("form",{className:s().form,onSubmit:h,children:[(0,n.jsx)("input",{type:"text",placeholder:"Your Name*",name:"name",value:_.name,onChange:g}),(0,n.jsx)("br",{}),(0,n.jsx)("input",{type:"number",placeholder:"Your Phone Number*",name:"phone",value:_.phone,onChange:g}),(0,n.jsx)("br",{}),(0,n.jsx)("input",{type:"text",placeholder:"Friend's Name*",name:"friendName",value:_.friendName,onChange:g}),(0,n.jsx)("br",{}),(0,n.jsx)("input",{type:"number",placeholder:"Friend's Number*",name:"friendPhone",value:_.friendPhone,onChange:g}),(0,n.jsx)("br",{}),(0,n.jsxs)("select",{name:"program",value:_.program,onChange:g,children:[(0,n.jsx)("option",{value:"",children:"Choose a Program*"}),(0,n.jsx)("option",{value:"Online MBA",children:"Online MBA"}),(0,n.jsx)("option",{value:"Executive MBA",children:"Executive MBA"}),(0,n.jsx)("option",{value:"Online MCA",children:"Online MCA"}),(0,n.jsx)("option",{value:"Online MSC",children:"Online MSC"}),(0,n.jsx)("option",{value:"Online MCOM",children:"Online MCOM"}),(0,n.jsx)("option",{value:"Online MA",children:"Online MA"}),(0,n.jsx)("option",{value:"Online PGDM",children:"Online PGDM"}),(0,n.jsx)("option",{value:"Distance MEd",children:"Distance MEd"}),(0,n.jsx)("option",{value:"PG Diploma",children:"PG Diploma"}),(0,n.jsx)("option",{value:"Online BBA",children:"Online BBA"}),(0,n.jsx)("option",{value:"Online BCA",children:"Online BCA"}),(0,n.jsx)("option",{value:"Online BSC",children:"Online BSC"}),(0,n.jsx)("option",{value:"Online BCom",children:"Online BCom"}),(0,n.jsx)("option",{value:"Online BA",children:"Online BA"}),(0,n.jsx)("option",{value:"Distance BEd",children:"Distance BEd"}),(0,n.jsx)("option",{value:"IT Certifications",children:"IT Certifications"}),(0,n.jsx)("option",{value:"Help Me Decide",children:"Help Me Decide"})]}),(0,n.jsx)("br",{}),(0,n.jsxs)("select",{name:"college",value:_.college,onChange:g,children:[(0,n.jsx)("option",{value:"",children:"Choose a College*"}),(0,n.jsx)("option",{value:16074,children:"Amity University Online"}),(0,n.jsx)("option",{value:16070,children:"Online Manipal"}),(0,n.jsx)("option",{value:16087,children:"GLA University"}),(0,n.jsx)("option",{value:16092,children:"Uttaranchal University Online"}),(0,n.jsx)("option",{value:16110,children:"DY Patil University"}),(0,n.jsx)("option",{value:345,children:"IMT Ghaziabad"}),(0,n.jsx)("option",{value:16090,children:"Jain University Online"}),(0,n.jsx)("option",{value:16093,children:"Chandigarh University Online"}),(0,n.jsx)("option",{value:948,children:"UPES"}),(0,n.jsx)("option",{value:"0",children:"Help Me Decide"})]}),(0,n.jsx)("br",{}),r&&(0,n.jsx)("label",{className:s().toast,children:r}),(0,n.jsx)("button",{type:"submit",className:s().submit_btn,onClick:h,children:"Submit"})]})})]})},c=r(93350);function u(){return(0,n.jsxs)("div",{className:t().Refer_page_Hero__container,id:"home",children:[(0,n.jsxs)("div",{className:t().Refer_page_Hero__headingContainer,children:[(0,n.jsx)("h1",{className:t().Refer_page_Hero__heading,children:"INVITE, EMPOWER & EARN"}),(0,n.jsx)("p",{className:t().Refer_page_Hero__subheading,children:"Opportunity to Earn 18000 by Referring 3 Friends*"}),(0,n.jsxs)("p",{className:t().Refer_page_schbubble,children:[(0,n.jsx)("span",{className:t().Refer_page_schbubble_bub,children:"1st"})," Referral: INR 5,000"]}),(0,n.jsxs)("p",{className:t().Refer_page_schbubble,children:[(0,n.jsx)("span",{className:t().Refer_page_schbubble_bub,children:"2nd"})," Referral: INR 6,000"]}),(0,n.jsxs)("p",{className:t().Refer_page_schbubble,children:[(0,n.jsx)("span",{className:t().Refer_page_schbubble_bub,children:"3rd"})," Referral: INR 7,000"]}),(0,n.jsx)("p",{className:t().Refer_page_para,children:"*Bonus eligibility and amounts may vary depending on the university and specific courses. For detailed information, please connect with a counselor."})]}),(0,n.jsx)("div",{className:t().Refer_page_Hero__formContainer,children:(0,n.jsxs)("div",{className:t().form_section,children:[(0,n.jsx)("h3",{className:t().talk_heading,id:"form",children:"REFER & EARN"}),(0,n.jsx)("p",{className:t().exploreText,children:"Explore Earning Opportunities & Rewards"}),(0,n.jsx)("div",{className:t().importForm,children:(0,n.jsx)(_,{})}),(0,n.jsxs)("div",{className:t().secure,children:[(0,n.jsx)(c.kUi,{}),"\xa0Your personal information is secure with us"]})]})})]})}},32293:function(A,e,r){"use strict";var n=r(76136);r(30804),r(15082),e.Z=function(A){let{toast:e,toastText:r}=A;return(0,n.jsx)("div",{id:"snackbar",className:e?"show":void 0,children:r})}},30804:function(){},24218:function(A){A.exports={modal_overlay:"modal_modal_overlay__Bnnlt",modal:"modal_modal__kCLsl",close_button:"modal_close_button__rMYg2",join_popup:"modal_join_popup__viN5T",heading_container:"modal_heading_container__OVAD_",form:"modal_form__rPdTT",submit_btn:"modal_submit_btn__R0Nik",button__text:"modal_button__text__EHIm5",loading:"modal_loading__OqNBo","button-loading-spinner":"modal_button-loading-spinner__m4aBe",toast:"modal_toast__QMt1S",secure:"modal_secure__EudxL",thankxContainer:"modal_thankxContainer__CXoC7",thankyouText:"modal_thankyouText__U7LZg",call:"modal_call__qeeMp",phoneIVR:"modal_phoneIVR__5JkyH",enquireDetail:"modal_enquireDetail__jR_GN",downloadIcon:"modal_downloadIcon__ZOG3x",download:"modal_download__Kh1lu"}},8227:function(A){A.exports={main:"faq_main__DFzoz",heading:"faq_heading__hU6NN",faqMainContainer:"faq_faqMainContainer__O_dho",questionContainer:"faq_questionContainer__g5n0S",ques:"faq_ques__46iUC",ans:"faq_ans__EPvpD",accordionIcon:"faq_accordionIcon__zOfs_",icon:"faq_icon__FAE9l"}},9771:function(A){A.exports={About_page_support__bg:"howitworks_About_page_support__bg__nEc1m",About_page_support__row:"howitworks_About_page_support__row__xp1PM",About_page_support__column:"howitworks_About_page_support__column__Axp7r",About_page_support__heading:"howitworks_About_page_support__heading__ruEeH",About_page_support__subheading:"howitworks_About_page_support__subheading__6aPlL",About_page_support__cards:"howitworks_About_page_support__cards__UF44j",About_page_support__iconcard:"howitworks_About_page_support__iconcard__dVXFu",Support_singlecard_iconimage:"howitworks_Support_singlecard_iconimage__LRndJ",About_page_support__card:"howitworks_About_page_support__card__vZWmf",About_page_card__heading:"howitworks_About_page_card__heading__PM36Q",About_page_card__para:"howitworks_About_page_card__para__SiZlb"}},71897:function(A){A.exports={main:"howreferralworks_main__WT_xT",heading:"howreferralworks_heading__V1r4U",subHeading:"howreferralworks_subHeading__f4DzI",stepsContainer:"howreferralworks_stepsContainer__NNzvZ",stepIcon:"howreferralworks_stepIcon__S7TGX",spanStep:"howreferralworks_spanStep__O_a7J",stepNumber:"howreferralworks_stepNumber__yAWaG",line:"howreferralworks_line__EITns"}},49872:function(A){A.exports={Refer_page_Hero__container:"ReferHeroSection_Refer_page_Hero__container__sNdDX",bannerImage:"ReferHeroSection_bannerImage__6WouP",Refer_page_Hero__headingContainer:"ReferHeroSection_Refer_page_Hero__headingContainer__X5AcH",Refer_page_Hero__formContainer:"ReferHeroSection_Refer_page_Hero__formContainer__qvvTq",Refer_page_Hero__heading:"ReferHeroSection_Refer_page_Hero__heading__X71Ta",Refer_page_Hero__subheading:"ReferHeroSection_Refer_page_Hero__subheading___fRTh",Refer_page_schbubble:"ReferHeroSection_Refer_page_schbubble__GBD_z",Refer_page_schbubble_bub:"ReferHeroSection_Refer_page_schbubble_bub__UcMuS",form_section:"ReferHeroSection_form_section__95AbS",talk_heading:"ReferHeroSection_talk_heading__DDbU4",exploreText:"ReferHeroSection_exploreText__rmi66",secure:"ReferHeroSection_secure__EMj1w",importForm:"ReferHeroSection_importForm__lfEzb",Refer_page_para:"ReferHeroSection_Refer_page_para__CIx0l"}},3651:function(A){A.exports={container:"SliderCollege_container__paWKX",About_page_AboutSwiper__heading:"SliderCollege_About_page_AboutSwiper__heading__bNa1Y",slider:"SliderCollege_slider__5qm5c",slide_track:"SliderCollege_slide_track__Qu5RB",scroll:"SliderCollege_scroll__A9LOF","slide-track":"SliderCollege_slide-track__ojOva",slide:"SliderCollege_slide__T2V6X",slide_card_img:"SliderCollege_slide_card_img__Z5r_M"}},85481:function(A){A.exports={main:"whyrefer_main__hnwvB",heading:"whyrefer_heading__e4IEn",hightlightContainer:"whyrefer_hightlightContainer__COkho",highlightChild:"whyrefer_highlightChild__J7X3x",check:"whyrefer_check__Wrz0R",desc:"whyrefer_desc__Se_Fy",keyPoint:"whyrefer_keyPoint__qFg2d"}},3520:function(A,e,r){"use strict";r.r(e),e.default={src:"/_next/static/media/amity.b9905aaa.jpg",height:140,width:280,blurDataURL:"data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wgARCAAEAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAVAQEBAAAAAAAAAAAAAAAAAAAAAf/aAAwDAQACEAMQAAABrRH/xAAWEAADAAAAAAAAAAAAAAAAAAABAiH/2gAIAQEAAQUCCX//xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oACAEDAQE/AX//xAAWEQADAAAAAAAAAAAAAAAAAAAAATH/2gAIAQIBAT8BUP/EABcQAAMBAAAAAAAAAAAAAAAAAAACMpH/2gAIAQEABj8CptP/xAAXEAEAAwAAAAAAAAAAAAAAAAARAAFB/9oACAEBAAE/IQWiXH//2gAMAwEAAgADAAAAEPv/xAAWEQADAAAAAAAAAAAAAAAAAAAAATH/2gAIAQMBAT8QdP/EABURAQEAAAAAAAAAAAAAAAAAAAAx/9oACAECAQE/EIP/xAAaEAEAAQUAAAAAAAAAAAAAAAABEQAhMWFx/9oACAEBAAE/EDYpLkEu45qv/9k=",blurWidth:8,blurHeight:4}},7051:function(A,e,r){"use strict";r.r(e),e.default={src:"/_next/static/media/chandigarh.4a13babc.jpg",height:140,width:280,blurDataURL:"data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wgARCAAEAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUAQEAAAAAAAAAAAAAAAAAAAAB/9oADAMBAAIQAxAAAAGnA//EABYQAAMAAAAAAAAAAAAAAAAAAAIDIv/aAAgBAQABBQJYX//EABURAQEAAAAAAAAAAAAAAAAAAAAB/9oACAEDAQE/Aa//xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oACAECAQE/AX//xAAZEAABBQAAAAAAAAAAAAAAAAACAAESMlH/2gAIAQEABj8CJ5FbV//EABcQAQADAAAAAAAAAAAAAAAAACEAATH/2gAIAQEAAT8h2YixP//aAAwDAQACAAMAAAAQ/wD/xAAWEQEBAQAAAAAAAAAAAAAAAAABABH/2gAIAQMBAT8Qet//xAAVEQEBAAAAAAAAAAAAAAAAAAAAAf/aAAgBAgEBPxCP/8QAGRAAAgMBAAAAAAAAAAAAAAAAAREAIVFh/9oACAEBAAE/EEkmPuBxZP/Z",blurWidth:8,blurHeight:4}},22397:function(A,e,r){"use strict";r.r(e),e.default={src:"/_next/static/media/imt.afeae67a.jpg",height:140,width:280,blurDataURL:"data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wgARCAAEAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIQAxAAAAGwB//EABUQAQEAAAAAAAAAAAAAAAAAAAEA/9oACAEBAAEFAgv/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oACAEDAQE/AX//xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oACAECAQE/AX//xAAVEAEBAAAAAAAAAAAAAAAAAAAAMf/aAAgBAQAGPwKv/8QAFhAAAwAAAAAAAAAAAAAAAAAAABFB/9oACAEBAAE/IaMf/9oADAMBAAIAAwAAABAD/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAgBAwEBPxB//8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAgBAgEBPxB//8QAGBABAAMBAAAAAAAAAAAAAAAAAQARMSH/2gAIAQEAAT8QTb24vJ//2Q==",blurWidth:8,blurHeight:4}},56909:function(A,e,r){"use strict";r.r(e),e.default={src:"/_next/static/media/jain.7bb6c233.jpg",height:140,width:280,blurDataURL:"data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wgARCAAEAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIQAxAAAAGuB//EABYQAQEBAAAAAAAAAAAAAAAAAAECEf/aAAgBAQABBQIjH//EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQMBAT8Bf//EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQIBAT8Bf//EABYQAAMAAAAAAAAAAAAAAAAAAAACMv/aAAgBAQAGPwKmP//EABgQAAIDAAAAAAAAAAAAAAAAAAABESFh/9oACAEBAAE/IbCTGz//2gAMAwEAAgADAAAAEPP/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oACAEDAQE/EH//xAAVEQEBAAAAAAAAAAAAAAAAAAAAAf/aAAgBAgEBPxCv/8QAGRAAAgMBAAAAAAAAAAAAAAAAETEAASFR/9oACAEBAAE/EDe6W6fBP//Z",blurWidth:8,blurHeight:4}},66142:function(A,e,r){"use strict";r.r(e),e.default={src:"/_next/static/media/upes.fc06fe12.jpg",height:140,width:280,blurDataURL:"data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wgARCAAEAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIQAxAAAAGwB//EABUQAQEAAAAAAAAAAAAAAAAAABIh/9oACAEBAAEFAjf/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oACAEDAQE/AX//xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oACAECAQE/AX//xAAWEAADAAAAAAAAAAAAAAAAAAAAATH/2gAIAQEABj8CrP/EABYQAAMAAAAAAAAAAAAAAAAAAABBof/aAAgBAQABPyFlj//aAAwDAQACAAMAAAAQA//EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQMBAT8Qf//EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQIBAT8Qf//EABkQAAEFAAAAAAAAAAAAAAAAABEAATFRcf/aAAgBAQABPxBgtSIYv//Z",blurWidth:8,blurHeight:4}},31064:function(A,e,r){"use strict";r.r(e),e.default={src:"/_next/static/media/uttranchal.1eec47e1.jpg",height:140,width:280,blurDataURL:"data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wgARCAAEAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUAQEAAAAAAAAAAAAAAAAAAAAB/9oADAMBAAIQAxAAAAGrCf/EABUQAQEAAAAAAAAAAAAAAAAAABEi/9oACAEBAAEFAi//xAAVEQEBAAAAAAAAAAAAAAAAAAAAAf/aAAgBAwEBPwGP/8QAFREBAQAAAAAAAAAAAAAAAAAAAAH/2gAIAQIBAT8Br//EABYQAQEBAAAAAAAAAAAAAAAAADEAAf/aAAgBAQAGPwJ1v//EABcQAAMBAAAAAAAAAAAAAAAAAAARMSH/2gAIAQEAAT8hw9oZ/9oADAMBAAIAAwAAABAD/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAgBAwEBPxA//8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAgBAgEBPxA//8QAGBABAAMBAAAAAAAAAAAAAAAAAQAhcUH/2gAIAQEAAT8QWZXopmT/2Q==",blurWidth:8,blurHeight:4}}},function(A){A.O(0,[8292,4545,9432,4435,780,7035,3645,3784,2717,1744],function(){return A(A.s=53076)}),_N_E=A.O()}]);