
// TODO: Delete this component

// import React from 'react';
// import ReactMarkdown from 'react-markdown';
//
// import * as util from '../../util';
//
//
//
// Add childen to props validation
// const BaseArticle = ({titleRouteLink, title, date, content, children}) => {
//   const injectChildrenWithContentProps = childComponents =>
//     React.Children.map(childComponents, child =>
//       <child
//         content={content}
//       />);
//   const renderTitle = () =>
//     titleRouteLink ? <Link to={titleRouteLink}>{title}</Link> : title;
//   return (
//     <article className={styles.article}>
//       <header className={styles.headerContainer}>
//         <h1 className={styles.headerTitle}>{renderTitle()}</h1>
//         <time className={styles.headerDate}>{util.convertDateToString(date)}</time>
//       </header>
//       {injectChildrenWithContentProps(children)}
//     </article>
//   );
// };
//
// // or just props down as {...props}? Yes, except when the component
// // being passed it actually uses it, which BA does. so then be explciti
// // so know its prop/data depedency it has
//
// // ----- can i skip passing flase to titleRouteLink??? try leaving it out and see
//
//  Add childen to props validation
// const CompleteArticle = ({titleRouteLink, title, date, content, children}) => (
//   <BaseArticle
//     title={title}
//     date={date}
//     content={content}
//   >
//     <CustomMarkdown /> // gets injected with contet={}
//   </BaseArticle>
// );
//
// // API(server) snips content, articleExcerpt simply renders with link and
// // the snipped content as normal? with ability to define a 'read more ' component
// // explctity
//   // see then BA knows about difference b/w excerpt and complete. it shouldnt
//   // if its a  base building block, now its dependant...
// const ArticleExcerpt = ({titleRouteLink, title, date, content}) => (
//   <BaseArticle
//     titleRouteLink={titleRouteLink}
//     title={title}
//     date={date}
//     content={content}
//   >
//     <CustomMarkdown /> // gets njected with content={}
//     <Link to={titleRouteLink}>Read more...</Link> // lol will also get 'content!'
//   </BaseArticle>
// );
//
// const CustomMarkdown = ({content}) => (
//   <ReactMarkdown source={content} />
// );
//
// <ArticleExcerpt
//   {...props}
// />
//
// <CompleteArticle
//
// >
//
// </CompleteArticle>
//
//
//
//   // <article className={styles.article}>
//   //   <header className={styles.headerContainer}>
//   //     <h1 className={styles.headerTitle}>{title}</h1>
//   //     <time className={styles.headerDate}>{util.convertDateToString(date)}</time>
//   //   </header>
//   //   {children}
//   // </article>
//
//
// // maybe more defined, easier to think about but drawback is accepting sinlge contentComponent
// // when may want to pass child content components in bulk in standard REACT/children architecture...
// // const CompleteArticle = () => (
// //   <BaseArticle
// //     title={}
// //     date={}
// //     contentComponent={}
// //     content={}
// //   />
// // );
//
// const Article = ({title, date, content}) => (
//   <article className={styles.article}>
//     <header className={styles.headerContainer}>
//       <h1 className={styles.headerTitle}>{title}</h1>
//       <time className={styles.headerDate}>{util.convertDateToString(date)}</time>
//       <ReactMarkdown source={content} />
//     </header>
//     {/*
//       <div className={styles.bodyContainer}>
//     <ReactMarkdown source={content} />
//     {/*
//       <ReactMarkdown source={testMd} />
//        <p className={styles.paragraph}>{content}</p>
//           <ReactMarkdown source={testMd}/>
//
//     </div>*/}
//   </article>
// );
//
// const styles = {
//   article: 'cf ph3 ph5-ns pv5',
//   headerContainer: 'fn fl-ns w-50-ns pr4-ns',
//   headerTitle: 'mb3 mt0 lh-title',
//   headerDate: 'f6 ttu tracked gray',
//   bodyContainer: 'fn fl-ns w-50-ns',
//   paragraph: 'lh-copy measure mt4 mt0-ns',
//   lastParagraph: 'lh-copy measure',
// };
//
// Article.propTypes = {
//   title: React.PropTypes.string,
//   content: React.PropTypes.string,
// };
//
// export default Article;
