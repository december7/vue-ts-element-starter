import store from '@/store';
import { VuexModule, Module, Mutation, Action, getModule } from 'vuex-module-decorators';
import { setToken, removeToken } from '@/utils/auth';

export interface IUserState {
  token: string;
}

@Module({ dynamic: true, store, name: 'user' })
class User extends VuexModule implements IUserState {
  public token = '';

  @Mutation
  public SET_TOKEN(token: string) {
    this.token = token;
  }

  @Action({ commit: 'SET_TOKEN' })
  public async Login(userInfo: { username: string, password: string}) {
    const username = userInfo.username.trim();
    // const { data } = await login(username, userInfo.password);
    const data = { token: '111222' };
    setToken(data.token);
    return data.token;
  }

  @Action({ commit: 'SET_TOKEN' })
  public async LogOut() {
    removeToken();
    return '';
  }
}

export const UserModule = getModule(User);
