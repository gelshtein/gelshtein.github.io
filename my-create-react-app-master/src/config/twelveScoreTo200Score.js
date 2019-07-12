import * as R from 'ramda'

const xsYs = [
  [1, 106.0],
  [1.1, 106.6],
  [1.2, 107.2],
  [1.3, 107.8],
  [1.4, 108.4],
  [1.5, 109.0],
  [1.6, 109.6],
  [1.7, 110.2],
  [1.8, 110.8],
  [1.9, 111.4],
  [2, 112.0],
  [2.1, 112.6],
  [2.2, 113.2],
  [2.3, 113.8],
  [2.4, 114.4],
  [2.5, 115.0],
  [2.6, 115.6],
  [2.7, 116.2],
  [2.8, 116.8],
  [2.9, 117.4],
  [3, 118.0],
  [3.1, 118.6],
  [3.2, 119.2],
  [3.3, 119.8],
  [3.4, 120.4],
  [3.5, 121.0],
  [3.6, 121.6],
  [3.7, 122.2],
  [3.8, 122.8],
  [3.9, 123.4],
  [4, 124.0],
  [4.1, 125.0],
  [4.2, 125.9],
  [4.3, 126.9],
  [4.4, 127.8],
  [4.5, 128.8],
  [4.6, 129.7],
  [4.7, 130.7],
  [4.8, 131.6],
  [4.9, 132.6],
  [5, 133.5],
  [5.1, 134.5],
  [5.2, 135.4],
  [5.3, 136.4],
  [5.4, 137.3],
  [5.5, 138.3],
  [5.6, 139.2],
  [5.7, 140.2],
  [5.8, 141.1],
  [5.9, 142.1],
  [6, 143.0],
  [6.1, 144.0],
  [6.2, 144.9],
  [6.3, 145.9],
  [6.4, 146.8],
  [6.5, 147.8],
  [6.6, 148.7],
  [6.7, 149.7],
  [6.8, 150.6],
  [6.9, 151.6],
  [7, 152.5],
  [7.1, 153.5],
  [7.2, 154.4],
  [7.3, 155.4],
  [7.4, 156.3],
  [7.5, 157.3],
  [7.6, 158.2],
  [7.7, 159.2],
  [7.8, 160.1],
  [7.9, 161.1],
  [8, 162.0],
  [8.1, 163.0],
  [8.2, 163.9],
  [8.3, 164.9],
  [8.4, 165.8],
  [8.5, 166.8],
  [8.6, 167.7],
  [8.7, 168.7],
  [8.8, 169.6],
  [8.9, 170.5],
  [9, 171.5],
  [9.1, 172.4],
  [9.2, 173.4],
  [9.3, 174.3],
  [9.4, 175.3],
  [9.5, 176.2],
  [9.6, 177.2],
  [9.7, 178.1],
  [9.8, 179.1],
  [9.9, 180.0],
  [10, 181.0],
  [10.1, 181.9],
  [10.2, 182.9],
  [10.3, 183.8],
  [10.4, 184.8],
  [10.5, 185.7],
  [10.6, 186.7],
  [10.7, 187.6],
  [10.8, 188.6],
  [10.9, 189.5],
  [11, 190.5],
  [11.1, 191.4],
  [11.2, 192.4],
  [11.3, 193.3],
  [11.4, 194.3],
  [11.5, 195.2],
  [11.6, 196.2],
  [11.7, 197.1],
  [11.8, 198.1],
  [11.9, 199.0],
  [12, 200.0],
]

// 12 score to 200 score
function twelveScoreTo200Score(twelveScore) {
  return R.find(R.pathEq([0], twelveScore), xsYs)[1]
}

export default twelveScoreTo200Score