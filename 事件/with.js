/**
 * Created by jackwang on 2016/12/31.
 */
({
    x: 10,
    foo: function () {
        function bar() {
            console.log(x);
            console.log(y);
            console.log(this.x);
        }
        with (this) {
            var x = 20;
            var y = 30;
            bar.call(this);
        }
    }
}).foo();