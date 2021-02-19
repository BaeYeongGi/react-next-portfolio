import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
html, body, div, span, applet, object, iframe,h1, h2, h3, h4, h5, h6, p, blockquote, pre,a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,small, strike, strong, tt, var,b, u, i, center,dl, dt, dd, ol, ul, li,fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,article, aside, canvas, details, embed, figure, figcaption, footer, header, hgroup, menu, nav, output, ruby, section, summary,
time, mark, audio, video, section, input, select, option, button, hr, textarea {
	margin: 0;
	padding: 0;
	font-size: 100%;
	font: inherit;
  vertical-align: baseline;
  box-sizing:border-box;
  outline:none;
}

sub, sup {box-sizing:border-box;  margin: 0; padding: 0;}

article, aside, details, figcaption, figure,
footer, header, hgroup, menu, nav, section {
	display: block;
}
ol, ul, li {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
a:hover,a:active, a{text-decoration:none;}

#__next {height:100%;}

html {font-size:62.5%; height:100%;}
body {line-height:1; font-size:1.6rem; -webkit-text-size-adjust:none; height:100%;}

@media screen and (max-width: 1280px){
  html {font-size:60%;}
}

@media screen and (max-width: 1024px){
  html {font-size:55%;}
}

@media screen and (max-width: 720px){
  html {font-size:50%;}
}

`;