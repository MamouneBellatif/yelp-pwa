(this.webpackJsonp=this.webpackJsonp||[]).push([[0],{159:function(e,t,r){"use strict";r.r(t);var n=r(0),a=r(239),i=r(232),s=r(47),o=r.n(s),c=r(9),l=r.n(c),u=r(4),d=r(72),f=r(142),j=r(8),h=r(123),b=r.n(h).a.create({baseURL:"https://api.yelp.com/v3/businesses",headers:{Authorization:"Bearer p2lseXmq5yarrSoE6PGD8hsXxBwmJV5U1dbV8FodsK26NFwKY3YcurmXSJi-3R9RhtiLpJRZbOi90665i5a_UZxA3RzsIu1gGnaYH24JzcSwoTrsp7_0Y_0xYYMhZHYx"}}),m=r(75),g=r(10),p=j.default.create({container:{flex:1,justifyContent:"center",paddingHorizontal:10},input:{height:40,borderColor:"gray",borderWidth:1,marginBottom:10,paddingLeft:10}}),x=function(e){var t=e.navigation,r=Object(n.useState)(""),a=l()(r,2),i=a[0],s=a[1],c=Object(n.useState)(""),j=l()(c,2),h=j[0],x=j[1],O=Object(n.useState)(!1),v=l()(O,2),y=(v[0],v[1]),w=function(){var e=o()((function*(){console.log("resto",i);try{var e=yield b.get("/search",{params:{term:i,location:h}});t.navigate("Results",{results:e.data.businesses})}catch(r){y(!0),m.default.show({type:"error",position:"bottom",text1:"Aucun r\xe9sultat, veuillez r\xe9esseyer    ",visibilityTime:4e3,autoHide:!0,topOffset:30,bottomOffset:40}),console.error("Error fetching data from Yelp API:",r)}}));return function(){return e.apply(this,arguments)}}();return Object(g.jsxs)(u.default,{style:p.container,children:[Object(g.jsx)(d.default,{style:p.input,value:i,onChangeText:s,placeholder:"Nom du restaurant"}),Object(g.jsx)(d.default,{style:p.input,value:h,onChangeText:x,placeholder:"Ville ou code postal"}),Object(g.jsx)(f.default,{title:"Valider",onPress:w})]})},O=r(26),v=r(91),y=r(43),w=r(62),R=j.default.create({container:{flex:1,backgroundColor:"#fff"},restaurantContainer:{flexDirection:"row",marginHorizontal:10,marginVertical:5,backgroundColor:"#f5f5f5",borderRadius:5},image:{width:100,height:100,borderRadius:5},restaurantInfo:{marginLeft:10,justifyContent:"space-around",flex:1},name:{fontWeight:"bold"}}),S=function(e){var t=e.route,r=e.navigation,n=t.params.results;return Object(g.jsx)(u.default,{style:R.container,children:Object(g.jsx)(v.default,{data:n,renderItem:function(e){var t=e.item;return Object(g.jsx)(w.default,{onPress:function(){return r.navigate("RestaurantDetails",{restaurantId:t.id})},children:Object(g.jsxs)(u.default,{style:R.restaurantContainer,children:[Object(g.jsx)(y.default,{style:R.image,source:{uri:t.image_url}}),Object(g.jsxs)(u.default,{style:R.restaurantInfo,children:[Object(g.jsx)(O.default,{style:R.name,children:t.name}),Object(g.jsx)(O.default,{children:t.price}),Object(g.jsx)(O.default,{children:t.categories.map((function(e){return e.title})).join(", ")}),Object(g.jsx)(O.default,{children:t.location.address1})]})]})})},keyExtractor:function(e){return e.id}})})},C=r(55),B=j.default.create({container:{flex:1,backgroundColor:"#fff",padding:10},image:{width:"100%",height:200,marginBottom:15},restaurantDetails:{marginBottom:20},restaurantName:{fontSize:24,fontWeight:"bold",marginBottom:5},reviewsContainer:{},reviewsTitle:{fontSize:20,fontWeight:"bold",marginBottom:10},review:{marginBottom:10,borderBottomWidth:1,borderBottomColor:"#ccc",paddingBottom:10},reviewUser:{fontWeight:"bold"},reviewRating:{fontStyle:"italic"}}),z=function(e){var t=e.route.params.restaurantId,r=Object(n.useState)(null),a=l()(r,2),i=a[0],s=a[1],c=Object(n.useState)([]),d=l()(c,2),f=d[0],j=d[1];return Object(n.useEffect)((function(){var e=function(){var e=o()((function*(){try{var e=yield b.get("/"+t);s(e.data)}catch(r){console.error("Error fetching restaurant details:",r)}}));return function(){return e.apply(this,arguments)}}(),r=function(){var e=o()((function*(){try{var e=yield b.get("/"+t+"/reviews");j(e.data.reviews)}catch(r){console.error("Error fetching restaurant reviews:",r)}}));return function(){return e.apply(this,arguments)}}();e(),r()}),[t]),i?Object(g.jsxs)(C.default,{style:B.container,children:[Object(g.jsx)(y.default,{style:B.image,source:{uri:i.image_url}}),Object(g.jsxs)(u.default,{style:B.restaurantDetails,children:[Object(g.jsx)(O.default,{style:B.restaurantName,children:i.name}),Object(g.jsxs)(O.default,{children:[i.price," - ",i.categories.map((function(e){return e.title})).join(", ")]}),Object(g.jsx)(O.default,{children:i.location.address1}),Object(g.jsxs)(O.default,{children:["Telephone: ",i.display_phone]}),Object(g.jsxs)(O.default,{children:["Note: ",i.rating," (",i.review_count," avis)"]})]}),Object(g.jsxs)(u.default,{style:B.reviewsContainer,children:[Object(g.jsx)(O.default,{style:B.reviewsTitle,children:"Avis:"}),f.map((function(e,t){return Object(g.jsxs)(u.default,{style:B.review,children:[Object(g.jsxs)(O.default,{style:B.reviewUser,children:[e.user.name,":"]}),Object(g.jsx)(O.default,{children:e.text}),Object(g.jsxs)(O.default,{style:B.reviewRating,children:["Rating: ",e.rating]})]},t)}))]})]}):Object(g.jsx)(O.default,{children:"Loading..."})},Y=Object(i.default)();t.default=function(){return Object(g.jsxs)(a.default,{children:[Object(g.jsxs)(Y.Navigator,{initialRouteName:"Search",children:[Object(g.jsx)(Y.Screen,{name:"Search",component:x,options:{title:"Recherche"}}),Object(g.jsx)(Y.Screen,{name:"Results",component:S,options:{title:"R\xe9sultats"}}),Object(g.jsx)(Y.Screen,{name:"RestaurantDetails",component:z,options:{title:"D\xe9tails du restaurant"}})]}),Object(g.jsx)(m.default,{ref:function(e){return m.default.setRef(e)}})]})}},164:function(e,t,r){e.exports=r(229)}},[[164,1,2]]]);
//# sourceMappingURL=app.c06faae7.chunk.js.map