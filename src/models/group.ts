import { User } from "./user";

export class Group{

    private groupID: number;
    private group_name: string;
    private date_created: Date;

    /**
     * Getter $groupID
     * @return {number}
     */
	public get $groupID(): number {
		return this.groupID;
	}

    /**
     * Getter $group_name
     * @return {string}
     */
	public get $group_name(): string {
		return this.group_name;
	}

    /**
     * Getter $date_created
     * @return {Date}
     */
	public get $date_created(): Date {
		return this.date_created;
	}

    /**
     * Getter $group_admin
     * @return {User}
     */
	public get $group_admin(): User {
		return this.group_admin;
	}

    /**
     * Setter $groupID
     * @param {number} value
     */
	public set $groupID(value: number) {
		this.groupID = value;
	}

    /**
     * Setter $group_name
     * @param {string} value
     */
	public set $group_name(value: string) {
		this.group_name = value;
	}

    /**
     * Setter $date_created
     * @param {Date} value
     */
	public set $date_created(value: Date) {
		this.date_created = value;
	}

    /**
     * Setter $group_admin
     * @param {User} value
     */
	public set $group_admin(value: User) {
		this.group_admin = value;
	}
    private group_admin: User;

    constructor($groupID: number, $group_name: string, $date_created: Date, $group_admin: User) {
		this.groupID = $groupID;
		this.group_name = $group_name;
		this.date_created = $date_created;
		this.group_admin = $group_admin;
	}
    

  
}