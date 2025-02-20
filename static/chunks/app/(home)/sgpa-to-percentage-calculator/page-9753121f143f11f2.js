(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1849],{94873:function(e,t,a){Promise.resolve().then(a.bind(a,15070)),Promise.resolve().then(a.bind(a,28275))},58149:function(e,t,a){"use strict";a.d(t,{default:function(){return s.a}});var n=a(50821),s=a.n(n)},24911:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"RouterContext",{enumerable:!0,get:function(){return n}});let n=a(50390)._(a(15082)).default.createContext(null)},50292:function(e,t,a){"use strict";a.d(t,{w_:function(){return l}});var n=a(15082),s={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},r=n.createContext&&n.createContext(s),o=function(){return(o=Object.assign||function(e){for(var t,a=1,n=arguments.length;a<n;a++)for(var s in t=arguments[a])Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s]);return e}).apply(this,arguments)},c=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&0>t.indexOf(n)&&(a[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var s=0,n=Object.getOwnPropertySymbols(e);s<n.length;s++)0>t.indexOf(n[s])&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(a[n[s]]=e[n[s]]);return a};function l(e){return function(t){return n.createElement(i,o({attr:o({},e.attr)},t),function e(t){return t&&t.map(function(t,a){return n.createElement(t.tag,o({key:a},t.attr),e(t.child))})}(e.child))}}function i(e){var t=function(t){var a,s=e.attr,r=e.size,l=e.title,i=c(e,["attr","size","title"]),d=r||t.size||"1em";return t.className&&(a=t.className),e.className&&(a=(a?a+" ":"")+e.className),n.createElement("svg",o({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,s,i,{className:a,style:o(o({color:e.color||t.color},t.style),e.style),height:d,width:d,xmlns:"http://www.w3.org/2000/svg"}),l&&n.createElement("title",null,l),e.children)};return void 0!==r?n.createElement(r.Consumer,null,function(e){return t(e)}):t(s)}},15070:function(e,t,a){"use strict";a.d(t,{default:function(){return u}});var n=a(76136),s=a(15082),r=a(18752),o=a.n(r),c=a(58149),l=a(68271),i=a(61203),d=a.n(i),_=()=>{let[e,t]=(0,s.useState)(0);return(0,n.jsxs)("div",{className:d().container,children:[(0,n.jsx)("h2",{className:d().title,children:"Frequently Asked Questions"}),[{question:"What is the use of SGPA to Percentage Converter?",answer:"If you are planning to study abroad then you might need the SGPA to percentage calculator. You need your academic marks in percentage form in various situations such as applying for educational loans, scholarships, or admission in colleges."},{question:"How to convert the SGPA into CGPA?",answer:"You can calculate your CGPA by following these steps:\n• Add up your SGPA scores.\n• Divide the total by the number of semesters"},{question:"What is the highest SGPA?",answer:"The SGPA is measured on the lowest scale from 0.00 to the highest scale of 10.00, it shows the student's performance."},{question:"What is 7.5 SGPA in Percentage?",answer:"If you use the SGPA calculator, you will find out that 7.5 SGPA is equal to 67.50%."},{question:"Is 9 SGPA Good in Engineering?",answer:"In engineering, if you get 8 or above SGPA that is considered good."}].map((a,s)=>(0,n.jsxs)("div",{className:"".concat(d().accordionItem," ").concat(e===s?d().accordionItemOpen:d().accordionItemClosed),children:[(0,n.jsxs)("button",{className:"".concat(d().button," ").concat(e===s?d().buttonOpen:d().buttonClosed),onClick:()=>t(e===s?null:s),children:[(0,n.jsx)("span",{className:d().question,children:a.question}),(0,n.jsx)(l.NWQ,{className:"".concat(d().icon," ").concat(e===s?d().iconOpen:""),size:20})]}),(0,n.jsx)("div",{className:"".concat(d().content," ").concat(e===s?d().contentOpen:d().contentClosed),children:(0,n.jsx)("div",{className:"".concat(d().answerWrapper," ").concat(e===s?d().answerWrapperOpen:d().answerWrapperClosed),children:(0,n.jsx)("p",{className:d().answer,children:a.answer})})})]},s))]})},u=()=>{let[e,t]=(0,s.useState)(""),[a,r]=(0,s.useState)(""),[i,d]=(0,s.useState)(!1);return(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)("div",{className:o().SGPACalculator__content_container,children:[(0,n.jsxs)("div",{className:o().SGPACalculator__content_container__row,children:[(0,n.jsx)("h2",{className:o().SGPACalculator__content_container__calheading,children:"SGPA to Percentage Calculator"}),(0,n.jsxs)("div",{id:"converter",className:o().sgpaconverter,children:[(0,n.jsx)("div",{children:(0,n.jsx)("label",{htmlFor:"sgpa",className:o().sgpalabel,children:(0,n.jsx)("b",{children:"Enter your SGPA:"})})}),(0,n.jsx)("div",{children:(0,n.jsx)("input",{type:"number",id:"sgpa",placeholder:"Enter SGPA",value:e,onChange:e=>t(e.target.value),className:o().sgpainput,required:!0})}),(0,n.jsx)("div",{children:(0,n.jsx)("button",{onClick:()=>{let t=parseFloat(e);isNaN(t)?r("Please enter a valid SGPA."):(r("".concat((10*t-7.5).toFixed(2),"%")),d(!0))},className:o().sgpabutton,children:"Convert"})})]}),i&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("br",{}),(0,n.jsxs)("p",{id:"result",className:o().sgparesult,children:["Your Percentage is: ",a]}),(0,n.jsx)("div",{className:o().note,children:"Note: Some universities have their own criteria to calculate the SGPA. Please also refer to the respective college website."})]})]}),(0,n.jsxs)("div",{className:o().SGPACalculator__content_container__textrow,children:[(0,n.jsx)("h2",{className:o().SGPACalculator__content_container__heading,children:"What Exactly is SGPA to Percentage Calculator?"}),(0,n.jsx)("p",{className:o().SGPACalculator__content_container__para,children:"A calculator is a tool that we use for calculating numbers and getting some quick results. Talking about SGPA to Percentage Calculator, it is a calculator which is designed to simply convert your SGPA scores to Percentage scores. Individuals who are seeking higher education opportunities or are looking for a job often require these calculators."}),(0,n.jsx)("h2",{className:o().SGPACalculator__content_container__heading,children:"What is SGPA?"}),(0,n.jsx)("p",{className:o().SGPACalculator__content_container__para,children:"Many universities use some specific grading parameter to give a grade scale to their students, these parameters are known as SGPA (Semester Grade Point Average). It is not very common to use this system. However, many of the institutions are inculcating it in their respective grading system. This calculator mainly helps the students to understand their grades better and compare them with others."}),(0,n.jsxs)("p",{className:o().SGPACalculator__content_container__para,children:[(0,n.jsx)("strong",{children:"Also Read: "})," ",(0,n.jsx)(c.default,{href:"/blog/top-10-online-distance-pg-courses-in-india",children:"Top 10 Post-Graduation Courses For Career Boost!"})]}),(0,n.jsxs)("div",{className:o().gradingSystemContainer,children:[(0,n.jsx)("h2",{className:o().SGPACalculator__content_container__heading,children:"Elements of SGPA"}),(0,n.jsxs)("div",{className:o().infocardscontainer,children:[(0,n.jsxs)("div",{className:o().gradingInfoCard,children:[(0,n.jsx)("div",{className:o().iconWrapper,children:(0,n.jsx)(l.Mp$,{className:o().icon})}),(0,n.jsxs)("div",{className:o().cardContent,children:[(0,n.jsx)("h3",{className:o().cardHeading,children:"Semester"}),(0,n.jsx)("p",{className:o().cardText,children:"The time period of a semester is 6 months. Institutions have done this categorisation for an easy and better understanding of the grading system for students."})]})]}),(0,n.jsxs)("div",{className:o().gradingInfoCard,children:[(0,n.jsx)("div",{className:o().iconWrapper,children:(0,n.jsx)(l.QJe,{className:o().icon})}),(0,n.jsxs)("div",{className:o().cardContent,children:[(0,n.jsx)("h3",{className:o().cardHeading,children:"Grades"}),(0,n.jsx)("p",{className:o().cardText,children:"This one is very obvious! There are the grades which show your performance for each subject that you have studied. These points are assigned a numerical value based on your institution’s grading scale."})]})]}),(0,n.jsxs)("div",{className:o().gradingInfoCard,children:[(0,n.jsx)("div",{className:o().iconWrapper,children:(0,n.jsx)(l.qyc,{className:o().icon})}),(0,n.jsxs)("div",{className:o().cardContent,children:[(0,n.jsx)("h3",{className:o().cardHeading,children:"Credit Hours"}),(0,n.jsx)("p",{className:o().cardText,children:"Each subject you have taken comes with a specific number of credit hours that reflects the time and effort expected for that course."})]})]}),(0,n.jsxs)("div",{className:o().gradingInfoCard,children:[(0,n.jsx)("div",{className:o().iconWrapper,children:(0,n.jsx)(l.T_s,{className:o().icon})}),(0,n.jsxs)("div",{className:o().cardContent,children:[(0,n.jsx)("h3",{className:o().cardHeading,children:"Grade Points"}),(0,n.jsx)("p",{className:o().cardText,children:"You have to multiply the grade value by credit hour to get the grade point for that subject."})]})]})]})]}),(0,n.jsx)("h2",{className:o().SGPACalculator__content_container__heading,children:"How to Calculate Your SGPA?"}),(0,n.jsx)("p",{className:o().cardText,children:"You will get some certain credit points for each subject that you pursued during a particular semester. You can calculate your SGPA for that particular semester by following some easy steps."}),(0,n.jsxs)("ul",{className:o().SGPACalculator__content_container__ul,children:[(0,n.jsxs)("li",{className:o().SGPACalculator__content_container__li,children:[(0,n.jsx)("span",{className:o().SGPACalculator__tick,children:"☑"}),"First of all, you have to note down your credit points which are mentioned in your performance sheet."]}),(0,n.jsxs)("li",{className:o().SGPACalculator__content_container__li,children:[(0,n.jsx)("span",{className:o().SGPACalculator__tick,children:"☑"}),"Then multiply each subject’s credit points by its own grade."]}),(0,n.jsxs)("li",{className:o().SGPACalculator__content_container__li,children:[(0,n.jsx)("span",{className:o().SGPACalculator__tick,children:"☑"}),"Next step, you have to add all the results of multiplication for each subject."]}),(0,n.jsxs)("li",{className:o().SGPACalculator__content_container__li,children:[(0,n.jsx)("span",{className:o().SGPACalculator__tick,children:"☑"}),"Then add all the credit points for each subject."]}),(0,n.jsxs)("li",{className:o().SGPACalculator__content_container__li,children:[(0,n.jsx)("span",{className:o().SGPACalculator__tick,children:"☑"}),"You have to consider this step carefully. You have to divide the sum from step 3 by the sum of step 4."]}),(0,n.jsxs)("li",{className:o().SGPACalculator__content_container__li,children:[(0,n.jsx)("span",{className:o().SGPACalculator__tick,children:"☑"}),"The value you have, is your final SGPA."]})]}),(0,n.jsx)("h2",{className:o().SGPACalculator__content_container__heading,children:"Example of Calculation:"}),(0,n.jsx)("table",{className:o().SGPACalculator__table,children:(0,n.jsxs)("tbody",{children:[(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{children:"Subject"}),(0,n.jsx)("th",{children:"Credit Point"}),(0,n.jsx)("th",{children:"Grade"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"Mathematics"}),(0,n.jsx)("td",{children:"4"}),(0,n.jsx)("td",{children:"10"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"English"}),(0,n.jsx)("td",{children:"3"}),(0,n.jsx)("td",{children:"9"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"Science"}),(0,n.jsx)("td",{children:"5"}),(0,n.jsx)("td",{children:"8"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"History"}),(0,n.jsx)("td",{children:"2"}),(0,n.jsx)("td",{children:"7"})]})]})}),(0,n.jsx)("h2",{className:o().SGPACalculator__content_container__heading,children:"Follow these steps for the calculations:"}),(0,n.jsxs)("ul",{className:o().stepsList,children:[(0,n.jsxs)("li",{className:o().step,children:[(0,n.jsx)("span",{className:o().stepNumber,children:"Step 1:"})," First note down the credit points for each subject – 4, 3, 5, 2."]}),(0,n.jsxs)("li",{className:o().step,children:[(0,n.jsx)("span",{className:o().stepNumber,children:"Step 2:"})," Then you have to multiply the credit point of each subject by its grade:",(0,n.jsxs)("ul",{className:o().subStep,children:[(0,n.jsx)("li",{children:"For Mathematics: 4 x 10 = 40"}),(0,n.jsx)("li",{children:"For English: 3 x 9 = 27"}),(0,n.jsx)("li",{children:"For Science: 5 x 8 = 40"}),(0,n.jsx)("li",{children:"For History: 2 x 7 = 14"})]})]}),(0,n.jsxs)("li",{className:o().step,children:[(0,n.jsx)("span",{className:o().stepNumber,children:"Step 3:"})," You need to add the results of multiplications for each subject: 40 + 27 + 40 + 14 = 121."]}),(0,n.jsxs)("li",{className:o().step,children:[(0,n.jsx)("span",{className:o().stepNumber,children:"Step 4:"})," Then add all the credit points for each subject: 4 + 3 + 5 + 2 = 14."]}),(0,n.jsxs)("li",{className:o().step,children:[(0,n.jsx)("span",{className:o().stepNumber,children:"Step 5:"})," Now you have to divide the total from Step 3 by the total from Step 4: 121/14 ≈ 8.64."]}),(0,n.jsxs)("li",{className:o().step,children:[(0,n.jsx)("span",{className:o().stepNumber,children:"Step 6:"})," The result is approx. 8.64. You can consider this as the final outcome."]})]}),(0,n.jsx)("h2",{className:o().SGPACalculator__content_container__heading,children:"SGPA Calculation Formula: Converting Grade Points to Credit Points"}),(0,n.jsx)("p",{className:o().SGPACalculator__content_container__para,children:"If you are seeking higher education opportunities or are looking for a job, you must have come across certain eligibility conditions wherein they must require a certain minimum percentage of marks during your graduation and postgraduation degree. Therefore, it is very important to convert your SGPA into percentage to get a clear picture of your future scope and to evaluate whether or not you are eligible for the career path your want to pursue. Luckily, there is a very simple formula that you can use to convert your SGPA into percentage!"}),(0,n.jsx)("p",{className:o().SGPACalculator__content_container__para,children:"But don’t forget to calculate your SGPA first using the above-mentioned formula. Once you have your SGPA handy, you can use the following steps:"}),(0,n.jsxs)("div",{className:o().formulaContainer,children:[(0,n.jsx)("h2",{className:o().title,children:"SGPA to Percentage Conversion"}),(0,n.jsxs)("p",{className:o().formula,children:[(0,n.jsx)("strong",{children:"Formula:"})," ",(0,n.jsx)("span",{className:o().highlight,children:"(SGPA x 10) – 7.5"})]}),(0,n.jsxs)("div",{className:o().steps,children:[(0,n.jsxs)("p",{children:[(0,n.jsx)("b",{children:"Step 1:"})," Multiply the SGPA by 10."]}),(0,n.jsxs)("p",{children:[(0,n.jsx)("b",{children:"Step 2:"})," Subtract 7.5 from the result of Step 1."]})]}),(0,n.jsxs)("div",{className:o().calculation,children:[(0,n.jsx)("h3",{children:"Example:"}),(0,n.jsxs)("p",{children:["Let's"," assume SGPA = ",(0,n.jsx)("span",{className:o().highlight,children:"8.0"}),"."]}),(0,n.jsx)("h4",{children:"Calculation:"}),(0,n.jsxs)("p",{children:[(0,n.jsx)("strong",{children:"Step 1:"})," 8.0 x 10 = ",(0,n.jsx)("span",{className:o().highlight,children:"80"})]}),(0,n.jsxs)("p",{children:[(0,n.jsx)("strong",{children:"Step 2:"})," 80 – 7.5 = ",(0,n.jsx)("span",{className:o().highlight,children:"72.5%"})]})]})]}),(0,n.jsx)("h2",{className:o().SGPACalculator__content_container__heading,children:"Letter Grade Approved by UGC"}),(0,n.jsx)("p",{className:o().SGPACalculator__content_container__para,children:"According to the UGC guidelines, institutions and universities use grading systems to show a range of percentages and grade points. Following are the list of grades along with their grade points and percentage scale."}),(0,n.jsx)("table",{className:o().SGPACalculator__table,children:(0,n.jsxs)("tbody",{children:[(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{children:(0,n.jsx)("b",{children:"Percentage of Marks"})}),(0,n.jsx)("th",{children:(0,n.jsx)("b",{children:"Letter Grade as per UGC Guidelines"})}),(0,n.jsx)("th",{children:(0,n.jsx)("b",{children:"Grade Points"})})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"90-100%"}),(0,n.jsx)("td",{children:"O stands for Outstanding"}),(0,n.jsx)("td",{children:"10"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"80-90%"}),(0,n.jsx)("td",{children:"A+ stands for Excellent"}),(0,n.jsx)("td",{children:"9"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"70-80%"}),(0,n.jsx)("td",{children:"A stands for Very Good"}),(0,n.jsx)("td",{children:"8"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"60-70%"}),(0,n.jsx)("td",{children:"B+ stands for Good"}),(0,n.jsx)("td",{children:"7"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"50-60%"}),(0,n.jsx)("td",{children:"B stands for Average"}),(0,n.jsx)("td",{children:"6"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"40-50%"}),(0,n.jsx)("td",{children:"C stands for Pass"}),(0,n.jsx)("td",{children:"5"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"Below 40%"}),(0,n.jsx)("td",{children:"F stands for Fail"}),(0,n.jsx)("td",{children:"0"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"Absent"}),(0,n.jsx)("td",{children:"AB"}),(0,n.jsx)("td",{children:"0"})]})]})}),(0,n.jsx)("h2",{className:o().SGPACalculator__content_container__heading,children:"How is SGPA Different from CGPA?"}),(0,n.jsx)("p",{className:o().SGPACalculator__content_container__para,children:"CGPA stands for Cumulative Grade Point Average which is calculated for a whole year. Meanwhile, SGPA stands for Semester Grade Point Average, meaning that it is calculated only for 6 months which makes it easier for the students to analyse their progress and grades."}),(0,n.jsx)("p",{className:o().SGPACalculator__content_container__para,children:"It is as simple as playing tic tac toe to calculate CGPA using SGPA. You just need to add SGPA values from each semester and divide it by the number of semesters."}),(0,n.jsx)("p",{className:o().SGPACalculator__content_container__para,children:"Let’s say a student got 6 points in the first semester and 8 points in the second semester. To find their overall grade average (CGPA), we add the points from both semesters and divide by the total number of semesters."}),(0,n.jsx)("h2",{className:o().SGPACalculator__content_container__heading,children:"Here is what we do:"}),(0,n.jsxs)("ul",{className:o().SGPACalculator__content_container__ul,children:[(0,n.jsxs)("li",{className:o().SGPACalculator__content_container__li,children:[(0,n.jsx)("span",{className:o().SGPACalculator__tick,children:"☑"}),"Firstly add the points for 1st & 2nd semesters: 6 (from 1st semester) + 8 (from 2nd semester) = 14"]}),(0,n.jsxs)("li",{className:o().SGPACalculator__content_container__li,children:[(0,n.jsx)("span",{className:o().SGPACalculator__tick,children:"☑"}),"Then you need to count the total number of semesters: 1 (for the 1st semester) + 1 (for the 2nd semester) = 2"]}),(0,n.jsxs)("li",{className:o().SGPACalculator__content_container__li,children:[(0,n.jsx)("span",{className:o().SGPACalculator__tick,children:"☑"}),"Then divide the total points by the number of semesters: 14 \xf7 2 = 7"]}),(0,n.jsxs)("li",{className:o().SGPACalculator__content_container__li,children:[(0,n.jsx)("span",{className:o().SGPACalculator__tick,children:"☑"}),"So, the student’s CGPA based on the 1st and 2nd semesters is 7."]})]}),(0,n.jsx)("h2",{className:o().SGPACalculator__content_container__heading,children:"Takeaway"}),(0,n.jsx)("p",{className:o().SGPACalculator__content_container__para,children:"That’s it, folks. As promised, here’s your easy-peasy solution to calculate your percentage from your SGPA using our easy-to-use SGPA to Percentage calculator. For a better understanding on how this conversion works, we’ve mentioned the formula and examples for you. So, go on, and track your progress to create the career you dream. Good luck!"}),(0,n.jsx)(_,{})]})]})})}},28275:function(e,t,a){"use strict";a.d(t,{default:function(){return i}});var n=a(76136),s=a(15082),r=a(21543),o=a.n(r),c=a(58149),l=a(68271);function i(){return(0,s.useEffect)(()=>{window.scrollTo(0,0)},[]),(0,n.jsx)("div",{className:o().SGPACalculator_Hero__container,children:(0,n.jsxs)("div",{className:o().SGPACalculator_Hero__headingContainer,children:[(0,n.jsx)("h1",{className:o().SGPACalculator_Hero__heading,children:"SGPA to Percentage"}),(0,n.jsx)("p",{className:o().SGPACalculator_Hero__subheading,children:"How to Convert SGPA to Percentage? - SGPA Calculator"}),(0,n.jsxs)(c.default,{href:"/colleges",className:o().link,children:[(0,n.jsx)("span",{children:"Explore Colleges Based on SGPA"}),(0,n.jsx)(l.TjG,{className:o().icon})]})]})})}},61203:function(e){e.exports={container:"FAQAccordion_container__tbwPS",title:"FAQAccordion_title__3l2xG",accordionItem:"FAQAccordion_accordionItem___vMuS",accordionItemOpen:"FAQAccordion_accordionItemOpen__Fc_sS",accordionItemClosed:"FAQAccordion_accordionItemClosed__Qd5fC",button:"FAQAccordion_button__LK2KY",buttonOpen:"FAQAccordion_buttonOpen__nPqPQ",buttonClosed:"FAQAccordion_buttonClosed__T8Vhq",question:"FAQAccordion_question__YCouU",icon:"FAQAccordion_icon__GIFGA",iconOpen:"FAQAccordion_iconOpen__jDQUV",content:"FAQAccordion_content__aejZ7",contentClosed:"FAQAccordion_contentClosed__jgvGZ",answerWrapper:"FAQAccordion_answerWrapper__Uzblb",answerWrapperOpen:"FAQAccordion_answerWrapperOpen__52htL",answerWrapperClosed:"FAQAccordion_answerWrapperClosed__uSyYf",answer:"FAQAccordion_answer__EBSc1"}},18752:function(e){e.exports={SGPACalculator__content_container:"SGPACalculatorContent_SGPACalculator__content_container__NFSVm",SGPACalculator__content_container__row:"SGPACalculatorContent_SGPACalculator__content_container__row__kQGZs",SGPACalculator__content_container__textrow:"SGPACalculatorContent_SGPACalculator__content_container__textrow__Vzp5m",SGPACalculator__content_textcontainer:"SGPACalculatorContent_SGPACalculator__content_textcontainer__H_hoz",SGPACalculator__content_container__heading:"SGPACalculatorContent_SGPACalculator__content_container__heading__rW5fI",SGPACalculator__content_container__para:"SGPACalculatorContent_SGPACalculator__content_container__para__5oIO5",sgpaconverter:"SGPACalculatorContent_sgpaconverter__V4njR",sgpalabel:"SGPACalculatorContent_sgpalabel__5sorj",SGPACalculator__content_container__subheading:"SGPACalculatorContent_SGPACalculator__content_container__subheading__RHxKz",SGPACalculator__content_container__calheading:"SGPACalculatorContent_SGPACalculator__content_container__calheading__XUJbA",sgpainput:"SGPACalculatorContent_sgpainput__nGebl",sgpabutton:"SGPACalculatorContent_sgpabutton__abZpM",sgparesult:"SGPACalculatorContent_sgparesult__mP6VT",fadeIn:"SGPACalculatorContent_fadeIn__z0wPn",SGPACalculator__content_container__ul:"SGPACalculatorContent_SGPACalculator__content_container__ul__bTuWO",SGPACalculator__content_container__li:"SGPACalculatorContent_SGPACalculator__content_container__li__ojWz0",SGPACalculator__tick:"SGPACalculatorContent_SGPACalculator__tick__LEJz8",stepsList:"SGPACalculatorContent_stepsList___2l_m",step:"SGPACalculatorContent_step__laKDu",stepNumber:"SGPACalculatorContent_stepNumber__WakTL",subStep:"SGPACalculatorContent_subStep__npi4K",formulaContainer:"SGPACalculatorContent_formulaContainer__zcSeV",title:"SGPACalculatorContent_title__eZxDO",formula:"SGPACalculatorContent_formula__PvxUt",highlight:"SGPACalculatorContent_highlight__sPEGd",steps:"SGPACalculatorContent_steps__zK6E9",calculation:"SGPACalculatorContent_calculation__OZ6Uc",SGPACalculator__table:"SGPACalculatorContent_SGPACalculator__table__gJiFY",faq__questions:"SGPACalculatorContent_faq__questions__8M1Mn",faq__ul:"SGPACalculatorContent_faq__ul__jYWfm",note:"SGPACalculatorContent_note__8Sb8G",infocardscontainer:"SGPACalculatorContent_infocardscontainer__evJeI",gradingInfoCard:"SGPACalculatorContent_gradingInfoCard___IjqP",iconWrapper:"SGPACalculatorContent_iconWrapper__IR6q3",icon:"SGPACalculatorContent_icon__xJSZS",cardContent:"SGPACalculatorContent_cardContent__M7SbP",cardHeading:"SGPACalculatorContent_cardHeading__l9CQY",cardText:"SGPACalculatorContent_cardText__U6vyi"}},21543:function(e){e.exports={SGPACalculator_Hero__container:"SGPACalculatorHeroSection_SGPACalculator_Hero__container__t3R8v",SGPACalculator_Hero__headingContainer:"SGPACalculatorHeroSection_SGPACalculator_Hero__headingContainer__qpChz",SGPACalculator_Hero__heading:"SGPACalculatorHeroSection_SGPACalculator_Hero__heading__kP_Ys",SGPACalculator_Hero__subheading:"SGPACalculatorHeroSection_SGPACalculator_Hero__subheading__RFKBj",link:"SGPACalculatorHeroSection_link__lgFL4",bounce:"SGPACalculatorHeroSection_bounce__k21xW",icon:"SGPACalculatorHeroSection_icon__W_iyu"}}},function(e){e.O(0,[9823,9492,821,3784,2717,1744],function(){return e(e.s=94873)}),_N_E=e.O()}]);