export class Validator {
    static correctEmail(email: any) {
        if (email == 'undefined') return false;
        return (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))
    }
    static correctURL(url: any) {
        if (url == 'undefined') return false;
        var urlregex = new RegExp(
            "^(http|https|ftp)\://([a-zA-Z0-9\.\-]+(\:[a-zA-Z0-9\.&amp;%\$\-]+)*@)*((25[0-5]|2[0-4][0-9]|[0-1]{1}[0-9]{2}|[1-9]{1}[0-9]{1}|[1-9])\.(25[0-5]|2[0-4][0-9]|[0-1]{1}[0-9]{2}|[1-9]{1}[0-9]{1}|[1-9]|0)\.(25[0-5]|2[0-4][0-9]|[0-1]{1}[0-9]{2}|[1-9]{1}[0-9]{1}|[1-9]|0)\.(25[0-5]|2[0-4][0-9]|[0-1]{1}[0-9]{2}|[1-9]{1}[0-9]{1}|[0-9])|192.168.232.99|([a-zA-Z0-9\-]+\.)*[a-zA-Z0-9\-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(\:[0-9]+)*(/($|[a-zA-Z0-9\.\,\?\'\\\+&amp;%\$#\=~_\-]+))*$");
        return urlregex.test(url);
    }
    static correctNumber(num: string) {
        if (num == 'undefined') return false;
        return /^\d+$/.test(num);
    }
    static correctFile(file?: File) {
        return file != null && file != undefined;
    }
    static isnull(item: any) {
        return item == 'undefined';
    }
    static correctString(str: string) {
        //console.log(str);
        if (str == 'undefined') return false;
        const regex = new RegExp("^[a-z 0-9]+$", "i")
        return regex.test(str);
    }
    static filledArray(arr: any) {
        if (arr == undefined) return false;
        return arr.length > 0;
    }
}