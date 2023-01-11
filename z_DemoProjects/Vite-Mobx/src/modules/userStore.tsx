import { action, observable, runInAction } from "mobx";
import axios from "axios";

interface userType {
  id: number;
  name: string;
  nickname: string;
  gender: string;
  number: string;
}

class userStore {
  @observable list: Array<userType> = [];
  @observable errors = {};
  @observable loading = false;
  @observable redirect = false;

  startAsync = () => {
    this.loading = true;
    this.errors = {};
  };

  @action
  getUserAction = async () => {
    this.startAsync();
    try {
      const { data } = await axios.get("http://localhost:3500/user");
      runInAction(() => {
        this.list = data;
      });
    } catch (err) {
      console.log(err);
    }
  };
}

export default userStore;
