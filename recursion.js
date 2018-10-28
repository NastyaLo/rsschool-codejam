const reminder = [];

function tree(treeObj) {
  if (treeObj.left && treeObj.right) {
    tree(treeObj.left);
    tree(treeObj.right);
    return [treeObj.left.value, treeObj.right.value];
  }
  reminder.push(treeObj.value);
}

module.exports = function recursion(treeObj) {
  const result = [];

  result.push([treeObj.value]);
  result.push(tree(treeObj)); 
  result.push(reminder);

  return result;
};
