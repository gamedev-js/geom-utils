import { vec3 } from 'vmath';

class _plane {
  constructor(nx, ny, nz, d) {
    this.n = vec3.new(nx, ny, nz);
    this.d = d;
  }
}

/**
 * @class plane
 * @name plane
 */
let plane = {};

/**
 * create a new plane
 *
 * @return {plane}
 */
plane.create = function () {
  return new _plane(0, 1, 0, 0);
};

/**
 * create a new plane
 *
 * @param {Number} nx normal X component
 * @param {Number} ny normal Y component
 * @param {Number} nz normal Z component
 * @param {Number} d the constant d
 * @return {plane}
 */
plane.new = function (nx, ny, nz, d) {
  return new _plane(nx, ny, nz, d);
};

/**
 * clone a new plane
 *
 * @param {plane} a the source plane
 * @return {plane}
 */
plane.clone = function (p) {
  return new _plane(p.n.x, p.n.y, p.n.z, p.d);
};

/**
 * copy the values from one plane to another
 *
 * @param {plane} out the receiving plane
 * @param {plane} a the source plane
 * @return {plane}
 */
plane.copy = function (out, p) {
  out.n.x = p.n.x;
  out.n.y = p.n.y;
  out.n.z = p.n.z;
  out.d = p.d;

  return out;
};

/**
 * Set the components of a plane to the given values
 *
 * @param {plane} out the receiving plane
 * @param {Number} nx X component of n
 * @param {Number} ny Y component of n
 * @param {Number} nz Z component of n
 * @param {Number} d
 * @returns {plane} out
 * @function
 */
plane.set = function (out, nx, ny, nz, d) {
  out.n.x = nx;
  out.n.y = ny;
  out.n.z = nz;
  out.d = d;

  return out;
};

/**
 * create plane from normal and point
 *
 * @param {plane} out the receiving plane
 * @param {vec3} normal
 * @param {vec3} point
 * @returns {plane} out
 * @function
 */
plane.fromNormalAndPoint = function (out, normal, point) {
  vec3.copy(out.n, normal);
  out.d = vec3.dot(normal, point);

  return out;
};

/**
 * create plane from 3 points
 *
 * @param {plane} out the receiving plane
 * @param {vec3} a
 * @param {vec3} b
 * @param {vec3} c
 * @returns {plane} out
 * @function
 */
plane.fromPoints = (function () {
  let v1 = vec3.create();
  let v2 = vec3.create();

  return function (out, a, b, c) {
    vec3.sub(v1, b, a);
    vec3.sub(v2, c, a);

    vec3.normalize(out.n, vec3.cross(out.n, v1, v2));
    out.d = vec3.dot(out.n, a);

    return out;
  };
})();

export default plane;
