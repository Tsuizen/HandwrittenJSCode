// 转换前：
const source = [{
  id: 1,
  pid: 0,
  name: 'body'
}, {
  id: 2,
  pid: 1,
  name: 'title'
}, {
  id: 3,
  pid: 2,
  name: 'div'
}]
// 转换为:
// tree = [{
//   id: 1,
//   pid: 0,
//   name: 'body',
//   children: [{
//     id: 2,
//     pid: 1,
//     name: 'title',
//     children: [{
//       id: 3,
//       pid: 1,
//       name: 'div'
//     }]
//   }
// }]

function listToTree(data) {
  const result = [];

  if (!Array.isArray(data)) {
    return result;
  }

  const map = {};

  data.forEach(item => {
    map[item.id] = item;
  })

  data.forEach(item => {
    let parent = map[item.pid];
    if (parent) {
      (parent.children || (parent.children = [])).push(item);
    } else {
      result.push(item);
    }
  })

  return result;
}

function treeToList(data) {
  const result = [];
  function convert(list) {
    list.forEach(item => {
      result.push(item);
      if (item['children']) {
        convert(item['children']);
        delete item['children'];
      }
    })
  }

  convert(data);
  return result;
}

const tree = listToTree(source);
const list = treeToList(JSON.parse(JSON.stringify(tree)));
console.log(tree);
console.log(list);
