import Vue from 'vue';
import Vuex from 'vuex';
import { IGoodsState } from './modules/goods';

Vue.use(Vuex);

export interface IRootState {
  goods: IGoodsState;
}

export default new Vuex.Store<IRootState>({});
