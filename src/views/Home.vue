<template>
    <my-page title="LaTex 解析器">
        <div class="tab">
            <ul id="tool-tab" class="nav nav-tabs">
                <div class="nav-item active"><a id="tab-style" class="nav-link" href="#tab0" data-toggle="tab">Math</a>
                </div>
                <div class="nav-item"><a class="nav-link" href="#tab1" data-toggle="tab">Greek</a></div>
                <div class="nav-item"><a class="nav-link" href="#tab2" data-toggle="tab">Symbols</a></div>
                <div class="nav-item"><a class="nav-link" href="#tab3" data-toggle="tab">Function(x)...</a>
                </div>
                <div class="nav-item"><a class="nav-link" href="#tab4" data-toggle="tab">{ }...</a></div>
                <div class="nav-item"><a class="nav-link" href="#tab5" data-toggle="tab"><>=...</a></div>
                <div class="nav-item"><a class="nav-link" href="#tab6" data-toggle="tab">+/-...</a></div>
                <div class="nav-item"><a class="nav-link" href="#tab7" data-toggle="tab">-->...</a></div>
                <div class="nav-item"><a class="nav-link" href="#tab8" data-toggle="tab">AMS</a></div>
                <div class="nav-item"><a class="nav-link" href="#tab8" data-toggle="tab">AMS =<></a></div>
                <div class="nav-item"><a class="nav-link" href="#tab10" data-toggle="tab">AMS NOT=<></a></div>
            </ul>
            <div class="tab-content">
                <div id="tab0" class="tab-pane fade active in" style="height: 74px;">
                    <div id="pan-0" class="pan fix" style="height: 74px;">
                        <div id="subPan-0-0" class="subPan fix" style="height: 100%;">
                            <div id="icon-0-0-0" data-char="\sum" title="\sum"></div>
                            <div id="icon-0-0-1" data-char="\int" title="\int"></div>
                            <div id="icon-0-0-2" data-char="\cap" title="\cap"></div>
                            <div id="icon-0-0-3" data-char="\cup" title="\cup"></div>
                            <div id="icon-0-0-4" data-char="\sqcup" title="\sqcup"></div>
                            <div id="icon-0-0-5" data-char="\vee" title="\vee"></div>
                            <div id="icon-0-0-6" data-char="\wedge" title="\wedge"></div>
                            <div id="icon-0-0-7" data-char="\odot" title="\odot"></div>
                            <div id="icon-0-0-8" data-char="\otimes" title="\otimes"></div>
                            <div id="icon-0-0-9" data-char="\oplus" title="\oplus"></div>
                            <div id="icon-0-0-10" data-char="\uplus" title="\uplus"></div>
                        </div>
                        <div id="subPan-0-1" class="subPan fix" style="height: 100%;">
                            <div id="icon-0-1-0" data-char="\sqrt{abc}" title="\sqrt{abc}"></div>
                            <div id="icon-0-1-1" data-char="\sqrt[n]{abc}" title="\sqrt[n]{abc}"></div>
                            <div id="icon-0-1-2" data-char="f'" title="f'"></div>
                            <div id="icon-0-1-3" data-char="\frac{abc}{xyz}" title="\frac{abc}{xyz}"></div>
                        </div>
                        <div id="subPan-0-2" class="subPan fix lastSubPan" style="height: 100%;">
                            <div id="icon-0-2-0" data-char="x^{k}" title="x^{k}"></div>
                            <div id="icon-0-2-1" data-char="\mathbb{B}" title="\mathbb{B}"></div>
                            <div id="icon-0-2-2" data-char="x_{k}" title="x_{k}"></div>
                            <div id="icon-0-2-3" data-char="\mathcal{C}" title="\mathcal{C}"></div>
                            <div id="icon-0-2-4" data-char="\mathfrak{F}" title="\mathfrak{F}"></div>
                            <div id="icon-0-2-5" data-char="\mathrm{T}" title="\mathrm{T}"></div>
                        </div>
                    </div>
                </div>
                <div id="tab1" class="tab-pane fade">
                    <div id="pan-1" class="pan fix" style="height: 74px;">
                        <div id="subPan-1-0" class="subPan fix" style="height: 100%;">
                            <div id="icon-1-0-0" data-char="\Gamma" title="\Gamma"></div>
                            <div id="icon-1-0-1" data-char="\Delta" title="\Delta"></div>
                            <div id="icon-1-0-2" data-char="\Theta" title="\Theta"></div>
                            <div id="icon-1-0-3" data-char="\Lambda" title="\Lambda"></div>
                            <div id="icon-1-0-4" data-char="\Xi" title="\Xi"></div>
                            <div id="icon-1-0-5" data-char="\Pi" title="\Pi"></div>
                            <div id="icon-1-0-6" data-char="\Sigma" title="\Sigma"></div>
                            <div id="icon-1-0-7" data-char="\Upsilon" title="\Upsilon"></div>
                            <div id="icon-1-0-8" data-char="\Phi" title="\Phi"></div>
                            <div id="icon-1-0-9" data-char="\Psi" title="\Psi"></div>
                            <div id="icon-1-0-10" data-char="\Omega" title="\Omega"></div>
                            <div id="icon-1-0-11" data-char="\$" title="\$"></div>
                        </div>
                        <div id="subPan-1-1" class="subPan fix" style="height: 100%;">
                            <div id="icon-1-1-0" data-char="\alpha" title="\alpha"></div>
                            <div id="icon-1-1-1" data-char="\beta" title="\beta"></div>
                            <div id="icon-1-1-2" data-char="\gamma" title="\gamma"></div>
                            <div id="icon-1-1-3" data-char="\delta" title="\delta"></div>
                            <div id="icon-1-1-4" data-char="\epsilon" title="\epsilon"></div>
                            <div id="icon-1-1-5" data-char="\varepsilon" title="\varepsilon"></div>
                            <div id="icon-1-1-6" data-char="\zeta" title="\zeta"></div>
                            <div id="icon-1-1-7" data-char="\eta" title="\eta"></div>
                            <div id="icon-1-1-8" data-char="\theta" title="\theta"></div>
                            <div id="icon-1-1-9" data-char="\vartheta" title="\vartheta"></div>
                            <div id="icon-1-1-10" data-char="\iota" title="\iota"></div>
                            <div id="icon-1-1-11" data-char="\kappa" title="\kappa"></div>
                            <div id="icon-1-1-12" data-char="\lambda" title="\lambda"></div>
                            <div id="icon-1-1-13" data-char="\mu" title="\mu"></div>
                            <div id="icon-1-1-14" data-char="\nu" title="\nu"></div>
                            <div id="icon-1-1-15" data-char="\xi" title="\xi"></div>
                            <div id="icon-1-1-16" data-char="{o}" title="{o}"></div>
                            <div id="icon-1-1-17" data-char="\pi" title="\pi"></div>
                            <div id="icon-1-1-18" data-char="\varpi" title="\varpi"></div>
                            <div id="icon-1-1-19" data-char="\rho" title="\rho"></div>
                            <div id="icon-1-1-20" data-char="\varrho" title="\varrho"></div>
                            <div id="icon-1-1-21" data-char="\sigma" title="\sigma"></div>
                            <div id="icon-1-1-22" data-char="\varsigma" title="\varsigma"></div>
                            <div id="icon-1-1-23" data-char="\tau" title="\tau"></div>
                            <div id="icon-1-1-24" data-char="\upsilon" title="\upsilon"></div>
                            <div id="icon-1-1-25" data-char="\phi" title="\phi"></div>
                            <div id="icon-1-1-26" data-char="\varphi" title="\varphi"></div>
                            <div id="icon-1-1-27" data-char="\chi" title="\chi"></div>
                            <div id="icon-1-1-28" data-char="\psi" title="\psi"></div>
                            <div id="icon-1-1-29" data-char="\omega" title="\omega"></div>
                        </div>
                        <div id="subPan-1-2" class="subPan fix lastSubPan" style="height: 100%;">
                            <div id="icon-1-2-0" data-char="\digamma" title="\digamma"></div>
                            <div id="icon-1-2-1" data-char="\beth" title="\beth"></div>
                            <div id="icon-1-2-2" data-char="\gimel" title="\gimel"></div>
                            <div id="icon-1-2-3" data-char="\daleth" title="\daleth"></div>
                        </div>
                    </div>
                </div>
                <div id="tab2" class="tab-pane fade">
                    <div id="pan-2" class="pan fix" style="height: 74px;">
                        <div id="subPan-2-0" class="subPan fix" style="height: 100%;">
                            <div id="icon-2-0-0" data-char="\aleph" title="\aleph"></div>
                            <div id="icon-2-0-1" data-char="\hbar" title="\hbar"></div>
                            <div id="icon-2-0-2" data-char="\imath" title="\imath"></div>
                            <div id="icon-2-0-3" data-char="\jmath" title="\jmath"></div>
                            <div id="icon-2-0-4" data-char="\ell" title="\ell"></div>
                            <div id="icon-2-0-5" data-char="\wp" title="\wp"></div>
                            <div id="icon-2-0-6" data-char="\Re" title="\Re"></div>
                            <div id="icon-2-0-7" data-char="\Im" title="\Im"></div>
                            <div id="icon-2-0-8" data-char="\prime" title="\prime"></div>
                            <div id="icon-2-0-9" data-char="\emptyset" title="\emptyset"></div>
                            <div id="icon-2-0-10" data-char="\angle" title="\angle"></div>
                            <div id="icon-2-0-11" data-char="\infty" title="\infty"></div>
                            <div id="icon-2-0-12" data-char="\partial" title="\partial"></div>
                            <div id="icon-2-0-13" data-char="\nabla" title="\nabla"></div>
                            <div id="icon-2-0-14" data-char="\triangle" title="\triangle"></div>
                            <div id="icon-2-0-15" data-char="\forall" title="\forall"></div>
                            <div id="icon-2-0-16" data-char="\exists" title="\exists"></div>
                            <div id="icon-2-0-17" data-char="\neg" title="\neg"></div>
                            <div id="icon-2-0-18" data-char="\surd" title="\surd"></div>
                            <div id="icon-2-0-19" data-char="\top" title="\top"></div>
                            <div id="icon-2-0-20" data-char="\bot" title="\bot"></div>
                            <div id="icon-2-0-21" data-char="\backslash" title="\backslash"></div>
                        </div>
                        <div id="subPan-2-1" class="subPan fix" style="height: 100%;">
                            <div id="icon-2-1-0" data-char="\flat" title="\flat"></div>
                            <div id="icon-2-1-1" data-char="\natural" title="\natural"></div>
                            <div id="icon-2-1-2" data-char="\sharp" title="\sharp"></div>
                            <div id="icon-2-1-3" data-char="\clubsuit" title="\clubsuit"></div>
                            <div id="icon-2-1-4" data-char="\diamondsuit" title="\diamondsuit"></div>
                            <div id="icon-2-1-5" data-char="\heartsuit" title="\heartsuit"></div>
                            <div id="icon-2-1-6" data-char="\spadesuit" title="\spadesuit"></div>
                        </div>
                        <div id="subPan-2-2" class="subPan fix lastSubPan" style="height: 100%;">
                            <div id="icon-2-2-0" data-char="\diamond" title="\diamond"></div>
                            <div id="icon-2-2-1" data-char="\mho" title="\mho"></div>
                            <div id="icon-2-2-2" data-char="\ldots" title="\ldots"></div>
                            <div id="icon-2-2-3" data-char="\cdots" title="\cdots"></div>
                            <div id="icon-2-2-4" data-char="\cdot" title="\cdot"></div>
                            <div id="icon-2-2-5" data-char="\vdots" title="\vdots"></div>
                            <div id="icon-2-2-6" data-char="\ddots" title="\ddots"></div>
                        </div>
                    </div>
                </div>
                <div id="tab3" class="tab-pane fade">
                    <div id="pan-3" class="pan fix" style="height: 111px;">
                        <div id="subPan-3-0" class="subPan fix" style="height: 100%;">
                            <div id="icon-3-0-0" data-char="\arccos" title="\arccos"></div>
                            <div id="icon-3-0-1" data-char="\arcsin" title="\arcsin"></div>
                            <div id="icon-3-0-2" data-char="\arctan" title="\arctan"></div>
                            <div id="icon-3-0-3" data-char="\lim" title="\lim"></div>
                            <div id="icon-3-0-4" data-char="\liminf" title="\liminf"></div>
                            <div id="icon-3-0-5" data-char="\limsup" title="\limsup"></div>
                        </div>
                        <div id="subPan-3-1" class="subPan fix lastSubPan" style="height: 100%;">
                            <div id="icon-3-1-0" data-char="\arg" title="\arg"></div>
                            <div id="icon-3-1-1" data-char="\cos" title="\cos"></div>
                            <div id="icon-3-1-2" data-char="\cosh" title="\cosh"></div>
                            <div id="icon-3-1-3" data-char="\cot" title="\cot"></div>
                            <div id="icon-3-1-4" data-char="\coth" title="\coth"></div>
                            <div id="icon-3-1-5" data-char="\csc" title="\csc"></div>
                            <div id="icon-3-1-6" data-char="\det" title="\det"></div>
                            <div id="icon-3-1-7" data-char="\dim" title="\dim"></div>
                            <div id="icon-3-1-8" data-char="\exp" title="\exp"></div>
                            <div id="icon-3-1-9" data-char="\gcd" title="\gcd"></div>
                            <div id="icon-3-1-10" data-char="\hom" title="\hom"></div>
                            <div id="icon-3-1-11" data-char="\inf" title="\inf"></div>
                            <div id="icon-3-1-12" data-char="\ker" title="\ker"></div>
                            <div id="icon-3-1-13" data-char="\lg" title="\lg"></div>
                            <div id="icon-3-1-14" data-char="\ln" title="\ln"></div>
                            <div id="icon-3-1-15" data-char="\log" title="\log"></div>
                            <div id="icon-3-1-16" data-char="\max" title="\max"></div>
                            <div id="icon-3-1-17" data-char="\min" title="\min"></div>
                            <div id="icon-3-1-18" data-char="\sec" title="\sec"></div>
                            <div id="icon-3-1-19" data-char="\sin" title="\sin"></div>
                            <div id="icon-3-1-20" data-char="\sinh" title="\sinh"></div>
                            <div id="icon-3-1-21" data-char="\sup" title="\sup"></div>
                            <div id="icon-3-1-22" data-char="\tan" title="\tan"></div>
                            <div id="icon-3-1-23" data-char="\tanh" title="\tanh"></div>
                        </div>
                    </div>
                </div>
                <div id="tab4" class="tab-pane fade">
                    <div id="pan-4" class="pan fix" style="height: 74px;">
                        <div id="subPan-4-0" class="subPan fix" style="height: 100%;">
                            <div id="icon-4-0-0" data-char="(" title="("></div>
                            <div id="icon-4-0-1" data-char="[" title="["></div>
                            <div id="icon-4-0-2" data-char="\{" title="\{"></div>
                            <div id="icon-4-0-3" data-char="\lceil" title="\lceil"></div>
                            <div id="icon-4-0-4" data-char="\langle" title="\langle"></div>
                            <div id="icon-4-0-5" data-char="/" title="/"></div>
                            <div id="icon-4-0-6" data-char="|" title="|"></div>
                            <div id="icon-4-0-7" data-char=")" title=")"></div>
                            <div id="icon-4-0-8" data-char="]" title="]"></div>
                            <div id="icon-4-0-9" data-char="\}" title="\}"></div>
                            <div id="icon-4-0-10" data-char="\rceil" title="\rceil"></div>
                            <div id="icon-4-0-11" data-char="\rangle" title="\rangle"></div>
                            <div id="icon-4-0-12" data-char="\backslash" title="\backslash"></div>
                        </div>
                        <div id="subPan-4-1" class="subPan fix lastSubPan" style="height: 100%;">
                            <div id="icon-4-1-0" data-char="\uparrow" title="\uparrow"></div>
                            <div id="icon-4-1-1" data-char="\downarrow" title="\downarrow"></div>
                            <div id="icon-4-1-2" data-char="\updownarrow" title="\updownarrow"></div>
                            <div id="icon-4-1-3" data-char="\Uparrow" title="\Uparrow"></div>
                            <div id="icon-4-1-4" data-char="\Downarrow" title="\Downarrow"></div>
                            <div id="icon-4-1-5" data-char="\Updownarrow" title="\Updownarrow"></div>
                        </div>
                    </div>
                </div>
                <div id="tab5" class="tab-pane fade">
                    <div id="pan-5" class="pan fix" style="height: 74px;">
                        <div id="subPan-5-0" class="subPan fix" style="height: 100%;">
                            <div id="icon-5-0-0" data-char="<" title="<"></div>
                            <div id="icon-5-0-1" data-char="\leq" title="\leq"></div>
                            <div id="icon-5-0-2" data-char="\prec" title="\prec"></div>
                            <div id="icon-5-0-3" data-char="\preceq" title="\preceq"></div>
                            <div id="icon-5-0-4" data-char="\ll" title="\ll"></div>
                            <div id="icon-5-0-5" data-char="\subset" title="\subset"></div>
                            <div id="icon-5-0-6" data-char="\subseteq" title="\subseteq"></div>
                            <div id="icon-5-0-7" data-char="\sqsubseteq" title="\sqsubseteq"></div>
                            <div id="icon-5-0-8" data-char="\in" title="\in"></div>
                            <div id="icon-5-0-9" data-char="\vdash" title="\vdash"></div>
                            <div id="icon-5-0-10" data-char=">" title=">"></div>
                            <div id="icon-5-0-11" data-char="\geq" title="\geq"></div>
                            <div id="icon-5-0-12" data-char="\succ" title="\succ"></div>
                            <div id="icon-5-0-13" data-char="\succeq" title="\succeq"></div>
                            <div id="icon-5-0-14" data-char="\gg" title="\gg"></div>
                            <div id="icon-5-0-15" data-char="\supset" title="\supset"></div>
                            <div id="icon-5-0-16" data-char="\supseteq" title="\supseteq"></div>
                            <div id="icon-5-0-17" data-char="\sqsupseteq" title="\sqsupseteq"></div>
                            <div id="icon-5-0-18" data-char="\ni" title="\ni"></div>
                            <div id="icon-5-0-19" data-char="\dashv" title="\dashv"></div>
                        </div>
                        <div id="subPan-5-1" class="subPan fix lastSubPan" style="height: 100%;">
                            <div id="icon-5-1-0" data-char="\equiv" title="\equiv"></div>
                            <div id="icon-5-1-1" data-char="\sim" title="\sim"></div>
                            <div id="icon-5-1-2" data-char="\simeq" title="\simeq"></div>
                            <div id="icon-5-1-3" data-char="\asymp" title="\asymp"></div>
                            <div id="icon-5-1-4" data-char="\approx" title="\approx"></div>
                            <div id="icon-5-1-5" data-char="\cong" title="\cong"></div>
                            <div id="icon-5-1-6" data-char="\neq" title="\neq"></div>
                            <div id="icon-5-1-7" data-char="\doteq" title="\doteq"></div>
                            <div id="icon-5-1-8" data-char="\models" title="\models"></div>
                            <div id="icon-5-1-9" data-char="\perp" title="\perp"></div>
                            <div id="icon-5-1-10" data-char="\mid" title="\mid"></div>
                            <div id="icon-5-1-11" data-char="\parallel" title="\parallel"></div>
                            <div id="icon-5-1-12" data-char="\smile" title="\smile"></div>
                            <div id="icon-5-1-13" data-char="\frown" title="\frown"></div>
                            <div id="icon-5-1-14" data-char="\propto" title="\propto"></div>
                            <div id="icon-5-1-15" data-char="\bowtie" title="\bowtie"></div>
                        </div>
                    </div>
                </div>
                <div id="tab6" class="tab-pane fade">
                    <div id="pan-6" class="pan fix" style="height: 74px;">
                        <div id="subPan-6-0" class="subPan fix" style="height: 100%;">
                            <div id="icon-6-0-0" data-char="\pm" title="\pm"></div>
                            <div id="icon-6-0-1" data-char="\mp" title="\mp"></div>
                            <div id="icon-6-0-2" data-char="\times" title="\times"></div>
                            <div id="icon-6-0-3" data-char="\div" title="\div"></div>
                            <div id="icon-6-0-4" data-char="\ast" title="\ast"></div>
                            <div id="icon-6-0-5" data-char="\star" title="\star"></div>
                            <div id="icon-6-0-6" data-char="\circ" title="\circ"></div>
                            <div id="icon-6-0-7" data-char="\bullet" title="\bullet"></div>
                            <div id="icon-6-0-8" data-char="\cdot" title="\cdot"></div>
                            <div id="icon-6-0-9" data-char="\cap" title="\cap"></div>
                            <div id="icon-6-0-10" data-char="\cup" title="\cup"></div>
                            <div id="icon-6-0-11" data-char="\uplus" title="\uplus"></div>
                            <div id="icon-6-0-12" data-char="\sqcap" title="\sqcap"></div>
                            <div id="icon-6-0-13" data-char="\sqcup" title="\sqcup"></div>
                            <div id="icon-6-0-14" data-char="\vee" title="\vee"></div>
                            <div id="icon-6-0-15" data-char="\wedge" title="\wedge"></div>
                            <div id="icon-6-0-16" data-char="\wr" title="\wr"></div>
                            <div id="icon-6-0-17" data-char="\diamond" title="\diamond"></div>
                            <div id="icon-6-0-18" data-char="\bigtriangleup" title="\bigtriangleup"></div>
                            <div id="icon-6-0-19" data-char="\bigtriangledown" title="\bigtriangledown"></div>
                            <div id="icon-6-0-20" data-char="\triangleleft" title="\triangleleft"></div>
                            <div id="icon-6-0-21" data-char="\triangleright" title="\triangleright"></div>
                            <div id="icon-6-0-22" data-char="\oplus" title="\oplus"></div>
                            <div id="icon-6-0-23" data-char="\ominus" title="\ominus"></div>
                            <div id="icon-6-0-24" data-char="\otimes" title="\otimes"></div>
                            <div id="icon-6-0-25" data-char="\oslash" title="\oslash"></div>
                            <div id="icon-6-0-26" data-char="\odot" title="\odot"></div>
                            <div id="icon-6-0-27" data-char="\bigcirc" title="\bigcirc"></div>
                            <div id="icon-6-0-28" data-char="\dagger" title="\dagger"></div>
                            <div id="icon-6-0-29" data-char="\ddagger" title="\ddagger"></div>
                            <div id="icon-6-0-30" data-char="\amalg" title="\amalg"></div>
                        </div>
                        <div id="subPan-6-1" class="subPan fix" style="height: 100%;">
                            <div id="icon-6-1-0" data-char="\nearrow" title="\nearrow"></div>
                            <div id="icon-6-1-1" data-char="\searrow" title="\searrow"></div>
                            <div id="icon-6-1-2" data-char="\nwarrow" title="\nwarrow"></div>
                            <div id="icon-6-1-3" data-char="\swarrow" title="\swarrow"></div>
                        </div>
                        <div id="subPan-6-2" class="subPan fix lastSubPan" style="height: 100%;">
                            <div id="icon-6-2-0" data-char="\longrightarrow" title="\longrightarrow"></div>
                            <div id="icon-6-2-1" data-char="\longleftarrow" title="\longleftarrow"></div>
                            <div id="icon-6-2-2" data-char="\longleftrightarrow"
                                 title="\longleftrightarrow"></div>
                            <div id="icon-6-2-3" data-char="\Longrightarrow" title="\Longrightarrow"></div>
                            <div id="icon-6-2-4" data-char="\Longleftarrow" title="\Longleftarrow"></div>
                            <div id="icon-6-2-5" data-char="\Longleftrightarrow"
                                 title="\Longleftrightarrow"></div>
                        </div>
                    </div>
                </div>
                <div id="tab7" class="tab-pane fade">
                    <div id="pan-7" class="pan fix" style="height: 74px;">
                        <div id="subPan-7-0" class="subPan fix" style="height: 100%;">
                            <div id="icon-7-0-0" data-char="\leftarrow" title="\leftarrow"></div>
                            <div id="icon-7-0-1" data-char="\Leftarrow" title="\Leftarrow"></div>
                            <div id="icon-7-0-2" data-char="\rightarrow" title="\rightarrow"></div>
                            <div id="icon-7-0-3" data-char="\Rightarrow" title="\Rightarrow"></div>
                            <div id="icon-7-0-4" data-char="\leftrightarrow" title="\leftrightarrow"></div>
                            <div id="icon-7-0-5" data-char="\Leftrightarrow" title="\Leftrightarrow"></div>
                            <div id="icon-7-0-6" data-char="\leftharpoonup" title="\leftharpoonup"></div>
                            <div id="icon-7-0-7" data-char="\leftharpoondown" title="\leftharpoondown"></div>
                            <div id="icon-7-0-8" data-char="\rightleftharpoons"
                                 title="\rightleftharpoons"></div>
                            <div id="icon-7-0-9" data-char="\rightharpoonup" title="\rightharpoonup"></div>
                            <div id="icon-7-0-10" data-char="\rightharpoondown" title="\rightharpoondown"></div>
                            <div id="icon-7-0-11" data-char="\uparrow" title="\uparrow"></div>
                            <div id="icon-7-0-12" data-char="\Uparrow" title="\Uparrow"></div>
                            <div id="icon-7-0-13" data-char="\downarrow" title="\downarrow"></div>
                            <div id="icon-7-0-14" data-char="\Downarrow" title="\Downarrow"></div>
                            <div id="icon-7-0-15" data-char="\updownarrow" title="\updownarrow"></div>
                            <div id="icon-7-0-16" data-char="\Updownarrow" title="\Updownarrow"></div>
                        </div>
                        <div id="subPan-7-1" class="subPan fix" style="height: 100%;">
                            <div id="icon-7-1-0" data-char="\leftleftarrows" title="\leftleftarrows"></div>
                            <div id="icon-7-1-1" data-char="\rightrightarrows" title="\rightrightarrows"></div>
                            <div id="icon-7-1-2" data-char="\leftrightarrows" title="\leftrightarrows"></div>
                            <div id="icon-7-1-3" data-char="\rightleftarrows" title="\rightleftarrows"></div>
                            <div id="icon-7-1-4" data-char="\Lleftarrow" title="\Lleftarrow"></div>
                            <div id="icon-7-1-5" data-char="\Rrightarrow" title="\Rrightarrow"></div>
                            <div id="icon-7-1-6" data-char="\leftrightharpoons"
                                 title="\leftrightharpoons"></div>
                            <div id="icon-7-1-7" data-char="\rightleftharpoons"
                                 title="\rightleftharpoons"></div>
                            <div id="icon-7-1-8" data-char="\twoheadleftarrow" title="\twoheadleftarrow"></div>
                            <div id="icon-7-1-9" data-char="\twoheadrightarrow"
                                 title="\twoheadrightarrow"></div>
                            <div id="icon-7-1-10" data-char="\leftarrowtail" title="\leftarrowtail"></div>
                            <div id="icon-7-1-11" data-char="\rightarrowtail" title="\rightarrowtail"></div>
                            <div id="icon-7-1-12" data-char="\looparrowleft" title="\looparrowleft"></div>
                            <div id="icon-7-1-13" data-char="\looparrowright" title="\looparrowright"></div>
                            <div id="icon-7-1-14" data-char="\curvearrowleft" title="\curvearrowleft"></div>
                            <div id="icon-7-1-15" data-char="\curvearrowright" title="\curvearrowright"></div>
                        </div>
                        <div id="subPan-7-2" class="subPan fix" style="height: 100%;">
                            <div id="icon-7-2-0" data-char="\circlearrowleft" title="\circlearrowleft"></div>
                            <div id="icon-7-2-1" data-char="\circlearrowright" title="\circlearrowright"></div>
                            <div id="icon-7-2-2" data-char="\Lsh" title="\Lsh"></div>
                            <div id="icon-7-2-3" data-char="\Rsh" title="\Rsh"></div>
                            <div id="icon-7-2-4" data-char="\upuparrows" title="\upuparrows"></div>
                            <div id="icon-7-2-5" data-char="\downdownarrows" title="\downdownarrows"></div>
                            <div id="icon-7-2-6" data-char="\upharpoonleft" title="\upharpoonleft"></div>
                            <div id="icon-7-2-7" data-char="\upharpoonright" title="\upharpoonright"></div>
                            <div id="icon-7-2-8" data-char="\downharpoonleft" title="\downharpoonleft"></div>
                            <div id="icon-7-2-9" data-char="\downharpoonright" title="\downharpoonright"></div>
                            <div id="icon-7-2-10" data-char="\rightsquigarrow" title="\rightsquigarrow"></div>
                            <div id="icon-7-2-11" data-char="\leftrightsquigarrow"
                                 title="\leftrightsquigarrow"></div>
                            <div id="icon-7-2-12" data-char="\multimap" title="\multimap"></div>
                        </div>
                        <div id="subPan-7-3" class="subPan fix lastSubPan" style="height: 100%;">
                            <div id="icon-7-3-0" data-char="\nleftarrow" title="\nleftarrow"></div>
                            <div id="icon-7-3-1" data-char="\nrightarrow" title="\nrightarrow"></div>
                            <div id="icon-7-3-2" data-char="\nLeftarrow" title="\nLeftarrow"></div>
                            <div id="icon-7-3-3" data-char="\nRightarrow" title="\nRightarrow"></div>
                            <div id="icon-7-3-4" data-char="\nleftrightarrow" title="\nleftrightarrow"></div>
                            <div id="icon-7-3-5" data-char="\nLeftrightarrow" title="\nLeftrightarrow"></div>
                        </div>
                    </div>
                </div>
                <div id="tab8" class="tab-pane fade">
                    <div id="pan-8" class="pan fix" style="height: 74px;">
                        <div id="subPan-8-0" class="subPan fix" style="height: 100%;">
                            <div id="icon-8-0-0" data-char="\hbar" title="\hbar"></div>
                            <div id="icon-8-0-1" data-char="\hslash" title="\hslash"></div>
                            <div id="icon-8-0-2" data-char="\backprime" title="\backprime"></div>
                            <div id="icon-8-0-3" data-char="\varnothing" title="\varnothing"></div>
                            <div id="icon-8-0-4" data-char="\triangledown" title="\triangledown"></div>
                            <div id="icon-8-0-5" data-char="\circledS" title="\circledS"></div>
                            <div id="icon-8-0-6" data-char="\bigstar" title="\bigstar"></div>
                            <div id="icon-8-0-7" data-char="\angle" title="\angle"></div>
                            <div id="icon-8-0-8" data-char="\sphericalangle" title="\sphericalangle"></div>
                            <div id="icon-8-0-9" data-char="\measuredangle" title="\measuredangle"></div>
                            <div id="icon-8-0-10" data-char="\nexists" title="\nexists"></div>
                            <div id="icon-8-0-11" data-char="\Game" title="\Game"></div>
                            <div id="icon-8-0-12" data-char="\blacktriangle" title="\blacktriangle"></div>
                            <div id="icon-8-0-13" data-char="\blacktriangledown"
                                 title="\blacktriangledown"></div>
                            <div id="icon-8-0-14" data-char="\blacksquare" title="\blacksquare"></div>
                            <div id="icon-8-0-15" data-char="\lozenge" title="\lozenge"></div>
                            <div id="icon-8-0-16" data-char="\blacklozenge" title="\blacklozenge"></div>
                            <div id="icon-8-0-17" data-char="\complement" title="\complement"></div>
                            <div id="icon-8-0-18" data-char="\mho" title="\mho"></div>
                            <div id="icon-8-0-19" data-char="\eth" title="\eth"></div>
                            <div id="icon-8-0-20" data-char="\Finv" title="\Finv"></div>
                        </div>
                        <div id="subPan-8-1" class="subPan fix" style="height: 100%;">
                            <div id="icon-8-1-0" data-char="\dotplus" title="\dotplus"></div>
                            <div id="icon-8-1-1" data-char="\ltimes" title="\ltimes"></div>
                            <div id="icon-8-1-2" data-char="\rtimes" title="\rtimes"></div>
                            <div id="icon-8-1-3" data-char="\Cap" title="\Cap"></div>
                            <div id="icon-8-1-4" data-char="\Cup" title="\Cup"></div>
                            <div id="icon-8-1-5" data-char="\boxplus" title="\boxplus"></div>
                            <div id="icon-8-1-6" data-char="\leftthreetimes" title="\leftthreetimes"></div>
                            <div id="icon-8-1-7" data-char="\rightthreetimes" title="\rightthreetimes"></div>
                            <div id="icon-8-1-8" data-char="\curlywedge" title="\curlywedge"></div>
                            <div id="icon-8-1-9" data-char="\curlyvee" title="\curlyvee"></div>
                            <div id="icon-8-1-10" data-char="\circleddash" title="\circleddash"></div>
                            <div id="icon-8-1-11" data-char="\barwedge" title="\barwedge"></div>
                            <div id="icon-8-1-12" data-char="\veebar" title="\veebar"></div>
                            <div id="icon-8-1-13" data-char="\doublebarwedge" title="\doublebarwedge"></div>
                            <div id="icon-8-1-14" data-char="\boxminus" title="\boxminus"></div>
                            <div id="icon-8-1-15" data-char="\boxtimes" title="\boxtimes"></div>
                            <div id="icon-8-1-16" data-char="\boxdot" title="\boxdot"></div>
                            <div id="icon-8-1-17" data-char="\circledast" title="\circledast"></div>
                            <div id="icon-8-1-18" data-char="\circledcirc" title="\circledcirc"></div>
                            <div id="icon-8-1-19" data-char="\centerdot" title="\centerdot"></div>
                            <div id="icon-8-1-20" data-char="\divideontimes" title="\divideontimes"></div>
                        </div>
                        <div id="subPan-8-2" class="subPan fix lastSubPan" style="height: 100%;">
                            <div id="icon-8-2-0" data-char="\blacktriangleleft"
                                 title="\blacktriangleleft"></div>
                            <div id="icon-8-2-1" data-char="\blacktriangleright"
                                 title="\blacktriangleright"></div>
                            <div id="icon-8-2-2" data-char="\therefore" title="\therefore"></div>
                            <div id="icon-8-2-3" data-char="\because" title="\because"></div>
                        </div>
                    </div>
                </div>
                <div id="tab9" class="tab-pane fade">
                    <div id="pan-9" class="pan fix" style="height: 74px;">
                        <div id="subPan-9-0" class="subPan fix lastSubPan" style="height: 100%;">
                            <div id="icon-9-0-0" data-char="\leqq" title="\leqq"></div>
                            <div id="icon-9-0-1" data-char="\geqq" title="\geqq"></div>
                            <div id="icon-9-0-2" data-char="\leqslant" title="\leqslant"></div>
                            <div id="icon-9-0-3" data-char="\geqslant" title="\geqslant"></div>
                            <div id="icon-9-0-4" data-char="\eqslantless" title="\eqslantless"></div>
                            <div id="icon-9-0-5" data-char="\eqslantgtr" title="\eqslantgtr"></div>
                            <div id="icon-9-0-6" data-char="\lesssim" title="\lesssim"></div>
                            <div id="icon-9-0-7" data-char="\gtrsim" title="\gtrsim"></div>
                            <div id="icon-9-0-8" data-char="\lessapprox" title="\lessapprox"></div>
                            <div id="icon-9-0-9" data-char="\gtrapprox" title="\gtrapprox"></div>
                            <div id="icon-9-0-10" data-char="\approxeq" title="\approxeq"></div>
                            <div id="icon-9-0-11" data-char="\eqcirc" title="\eqcirc"></div>
                            <div id="icon-9-0-12" data-char="\risingdotseq" title="\risingdotseq"></div>
                            <div id="icon-9-0-13" data-char="\circeq" title="\circeq"></div>
                            <div id="icon-9-0-14" data-char="\fallingdotseq" title="\fallingdotseq"></div>
                            <div id="icon-9-0-15" data-char="\triangleq" title="\triangleq"></div>
                            <div id="icon-9-0-16" data-char="\backsim" title="\backsim"></div>
                            <div id="icon-9-0-17" data-char="\backsimeq" title="\backsimeq"></div>
                            <div id="icon-9-0-18" data-char="\subseteqq" title="\subseteqq"></div>
                            <div id="icon-9-0-19" data-char="\supseteqq" title="\supseteqq"></div>
                            <div id="icon-9-0-20" data-char="\succapprox" title="\succapprox"></div>
                            <div id="icon-9-0-21" data-char="\trianglelefteq" title="\trianglelefteq"></div>
                            <div id="icon-9-0-22" data-char="\trianglerighteq" title="\trianglerighteq"></div>
                            <div id="icon-9-0-23" data-char="\vDash" title="\vDash"></div>
                            <div id="icon-9-0-24" data-char="\Vdash" title="\Vdash"></div>
                            <div id="icon-9-0-25" data-char="\Vvdash" title="\Vvdash"></div>
                            <div id="icon-9-0-26" data-char="\lessdot" title="\lessdot"></div>
                            <div id="icon-9-0-27" data-char="\gtrdot" title="\gtrdot"></div>
                            <div id="icon-9-0-28" data-char="\lll" title="\lll"></div>
                            <div id="icon-9-0-29" data-char="\ggg" title="\ggg"></div>
                            <div id="icon-9-0-30" data-char="\lessgtr" title="\lessgtr"></div>
                            <div id="icon-9-0-31" data-char="\gtrless" title="\gtrless"></div>
                            <div id="icon-9-0-32" data-char="\lesseqgtr" title="\lesseqgtr"></div>
                            <div id="icon-9-0-33" data-char="\gtreqless" title="\gtreqless"></div>
                            <div id="icon-9-0-34" data-char="\lesseqqgtr" title="\lesseqqgtr"></div>
                            <div id="icon-9-0-35" data-char="\gtreqqless" title="\gtreqqless"></div>
                            <div id="icon-9-0-36" data-char="\doteqdot" title="\doteqdot"></div>
                            <div id="icon-9-0-37" data-char="\Subset" title="\Subset"></div>
                            <div id="icon-9-0-38" data-char="\Supset" title="\Supset"></div>
                            <div id="icon-9-0-39" data-char="\sqsubset" title="\sqsubset"></div>
                            <div id="icon-9-0-40" data-char="\sqsupset" title="\sqsupset"></div>
                            <div id="icon-9-0-41" data-char="\preccurlyeq" title="\preccurlyeq"></div>
                            <div id="icon-9-0-42" data-char="\succcurlyeq" title="\succcurlyeq"></div>
                            <div id="icon-9-0-43" data-char="\curlyeqprec" title="\curlyeqprec"></div>
                            <div id="icon-9-0-44" data-char="\curlyeqsucc" title="\curlyeqsucc"></div>
                            <div id="icon-9-0-45" data-char="\precsim" title="\precsim"></div>
                            <div id="icon-9-0-46" data-char="\succsim" title="\succsim"></div>
                            <div id="icon-9-0-47" data-char="\precapprox" title="\precapprox"></div>
                            <div id="icon-9-0-48" data-char="\bumpeq" title="\bumpeq"></div>
                            <div id="icon-9-0-49" data-char="\Bumpeq" title="\Bumpeq"></div>
                            <div id="icon-9-0-50" data-char="\shortmid" title="\shortmid"></div>
                            <div id="icon-9-0-51" data-char="\shortparallel" title="\shortparallel"></div>
                            <div id="icon-9-0-52" data-char="\between" title="\between"></div>
                            <div id="icon-9-0-53" data-char="\pitchfork" title="\pitchfork"></div>
                            <div id="icon-9-0-54" data-char="\varpropto" title="\varpropto"></div>
                            <div id="icon-9-0-55" data-char="\backepsilon" title="\backepsilon"></div>
                        </div>
                    </div>
                </div>
                <div id="tab10" class="tab-pane fade">
                    <div id="pan-10" class="pan fix" style="height: 74px;">
                        <div id="subPan-10-0" class="subPan fix lastSubPan" style="height: 100%;">
                            <div id="icon-10-0-0" data-char="\nless" title="\nless"></div>
                            <div id="icon-10-0-1" data-char="\ngtr" title="\ngtr"></div>
                            <div id="icon-10-0-2" data-char="\nleq" title="\nleq"></div>
                            <div id="icon-10-0-3" data-char="\ngeq" title="\ngeq"></div>
                            <div id="icon-10-0-4" data-char="\nleqslant" title="\nleqslant"></div>
                            <div id="icon-10-0-5" data-char="\ngeqslant" title="\ngeqslant"></div>
                            <div id="icon-10-0-6" data-char="\nleqq" title="\nleqq"></div>
                            <div id="icon-10-0-7" data-char="\ngeqq" title="\ngeqq"></div>
                            <div id="icon-10-0-8" data-char="\lneq" title="\lneq"></div>
                            <div id="icon-10-0-9" data-char="\gneq" title="\gneq"></div>
                            <div id="icon-10-0-10" data-char="\npreceq" title="\npreceq"></div>
                            <div id="icon-10-0-11" data-char="\nsucceq" title="\nsucceq"></div>
                            <div id="icon-10-0-12" data-char="\precneqq" title="\precneqq"></div>
                            <div id="icon-10-0-13" data-char="\succneqq" title="\succneqq"></div>
                            <div id="icon-10-0-14" data-char="\precnsim" title="\precnsim"></div>
                            <div id="icon-10-0-15" data-char="\succnsim" title="\succnsim"></div>
                            <div id="icon-10-0-16" data-char="\precnapprox" title="\precnapprox"></div>
                            <div id="icon-10-0-17" data-char="\succnapprox" title="\succnapprox"></div>
                            <div id="icon-10-0-18" data-char="\nsim" title="\nsim"></div>
                            <div id="icon-10-0-19" data-char="\ncong" title="\ncong"></div>
                            <div id="icon-10-0-20" data-char="\ntrianglelefteq" title="\ntrianglelefteq"></div>
                            <div id="icon-10-0-21" data-char="\ntrianglerighteq"
                                 title="\ntrianglerighteq"></div>
                            <div id="icon-10-0-22" data-char="\nsubseteq" title="\nsubseteq"></div>
                            <div id="icon-10-0-23" data-char="\nsupseteq" title="\nsupseteq"></div>
                            <div id="icon-10-0-24" data-char="\nsubseteqq" title="\nsubseteqq"></div>
                            <div id="icon-10-0-25" data-char="\nsupseteqq" title="\nsupseteqq"></div>
                            <div id="icon-10-0-26" data-char="\subsetneq" title="\subsetneq"></div>
                            <div id="icon-10-0-27" data-char="\lneqq" title="\lneqq"></div>
                            <div id="icon-10-0-28" data-char="\gneqq" title="\gneqq"></div>
                            <div id="icon-10-0-29" data-char="\lvertneqq" title="\lvertneqq"></div>
                            <div id="icon-10-0-30" data-char="\gvertneqq" title="\gvertneqq"></div>
                            <div id="icon-10-0-31" data-char="\lnsim" title="\lnsim"></div>
                            <div id="icon-10-0-32" data-char="\gnsim" title="\gnsim"></div>
                            <div id="icon-10-0-33" data-char="\lnapprox" title="\lnapprox"></div>
                            <div id="icon-10-0-34" data-char="\gnapprox" title="\gnapprox"></div>
                            <div id="icon-10-0-35" data-char="\nprec" title="\nprec"></div>
                            <div id="icon-10-0-36" data-char="\nsucc" title="\nsucc"></div>
                            <div id="icon-10-0-37" data-char="\nshortmid" title="\nshortmid"></div>
                            <div id="icon-10-0-38" data-char="\nshortparallel" title="\nshortparallel"></div>
                            <div id="icon-10-0-39" data-char="\nmid" title="\nmid"></div>
                            <div id="icon-10-0-40" data-char="\nparallel" title="\nparallel"></div>
                            <div id="icon-10-0-41" data-char="\nvdash" title="\nvdash"></div>
                            <div id="icon-10-0-42" data-char="\nvDash" title="\nvDash"></div>
                            <div id="icon-10-0-43" data-char="\nVdash" title="\nVdash"></div>
                            <div id="icon-10-0-44" data-char="\nVDash" title="\nVDash"></div>
                            <div id="icon-10-0-45" data-char="\ntriangleleft" title="\ntriangleleft"></div>
                            <div id="icon-10-0-46" data-char="\ntriangleright" title="\ntriangleright"></div>
                            <div id="icon-10-0-47" data-char="\supsetneq" title="\supsetneq"></div>
                            <div id="icon-10-0-48" data-char="\varsubsetneq" title="\varsubsetneq"></div>
                            <div id="icon-10-0-49" data-char="\varsupsetneq" title="\varsupsetneq"></div>
                            <div id="icon-10-0-50" data-char="\varsubsetneqq" title="\varsubsetneqq"></div>
                            <div id="icon-10-0-51" data-char="\varsupsetneqq" title="\varsupsetneqq"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="main">
            <!--<div id="editor">
                <textarea id="latexInput">\int^{n}_{n=20}{n*3}</textarea>
                <textarea id="latexInput">\lim_{x\to\infty}{a-b}</textarea>
                <textarea id="latexInput">a+{b-c}</textarea>
                <textarea id="latexInput">\int{\sum ab} a</textarea>
                <textarea id="latexInput">a^2+b^2=c^2</textarea>
                <textarea id="latexInput">a+b+c-d</textarea>
                <textarea id="latexInput">a+b+{c+d}^2+acd</textarea>
                <textarea id="latexInput">\sqrt[n]{ab}=\sqrt[n]{a}\cdot\sqrt[n]{b}</textarea>
                <textarea id="latexInput">\left [ (a+b-c) \right ]</textarea>
                <textarea id="latexInput">e=\lim _{n\to \infty }\left(1+\frac{1233}{n}\right)</textarea>
                <textarea id="latexInput" class="form-control">\mathcal{A}</textarea>
            </div>-->
            <div id="main"></div>
            <div id="container"></div>
            <!--<ui-raised-button primary label="保存为 png 图片（支持多行）" @click="downloadPng" />-->
            <button id="downloadBtn" class="btn btn-primary">保存为 png 图片（支持多行）</button>
        </div>
        <ui-article class="article">
            <h2>使用说明</h2>
            <p>一个可视化 LaTeX 编辑器。</p>
        </ui-article>
    </my-page>
