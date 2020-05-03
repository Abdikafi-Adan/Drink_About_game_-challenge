describe("My whatCanIDrink function", function() {
    beforeEach(function() {
        drink = new whatCanIDrink();
    });
    
    describe("Checks age", function() {
        it("should exist", function() {
            expect(whatCanIDrink).toBeDefined();
        });
        
        it("should return drink toddy when called as whatCanIDrink(13)", function() {
            let result = whatCanIDrink(13)
            expect(result).toBe("Drink Toddy");
        });
        
        
        it("should return drink coke when called as whatCanIDrink(16)", function() {
            let result = whatCanIDrink(16)
            expect(result).toBe("Drink Coke");
        });
        
        it("should return drink beer when called as whatCanIDrink(18)", function() {
            let result = whatCanIDrink(18)
            expect(result).toBe("Drink Beer");
        });
        
        it("should return drink beer when called as whatCanIDrink(20)", function() {
            let result = whatCanIDrink(20)
            expect(result).toBe("Drink Beer");
        }); 
        
        it("should return drink whisky when called as whatCanIDrink(32)", function() {
            let result = whatCanIDrink(32)
            expect(result).toBe("Drink Whisky");
        });
        
        it("should be unable to return a drink when called as whatCanIDrink(140)", function() {
            let result = whatCanIDrink(140)
            expect(result).toBe("Sorry. I can’t tell what drink because that age is incorrect!");
        });
        
        it("should contain Drink when called as whatCanIDrink(17)", function() {
            let result = whatCanIDrink(10).indexOf("Drink");
            expect(result).not.toEqual(-1);
        });
    });
});