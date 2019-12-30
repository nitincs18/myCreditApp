class Authentication {

    /**
     * After authentication done, save a token string in Local Storage
     *
     * @param {string} authToken
     */
    static setTokenToLocalStorage(auth) {
      localStorage.setItem('authToken', auth.authToken);
      localStorage.setItem('userProfile', auth.userProfile);
    }
  
    /**
     * Check if a user is authenticated - check if a token is saved in Local Storage
     *
     * @returns {boolean}
     */
    static isUserAuthenticated() {
      return localStorage.getItem('authToken') !== null && localStorage.getItem('userProfile') !== null;
    }
  
    /**
     * Deauthenticate a user. Remove a token from Local Storage.
     *
     */
    static deauthenticateUser() {
      localStorage.removeItem('authToken');
      localStorage.removeItem('userProfile');
    }
  
    /**
     * Get a token value.
     *
     * @returns {string}
     */
  
    static getTokenFromLocalStorage() {
      return localStorage.getItem('authToken');
    }
  }
  
  export default Authentication;