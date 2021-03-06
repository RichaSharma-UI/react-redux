export const ProductsResponse = {
    "products": [
        {
            "id": "PRODUCT_ID_1",
            "name": "Product1",
            "brand" : "Brand1",
            "variant": [
                {
                "type": "default",
                "variationId": "PRODUCT_ID_1_VAR_ID_0",
                "cost": 123,
                "color": "red",
                "months": ["November", "December", "January"]
                },
                {
                    "type": "variation",
                    "variationId": "PRODUCT_ID_1_VAR_ID_1", 
                    "cost": 106,
                    "color": "orange",
                    "months": ["November", "December", "January"]
                    
                }
            ]
        },
        {
            "id": "PRODUCT_ID_2",
            "name": "Product2",
            "brand" : "Brand2",
            "variant": [
                {
                "type": "default",
                "variationId": "PRODUCT_ID_2_VAR_ID_0",
                "cost": 225,
                "color": "green",
                "months": ["January", "Feburary"]
                },
                {
                    "type": "variation",
                    "variationId": "PRODUCT_ID_2_VAR_ID_1", 
                    "cost": 350,
                    "color": "purple",
                    "months": ["January", "Feburary", "March"]
                    
                }
            ]
        },
        {
            "id": "PRODUCT_ID_3",
            "name": "Product3",
            "brand" : "Brand3",
            "variant": [
                {
                "type": "default",
                "variationId": "PRODUCT_ID_3_VAR_ID_0",
                "cost": 220,
                "color": "red",
                "months": ["January", "Feburary", "December"]
                },
                {
                    "type": "variation",
                    "variationId": "PRODUCT_ID_2_VAR_ID_1", 
                    "cost": 320,
                    "color": "Black",
                    "months": ["January", "Feburary", "December"]
                    
                }
            ]
        }
    ]
};