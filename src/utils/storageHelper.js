const storageKey = {
  user: "user",
};

class StorageHelper {
  //new를 통해 불필요한 객체 생성없이(메모리 절약) Static Method를 사용하면은 바로 호출하여 메모리 절약이 가능하다.
  static saveUserInfo(user) {
    localStorage.setItem(storageKey.user, JSON.stringify(user));
  }

  static getUserInfo() {
    const userInfo = localStorage.getItem(storageKey.user);
    return userInfo ? JSON.parse(userInfo) : "";
  }

  static logout() {
    localStorage.removeItem(storageKey.user);
  }

  static isLoggedIn() {
    return localStorage.getItem(storageKey.user) ? true : false;
  }
}

export default StorageHelper;
