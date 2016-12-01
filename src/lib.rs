#[repr(C)]
pub struct Point {
    x: f64,
    y: f64,
}

#[no_mangle]
pub extern "C" fn point_new(x: f64, y: f64) -> *const Point {
    Box::into_raw(Box::new(Point { x: x, y: y }))
}

#[no_mangle]
pub extern "C" fn point_get_x(p: *const Point) -> f64 {
    unsafe {
        (*p).x
    }
}

#[no_mangle]
pub extern "C" fn point_get_y(p: *const Point) -> f64 {
    unsafe {
        (*p).y
    }
}
