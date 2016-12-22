var ref = require('ref');
var ffi = require('ffi');

var c_point = ref.types.void;
var c_point_ptr = ref.refType(c_point);

var libpoint = ffi.Library('./target/release/libpoint', {
    'point_new': [c_point_ptr, ['double', 'double']],
    'point_get_x': ['double', [c_point_ptr]],
    'point_get_y': ['double', [c_point_ptr]],
    'point_free': ['void', [c_point_ptr]]
});

var point = function(x, y) {
    "use strict";

    var that = this;

    var p = libpoint.point_new(x, y);

    Object.defineProperty(this, '_point', {
        value: p,
        writeable: false
    });

    return that;
};

point.prototype.x = function() {
    "use strict";
    return libpoint.point_get_x(this._point);
};

point.prototype.y = function() {
    "use strict";
    return libpoint.point_get_y(this._point);
};

point.prototype.free = function() {
    "use strict";
    libpoint.point_free(this._point);
};

module.exports = "point";

if (!module.parent) {
    var p = new point(6.0, 4.0);
    console.log(p.x());
    console.log(p.y());

    // Don't forget to free memory.
    p.free();
}
