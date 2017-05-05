var searchIndex = {};
searchIndex["fruently"] = {"doc":"`fruently` is a yet another Fluentd logger for Rust.","items":[[0,"fluent","fruently","Send record(s) into Fluentd.",null,null],[3,"Fluent","fruently::fluent","",null,null],[11,"fmt","","",0,null],[11,"clone","","",0,null],[11,"eq","","",0,null],[11,"ne","","",0,null],[11,"new","","Create Fluent type.",0,{"inputs":[{"name":"a"},{"name":"t"}],"output":{"name":"fluent"}}],[11,"new_with_conf","","",0,{"inputs":[{"name":"a"},{"name":"t"},{"name":"retryconf"}],"output":{"name":"fluent"}}],[0,"record","fruently","Implement record manupulation mechanisms.",null,null],[3,"Record","fruently::record","",null,null],[11,"fmt","","",1,null],[11,"clone","","",1,null],[11,"eq","","",1,null],[11,"ne","","",1,null],[11,"new","","",1,{"inputs":[{"name":"string"},{"name":"tm"},{"name":"t"}],"output":{"name":"record"}}],[11,"make_forwardable_json","","",1,null],[11,"serialize","","",1,null],[0,"forwardable","fruently","Implement concrete sending record(s) specifications.",null,null],[0,"json","fruently::forwardable","Send record as forwardable json.",null,null],[11,"post","fruently::fluent","Post record into Fluentd. Without time version.",0,null],[11,"post_with_time","","Post record into Fluentd. With time version.",0,null],[0,"msgpack","fruently::forwardable","Send record as msgpack.",null,null],[11,"post","fruently::fluent","Post record into Fluentd. Without time version.",0,null],[11,"post_with_time","","Post record into Fluentd. With time version.",0,null],[0,"forward","fruently::forwardable","Send records as forward mode.",null,null],[3,"Forward","fruently::forwardable::forward","",null,null],[11,"fmt","","",2,null],[11,"clone","","",2,null],[11,"eq","","",2,null],[11,"ne","","",2,null],[11,"new","","",2,{"inputs":[{"name":"string"},{"name":"vec"}],"output":{"name":"forward"}}],[11,"post","fruently::fluent","Post `Vec&lt;Entry&lt;T&gt;&gt;` into Fluentd.",0,null],[6,"Entry","fruently::forwardable","",null,null],[8,"JsonForwardable","","",null,null],[10,"post","","",3,null],[10,"post_with_time","","",3,null],[8,"MsgpackForwardable","","",null,null],[10,"post","","",4,null],[10,"post_with_time","","",4,null],[8,"Forwardable","","",null,null],[10,"post","","",5,null],[0,"retry_conf","fruently","Retry sending records configuration.",null,null],[3,"RetryConf","fruently::retry_conf","You can calculate retrying interval as the following equation:",null,null],[11,"fmt","","",6,null],[11,"clone","","",6,null],[11,"eq","","",6,null],[11,"ne","","",6,null],[11,"default","","",6,{"inputs":[],"output":{"name":"retryconf"}}],[11,"new","","",6,{"inputs":[],"output":{"name":"retryconf"}}],[11,"max","","",6,null],[11,"multiplier","","",6,null],[11,"store_file","","",6,null],[11,"need_to_store","","",6,null],[11,"store_path","","",6,null],[11,"build","","",6,null],[0,"store_buffer","fruently","Store buffer when failing to send events.",null,null],[5,"maybe_write_record","fruently::store_buffer","Write event buffer into file with TSV format.",null,{"inputs":[{"name":"retryconf"},{"name":"record"},{"name":"fluenterror"}],"output":{"name":"result"}}],[5,"maybe_write_records","","Write events buffer into file with TSV format.",null,{"inputs":[{"name":"retryconf"},{"name":"forward"},{"name":"fluenterror"}],"output":{"name":"result"}}],[0,"error","fruently","Implement error types for fruently crate.",null,null],[4,"FluentError","fruently::error","",null,null],[13,"JsonEncode","","",7,null],[13,"MsgpackEncode","","",7,null],[13,"IO","","",7,null],[13,"Retry","","",7,null],[13,"FileStored","","",7,null],[11,"fmt","","",7,null],[11,"from","","",7,{"inputs":[{"name":"error"}],"output":{"name":"fluenterror"}}],[11,"from","","",7,{"inputs":[{"name":"error"}],"output":{"name":"fluenterror"}}],[11,"from","","",7,{"inputs":[{"name":"retryerror"}],"output":{"name":"fluenterror"}}],[11,"from","","",7,{"inputs":[{"name":"error"}],"output":{"name":"fluenterror"}}]],"paths":[[3,"Fluent"],[3,"Record"],[3,"Forward"],[8,"JsonForwardable"],[8,"MsgpackForwardable"],[8,"Forwardable"],[3,"RetryConf"],[4,"FluentError"]]};
initSearch(searchIndex);