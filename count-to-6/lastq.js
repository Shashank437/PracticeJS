console.log(html`<b>${process.argv[2]} says</b>: "${process.argv[3]}"`);

function html(str,...args){
    var init = str[0];
    var len = args.length;
    for(var i=0;i<len;i++){
       init = init + correct(args[i]) + str[i+1];
    }
    return init
}

function correct(str){
    return str.replace(/&/g,"&amp;").replace(/'/g,"&apos;").replace(/"/g,"&quot;").replace(/</g,"&lt;").replace(/>/g,"&gt;")
}