(this.webpackJsonp=this.webpackJsonp||[]).push([[0],{216:function(e,t,r){"use strict";r.r(t);var n=r(0),a=r(365),i=r(358),o=r(43),s=r.n(o),c=r(15),l=r.n(c),u=r(10),d=r(64),f=r(119),h=r(11),j=r(77),b=r.n(j),p={get:function(){var e=s()((function*(e,t){var r="?term="+t.params.term+"&location="+t.params.location,n=yield fetch("https://purple-art-1f04.bellatif6169.workers.dev/https://api.yelp.com/v3/businesses"+e+r,{method:"GET",headers:{Authorization:"Bearer p2lseXmq5yarrSoE6PGD8hsXxBwmJV5U1dbV8FodsK26NFwKY3YcurmXSJi-3R9RhtiLpJRZbOi90665i5a_UZxA3RzsIu1gGnaYH24JzcSwoTrsp7_0Y_0xYYMhZHYx"}});return JSON.parse(yield n.text())}));return function(t,r){return e.apply(this,arguments)}}()},m=r(99),g=r(18),O=h.default.create({container:{flex:1,justifyContent:"center",paddingHorizontal:10},input:{height:40,borderColor:"gray",borderWidth:1,marginBottom:10,paddingLeft:10}}),y=function(e){var t=e.navigation,r=Object(n.useState)(""),a=l()(r,2),i=a[0],o=a[1],c=Object(n.useState)(""),h=l()(c,2),j=h[0],b=h[1],y=Object(n.useState)(!1),x=l()(y,2),v=(x[0],x[1]),C=function(){var e=s()((function*(){console.log("resto",i);try{var e=yield p.get("/search",{params:{term:i,location:j}});t.navigate("Results",{results:e.businesses})}catch(r){v(!0),m.default.show({type:"error",position:"bottom",text1:"Aucun r\xe9sultat, veuillez r\xe9esseyer    ",visibilityTime:4e3,autoHide:!0,topOffset:30,bottomOffset:40}),console.error("Error fetching data from Yelp API:",r)}}));return function(){return e.apply(this,arguments)}}();return Object(g.jsxs)(u.default,{style:O.container,children:[Object(g.jsx)(d.default,{style:O.input,value:i,onChangeText:o,placeholder:"Nom du restaurant"}),Object(g.jsx)(d.default,{style:O.input,value:j,onChangeText:b,placeholder:"Ville ou code postal"}),Object(g.jsx)(f.default,{title:"Valider",onPress:C})]})},x=r(29),v=r(87),C=r(55),w=r(83),R=h.default.create({container:{flex:1,backgroundColor:"#fff"},restaurantContainer:{flexDirection:"row",marginHorizontal:10,marginVertical:5,backgroundColor:"#f5f5f5",borderRadius:5},image:{width:100,height:100,borderRadius:5},restaurantInfo:{marginLeft:10,justifyContent:"space-around",flex:1},name:{fontWeight:"bold"}}),S=function(e){var t=e.route,r=e.navigation,n=t.params.results;return Object(g.jsx)(u.default,{style:R.container,children:Object(g.jsx)(v.default,{data:n,renderItem:function(e){var t=e.item;return Object(g.jsx)(w.default,{onPress:function(){return r.navigate("RestaurantDetails",{restaurantId:t.id})},children:Object(g.jsxs)(u.default,{style:R.restaurantContainer,children:[Object(g.jsx)(C.default,{style:R.image,source:{uri:t.image_url}}),Object(g.jsxs)(u.default,{style:R.restaurantInfo,children:[Object(g.jsx)(x.default,{style:R.name,children:t.name}),Object(g.jsx)(x.default,{children:t.price}),Object(g.jsx)(x.default,{children:t.categories.map((function(e){return e.title})).join(", ")}),Object(g.jsx)(x.default,{children:t.location.address1})]})]})})},keyExtractor:function(e){return e.id}})})},k=r(65),T=h.default.create({container:{flex:1,backgroundColor:"#fff",padding:10},image:{width:"100%",height:200,marginBottom:15},restaurantDetails:{marginBottom:20},restaurantName:{fontSize:24,fontWeight:"bold",marginBottom:5},reviewsContainer:{},reviewsTitle:{fontSize:20,fontWeight:"bold",marginBottom:10},review:{marginBottom:10,borderBottomWidth:1,borderBottomColor:"#ccc",paddingBottom:10},reviewUser:{fontWeight:"bold"},reviewRating:{fontStyle:"italic"}}),P=function(e){var t=e.route.params.restaurantId,r=Object(n.useState)(null),a=l()(r,2),i=a[0],o=a[1],c=Object(n.useState)([]),d=l()(c,2),f=d[0],h=d[1];return Object(n.useEffect)((function(){var e=function(){var e=s()((function*(){try{var e=yield p.get("/"+t);o(e.data)}catch(r){console.error("Error fetching restaurant details:",r)}}));return function(){return e.apply(this,arguments)}}(),r=function(){var e=s()((function*(){try{var e=yield p.get("/"+t+"/reviews");h(e.data.reviews)}catch(r){console.error("Error fetching restaurant reviews:",r)}}));return function(){return e.apply(this,arguments)}}();e(),r()}),[t]),i?Object(g.jsxs)(k.default,{style:T.container,children:[Object(g.jsx)(C.default,{style:T.image,source:{uri:i.image_url}}),Object(g.jsxs)(u.default,{style:T.restaurantDetails,children:[Object(g.jsx)(x.default,{style:T.restaurantName,children:i.name}),Object(g.jsxs)(x.default,{children:[i.price," - ",i.categories.map((function(e){return e.title})).join(", ")]}),Object(g.jsx)(x.default,{children:i.location.address1}),Object(g.jsxs)(x.default,{children:["Telephone: ",i.display_phone]}),Object(g.jsxs)(x.default,{children:["Note: ",i.rating," (",i.review_count," avis)"]})]}),Object(g.jsxs)(u.default,{style:T.reviewsContainer,children:[Object(g.jsx)(x.default,{style:T.reviewsTitle,children:"Avis:"}),f.map((function(e,t){return Object(g.jsxs)(u.default,{style:T.review,children:[Object(g.jsxs)(x.default,{style:T.reviewUser,children:[e.user.name,":"]}),Object(g.jsx)(x.default,{children:e.text}),Object(g.jsxs)(x.default,{style:T.reviewRating,children:["Rating: ",e.rating]})]},t)}))]})]}):Object(g.jsx)(x.default,{children:"Loading..."})},B=r(16),E=r.n(B),W=(b.a.create({baseURL:"https://purple-art-1f04.bellatif6169.workers.dev/https://api-livre.bellatif6169.workers.dev",headers:{"Content-Type":"application/json","Referrer-Policy":"strict-origin-when-cross-origin","Cross-Origin-Embedder-Policy":'require-corp; report-to="default";',"Cross-Origin-Opener-Policy":'same-site; report-to="default";',"Cross-Origin-Resource-Policy":"same-site","X-Content-Type-Options":"nosniff"}}),b.a.create({baseURL:"https://api-livre.bellatif6169.workers.dev",headers:{"Content-Type":"*/*"}})),z=r(145),I=h.default.create({container:{flex:1,padding:20,backgroundColor:"#fff"},heading:{fontSize:24,fontWeight:"bold",marginBottom:20},commentContainer:{marginBottom:10,borderWidth:1,borderColor:"#ccc",padding:10},username:{fontWeight:"bold"},content:{marginTop:5},input:{borderWidth:1,borderColor:"#ccc",padding:10,marginBottom:10},button:{backgroundColor:"blue",color:"#fff",padding:10},item:{backgroundColor:"lightgray",padding:6,marginVertical:2,marginHorizontal:16,borderRadius:4}}),N=function(){var e=Object(n.useState)([]),t=l()(e,2),r=t[0],a=t[1],i=Object(n.useState)(""),o=l()(i,2),c=o[0],h=o[1];Object(n.useEffect)((function(){W.get("/comments/").then((function(e){console.log(e.data),e.data.length>5&&(e.data=e.data.slice(e.data.length-5,e.data.length)),a(e.data)}))}),[]);var j=function(){var e=s()((function*(){fetch("https://api-livre.bellatif6169.workers.dev/comments/",{method:"POST",headers:{"Content-Type":"application/json","Referrer-Policy":"strict-origin-when-cross-origin","Cross-Origin-Embedder-Policy":'require-corp; report-to="default";',"Cross-Origin-Opener-Policy":'same-site; report-to="default";',"Cross-Origin-Resource-Policy":"same-site","X-Content-Type-Options":"nosniff"},body:JSON.stringify({content:c})}).then((function(e){a([].concat(E()(r),[c])),r.length>5&&r.shift(),h("")})).catch((function(e){console.error("Error fetching data from Cloudflare Workers API:",e)}))}));return function(){return e.apply(this,arguments)}}();return Object(g.jsxs)(u.default,{style:I.container,children:[Object(g.jsx)(x.default,{style:I.heading,children:"Livre d'or"}),Object(g.jsx)(z.ScrollView,{style:I.container,children:Object(g.jsx)(z.FlatList,{data:r,keyExtractor:function(e,t){return t},renderItem:function(e){var t=e.item;return Object(g.jsx)(u.default,{style:I.item,children:Object(g.jsxs)(x.default,{children:["anonyme: ",t]})})}})}),Object(g.jsx)(x.default,{style:I.heading,children:"Add a comment"}),Object(g.jsxs)(u.default,{style:I.container,children:[Object(g.jsx)(d.default,{style:I.input,placeholder:"Enter your comment",value:c,onChangeText:h}),Object(g.jsx)(f.default,{style:I.button,title:"Submit",onPress:j})]})]})},J=Object(i.default)();t.default=function(){return Object(g.jsxs)(a.default,{children:[Object(g.jsx)(N,{}),Object(g.jsxs)(J.Navigator,{initialRouteName:"Search",children:[Object(g.jsx)(J.Screen,{name:"Search",component:y,options:{title:"Recherche"}}),Object(g.jsx)(J.Screen,{name:"Results",component:S,options:{title:"R\xe9sultats"}}),Object(g.jsx)(J.Screen,{name:"RestaurantDetails",component:P,options:{title:"D\xe9tails du restaurant"}})]}),Object(g.jsx)(m.default,{ref:function(e){return m.default.setRef(e)}})]})}},222:function(e,t,r){e.exports=r(355)}},[[222,1,2]]]);
//# sourceMappingURL=app.4e1af793.chunk.js.map