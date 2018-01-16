import { vec3 } from 'vmath';

class _sphere {
  constructor(cx, cy, cz, r) {
    this.c = vec3.new(cx, cy, cz);
    this.r = r;
  }
}

/**
 * @class sphere
 * @name sphere
 */
let sphere = {};

/**
 * create a new sphere
 *
 * @return {plane}
 */
sphere.create = function () {
  return new _sphere(0, 0, 0, 1);
};

/**
 * create a new sphere
 *
 * @param {Number} cx normal X component
 * @param {Number} cy normal Y component
 * @param {Number} cz normal Z component
 * @param {Number} r the radius r
 * @return {sphere}
 */
sphere.new = function (cx, cy, cz, r) {
  return new _sphere(cx, cy, cz, r);
};

/**
 * clone a new sphere
 *
 * @param {sphere} a the source sphere
 * @return {sphere}
 */
sphere.clone = function (p) {
  return new _sphere(p.c.x, p.c.y, p.c.z, p.r);
};

/**
 * copy the values from one sphere to another
 *
 * @param {sphere} out the receiving sphere
 * @param {sphere} a the source sphere
 * @return {sphere}
 */
sphere.copy = function (out, p) {
  out.c.x = p.c.x;
  out.c.y = p.c.y;
  out.c.z = p.c.z;
  out.r = p.r;

  return out;
};

/**
 * Set the components of a sphere to the given values
 *
 * @param {sphere} out the receiving sphere
 * @param {Number} cx X component of c
 * @param {Number} cy Y component of c
 * @param {Number} cz Z component of c
 * @param {Number} r
 * @returns {sphere} out
 * @function
 */
sphere.set = function (out, cx, cy, cz, r) {
  out.c.x = cx;
  out.c.y = cy;
  out.c.z = cz;
  out.r = r;

  return out;
};

export default sphere;
