Prism.languages.aspnet = Prism.languages.extend('markup', {
	'page-directive tag': {
<<<<<<< HEAD
		pattern: /(<|&lt;)%\s*@.*%>/gi,
		inside: {
			'page-directive tag': /&lt;%\s*@\s*(?:Assembly|Control|Implements|Import|Master|MasterType|OutputCache|Page|PreviousPageType|Reference|Register)?|%>/ig,
=======
		pattern: /<%\s*@.*%>/gi,
		inside: {
			'page-directive tag': /<%\s*@\s*(?:Assembly|Control|Implements|Import|Master|MasterType|OutputCache|Page|PreviousPageType|Reference|Register)?|%>/ig,
>>>>>>> de7e7e4c39dd6cb8c9f3a6c6ff2b44e0334e59bc
			rest: Prism.languages.markup.tag.inside
		}
	},
	'directive tag': {
<<<<<<< HEAD
		pattern: /(<|&lt;)%.*%>/gi,
		inside: {
			'directive tag': /(<|&lt;)%\s*?[$=%#:]{0,2}|%>/gi,
=======
		pattern: /<%.*%>/gi,
		inside: {
			'directive tag': /<%\s*?[$=%#:]{0,2}|%>/gi,
>>>>>>> de7e7e4c39dd6cb8c9f3a6c6ff2b44e0334e59bc
			rest: Prism.languages.csharp
		}
	}
});

// match directives of attribute value foo="<% Bar %>"
Prism.languages.insertBefore('inside', 'punctuation', {
	'directive tag': Prism.languages.aspnet['directive tag']
}, Prism.languages.aspnet.tag.inside["attr-value"]);

Prism.languages.insertBefore('aspnet', 'comment', {
<<<<<<< HEAD
	'asp comment': /&lt;%--[\w\W]*?--%>/g
=======
	'asp comment': /<%--[\w\W]*?--%>/g
>>>>>>> de7e7e4c39dd6cb8c9f3a6c6ff2b44e0334e59bc
});

// script runat="server" contains csharp, not javascript
Prism.languages.insertBefore('aspnet', Prism.languages.javascript ? 'script' : 'tag', {
	'asp script': {
<<<<<<< HEAD
		pattern: /(&lt;|<)script(?=.*runat=['"]?server['"]?)[\w\W]*?(>|&gt;)[\w\W]*?(&lt;|<)\/script(>|&gt;)/ig,
		inside: {
			tag: {
				pattern: /&lt;\/?script\s*(?:\s+[\w:-]+(?:=(?:("|')(\\?[\w\W])*?\1|\w+))?\s*)*\/?>/gi,
=======
		pattern: /<script(?=.*runat=['"]?server['"]?)[\w\W]*?>[\w\W]*?<\/script>/ig,
		inside: {
			tag: {
				pattern: /<\/?script\s*(?:\s+[\w:-]+(?:=(?:("|')(\\?[\w\W])*?\1|\w+))?\s*)*\/?>/gi,
>>>>>>> de7e7e4c39dd6cb8c9f3a6c6ff2b44e0334e59bc
				inside: Prism.languages.aspnet.tag.inside
			},
			rest: Prism.languages.csharp || {}
		}
	}
});

// Hacks to fix eager tag matching finishing too early: <script src="<% Foo.Bar %>"> => <script src="<% Foo.Bar %>
if ( Prism.languages.aspnet.style ) {
<<<<<<< HEAD
	Prism.languages.aspnet.style.inside.tag.pattern = /&lt;\/?style\s*(?:\s+[\w:-]+(?:=(?:("|')(\\?[\w\W])*?\1|\w+))?\s*)*\/?>/gi;
=======
	Prism.languages.aspnet.style.inside.tag.pattern = /<\/?style\s*(?:\s+[\w:-]+(?:=(?:("|')(\\?[\w\W])*?\1|\w+))?\s*)*\/?>/gi;
>>>>>>> de7e7e4c39dd6cb8c9f3a6c6ff2b44e0334e59bc
	Prism.languages.aspnet.style.inside.tag.inside = Prism.languages.aspnet.tag.inside;
}
if ( Prism.languages.aspnet.script ) {
	Prism.languages.aspnet.script.inside.tag.pattern = Prism.languages.aspnet['asp script'].inside.tag.pattern
	Prism.languages.aspnet.script.inside.tag.inside = Prism.languages.aspnet.tag.inside;
}