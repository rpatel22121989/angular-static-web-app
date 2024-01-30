module.exports = async function (context, req) {
    try {
        context.log('JavaScript HTTP trigger function processed a request.');
        context.log('req.query::: ' + req.query);
        context.log('req.body::: ' + req.body);
        const name = (req.query && req.query.name) || (req.body && req.body.name);
        context.log('name::: ' + name);
        const responseMessage = name
            ? "Hello, " + name + ". This HTTP triggered function executed successfully."
            : "This HTTP triggered function executed successfully. Pass a name in the query string or in the request body for a personalized response.";
        // context.res = {
        //     // status: 200, /* Defaults to 200 */
        //     body: responseMessage
        // };
        context.res.json({
            text: responseMessage // 'Hello from the API'
        });
    }
    catch (error) {
        context.log('Error:: ', error);
    }
}