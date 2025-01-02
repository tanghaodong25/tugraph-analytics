"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[4415],{9626:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>a});var t=i(4848),o=i(8453);const r={},c="Source Introduction",s={id:"application-development/api/stream/source",title:"Source Introduction",description:"GeaFlow provides Source API to the public, and IWindow needs to be provided at the interface level to build the corresponding window source. Users can define the specific source reading logic by implementing SourceFunction.",source:"@site/../docs-en/source/5.application-development/1.api/2.stream/1.source.md",sourceDirName:"5.application-development/1.api/2.stream",slug:"/application-development/api/stream/source",permalink:"/tugraph-analytics/en/application-development/api/stream/source",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"API Introduction",permalink:"/tugraph-analytics/en/application-development/api/overview"},next:{title:"Process Introduction",permalink:"/tugraph-analytics/en/application-development/api/stream/process"}},l={},a=[{value:"Interface",id:"interface",level:2},{value:"Example",id:"example",level:2}];function d(e){const n={br:"br",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",t:"t",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"source-introduction",children:"Source Introduction"})}),"\n",(0,t.jsx)(n.p,{children:"GeaFlow provides Source API to the public, and IWindow needs to be provided at the interface level to build the corresponding window source. Users can define the specific source reading logic by implementing SourceFunction."}),"\n",(0,t.jsx)(n.h2,{id:"interface",children:"Interface"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"API"}),(0,t.jsx)(n.th,{children:"Interface Description"}),(0,t.jsx)(n.th,{children:"Input Parameter Description"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{children:["PWindowSource",(0,t.jsxs)(n.t,{children:[" build(IPipelineContext pipelineContext, SourceFunction",(0,t.jsxs)(n.t,{children:[" sourceFunction, IWindow",(0,t.jsx)(n.t,{children:" window)"})]})]})]}),(0,t.jsx)(n.td,{children:"Build window source"}),(0,t.jsxs)(n.td,{children:["SourceFunction: Define source reading logic. GeaFlow has already implemented several types of source function internally, such as Collection, File, etc. ",(0,t.jsx)(n.br,{})," IWindow: There are currently two types supported, SizeTumblingWindow and AllWindow. The former can be used to support streaming reading windows, and the latter is used to support batch one-time reading."]})]})})]}),"\n",(0,t.jsx)(n.p,{children:"To build a window source, users can generally use the buildSource interface provided by IPipelineTaskContext directly."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:'\t// Interface.\n\t<T> PWindowSource<T> buildSource(SourceFunction<T> sourceFunction, IWindow<T> window);\n\n\t// Example: Build a collection source with a window size of 2.\n\tList<String> words = Lists.newArrayList("hello", "world", "hello", "word");\n\tPWindowSource<String> source =\n        pipelineTaskCxt.buildSource(new CollectionSource<String>(words) {},\n            SizeTumblingWindow.of(2));\n'})}),"\n",(0,t.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:'public class WindowStreamWordCount {\n\n    private static final Logger LOGGER =\n        LoggerFactory.getLogger(WindowStreamWordCount.class);\n\n    public static void main(String[] args) {\n        Environment environment = EnvironmentFactory.onLocalEnvironment();\n        Pipeline pipeline = PipelineFactory.buildPipeline(environment);\n        pipeline.submit(new PipelineTask() {\n            @Override\n            public void execute(IPipelineTaskContext pipelineTaskCxt) {\n                Configuration config = pipelineTaskCxt.getConfig();\n                List<String> words = Lists.newArrayList("hello", "world", "hello", "word");\n                // Build source using the built-in CollectionSource, while specifying the window type as SizeTumblingWindow and window size as 2.\n                PWindowSource<String> source =\n                    pipelineTaskCxt.buildSource(new CollectionSource<String>(words) {},\n                        SizeTumblingWindow.of(2));\n                source.sink(v -> LOGGER.info("result: {}", v));\n            }\n        });\n\n        IPipelineResult result = pipeline.execute();\n        // Wait for execution to complete.\n        result.get();\n    }\n\n}\n'})})]})}function u(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>c,x:()=>s});var t=i(6540);const o={},r=t.createContext(o);function c(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:c(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);