</template>

<script>
    const kf = window.kf
    const $ = window.$
    const CodeMirror = window.CodeMirror
    const latexParser2 = window.latexParser2

    export default {
        data () {
            return {}
        },
        mounted() {
            this.init()
        },
        methods: {
            init() {
                /*
                 toolbar.loadToolBar();
                 $(".subPan div").click(toolbar.selectIconCallback);
                 */
                latexParser2.parserInit()
                latexParser2.initDownload('#downloadBtn')
                let latexEditor = CodeMirror(document.getElementById('main'), {
                    lineNumbers: true,
                    styleActiveLine: true,
                    mode: 'text/x-stex',
                    lineWrapping: true,
                    autofocus: true
                })
                window.latexEditor = latexEditor
                // latexEditor.setValue('122')
                $(document).on('click', '[data-char]', function () {
                    let $this = $(this)
                    latexEditor.replaceSelection($this.data('char'))
                })
                let Parser = kf.Parser
                let Assembly = kf.Assembly
                let latexParser = Parser.use('latex')
                kf.ResourceManager.ready(function (Formula) {
                    let formula = new Formula(document.getElementById('container'), {
                            fontsize: 50
                        })
                    let assembly = new Assembly(formula)

                    document.onkeydown = function (e) {
                        if (e.ctrlKey && e.keyCode === 83) {
                            e.preventDefault()
                            parse()
                        }
                    }
                    function parse() {
                        let value = latexEditor.getValue()
                        let parseResult = latexParser.parse(value)
                        assembly.regenerateBy(parseResult)
                    }
                    latexEditor.on('change', function (Editor, changes) {
                        parse()
                        /*
                         while (changes) {
                         Editor1.replaceRange(changes.text.join('\n'), changes.from, changes.to)
                         changes = changes.next
                         }
                         */
                    })
                }, {
                    path: './resource/'
                })
            },
            downloadPng() {
            }
        }
    }
</script>

<style scoped>
</style>
