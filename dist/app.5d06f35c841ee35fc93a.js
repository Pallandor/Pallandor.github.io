webpackJsonp([0],{0:function(e,t,i){"use strict";function u(e){return e&&e.__esModule?e:{"default":e}}var n=i(1),r=u(n),a=i(30),s=u(a),l=i(163),o=i(191),c=i(252),d=i(257),m=u(d),p=i(354),f=u(p),v=(0,f.default)({}),g=(0,c.syncHistoryWithStore)(o.hashHistory,v);s.default.render(r.default.createElement(l.Provider,{store:v},r.default.createElement(o.Router,{history:g},m.default)),document.getElementById("root"))},257:function(e,t,i){"use strict";function u(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var n=i(1),r=u(n),a=i(191),s=i(258),l=u(s),o=i(260),c=u(o),d=i(348),m=u(d),p=i(350),f=u(p),v=i(261),g=u(v),b=i(353),h=u(b);t.default=r.default.createElement(a.Route,{path:"/",component:l.default},r.default.createElement(a.Route,{component:c.default},r.default.createElement(a.IndexRoute,{component:g.default}),r.default.createElement(a.Route,{path:"articles/:id",component:h.default})),r.default.createElement(a.Route,{path:"about",component:m.default}),r.default.createElement(a.Route,{path:"contact",component:f.default}))},258:function(e,t,i){"use strict";function u(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var n=i(1),r=u(n),a=i(259),s=u(a),l=function(e){var t=e.children;return r.default.createElement("div",null,r.default.createElement(s.default,null),t)};l.propTypes={children:r.default.PropTypes.node},t.default=l},259:function(e,t,i){"use strict";function u(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var n=i(1),r=u(n),a=i(191),s=function(){return r.default.createElement("nav",{className:l.nav},r.default.createElement(a.Link,{className:l.leftLink,to:"/"},"Home"),r.default.createElement("div",{className:l.rightContainer},r.default.createElement(a.Link,{className:l.rightLink,to:"/"},"Articles"),r.default.createElement(a.Link,{className:l.rightLink,to:"about"},"About"),r.default.createElement("a",{href:"https://www.github.com/pallandor",className:l.rightLink},"Github"),r.default.createElement(a.Link,{className:l.lastRightLink,to:"contact"},"Contact")))},l={nav:"dt w-100 border-box pa3 ph5-ns",rightContainer:"dtc v-mid w-75 tr",leftLink:"dtc v-mid link dim w-25 black b",rightLink:"link dim dark-gray f6 f5-ns dib mr3 mr4-ns",lastRightLink:"link dim dark-gray f6 f5-ns dib"};t.default=s},260:function(e,t,i){"use strict";function u(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t.default=e,t}function n(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var u in i)Object.prototype.hasOwnProperty.call(i,u)&&(e[u]=i[u])}return e},o=function(){function e(e,t){for(var i=0;i<t.length;i++){var u=t[i];u.enumerable=u.enumerable||!1,u.configurable=!0,"value"in u&&(u.writable=!0),Object.defineProperty(e,u.key,u)}}return function(t,i,u){return i&&e(t.prototype,i),u&&e(t,u),t}}(),c=i(1),d=n(c),m=i(163),p=i(261),f=(n(p),i(293)),v=n(f),g=i(320),b=i(322),h=i(323),_=i(263),y=u(_),P=function(e){return{articles:(0,g.getArticles)(e),isLoadingArticles:(0,b.getArticlesLoadingState)(e)}},q=function(e){return{fetchArticles:function(){return e((0,h.fetchArticles)())}}},E=function(e){function t(){r(this,t);var e=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e._renderHomePage=e._renderHomePage.bind(e),e._containsRoute=e._containsRoute.bind(e),e}return s(t,e),o(t,[{key:"componentWillMount",value:function(){this.props.fetchArticles()}},{key:"_containsRoute",value:function(e,t){var i=new RegExp(t,"gi");return i.test(e)}},{key:"_renderHomePage",value:function(){var e=this,t=this.props,i=t.children,u=t.articles,n=t.location,r={articles:u};return this._containsRoute(n.pathname,"articles")&&u.some(function(t){if(t.id===e.props.params.id)return r=l({},t),!0}),d.default.createElement("div",null,y.injectReactChildrenWithProps(i,r))}},{key:"render",value:function(){return this.props.isLoadingArticles?d.default.createElement(v.default,null):this._renderHomePage()}}]),t}(c.Component);t.default=(0,m.connect)(P,q)(E)},261:function(e,t,i){"use strict";function u(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var n=i(1),r=u(n),a=i(262),s=u(a),l=function(e){var t=e.articles,i=function(e){return e.map(function(e){return r.default.createElement(s.default,{key:e.id,articleLink:"articles/"+e.id,title:e.title,date:e.date,content:e.content,bgColour:e.bgColour})})};return r.default.createElement("div",null,i(t))};l.propTypes={articles:r.default.PropTypes.array},t.default=l},262:function(e,t,i){"use strict";function u(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t.default=e,t}function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var r=i(1),a=n(r),s=i(191),l=i(263),o=(u(l),i(264)),c=n(o),d=i(291),m=n(d),p=i(292),f=n(p),v=function(e){var t=e.articleLink,i=e.title,u=e.date,n=e.content,r=function(e){return e.slice(0,200)+"..."};return a.default.createElement(c.default,{titleRouteLink:t,title:i,date:u},a.default.createElement("div",{className:g.bodyContainer},a.default.createElement(m.default,{content:r(n)}),a.default.createElement(s.Link,{className:g.link,to:t},"Read more")))},g={link:"f6 link dim dark-gray",bodyContainer:"fn fl-ns w-50-ns"};v.propTypes={titleRouteLink:a.default.PropTypes.string,title:a.default.PropTypes.string,date:a.default.PropTypes.any,content:a.default.PropTypes.string},t.default=(0,f.default)(v)},263:function(e,t,i){"use strict";function u(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t.setBgColourByNumber=t.injectReactChildrenWithProps=t.convertDateToString=void 0;var n=i(1),r=u(n);t.convertDateToString=function(e){var t=e.getMonth()+1,i=e.getDate();return i=[!i[1]&&"0",i].join(""),t=[!t[1]&&"0",t].join(""),[i,t,e.getFullYear()].join("/")},t.injectReactChildrenWithProps=function(e,t){return r.default.Children.map(e,function(e){return r.default.cloneElement(e,t)})},t.setBgColourByNumber=function(e){return e%2===0?"bg-washed-green":"bg-washed-yellow"}},264:function(e,t,i){"use strict";function u(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t.default=e,t}function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var r=i(1),a=n(r),s=i(265),l=(n(s),i(191)),o=i(263),c=u(o),d=function(e){var t=e.titleRouteLink,i=e.title,u=e.date,n=e.children,r=function(){return t?a.default.createElement(l.Link,{className:m.link,to:t},i):i};return a.default.createElement("article",{className:m.article},a.default.createElement("header",{className:m.headerContainer},a.default.createElement("h1",{className:m.headerTitle},r()),a.default.createElement("time",{className:m.headerDate},c.convertDateToString(u))),n)},m={article:"cf ph3 ph5-ns pv5",headerContainer:"fn fl-ns w-50-ns pr4-ns",headerTitle:"mb3 mt0 lh-title",headerDate:"f6 ttu tracked gray",link:"link dim dark-gray"};d.propTypes={titleRouteLink:a.default.PropTypes.oneOfType([a.default.PropTypes.any]),title:a.default.PropTypes.string,date:a.default.PropTypes.any,children:a.default.PropTypes.node},t.default=d},291:function(e,t,i){"use strict";function u(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var n=i(1),r=u(n),a=i(265),s=u(a),l=function(e){var t=e.content;return r.default.createElement(s.default,{source:t,className:o.paragraph})};l.propTypes={content:r.default.PropTypes.string};var o={paragraph:"lh-copy measure mt4 mt0-ns"};t.default=l},292:function(e,t,i){"use strict";function u(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var n=i(1),r=u(n),a=function(e){return function(t){return r.default.createElement("div",{className:t.bgColour},r.default.createElement(e,t))}};t.default=a},293:function(e,t,i){"use strict";function u(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var n=i(1),r=u(n),a=i(294),s=u(a),l=function(){return r.default.createElement("div",{className:o.header},r.default.createElement(s.default,{spinnerName:"three-bounce",noFadeIn:!0}))},o={header:"tc pv6 pv6-ns",h1:"f5 f4-ns fw6 mid-gray"};t.default=l},320:function(e,t,i){"use strict";function u(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t.default=e,t}Object.defineProperty(t,"__esModule",{value:!0}),t.getArticles=void 0;var n=i(321),r=u(n),a=[],s=function(){var e=arguments.length<=0||void 0===arguments[0]?a:arguments[0],t=arguments[1];switch(t.type){case r.FETCH_ARTICLES_SUCCESS:return t.articles;default:return e}};t.default=s;t.getArticles=function(e){return e.articles}},321:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.FETCH_ARTICLES_PENDING="App/FETCH_ARTICLES_PENDING",t.FETCH_ARTICLES_SUCCESS="App/FETCH_ARTICLES_SUCCESS",t.FETCH_ARTICLES_ERROR="App/FETCH_ARTICLES_ERROR"},322:function(e,t,i){"use strict";function u(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t.default=e,t}Object.defineProperty(t,"__esModule",{value:!0}),t.getArticlesLoadingState=void 0;var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var u in i)Object.prototype.hasOwnProperty.call(i,u)&&(e[u]=i[u])}return e},r=i(321),a=u(r),s={loading:!1},l=function(){var e=arguments.length<=0||void 0===arguments[0]?s:arguments[0],t=arguments[1];switch(t.type){case a.FETCH_ARTICLES_PENDING:return n({},e,{loading:!0});case a.FETCH_ARTICLES_SUCCESS:case a.FETCH_ARTICLES_ERROR:return n({},e,{loading:!1});default:return e}};t.default=l;t.getArticlesLoadingState=function(e){return e.ui.articles.loading}},323:function(e,t,i){"use strict";function u(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t.default=e,t}Object.defineProperty(t,"__esModule",{value:!0}),t.fetchArticles=void 0;var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var u in i)Object.prototype.hasOwnProperty.call(i,u)&&(e[u]=i[u])}return e},r=i(324),a=u(r),s=i(321),l=u(s),o=i(263),c=u(o);t.fetchArticles=function(){return function(e,t){e({type:l.FETCH_ARTICLES_PENDING});var i=function(e){return e.map(function(e,t){return n({},e,{bgColour:c.setBgColourByNumber(t)})})};a.fetchArticles().then(function(t){e({type:l.FETCH_ARTICLES_SUCCESS,articles:i(t)})}).catch(function(t){e({type:l.FETCH_ARTICLES_ERROR,message:t.message||"Something went wrong"})})}}},324:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.fetchArticles=void 0;var u=i(325),n={articles:[{id:(0,u.v4)(),title:"Another over-engineered blog",date:new Date("09/01/2016"),content:"Lorem ipsum sit dolor sit amet, consectetur adipiscing elit. Nulla pretium, libero eu pellentesque maximus, felis magna finibus orci, id pellentesque purus dolor at lorem. Sed sollicitudin, tortor porttitor fringilla condimentum, est eros mattis neque, ut ultrices tellus lorem sed odio. Pellentesque viverra elementum purus et blandit. Ut consequat tempor quam ac tempor. In convallis, felis in ullamcorper mollis, nisl mi vehicula ex, sit amet tincidunt tortor dui non tellus. Integer ultricies mollis porttitor. Suspendisse sit amet eros quis ligula vestibulum ultrices. Nulla tempor ex ut orci sodales eleifend. Sed placerat purus aliquam, molestie urna pellentesque, tristique nisl. Aenean fringilla accumsan dolor, a maximus ipsum rhoncus nec. Etiam condimentum felis in augue ullamcorper euismod. Donec malesuada diam at augue mattis condimentum. Integer tristique urna a nunc condimentum, pulvinar dignissim mauris posuere. Vestibulum quis enim venenatis, ultricies orci at, bibendum massa. Proin vestibulum bibendum tincidunt. Nunc molestie ligula aliquam, posuere elit vitae, feugiat turpis. Morbi ut vestibulum justo. Quisque vulputate mollis velit. Maecenas cursus fermentum euismod. Donec sit amet eros odio. Nulla sed fringilla lacus. Nunc mauris risus, imperdiet et urna in, tristique imperdiet enim. Duis eu velit vulputate, hendrerit tortor eget, sodales ipsum. In libero turpis, posuere eget metus ut, facilisis lobortis turpis. Integer rutrum pharetra tristique. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Sed at venenatis ante, nec sagittis lacus. Curabitur vel dignissim quam. Praesent id risus vel arcu dictum rutrum a vitae dolor. Suspendisse sit amet aliquet magna. Suspendisse non neque lectus. Duis non velit egestas, luctus augue in, rhoncus ex. Phasellus lacus elit, mollis eu nulla sit amet, dictum consectetur est. Sed commodo ex mi, id porta erat sodales vitae. Nulla rutrum sapien enim, eget tincidunt ligula aliquam non. Nulla volutpat tincidunt augue eget tempus. Aliquam vel euismod metus, sed vulputate eros. Ut erat libero, cursus efficitur fringilla vitae, tempor sit amet justo. Vivamus arcu nunc, tristique porta nisl eu, ultrices aliquam turpis. Sed accumsan rutrum dui, in vehicula ante dapibus a. Aliquam est augue, consectetur eget neque nec, commodo dapibus felis. Donec lorem leo, tincidunt vel ultrices non, suscipit vel enim. Mauris purus velit, euismod rutrum mollis a, aliquam at lectus. Proin posuere, tortor sed vulputate dapibus, dolor nibh ornare turpis, in venenatis velit augue non sapien. Pellentesque et mi et ante venenatis tincidunt. Suspendisse tincidunt consectetur lobortis. Morbi id risus vitae metus vulputate dignissim. Aenean non felis eget nunc finibus blandit. Fusce vitae purus euismod arcu fermentum imperdiet id sit amet sem. Integer ut tellus id ex ultricies euismod quis vel lectus. Duis vehicula suscipit eros, vitae venenatis turpis. Etiam velit urna, rhoncus non ipsum non, tempor rutrum diam. Pellentesque facilisis tellus sed mattis faucibus. Fusce gravida est in tristique ullamcorper. Cras nec erat in nisi ornare eleifend sed vitae lorem. Sed tristique tincidunt tempus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Praesent vitae porta ex. Cras id auctor velit. Cras semper porttitor tincidunt. Etiam enim nulla, elementum at ullamcorper vel, interdum quis ante. Phasellus consectetur urna nec mi feugiat, mattis sagittis elit posuere. Sed maximus mollis urna, nec tempus ante semper at. Ut fermentum ullamcorper nisi. Pellentesque varius diam elementum ipsum tincidunt, nec pulvinar lectus rhoncus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut fringilla nibh ut euismod hendrerit. Integer interdum nisl quis velit porttitor molestie. Sed eget consectetur odio, quis interdum lectus. Nulla suscipit justo ac efficitur porta. Vestibulum tempor sapien ac magna placerat, at pharetra arcu posuere. Nulla consectetur mattis nisl."},{id:(0,u.v4)(),title:"Developing UI in React",date:new Date("09/02/2016"),content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla pretium, libero eu pellentesque maximus, felis magna finibus orci, id pellentesque purus dolor at lorem. Sed sollicitudin, tortor porttitor fringilla condimentum, est eros mattis neque, ut ultrices tellus lorem sed odio. Pellentesque viverra elementum purus et blandit. Ut consequat tempor quam ac tempor. In convallis, felis in ullamcorper mollis, nisl mi vehicula ex, sit amet tincidunt tortor dui non tellus. Integer ultricies mollis porttitor. Suspendisse sit amet eros quis ligula vestibulum ultrices. Nulla tempor ex ut orci sodales eleifend. Sed placerat purus aliquam, molestie urna pellentesque, tristique nisl. Aenean fringilla accumsan dolor, a maximus ipsum rhoncus nec. Etiam condimentum felis in augue ullamcorper euismod. Donec malesuada diam at augue mattis condimentum. Integer tristique urna a nunc condimentum, pulvinar dignissim mauris posuere. Vestibulum quis enim venenatis, ultricies orci at, bibendum massa. Proin vestibulum bibendum tincidunt. Nunc molestie ligula aliquam, posuere elit vitae, feugiat turpis. Morbi ut vestibulum justo. Quisque vulputate mollis velit. Maecenas cursus fermentum euismod. Donec sit amet eros odio. Nulla sed fringilla lacus. Nunc mauris risus, imperdiet et urna in, tristique imperdiet enim. Duis eu velit vulputate, hendrerit tortor eget, sodales ipsum. In libero turpis, posuere eget metus ut, facilisis lobortis turpis. Integer rutrum pharetra tristique. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Sed at venenatis ante, nec sagittis lacus. Curabitur vel dignissim quam. Praesent id risus vel arcu dictum rutrum a vitae dolor. Suspendisse sit amet aliquet magna. Suspendisse non neque lectus. Duis non velit egestas, luctus augue in, rhoncus ex. Phasellus lacus elit, mollis eu nulla sit amet, dictum consectetur est. Sed commodo ex mi, id porta erat sodales vitae. Nulla rutrum sapien enim, eget tincidunt ligula aliquam non. Nulla volutpat tincidunt augue eget tempus. Aliquam vel euismod metus, sed vulputate eros. Ut erat libero, cursus efficitur fringilla vitae, tempor sit amet justo. Vivamus arcu nunc, tristique porta nisl eu, ultrices aliquam turpis. Sed accumsan rutrum dui, in vehicula ante dapibus a. Aliquam est augue, consectetur eget neque nec, commodo dapibus felis. Donec lorem leo, tincidunt vel ultrices non, suscipit vel enim. Mauris purus velit, euismod rutrum mollis a, aliquam at lectus. Proin posuere, tortor sed vulputate dapibus, dolor nibh ornare turpis, in venenatis velit augue non sapien. Pellentesque et mi et ante venenatis tincidunt. Suspendisse tincidunt consectetur lobortis. Morbi id risus vitae metus vulputate dignissim. Aenean non felis eget nunc finibus blandit. Fusce vitae purus euismod arcu fermentum imperdiet id sit amet sem. Integer ut tellus id ex ultricies euismod quis vel lectus. Duis vehicula suscipit eros, vitae venenatis turpis. Etiam velit urna, rhoncus non ipsum non, tempor rutrum diam. Pellentesque facilisis tellus sed mattis faucibus. Fusce gravida est in tristique ullamcorper. Cras nec erat in nisi ornare eleifend sed vitae lorem. Sed tristique tincidunt tempus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Praesent vitae porta ex. Cras id auctor velit. Cras semper porttitor tincidunt. Etiam enim nulla, elementum at ullamcorper vel, interdum quis ante. Phasellus consectetur urna nec mi feugiat, mattis sagittis elit posuere. Sed maximus mollis urna, nec tempus ante semper at. Ut fermentum ullamcorper nisi. Pellentesque varius diam elementum ipsum tincidunt, nec pulvinar lectus rhoncus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut fringilla nibh ut euismod hendrerit. Integer interdum nisl quis velit porttitor molestie. Sed eget consectetur odio, quis interdum lectus. Nulla suscipit justo ac efficitur porta. Vestibulum tempor sapien ac magna placerat, at pharetra arcu posuere. Nulla consectetur mattis nisl."},{id:(0,u.v4)(),title:"Sir Gaben Rises",date:new Date("09/03/2016"),content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla pretium, libero eu pellentesque maximus, felis magna finibus orci, id pellentesque purus dolor at lorem. Sed sollicitudin, tortor porttitor fringilla condimentum, est eros mattis neque, ut ultrices tellus lorem sed odio. Pellentesque viverra elementum purus et blandit. Ut consequat tempor quam ac tempor. In convallis, felis in ullamcorper mollis, nisl mi vehicula ex, sit amet tincidunt tortor dui non tellus. Integer ultricies mollis porttitor. Suspendisse sit amet eros quis ligula vestibulum ultrices. Nulla tempor ex ut orci sodales eleifend. Sed placerat purus aliquam, molestie urna pellentesque, tristique nisl. Aenean fringilla accumsan dolor, a maximus ipsum rhoncus nec. Etiam condimentum felis in augue ullamcorper euismod. Donec malesuada diam at augue mattis condimentum. Integer tristique urna a nunc condimentum, pulvinar dignissim mauris posuere. Vestibulum quis enim venenatis, ultricies orci at, bibendum massa. Proin vestibulum bibendum tincidunt. Nunc molestie ligula aliquam, posuere elit vitae, feugiat turpis. Morbi ut vestibulum justo. Quisque vulputate mollis velit. Maecenas cursus fermentum euismod. Donec sit amet eros odio. Nulla sed fringilla lacus. Nunc mauris risus, imperdiet et urna in, tristique imperdiet enim. Duis eu velit vulputate, hendrerit tortor eget, sodales ipsum. In libero turpis, posuere eget metus ut, facilisis lobortis turpis. Integer rutrum pharetra tristique. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Sed at venenatis ante, nec sagittis lacus. Curabitur vel dignissim quam. Praesent id risus vel arcu dictum rutrum a vitae dolor. Suspendisse sit amet aliquet magna. Suspendisse non neque lectus. Duis non velit egestas, luctus augue in, rhoncus ex. Phasellus lacus elit, mollis eu nulla sit amet, dictum consectetur est. Sed commodo ex mi, id porta erat sodales vitae. Nulla rutrum sapien enim, eget tincidunt ligula aliquam non. Nulla volutpat tincidunt augue eget tempus. Aliquam vel euismod metus, sed vulputate eros. Ut erat libero, cursus efficitur fringilla vitae, tempor sit amet justo. Vivamus arcu nunc, tristique porta nisl eu, ultrices aliquam turpis. Sed accumsan rutrum dui, in vehicula ante dapibus a. Aliquam est augue, consectetur eget neque nec, commodo dapibus felis. Donec lorem leo, tincidunt vel ultrices non, suscipit vel enim. Mauris purus velit, euismod rutrum mollis a, aliquam at lectus. Proin posuere, tortor sed vulputate dapibus, dolor nibh ornare turpis, in venenatis velit augue non sapien. Pellentesque et mi et ante venenatis tincidunt. Suspendisse tincidunt consectetur lobortis. Morbi id risus vitae metus vulputate dignissim. Aenean non felis eget nunc finibus blandit. Fusce vitae purus euismod arcu fermentum imperdiet id sit amet sem. Integer ut tellus id ex ultricies euismod quis vel lectus. Duis vehicula suscipit eros, vitae venenatis turpis. Etiam velit urna, rhoncus non ipsum non, tempor rutrum diam. Pellentesque facilisis tellus sed mattis faucibus. Fusce gravida est in tristique ullamcorper. Cras nec erat in nisi ornare eleifend sed vitae lorem. Sed tristique tincidunt tempus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Praesent vitae porta ex. Cras id auctor velit. Cras semper porttitor tincidunt. Etiam enim nulla, elementum at ullamcorper vel, interdum quis ante. Phasellus consectetur urna nec mi feugiat, mattis sagittis elit posuere. Sed maximus mollis urna, nec tempus ante semper at. Ut fermentum ullamcorper nisi. Pellentesque varius diam elementum ipsum tincidunt, nec pulvinar lectus rhoncus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut fringilla nibh ut euismod hendrerit. Integer interdum nisl quis velit porttitor molestie. Sed eget consectetur odio, quis interdum lectus. Nulla suscipit justo ac efficitur porta. Vestibulum tempor sapien ac magna placerat, at pharetra arcu posuere. Nulla consectetur mattis nisl."}]},r=function(e){return new Promise(function(t){return setTimeout(t,e)})};t.fetchArticles=function(){return r(1e3).then(function(){return n.articles})}},332:function(e,t){},348:function(e,t,i){"use strict";function u(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var n=i(1),r=u(n),a=i(349),s=u(a),l=function(){return r.default.createElement(s.default,{title:o.title,content:o.content})},o={title:"About Me",content:"\n  Australian full-stack software engineer fluent in Javascript (from React.js and\n    Redux to Node.js, MongoDB and Express). Loves deconstructing hopeless problems\n    into solvable sets. Always thinking about what scalable front-end applications\n    would look like and optimal solutions to managing complex UI and state.\n\n    You'll usually find me geeking out over new tech and relentlessly customising my\n    dev environment.\n  "};t.default=l},349:function(e,t,i){"use strict";function u(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var n=i(1),r=u(n),a=function(e){var t=e.title,i=e.content,u=e.children;return r.default.createElement("article",{className:s.article},r.default.createElement("h1",null,t),r.default.createElement("p",{className:s.paragraph},i),u)},s={article:"pa3 pa5-ns",paragraph:"measure lh-copy"};a.propTypes={title:r.default.PropTypes.string,content:r.default.PropTypes.string,children:r.default.PropTypes.node},t.default=a},350:function(e,t,i){"use strict";function u(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var n=i(1),r=u(n),a=i(349),s=u(a),l=i(351),o=u(l),c=function(){return r.default.createElement(s.default,{title:d.title,content:d.content},r.default.createElement(o.default,{socialMedia:d.socialMedia}))},d={title:"Contact Me",content:"\n  Feel free to contact me on any of the social media links below. Or if you're\n  feeling really adventurous, you can always try Thargor on Dota 2.\n  ",socialMedia:[{title:"facebook",link:"#",svgPath:"M8 12 L13 12 L13 8 C13 2 17 1 24 2 L24 7 C20 7 19 7 19 10 L19 12 L24 12 L23 18 L19 18 L19 30 L13 30 L13 18 L8 18 z"},{title:"twitter",link:"#",svgPath:"M2 4 C6 8 10 12 15 11 A6 6 0 0 1 22 4 A6 6 0 0 1 26 6 A8 8 0 0 0 31 4 A8 8 0 0 1 28 8 A8 8 0 0 0 32 7 A8 8 0 0 1 28 11 A18 18 0 0 1 10 30 A18 18 0 0 1 0 27 A12 12 0 0 0 8 24 A8 8 0 0 1 3 20 A8 8 0 0 0 6 19.5 A8 8 0 0 1 0 12 A8 8 0 0 0 3 13 A8 8 0 0 1 2 4"},{title:"github",link:"https://www.github.com/pallandor",svgPath:"M0 18 C0 12 3 10 3 9 C2.5 7 2.5 4 3 3 C6 3 9 5 10 6 C12 5 14 5 16 5 C18 5 20 5 22 6 C23 5 26 3 29 3 C29.5 4 29.5 7 29 9 C29 10 32 12 32 18 C32 25 30 30 16 30 C2 30 0 25 0 18 M3 20 C3 24 4 28 16 28 C28 28 29 24 29 20 C29 16 28 14 16 14 C4 14 3 16 3 20 M8 21 A1.5 2.5 0 0 0 13 21 A1.5 2.5 0 0 0 8 21 M24 21 A1.5 2.5 0 0 0 19 21 A1.5 2.5 0 0 0 24 21 z"},{title:"dribbble",link:"#",svgPath:"M16 0 A16 16 0 0 0 0 16 A16 16 0 0 0 16 32 A16 16 0 0 0 32 16 A16 16 0 0 0 16 0 M5 11.5 A12 12 0 0 1 11 5 A46 46 0 0 1 13.5 9.25 A46 46 0 0 1 5 11.5 M15 4 A12 12 0 0 1 21.5 5.25 A46 46 0 0 1 17 7.75 A50 50 0 0 0 15 4 M4 16 A50 50 0 0 0 15 13 A46 46 0 0 1 16 15.5 A26 26 0 0 0 6 22.5 A12 12 0 0 1 4 16 M18.5 11.5 A50 50 0 0 0 25 8 A12 12 0 0 1 28 13.75 A26 26 0 0 0 19.75 14.5 A50 50 0 0 0 18.5 11.5 M17 19.5 A46 46 0 0 1 18 28 A12 12 0 0 1 8.75 25.5 A22 22 0 0 1 17 19.5 M20.75 18.25 A22 22 0 0 1 28 17.75 A12 12 0 0 1 22 26.5 A50 50 0 0 0 20.75 18.25"}]};t.default=c},351:function(e,t,i){"use strict";function u(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var n=i(1),r=u(n),a=i(352),s=u(a),l=function(e){var t=e.socialMedia,i=t.map(function(e){return r.default.createElement(s.default,{title:e.title,link:e.link,svgPath:e.svgPath})});return r.default.createElement("div",null,i)};l.propTypes={socialMedia:r.default.PropTypes.array},t.default=l},352:function(e,t,i){"use strict";function u(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var n=i(1),r=u(n),a=function(e){var t=e.link,i=e.title,u=e.svgPath;return r.default.createElement("a",{className:s.link,href:t,title:""},r.default.createElement("svg",{className:s.svg,"data-icon":i,viewBox:"0 0 32 32",style:{fill:"currentcolor"}},r.default.createElement("title",null,i," icon"),r.default.createElement("path",{d:u})))},s={link:"link dim gray dib h2 w3 br-100 mr3",svg:"w2"};a.propTypes={link:r.default.PropTypes.string,title:r.default.PropTypes.string,svgPath:r.default.PropTypes.string},t.default=a},353:function(e,t,i){"use strict";function u(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var n=i(1),r=u(n),a=i(191),s=i(264),l=u(s),o=i(291),c=u(o),d=i(292),m=u(d),p=function(e){var t=e.title,i=e.date,u=e.content;return r.default.createElement(l.default,{title:t,date:i},r.default.createElement("div",{className:f.bodyContainer},r.default.createElement(c.default,{content:u}),r.default.createElement(a.Link,{className:f.link,to:"/"},"Back")))},f={link:"f6 link dim dark-gray",bodyContainer:"fn fl-ns w-50-ns"};p.propTypes={title:r.default.PropTypes.string,date:r.default.PropTypes.any,content:r.default.PropTypes.string},t.default=(0,m.default)(p)},354:function(e,t,i){"use strict";function u(e){return e&&e.__esModule?e:{"default":e}}function n(e){if(Array.isArray(e)){for(var t=0,i=Array(e.length);t<e.length;t++)i[t]=e[t];return i}return Array.from(e)}Object.defineProperty(t,"__esModule",{value:!0});var r=i(170),a=i(355),s=u(a),l=i(356),o=(u(l),i(357)),c=u(o),d=function(){var e=[s.default];return r.applyMiddleware.apply(void 0,n(e))},m=function(){return window.devToolsExtension?window.devToolsExtension():function(e){return e}},p=function(e){var t=(0,r.createStore)(c.default,e,(0,r.compose)(d(),m()));return t};t.default=p},357:function(e,t,i){"use strict";function u(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var n=i(170),r=i(252),a=i(358),s=u(a),l=i(320),o=u(l),c=(0,n.combineReducers)({routing:r.routerReducer,ui:s.default,articles:o.default});t.default=c},358:function(e,t,i){"use strict";function u(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var n=i(170),r=i(322),a=u(r),s=(0,n.combineReducers)({articles:a.default});t.default=s}});
//# sourceMappingURL=app.5d06f35c841ee35fc93a.js.map