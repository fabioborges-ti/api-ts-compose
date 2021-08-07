import startup from "./startup";

let port = 3050;

startup.app.listen(port, function() {
    console.log(`Server is running on port ${port} 🔥`);
});
