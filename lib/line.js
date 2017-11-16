import { vec3 } from 'vmath';

class _line {
  constructor(sx, sy, sz, ex, ey, ez) {
    this.s = vec3.new(sx, sy, sz);
    this.e = vec3.new(ex, ey, ez);
  }
}

/**
 * @class line
 * @name line
 */
let line = {};

/**
 * create a new line
 *
 * @return {line}
 */
line.create = function () {
  return new _line(0, 0, 0, 0, 0, -1);
};

/**
 * create a new line
 *
 * @param {Number} sx start X component
 * @param {Number} sy start Y component
 * @param {Number} sz start Z component
 * @param {Number} ex end X component
 * @param {Number} ey end Y component
 * @param {Number} ez end Z component
 * @return {line}
 */
line.new = function (sx, sy, sz, ex, ey, ez) {
  return new _line(sx, sy, sz, ex, ey, ez);
};

/**
 * Creates a new line initialized with values from an existing line
 *
 * @param {line} a line to clone
 * @returns {line} a new line
 */
line.clone = function (a) {
  return new _line(
    a.s.x, a.s.y, a.s.z,
    a.e.x, a.e.y, a.e.z
  );
};

/**
 * Copy the values from one line to another
 *
 * @param {line} out the receiving line
 * @param {line} a the source line
 * @returns {line} out
 */
line.copy = function (out, a) {
  out.s.x = a.s.x;
  out.s.y = a.s.y;
  out.s.z = a.s.z;
  out.e.x = a.e.x;
  out.e.y = a.e.y;
  out.e.z = a.e.z;

  return out;
};

/**
 * Set the components of a vec3 to the given values
 *
 * @param {vec3} out the receiving vector
 * @param {Number} sx start X component
 * @param {Number} sy start Y component
 * @param {Number} sz start Z component
 * @param {Number} ex end X component
 * @param {Number} ey end Y component
 * @param {Number} ez end Z component
 * @returns {vec3} out
 */
line.set = function (out, sx, sy, sz, ex, ey, ez) {
  out.s.x = sx;
  out.s.y = sy;
  out.s.z = sz;
  out.e.x = ex;
  out.e.y = ey;
  out.e.z = ez;

  return out;
};

/**
 * create line from 2 points
 *
 * @param {line} line
 * @returns {number}
 * @function
 */
line.length = function (line) {
  return vec3.distance(line.s, line.e);
};

export default line;