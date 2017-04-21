/**
 * Created by DT274 on 2017/4/21.
 */
var vm = new Vue({
    el: '#app',
    data: {
        limitNum: 3,
        addressList: [],
        currentIndex: 0,
        shippingMethod: 1
    },
    computed: {
        filterAddress: function () {
            return this.addressList.slice(0, this.limitNum)
        }
    },
    mounted: function () {
        var _this = this;
        this.$nextTick(function () {
            _this.addressView()
        })
    },
    methods: {
        addressView: function () {
            this.$http.get('data/address.json').then(function(res) {
                this.addressList = res.body.result
            })
        },
        setDefault: function (addressId) {
            this.addressList.forEach(function(address, index) {
                if(address.addressId == addressId) {
                    address.isDefault = true;
                }else{
                    address.isDefault = false;
                }
            })
        }
    }
});