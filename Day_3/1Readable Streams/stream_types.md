Node.js streams allow you to work with data efficiently by processing it incrementally, without loading the
entire data into memory. Streams are particularly useful for handling large datasets or continuous data flows.
There are four types of streams in Node.js

# 1. Readable streams

Readable streams are used to read data from the source, such as reading files or receiving HTTP request.

# 2. Writable streams

Writable streams are used to write data to a destination, such as writing to a file or sending HTTP response.

# 3. Duplex streams

Duplex streams are streams that can both read and write data. These are useful for situations like network
communication, where you both send and receive data.

# 4. Transform streams

Transform streams are a special type of duplex stream where the output is a transformation of the input. They
modify or process the data as it passes through the stream, s compressing or encrypting data.