extern crate fruently;
use fruently::fluent::Fluent;

use std::collections::HashMap;


fn main() {
    let mut obj: HashMap<String, String> = HashMap::new();
    obj.insert("key".to_string(), "value".to_string());
    let fruently = Fluent::new("0.0.0.0:24224", "test");
    let _ = fruently.post(&obj);
}
