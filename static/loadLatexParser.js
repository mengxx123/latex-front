(function(){
    var LatexParser = function(){
        this.formulas = [];
        this.FormulaClass = null;
        this.formulaParser = null;
    }

    /*
    *  function : initDownload 设定download按钮的click事件，根据Kity-formula生成的forulas对象数组生成png图片，使用zipjs压缩后自动下载
    *  param : downloadBtnId -- download按钮的id
    *  return : void
    */
    LatexParser.prototype.initDownload = function(downloadBtnId){

        console.log('init')
        var _self = this;


        $(downloadBtnId).click(function() {

            console.log('click')
            var writer; 

            zip.useWebWorkers = false;
            zip.createWriter(new zip.Data64URIWriter("application/zip"), function(zipWriter) {
                writer = zipWriter;           
            }, onerror);

            var parseIndex = 0;
            parseNext();


            function parseNext(){
                var ele = _self.formulas[parseIndex];
                ele.toPNG(function(dataURI){

                    var temp ={};
                    temp.name = "kity-parser"+ parseIndex + ".png";   
                    temp.content = dataURI;

                    writer.add(temp.name, new zip.Data64URIReader(temp.content), function() {
                        if (++parseIndex >= _self.formulas.length) {
                            writer.close(function(zippedData64) {
                                if($("#iframe-download").length === 0) {
                                    $('<iframe id="iframe-download" name="iframe-download" style="display:none;"></iframe>' +
                                        '<form target="iframe-download" id="form-download" action="download-base64.php" method="post" style="display:none;">' +
                                        '<input name="base64" id="base64" value="" />' +
                                        '<input name="mimetype" value="application/zip" />' +
                                        '<input name="filename" value="latexParser.zip" /></form>').appendTo(document.body);
                                }

                                $("#base64").val(zippedData64);
                                $('#form-download').submit();
                            }); 
                        } else {
                            parseNext();
                        }
                    });
                });
            }

            function onerror(message) {
                console.error(message);
            }
        })
    }

    /*
    *  function : parse 根据传入的value公式字符在assembly上生成svg公式
    *  param : value -- 传入的value字符   assembly--生成的svg公式
    *  return : void
    */
    LatexParser.prototype.parse = function ( value, assembly ) {
            var parseResult = this.formulaParser.parse( value );
            assembly.regenerateBy( parseResult );
    }

    /*
    *  function : getCanvas 根据传入的canvas的id创建或者获取DOM对象，
    *  param : canvasId -- 要创建或获取的canvas的id
    *  return : assembly -- 创建好的空白svg对象
    */
    LatexParser.prototype.getCanvas = function ( canvasId ) {
        
        var $canvas = $("#"+canvasId);
        if( $canvas.length==0 )
            $canvas = $("<div id=\"" + canvasId + "\" class=\"ctr\"></div>").appendTo($("#container"));

        var formula = new FormulaClass( $canvas[0], {
            fontsize: 50
        }),
        assembly = new AssemblyClass( formula );
        this.formulas.push(formula);

        return assembly;
    }

    /*
    *  function : parseInit 初始化解析类，并设定编辑器的change事件
    *  param : canvasId -- 要创建或获取的canvas的id
    *  return : assembly -- 创建好的空白svg对象
    */
    LatexParser.prototype.parserInit = function(){

        var _self = this,
            Parser = kf.Parser,
            Assembly = kf.Assembly
            timer = null;

        this.formulaParser = Parser.use( "latex" );

        kf.ResourceManager.ready( function ( Formula ) {

            latexEditor.on('change', function( editor, change ) {

                if ( timer ) {
                    clearTimeout( timer );
                }
                timer = setTimeout(function(){
                    var i=0;
                    $("#container").empty();
                    _self.formulas=[];
                    
                    latexEditor.eachLine( function( h ){
                        if (h.text.trim()!=="") {
                            svg = _self.getCanvas("ctr"+i);
                            _self.parse( h.text.trim(), svg );
                            i++;
                        }         
                    });

                }, 0);
            });

            this.FormulaClass = Formula;
            this.AssemblyClass = Assembly;
        }, {
            path: "/static/resource/"
        } );
    }

    // function : trim 删除字符串首尾的空格
    String.prototype.trim= function(){  
        return this.replace(/(^\s*)|(\s*$)/g, "");  
    }

    window.latexParser2 = new LatexParser();

})();