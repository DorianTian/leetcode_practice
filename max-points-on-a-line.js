// Input: points = [[1,1],[2,2],[3,3]]
// Output: 3
// Input: points = [[1,1],[3,2],[5,3],[4,1],[2,3],[1,4]]
// Output: 4
/**
 * @param {number[][]} points
 * @return {number}
 */
const maxPoints = function (points) {
  const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b)); // 计算最大公约数

  let maxPointsOnLine = 0;

  for (let i = 0; i < points.length; i++) {
    const slopeMap = new Map(); // 记录斜率及对应点的数量
    let overlap = 0; // 重叠点
    let vertical = 0; // 垂直线

    for (let j = i + 1; j < points.length; j++) {
      const [x1, y1] = points[i];
      const [x2, y2] = points[j];

      if (x1 === x2 && y1 === y2) {
        overlap++; // 重叠点
      } else if (x1 === x2) {
        vertical++; // 垂直线
      } else {
        // 计算斜率的分子和分母
        const dx = x2 - x1;
        const dy = y2 - y1;
        const g = gcd(dx, dy); // 化简斜率
        const slope = `${dy / g}/${dx / g}`; // 化简后的斜率

        slopeMap.set(slope, (slopeMap.get(slope) || 0) + 1);
      }
    }

    // 找到当前基准点的最大共线点数量
    let maxSlopePoints = Math.max(vertical, ...slopeMap.values());
    maxPointsOnLine = Math.max(maxPointsOnLine, maxSlopePoints + overlap + 1); // 加上基准点和重叠点
  }

  return maxPointsOnLine;
};
