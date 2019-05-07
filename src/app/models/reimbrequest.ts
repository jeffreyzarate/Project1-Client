export class ReimbRequest {
    id: number;
    amount: number;
    submitted: any;
    resolved: any;
    description: string;
    receipt: any;
    authorId: number;
    resolverId: number;
    statusId: number;
    typeId: number;

    constructor(id: number, amount: number, submitted: any, resolved: any, description: string, receipt: any, authorId: number,
                resolverId: number, statusId: number, typeId: number) {
            this.id = id;
            this.amount = amount;
            this.submitted = submitted;
            this.resolved = resolved;
            this.description = description;
            this. receipt = receipt;
            this. authorId = authorId;
            this.resolverId = resolverId;
            this.statusId = statusId;
            this.typeId = typeId;
        }
}

