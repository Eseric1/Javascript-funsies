//Functions for basicFunctions.html
        
        function addNumbers() {
            var firstNumber = parseFloat(document.getElementById("num1").value);
            var secondNumber = parseFloat(document.getElementById("num2").value);
            var sum = firstNumber +  secondNumber;
            
            alert("The sum is: " + sum);    
        }
        
    
        // add the rest of your functions below...

        function subtractNumbers() {
            var firstNumber = parseFloat(document.getElementById("num1").value);
            var secondNumber = parseFloat(document.getElementById("num2").value);
            var sum = firstNumber -  secondNumber;

            alert('The sum is:' + difference);
        }

        function clearNumbers() {
            document.getElementById("num1").value = "";
            document.getElementById("num2").value = "";
          }
        
        function computeTotal() {
            var appCost = parseFloat(document.getElementById("app").value);
            var foodCost = parseFloat(document.getElementById("food").value);
            var drinkCost = parseFloat(document.getElementById("drink").value);
            var tipPct = parseFloat(document.getElementById("tip").value);

            var subtotal = appCost + foodCost + drinkCost;
            var tipAmount = subtotal * tipPct / 100;
            var total = subtotal + tipAmount;

            alert("The total is: $" + total.toFixed(2));
        }

        function computeCost() {
            var widgetCost = parseFloat(document.getElementById("widget").value);
            var quantity = parseInt(document.getElementById("quantity").value);

            var cost = widgetCost * quantity;

            alert("The cost is: $" + cost.toFixed(2));
}