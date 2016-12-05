var searchIndex = {};
searchIndex["tokio_proto"] = {"doc":"This library provides a toolkit for rapid protocol development and usage,\nworking with the rest of the Tokio stack.","items":[[3,"TcpClient","tokio_proto","Builds client connections to external services.",null,null],[3,"TcpServer","","A builder for TCP servers.",null,null],[0,"pipeline","","Pipelined RPC protocols.",null,null],[3,"Pipeline","tokio_proto::pipeline","A marker used to flag protocols as being pipelined RPC.",null,null],[8,"ClientProto","","A pipelined client protocol.",null,null],[16,"Request","","Request messages.",0,null],[16,"Response","","Response messages.",0,null],[16,"Error","","Errors produced by the service.",0,null],[16,"Transport","","The message transport, which works with I/O objects of type `T`.",0,null],[16,"BindTransport","","A future for initializing a transport from an I/O object.",0,null],[10,"bind_transport","","Build a transport from the given I/O object, using `self` for any\nconfiguration.",0,null],[8,"ServerProto","","A pipelined server protocol.",null,null],[16,"Request","","Request messages.",1,null],[16,"Response","","Response messages.",1,null],[16,"Error","","Errors produced by the service.",1,null],[16,"Transport","","The message transport, which works with I/O objects of type `T`.",1,null],[16,"BindTransport","","A future for initializing a transport from an I/O object.",1,null],[10,"bind_transport","","Build a transport from the given I/O object, using `self` for any\nconfiguration.",1,null],[0,"multiplex","tokio_proto","Multiplexed RPC protocols.",null,null],[3,"Multiplex","tokio_proto::multiplex","A marker used to flag protocols as being multiplexed RPC.",null,null],[6,"RequestId","","Identifies a request / response thread",null,null],[8,"ClientProto","","An multiplexed client protocol.",null,null],[16,"Request","","Request messages.",2,null],[16,"Response","","Response messages.",2,null],[16,"Error","","Errors produced by the service.",2,null],[16,"Transport","","The message transport, which usually take `T` as a parameter.",2,null],[16,"BindTransport","","A future for initializing a transport from an I/O object.",2,null],[10,"bind_transport","","Build a transport from the given I/O object, using `self` for any\nconfiguration.",2,null],[8,"ServerProto","","An multiplexed server protocol.",null,null],[16,"Request","","Request messages.",3,null],[16,"Response","","Response messages.",3,null],[16,"Error","","Errors produced by the service.",3,null],[16,"Transport","","The message transport, which usually take `T` as a parameter.",3,null],[16,"BindTransport","","A future for initializing a transport from an I/O object.",3,null],[10,"bind_transport","","Build a transport from the given I/O object, using `self` for any\nconfiguration.",3,null],[0,"streaming","tokio_proto","Streaming protocols.",null,null],[3,"Body","tokio_proto::streaming","Body stream",null,null],[4,"Message","","Message sent and received from a multiplexed service",null,null],[13,"WithoutBody","","Has no associated streaming body",4,null],[13,"WithBody","","Has associated streaming body",4,null],[0,"pipeline","","Pipelined, streaming protocols.",null,null],[3,"StreamingPipeline","tokio_proto::streaming::pipeline","A marker used to flag protocols as being streaming and pipelined.",null,null],[4,"Frame","","A pipelined protocol frame",null,null],[13,"Message","","Either a request or a response",5,null],[12,"message","tokio_proto::streaming::pipeline::Frame","The message value",5,null],[12,"body","","Set to true when body frames will follow",5,null],[13,"Body","tokio_proto::streaming::pipeline","Body frame. None indicates that the body is done streaming.",5,null],[12,"chunk","tokio_proto::streaming::pipeline::Frame","Body chunk. Setting to `None` indicates that the body is done\nstreaming and there will be no further body frames sent with the\ngiven request ID.",5,null],[13,"Error","tokio_proto::streaming::pipeline","Error",5,null],[12,"error","tokio_proto::streaming::pipeline::Frame","Error value",5,null],[11,"fmt","tokio_proto::streaming::pipeline","",5,null],[11,"clone","","",5,null],[11,"unwrap_msg","","Unwraps a frame, yielding the content of the `Message`.",5,null],[11,"unwrap_body","","Unwraps a frame, yielding the content of the `Body`.",5,null],[11,"unwrap_err","","Unwraps a frame, yielding the content of the `Error`.",5,null],[0,"advanced","","Provides the substrate for implementing pipelined, streaming protocols.",null,null],[3,"Pipeline","tokio_proto::streaming::pipeline::advanced","Provides protocol pipelining functionality in a generic way over clients\nand servers. Used internally by `pipeline::Client` and `pipeline::Server`.",null,null],[6,"PipelineMessage","","Message used to communicate through the multiplex dispatch",null,null],[8,"Dispatch","","Dispatch messages from the transport to the service",null,null],[16,"Io","","Type of underlying I/O object",6,null],[16,"In","","Message written to transport",6,null],[16,"BodyIn","","Body written to transport",6,null],[16,"Out","","Messages read from the transport",6,null],[16,"BodyOut","","Outbound body frame",6,null],[16,"Error","","Transport error",6,null],[16,"Stream","","Body stream written to transport",6,null],[16,"Transport","","Transport type",6,null],[10,"transport","","Mutable reference to the transport",6,null],[10,"dispatch","","Process an out message",6,null],[10,"poll","","Poll the next completed message",6,null],[10,"has_in_flight","","RPC currently in flight\nTODO: Get rid of",6,null],[11,"new","","Create a new pipeline `Pipeline` dispatcher with the given service and\ntransport",7,{"inputs":[{"name":"t"}],"output":{"name":"pipeline"}}],[11,"poll","","",7,null],[8,"ClientProto","tokio_proto::streaming::pipeline","A streaming, pipelined client protocol.",null,null],[16,"Request","","The type of request headers.",8,null],[16,"RequestBody","","The type of request body chunks.",8,null],[16,"Response","","The type of response headers.",8,null],[16,"ResponseBody","","The type of response body chunks.",8,null],[16,"Error","","The type of error frames.",8,null],[16,"Transport","","The frame transport, which usually take `T` as a parameter.",8,null],[16,"BindTransport","","A future for initializing a transport from an I/O object.",8,null],[10,"bind_transport","","Build a transport from the given I/O object, using `self` for any\nconfiguration.",8,null],[8,"ServerProto","","A streaming, pipelined server protocol.",null,null],[16,"Request","","Request headers.",9,null],[16,"RequestBody","","Request body chunks.",9,null],[16,"Response","","Response headers.",9,null],[16,"ResponseBody","","Response body chunks.",9,null],[16,"Error","","Errors, which are used both for error frames and for the service itself.",9,null],[16,"Transport","","The frame transport, which usually take `T` as a parameter.",9,null],[16,"BindTransport","","A future for initializing a transport from an I/O object.",9,null],[10,"bind_transport","","Build a transport from the given I/O object, using `self` for any\nconfiguration.",9,null],[8,"Transport","","Additional transport details relevant to streaming, pipelined protocols.",null,null],[11,"tick","","Allow the transport to do miscellaneous work (e.g., sending ping-pong\nmessages) that is not directly connected to sending or receiving frames.",10,null],[11,"cancel","","Cancel interest in the current stream",10,null],[0,"multiplex","tokio_proto::streaming","Pipelined, multiplexed protocols.",null,null],[3,"StreamingMultiplex","tokio_proto::streaming::multiplex","A marker used to flag protocols as being streaming and multiplexed.",null,null],[4,"Frame","","A multiplexed protocol frame",null,null],[13,"Message","","Either a request or a response.",11,null],[12,"id","tokio_proto::streaming::multiplex::Frame","Message exchange identifier",11,null],[12,"message","","The message value",11,null],[12,"body","","Set to true when body frames will follow with the same request ID.",11,null],[12,"solo","","Set to `true` when this message does not have a pair in the other\ndirection",11,null],[13,"Body","tokio_proto::streaming::multiplex","Body frame.",11,null],[12,"id","tokio_proto::streaming::multiplex::Frame","Message exchange identifier",11,null],[12,"chunk","","Body chunk. Setting to `None` indicates that the body is done\nstreaming and there will be no further body frames sent with the\ngiven request ID.",11,null],[13,"Error","tokio_proto::streaming::multiplex","Error",11,null],[12,"id","tokio_proto::streaming::multiplex::Frame","Message exchange identifier",11,null],[12,"error","","Error value",11,null],[11,"fmt","tokio_proto::streaming::multiplex","",11,null],[11,"clone","","",11,null],[11,"request_id","","Return the request ID associated with the frame.",11,null],[11,"unwrap_msg","","Unwraps a frame, yielding the content of the `Message`.",11,null],[11,"unwrap_body","","Unwraps a frame, yielding the content of the `Body`.",11,null],[11,"unwrap_err","","Unwraps a frame, yielding the content of the `Error`.",11,null],[0,"advanced","","Provides the substrate for implementing multiplexed, streaming protocols.",null,null],[3,"Multiplex","tokio_proto::streaming::multiplex::advanced","Task that drives multiplexed protocols",null,null],[3,"MultiplexMessage","","Message used to communicate through the multiplex dispatch",null,null],[12,"id","","Request ID",12,null],[12,"message","","Message",12,null],[12,"solo","","True if message has no pair (request / response)",12,null],[8,"Dispatch","","Dispatch messages from the transport to the service",null,null],[16,"Io","","Type of underlying I/O object",13,null],[16,"In","","Messages written to the transport",13,null],[16,"BodyIn","","Inbound body frame",13,null],[16,"Out","","Messages read from the transport",13,null],[16,"BodyOut","","Outbound body frame",13,null],[16,"Error","","Transport error",13,null],[16,"Stream","","Inbound body stream type",13,null],[16,"Transport","","Transport type",13,null],[10,"transport","","Mutable reference to the transport",13,null],[10,"poll","","Poll the next available message",13,null],[10,"poll_ready","","The `Dispatch` is ready to accept another message",13,null],[10,"dispatch","","Process an out message",13,null],[10,"cancel","","Cancel interest in the exchange identified by RequestId",13,null],[11,"new","","Create a new pipeline `Multiplex` dispatcher with the given service and\ntransport",14,{"inputs":[{"name":"t"}],"output":{"name":"multiplex"}}],[11,"poll","","",14,null],[11,"drop","","",14,null],[11,"new","","Create a new MultiplexMessage",12,{"inputs":[{"name":"requestid"},{"name":"message"}],"output":{"name":"multiplexmessage"}}],[11,"error","","Create a new errored MultiplexMessage",12,{"inputs":[{"name":"requestid"},{"name":"e"}],"output":{"name":"multiplexmessage"}}],[6,"RequestId","tokio_proto::streaming::multiplex","Identifies a request / response thread",null,null],[8,"ClientProto","","A streaming, multiplexed client protocol.",null,null],[16,"Request","","Request headers.",15,null],[16,"RequestBody","","Request body chunks.",15,null],[16,"Response","","Response headers.",15,null],[16,"ResponseBody","","Response body chunks.",15,null],[16,"Error","","Errors, which are used both for error frames and for the service itself.",15,null],[16,"Transport","","The frame transport, which usually take `T` as a parameter.",15,null],[16,"BindTransport","","A future for initializing a transport from an I/O object.",15,null],[10,"bind_transport","","Build a transport from the given I/O object, using `self` for any\nconfiguration.",15,null],[8,"ServerProto","","A streaming, multiplexed server protocol.",null,null],[16,"Request","","Request headers.",16,null],[16,"RequestBody","","Request body chunks.",16,null],[16,"Response","","Response headers.",16,null],[16,"ResponseBody","","Response body chunks.",16,null],[16,"Error","","Errors, which are used both for error frames and for the service itself.",16,null],[16,"Transport","","The frame transport, which usually take `T` as a parameter.",16,null],[16,"BindTransport","","A future for initializing a transport from an I/O object.",16,null],[10,"bind_transport","","Build a transport from the given I/O object, using `self` for any\nconfiguration.",16,null],[8,"Transport","","Additional transport details relevant to streaming, multiplexed protocols.",null,null],[11,"tick","","Allow the transport to do miscellaneous work (e.g., sending ping-pong\nmessages) that is not directly connected to sending or receiving frames.",17,null],[11,"cancel","","Cancel interest in the exchange identified by RequestId",17,null],[11,"poll_write_body","","Tests to see if this I/O object may accept a body frame for the given\nrequest ID",17,null],[11,"dispatching_body","","Invoked before the multiplexer dispatches the body chunk to the body\nstream.",17,null],[11,"empty","tokio_proto::streaming","Return an empty body stream",18,{"inputs":[],"output":{"name":"body"}}],[11,"pair","","Return a body stream with an associated sender half",18,null],[11,"poll","","",18,null],[11,"from","","",18,{"inputs":[{"name":"receiver"}],"output":{"name":"body"}}],[11,"fmt","","",18,null],[11,"get_ref","","Returns a reference to the inner value",4,null],[11,"get_mut","","Returns a mutable reference to the inner value",4,null],[11,"into_inner","","Consumes the value and returns the inner value",4,null],[11,"take_body","","If the `Message` value has an associated body stream, return it. The\noriginal `Message` value will then become a `WithoutBody` variant.",4,null],[11,"eq","","",4,null],[11,"deref","","",4,null],[11,"deref_mut","","",4,null],[11,"fmt","","",4,null],[0,"util","tokio_proto","Utilities for building protocols",null,null],[0,"client_proxy","tokio_proto::util","Utilities for building protocol clients",null,null],[3,"ClientProxy","tokio_proto::util::client_proxy","Client `Service` for pipeline or multiplex protocols",null,null],[3,"Response","","Response future returned from a client",null,null],[5,"pair","","Return a client handle and a handle used to receive requests on",null,{"inputs":[],"output":{"name":"pair"}}],[6,"Pair","","A client / receiver pair",null,null],[6,"Receiver","","Receive requests submitted to the client",null,null],[11,"call","","",19,null],[11,"poll","","",20,null],[11,"new","tokio_proto","Create a builder for the given client protocol.",21,{"inputs":[{"name":"p"}],"output":{"name":"tcpclient"}}],[11,"connect","","Establish a connection to the given address.",21,null],[11,"new","","Starts building a server for the given protocol and address, with\ndefault configuration.",22,{"inputs":[{"name":"p"},{"name":"socketaddr"}],"output":{"name":"tcpserver"}}],[11,"addr","","Set the address for the server.",22,null],[11,"threads","","Set the number of threads running simultaneous event loops (Unix only).",22,null],[11,"serve","","Start up the server, providing the given service on it.",22,null],[8,"BindServer","","Binds a service to an I/O object.",null,null],[16,"ServiceRequest","","The request type for the service.",23,null],[16,"ServiceResponse","","The response type for the service.",23,null],[16,"ServiceError","","The error type for the service.",23,null],[10,"bind_server","","Bind the service.",23,null],[8,"BindClient","","Binds an I/O object as a client of a service.",null,null],[16,"ServiceRequest","","The request type for the service.",24,null],[16,"ServiceResponse","","The response type for the service.",24,null],[16,"ServiceError","","The error type for the service.",24,null],[16,"BindClient","","The bound service.",24,null],[10,"bind_client","","Bind an I/O object as a service.",24,null]],"paths":[[8,"ClientProto"],[8,"ServerProto"],[8,"ClientProto"],[8,"ServerProto"],[4,"Message"],[4,"Frame"],[8,"Dispatch"],[3,"Pipeline"],[8,"ClientProto"],[8,"ServerProto"],[8,"Transport"],[4,"Frame"],[3,"MultiplexMessage"],[8,"Dispatch"],[3,"Multiplex"],[8,"ClientProto"],[8,"ServerProto"],[8,"Transport"],[3,"Body"],[3,"ClientProxy"],[3,"Response"],[3,"TcpClient"],[3,"TcpServer"],[8,"BindServer"],[8,"BindClient"]]};
initSearch(searchIndex);
