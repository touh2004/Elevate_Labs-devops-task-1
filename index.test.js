const server = require('./index');

// This test ensures our server can start up without crashing
test('Server initializes correctly and does not crash', () => {
    expect(server).toBeDefined();
    server.close(); // Clean up and close the server after the test finishes
});