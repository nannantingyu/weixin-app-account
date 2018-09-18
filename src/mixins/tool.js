import wepy from 'wepy'

export default class testMixin extends wepy.mixin {
    data = {
        mixin: 'This is mixin data.'
    }
    methods = {
        tap() {
            this.mixin = 'mixin data was changed'
        }
    }

    onShow() {
        console.log('mixin onShow')
    }

    onLoad() {
        console.log('mixin onLoad')
    }

    time_to_date(time, format) {
        let d = new Date(time);
        let year = d.getFullYear(), month = this.str_pad(d.getMonth()+1, 2, 0), day = this.str_pad(d.getDate(), 2, 0),
            hour = this.str_pad(d.getHours(), 2, 0), minute = this.str_pad(d.getMinutes(), 2 ,0), second = this.str_pad(d.getSeconds(), 2, 0);
        return format.replace("YYYY", year).replace("MM", month).replace("DD", day).replace("hh", hour).replace("mm", minute).replace("ss", second);
    }

    str_pad(str, len, pad, position="left") {
        let strstr = str.toString(), length = strstr.length, pad_str = pad.toString();
        if(len <= length) return strstr;
        pad_str = pad_str.repeat(Math.ceil((len - length) / pad_str.length)).substr(0, len-length);
        return position === 'left'?pad_str + strstr: strstr + pad_str;
    }
}
