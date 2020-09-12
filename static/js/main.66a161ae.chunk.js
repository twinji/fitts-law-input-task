(this["webpackJsonpfitts-law-input-task"]=this["webpackJsonpfitts-law-input-task"]||[]).push([[0],{34:function(e){e.exports=JSON.parse('[{"circlePathDiamater":300,"radius":20,"count":9,"repetitions":15,"direction":1},{"circlePathDiamater":200,"radius":30,"count":9,"repetitions":15,"direction":1},{"circlePathDiamater":700,"radius":10,"count":9,"repetitions":15,"direction":1},{"circlePathDiamater":600,"radius":40,"count":9,"repetitions":15,"direction":1},{"circlePathDiamater":400,"radius":60,"count":9,"repetitions":15,"direction":1},{"circlePathDiamater":450,"radius":10,"count":9,"repetitions":15,"direction":1},{"circlePathDiamater":200,"radius":10,"count":9,"repetitions":15,"direction":1},{"circlePathDiamater":100,"radius":10,"count":9,"repetitions":15,"direction":1},{"circlePathDiamater":600,"radius":50,"count":9,"repetitions":15,"direction":1},{"circlePathDiamater":650,"radius":20,"count":9,"repetitions":15,"direction":1},{"circlePathDiamater":350,"radius":65,"count":7,"repetitions":15,"direction":1},{"circlePathDiamater":350,"radius":10,"count":9,"repetitions":15,"direction":1}]')},44:function(e){e.exports=JSON.parse('[{"circlePathDiamater":300,"radius":20,"count":9,"repetitions":15,"direction":1},{"circlePathDiamater":600,"radius":40,"count":9,"repetitions":15,"direction":1}]')},57:function(e,t,a){e.exports=a(70)},62:function(e,t,a){},63:function(e,t,a){},69:function(e,t,a){},70:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(16),c=a.n(r),s=(a(62),a(21)),o=a(6),l=(a(63),a(11)),u=a(12),m=a(14),d=a(13),h=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return i.a.createElement("div",{className:"container py-5"},i.a.createElement("h1",null,"Fitt's Law Demo"),i.a.createElement("hr",null),i.a.createElement("p",{className:"text-justify"},"This application was created to test Fitt's law, by collecting data of user input in two dimensions. It does so by prompting the user to click or tap several sequences of circles as highlighted and logging the accuracy and time taken to select each circle. This data is then made available to the user at the end of the test via a CSV file. For more information, feel free to contact me via my social accounts."),i.a.createElement("hr",null),i.a.createElement("p",null,"Built with React, D3, and FileShare by Vishnu Gunapathi."),i.a.createElement("hr",null),i.a.createElement("div",{className:"icon-container"},i.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/twinji"},i.a.createElement("img",{alt:"GitHub",src:"https://raw.githubusercontent.com/twinji/twinji/master/icons/github.svg"})),i.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.instagram.com/_twinji/"},i.a.createElement("img",{alt:"Instagram",src:"https://raw.githubusercontent.com/twinji/twinji/master/icons/instagram.svg"})),i.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.linkedin.com/in/twinji/"},i.a.createElement("img",{alt:"LinkedIn",src:"https://raw.githubusercontent.com/twinji/twinji/master/icons/linkedin.svg"})),i.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://twitter.com/_twinji"},i.a.createElement("img",{alt:"Twitter",src:"https://raw.githubusercontent.com/twinji/twinji/master/icons/twitter.svg"}))))}}]),a}(n.Component),p=a(46),v=a(22),g=a(18),f=a(23),b=a(42),E=a(10),C=a(20),w=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).onChange=function(e){n.setState(Object(b.a)({},e.target.name,e.target.value),(function(){n.props.onChange({username:n.state.username,device:n.state.device})}))},n.state={username:"",device:""},n}return Object(u.a)(a,[{key:"render",value:function(){return i.a.createElement(E.a,{onSubmit:this.onSubmit},i.a.createElement(E.a.Row,null,i.a.createElement(E.a.Group,{as:C.a,md:"6",controlId:"loginForm.ControlInputUsername"},i.a.createElement(E.a.Label,null,"Username"),i.a.createElement(E.a.Control,{required:!0,type:"text",placeholder:"Username",name:"username",defaultValue:"",onChange:this.onChange}),i.a.createElement(E.a.Control.Feedback,{type:"invalid"},"Please enter your username")),i.a.createElement(E.a.Group,{as:C.a,md:"6",controlId:"loginForm.ControlInputDevice"},i.a.createElement(E.a.Label,null,"Device"),i.a.createElement(E.a.Control,{as:"select",defaultValue:"",required:!0,onChange:this.onChange,name:"device"},i.a.createElement("option",{value:"",selected:!0,disabled:!0,hidden:!0},"Select a device"),i.a.createElement("option",{value:"mouse"},"Mouse"),i.a.createElement("option",{value:"trackpad"},"Trackpad"),i.a.createElement("option",{value:"touchscreen"},"Touchscreen")),i.a.createElement(E.a.Control.Feedback,{type:"invalid"},"Please select your input device"))))}}]),a}(n.Component),y=a(43),x=a.n(y),k=a(34),P=a(44),S=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).resetTest=function(){var e=null==n.state.isPractice||!n.state.isPractice;n.setState({isPractice:e,sequences:e?P:k,username:"",device:"",isActive:!1,isComplete:!1,generated:[],results:[],currentSequenceIndex:0,currentRepetition:1,currentCircleIndex:0,previousCircleIndex:null},(function(){n.generateCircleData()}))},n.getResults=function(){n.generateCsvFromResultLogs()},n.generateCsvFromResultLogs=function(){var e=Object.keys(n.state.results[0]).join(",")+"\n"+n.state.results.map((function(e){return Object.values(e).join(",")})).join("\n"),t=new Blob([e],{type:"text/csv;charset=utf-8;"});x.a.saveAs(t,n.state.username+"_"+n.state.device+"_fitts_law_results_"+Date.now().toString()+".csv")},n.resumeTest=function(){n.setState({isActive:!0,previousCircleIndex:null}),n.restartTimer()},n.pauseTest=function(){n.setState({isActive:!1})},n.completeTest=function(){n.setState({isActive:!1,isComplete:!0},(function(){n.state.isPractice||n.getResults()}))},n.restartTimer=function(){n.startTime=performance.now(),n.timeElapsed=null},n.stopTimer=function(){n.timeElapsed=performance.now()-n.startTime},n.onLoginDetailsChange=function(e){n.setState({username:e.username,device:e.device})},n.skipPractice=function(){n.state.isPractice&&n.setState({isActive:!1,isPractice:!1,sequences:k},(function(){n.generateCircleData()}))},n.escPressed=function(e){27===e.keyCode&&n.skipPractice()},n.calculateDistance=function(e,t,a,n){var i=t-e,r=n-a;return Math.sqrt(i*i+r*r)},n.onClick=function(e,t){if(n.state.isActive){var a=t===n.state.currentCircleIndex;a&&n.stopTimer();var i=n.state.currentSequenceIndex,r={x:n.state.generated[i].circles[n.state.currentCircleIndex].x,y:n.state.generated[i].circles[n.state.currentCircleIndex].y},c=null!==n.state.previousCircleIndex?{x:n.state.generated[i].circles[n.state.previousCircleIndex].x,y:n.state.generated[i].circles[n.state.previousCircleIndex].y}:{x:n.container.clientWidth/2,y:n.container.clientHeight/2},s=n.calculateDistance(r.x,c.x,r.y,c.y),o=n.state.sequences[i];if(n.appendResultLog(n.state.username,n.state.device,n.state.currentSequenceIndex+1,n.state.currentRepetition,o.circlePathDiamater,s,o.radius,o.direction,a,n.timeElapsed),a){var l=n.state.currentSequenceIndex,u=n.state.sequences[l],m=n.state.currentCircleIndex,d=(n.state.currentCircleIndex+Math.round(u.count/2))%u.count,h=n.state.currentRepetition+1,p=!1;h>u.repetitions&&(h=1,d=0,++l>=n.state.sequences.length?(n.completeTest(),p=!0):n.pauseTest()),n.setState({currentCircleIndex:d,currentRepetition:h,currentSequenceIndex:l,previousCircleIndex:m},(function(){p||(n.renderCircles(),n.restartTimer())}))}}},n.appendResultLog=function(e,t,a,i,r,c,s,o,l,u){var m=!1,d=n.state.results.map((function(r){return r.username===e&&r.device===t&&r.sequence===a&&r.rep===i&&(m=!0,r.timestamp=Date.now(),l?(r.hit=l,r.time=n.timeElapsed):r.misses++),r}));if(m)n.setState({results:d});else{var h=Math.log2(c/(2*s)),v=h/u;n.setState((function(n){return{results:[].concat(Object(p.a)(n.results),[{username:e,device:t,sequence:a,rep:i,circlePathDiamater:r,distanceFromPrevious:c,radius:s,id:h,ip:v,direction:o,hit:l,time:u,misses:l?0:1,timestamp:Date.now()}])}}))}},n.inSequence=function(){return n.state.currentSequenceIndex>0&&!n.state.isComplete},n.generateCircleData=function(){n.setState({generated:n.state.sequences.map((function(e){var t=2*Math.PI,a=n.container.clientWidth/2,i=n.container.clientHeight/2;return{circles:Array(e.count).fill().map((function(n,r){var c=1.5*Math.PI;return{x:a+Math.cos(c+r*(t/e.count))*e.circlePathDiamater/2,y:i+Math.sin(c+r*(t/e.count))*e.circlePathDiamater/2,radius:e.radius,color:"lightgray",activeColor:"crimson"}}))}}))},n.renderCircles)},n.renderCircles=function(){v.c("svg > *").remove(),v.b("#demoContainer > svg").attr("width",n.container.clientWidth).attr("height",n.container.clientHeight).on("click",(function(e){v.a.stopPropagation(),n.onClick(null,-1)})).selectAll("circle").data(n.state.generated[n.state.currentSequenceIndex].circles).enter().append("circle").attr("cx",(function(e){return e.x})).attr("cy",(function(e){return e.y})).attr("r",(function(e){return e.radius})).attr("fill",(function(e,t){return t===n.state.currentCircleIndex?e.activeColor:e.color})).on("click",(function(e,t){v.a.stopPropagation(),n.onClick(e,t)}))},n.state={isActive:!1,isComplete:!1,isPractice:null,username:"",device:"",sequences:null,generated:[],results:[],currentSequenceIndex:0,currentRepetition:1,currentCircleIndex:0,previousCircleIndex:null},n}return Object(u.a)(a,[{key:"componentDidMount",value:function(){document.addEventListener("keydown",this.escPressed,!1),this.resetTest()}},{key:"componentWillUnmount",value:function(){document.removeEventListener("keydown",this.escPressed,!1)}},{key:"render",value:function(){var e=this,t={width:"auto",height:"auto",position:"absolute",zIndex:-100,right:0,left:0,top:55,padding:6,fontWeight:"bold",margin:"auto",maxWidth:"100%",maxHeight:"100%",overflow:"visible",backgroundColor:this.state.isPractice?"orange":"lightblue",color:"white",fontSize:"20px"};return i.a.createElement(i.a.Fragment,null,i.a.createElement(g.a,{centered:!0,keyboard:!1,show:!this.state.isActive,onHide:this.resumeTest,backdrop:"static"},i.a.createElement(g.a.Header,null,(this.inSequence()||this.state.isComplete)&&i.a.createElement(g.a.Title,null,this.state.isPractice?"Practice sequence":"Sequence"," ",this.state.currentSequenceIndex," out of ",this.state.sequences.length," complete"),!this.inSequence()&&!this.state.isComplete&&i.a.createElement(g.a.Title,null,"Fitt's law demo")),i.a.createElement(g.a.Body,null,!this.inSequence()&&!this.state.isComplete&&i.a.createElement(w,{onChange:this.onLoginDetailsChange}),this.inSequence()?"Take a break and proceed to the next sequence when you are ready.":this.state.isComplete?this.state.isPractice?"You have completed the practice run, click below to continue.":"You have completed this demo, click below to view results.":"Select the red circles as they appear as quickly as possible to the best of your ability."),i.a.createElement(g.a.Footer,null,!this.state.isComplete&&i.a.createElement(i.a.Fragment,null,i.a.createElement(f.a,{variant:"primary",onClick:this.resumeTest,disabled:!this.state.username||!this.state.device},this.inSequence()?"Proceed":this.state.isPractice?"Begin practice":"Begin test")),this.state.isComplete&&this.state.isPractice&&i.a.createElement(i.a.Fragment,null,i.a.createElement(f.a,{variant:"secondary",onClick:this.resetTest},"Continue")),this.state.isComplete&&!this.state.isPractice&&i.a.createElement(i.a.Fragment,null,i.a.createElement(f.a,{variant:"secondary",onClick:this.resetTest},"Retry demo"),i.a.createElement(f.a,{variant:"primary",onClick:this.getResults},"Get results")))),i.a.createElement("div",{id:"demoContainer",ref:function(t){return e.container=t},style:{width:"auto",height:"auto",position:"fixed",zIndex:-99,right:0,left:0,top:0,bottom:0,margin:"auto",maxWidth:"100%",maxHeight:"100%",overflow:"visible"}},null!==this.state.sequences&&i.a.createElement("span",{style:t},this.state.isPractice?"Practice sequence":"Sequence","\xa0",Math.min(this.state.currentSequenceIndex+1,this.state.sequences.length),"/",this.state.sequences.length),i.a.createElement("svg",null)))}}]),a}(n.Component),q=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return i.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light bg-light rounded"},i.a.createElement("div",{className:"container py-0 my-0"},i.a.createElement(s.b,{className:"navbar-brand",to:"/"},"Fitts' Law Demo"),i.a.createElement("ul",{className:"navbar-nav ml-auto"},i.a.createElement("li",{className:"nav-item"},i.a.createElement(s.b,{className:"nav-link text-dark",to:"/about"},"About")))))}}]),a}(n.Component);function I(){return i.a.createElement(s.a,{basename:"/"},i.a.createElement("div",{className:"App"},i.a.createElement(q,null),i.a.createElement(o.c,null,i.a.createElement(o.a,{exact:!0,path:"/"},i.a.createElement(S,null)),i.a.createElement(o.a,{path:"/about"},i.a.createElement(h,null)))))}a(69);c.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(I,null)),document.getElementById("root"))}},[[57,1,2]]]);
//# sourceMappingURL=main.66a161ae.chunk.js.map