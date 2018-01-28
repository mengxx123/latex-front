(function(){
    var toolbar = function(){

        this.tabs = new FUI.Tabs( {
            buttons: [ "Math", "Greek", "Symbols", /*"International", "Typeface",*/ "Function(x)...", "{ }...", "<>=...", "+/-...", "-->...", "AMS", "AMS =<>", "AMS NOT=<>" ]
        } );

        // 加载panels的内容
        this.panels = [
        //pan-0 不支持big前缀的，因此暂时替换成去掉前缀的
        [[ "\\sum", /*"\\prod", "\\coprod",*/ "\\int", /*"\\oint",*/ "\\cap", "\\cup", "\\sqcup", "\\vee", "\\wedge", "\\odot", "\\otimes", "\\oplus", "\\uplus"/*, "\\bigcap", "\\bigcup", "\\bigsqcup", "\\bigvee", "\\bigwedge", "\\bigodot", "\\bigotimes", "\\bigoplus", "\\biguplus"*/ ],
        // ["\\hat{a}", "\\check{a}", "\\breve{a}", "\\acute{a}", "\\grave{a}", "\\tilde{a}", "\\bar{a}", "\\vec{a}", "\\dot{a}", "\\ddot{a}" ],
        [/*"\\widetilde{abc}", "\\widehat{abc}", "\\overleftarrow{abc}", "\\overrightarrow{abc}", "\\overline{abc}", "\\overbrace{abc}", "\\underbrace{abc}", "\\underline{abc}",*/ "\\sqrt{abc}", "\\sqrt[n]{abc}", "f'", "\\frac{abc}{xyz}" ],
        ["x^{k}", /*"\\mathds{N}",*/ "\\mathbb{B}", /*"\\mathbf{B}",*/ "x_{k}", "\\mathcal{C}", "\\mathfrak{F}", "\\mathrm{T}"]],

        //pan-1
        [[ "\\Gamma", "\\Delta", "\\Theta", "\\Lambda", "\\Xi", "\\Pi", "\\Sigma", "\\Upsilon", "\\Phi", "\\Psi", "\\Omega", "\\$" ],
        [ "\\alpha", "\\beta", "\\gamma", "\\delta", "\\epsilon", "\\varepsilon", "\\zeta", "\\eta", "\\theta", "\\vartheta", "\\iota", "\\kappa", "\\lambda", "\\mu", "\\nu", "\\xi", "{o}", "\\pi", "\\varpi", "\\rho", "\\varrho", "\\sigma", "\\varsigma", "\\tau", "\\upsilon", "\\phi", "\\varphi", "\\chi", "\\psi", "\\omega" ],
        [ "\\digamma", "\\beth", "\\gimel", "\\daleth" ]],

        //pan-2
        [[ "\\aleph", "\\hbar", "\\imath", "\\jmath", "\\ell", "\\wp", "\\Re", "\\Im", "\\prime", "\\emptyset", "\\angle", "\\infty", "\\partial", "\\nabla", "\\triangle", "\\forall", "\\exists", "\\neg", "\\surd", "\\top", "\\bot", "\\backslash" ],
        [ "\\flat", "\\natural", "\\sharp", /*"\\|",*/ "\\clubsuit", "\\diamondsuit", "\\heartsuit", "\\spadesuit" ],
        // [ "\\dag", "\\ddag", "\\S", "\\P", "\\copyright", "\\pounds" ],
        // [ "\\checkmark", "\\maltese", "\\circledR", "\\yen" ],
        // [ "\\ulcorner", "\\urcorner", "\\llcorner", "\\lrcorner" ],
        [ "\\diamond", "\\mho", "\\ldots", "\\cdots", /*"\\Box",*/ "\\cdot", "\\vdots", "\\ddots" ]],

        // [[ "\\`{O}", "\\'{O}", "\\^{O}", "\\\"{O}", "\\~{O}", "\\={O}", "\\.{O}", "\\u{O}", "\\v{O}", "\\H{O}", "\\t{OO}", "\\c{O}", "\\d{O}", "\\b{O}" ],
        // [ "{\\oe}", "{\\ae}", "{\\aa}", "{\\o}", "{\\l}", "{\\i}", "?`", "{\\OE}", "{\\AE}", "{\\AA}", "{\\O}", "{\\L}", "!`" ]],

        // [["\\emph{...}", "\\textrm{...}", "\\textbf{...}", "\\textsf{...}", "\\texttt{...}", "\\textmd{...}"]],

        //pan-3
        [[ "\\arccos", "\\arcsin", "\\arctan", "\\lim", "\\liminf", "\\limsup" ],
        [ "\\arg", "\\cos", "\\cosh", "\\cot", "\\coth", "\\csc", "\\det", "\\dim", "\\exp", "\\gcd", "\\hom", "\\inf", "\\ker", "\\lg", "\\ln", "\\log", "\\max", "\\min", "\\sec", "\\sin", "\\sinh", "\\sup", "\\tan", "\\tanh" ]],

        //pan-4
        [[ "(", "[", "\\{", /*"\\lfloor",*/ "\\lceil", "\\langle", "/", "|", ")", "]", "\\}", /*"\\rfloor",*/ "\\rceil", "\\rangle", "\\backslash"/*, "\\|"*/ ],
        [ "\\uparrow", "\\downarrow", "\\updownarrow", "\\Uparrow", "\\Downarrow", "\\Updownarrow" ]],

        //pan-5
        [[ "<", "\\leq", "\\prec", "\\preceq", "\\ll", "\\subset", "\\subseteq", "\\sqsubseteq", "\\in", "\\vdash", ">", "\\geq", "\\succ", "\\succeq", "\\gg", "\\supset", "\\supseteq", "\\sqsupseteq", "\\ni", "\\dashv" ],
        [ "\\equiv", "\\sim", "\\simeq", "\\asymp", "\\approx", "\\cong", "\\neq", "\\doteq", "\\models", "\\perp", "\\mid", "\\parallel", "\\smile", "\\frown", "\\propto", "\\bowtie" ]/*,
        [ "\\lhd", "\\rhd", "\\unlhd", "\\unrhd" ]*/],

        //pan-6
        [[ "\\pm", "\\mp", "\\times", "\\div", "\\ast", "\\star", "\\circ", "\\bullet", "\\cdot", "\\cap", "\\cup", "\\uplus", "\\sqcap", "\\sqcup", "\\vee", "\\wedge", /*"\\setminus",*/ "\\wr", "\\diamond", "\\bigtriangleup", "\\bigtriangledown", "\\triangleleft", "\\triangleright", "\\oplus", "\\ominus", "\\otimes", "\\oslash", "\\odot", "\\bigcirc", "\\dagger", "\\ddagger", "\\amalg" ],
        [ "\\nearrow", "\\searrow", "\\nwarrow", "\\swarrow" ],
        [ "\\longrightarrow", "\\longleftarrow", "\\longleftrightarrow", /*"\\longmapsto",*/ "\\Longrightarrow", "\\Longleftarrow", "\\Longleftrightarrow" ]],

        //pan-7
        [[ "\\leftarrow", "\\Leftarrow", "\\rightarrow", "\\Rightarrow", "\\leftrightarrow", "\\Leftrightarrow", /*"\\mapsto", "\\hookleftarrow",*/ "\\leftharpoonup", "\\leftharpoondown", "\\rightleftharpoons", /*"\\hookrightarrow",*/ "\\rightharpoonup", "\\rightharpoondown", "\\uparrow", "\\Uparrow", "\\downarrow", "\\Downarrow", "\\updownarrow", "\\Updownarrow" ],
        [ "\\leftleftarrows", "\\rightrightarrows", "\\leftrightarrows", "\\rightleftarrows", "\\Lleftarrow", "\\Rrightarrow", "\\leftrightharpoons", "\\rightleftharpoons", "\\twoheadleftarrow", "\\twoheadrightarrow", "\\leftarrowtail", "\\rightarrowtail", "\\looparrowleft", "\\looparrowright", "\\curvearrowleft", "\\curvearrowright" ],
        [ "\\circlearrowleft", "\\circlearrowright", /*"\\dashleftarrow", "\\dashrightarrow",*/ "\\Lsh", "\\Rsh", "\\upuparrows", "\\downdownarrows", "\\upharpoonleft", "\\upharpoonright", "\\downharpoonleft", "\\downharpoonright", "\\rightsquigarrow", "\\leftrightsquigarrow", "\\multimap" ],
        [ "\\nleftarrow", "\\nrightarrow", "\\nLeftarrow", "\\nRightarrow", "\\nleftrightarrow", "\\nLeftrightarrow" ]],

        //pan-8
        [[ "\\hbar", "\\hslash", "\\backprime", "\\varnothing", /*"\\vartriangle",*/ "\\triangledown", "\\circledS", "\\bigstar", "\\angle", "\\sphericalangle", "\\measuredangle", "\\nexists", "\\Game", "\\blacktriangle", "\\blacktriangledown", /*"\\square",*/ "\\blacksquare", "\\lozenge", "\\blacklozenge", "\\complement", "\\mho", "\\eth", "\\Finv"/*, "\\diagup", "\\diagdown", "\\Bbbk"*/ ],
        [ "\\dotplus", /*"\\smallsetminus",*/ "\\ltimes", "\\rtimes", "\\Cap", "\\Cup", "\\boxplus", "\\leftthreetimes", "\\rightthreetimes", "\\curlywedge", "\\curlyvee", "\\circleddash", "\\barwedge", "\\veebar", "\\doublebarwedge", "\\boxminus", "\\boxtimes", "\\boxdot", "\\circledast", "\\circledcirc", "\\centerdot", "\\divideontimes"/*, "\\intercal"*/ ],
        [ "\\blacktriangleleft", "\\blacktriangleright", "\\therefore", "\\because" ]],

        //pan-9
        [[ "\\leqq", "\\geqq", "\\leqslant", "\\geqslant", "\\eqslantless", "\\eqslantgtr", "\\lesssim", "\\gtrsim", "\\lessapprox", "\\gtrapprox", "\\approxeq", "\\eqcirc", "\\risingdotseq", "\\circeq", "\\fallingdotseq", "\\triangleq", "\\backsim", /*"\\thicksim",*/ "\\backsimeq", /*"\\thickapprox",*/ "\\subseteqq", "\\supseteqq", "\\succapprox", /*"\\vartriangleleft", "\\vartriangleright",*/ "\\trianglelefteq", "\\trianglerighteq", "\\vDash", "\\Vdash", "\\Vvdash", /*"\\smallsmile",*/ "\\lessdot", "\\gtrdot", "\\lll", "\\ggg", "\\lessgtr", "\\gtrless", "\\lesseqgtr", "\\gtreqless", "\\lesseqqgtr", "\\gtreqqless", "\\doteqdot", "\\Subset", "\\Supset", "\\sqsubset", "\\sqsupset", "\\preccurlyeq", "\\succcurlyeq", "\\curlyeqprec", "\\curlyeqsucc", "\\precsim", "\\succsim", "\\precapprox", /*"\\smallfrown",*/ "\\bumpeq", "\\Bumpeq", "\\shortmid", "\\shortparallel", "\\between", "\\pitchfork", "\\varpropto", "\\backepsilon" ]],

        //pan-10
        [[ "\\nless", "\\ngtr", "\\nleq", "\\ngeq", "\\nleqslant", "\\ngeqslant", "\\nleqq", "\\ngeqq", "\\lneq", "\\gneq", "\\npreceq", "\\nsucceq", "\\precneqq", "\\succneqq", "\\precnsim", "\\succnsim", "\\precnapprox", "\\succnapprox", "\\nsim", "\\ncong", "\\ntrianglelefteq", "\\ntrianglerighteq", "\\nsubseteq", "\\nsupseteq", "\\nsubseteqq", "\\nsupseteqq", "\\subsetneq", "\\lneqq", "\\gneqq", "\\lvertneqq", "\\gvertneqq", "\\lnsim", "\\gnsim", "\\lnapprox", "\\gnapprox", "\\nprec", "\\nsucc", "\\nshortmid", "\\nshortparallel", "\\nmid", "\\nparallel", "\\nvdash", "\\nvDash", "\\nVdash", "\\nVDash", "\\ntriangleleft", "\\ntriangleright", "\\supsetneq", "\\varsubsetneq", "\\varsupsetneq", /*"\\subsetneqq", "\\supsetneqq",*/ "\\varsubsetneqq", "\\varsupsetneqq" ]]];

        /*
        * 关于icon占位的一点说明：
        * （1）基本单位都是32px*32px，高度都统一为32px, 为叙述方便，设1单位宽度为32px；
        * （2）panels[0][2]前八个为1.5个单位，最后两个为1个单位；
        * （3）panels[4][0]为4个单位；
        * （4）panels[5][0]为3个单位；
        * （5）panels[5][1]为2个单位；
        * （6）panels[8][2]为1.5个单位
        *
        * 关于v1.0版支持情况的说明：
        * （1）panels[0][1]都不支持--10个；
        * （2）panels[0][2]前8个不支持--8个；
        * （3）panels[0][3]不支持\mathds{}, \mathbf{}--2个；
        * （4）panels[2][1]不支持\|--1个；
        * （5）panels[2][2]都不支持--6个；
        * （6）panels[2][3]都不支持--4个；
        * （7）panels[2][4]都不支持--4个；
        * （8）panels[2][5]不支持\Box--1个；
        * （9）panels[3]都不支持；
        * （10）panels[4]都不支持；
        * （11）panels[6][0]不支持\lfoor, \rfloor, \|--3个；
        * （12）panels[7][2]都不支持\lhd, \rhd, \unlhd, \unrhd--4个；
        * （12）panels[8][0]不支持\setminus--1个；
        * （13）panels[8][2]不支持\longmapsto--1个；
        * （14）panels[9][0]不支持\mapsto, \hookleftarrow, \hookrightarrow--3个；
        * （15）panels[9][1]不支持\dashleftarrow, \dashrightarrow--2个；
        * （16）panels[10][0]不支持\vartriangle, \square, \diagup, \diagdown--4个；
        * （17）panels[10][1]不支持\smallsetminus, \intercal--2个；
        * （18）panels[11][0]不支持\thicksim, \thickapprox, \vartriangleleft, \vartriangleright, \smallsmile, \smallfrown--6个
        * （19）pannels[12][0]不支持\subsetneqq, \supsetneqq--2个
        */

    };

    toolbar.prototype.loadToolBar = function(){

        //加载工具栏按钮DOM元素
        var panHtml = [];

        for(var i=0; i<this.panels.length; i++)
        {
            panHtml[i] = "";
            panHtml[i] +="<div id=\"pan-"+ i +"\" class=\"pan fix\">";

            for(var j=0; j<this.panels[i].length; j++)
            {
                var iconsBefore = 0;
                panHtml[i] += "<div id=\"subPan-"+ i + "-" + j +"\" class=\"subPan fix";

                if(j===(this.panels[i].length-1))
                    panHtml[i] += " lastSubPan";
                panHtml[i] +="\">";

                for(var k=0; k<this.panels[i][j].length; k++)
                {
                    // 计算出前(n-1)个subPan中的元素个数
                    iconsBefore = j===0 ? 0 : iconsBefore+this.panels[i][j-1].length;
                    panHtml[i] += "<div id=\"icon-"+ i + "-" + j + "-" + k +"\" data-char=\""+ this.panels[i][j][k] +"\" title=\""+ this.panels[i][j][k] +"\"></div>";
                }
                panHtml[i] +="</div>"
            }
            panHtml[i] += "</div>";
        }


        this.tabs.appendTo( document.getElementById("toolbar") );

        $.each( this.tabs.getPanels(), function ( index, panel ) {

            panel.getContentElement().innerHTML = panHtml[index];

        } );

        this.tabs.on( "tabselect", function ( e, info ) {

            var maxHeight= 0,
                $parent = $("#"+info.panel.id + ' .pan');

            $parent.height("auto");
            $("#"+info.panel.id+" .subPan").each(function(){
                var height = $(this).height('100%').height();
                maxHeight = Math.max(maxHeight, height);
            });
            $parent.height(maxHeight);

        } );

        window.tabs = this.tabs;
    };

    toolbar.prototype.selectIconCallback = function(){
        var inputContent = $(this).attr("data-char");
        var cursorPos= latexEditor.getCursor();

        latexEditor.replaceSelection(inputContent, latexEditor.getSelection());
        latexEditor.setCursor({line: cursorPos.line, ch: cursorPos.ch+inputContent.length});
    }

    window.toolbar = new toolbar();
})()
