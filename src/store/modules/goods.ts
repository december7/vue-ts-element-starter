import store from '@/store';
import { VuexModule, Module, MutationAction, Mutation, Action, getModule } from 'vuex-module-decorators';
import { getCategoryList, getSkuInfoOfCategory } from '@/api/goods';

export interface IGoodsState {
  categorys: object[];
  skuInfo: string[];
}

@Module({ dynamic: true, store, name: 'goods' })
class Goods extends VuexModule implements IGoodsState {
  public categorys = [];
  public skuInfo = [];

  @MutationAction({ mutate: [ 'categorys' ] })
  public async GetCategoryList() {
    const { data } = await getCategoryList();
    return { categorys: data.CategoryList };
  }

  @MutationAction({ mutate: ['skuInfo'] })
  public async GetSkuInfoOfCategory() {
    const { data } = await getSkuInfoOfCategory();
    return { skuInfo: data };
  }
}

export const GoodsModule = getModule(Goods);
