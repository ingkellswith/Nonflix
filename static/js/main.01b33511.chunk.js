(this.webpackJsonpnonflix=this.webpackJsonpnonflix||[]).push([[0],{71:function(n,t,e){},72:function(n,t,e){"use strict";e.r(t);var r=e(0),i=e(1),c=e.n(i),a=e(37),o=e.n(a),s=e(19),u=e(5),l=e(10),d=e.n(l),j=e(13),p=e(14),b=e(15),h=e(17),x=e(16),g=e(3),f=e(2),m=e(12);function v(){var n=Object(g.a)(["\n  margin-top: 25px;\n  display: grid;\n  grid-template-columns: repeat(auto-fill, 125px);\n  grid-gap: 22px;\n"]);return v=function(){return n},n}function O(){var n=Object(g.a)(["\n  font-size: 20px;\n  font-weight: 600;\n"]);return O=function(){return n},n}function y(){var n=Object(g.a)(["\n  :not(:last-child) {\n    margin-bottom: 50px;\n  }\n"]);return y=function(){return n},n}var _=f.c.div(y()),w=f.c.span(O()),k=f.c.div(v()),S=function(n){var t=n.title,e=n.children;return Object(r.jsxs)(_,{children:[Object(r.jsx)(w,{children:t}),Object(r.jsx)(k,{children:e})]})};function T(){var n=Object(g.a)(["\n  height: 100vh;\n  width: 100vw;\n  display: flex;\n  justify-content: center;\n  font-size: 28px;\n  margin-top: 20px;\n"]);return T=function(){return n},n}var z=f.c.div(T()),R=function(){return Object(r.jsx)(z,{children:Object(r.jsx)("span",{role:"img","aria-label":"Loading",children:"\u23f0"})})};function I(){var n=Object(g.a)(["\n  color: ",";\n"]);return I=function(){return n},n}function M(){var n=Object(g.a)(["\n  width: 100vw;\n  display: flex;\n  justify-content: center;\n"]);return M=function(){return n},n}var C=f.c.div(M()),U=f.c.span(I(),(function(n){return n.color})),F=function(n){var t=n.text,e=n.color;return Object(r.jsx)(C,{children:Object(r.jsx)(U,{color:e,children:t})})};function P(){var n=Object(g.a)(["\n  font-size: 10px;\n  color: rgba(255, 255, 255, 0.5);\n"]);return P=function(){return n},n}function N(){var n=Object(g.a)(["\n  display: block;\n  margin-bottom: 3px;\n"]);return N=function(){return n},n}function D(){var n=Object(g.a)(["\n  margin-bottom: 5px;\n  position: relative;\n  &:hover {\n    "," {\n      opacity: 0.3;\n    }\n    "," {\n      opacity: 1;\n    }\n  }\n"]);return D=function(){return n},n}function V(){var n=Object(g.a)(["\n  bottom: 5px;\n  right: 5px;\n  position: absolute;\n  opacity: 0;\n  transition: opacity 0.1s linear;\n"]);return V=function(){return n},n}function A(){var n=Object(g.a)(["\n  background-image: url(",");\n  height: 180px;\n  background-size: cover;\n  border-radius: 4px;\n  background-position: center center;\n  transition: opacity 0.1s linear;\n"]);return A=function(){return n},n}function B(){var n=Object(g.a)(["\n  font-size: 12px;\n"]);return B=function(){return n},n}var L=f.c.div(B()),q=f.c.div(A(),(function(n){return n.bgUrl})),J=f.c.span(V()),E=f.c.div(D(),q,J),W=f.c.span(N()),G=f.c.span(P()),H=function(n){var t=n.id,e=n.imageUrl,i=n.title,c=n.rating,a=n.year,o=n.isMovie,u=void 0!==o&&o;return Object(r.jsx)(s.b,{to:u?"/movie/".concat(t):"/show/".concat(t),children:Object(r.jsxs)(L,{children:[Object(r.jsxs)(E,{children:[Object(r.jsx)(q,{bgUrl:e?"https://image.tmdb.org/t/p/w300".concat(e):"/noPosterSmall.png"}),Object(r.jsxs)(J,{children:[Object(r.jsx)("span",{role:"img","aria-label":"rating",children:"\u2b50\ufe0f"})," ",c,"/10"]})]}),Object(r.jsx)(W,{children:i.length>18?"".concat(i.substring(0,18),"..."):i}),Object(r.jsx)(G,{children:a})]})})};function K(){var n=Object(g.a)(["\n  padding: 20px;\n"]);return K=function(){return n},n}var Q=f.c.div(K()),X=function(n){var t=n.nowPlaying,e=n.popular,i=n.upcoming,c=n.loading,a=n.error;return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(m.a,{children:Object(r.jsx)("title",{children:"Movies | Nomflix"})}),c?Object(r.jsx)(R,{}):Object(r.jsxs)(Q,{children:[Object(r.jsx)(m.a,{children:Object(r.jsx)("title",{children:"Movies | Nomflix"})}),t&&t.length>0&&Object(r.jsx)(S,{title:"Now Playing",children:t.map((function(n){return Object(r.jsx)(H,{id:n.id,imageUrl:n.poster_path,title:n.original_title,rating:n.vote_average,year:n.release_date.substring(0,4),isMovie:!0},n.id)}))}),i&&i.length>0&&Object(r.jsx)(S,{title:"Upcoming Movies",children:i.map((function(n){return Object(r.jsx)(H,{id:n.id,imageUrl:n.poster_path,title:n.original_title,rating:n.vote_average,year:n.release_date.substring(0,4),isMovie:!0},n.id)}))}),e&&e.length>0&&Object(r.jsx)(S,{title:"Popular Movies",children:e.map((function(n){return Object(r.jsx)(H,{id:n.id,imageUrl:n.poster_path,title:n.original_title,rating:n.vote_average,year:n.release_date.substring(0,4),isMovie:!0},n.id)}))}),a&&Object(r.jsx)(F,{color:"#e74c3c",text:a})]})]})},Y=e(43),Z=e.n(Y).a.create({baseURL:"https://api.themoviedb.org/3/",params:{api_key:"10923b261ba94d897ac6b81148314a3f",language:"en-US"}}),$=function(){return Z.get("movie/now_playing")},nn=function(){return Z.get("movie/upcoming")},tn=function(){return Z.get("movie/popular")},en=function(n){return Z.get("movie/".concat(n),{params:{append_to_response:"videos"}})},rn=function(n){return Z.get("movie/".concat(n,"/credits"))},cn=function(n){return Z.get("search/movie",{params:{query:encodeURIComponent(n)}})},an=function(){return Z.get("tv/top_rated")},on=function(){return Z.get("tv/popular")},sn=function(){return Z.get("tv/airing_today")},un=function(n){return Z.get("tv/".concat(n),{params:{append_to_response:"videos"}})},ln=function(n){return Z.get("tv/".concat(n,"/credits"))},dn=function(n){return Z.get("search/tv",{params:{query:encodeURIComponent(n)}})},jn=function(n){Object(h.a)(e,n);var t=Object(x.a)(e);function e(){var n;Object(p.a)(this,e);for(var r=arguments.length,i=new Array(r),c=0;c<r;c++)i[c]=arguments[c];return(n=t.call.apply(t,[this].concat(i))).state={nowPlaying:null,upcoming:null,popular:null,error:null,loading:!0},n}return Object(b.a)(e,[{key:"componentDidMount",value:function(){var n=Object(j.a)(d.a.mark((function n(){var t,e,r,i,c,a;return d.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,$();case 3:return t=n.sent,e=t.data.results,n.next=7,nn();case 7:return r=n.sent,i=r.data.results,n.next=11,tn();case 11:c=n.sent,a=c.data.results,this.setState({nowPlaying:e,upcoming:i,popular:a}),n.next=19;break;case 16:n.prev=16,n.t0=n.catch(0),this.setState({error:"Can't find movie information."});case 19:return n.prev=19,this.setState({loading:!1}),n.finish(19);case 22:case"end":return n.stop()}}),n,this,[[0,16,19,22]])})));return function(){return n.apply(this,arguments)}}()},{key:"render",value:function(){console.log(this.state);var n=this.state,t=n.nowPlaying,e=n.upcoming,i=n.popular,c=n.error,a=n.loading;return Object(r.jsx)(X,{nowPlaying:t,upcoming:e,popular:i,error:c,loading:a})}}]),e}(c.a.Component);function pn(){var n=Object(g.a)(["\n  padding: 20px;\n"]);return pn=function(){return n},n}var bn=f.c.div(pn()),hn=function(n){var t=n.topRated,e=n.popular,i=n.airingToday,c=n.loading,a=n.error;return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(m.a,{children:Object(r.jsx)("title",{children:"TV Shows | Nomflix"})}),c?Object(r.jsx)(R,{}):Object(r.jsxs)(bn,{children:[t&&t.length>0&&Object(r.jsx)(S,{title:"Top Rated Shows",children:t.map((function(n){return Object(r.jsx)(H,{id:n.id,imageUrl:n.poster_path,title:n.original_name,rating:n.vote_average,year:n.first_air_date.substring(0,4)},n.id)}))}),e&&e.length>0&&Object(r.jsx)(S,{title:"Popular Shows",children:e.map((function(n){return Object(r.jsx)(H,{id:n.id,imageUrl:n.poster_path,title:n.original_name,rating:n.vote_average,year:n.first_air_date.substring(0,4)},n.id)}))}),i&&i.length>0&&Object(r.jsx)(S,{title:"Airing Today",children:i.map((function(n){return Object(r.jsx)(H,{id:n.id,imageUrl:n.poster_path,title:n.original_name,rating:n.vote_average,year:n.first_air_date.substring(0,4)},n.id)}))}),a&&Object(r.jsx)(F,{color:"#e74c3c",text:a})]})]})},xn=function(n){Object(h.a)(e,n);var t=Object(x.a)(e);function e(){var n;Object(p.a)(this,e);for(var r=arguments.length,i=new Array(r),c=0;c<r;c++)i[c]=arguments[c];return(n=t.call.apply(t,[this].concat(i))).state={topRated:null,popular:null,airingToday:null,loading:!0,error:null},n}return Object(b.a)(e,[{key:"componentDidMount",value:function(){var n=Object(j.a)(d.a.mark((function n(){var t,e,r,i,c,a;return d.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,an();case 3:return t=n.sent,e=t.data.results,n.next=7,on();case 7:return r=n.sent,i=r.data.results,n.next=11,sn();case 11:c=n.sent,a=c.data.results,this.setState({topRated:e,popular:i,airingToday:a}),n.next=19;break;case 16:n.prev=16,n.t0=n.catch(0),this.setState({error:"Can't find TV information."});case 19:return n.prev=19,this.setState({loading:!1}),n.finish(19);case 22:case"end":return n.stop()}}),n,this,[[0,16,19,22]])})));return function(){return n.apply(this,arguments)}}()},{key:"render",value:function(){var n=this.state,t=n.topRated,e=n.popular,i=n.airingToday,c=n.loading,a=n.error;return Object(r.jsx)(hn,{topRated:t,popular:e,airingTday:i,loading:c,error:a})}}]),e}(c.a.Component);function gn(){var n=Object(g.a)(["\n  all: unset;\n  font-size: 28px;\n  width: 100%;\n"]);return gn=function(){return n},n}function fn(){var n=Object(g.a)(["\n  margin-bottom: 50px;\n  width: 100%;\n"]);return fn=function(){return n},n}function mn(){var n=Object(g.a)(["\n  padding: 20px;\n"]);return mn=function(){return n},n}var vn=f.c.div(mn()),On=f.c.form(fn()),yn=f.c.input(gn()),_n=function(n){var t=n.movieResults,e=n.tvResults,i=n.loading,c=n.searchTerm,a=n.handleSubmit,o=n.error,s=n.updateTerm;return Object(r.jsxs)(vn,{children:[Object(r.jsx)(m.a,{children:Object(r.jsx)("title",{children:"Search | Nomflix"})}),Object(r.jsx)(On,{onSubmit:a,children:Object(r.jsx)(yn,{placeholder:"Search Movies or TV Shows...",value:c,onChange:s})}),i?Object(r.jsx)(R,{}):Object(r.jsxs)(r.Fragment,{children:[t&&t.length>0&&Object(r.jsx)(S,{title:"Movie Results",children:t.map((function(n){return Object(r.jsx)(H,{id:n.id,imageUrl:n.poster_path,title:n.original_title,rating:n.vote_average,year:n.release_date&&n.release_date.substring(0,4),isMovie:!0},n.id)}))}),e&&e.length>0&&Object(r.jsx)(S,{title:"TV Show Results",children:e.map((function(n){return Object(r.jsx)(H,{id:n.id,imageUrl:n.poster_path,title:n.original_name,rating:n.vote_average,year:n.first_air_date&&n.first_air_date.substring(0,4)},n.id)}))}),o&&Object(r.jsx)(F,{color:"#e74c3c",text:o}),e&&t&&0===e.length&&0===t.length&&Object(r.jsx)(F,{text:"Nothing found",color:"#95a5a6"})]})]})},wn=function(n){Object(h.a)(e,n);var t=Object(x.a)(e);function e(){var n;Object(p.a)(this,e);for(var r=arguments.length,i=new Array(r),c=0;c<r;c++)i[c]=arguments[c];return(n=t.call.apply(t,[this].concat(i))).state={movieResults:null,tvResults:null,searchTerm:"",loading:!1,error:null},n.handleSubmit=function(t){t.preventDefault(),""!==n.state.searchTerm&&n.searchByTerm()},n.updateTerm=function(t){var e=t.target.value;n.setState({searchTerm:e})},n.searchByTerm=Object(j.a)(d.a.mark((function t(){var e,r,i,c,a;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=n.state.searchTerm,n.setState({loading:!0}),t.prev=2,t.next=5,cn(e);case 5:return r=t.sent,i=r.data.results,t.next=9,dn(e);case 9:c=t.sent,a=c.data.results,n.setState({movieResults:i,tvResults:a}),t.next=17;break;case 14:t.prev=14,t.t0=t.catch(2),n.setState({error:"Can't find results."});case 17:return t.prev=17,n.setState({loading:!1}),t.finish(17);case 20:case"end":return t.stop()}}),t,null,[[2,14,17,20]])}))),n}return Object(b.a)(e,[{key:"render",value:function(){var n=this.state,t=n.movieResults,e=n.tvResults,i=n.searchTerm,c=n.loading,a=n.error;return Object(r.jsx)(_n,{movieResults:t,tvResults:e,loading:c,error:a,searchTerm:i,handleSubmit:this.handleSubmit,updateTerm:this.updateTerm})}}]),e}(c.a.Component);function kn(){var n=Object(g.a)(["\n  height: 50px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"]);return kn=function(){return n},n}function Sn(){var n=Object(g.a)(["\n  width: 80px;\n  height: 50px;\n  text-align: center;\n  border-bottom: 3px solid\n    ",";\n  transition: border-bottom 0.5s ease-in-out;\n"]);return Sn=function(){return n},n}function Tn(){var n=Object(g.a)(["\n  display: flex;\n"]);return Tn=function(){return n},n}function zn(){var n=Object(g.a)(["\n  color: white;\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 50px;\n  display: flex;\n  align-items: center;\n  background-color: rgba(20, 20, 20, 0.8);\n  z-index: 10;\n  box-shadow: 0px 1px 5px 2px rgba(0, 0, 0, 0.8);\n"]);return zn=function(){return n},n}var Rn=f.c.header(zn()),In=f.c.ul(Tn()),Mn=f.c.li(Sn(),(function(n){return n.current?"#3498db":"transparent"})),Cn=Object(f.c)(s.b)(kn()),Un=Object(u.g)((function(n){var t=n.location.pathname;return Object(r.jsx)(Rn,{children:Object(r.jsxs)(In,{children:[Object(r.jsx)(Mn,{current:"/"===t,children:Object(r.jsx)(Cn,{to:"/",children:"Movies"})}),Object(r.jsx)(Mn,{current:"/tv"===t,children:Object(r.jsx)(Cn,{to:"/tv",children:"TV"})}),Object(r.jsx)(Mn,{current:"/search"===t,children:Object(r.jsx)(Cn,{to:"/search",children:"Search"})})]})})}));function Fn(){var n=Object(g.a)(["\n  all: unset;\n  padding: 10px;\n  font-size: 20px;\n  margin: 15px;\n  margin-left: 0px;\n  background-color: #eec100;\n  color: black;\n  border-radius: 10px;\n  cursor: pointer;\n"]);return Fn=function(){return n},n}function Pn(){var n=Object(g.a)(["\n  display: flex;\n  align-items: center;\n"]);return Pn=function(){return n},n}function Nn(){var n=Object(g.a)(["\n  background-color: #eec100;\n  color: black;\n  padding: 3px;\n  font-size: 18px;\n  border-radius: 10px;\n  font-weight: 600;\n  margin-left: 10px;\n  margin-top: 5px;\n"]);return Nn=function(){return n},n}function Dn(){var n=Object(g.a)(["\n  font-size: 18px;\n  opacity: 0.7;\n  line-height: 1.5;\n  width: 50%;\n"]);return Dn=function(){return n},n}function Vn(){var n=Object(g.a)(["\n  margin: 0 10px;\n  font-size: 30px;\n"]);return Vn=function(){return n},n}function An(){var n=Object(g.a)(["\n  font-size: 30px;\n"]);return An=function(){return n},n}function Bn(){var n=Object(g.a)(["\n  margin: 20px 0;\n"]);return Bn=function(){return n},n}function Ln(){var n=Object(g.a)(["\n  font-size: 50px;\n  vertical-align: middle;\n"]);return Ln=function(){return n},n}function qn(){var n=Object(g.a)(["\n  width: 70%;\n  margin-left: 10px;\n"]);return qn=function(){return n},n}function Jn(){var n=Object(g.a)(["\n  width: 30%;\n  background-image: url(",");\n  background-position: center center;\n  background-size: cover;\n  height: 100%;\n  border-radius: 5px;\n  margin-right: 30px;\n"]);return Jn=function(){return n},n}function En(){var n=Object(g.a)(["\n  display: flex;\n  width: 100%;\n  position: relative;\n  z-index: 1;\n  height: 100%;\n"]);return En=function(){return n},n}function Wn(){var n=Object(g.a)(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-image: url(",");\n  background-position: center center;\n  background-size: cover;\n  filter: blur(3px);\n  opacity: 0.5;\n  z-index: 0;\n"]);return Wn=function(){return n},n}function Gn(){var n=Object(g.a)(["\n  height: calc(100vh - 50px);\n  width: 100%;\n  position: relative;\n  padding: 50px;\n"]);return Gn=function(){return n},n}var Hn=f.c.div(Gn()),Kn=f.c.div(Wn(),(function(n){return n.bgImage})),Qn=f.c.div(En()),Xn=f.c.div(Jn(),(function(n){return n.bgImage})),Yn=f.c.div(qn()),Zn=f.c.h3(Ln()),$n=f.c.div(Bn()),nt=f.c.span(An()),tt=f.c.span(Vn()),et=f.c.p(Dn()),rt=f.c.div(Nn()),it=f.c.div(Pn()),ct=f.c.button(Fn()),at=function(n){var t=n.result,e=n.loading,i=(n.error,n.currentIndex),c=n.content,a=n.setIndex;return e?Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(m.a,{children:Object(r.jsx)("title",{children:"Loading | Nomflix"})}),Object(r.jsx)(R,{})]}):Object(r.jsxs)(Hn,{children:[Object(r.jsx)(m.a,{children:Object(r.jsxs)("title",{children:[t.original_title?t.original_title:t.original_name," ","| Nomflix"]})}),Object(r.jsx)(Kn,{bgImage:"https://image.tmdb.org/t/p/original".concat(t.backdrop_path)}),Object(r.jsxs)(Qn,{children:[Object(r.jsx)(Xn,{bgImage:t.poster_path?"https://image.tmdb.org/t/p/original".concat(t.poster_path):"/noPosterSmall.png"}),Object(r.jsxs)(Yn,{children:[Object(r.jsxs)(it,{children:[Object(r.jsx)(Zn,{children:t.original_title?t.original_title:t.original_name}),Object(r.jsx)("a",{href:"https://www.imdb.com/title/".concat(t.imdb_id),children:Object(r.jsx)(rt,{children:"IMDb"})})]}),Object(r.jsxs)($n,{children:[Object(r.jsx)(nt,{children:t.release_date?t.release_date.substring(0,4):t.first_air_date.substring(0,4)}),Object(r.jsx)(tt,{children:"\u2022"}),Object(r.jsxs)(nt,{children:[t.runtime?t.runtime:t.episode_run_time[0]," min"]}),Object(r.jsx)(tt,{children:"\u2022"}),Object(r.jsx)(nt,{children:t.genres&&t.genres.map((function(n,e){return e===t.genres.length-1?n.name:"".concat(n.name," / ")}))})]}),Object(r.jsx)(et,{children:t.overview}),Object(r.jsxs)("div",{children:[c.map((function(n,t){return Object(r.jsx)(ct,{onClick:function(){return a(t)},children:n.tab})})),Object(r.jsx)("div",{children:c[i].content})]})]})]})]})};function ot(){var n=Object(g.a)(["\n  margin: 15px;\n"]);return ot=function(){return n},n}function st(){var n=Object(g.a)(["\n  margin: 15px;\n  "," {\n    padding: 10px;\n    text-align: center;\n  }\n"]);return st=function(){return n},n}function ut(){var n=Object(g.a)(["\n  margin-top: 30px;\n  font-weight: 600;\n  font-size: 50px;\n"]);return ut=function(){return n},n}function lt(){var n=Object(g.a)(["\n  margin-bottom: 10px;\n  display: block;\n"]);return lt=function(){return n},n}function dt(){var n=Object(g.a)(["\n  margin: 20px 0px;\n"]);return dt=function(){return n},n}function jt(){var n=Object(g.a)(["\n  margin: 10px 0px;\n"]);return jt=function(){return n},n}function pt(){var n=Object(g.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n"]);return pt=function(){return n},n}function bt(){var n=Object(g.a)(["\n  width: 140px;\n  height: 200px;\n  border-radius: 5px;\n  margin-right: 20px;\n  z-index: 3;\n  border: 0px;\n"]);return bt=function(){return n},n}function ht(){var n=Object(g.a)(["\n  display: flex;\n  flex-wrap: wrap;\n  z-index: 3;\n"]);return ht=function(){return n},n}var xt=f.c.div(ht()),gt=f.c.img(bt()),ft=f.c.div(pt()),mt=f.c.span(jt()),vt=f.c.span(dt()),Ot=f.c.span(lt()),yt=f.c.div(ut()),_t=f.c.div(st(),Ot),wt=f.c.div(ot()),kt=function(n){Object(h.a)(e,n);var t=Object(x.a)(e);function e(n){var r;Object(p.a)(this,e),r=t.call(this,n);var i=n.location.pathname;return r.state={result:null,error:null,loading:!0,isMovie:i.includes("/movie/"),currentIndex:0,setIndex:function(n){return r.setState({currentIndex:n})},cast:null},r}return Object(b.a)(e,[{key:"componentDidMount",value:function(){var n=Object(j.a)(d.a.mark((function n(){var t,e,r,i,c,a,o,s,u,l,j;return d.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(t=this.props,e=t.match.params.id,r=t.history.push,i=this.state.isMovie,c=parseInt(e),!isNaN(c)){n.next=5;break}return n.abrupt("return",r("/"));case 5:if(a=null,o=null,n.prev=7,!i){n.next=19;break}return n.next=11,en(c);case 11:return s=n.sent,a=s.data,n.next=15,rn(c);case 15:u=n.sent,o=u.data,n.next=27;break;case 19:return n.next=21,un(c);case 21:return l=n.sent,a=l.data,n.next=25,ln(c);case 25:j=n.sent,o=j.data;case 27:n.next=32;break;case 29:n.prev=29,n.t0=n.catch(7),this.setState({error:"Can't find anything."});case 32:return n.prev=32,this.setState({loading:!1,result:a,cast:o}),console.log(a,o),n.finish(32);case 36:case"end":return n.stop()}}),n,this,[[7,29,32,36]])})));return function(){return n.apply(this,arguments)}}()},{key:"render",value:function(){var n=this.state,t=n.result,e=n.error,i=n.loading,c=n.currentIndex,a=n.setIndex,o=n.cast,s=n.isMovie,u=[{tab:"Cast",content:Object(r.jsx)(xt,{children:o&&o.cast.filter((function(n,t){return t<14})).map((function(n,t){return Object(r.jsx)(r.Fragment,{children:Object(r.jsxs)(ft,{children:[Object(r.jsx)(gt,{src:n.profile_path&&"https://image.tmdb.org/t/p/w300/".concat(n.profile_path),alt:""}),Object(r.jsx)(mt,{children:n.name})]},t)})}))})},{tab:"Trailers",content:Object(r.jsx)(r.Fragment,{children:Object(r.jsx)("div",{children:t&&t.videos&&t.videos.results.map((function(n,t){return Object(r.jsxs)(ft,{children:[Object(r.jsx)(vt,{children:n.name}),Object(r.jsx)("iframe",{title:n.name,width:"560",height:"315",src:"https://www.youtube.com/embed/".concat(n.key),frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0})]},t)}))})})},{tab:"Companies",content:Object(r.jsx)(r.Fragment,{children:Object(r.jsxs)("div",{children:[Object(r.jsx)(xt,{children:t&&t.production_companies.map((function(n,t){return Object(r.jsxs)(_t,{children:[Object(r.jsx)("img",{alt:"",src:"https://image.tmdb.org/t/p/w200/".concat(n.logo_path)}),Object(r.jsx)(Ot,{children:n.name})]},t)}))}),Object(r.jsx)(yt,{children:t&&t.production_countries.map((function(n,e){return Object(r.jsx)("span",{children:e===t.production_countries.length-1?"".concat(n.name," Presents"):"".concat(n.name," & ")},e)}))})]})})}],l=[{tab:"Cast",content:Object(r.jsx)(xt,{children:o&&o.cast.filter((function(n,t){return t<14})).map((function(n,t){return Object(r.jsx)(r.Fragment,{children:Object(r.jsxs)(ft,{children:[Object(r.jsx)(gt,{src:n.profile_path&&"https://image.tmdb.org/t/p/w300/".concat(n.profile_path),alt:""}),Object(r.jsx)(mt,{children:n.name})]},t)})}))})},{tab:"Trailers",content:Object(r.jsx)(r.Fragment,{children:Object(r.jsx)("div",{children:t&&t.videos&&t.videos.results.map((function(n,t){return Object(r.jsxs)(ft,{children:[Object(r.jsx)(vt,{children:n.name}),Object(r.jsx)("iframe",{title:n.name,width:"560",height:"315",src:"https://www.youtube.com/embed/".concat(n.key),frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0})]},t)}))})})},{tab:"Companies",content:Object(r.jsx)(r.Fragment,{children:Object(r.jsxs)("div",{children:[Object(r.jsx)(xt,{children:t&&t.production_companies.map((function(n,t){return Object(r.jsxs)(_t,{children:[Object(r.jsx)("img",{alt:"",src:"https://image.tmdb.org/t/p/w200/".concat(n.logo_path)}),Object(r.jsx)(Ot,{children:n.name})]},t)}))}),Object(r.jsx)(yt,{children:t&&t.production_countries.map((function(n,e){return Object(r.jsx)("span",{children:e===t.production_countries.length-1?"".concat(n.name," Presents"):"".concat(n.name," & ")},e)}))})]})})},{tab:"Seasons",content:Object(r.jsx)(r.Fragment,{children:Object(r.jsx)(xt,{children:t&&t.seasons&&t.seasons.map((function(n,t){return Object(r.jsxs)(wt,{children:[Object(r.jsx)("img",{alt:"",src:"https://image.tmdb.org/t/p/w200/".concat(n.poster_path)},t),Object(r.jsx)("div",{children:n.name})]})}))})})}];return Object(r.jsx)(r.Fragment,{children:s?Object(r.jsx)(at,{result:t,error:e,loading:i,currentIndex:c,content:u,setIndex:a}):Object(r.jsx)(at,{result:t,error:e,loading:i,currentIndex:c,content:l,setIndex:a})})}}]),e}(c.a.Component);var St=function(){return Object(r.jsxs)(s.a,{children:[Object(r.jsx)(Un,{}),Object(r.jsxs)(u.d,{children:[Object(r.jsx)(u.b,{path:"/",exact:!0,component:jn}),Object(r.jsx)(u.b,{path:"/tv",exact:!0,component:xn}),Object(r.jsx)(u.b,{path:"/search",component:wn}),Object(r.jsx)(u.b,{path:"/movie/:id",component:kt}),Object(r.jsx)(u.b,{path:"/show/:id",component:kt}),Object(r.jsx)(u.a,{from:"*",to:"/"})]})]})},Tt=e(44);e(71);function zt(){var n=Object(g.a)(["\n    ",";\n    a{\n        text-decoration:none;\n        color:inherit;\n    }\n    *{\n        box-sizing:border-box;\n    }\n    body{\n        font-family: 'Titillium Web', sans-serif;\n        font-size:18px;\n        background-color:rgba(20, 20, 20, 1);\n        color:white;\n        padding-top:50px;\n    }\n"]);return zt=function(){return n},n}var Rt=Object(f.a)(zt(),Tt.a);var It=function(){return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(St,{}),Object(r.jsx)(Rt,{})]})};o.a.render(Object(r.jsx)(c.a.StrictMode,{children:Object(r.jsx)(It,{})}),document.getElementById("root"))}},[[72,1,2]]]);
//# sourceMappingURL=main.01b33511.chunk.js.map