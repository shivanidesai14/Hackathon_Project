export class product_detail_one{
    constructor( public product_id: Number,
    public product_name: String,
    public product_price: number,
    public product_color: String,
    public product_warranty: Number,
    public product_specification: String,
    public fk_category_id: Number,
    public product_img: String,
    public counts:Number){
        
    }
}