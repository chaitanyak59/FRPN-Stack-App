interface NamedItem {
    id: number;
    name: string;
}

export interface TodoItem extends NamedItem {
    description: string;
    created_at: string;
}