(window["webpackJsonpto-do-list"]=window["webpackJsonpto-do-list"]||[]).push([[0],{24:function(t,e,n){t.exports=n(35)},29:function(t,e,n){},35:function(t,e,n){"use strict";n.r(e);var a=n(0),o=n.n(a),r=n(19),l=n.n(r),i=n(23),c=n(5),s=n(6),d=n(8),u=n(7),p=n(9),m=n(13),f=n(10);n(29);var h={background:"#333",color:"#fff",textAlign:"center",padding:"10px"},b={color:"#fff",textDecoration:"none"},y=function(){return o.a.createElement("header",{style:h},o.a.createElement("h1",null,"TodoList"),o.a.createElement(m.b,{style:b,to:"/"},"Home")," ","|",o.a.createElement(m.b,{style:b,to:"/about"},"About"))},g=n(22),E=function(t){function e(){var t,n;Object(c.a)(this,e);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(d.a)(this,(t=Object(u.a)(e)).call.apply(t,[this].concat(o)))).state={title:""},n.onChange=function(t){n.setState(Object(g.a)({},t.target.name,t.target.value))},n.onSubmit=function(t){t.preventDefault(),n.props.addToDo(n.state.title),n.setState({title:""})},n}return Object(p.a)(e,t),Object(s.a)(e,[{key:"render",value:function(){return o.a.createElement("form",{onSubmit:this.onSubmit,style:{display:"flex"}},o.a.createElement("input",{type:"text",name:"title",placeholder:"Add ToDo ...",style:{flex:"10",padding:"5px"},value:this.state.title,onChange:this.onChange}),o.a.createElement("input",{type:"submit",value:"submit",className:"btn",style:{flex:"1"}}))}}]),e}(a.Component),v=function(t){function e(){var t,n;Object(c.a)(this,e);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(d.a)(this,(t=Object(u.a)(e)).call.apply(t,[this].concat(o)))).getStyle=function(){return{background:"#f5f5f5",padding:"10px",borderBottom:"1px #ccc dotted",textDecoration:n.props.todo.isCompleted?"line-through":"none"}},n}return Object(p.a)(e,t),Object(s.a)(e,[{key:"render",value:function(){var t=this.props.todo,e=t.id,n=t.title;return o.a.createElement("div",{style:this.getStyle()},o.a.createElement("input",{type:"checkbox",onChange:this.props.markComplete.bind(this,e)})," ",n,o.a.createElement("button",{onClick:this.props.delTodo.bind(this,e),style:j},"x"))}}]),e}(a.Component),j={background:"#ff0000",color:"#fff",border:"none",padding:"5px 8px",borderRadius:"50%",cursor:"pointer",float:"right"},C=v,O=function(t){function e(){return Object(c.a)(this,e),Object(d.a)(this,Object(u.a)(e).apply(this,arguments))}return Object(p.a)(e,t),Object(s.a)(e,[{key:"render",value:function(){var t=this;return this.props.todos.map((function(e){return o.a.createElement(C,{key:e.id,todo:e,markComplete:t.props.markComplete,delTodo:t.props.delTodo})}))}}]),e}(o.a.Component);function k(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("h1",null,"About"),o.a.createElement("p",null,"This is my second React App"))}var x=function(t){function e(){var t,n;Object(c.a)(this,e);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(d.a)(this,(t=Object(u.a)(e)).call.apply(t,[this].concat(o)))).state={todos:[{id:1,title:"Washing Dishes",isCompleted:!1},{id:2,title:"Take a shower",isCompleted:!1},{id:3,title:"Go to gym",isCompleted:!1}]},n.markComplete=function(t){n.setState({todos:n.state.todos.map((function(e){return e.id===t&&(e.isCompleted=!e.isCompleted),e}))})},n.delTodo=function(t){n.setState({todos:n.state.todos.filter((function(e){return e.id!==t}))})},n.addToDo=function(t){var e={id:n.state.todos.length+1,title:t,isCompleted:!1};n.setState({todos:[].concat(Object(i.a)(n.state.todos),[e])})},n}return Object(p.a)(e,t),Object(s.a)(e,[{key:"render",value:function(){var t=this;return console.table(this.state.todos),o.a.createElement(m.a,null,o.a.createElement("div",{className:"App"},o.a.createElement("div",{className:"container"},o.a.createElement(y,null),o.a.createElement(f.a,{exact:!0,path:"/",render:function(e){return o.a.createElement(o.a.Fragment,null,o.a.createElement(E,{addToDo:t.addToDo}),o.a.createElement(O,{todos:t.state.todos,markComplete:t.markComplete,delTodo:t.delTodo}))}}),o.a.createElement(f.a,{path:"/about",component:k}))))}}]),e}(o.a.Component);l.a.render(o.a.createElement(x,null),document.getElementById("root"))}},[[24,1,2]]]);
//# sourceMappingURL=main.6f343651.chunk.js.map