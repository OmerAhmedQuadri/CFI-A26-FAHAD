// / Q No : 39
// / Question: 39. What is the temporal dead zone in JavaScript?

// The temporal dead zone is the time between entering a block of code and declaring a variable using let or const. During this time, the variable exists but cannot be accessed. If you try to use it, JavaScript throws an error.