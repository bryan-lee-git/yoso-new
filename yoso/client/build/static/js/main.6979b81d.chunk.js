(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{110:function(e,t,a){e.exports=a(264)},115:function(e,t,a){},183:function(e,t){},185:function(e,t){},217:function(e,t){},218:function(e,t){},264:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(61),c=a.n(r),o=(a(115),a(10)),m=a(11),s=a(13),i=a(12),u=a(14),E=a(109),h=a(267),d=a(266),p=a(268),g=a(1),b=a(265),f=(a(66),function(e){return l.a.createElement("div",{className:"z-depth-5"},e.loggedIn?l.a.createElement(g.Navbar,{id:"main-nav",right:!0},l.a.createElement(g.NavItem,null,l.a.createElement(b.a,{to:"/lists"},l.a.createElement(g.Icon,null,"format_list_numbered"))),l.a.createElement(g.NavItem,null,l.a.createElement(b.a,{to:"/pantry"},l.a.createElement(g.Icon,null,"kitchen"))),l.a.createElement(g.NavItem,null,l.a.createElement(b.a,{to:"/waste"},l.a.createElement(g.Icon,null,"pie_chart"))),l.a.createElement(g.NavItem,null,l.a.createElement(b.a,{to:"/recipes"},l.a.createElement(g.Icon,null,"find_in_page"))),l.a.createElement(g.NavItem,null,l.a.createElement(b.a,{to:"/account"},l.a.createElement(g.Icon,null,"account_circle"))),l.a.createElement(g.NavItem,null,l.a.createElement(b.a,{to:"/home"},l.a.createElement(g.Icon,null,"home"))),l.a.createElement(g.NavItem,{onClick:e.signOut},l.a.createElement(g.Icon,null,"exit"))):l.a.createElement(g.Navbar,{id:"main-nav",right:!0},l.a.createElement(g.NavItem,null,l.a.createElement(b.a,{to:"/"},l.a.createElement(g.Icon,null,"home")))))}),C=a(43),I=(a(158),function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(s.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(l)))).state={},a.handleRedirect=function(){a.setState({redirect:!0})},a.handleInputChange=function(e){var t=e.target,n=t.name,l=t.value;a.setState(Object(C.a)({},n,l))},a.removeOverlay=function(){document.getElementById("materialize-modal-overlay-1").remove()},a.handleSignIn=function(e){e.preventDefault(),a.props.signIn(a.state,a.handleRedirect),a.removeOverlay()},a}return Object(u.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return this.state.redirect?l.a.createElement(d.a,{to:"/home"}):l.a.createElement(g.Container,{className:"center-align"},l.a.createElement(g.Row,null,l.a.createElement("br",null),l.a.createElement(g.Col,{s:12,l:6,offset:"l3"},l.a.createElement("img",{id:"home-logo",alt:"yoso logo",src:"./img/Yoso-Logo-Large-Text-White-Tag-Shadow.svg"}))),l.a.createElement(g.Row,{className:"animate-up"},l.a.createElement(g.Col,{s:6,l:4},l.a.createElement(b.a,{to:"/about"},l.a.createElement(g.Button,{id:"home-learn",className:"home-btn z-depth-5 btn-large"},"YOSO?"))),l.a.createElement(g.Modal,{className:"modal",header:"Enter Your Credentials to Login!",bottomSheet:!0,trigger:l.a.createElement(g.Col,{s:6,l:4},l.a.createElement(g.Button,{onClick:this.handleModal,id:"home-login",className:"home-btn z-depth-5 btn-large"},"LOGIN"))},l.a.createElement(g.Input,{onChange:this.handleInputChange,label:"Email Address",type:"email",name:"email"}),l.a.createElement(g.Input,{onChange:this.handleInputChange,label:"Password",type:"password",name:"password"}),this.state.email&&this.state.password?l.a.createElement(g.Col,{s:12},l.a.createElement(g.Input,{s:12,onClick:this.handleSignIn,className:"modal-action modal-close landing-login btn btn-large",type:"submit"})):l.a.createElement(g.Col,{s:12},l.a.createElement(g.Input,{s:12,className:"btn btn-large",type:"submit",disabled:!0}))),l.a.createElement(g.Col,{s:12,l:4},l.a.createElement(b.a,{to:"/signup"},l.a.createElement(g.Button,{id:"home-signup",className:"home-btn z-depth-5 btn-large"},"SIGN-UP")))))}}]),t}(n.Component)),v=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(s.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(l)))).state={redirect:!1},a.handleInputChange=function(e){var t=e.target,n=t.name,l=t.value;a.setState(Object(C.a)({},n,l))},a.handleRedirect=function(){a.setState({redirect:!0})},a.handleSignUp=function(e){e.preventDefault(),a.props.signUp(a.state,a.handleRedirect)},a}return Object(u.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return this.state.redirect?l.a.createElement(d.a,{to:"/home"}):l.a.createElement(g.Container,{className:"center-align"},l.a.createElement(g.Container,null,l.a.createElement(g.Row,null,l.a.createElement(g.Col,{s:12},l.a.createElement("br",null),l.a.createElement("h1",{className:"white-text"},"CREATE AN ACCOUNT"),l.a.createElement("br",null))),l.a.createElement("form",null,l.a.createElement(g.Card,{id:"signup-form",className:"animate-up"},l.a.createElement(g.Row,null,l.a.createElement(g.Col,{s:12},l.a.createElement(g.Input,{s:12,l:6,onChange:this.handleInputChange,type:"text",label:"First Name",name:"first",validate:!0}),l.a.createElement(g.Input,{s:12,l:6,onChange:this.handleInputChange,type:"text",label:"Last Name",name:"last",validate:!0}))),l.a.createElement(g.Row,null,l.a.createElement(g.Col,{s:12},l.a.createElement(g.Input,{s:12,l:6,onChange:this.handleInputChange,offset:"s3",type:"text",label:"Street Address",name:"street",validate:!0}),l.a.createElement(g.Input,{s:12,l:6,onChange:this.handleInputChange,offset:"s3",type:"text",label:"City",name:"city",validate:!0}))),l.a.createElement(g.Row,null,l.a.createElement(g.Col,{s:12},l.a.createElement(g.Input,{s:12,l:6,onChange:this.handleInputChange,offset:"s3",type:"text",label:"State",name:"state",validate:!0}),l.a.createElement(g.Input,{s:12,l:6,onChange:this.handleInputChange,offset:"s3",type:"number",label:"Zip Code",name:"zip",validate:!0}))),l.a.createElement(g.Row,null,l.a.createElement(g.Col,{s:12,l:6},l.a.createElement(g.Input,{s:12,onChange:this.handleInputChange,label:"Email",type:"email",name:"email",validate:!0},l.a.createElement(g.Icon,null,"email"))),l.a.createElement(g.Col,{s:12,l:6},l.a.createElement(g.Input,{s:12,onChange:this.handleInputChange,label:"Password",type:"password",name:"password",validate:!0},l.a.createElement(g.Icon,null,"lock")))),l.a.createElement(g.Row,null,this.state.first&&this.state.last&&this.state.street&&this.state.city&&this.state.state&&this.state.zip&&this.state.email&&this.state.password?l.a.createElement(g.Col,{s:12},l.a.createElement(g.Input,{s:12,onClick:this.handleSignUp,className:"btn btn-large",type:"submit"})):l.a.createElement(g.Col,{s:12},l.a.createElement(g.Input,{s:12,onClick:this.handleSignUp,className:"btn btn-large",type:"submit",disabled:!0})))))))}}]),t}(n.Component),y=function(){return l.a.createElement(g.Container,null,l.a.createElement(g.Row,null,l.a.createElement("br",null),l.a.createElement(g.Col,{s:12,l:6,offset:"l3"},l.a.createElement("img",{id:"home-logo",alt:"yoso logo",src:"./img/Yoso-Logo-Large-Text-White-Tag-Shadow.svg"}))),l.a.createElement(g.Row,{className:"animate-up"},l.a.createElement(g.Col,{s:6,l:4},l.a.createElement(b.a,{to:"/lists"},l.a.createElement(g.Button,{id:"home-list",className:"home-btn z-depth-5 btn-large"},"LISTS"))),l.a.createElement(g.Col,{s:6,l:4},l.a.createElement(b.a,{to:"/pantry"},l.a.createElement(g.Button,{id:"home-pantry",className:"home-btn z-depth-5 btn-large"},"PANTRY"))),l.a.createElement(g.Col,{s:6,l:4},l.a.createElement(b.a,{to:"/waste"},l.a.createElement(g.Button,{id:"home-waste",className:"home-btn z-depth-5 btn-large"},"WASTE"))),l.a.createElement(g.Col,{s:6,l:4},l.a.createElement(b.a,{to:"/recipes"},l.a.createElement(g.Button,{id:"home-recipes",className:"home-btn z-depth-5 btn-large"},"RECIPES"))),l.a.createElement(g.Col,{s:6,l:4},l.a.createElement(b.a,{to:"/account"},l.a.createElement(g.Button,{id:"home-account",className:"home-btn z-depth-5 btn-large"},"ACCOUNT"))),l.a.createElement(g.Col,{s:6,l:4},l.a.createElement(b.a,{to:"/logout"},l.a.createElement(g.Button,{id:"home-logout",className:"home-btn z-depth-5 btn-large"},"LOGOUT")))))},w=function(){return l.a.createElement("div",null,l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement(g.Row,null,l.a.createElement(g.Col,{s:8,offset:"s2"},l.a.createElement(g.Card,{className:"blue-grey darken-1 z-depth-4",textClassName:"white-text"},l.a.createElement("h3",null,"Store Lists")))))))},N=function(){return l.a.createElement("div",null,l.a.createElement(g.Row,null,l.a.createElement(g.Col,{s:8,offset:"s2"},l.a.createElement(g.Card,{className:"blue-grey darken-1 z-depth-4",textClassName:"white-text"},l.a.createElement(g.Table,null,l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("th",null,l.a.createElement("h5",null,"Item JSX Title")),l.a.createElement("th",null,l.a.createElement("h5",null,"Item JSX Description")),l.a.createElement("th",null,l.a.createElement(g.Button,{floating:!0,medium:!0},l.a.createElement(g.Icon,null,"add_a_photo")))),l.a.createElement("tr",null,l.a.createElement("th",null,l.a.createElement("h5",null,"Item JSX Units")),l.a.createElement("th",null,l.a.createElement("h5",null,"Item JSX Amount")),l.a.createElement("th",null,l.a.createElement(g.Button,{floating:!0,medium:!0},l.a.createElement(g.Icon,null,"edit"))))))))))},O=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(w,null),l.a.createElement(N,null))}}]),t}(n.Component),S=function(){return l.a.createElement("div",null,l.a.createElement(g.Row,null,l.a.createElement(g.Col,{s:8,offset:"s2"},l.a.createElement(g.Card,{className:"blue-grey darken-1 z-depth-4",textClassName:"white-text"},l.a.createElement(g.Table,null,l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("th",null,l.a.createElement("h5",null,"Pantry JSX Title")),l.a.createElement("th",null,l.a.createElement("h5",null,"Pantry JSX Description")),l.a.createElement("th",null,l.a.createElement(g.Button,{floating:!0,medium:!0},l.a.createElement(g.Icon,null,"add_circle")))),l.a.createElement("tr",null,l.a.createElement("th",null,l.a.createElement("h5",null,"Pantry JSX Date")),l.a.createElement("th",null,l.a.createElement("h5",null,"Pantry JSX Amount")),l.a.createElement("th",null,l.a.createElement(g.Button,{floating:!0,medium:!0},l.a.createElement(g.Icon,null,"skip_next"))))))))))},j=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(S,null))}}]),t}(n.Component),x=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(N,null))}}]),t}(n.Component),R=function(){return l.a.createElement("div",null,l.a.createElement(g.Row,null,l.a.createElement(g.Col,{s:6,offset:"s3"},l.a.createElement(g.Card,{className:"z-depth-3"},l.a.createElement("h4",null,"Waste JSX Name"),l.a.createElement("h6",null,"Waste JSX Info")))))},k=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(R,null))}}]),t}(n.Component),T=function(){return l.a.createElement(g.Container,{className:"center-align"},l.a.createElement(g.Row,null,l.a.createElement("br",null),l.a.createElement(g.Col,{s:6,offset:"s3"},l.a.createElement("img",{id:"home-logo",alt:"yoso logo",src:"./img/Yoso-Logo-Large-Text-White-Tag-Shadow.svg"}))),l.a.createElement(g.Row,{className:"animate-up"},l.a.createElement(g.Col,{s:4},l.a.createElement(g.Card,null,l.a.createElement("h4",null,"Who?"))),l.a.createElement(g.Col,{s:4},l.a.createElement(g.Card,null,l.a.createElement("h4",null,"What?"))),l.a.createElement(g.Col,{s:4},l.a.createElement(g.Card,null,l.a.createElement("h4",null,"Why?")))))},z=a(62),B=a.n(z),A=a(178),L=A.genSaltSync(10),P=!1,J=function(e){var t=e.component,a=Object(E.a)(e,["component"]);return l.a.createElement(h.a,Object.assign({},a,{render:function(e){return P?l.a.createElement(t,e):l.a.createElement(d.a,{to:"/"})}}))},U=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(s.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(l)))).state={},a.handleSignUp=function(e,t){var n=e.first,l=e.last,r=e.username,c=e.email,o=e.password,m=e.street,s=e.city,i=e.state,u=e.zip,E=A.hashSync(o,L);B.a.post("/login",{first:n,last:l,username:r,email:c,password:E,street:m,city:s,state:i,zip:u}).then(function(e){e.data?(a.setState({name:n,email:c,loggedIn:!0}),t&&t()):console.log("Could not sign up! Please try again.")}).catch(function(e){console.log("There was an error signing you in. Please try again."),console.log(e)})},a.handleSignIn=function(e,t){var n=e.email,l=e.password;B.a.get("/login",{email:n}).then(function(e){if(e.data){var r=e.data.password;A.compare(l,r).then(function(l){!0===l?(a.setState({name:e.data.first,email:n,loggedIn:!0}),t&&t()):l.json("Incorrect Log-In Attempt. Please Try Again.")})}else console.log("Could not sign in! Please try again.")}).catch(function(e){console.log("There was an error with the signup server."),console.log(e)})},a}return Object(u.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this;return l.a.createElement(p.a,null,l.a.createElement("div",null,l.a.createElement("header",null,l.a.createElement(f,{className:"main-nav",loggedIn:this.state.loggedIn})),l.a.createElement("main",null,l.a.createElement(h.a,{exact:!0,path:"/",render:function(){return l.a.createElement(I,{loggedIn:e.state.loggedIn,signIn:e.handleSignIn})}}),l.a.createElement(h.a,{exact:!0,path:"/signup",render:function(){return l.a.createElement(v,{signUp:e.handleSignUp})}}),l.a.createElement(h.a,{exact:!0,path:"/about",component:T}),l.a.createElement(J,{exact:!0,path:"/home",component:y}),l.a.createElement(J,{exact:!0,path:"/lists",component:O}),l.a.createElement(J,{exact:!0,path:"/pantry",component:j}),l.a.createElement(J,{exact:!0,path:"/recipes",component:x}),l.a.createElement(J,{exact:!0,path:"/waste",component:k})),l.a.createElement("footer",null,l.a.createElement(g.Footer,null),">")))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(U,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},66:function(e,t,a){}},[[110,2,1]]]);
//# sourceMappingURL=main.6979b81d.chunk.js.map