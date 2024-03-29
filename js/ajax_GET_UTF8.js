function createXMLHttp() {
    if (typeof XMLHttpRequest != "undefined") { // для браузеров аля Mozilla
        return new XMLHttpRequest();
    } else if (window.ActiveXObject) { // для Internet Explorer (all versions) 
        var aVersions = [
            "MSXML2.XMLHttp.5.0",
            "MSXML2.XMLHttp.4.0",
            "MSXML2.XMLHttp.3.0",
            "MSXML2.XMLHttp",
            "Microsoft.XMLHttp"
        ];
        for (var i = 0; i < aVersions.length; i++) {
            try {
                var oXmlHttp = new ActiveXObject(aVersions[i]);
                return oXmlHttp;
            } catch (oError) {}
        }
        throw new Error("Невозможно создать объект XMLHttp.");
    }
}
 
function getAjax(url, callback) { // функция Ajax GET
    // создаем Объект
    var oXmlHttp = createXMLHttp();
    // подготовка, объявление заголовков
    oXmlHttp.open("GET", url, true);
    oXmlHttp.setRequestHeader("Content-Type", "text/html; charset=utf-8");
    // описание функции, которая будет вызвана, когда придет ответ от сервера
    oXmlHttp.onreadystatechange = function() {
            if (oXmlHttp.readyState == 4) {
                if (oXmlHttp.status == 200) {
                    callback(oXmlHttp.responseText);
                } else {
                    callback(oXmlHttp.statusText);
                }
            }
        }
        // отправка запроса
    oXmlHttp.send(null);
}