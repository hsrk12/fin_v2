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

    constructor($groupID: number, $group_name: string, $date_created: Date) {
		this.groupID = $groupID;
		this.group_name = $group_name;
		this.date_created = $date_created;
	}
    

  
}