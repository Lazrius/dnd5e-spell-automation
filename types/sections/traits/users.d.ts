declare interface UserTrait {
    _users: any;
    _addUser(inUser: any): void;
    _addUser(inUser: any): void;
    _deleteUser(inUser: any): void;
    _deleteUser(inUser: any): void;
    /**
     * Causes section to be executed only locally, and not push to other connected clients.
     *
     * @param {boolean} inLocally
     * @returns this
     */
    locally(inLocally?: boolean): this;
    /**
     * Causes section to be executed only locally, and not push to other connected clients.
     *
     * @param {boolean} inLocally
     * @returns this
     */
    locally(inLocally?: boolean): this;
    /**
     * Causes the section to be executed for only a set of users.
     *
     * @param {string|array} inUsers
     * @returns this
     */
    forUsers(inUsers: string | any[]): this;
    /**
     * Causes the section to be executed for only a set of users.
     *
     * @param {string|array} inUsers
     * @returns this
     */
    forUsers(inUsers: string | any[]): this;
}

