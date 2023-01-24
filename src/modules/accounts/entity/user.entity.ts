export class User {

  /**
   * @param id
   * @param name 
   * @param role 
   * @param email 
   * @param password 
   */  
  constructor(
    public id: number,
    public name: string,
    public role: 'ADMIN' | 'CUSTOMER' | 'USER_CUSTOMERR' | 'USER',
    public email: string,
    public password?: string
  ) {}
  
}
