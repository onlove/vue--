/**
 * Created by DT274 on 2017/4/21.
 */
var vm = new Vue({
    el: '#app',
    data: {
        totelMoney: 0,
        productList: [],
        checkAllFlag: false,
        delFlag: false,
        currentProduct: null
    },
    filters: {
        formatMoney: function (value) {
            return '￥' + value.toFixed(2)
        }
    },
    computed: {
        totalPrice: function () {
            var _this = this;
            var total = 0;
            this.productList.forEach(function(item, index) {
                if(typeof item.checked == 'undefined') {
                    _this.$set(item, 'checked', false)
                }

                if(item.checked) {
                    total += item.productPrice * item.productQuentity
                }
            });
            return total;
        }
    },
    mounted: function (){
        var _this = this;
        this.$nextTick(function () {
            _this.cartView();
        });
    },
    methods: {
        cartView: function(){
            var _this = this;
            this.$http.get('data/cart.json').then(function (res) {
                _this.productList = res.body.result.productList
            });
        },
        changeMenoy: function (product, way){
            if(way > 0) {
                product.productQuentity++;
            }else{
                product.productQuentity--;
                if(product.productQuentity <= 1) {
                    product.productQuentity = 1;
                }
            }
        },
        selectProduct: function (product) {
            if(typeof product.checked == 'undefined') {
               this.$set(product, 'checked', true)
            }else{
                product.checked = !product.checked
            }
        },
        checkAll: function () {
            var _this = this;
            this.checkAllFlag = !this.checkAllFlag;
            this.productList.forEach(function(item, index) {
                if(typeof item.checked == 'undefined') {
                    _this.$set(item, 'checked', _this.checkAllFlag)
                }else{
                    item.checked = _this.checkAllFlag
                }
            })
        },
        cancelCheckAll: function () {
            this.checkAllFlag = false;
            this.productList.forEach(function(item, index) {
                if(typeof item.checked == 'undefined') {
                    _this.$set(item, 'checked', false)
                }else{
                    item.checked = false
                }
            })
        },
        deleteConfirm: function (product) {
            this.delFlag = true;
            this.currentProduct = product;
        },
        deleteProduct: function () {
            var index = this.productList.indexOf(this.currentProduct);
            this.productList.splice(index, 1);
            this.delFlag = false;
        }
    }
});