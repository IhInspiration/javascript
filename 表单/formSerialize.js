/**
 * Created by jackwang on 2017/1/2.
 */
function serialize(form){
    var parts = [],
        i,
        len,
        j,
        optLen,
        option,
        optValue;

    for(i = 0, len = form.elements.length; i < len; i++){
        field = form.elements[i];

        switch(field.type){
            case "select-one":
            case "select-multiple":
                if(field.name.length){
                    for(j = 0, optLen = field.options.length; j < optLen; j++){
                        option = field.options[j];
                        if(option.selected){
                            optValue = "";
                            if(option.hasAttribute){
                                optValue = (option.hasAttribute("value") ? option.value: option.text);
                            }else{
                                //specified查明是否已经规定某个属性
                                optValue = (option.attributes["value"].specified ? option.value : option.text);
                            }
                            parts.push(encodeURIComponent(filed.name) + "=" + encodeURIComponent(optValue));
                        }
                    }
                }
                break;

            case undefined: //字段集(fieldset)
            case "file": //文件输入
            case "submit": //提交按钮
            case "reset": //重置按钮
            case "button": //自定义按钮
                break;

            case "radio": //单选按钮
            case "checkbox": //复选框
                if(!field.checked){
                    break;
                }

            default:
                if(field.name.length){
                    parts.push(encodeURIComponent(field.name) + "=" + encodeURIComponent(field.value));
                }
        }
    }
    return parts.join("&");
}