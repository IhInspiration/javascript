//检测插件(在IE中无效)
function hasPlugin(name){
    name = name.toLowerCase();
    for(var i = 0; i < navigator.plugins.length; i++){
        if(navigator.plugins[i].name.toLowerCase().indexOf(name) > -1){
            return true;
        }
    }
    return false;
}
console.log(hasPlugin("Flash"));
console.log(hasPlugin("QuickTime"));

//检测IE中的插件
function hasIEPlugin(name){
    try{
        new ActiveXObject(name);
        return true;
    }catch(ex){
        return false;
    }
}
console.log(hasIEPlugin("ShockwaveFlash.ShockwaveFlash"));
console.log(hasIEPlugin("QuickTime.QuickTime"));

//通用方法是分别检测每个插件，如下
//检测FLASH
function hasFlash(){
    var result = hasPlugin("Flash");
    if(!result){
        result = hasIEPlugin("ShockwaveFlash.ShockwaveFlash");
    }
    return result;
}
//检测QuickTime
function hasQuickTime(){
    var result = hasPlugin("QuickTime");
    if(!result){
        result = hasIEPlugin("QuickTime.QuickTime");
    }
    return result;
}
console.log("flash: " + hasFlash());
console.log("QuickTime: " + hasQuickTime());