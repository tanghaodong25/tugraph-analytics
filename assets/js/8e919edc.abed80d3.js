"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[2829],{3293:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>r,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var s=a(4848),n=a(8453);const i={},o="\ud83c\udf08 G6VP Graph Visualization",l={id:"deploy/collaborate_with_g6vp",title:"\ud83c\udf08 [G6VP](https://github.com/antvis/g6vp) Graph Visualization",description:"Just 5 Steps to Present \ud83c\udf8a",source:"@site/../docs-en/source/7.deploy/4.collaborate_with_g6vp.md",sourceDirName:"7.deploy",slug:"/deploy/collaborate_with_g6vp",permalink:"/tugraph-analytics/en/deploy/collaborate_with_g6vp",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"GeaFlow Dashboard",permalink:"/tugraph-analytics/en/deploy/dashboard"},next:{title:"LLM Local Deployment",permalink:"/tugraph-analytics/en/deploy/install_llm"}},r={},c=[{value:"Just 5 Steps to Present \ud83c\udf8a",id:"just-5-steps-to-present-",level:2},{value:"1. Start the GeaFlow calculating job and Socket service",id:"1-start-the-geaflow-calculating-job-and-socket-service",level:3},{value:"2. Create a G6VP Project",id:"2-create-a-g6vp-project",level:3},{value:"3. Add Components",id:"3-add-components",level:3},{value:"4. Demostration",id:"4-demostration",level:3},{value:"5. Result Presentation",id:"5-result-presentation",level:3}];function h(t){const e={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,n.R)(),...t.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.header,{children:(0,s.jsxs)(e.h1,{id:"-g6vp-graph-visualization",children:["\ud83c\udf08 ",(0,s.jsx)(e.a,{href:"https://github.com/antvis/g6vp",children:"G6VP"})," Graph Visualization"]})}),"\n",(0,s.jsx)(e.h2,{id:"just-5-steps-to-present-",children:"Just 5 Steps to Present \ud83c\udf8a"}),"\n",(0,s.jsx)(e.h3,{id:"1-start-the-geaflow-calculating-job-and-socket-service",children:"1. Start the GeaFlow calculating job and Socket service"}),"\n",(0,s.jsxs)(e.p,{children:["Reference ",(0,s.jsx)(e.a,{href:"https://github.com/TuGraph-family/tugraph-analytics/blob/master/docs/docs-cn/quick_start.md",children:"Quick Start"})]}),"\n",(0,s.jsx)(e.p,{children:"\u26a0\ufe0f Note that in the 'start SocketServer' step use the following command instead"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"bin/socket.sh 9003 GI\n"})}),"\n",(0,s.jsx)(e.p,{children:"When the terminal outputs the following, Tugraph Analytics is ready to establish a connection."}),"\n",(0,s.jsx)(e.img,{width:"610",alt:"image",src:"https://github.com/TuGraph-family/tugraph-analytics/assets/25787943/a25ed6ba-4fb9-4db1-9325-ee2f26a4337f"}),"\n",(0,s.jsxs)(e.blockquote,{children:["\n",(0,s.jsxs)(e.p,{children:["If any problem occurs during service startup, see ",(0,s.jsx)(e.a,{href:"https://github.com/TuGraph-family/tugraph-analytics/issues/1",children:"https://github.com/TuGraph-family/tugraph-analytics/issues/1"})]}),"\n"]}),"\n",(0,s.jsx)(e.h3,{id:"2-create-a-g6vp-project",children:"2. Create a G6VP Project"}),"\n",(0,s.jsxs)(e.p,{children:["Enter ",(0,s.jsx)(e.a,{href:"https://insight.antv.antgroup.com/#/workbook/create",children:"New Canvas"}),", enter a workbook name. We will manually add the dot edge data later, so choose a case data set here, and use the ",(0,s.jsx)(e.strong,{children:"minimalist template"})]}),"\n",(0,s.jsx)(e.h3,{id:"3-add-components",children:"3. Add Components"}),"\n",(0,s.jsxs)(e.p,{children:["We need to add two components, in the toolbar add ",(0,s.jsx)(e.strong,{children:"Clean canvas"}),"; Then add ",(0,s.jsx)(e.strong,{children:"Loop Detection Demo"})," to the side container of the default layout"]}),"\n",(0,s.jsx)(e.img,{width:"463",alt:"image",src:"https://github.com/TuGraph-family/tugraph-analytics/assets/25787943/b01271b5-162c-4216-9a9c-bf7a5570c999"}),"\n",(0,s.jsx)(e.img,{width:"474",alt:"image",src:"https://github.com/TuGraph-family/tugraph-analytics/assets/25787943/238685ec-d9cf-4fcf-8357-56f4f8a8928d"}),"\n",(0,s.jsxs)(e.blockquote,{children:["\n",(0,s.jsxs)(e.p,{children:["The project canvas should look like this\n",(0,s.jsx)(e.img,{width:"1149",alt:"image",src:"https://github.com/TuGraph-family/tugraph-analytics/assets/25787943/e660fa5b-aa31-4e7e-b295-cb071cc476c1"})]}),"\n"]}),"\n",(0,s.jsx)(e.p,{children:"Click the '\ud83e\uddf9 Clear' option in the toolbar to clear the canvas node"}),"\n",(0,s.jsx)(e.img,{width:"241",alt:"image",src:"https://github.com/TuGraph-family/tugraph-analytics/assets/25787943/61316029-71ba-410f-94bf-47c6c65aec34"}),"\n",(0,s.jsx)(e.p,{children:"By default, a connection is automatically established after the Loop Detection Demo component is added."}),"\n",(0,s.jsx)(e.img,{width:"328",alt:"image",src:"https://github.com/TuGraph-family/tugraph-analytics/assets/25787943/5246536b-ddb0-4c3c-91fb-e941101e272a"}),"\n",(0,s.jsx)(e.p,{children:"Tugraph Analytics will also output the following after the connection is established:"}),"\n",(0,s.jsx)(e.img,{width:"616",alt:"image",src:"https://github.com/TuGraph-family/tugraph-analytics/assets/25787943/46be1e88-9c93-430e-92cc-db8024691095"}),"\n",(0,s.jsx)(e.h3,{id:"4-demostration",children:"4. Demostration"}),"\n",(0,s.jsx)(e.p,{children:"Loop detection Demo provides two ways to interact:"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"Method 1 Enter the dot information in the input box"}),"\n",(0,s.jsx)(e.li,{children:"Method 2 Demonstrate using built-in data"}),"\n"]}),"\n",(0,s.jsxs)(e.blockquote,{children:["\n",(0,s.jsx)(e.p,{children:"Both methods essentially call Tugraph Analytics for real-time calculations, but Method 2 omits the manual input process."}),"\n"]}),"\n",(0,s.jsx)(e.p,{children:"Here we use the built-in data for a quick demonstration, click [Options], select 'Add Points', 7 points of information appear in the canvas; Then select 'Add Edges'. We can see the add record in the above dialog."}),"\n",(0,s.jsx)(e.img,{width:"332",alt:"image",src:"https://github.com/TuGraph-family/tugraph-analytics/assets/25787943/7ca76607-41a1-4afe-9427-cf7599de6889"}),"\n",(0,s.jsx)(e.p,{children:"Similarly, the Tugraph Analytics terminal outputs operational information in real time and automatically starts computation tasks."}),"\n",(0,s.jsx)(e.img,{width:"611",alt:"image",src:"https://github.com/TuGraph-family/tugraph-analytics/assets/25787943/d8d0d73a-4c07-4ecd-bcac-4633a742933a"}),"\n",(0,s.jsx)(e.h3,{id:"5-result-presentation",children:"5. Result Presentation"}),"\n",(0,s.jsx)(e.p,{children:"After the loop detection calculation task is completed, Tugraph Analytics automatically returns the detection results."}),"\n",(0,s.jsx)(e.img,{width:"324",alt:"image",src:"https://github.com/TuGraph-family/tugraph-analytics/assets/25787943/ba343acf-812a-4df5-8da4-ff70e0b2531d"}),"\n",(0,s.jsx)(e.p,{children:"The loop detection results are dynamically displayed on the right canvas:"}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.img,{src:"https://github.com/TuGraph-family/tugraph-analytics/assets/25787943/f8595322-d477-4702-a52e-4f03092b7219",alt:"Jun-12-2023 19-53-35"})})]})}function d(t={}){const{wrapper:e}={...(0,n.R)(),...t.components};return e?(0,s.jsx)(e,{...t,children:(0,s.jsx)(h,{...t})}):h(t)}},8453:(t,e,a)=>{a.d(e,{R:()=>o,x:()=>l});var s=a(6540);const n={},i=s.createContext(n);function o(t){const e=s.useContext(i);return s.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function l(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(n):t.components||n:o(t.components),s.createElement(i.Provider,{value:e},t.children)}}}]);