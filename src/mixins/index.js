import Vue from 'vue';
const mixins = {
    methods: {
        formatNumber(a) {
            const formatter = new Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: 'USD',
            })
            var h = formatter.format(a).split('$')
            return ' $ ' + ' ' + h[1];
        },
        formatPercent(a) {
            const formatter = new Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: 'USD',
            })
            var h = formatter.format(a).split('$')
            return ' ' + h[1] + ' % ';
        },
        formatNumberSin(a) {
            const formatter = new Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: 'USD',
            })
            if (a <= 0) {

                var h = formatter.format(a).split('$')
                return '-' + ' ' + h[1];
            } else {

                var h = formatter.format(a).split('$')
                return '' + ' ' + h[1];
            }
        },
        reformatDate(d) {

            if (d) {
                var da = new Date(d);
                var day = da.getDate();
                var month = da.getMonth() + 1;
                var year = da.getFullYear();
                let dayfinal;
                let monthfinal;
                if (day < 10) {
                    dayfinal = '0' + day
                } else {
                    dayfinal = day
                }
                if (month < 10) {
                    monthfinal = '0' + month
                } else {
                    monthfinal = month
                }
                return dayfinal + '-' + monthfinal + '-' + year;
            }

        },
        getColor(calories) {
            if (calories == "Cancelado") return "red";
            else if (calories == "No confirmado") return "orange";
            else if (calories == "Confirmado") return "green";
        },
        getStatus(calories) {
            if (calories == "Activo") return "green";
            else if (calories == "No activo") return "red";
        },
        getColoriCON(pago_op) {
            if (pago_op != "Sin pago") return "green";
            else return "gray";
        },
        getColorIcon(b) {
            if (b <= 0) return "orange";
            else return "green";
        },
        getEstatus(calories) {
            if (calories == "Pagado") return "green";
            else if (calories == "Pendiente") return "#ffbe00";
        },
    }
}
Vue.mixin(mixins);