export interface Guitar {
    id: number;
    name: string;
    image: string;
    description: string;
    price: number
}

export interface CartItem extends Guitar{
    id: number;
    name: string;
    image: string;
    description: string;
    price: number
    cantida: number
}