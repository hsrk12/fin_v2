import { Group } from "./group";
import { User } from "./user";

export class Expense{
    private expense_id: number;
    private expense_amount: number;
    private expense_group: Group;
    private expense_users: Array<User>;

    constructor($expense_id: number, $expense_amount: number, $expense_group: Group, $expense_users: Array<User>) {
            this.expense_id = $expense_id;
            this.expense_group = $expense_group;
            this.expense_users = $expense_users;
	}
    /**
     * Getter $expense_id
     * @return {number}
     */
	public get $expense_id(): number {
		return this.expense_id;
	}

    /**
     * Getter $expense_amount
     * @return {number}
     */
	public get $expense_amount(): number {
		return this.expense_amount;
	}

    /**
     * Getter $expense_group
     * @return {Group}
     */
	public get $expense_group(): Group {
		return this.expense_group;
	}

    /**
     * Getter $Users
     * @return {Array<User>}
     */
	public get $Users(): Array<User> {
		return this.Users;
	}

    /**
     * Setter $expense_id
     * @param {number} value
     */
	public set $expense_id(value: number) {
		this.expense_id = value;
	}

    /**
     * Setter $expense_amount
     * @param {number} value
     */
	public set $expense_amount(value: number) {
		this.expense_amount = value;
	}

    /**
     * Setter $expense_group
     * @param {Group} value
     */
	public set $expense_group(value: Group) {
		this.expense_group = value;
	}

    /**
     * Setter $Users
     * @param {Array<User>} value
     */
	public set $Users(value: Array<User>) {
		this.Users = value;
	}
    
}