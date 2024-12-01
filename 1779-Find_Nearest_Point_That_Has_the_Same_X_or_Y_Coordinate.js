/**
 * @param {number} x
 * @param {number} y
 * @param {number[][]} points
 * @return {number}
 */
var nearestValidPoint = function(x, y, points) {
  let list = [];
  for(let i= 0;i<points.length;i++){
     let [x2,y2] = points[i];
     if(x2 == x || y2 == y){
          let dist = Math.abs(x - x2) + Math.abs(y - y2);
          list.push({dist:dist,index:i});
     }
  }
  if(list.length === 0) return -1;
  list.sort((a,b) => a.dist - b.dist);
  return list[0].index; 
};
