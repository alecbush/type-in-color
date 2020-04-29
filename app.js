const app = new Vue({
    el: '#app',
    data: {
        text: '',
        hex: '#000000'
    },
    methods: {
        color: function () {
            let r = b = g = (this.text.length > 0) ? 7 : 0;
            new TextEncoder().encode(this.text)
                .forEach(val => {
                    r = ((b * val) + r) % 256;
                    g = ((r * val) + g) % 256;
                    b = ((g * val) + b) % 256;
                });
            const toHex = val => val.toString(16).padStart(2, '0');
            this.hex = '#' + (toHex(r) + toHex(g) + toHex(b));
        }
    }
});
