import { Group } from "./group";

export class Expense{


    /**
     * Getter $expense_group_id
     * @return {number}
     */
	public get $expense_group_id(): number {
		return this.expense_group_id;
	}

    /**
     * Getter $group
     * @return {Group}
     */
	public get $group(): Group {
		return this.group;
	}

    /**
     * Setter $expense_group_id
     * @param {number} value
     */
	public set $expense_group_id(value: number) {
		this.expense_group_id = value;
	}

    /**
     * Setter $group
     * @param {Group} value
     */
	public set $group(value: Group) {
		this.group = value;
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

    private expense_id: number;
    private expense_amount: number;
    private expense_group_id: number;
    private group: Group;
    
    constructor($expense_id: number, $expense_amount: number, $expense_group_id: number, $group: Group) {
            this.expense_id = $expense_id;
            this.expense_amount = $expense_amount;
            this.expense_group_id = $expense_group_id;
            this.group = $group;    
	}
    
}