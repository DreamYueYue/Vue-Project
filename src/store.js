import Vuex from 'vuex';
import Vue from 'vue';
Vue.use(Vuex);
var car = JSON.parse(localStorage.getItem('car') || '[]');
const store = new Vuex.Store({
    state: {
        car: car //数据结构:{id:xxx,number:xxx,price:xxx,selected:true or false}
    },
    mutations: {
        addToCar(state, goodsInfo) {
            var flag = false;
            state.car.some(item => {
                if (item.id == goodsInfo.id) {
                    item.number += goodsInfo.number;
                    flag = true;
                    return true;
                }
            });
            if (!flag) {
                state.car.push(goodsInfo);
            }
            // console.log(state.car);
            localStorage.setItem('car', JSON.stringify(state.car));
        },
        updateCar(state, goodsInfo) {
            state.car.some(item => {
                if (item.id === goodsInfo.id) {
                    item.number = goodsInfo.number;
                    return true;
                }
            });
            localStorage.setItem('car', JSON.stringify(state.car));
        },
        deleteCar(state, id) {
            state.car.some((item, index) => {
                if (item.id == id) {
                    state.car.splice(index, 1);
                    return true;
                }
            });
            localStorage.setItem('car', JSON.stringify(state.car));
        },
        updateSelect(state, info) {
            state.car.some(item => {
                if (item.id == info.id) {
                    item.selected = info.selected;
                    return true;
                }
            });
            localStorage.setItem('car', JSON.stringify(state.car));
        }
    },
    getters: {
        getAllNumber(state) {
            var num = 0;
            state.car.forEach(item => {
                num += item.number;
            });
            return num;
        },
        getSelectInfo(state) {
            var info = {
                count: 0,
                account: 0
            };
            state.car.forEach(item => {
                if (item.selected) {
                    info.count += item.number;
                    info.account += (item.price * item.number);
                }
            });
            return info;
        }
    }
});
export default store;