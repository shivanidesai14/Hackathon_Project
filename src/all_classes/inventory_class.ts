export class inventory{
    constructor(
        public fk_retailer_id:Number,
        public product_id:Number,
        public stock:number,
        public price:number,
        public delivery:number,
        public retailer_id:Number,
        public retailer_email:String,
        public retailer_password:String,
        public retailer_name:String,
        public retailer_city_id:Number,
        public retailer_mobile:Number,
        public retailer_address:String,
        public retailer_pincode:Number
    ){
        
    }
}