export interface ILog {
    id:         number;
    entityType: string;
    entityId:   number;
    action:     string;
    changedBy:  string;
    changes:    Change[];
    createdAt:  Date;
}

export interface Change {
    column: string;
    before: number | null;
    after:  any[] | boolean | number | string;
}
