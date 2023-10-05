'use strict';

// Documentation for writing custom components: https://github.com/oracle/bots-node-sdk/blob/master/CUSTOM_COMPONENT.md
//created by radu marinache
// You can use your favorite http client package to make REST calls, however, the node fetch API is pre-installed with the bots-node-sdk.
// Documentation can be found at https://www.npmjs.com/package/node-fetch
// Un-comment the next line if you want to make REST calls using node-fetch. 
// const fetch = require("node-fetch");
const calculator = require('./functions.js');
module.exports = {
  metadata: () => ({
    name: 'calculator',
    properties: {
      inputStringNumbers: { required: true, type: 'string' },
      operation: { required: true, type: 'string' },
    },
    supportedActions: []
  }),


  /**
   * invoke method gets called when the custom component state is executed in the dialog flow
   * @param {CustomComponentContext} context 
   */
  invoke: async (context) => {
    const { inputStringNumbers } = context.properties();
    const { operation } = context.properties();
    
    let result = "no result"
    let numbers = inputStringNumbers.replace(/"/g, '');
    const numbersArray = numbers.split(",");
    const containsAtLeastTwoNumbers = numbersArray.length >= 2;
    context.logger().info(containsAtLeastTwoNumbers);
    context.logger().info(numbers);
    context.logger().info(inputStringNumbers);
    const numbersArrayNum = numbersArray.map(Number);

    if(containsAtLeastTwoNumbers){

    switch(operation){
      case "addition":
        result = calculator.add(...numbersArrayNum);
        context.logger().info("======addition========");
        context.logger().info(result);
        break;
      case "subtraction":
        result = calculator.subtract(...numbersArrayNum);
        context.logger().info("======calculator========");
        context.logger().info(result);
        break;
      case "division":
        result = calculator.divide(...numbersArrayNum);
        context.logger().info("======division========");
        context.logger().info(result);
        break;
      case "multiplication":
        result = calculator.multiply(...numbersArrayNum);
        context.logger().info("======multiplication========");
        context.logger().info(result);
        break;
      case "arithmeticAverage":
        result = calculator.arithmeticAverage(...numbersArrayNum);
        context.logger().info("======arithmeticAverage========");
        context.logger().info(result);
        break;
      default:
        result = "no operation found"
        break;                 
    };  


    }else{
      result = "Please use more 2 ore more numbers to perform a calculation"  
    };

    context
      .setVariable("user.calculationResult", result.toString())
      .keepTurn(true)
      .transition();  

      
  }
};
