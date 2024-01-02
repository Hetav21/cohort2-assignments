/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
*/

function objMatch(obj1, obj2){
  if(obj1["category"] === obj2["category"]) return true;

  return false;
}

function calculateTotalSpentByCategtory(transactions) {
  //transaction is a ARRAY of OBJECT
  //and output is also a ARRAY of OBJECT

  const ans = [];

  for(var i = 0; i < transactions.length; i++){
    var temp = transactions[i];
    // ans[temp["category"]] = (ans[temp["category"]] || 0) + temp["price"];
    
    var inputCategory = temp["category"];
    var inputPrice = temp["price"];
    
    var flag = false;

    //finding the category in ans:
    var j = 0;
    for(; j < ans.length; j++){
      if(ans[j]["category"] === inputCategory){
        ans[j]["totalSpent"] += inputPrice;
        flag = true;
        break;        
      }
    } 

    if(flag === true) continue;

    else if(flag === false){
      ans[j] = { category: NaN, totalSpent: undefined};

      ans[j]["category"] = inputCategory;
      ans[j]["totalSpent"] = inputPrice;
    }
  }

  return ans;
}

module.exports = calculateTotalSpentByCategtory;
